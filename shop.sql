-- --------------------------------------------------------
-- Host:                         13.59.164.106
-- Server version:               5.7.19 - MySQL Community Server (GPL)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for project_jphp
DROP DATABASE IF EXISTS `project_jphp`;
CREATE DATABASE IF NOT EXISTS `project_jphp` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `project_jphp`;

-- Dumping structure for view project_jphp.autocomplete_product
DROP VIEW IF EXISTS `autocomplete_product`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `autocomplete_product` (
	`id` INT(11) NOT NULL,
	`name` VARCHAR(111) NOT NULL COLLATE 'utf8_unicode_ci'
) ENGINE=MyISAM;

-- Dumping structure for table project_jphp.category
DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `cate_description` text COLLATE utf8_unicode_ci,
  `product_qty` int(11) DEFAULT NULL,
  `cover_pic` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `uuid` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) NOT NULL DEFAULT '0',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Index 2` (`uuid`(100))
) ENGINE=InnoDB AUTO_INCREMENT=255 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table project_jphp.category: ~10 rows (approximately)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`id`, `cate_name`, `cate_description`, `product_qty`, `cover_pic`, `status`, `uuid`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
	(242, 'I test', 'add pic', NULL, 'public/images/category-img/2017-12-12_02-22-54_cat1.jpg', 'Y', '4b2f4f10-df0d-11e7-a6df-2fdc8b7d4b3c', '2017-12-12 14:23:04', 6, '2017-12-12 14:43:33', 6),
	(243, 'Test', 'sssss', NULL, 'public/images/category-img/2017-12-12_02-46-42_cat1.jpg', 'Y', '9c9746c0-df10-11e7-a6df-2fdc8b7d4b3c', '2017-12-12 14:46:49', 6, '2017-12-24 12:47:09', 6),
	(244, 'Fix width img me.', 'sccel nang eiei jes', NULL, 'public/images/category-img/2017-12-12_10-20-11_2017-03-18 02.20.01 1.jpg', 'Y', 'b9fc0040-df4f-11e7-a001-bd66542c6e3a', '2017-12-12 22:18:37', 6, '2017-12-12 22:20:17', 6),
	(245, 'add new config', 'change config', NULL, 'public/images/empty-image.png', 'Y', 'd5181c20-dff8-11e7-931c-b79925ad5e14', '2017-12-13 18:29:07', 6, '2017-12-13 18:29:54', 6),
	(246, 'add by new config', '', NULL, 'public/images/empty-image.png', 'Y', '9f1c5730-e011-11e7-873a-9906327d8d3b', '2017-12-13 21:26:34', 6, '2017-12-13 21:26:34', 6),
	(247, 'Ok netion', 'long', NULL, 'public/images/empty-image.png', 'Y', 'd91c8730-e015-11e7-9f8a-c5bfd5708cff', '2017-12-13 21:56:50', 6, '2017-12-13 21:56:50', 6),
	(248, 'add', 'add new one', NULL, 'public/images/category-img/2017-12-21_09-29-34_cat1.jpg', 'Y', '62e47040-e65b-11e7-85cc-fdf32478ac85', '2017-12-21 21:29:44', 1, '2017-12-21 21:29:44', 1),
	(249, 'jew', 'test', NULL, 'public/images/empty-image.png', 'Y', '72ed0d80-e65b-11e7-85cc-fdf32478ac85', '2017-12-21 21:30:11', 1, '2017-12-21 21:30:11', 1),
	(250, 'ขึ้นสิ', '', NULL, 'public/images/empty-image.png', 'Y', 'a605cd60-e65b-11e7-85cc-fdf32478ac85', '2017-12-21 21:31:36', 1, '2017-12-21 21:31:36', 1),
	(251, 'Add from mobile', 'Test', NULL, 'public/images/empty-image.png', 'Y', '3630e4b0-e86e-11e7-82db-9df97f8cc337', '2017-12-24 12:49:31', 1, '2017-12-24 12:49:31', 1),
	(252, 'Jdjfj', '', NULL, 'public/images/empty-image.png', 'Y', '4552a460-e86e-11e7-82db-9df97f8cc337', '2017-12-24 12:49:56', 1, '2017-12-24 12:49:56', 1),
	(253, 'Move', '', NULL, 'public/images/empty-image.png', 'Y', '55620d80-e870-11e7-b548-230099f8dc79', '2017-12-24 13:04:42', 1, '2017-12-24 13:04:42', 1),
	(254, 'Test style', 'test new style', NULL, 'public/images/category-img/2017-12-30_02-46-37_download.jpg', 'Y', '967132a0-ed35-11e7-88e0-83f8f0281abd', '2017-12-30 14:46:47', 6, '2017-12-30 14:46:47', 6);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

-- Dumping structure for table project_jphp.lot_in
DROP TABLE IF EXISTS `lot_in`;
CREATE TABLE IF NOT EXISTS `lot_in` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `lot_in` bigint(20) DEFAULT NULL,
  `uuid` longtext COLLATE utf8_unicode_ci,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table project_jphp.lot_in: ~6 rows (approximately)
/*!40000 ALTER TABLE `lot_in` DISABLE KEYS */;
INSERT INTO `lot_in` (`id`, `product_id`, `lot_in`, `uuid`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
	(1, 26, 15, 'e26ba200-b0c5-11e7-b9dd-bb410d0ff105', '2017-10-14 16:56:01', NULL, '2017-10-14 16:56:01', NULL),
	(2, 29, 50, 'e9840f20-b177-11e7-935d-9d6ea99246a9', '2017-10-15 14:10:23', NULL, '2017-10-15 14:10:23', NULL),
	(3, 26, 12, 'bbb93d30-b187-11e7-8ad4-b3dc63226b07', '2017-10-15 16:03:38', NULL, '2017-10-15 16:03:38', NULL),
	(4, 26, 3, 'f2f39340-b187-11e7-8ad4-b3dc63226b07', '2017-10-15 16:05:11', NULL, '2017-10-15 16:05:11', NULL),
	(5, 27, 2, 'f8e37ba0-b199-11e7-a331-650e6195e20c', '2017-10-15 18:14:12', NULL, '2017-10-15 18:14:12', NULL),
	(6, 35, 50, 'afe9e610-b2f6-11e7-b475-77e95c9f969b', '2017-10-17 11:50:24', NULL, '2017-10-17 11:50:24', NULL);
/*!40000 ALTER TABLE `lot_in` ENABLE KEYS */;

-- Dumping structure for table project_jphp.menu
DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `page` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `icon` text CHARACTER SET utf8,
  `module` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `outlets_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `outlets` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `param` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table project_jphp.menu: ~4 rows (approximately)
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` (`id`, `name`, `page`, `icon`, `module`, `outlets_name`, `outlets`, `param`) VALUES
	(1, 'Home', 'system', 'fas fa-home', '/manager', 'm', 'dashboard', NULL),
	(2, 'Category', 'system', 'fas fa-th-large', '/manager', 'm', 'category', NULL),
	(3, 'Product', 'system', 'fab fa-product-hunt', '/manager', 'm', 'product', NULL),
	(4, 'Stock', 'system', 'fas fa-archive', '/manager', 'm', 'stack_in', NULL);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

-- Dumping structure for table project_jphp.order
DROP TABLE IF EXISTS `order`;
CREATE TABLE IF NOT EXISTS `order` (
  `id` int(11) NOT NULL,
  `cname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `clastname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `addr` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `district` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subdistrict` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `postcode` int(11) DEFAULT NULL,
  `cphone` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cemail` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `totalprice` double DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table project_jphp.order: ~0 rows (approximately)
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;

-- Dumping structure for table project_jphp.product
DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL DEFAULT '1',
  `code` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'P0001',
  `product_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `product_description` text COLLATE utf8_unicode_ci,
  `status` enum('Y','N') CHARACTER SET utf8 NOT NULL DEFAULT 'Y',
  `product_cost` bigint(20) NOT NULL DEFAULT '0',
  `product_price` bigint(20) NOT NULL DEFAULT '0',
  `recommend` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `rec_row` int(11) NOT NULL DEFAULT '0',
  `uuid` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) NOT NULL DEFAULT '0',
  `updated_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Index 2` (`uuid`(100),`code`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table project_jphp.product: ~6 rows (approximately)
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`id`, `category_id`, `code`, `product_name`, `product_description`, `status`, `product_cost`, `product_price`, `recommend`, `rec_row`, `uuid`, `created_date`, `created_by`, `updated_date`, `updated_by`) VALUES
	(26, 10, 'P00001', 'กบยางลายจุด', 'กบยางลายจุดรับรองคุณภาพ เรามีรีวิวสินค้ามากมาย ผลิตจากยางคุณภาพ ราคาไม่แพง\nกบลายนี้ล่อเหยื่อที่มีขนาดใหญ่ได้เป็นอย่างดี\nไม่พอใจเราไม่คืนเงินเพราะเราจน\nซื้อแล้วซื้อเลยไม่รับคืนครับผม', 'Y', 15, 80, 'N', 0, 'd7031921-3fbb-11e7-93f0-1867b02605c0', '2017-05-23 20:29:25', 6, '2017-10-14 16:12:19', 6),
	(27, 10, 'P00002', 'กบสาดเลือด', 'กบลายสาดเลือด\nลายนี้หายากครับ\nทำยากแต่รับรองคุณภาพครับผม ^^', 'Y', 100, 801, 'Y', 0, '9b99aab2-3fc1-11e7-93f0-1867b02605c0', '2017-05-23 21:10:42', 6, '2017-10-14 16:14:07', 6),
	(28, 10, 'P00003', 'กบแก้คัน', 'กบทรงแก้คัน สีสันสวยงาม\nใช้งานได้ดี ยางมีคุณภาพไม่ขาดง่าย\nราคาเป็นมิตร', 'Y', 15, 80, 'Y', 2, '7623fcd3-3fc2-11e7-93f0-1867b02605c0', '2017-05-23 21:16:49', 6, '2017-10-14 16:14:07', 6),
	(29, 10, 'P00004', 'กบวัดกระจาย', 'สินค้าตัวใหม่สวยสดใส่ต้องลอง รับประกันคุณภาพ ราคาไม่แพง ได้ปลาตัวใหญ่แน่นอน ครับผม', 'Y', 15, 80, 'N', 0, 'a03d3660-3fc2-11e7-93f0-1867b02605c0', '2017-05-23 21:18:00', 6, '2017-10-14 16:31:16', 6),
	(35, 10, 'P00005', 'กบไม้ตัวแรก', 'ตัวนี้ยังไม่มีรูปมาให้ดูครับ แต่ลองดูได้ ดูแมวไปก่อนเนาะ', 'Y', 30, 180, 'N', 0, '81e6db3f-562b-11e7-a699-0242ac120002', '2017-06-22 08:40:07', 6, '2017-10-14 16:30:14', 6);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- Dumping structure for table project_jphp.product_order
