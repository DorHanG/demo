var mysql_kc = openDatabase('my_kc20', '1.0', '备注', 1024 * 1024, function() {});

//user表
mysql_kc.transaction(function(tx) {
	tx.executeSql('create table if not exists user(' +
		'id integer primary key autoincrement,' +
		'username text unique not null,' +
		'userpass text not null,' +
		'usermoney integer)')
})

//shop表
mysql_kc.transaction(function(tx) {
	tx.executeSql('create table if not exists shopkc111(' +
		'shopid integer primary key autoincrement,' +
		'shopname text unique not null,' +
		'shopleixin text not null,' +
		'shopjiage integer not null,' +
		'shopsrc1 text not null,' +
		'shopsrc2 text not null,' +
		'shopsrc3 text not null,' +
		'speed integer not null,' +
		'level integer not null)')
})
//shop表添加
if(localStorage.getItem("mykcc2000") == null) {
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("新手装","车手",50,"images/c4s.png","images/c4.png","images/cha02.png",5,1)', [],
			function(ta, rel) {},
			function(ta, err) {
				console.log(err.message)
			})
	})

	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("进阶装","车手",50,"images/c5s.png","images/c5.png","images/cha03.png",6,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("超级装","车手",100,"images/c6s.png","images/c6.png","images/cha06.png",10,1)')
	});
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("大神装","车手",200,"images/c7s.png","images/c7.png","images/cha05.png",15,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("天才装","车手",250,"images/c8s.png","images/c8.png","images/cha07.png",18,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("仙人装","车手",250,"images/c2s.png","images/c2.png","images/cha06.png",10,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("飞天装","车手",250,"images/c3s.png","images/c3.png","images/cha01.png",10,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("丰田","车子",250,"images/m1s.png","images/m1.png","images/m37.png",10,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("宝马","车子",260,"images/m2s.png","images/m2.png","images/m37.png",12,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("玛莎拉蒂","车子",300,"images/m3s.png","images/m3.png","images/m37.png",18,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("兰博基尼","车子",300,"images/m4s.png","images/m4.png","images/m3.png",18,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("风火轮","轮子",100,"images/w1s.jpg","images/w1.png","images/m37.png",5,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("摩天轮","轮子",100,"images/w2s.jpg","images/w2.png","images/m37.png",6,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("拿破仑","轮子",150,"images/w3s.jpg","images/w3.png","images/m37.png",7,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("盖伦","轮子",160,"images/w4s.jpg","images/w4.png","images/m37.png",8,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("滚轮","轮子",160,"images/w5s.jpg","images/w5.png","images/m37.png",8,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("艾伦","轮子",200,"images/w6s.jpg","images/w6.png","images/m37.png",10,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("C1","发动机",50,"images/engine02.png","images/engine02.png","images/m37.png",5,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("C2","发动机",60,"images/engine03.png","images/engine03.png","images/m37.png",6,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("A1","发动机",80,"images/engine04.png","images/engine04.png","images/m37.png",8,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("A2","发动机",120,"images/engine05.png","images/engine05.png","images/m37.png",10,1)')
	})
	mysql_kc.transaction(function(tx) {
		tx.executeSql('insert into shopkc111(shopname,shopleixin,shopjiage,shopsrc1,shopsrc2,shopsrc3,speed,level)' +
			'values("A3","发动机",150,"images/engine06.png","images/engine06.png","images/m77.png",12,1)')
	})
	localStorage.setItem("mykcc2000", true);
}

//mycheku20表
mysql_kc.transaction(function(tx) {
	tx.executeSql('create table if not exists mycheku202(' +
		'id integer,' +
		'mname text,' +
		'shopid integer,' +
		'myspeed integer not null,' +
		'myshopleixin text,' +
		'mylevel integer not null)')
})

//最终装备表
mysql_kc.transaction(function(tx) {
	tx.executeSql('create table if not exists zzzbkc(' +
		'zname text,' +
		'uname text,' +
		'zdi1 integer,' +
		'zdi2 integer,' +
		'zdi3 integer,' +
		'zdi4 integer)')
})

//地图表
mysql_kc.transaction(function(tx) {
	tx.executeSql('create table if not exists myditukc(' +
		'uname text,' +
		'mid integer,' +
		'mname text,' +
		'msrc1 text,' +
		'msrc2 text,' +
		'gamesrc text,' +
		'jiesuo integer)', [],
		function(ta, rel) {},
		function(ta, err) {
			console.log(err.message)
		})
})
//关卡表
mysql_kc.transaction(function(tx) {
	tx.executeSql('create table if not exists myguankakc(' +
		'gid integer primary key autoincrement,' +
		'gkji integer,' +
		'uname text,' +
		'gname text,' +
		'gsrc1 text,' +
		'gsrc2 text,' +
		'gsrc3 text,' +
		'gamesrc text,' +
		'gjiesuo integer)', [],
		function(ta, rel) {},
		function(ta, err) {
			console.log(err.message)
		})
})
//结算表
mysql_kc.transaction(function(tx) {
	tx.executeSql('create table if not exists Settlementkc(' +
		'uname text,' +
		'mc integer,' + //名次
		'smoney integer,' +
		'stime text,' +
		'jtime1 text,' +
		'jtime2 text,' +
		'jtime3 text)')
})