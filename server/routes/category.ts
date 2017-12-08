// const express = require('express');
import * as express from 'express';
import * as uuidv1 from 'uuid/v1';
import * as promise from 'bluebird';
import { Config } from '../library/configs';
import { Permission } from '../library/permissions';
import { Database } from '../library/databases';

const categoryRouter: express.Router = express.Router();

const conn: any = new Config();
const permission: any = new Permission();
const db: any = new Database();

categoryRouter.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.log('perrmission : ', permission.readToken(req));
  if (permission.isLogin(req)) {
    next();
  }else {
    res.json({
      status: true,
      nologin: true,
      error: 'Access Denied'
    });
  }
});

categoryRouter.get('/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const category_id: any = req.params.id;
  const connection: any = conn.init();
  const category: any = req.body;
  let $scope: any;
  // let sql = 'SELECT id, cate_name, cate_description, '' as product_qty FROM category WHERE status = \'Y\'';
  // let where = [];
  const category_list: any = function(){
    return new promise((resolve, reject) => {
      let where: any = {status: 'Y'};
      if (category_id !== 'all') {
        where = {
          status: 'Y',
          id: category_id
        };
      }
      const gets: any = {
        fields: '*, \'\' as product_qty ',
        table: 'category',
        where: where
      };
      db.SelectAll(connection, gets, (data) => {
          $scope = data;
          resolve(data);
        }, (error) => {
          console.log(error);
          reject(error);
      });
    });
  };

  category_list()
  .then(function(data){
    res.json({
      status: true,
      data: data
    });
  })
  .catch(function(error){
    res.json({
      status: false,
      error: error
    });
  });
});

categoryRouter.post('/getcategorybyid', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const connection: any = conn.init();
  const category: any = req.body;
  let $scope: any;

  const getcategorybyid: any = function(){
    return new promise((resolve, reject) => {
      const where: any = {id: category.cate_id};
      const gets: any = {
        fields: ['*'],
        table:  'category',
        where:  where
      };
      db.SelectRow(connection, gets,
        (data) => {
          $scope = data;
          resolve(data);
        }, (error) => {
          console.log(error);
          reject(error);
      });
    });
  };

  getcategorybyid()
  .then(function(data){
    // console.log("return data = ", data);
    // console.log("scope data = ", $scope);
    res.json({
      status: true,
      data: data
    });
  }).catch(function(e){
    res.json({
      status: false,
      error: e
    });
  });
});

categoryRouter.post('/savecategory', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const connection: any = conn.init();
  const category: any = req.body;
  let $scope: any = '';
  const transection = function(){
    console.log('transection');
    return new promise((resolve, reject) => {
      db.BeginTransaction(connection, (success) => {
        resolve(success);
      }, (error) => {
        reject(error);
      });
    });
  };

  const savecetegory: any = function() {
    return new promise((resolve, reject) => {
      if (category.cateId !== 'create') {
        const data = {
          query: {
            cate_name: category.cateName,
            cate_description: category.cateDescription,
            status: category.selectedStatus,
            cover_pic: category.coverPic
          },
          table: 'category',
          where: {
            id: category.cateId
          }
        };

        db.Update(connection, data, (success) => {
          // console.log("Update categort success = ", success);
          resolve(success);
          $scope = success;
        }, (error) => {
          // console.log("Error Update Category = ", error);
          reject(error);
        });
      } else {
        console.log('insert');
          const data = {
          query: {
            cate_name: category.cateName,
            cate_description: category.cateDescription,
            status: category.selectedStatus,
            cover_pic: category.coverPic,
            created_by: permission.getID(req),
            updated_by: permission.getID(req),
            uuid: uuidv1()
          },
          table: 'category'
        };
        // sql = "INSERT INTO category SET ? ";
        db.Insert(connection, data, (success) => {
          // console.log("Insert Category success = ", success);
          $scope = success;
          resolve(success);
        }, (error) => {
          // console.log("Noooooooooooooo!!! Insert Category Error !!! = ", error);
          reject(error);
        });
      }
    });
  };


  transection()
  .then(savecetegory)
  .then(function(d){
    return new promise((resolve, reject) => {
      db.Commit(connection, (success) => {
        console.log('commited !!');
        res.json({
          status: true,
          data: $scope
        });
        resolve('commited');
      }, (error) => {
        reject(error);
      });
    });
  }).catch(function(e){
    console.log('Roll back error is', e);
    db.Rollback(connection, (roll) => {
      res.json({
        status: false,
        error: e
      });
    });
  });
});

export { categoryRouter };
