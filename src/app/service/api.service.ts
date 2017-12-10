import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ResponseData } from './constructor-variable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {
    private prod = false;
    public api = '';
    public upl = '';
    public img = 'http://localhost:8800/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

/** GET data from the server */
  get(url: string): Observable<ResponseData> {
    return this.http
      .get<ResponseData>( this.api + url)
      .pipe(
        tap((res: ResponseData) => this.access(res)),
        catchError(this.handleError<ResponseData>('GetApi'))
      );
    }

    //////// Save methods //////////

  /** POST: add a new hero to the server */
    post(url: string, param: any): Observable<ResponseData> {
      return this.http
      .post<ResponseData>(this.api + url, JSON.stringify(param), httpOptions)
      .pipe(
        tap((res: ResponseData) => this.access(res)),
        catchError(this.handleError<ResponseData>('PostApi'))
      );
    }

    put(url: string, param: any): Observable<ResponseData> {
      return this.http
      .put<ResponseData>(this.api + url, JSON.stringify(param), httpOptions)
      .pipe(
        tap((res: ResponseData) => this.access(res)),
        catchError(this.handleError<ResponseData>('PostApi'))
      );
    }

    public access(res: any) {
        if (res.nologin) {
            console.log('go to new login.');
            this.router.navigate(['/system-login']);
            return res || { };
        }else {
            // console.log("body = ", body);
            return res || { };
        }
    }

  /**
	 * Handle Http operation that failed.
   * Let the app continue.
	 * @param operation
	 * @param result
	 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
