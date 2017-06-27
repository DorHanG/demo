function mylunbo(callback) {
	zjid = 0; //保存地图id
	var lunjin1; //保存路径
	var lunjin2;
	var lunjin3;
	var lunjin4;
	var lunjin5;
	var lunjin6;
	var lunjin7;
	var fla = this;
	var lunbo = $('<div class="jq22-container"> ' +
		'<div class="poster-main A_Demo"> ' +
		'<div class="poster-btn poster-prev-btn"></div>' +
		' <div class="poster-list"> ' +
		' <li class="poster-item"><a class="aaa" href="#"></a></li> ' +
		' <li class="poster-item"><a class="aaa" href="#"></a></li> ' +
		' <li class="poster-item"><a class="aaa" href="#"></a></li> ' +
		' <li class="poster-item"><a class="aaa" href="#"></a></li>' +
		' <li class="poster-item"><a class="aaa" href="#"></a></li>' +
		' <li class="poster-item"><a class="aaa" href="#"></a></li> ' +
		' <li class="poster-item"><a class="aaa" ></a></li> </div> ' +
		'<div class="poster-btn poster-next-btn"></div> </div> </div>')
	this.fanfa = function() {
		mysql_kc.transaction(function(tx) {
			tx.executeSql('select * from myditukc where uname="' + quanju_name + '"', [], function(ta, rel) {
				var l = rel.rows.length;
				for(var i = 0; i < l; i++) {
					lunjin1 = rel.rows.item(i).msrc1;

					$(".aaa").eq(i).css("background", "url(" + lunjin1 + ") no-repeat center center")
				}

				$(".aaa").each(function(e) {
					$(this).click(function() {
						zjid = e + 1; //地图id保存
						gbj_gk = zjid; //关卡级
						mysql_kc.transaction(function(tx) {
							tx.executeSql("select * from myditukc where mid=" + zjid + " and uname='" + quanju_name + "'", [], function(ta, rel) {
								var k1 = rel.rows.item(0).msrc1;
								var k2 = rel.rows.item(0).msrc2;
								if(k1 == k2) {
									//查数据库找出当前装备和地图

									mysql_kc.transaction(function(tx) {

										tx.executeSql("select * from zzzbkc where uname='" + quanju_name + "'", [], function(ta, rel) {
											if(rel.rows.item(0).zdi1 == "null" && rel.rows.item(0).zdi2 == "null" && rel.rows.item(0).zdi3 == "null" && rel.rows.item(0).zdi4 == "null") {
												callback("车库");
											} else {
												sheshou_img = rel.rows.item(0).zdi1; //车手
												chezi_img = rel.rows.item(0).zdi2; //车子
												lun1_img = rel.rows.item(0).zdi3; //轮子
												lun2_img = rel.rows.item(0).zdi3;

												mysql_kc.transaction(function(tx) {
													tx.executeSql("select * from shopkc111 where shopid=" + sheshou_img + "", [], function(ta, rel) {
														sheshou_img = rel.rows.item(0).shopsrc2;
													}, function(ta, err) {
														console.log(err.message)
													})
												})
												mysql_kc.transaction(function(tx) {
													tx.executeSql("select * from shopkc111 where shopid=" + chezi_img + "", [], function(ta, rel) {
														chezi_img = rel.rows.item(0).shopsrc2;
													}, function(ta, err) {
														console.log(err.message)
													})
												})
												mysql_kc.transaction(function(tx) {
													tx.executeSql("select * from shopkc111 where shopid=" + lun1_img + "", [], function(ta, rel) {
														lun1_img = rel.rows.item(0).shopsrc2;
														lun2_img = rel.rows.item(0).shopsrc2;
													}, function(ta, err) {
														console.log(err.message)
													})
												})
											}

										}, function(ta, err) {
											console.log(err.message)
										})
									})

									callback("关卡");
								} else {
									alert("未解锁")
								}

							}, function(ta, err) {})
						})
					})
				})

			}, function(ta, err) {})
		})

	}
	this.$div = $('<div id="lunbo"></div>') //大div
	this.l_back = $('<div id="l_back">'); //返回;
	this.l_back.click(function() {
		if(confirm("确认返回吗")) {
			callback("主页面");
		}
	})
	this.anquan = $('<div class="anquanaa"></div>') //安全框
	fla.anquan.append(lunbo, this.l_back);
	fla.$div.append(fla.anquan);
}