DROP TABLE IF EXISTS `product_order`;
CREATE TABLE IF NOT EXISTS `product_order` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `item` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table project_jphp.product_order: ~0 rows (approximately)
/*!40000 ALTER TABLE `product_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_order` ENABLE KEYS */;

-- Dumping structure for table project_jphp.product_pic
DROP TABLE IF EXISTS `product_pic`;
CREATE TABLE IF NOT EXISTS `product_pic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL DEFAULT '0',
  `productpic_name` varchar(150) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `productpic_path` varchar(150) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `productpic_type` varchar(150) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `productpic_size` int(11) NOT NULL DEFAULT '0',
  `cover` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `status` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `uuid` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_by` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int(11) NOT NULL DEFAULT '0',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid` (`uuid`(100))
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table project_jphp.product_pic: ~59 rows (approximately)
/*!40000 ALTER TABLE `product_pic` DISABLE KEYS */;
INSERT INTO `product_pic` (`id`, `product_id`, `productpic_name`, `productpic_path`, `productpic_type`, `productpic_size`, `cover`, `status`, `uuid`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
	(100, 0, '12521045_1165132126851728_1719504070_n.jpg', 'public/images/product-img/20170605073000am_12521045_1165132126851728_1719504070_n.jpg', 'image/jpeg', 48309, 'N', 'Y', '05072b4c-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:30:00', 0, '2017-07-29 00:32:31'),
	(101, 26, '12521045_1165132126851728_1719504070_n.jpg', 'public/images/product-img/20170605073231am_12521045_1165132126851728_1719504070_n.jpg', 'image/jpeg', 48309, 'Y', 'Y', '5f1821b9-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:32:31', 0, '2017-10-14 16:12:19'),
	(102, 26, '14546652_1299935063392818_61225089516961792_n.jpg', 'public/images/product-img/20170605073234am_14546652_1299935063392818_61225089516961792_n.jpg', 'image/jpeg', 49313, 'N', 'Y', '61170c6e-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:32:35', 0, '2017-10-14 16:12:19'),
	(103, 26, '14546653_1129514337129863_888066711301914624_n.jpg', 'public/images/product-img/20170605073238am_14546653_1129514337129863_888066711301914624_n.jpg', 'image/jpeg', 50407, 'N', 'Y', '631193fe-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:32:38', 0, '2017-10-14 16:12:19'),
	(104, 26, '14546971_1205688339492804_2559577024087719936_n.jpg', 'public/images/product-img/20170605073242am_14546971_1205688339492804_2559577024087719936_n.jpg', 'image/jpeg', 48373, 'N', 'Y', '6592cb78-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:32:42', 0, '2017-10-14 16:12:19'),
	(105, 26, '14546996_1376065605744818_6238710211012460544_n.jpg', 'public/images/product-img/20170605073247am_14546996_1376065605744818_6238710211012460544_n.jpg', 'image/jpeg', 49946, 'N', 'Y', '68d41423-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:32:47', 0, '2017-10-14 16:12:19'),
	(106, 26, '14547022_1306007669418908_6912761253165268992_n.jpg', 'public/images/product-img/20170605073254am_14547022_1306007669418908_6912761253165268992_n.jpg', 'image/jpeg', 48439, 'N', 'Y', '6cdbb76f-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:32:54', 0, '2017-10-14 16:12:19'),
	(107, 26, '14547025_1286113224752504_5067565705629532160_n.jpg', 'public/images/product-img/20170605073301am_14547025_1286113224752504_5067565705629532160_n.jpg', 'image/jpeg', 51038, 'N', 'Y', '70c2cb68-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:33:01', 0, '2017-10-14 16:12:19'),
	(109, 26, '14750872_1279224742098890_6041011513462882304_n.jpg', 'public/images/product-img/20170605073315am_14750872_1279224742098890_6041011513462882304_n.jpg', 'image/jpeg', 51517, 'N', 'Y', '793ce515-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:33:15', 0, '2017-10-14 16:12:19'),
	(113, 28, '15729381_1607619272588333_2390009443203940352_n.jpg', 'public/images/product-img/20170605073517am_15729381_1607619272588333_2390009443203940352_n.jpg', 'image/jpeg', 38796, 'Y', 'Y', 'c1a5e1a0-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:35:17', 0, '2017-10-14 16:14:06'),
	(114, 28, '15729489_1133272966770846_7790129901012516864_n.jpg', 'public/images/product-img/20170605073520am_15729489_1133272966770846_7790129901012516864_n.jpg', 'image/jpeg', 34699, 'N', 'Y', 'c386bd79-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:35:20', 0, '2017-10-14 16:14:06'),
	(115, 28, '16175035_1372592912811000_9215124084738752512_n.jpg', 'public/images/product-img/20170605073524am_16175035_1372592912811000_9215124084738752512_n.jpg', 'image/jpeg', 40633, 'N', 'Y', 'c640ba11-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:35:24', 0, '2017-10-14 16:14:06'),
	(116, 28, '16175636_1290077997752004_1302611581707747328_n.jpg', 'public/images/product-img/20170605073529am_16175636_1290077997752004_1302611581707747328_n.jpg', 'image/jpeg', 35400, 'N', 'Y', 'c924e20d-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:35:29', 0, '2017-10-14 16:14:06'),
	(117, 28, '16175054_1326127310795892_2478462778541604864_n.jpg', 'public/images/product-img/20170605073543am_16175054_1326127310795892_2478462778541604864_n.jpg', 'image/jpeg', 35548, 'N', 'Y', 'd166c075-49b0-11e7-bab9-1867b05430d2', 0, '2017-06-05 12:35:43', 0, '2017-10-14 16:14:06'),
	(119, 0, '12600805_1025718510817022_1732530515_n.jpg', 'public/images/product-img/20170609055633pm_12600805_1025718510817022_1732530515_n.jpg', 'image/jpeg', 38592, 'N', 'Y', '648cc1f6-4c59-11e7-ac95-1867b05430d2', 0, '2017-06-09 22:56:33', 0, '2017-07-29 00:32:31'),
	(120, 0, '12384990_1388474084503438_612937110_n.jpg', 'public/images/product-img/20170609060022pm_12384990_1388474084503438_612937110_n.jpg', 'image/jpeg', 31065, 'N', 'Y', 'ed32a051-4c59-11e7-ac95-1867b05430d2', 0, '2017-06-09 23:00:22', 0, '2017-07-29 00:32:31'),
	(121, 0, '16175636_1290077997752004_1302611581707747328_n.jpg', 'public/images/product-img/20170612083903am_16175636_1290077997752004_1302611581707747328_n.jpg', 'image/jpeg', 35400, 'N', 'Y', 'bc393822-4dd3-11e7-ac95-1867b05430d2', 0, '2017-06-12 13:39:03', 0, '2017-07-29 00:32:31'),
	(122, 0, '16175054_1326127310795892_2478462778541604864_n.jpg', 'public/images/product-img/20170612084041am_16175054_1326127310795892_2478462778541604864_n.jpg', 'image/jpeg', 35548, 'N', 'Y', 'f6cc7c6f-4dd3-11e7-ac95-1867b05430d2', 0, '2017-06-12 13:40:41', 0, '2017-07-29 00:32:31'),
	(123, 30, '120175398.jpg', 'public/images/product-img/20170621042146am_120175398.jpg', 'image/jpeg', 310000, 'N', 'Y', 'f3ec1516-55bb-11e7-a699-0242ac120002', 0, '2017-06-21 04:21:46', 0, '2017-07-29 00:32:31'),
	(124, 30, 'Capture.PNG', 'public/images/product-img/20170621042152am_Capture.PNG', 'image/png', 39154, 'N', 'Y', 'f74b42b5-55bb-11e7-a699-0242ac120002', 0, '2017-06-21 04:21:52', 0, '2017-07-29 00:32:31'),
	(125, 30, 'images.jpg', 'public/images/product-img/20170621042159am_images.jpg', 'image/jpeg', 6235, 'N', 'Y', 'fb6fc381-55bb-11e7-a699-0242ac120002', 0, '2017-06-21 04:21:59', 0, '2017-07-29 00:32:31'),
	(126, 31, '120175398.jpg', 'public/images/product-img/20170621042427am_120175398.jpg', 'image/jpeg', 310000, 'Y', 'Y', '53bba024-55bc-11e7-a699-0242ac120002', 0, '2017-06-21 04:24:27', 0, '2017-07-29 00:32:31'),
	(127, 31, 'Capture2.PNG', 'public/images/product-img/20170621042438am_Capture2.PNG', 'image/png', 24183, 'N', 'Y', '5aa3ab46-55bc-11e7-a699-0242ac120002', 0, '2017-06-21 04:24:38', 0, '2017-07-29 00:32:31'),
	(128, 32, 'Capture2.PNG', 'public/images/product-img/20170621070405am_Capture2.PNG', 'image/png', 24183, 'Y', 'Y', 'a0c44747-55d2-11e7-a699-0242ac120002', 0, '2017-06-21 07:04:05', 0, '2017-07-29 00:32:31'),
	(129, 33, '120175398.jpg', 'public/images/product-img/20170621073853am_120175398.jpg', 'image/jpeg', 310000, 'Y', 'Y', '7d719527-55d7-11e7-a699-0242ac120002', 0, '2017-06-21 07:38:53', 0, '2017-07-29 00:32:31'),
	(130, 33, 'images.jpg', 'public/images/product-img/20170621073859am_images.jpg', 'image/jpeg', 6235, 'N', 'Y', '80eca9a7-55d7-11e7-a699-0242ac120002', 0, '2017-06-21 07:38:59', 0, '2017-07-29 00:32:31'),
	(131, 0, 'images.jpg', 'public/images/product-img/20170621073952am_images.jpg', 'image/jpeg', 6235, 'N', 'Y', 'a0ad3e0a-55d7-11e7-a699-0242ac120002', 0, '2017-06-21 07:39:52', 0, '2017-07-29 00:32:31'),
	(132, 34, 'images.jpg', 'public/images/product-img/20170621074100am_images.jpg', 'image/jpeg', 6235, 'Y', 'Y', 'c93fefb9-55d7-11e7-a699-0242ac120002', 0, '2017-06-21 07:41:00', 0, '2017-07-29 00:32:31'),
	(134, 27, '12384990_1388474084503438_612937110_n.jpg', 'public/images/product-img/20170622083858am_12384990_1388474084503438_612937110_n.jpg', 'image/jpeg', 31065, 'Y', 'Y', '58e5a43c-562b-11e7-a699-0242ac120002', 0, '2017-06-22 08:38:58', 0, '2017-10-08 23:06:04'),
	(135, 29, '12600805_1025718510817022_1732530515_n.jpg', 'public/images/product-img/20170622083926am_12600805_1025718510817022_1732530515_n.jpg', 'image/jpeg', 38592, 'Y', 'Y', '6989f026-562b-11e7-a699-0242ac120002', 0, '2017-06-22 08:39:26', 0, '2017-10-14 16:31:17'),
	(136, 35, 'images.jpg', 'public/images/product-img/20170622084037am_images.jpg', 'image/jpeg', 6235, 'Y', 'Y', '9398ca55-562b-11e7-a699-0242ac120002', 0, '2017-06-22 08:40:37', 0, '2017-10-14 16:30:15'),
	(137, 36, 'DL408_1659_0010228136_FR_AEB.jpg', 'public/images/product-img/20170622084122am_DL408_1659_0010228136_FR_AEB.jpg', 'image/jpeg', 320014, 'Y', 'Y', 'aeb8d7d1-562b-11e7-a699-0242ac120002', 0, '2017-06-22 08:41:22', 0, '2017-07-29 00:32:31'),
	(139, 36, 'D4J2L_0158_0010223054_FR_AEB.jpg', 'public/images/product-img/20170622084219am_D4J2L_0158_0010223054_FR_AEB.jpg', 'image/jpeg', 251646, 'N', 'Y', 'd07874ae-562b-11e7-a699-0242ac120002', 0, '2017-06-22 08:42:19', 0, '2017-07-29 00:32:31'),
	(140, 0, '2017-07-29_09-24-35_IMG_20170716_181531.jpg', 'public/images/product-img/2017-07-29_09-24-35_IMG_20170716_181531.jpg', 'image/jpeg', 1608342, 'N', 'Y', 'a5a1ec50-7469-11e7-8a12-bf5bcbe56e77', 0, '2017-07-29 21:24:36', 0, '2017-07-29 21:24:36'),
	(141, 0, '2017-07-29_09-27-34_IMG_20170716_181406.jpg', 'public/images/product-img/2017-07-29_09-27-34_IMG_20170716_181406.jpg', 'image/jpeg', 1778404, 'N', 'Y', '0fef35e0-746a-11e7-88d7-19e25e54c74f', 0, '2017-07-29 21:27:35', 0, '2017-07-29 21:27:35'),
	(142, 0, '2017-07-29_09-28-56_IMG_20170716_181510.jpg', 'public/images/product-img/2017-07-29_09-28-56_IMG_20170716_181510.jpg', 'image/jpeg', 1729296, 'N', 'Y', '40e8e650-746a-11e7-ab7c-798c41f5b92a', 0, '2017-07-29 21:28:57', 0, '2017-07-29 21:28:57'),
	(143, 0, '2017-07-29_09-31-00_IMG_20170716_181510.jpg', 'public/images/product-img/2017-07-29_09-31-00_IMG_20170716_181510.jpg', 'image/jpeg', 1729296, 'N', 'Y', '8ae79e40-746a-11e7-95fd-e3d12e350e2d', 0, '2017-07-29 21:31:01', 0, '2017-07-29 21:31:01'),
	(144, 0, '2017-07-29_09-31-55_IMG_20170716_181552.jpg', 'public/images/product-img/2017-07-29_09-31-55_IMG_20170716_181552.jpg', 'image/jpeg', 1792477, 'N', 'Y', 'ab864bb0-746a-11e7-88c0-8791a2f91192', 0, '2017-07-29 21:31:56', 0, '2017-07-29 21:31:56'),
	(145, 0, '2017-07-29_09-33-26_IMG_20170716_181531.jpg', 'public/images/product-img/2017-07-29_09-33-26_IMG_20170716_181531.jpg', 'image/jpeg', 1608342, 'N', 'Y', 'e1fdee00-746a-11e7-b288-ddd10c36e38b', 0, '2017-07-29 21:33:27', 0, '2017-07-29 21:33:27'),
	(146, 0, '2017-07-29_09-35-38_IMG_20170716_181406.jpg', 'public/images/product-img/2017-07-29_09-35-38_IMG_20170716_181406.jpg', 'image/jpeg', 1778404, 'N', 'Y', '30ae4720-746b-11e7-8ef9-bff370f935c6', 0, '2017-07-29 21:35:39', 0, '2017-07-29 21:35:39'),
	(147, 0, '2017-07-29_09-35-57_IMG_20170716_181433.jpg', 'public/images/product-img/2017-07-29_09-35-57_IMG_20170716_181433.jpg', 'image/jpeg', 2059852, 'N', 'Y', '3bd580a0-746b-11e7-8ef9-bff370f935c6', 0, '2017-07-29 21:35:58', 0, '2017-07-29 21:35:58'),
	(148, 0, '2017-07-29_09-38-34_IMG_20170716_181510.jpg', 'public/images/product-img/2017-07-29_09-38-34_IMG_20170716_181510.jpg', 'image/jpeg', 1729296, 'N', 'Y', '99a6af10-746b-11e7-924b-85ae24c783ce', 0, '2017-07-29 21:38:35', 0, '2017-07-29 21:38:35'),
	(149, 0, '2017-07-29_09-39-12_IMG_20170716_181510.jpg', 'public/images/product-img/2017-07-29_09-39-12_IMG_20170716_181510.jpg', 'image/jpeg', 1729296, 'N', 'Y', 'b00f12b0-746b-11e7-8856-5dcc70207bc9', 0, '2017-07-29 21:39:13', 0, '2017-07-29 21:39:13'),
	(150, 0, '2017-07-29_10-45-32_IMG_20170716_181638.jpg', 'public/images/product-img/2017-07-29_10-45-32_IMG_20170716_181638.jpg', 'image/jpeg', 1997515, 'N', 'Y', 'f4b488b0-7474-11e7-8856-5dcc70207bc9', 0, '2017-07-29 22:45:33', 0, '2017-07-29 22:45:33'),
	(151, 0, '2017-08-04_03-17-56_Screenshot from 2017-07-12 11-06-50.png', 'public/images/product-img/2017-08-04_03-17-56_Screenshot from 2017-07-12 11-06-50.png', 'image/png', 97973, 'N', 'Y', '6bbb2aa0-78ed-11e7-9942-a3a1bb815781', 0, '2017-08-04 15:17:58', 0, '2017-08-04 15:17:58'),
	(152, 0, '2017-08-04_03-19-37_what-does-it-mean-when-cat-wags-tail.jpg', 'public/images/product-img/2017-08-04_03-19-37_what-does-it-mean-when-cat-wags-tail.jpg', 'image/jpeg', 47966, 'N', 'Y', 'a78ac040-78ed-11e7-be1b-7bdcd8f73ec4', 0, '2017-08-04 15:19:38', 0, '2017-08-04 15:19:38'),
	(153, 0, '2017-08-04_03-19-47_Screenshot from 2017-07-24 10-48-55.png', 'public/images/product-img/2017-08-04_03-19-47_Screenshot from 2017-07-24 10-48-55.png', 'image/png', 47245, 'N', 'Y', 'ada2f650-78ed-11e7-be1b-7bdcd8f73ec4', 0, '2017-08-04 15:19:48', 0, '2017-08-04 15:19:48'),
	(154, 49, '2017-08-04_11-40-46_IMG_20170716_181638.jpg', 'public/images/product-img/2017-08-04_11-40-46_IMG_20170716_181638.jpg', 'image/jpeg', 1997515, 'Y', 'Y', 'aa753330-7933-11e7-851f-a93cc66c4338', 0, '2017-08-04 23:40:47', 0, '2017-08-04 23:57:25'),
	(155, 49, '2017-08-04_11-40-55_IMG_20170716_181531.jpg', 'public/images/product-img/2017-08-04_11-40-55_IMG_20170716_181531.jpg', 'image/jpeg', 1608342, 'N', 'Y', 'af5dc2e0-7933-11e7-851f-a93cc66c4338', 0, '2017-08-04 23:40:55', 0, '2017-08-04 23:57:24'),
	(156, 49, '2017-08-04_11-41-07_IMG_20170716_181552.jpg', 'public/images/product-img/2017-08-04_11-41-07_IMG_20170716_181552.jpg', 'image/jpeg', 1792477, 'N', 'Y', 'b6a02110-7933-11e7-851f-a93cc66c4338', 0, '2017-08-04 23:41:08', 0, '2017-08-04 23:41:18'),
	(157, 50, '2017-08-05_09-38-42_IMG_20170716_181433.jpg', 'public/images/product-img/2017-08-05_09-38-42_IMG_20170716_181433.jpg', 'image/jpeg', 2059852, 'Y', 'Y', 'c746c970-79eb-11e7-b5ca-8ddf18c44905', 0, '2017-08-05 21:38:43', 0, '2017-08-05 21:38:53'),
	(158, 0, '2017-08-05_10-11-57_IMG_20170716_181406.jpg', 'public/images/product-img/2017-08-05_10-11-57_IMG_20170716_181406.jpg', 'image/jpeg', 1778404, 'N', 'Y', '6c10ed10-79f0-11e7-8627-63ba4b325f8b', 0, '2017-08-05 22:11:57', 0, '2017-08-05 22:11:57'),
	(159, 0, '2017-08-05_10-12-57_IMG_20170716_181531.jpg', 'public/images/product-img/2017-08-05_10-12-57_IMG_20170716_181531.jpg', 'image/jpeg', 1608342, 'N', 'Y', '90015d90-79f0-11e7-8627-63ba4b325f8b', 0, '2017-08-05 22:12:58', 0, '2017-08-05 22:12:58'),
	(160, 0, '2017-08-05_10-15-14_IMG_20170716_181552.jpg', 'public/images/product-img/2017-08-05_10-15-14_IMG_20170716_181552.jpg', 'image/jpeg', 1792477, 'N', 'Y', 'e1d69d60-79f0-11e7-8627-63ba4b325f8b', 0, '2017-08-05 22:15:15', 0, '2017-08-05 22:15:15'),
	(161, 0, '2017-08-05_10-15-50_IMG_20170716_181406.jpg', 'public/images/product-img/2017-08-05_10-15-50_IMG_20170716_181406.jpg', 'image/jpeg', 1778404, 'N', 'Y', 'f738dba0-79f0-11e7-8627-63ba4b325f8b', 0, '2017-08-05 22:15:51', 0, '2017-08-05 22:15:51'),
	(162, 0, '2017-08-05_10-16-36_IMG_20170716_181406.jpg', 'public/images/product-img/2017-08-05_10-16-36_IMG_20170716_181406.jpg', 'image/jpeg', 1778404, 'N', 'Y', '12cfd8a0-79f1-11e7-8627-63ba4b325f8b', 0, '2017-08-05 22:16:37', 0, '2017-08-05 22:16:37'),
	(163, 48, '2017-08-05_10-18-21_IMG_20170716_181638.jpg', 'public/images/product-img/2017-08-05_10-18-21_IMG_20170716_181638.jpg', 'image/jpeg', 1997515, 'Y', 'Y', '514ab820-79f1-11e7-8627-63ba4b325f8b', 0, '2017-08-05 22:18:22', 0, '2017-08-05 22:18:32'),
	(164, 51, '2017-08-09_12-32-35_IMG_20170716_181433.jpg', 'public/images/product-img/2017-08-09_12-32-35_IMG_20170716_181433.jpg', 'image/jpeg', 2059852, 'Y', 'Y', '910d1320-7c5f-11e7-94cb-51ac8fc59657', 0, '2017-08-09 00:32:36', 0, '2017-08-09 00:32:40'),
	(165, 54, '2017-10-08_11-13-33_placeholder-image.png', 'public/images/product-img/2017-10-08_11-13-33_placeholder-image.png', 'image/png', 2548, 'Y', 'Y', 'a1b046c0-ac43-11e7-a977-f185244abca2', 0, '2017-10-08 23:13:34', 0, '2017-10-08 23:13:42');
/*!40000 ALTER TABLE `product_pic` ENABLE KEYS */;

-- Dumping structure for table project_jphp.slider
DROP TABLE IF EXISTS `slider`;
CREATE TABLE IF NOT EXISTS `slider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `link_to` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `link_id` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pic_name` varchar(225) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pic_path` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('Y','N') COLLATE utf8_unicode_ci DEFAULT 'Y',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT '0',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table project_jphp.slider: ~5 rows (approximately)
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
INSERT INTO `slider` (`id`, `name`, `description`, `link_to`, `link_id`, `pic_name`, `pic_path`, `status`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
	(4, 'กบยาง', 'กบยางหลากหลายสี เลือกได้เลยครับดีดีทั้งนั้น', 'product', 'all_product', 'head1.png', 'project_shop_api/slider-img/20170613032446pm_head1.png', 'Y', '2017-06-10 22:36:46', 6, '2017-06-22 08:47:16', 6),
	(5, 'กบแบบใหม่', 'กบออกใหม่', 'category', '10', 'head2.png', 'project_shop_api/slider-img/20170613032457pm_head2.png', 'Y', '2017-06-10 22:42:43', 6, '2017-06-22 08:51:04', 6),
	(6, 'ทดสอบ', 'ทดลอง', 'product', 'all_product', '15729381_1607619272588333_2390009443203940352_n.jpg', 'slider-img/20170612015733pm_15729381_1607619272588333_2390009443203940352_n.jpg', 'N', '2017-06-12 18:57:52', 6, '2017-06-12 21:39:43', 6),
	(7, 'test', 'test', 'product', 'all_product', '15729489_1133272966770846_7790129901012516864_n.jpg', 'project_shop_api/slider-img/20170613032325pm_15729489_1133272966770846_7790129901012516864_n.jpg', 'N', '2017-06-13 20:24:26', 6, '2017-06-13 20:25:03', 6),
	(8, 'ทดสอบ', '', 'product', 'all_product', 'head2.png', 'project_shop_api/slider-img/20170613033841pm_head2.png', 'N', '2017-06-13 20:39:01', 6, '2017-06-13 20:39:08', 6);
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;

-- Dumping structure for table project_jphp.slider_pic
DROP TABLE IF EXISTS `slider_pic`;
CREATE TABLE IF NOT EXISTS `slider_pic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slider_id` int(11) DEFAULT NULL,
  `pic_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pic_path` varchar(225) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT '0',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table project_jphp.slider_pic: ~7 rows (approximately)
/*!40000 ALTER TABLE `slider_pic` DISABLE KEYS */;
INSERT INTO `slider_pic` (`id`, `slider_id`, `pic_name`, `pic_path`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
	(7, NULL, '14750872_1279224742098890_6041011513462882304_n.jpg', 'slider-img/20170609061201pm_14750872_1279224742098890_6041011513462882304_n.jpg', '2017-06-09 23:12:01', 0, '2017-06-09 23:12:01', NULL),
	(8, NULL, '14546971_1205688339492804_2559577024087719936_n.jpg', 'slider-img/20170609061450pm_14546971_1205688339492804_2559577024087719936_n.jpg', '2017-06-09 23:14:50', 0, '2017-06-09 23:14:50', NULL),
	(9, NULL, '14750872_1279224742098890_6041011513462882304_n.jpg', 'slider-img/20170609065808pm_14750872_1279224742098890_6041011513462882304_n.jpg', '2017-06-09 23:58:08', 0, '2017-06-09 23:58:08', NULL),
	(10, NULL, '14547022_1306007669418908_6912761253165268992_n.jpg', 'slider-img/20170609065824pm_14547022_1306007669418908_6912761253165268992_n.jpg', '2017-06-09 23:58:24', 0, '2017-06-09 23:58:24', NULL),
	(11, NULL, '14751081_1212089765532725_1998236270358167552_n.jpg', 'slider-img/20170609065933pm_14751081_1212089765532725_1998236270358167552_n.jpg', '2017-06-09 23:59:33', 0, '2017-06-09 23:59:33', NULL),
	(12, NULL, '14750872_1279224742098890_6041011513462882304_n.jpg', 'slider-img/20170609065941pm_14750872_1279224742098890_6041011513462882304_n.jpg', '2017-06-09 23:59:41', 0, '2017-06-09 23:59:41', NULL),
	(13, NULL, '14751140_1083118478470125_85480762702299136_n.jpg', 'slider-img/20170610082038am_14751140_1083118478470125_85480762702299136_n.jpg', '2017-06-10 13:20:38', 0, '2017-06-10 13:20:38', NULL);
/*!40000 ALTER TABLE `slider_pic` ENABLE KEYS */;

-- Dumping structure for table project_jphp.staff
DROP TABLE IF EXISTS `staff`;
CREATE TABLE IF NOT EXISTS `staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` longtext COLLATE utf8_unicode_ci,
  `type` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `uuid` longtext COLLATE utf8_unicode_ci,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Index 2` (`uuid`(100))
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table project_jphp.staff: ~4 rows (approximately)
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` (`id`, `name`, `lastname`, `user`, `password`, `type`, `uuid`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
	(1, 'Jes Jesniphat', 'Jesniphat', 'jesse', '0f359740bd1cda994f8b55330c86d845', 'staff', '4616785a-bd79-11e6-a27b-1867b02605c0', '2016-12-09 02:05:12', 1, '2017-11-20 11:51:13', 1),
	(2, 'Jedniphan', 'Pukkham', 'Jeni', 'a4060150e6895a5efc19e16bbf9e9755', 'staff', 'bd5512c4-c159-11e6-b305-1867b02605c0', '2016-12-14 00:29:49', 0, '2017-11-20 11:51:14', 0),
	(5, 'Jesniphat', 'Pukkham', 'Jes', '0f359740bd1cda994f8b55330c86d845', 'staff', '102baefd-c15c-11e6-b305-1867b02605c0', '2016-12-14 00:46:27', 0, '2017-11-20 18:27:22', 0),
	(6, 'ผู้ดูแลระบบ', 'ของเรา นะครับ', 'admin', '0f359740bd1cda994f8b55330c86d845', 'admin', '6291e192-c161-11e6-b305-1867b02605c0', '2016-12-14 01:24:32', 0, '2017-11-20 11:51:15', 0);
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;

-- Dumping structure for view project_jphp.autocomplete_product
DROP VIEW IF EXISTS `autocomplete_product`;
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `autocomplete_product`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `autocomplete_product` AS select `product`.`id` AS `id`,concat(`product`.`code`,':',`product`.`product_name`) AS `name` from `product` where (`product`.`status` = 'Y');

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
