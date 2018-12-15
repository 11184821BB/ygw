# Host: localhost  (Version: 5.5.53)
# Date: 2018-10-22 17:33:49
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('001',' Tata/他她2018冬专柜同款黑色羊皮革通勤后绑带女中靴DFF01DZ8','img/img1/',1699,NULL,'黑色羊皮革通勤后绑带女中靴','img/img/100071mb.jpg','他她（Tata），品牌成立于2003年，致力为都市年轻人群提供时尚潮流、具有性价比的鞋履产品。十五年来“踏踏”的着地声，寓意都市白领元气满满的生活，如时尚“伴履”的TATA一直陪伴左右、伴随走出TAT','','','','','','','','','','','',''),('0010','浅口鞋','img/img10/',559,NULL,'这是女式浅口鞋','img/img/100072mb.jpg','','','','','','','','','','','','',''),('0011','休闲鞋','img/img11/',369,NULL,'这是女式休闲鞋','img/img/100081mb.jpg','','','','','','','','','','','','',''),('002','Teenmix/天美意2018冬商场同款灰粉色羊绒皮革优雅粗高跟女短靴CHF40DD8','img/img2/',939,NULL,'灰粉色羊绒皮革优雅粗高跟女短靴','img/img/100080mb.jpg','Teenmix（天美意），作为一个都市时尚休闲品牌，倡导“life for fun ,style for teens”即 “人生追求情趣，年轻追求个性”的生活品位，迎合都市年轻人不拘一格，追求mix&',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('003','尖头鞋','img/img3/',879,NULL,'这是女式尖头鞋','img/img/100073mb.jpg','','','','','','','','','','','','',''),('004','小白鞋','img/img4/',349,NULL,'这是男士小白鞋','img/img/100074mb.jpg','','','','','','','','','','','','',''),('005','乐福鞋','img/img5/',299,NULL,'这是女式乐福鞋','img/img/100075mb.jpg','','','','','','','','','','','','',''),('006','满帮鞋','img/img6/',499,NULL,'这是女式满帮鞋','img/img/100076mb.jpg','','','','','','','','','','','','',''),('007','高跟鞋','img/img7/',359,NULL,'这是女式高跟鞋','img/img/100077mb.jpg','','','','','','','','','','','','',''),('008','松糕鞋','img/img8/',399,NULL,'这是女式松糕鞋','img/img/100078mb.jpg','','','','','','','','','','','','',''),('009','平底鞋','img/img9/',669,NULL,'这是男士平底鞋','img/img/100079mb.jpg','','','','','','','','','','','','','');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "peoples"
#

DROP TABLE IF EXISTS `peoples`;
CREATE TABLE `peoples` (
  `name` varchar(8) NOT NULL,
  `pass` int(10) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "peoples"
#

/*!40000 ALTER TABLE `peoples` DISABLE KEYS */;
INSERT INTO `peoples` VALUES ('admidn',5667899),('admin',333444),('adminggg',2222),('对对对',0),('张三',33333),('张三3',33333333),('张三4',0),('洒洒水',1234567),('洗刷刷',44444),('灌灌',0);
/*!40000 ALTER TABLE `peoples` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES ('wzhudongsh','001',4),('wzhudongsh','001',1),('wzhudongsh','001',1);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
