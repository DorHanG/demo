function Mycheku_kc(callback) {
	var fla = this;
	var danqianye; //当前页
	var za1 = 0;
	var za2 = 0;
	var za3 = 0;
	var za4 = 0;
	this.$div = $('<div id="shop"></div>');
	this.anquan = $('<div id="anquan_shop"></div> '); //安全框
	this.left_div = $('<div id="left_shop"></div>'); //左做框
	this.right_div = $('<div id="right_shop"></div>'); //右框
	this.guanbi = $('<div id="guanbi"></div>'); //关闭
	this.right_left = $('<div id="right_left"></div>'); //右左框
	this.right_left_1 = $('<div id="right_left_1"><div id="right_left_1_img"></div></div>'); //身体按钮;
	this.right_left_2 = $('<div id="right_left_2"><div id="right_left_2_img"></div></div>'); //车子按钮;
	this.right_left_3 = $('<div id="right_left_3"><div id="right_left_3_img"></div></div>'); //轮子按钮;
	this.right_left_4 = $('<div id="right_left_4"><div id="right_left_4_img"></div></div>'); //马达按钮;
	this.right_left.append(this.right_left_1, this.right_left_2, this.right_left_3, this.right_left_4)
	this.right_top = $('<div id="right_top_ck"></div>'); //右框上

	this.right_bottom = $('<div id="right_bottom"></div>'); //右下
	this.right_last = $('<div id="right_last"></div>') //上一页
	this.right_next = $('<div id="right_next"></div>') //下一页
	this.right_yema = $('<div id="right_yema">1</div>') //页码

	this.right_bottom_conent = $('<div id="right_bottom_conent"></div>') //显示商店的装备
	this.div_zb = $('<div class="div_zb"></div>') //装备框
	this.div_zb_top = $('<div class="div_zb_top"></div>') //装备上div
	this.div_zb_middle = $('<div class="div_zb_middle"></div>') //装备中div
	this.div_zb_bottom = $('<div class="div_zb_bottom"></div>') //装备下div
	this.div_zb_foot = $('<div class="div_zb_foot"></div>') //装备底div
	this.div_goumai = $('<div class="div_goumai">') //购买按钮
	this.div_yulan = $('<div class="div_yulan"></div>') //预览按钮
	this.div_zb_foot.append(this.div_goumai, this.div_yulan)

	this.div_zb.append(this.div_zb_top, this.div_zb_middle, this.div_zb_bottom, this.div_zb_foot)
	//this.right_bottom_conent.append(this.div_zb)

	this.right_bottom.append(this.right_bottom_conent);
	this.qwgame = $('<div id="qwgame"></div>') //前往游戏
	this.right_div.append(this.right_left, this.right_top, this.right_bottom, this.guanbi, this.qwgame);

	this.left_div_shop = $('<div></div>');
	this.left_shop_1 = $('<div id="left_shop_11"></div>');
	this.left_shop_2 = $('<div id="left_shop_22"></div>');
	this.left_shop_3 = $('<div id="left_shop_33"></div>');
	this.left_shop_rw = $('<div id="rw"></div>'); //人物预览div
	this.shenti = $('<div id="shenti"></div>'); //身体
	this.che = $('<div id="che" ></div>'); //车
	this.lun1 = $('<div id="lun1" ></div>'); //轮1
	this.lun2 = $('<div id="lun2" ></div>'); //轮2
	this.mada_div = $('<div id="mada_div" ></div>'); //马达div
	this.mada = $('<div id="mada"></div>'); //马达
	this.mada_div.append(this.mada);
	this.left_shop_rw.append(this.shenti, this.che, this.lun1, this.lun2, this.mada_div);
	this.left_shop_3.append(this.left_shop_rw);
	this.left_shop_4 = $('<div id="left_shop_44">属 性</p></div>');
	this.left_shop_5 = $('<div id="left_shop_55"><div id="shuxing_1"></div><div id="shuxing_2"></div><div id="shuxing_3">' +
		'</div><div id="shuxing_4"></div></div>');

	//拼接
	this.left_div_shop.append(this.left_shop_1, this.left_shop_2, this.left_shop_3, this.left_shop_4, this.left_shop_5)
	this.left_div.append(this.left_div_shop);
	this.anquan.append(this.left_div, this.right_div);
	this.$div.append(this.anquan);
	//显示用户名
	this.left_shop_2.html(quanju_name)
	//关闭按钮
	this.guanbi.on("click", function() {
		callback("商城")
	})

	//车手按钮
	this.right_left_1.on("click", function() {
		var $rongqi = $('<div></div>'); //容器1
		fla.right_bottom_conent.empty(); //清空
		fla.right_last.remove();
		fla.right_yema.remove();
		fla.right_next.remove();
		mysql_kc.transaction(function(tx) {
			tx.executeSql('select * from mycheku202,shopkc111 where myshopleixin="车手" and mname="' + quanju_name + '" and mycheku202.shopid=shopkc111.shopid ', [], function(ta, rel) {
				var l = rel.rows.length;

				console.log(l)
				for(var i = 0; i < l; i++) {

					fla.div_zb = $('<div class="div_zb"></div>') //装备框
					fla.div_zb_top = $('<div class="div_zb_topck">' + rel.rows.item(i).shopname + '</div>') //装备上div
					fla.div_zb_top.css({
						"background": "url(images/equipName.jpg) no-repeat;"
					})
					fla.div_zb_middle = $('<div class="div_zb_middlecheku"></div>') //装备中div
					fla.div_dagou = $('<div class="div_zb_dagou"></div>') //装备中div--打勾
					fla.div_zb_middle.append(fla.div_dagou)
					fla.div_zb_middle.css({
						'background': 'url(' + rel.rows.item(i).shopsrc1 + ') center no-repeat'
					})
					fla.div_zb_bottom = $('<div class="div_zb_bottomck">价格:' + rel.rows.item(i).shopjiage + '</div>') //装备下div
					fla.div_zb_foot = $('<div class="div_zb_foot"></div>') //装备底div
					fla.div_goumai = $('<p class="div_goumaikc"></p>') //购买按钮
					fla.div_yulan = $('<p class="div_yulankc"></p>') //预览按钮
					fla.div_zb_foot.append(fla.div_goumai, fla.div_yulan)

					fla.right_last = $('<div id="right_last"></div>') //上一页
					fla.right_next = $('<div id="right_next"></div>') //下一页
					fla.right_yema = $('<div id="right_yema">1</div>') //页码

					fla.div_zb.append(fla.div_zb_top, fla.div_zb_middle, fla.div_zb_bottom, fla.div_zb_foot)
					$rongqi.append(fla.div_zb);
				}
				fla.right_bottom.append(fla.right_last, fla.right_yema, fla.right_next);

				//默认显示
				var aaa = $rongqi.clone(); //存储所有装备框
				danqianye = $(fla.right_yema).html() //获取当前页码
				var star = (danqianye - 1) * 6; //检索开始
				var end = star + 6; //检索结束
				$(aaa).children().each(function(e) {
					if(e >= star && e < end) {

						fla.right_bottom_conent.append($(this)); //显示

					}
				})
				//点中间预览
				$(".div_zb_middlecheku").click(function() {
					za1 = 1;
					mysql_kc.transaction(function(tx) {
						tx.executeSql('create table if not exists zzzbkc(' +
							'zname text,' +
							'zdi1 integer,' +
							'zdi2 integer,' +
							'zdi3 integer,' +
							'zdi4 integer)')
					})
					console.log($(".div_zb_dagou"))
					var name = $(this).siblings().eq(0).html()

					$('.div_zb_dagou').css("display", "none"); //所有打勾关闭
					$(this).children().css("display", "block"); //开启打勾

					mysql_kc.transaction(function(tx) {
						tx.executeSql("select shopsrc2 from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							fla.shenti.css({
								'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
							});
							var myshangpinid;
							mysql_kc.transaction(function(tx) {
								tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
									console.log(rel)
									myshangpinid = rel.rows.item(0).shopid;
									mysql_kc.transaction(function(tx) {
										tx.executeSql('update zzzbkc set zdi1=' + myshangpinid + ' where uname="' + quanju_name + '"', [], function(ta, rel) {}, function(ta, err) {
											console.log(err.message)
										})
									})
								}, function(ta, err) {})
							})

						}, function(ta, err) {})

					})
				})
				//装备显示属性
				$(".div_goumaikc").click(function() {
					var name = $(this).parent().siblings().eq(0).html()
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select * from shopkc111,mycheku202 where shopkc111.shopid=mycheku202.shopid and mname='" + quanju_name + "' and shopkc111.shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							$('#shuxing_1').html('名称：' + rel.rows.item(0).shopname);
							$('#shuxing_2').html('价格:' + rel.rows.item(0).shopjiage);
							$('#shuxing_3').html('速度:' + rel.rows.item(0).myspeed);
							$('#shuxing_4').html('等级:' + rel.rows.item(0).mylevel);
						}, function(ta, err) {})

					})
				})
				//升级
				$('.div_yulankc').click(function() {
					var name = $(this).parent().siblings().eq(0).html();
					var shenjijiage;
					var mydengji;
					var myspeed;
					var shangpinid;
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {

							shenjijiage = Number(rel.rows.item(0).shopjiage);

							shangpinid = rel.rows.item(0).shopid;

							mysql_kc.transaction(function(tx) {
								tx.executeSql("select * from mycheku202 where mname='" + quanju_name + "'and shopid=" + shangpinid + "", [], function(ta, rel) {
									mydengji = Number(rel.rows.item(0).mylevel);

									shenjijiage = shenjijiage * mydengji;
									if(confirm("确定要花费" + shenjijiage + "升级吗")) {
										mysql_kc.transaction(function(tx) {
											tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
												if(rel.rows.item(0).usermoney < shenjijiage) {
													alert("你的金币不足")
												} else {
													mysql_kc.transaction(function(tx) {
														tx.executeSql("update user set usermoney=usermoney-" + shenjijiage + " where" +
															" username='" + quanju_name + "'", [],
															function(ta, rel) {
																mysql_kc.transaction(function(tx) {
																	tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
																		$('#left_shop_4').html("我的金币：" + rel.rows.item(0).usermoney);
																		quanju_money = rel.rows.item(0).usermoney;
																	}, function(ta, err) {
																		console.log(err.message)
																	})
																});
																mysql_kc.transaction(function(tx) {
																	tx.executeSql("update mycheku202 set mylevel=mylevel+1  where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
																		//alert("升级成功")
																	}, function(ta, err) {
																		console.log(err.message)
																	});
																	tx.executeSql("update mycheku202 set myspeed=myspeed+1  where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
																		alert("升级成功")
																	}, function(ta, err) {
																		console.log(err.message)
																	})
																})
															},
															function(ta, err) {})
													})
												}
											}, function(ta, err) {})
										})
									}
								}, function(ta, err) {})
							})

						}, function(ta, err) {})

					})

				})
				//下一页
				fla.right_next.on("click", function() {
					var aaa1 = $rongqi.clone(); //存储所有装备框
					danqianye = Number($(fla.right_yema).html()) //获取当前页码
					var zys = Math.ceil(l / 6);
					if(danqianye >= zys) {
						alert("已经是最后一页")
					} else {

						danqianye += 1;
						$(fla.right_yema).html(danqianye)
						fla.right_bottom_conent.empty(); //清空
						var star = (danqianye - 1) * 6; //检索开始
						var end = star + 6; //检索结束
						$(aaa1).children().each(function(e) {
							if(e >= star && e < end) {

								fla.right_bottom_conent.append($(this)); //显示

							}
						})

					}

				})
				//上一页
				fla.right_last.on("click", function() {
					var aaa2 = $rongqi.clone(); //存储所有装备框
					danqianye = Number($(fla.right_yema).html()) //获取当前页码
					var zys = Math.ceil(l / 6);
					if(danqianye <= 1) {
						alert("已经是第一页")
					} else {

						danqianye -= 1;
						$(fla.right_yema).html(danqianye)
						fla.right_bottom_conent.empty(); //清空
						var star = (danqianye - 1) * 6; //检索开始
						var end = star + 6; //检索结束
						$(aaa2).children().each(function(e) {
							if(e >= star && e < end) {

								fla.right_bottom_conent.append($(this)); //显示

							}
						})

					}

				})

			}, function(ta, err) {});

		})
		$(fla.right_left_1).addClass("jiabian")
		$(fla.right_left_2).removeClass("jiabian")
		$(fla.right_left_3).removeClass("jiabian")
		$(fla.right_left_4).removeClass("jiabian")
	})
	//    车子按钮
	this.right_left_2.on("click", function() {
		var $rongqi = $('<div></div>'); //容器1
		fla.right_bottom_conent.empty(); //清空
		fla.right_last.remove();
		fla.right_yema.remove();
		fla.right_next.remove();
		mysql_kc.transaction(function(tx) {
			tx.executeSql('select * from mycheku202,shopkc111 where myshopleixin="车子" and mname="' + quanju_name + '" and mycheku202.shopid=shopkc111.shopid ', [], function(ta, rel) {
				var l = rel.rows.length;
				console.log(l)
				for(var i = 0; i < l; i++) {

					fla.div_zb = $('<div class="div_zb"></div>') //装备框
					fla.div_zb_top = $('<div class="div_zb_topck">' + rel.rows.item(i).shopname + '</div>') //装备上div
					fla.div_zb_top.css({
						"background": "url(images/equipName.jpg) no-repeat;"
					})
					fla.div_zb_middle = $('<div class="div_zb_middlecheku"></div>') //装备中div
					fla.div_dagou = $('<div class="div_zb_dagou"></div>') //装备中div--打勾
					fla.div_zb_middle.append(fla.div_dagou)
					fla.div_zb_middle.css({
						'background': 'url(' + rel.rows.item(i).shopsrc1 + ') center no-repeat'
					})
					fla.div_zb_bottom = $('<div class="div_zb_bottomck">价格:' + rel.rows.item(i).shopjiage + '</div>') //装备下div
					fla.div_zb_foot = $('<div class="div_zb_foot"></div>') //装备底div
					fla.div_goumai = $('<p class="div_goumaikc"></p>') //购买按钮
					fla.div_yulan = $('<p class="div_yulankc"></p>') //预览按钮
					fla.div_zb_foot.append(fla.div_goumai, fla.div_yulan)

					fla.right_last = $('<div id="right_last"></div>') //上一页
					fla.right_next = $('<div id="right_next"></div>') //下一页
					fla.right_yema = $('<div id="right_yema">1</div>') //页码

					fla.div_zb.append(fla.div_zb_top, fla.div_zb_middle, fla.div_zb_bottom, fla.div_zb_foot)
					$rongqi.append(fla.div_zb);
				}
				fla.right_bottom.append(fla.right_last, fla.right_yema, fla.right_next);

				//默认显示
				var aaa = $rongqi.clone(); //存储所有装备框
				danqianye = $(fla.right_yema).html() //获取当前页码
				var star = (danqianye - 1) * 6; //检索开始
				var end = star + 6; //检索结束
				$(aaa).children().each(function(e) {
					if(e >= star && e < end) {

						fla.right_bottom_conent.append($(this)); //显示

					}
				})
				//点中间预览
				$(".div_zb_middlecheku").click(function() {
					za2 = 1;
					mysql_kc.transaction(function(tx) {
						tx.executeSql('create table if not exists zzzbkc(' +
							'zname text,' +
							'zdi1 integer,' +
							'zdi2 integer,' +
							'zdi3 integer,' +
							'zdi4 integer)')
					})
					console.log($(".div_zb_dagou"))
					var name = $(this).siblings().eq(0).html()

					$('.div_zb_dagou').css("display", "none"); //所有打勾关闭
					$(this).children().css("display", "block"); //开启打勾

					mysql_kc.transaction(function(tx) {
						tx.executeSql("select shopsrc2 from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							fla.che.css({
								'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
							});
							var myshangpinid;
							mysql_kc.transaction(function(tx) {
								tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
									console.log(rel)
									myshangpinid = rel.rows.item(0).shopid;
									mysql_kc.transaction(function(tx) {
										tx.executeSql('update zzzbkc set zdi2=' + myshangpinid + ' where uname="' + quanju_name + '"', [], function(ta, rel) {}, function(ta, err) {
											console.log(err.message)
										})
									})
								}, function(ta, err) {})
							})

						}, function(ta, err) {})

					})
				})
				//装备显示属性
				$(".div_goumaikc").click(function() {
					var name = $(this).parent().siblings().eq(0).html()
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select * from shopkc111,mycheku202 where shopkc111.shopid=mycheku202.shopid and mname='" + quanju_name + "'and shopkc111.shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							$('#shuxing_1').html('名称：' + rel.rows.item(0).shopname);
							$('#shuxing_2').html('价格:' + rel.rows.item(0).shopjiage);
							$('#shuxing_3').html('速度:' + rel.rows.item(0).myspeed);
							$('#shuxing_4').html('等级:' + rel.rows.item(0).mylevel);
						}, function(ta, err) {})

					})
				})
				//升级
				$('.div_yulankc').click(function() {
					var name = $(this).parent().siblings().eq(0).html();
					var shenjijiage;
					var mydengji;
					var myspeed;
					var shangpinid;
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {

							shenjijiage = Number(rel.rows.item(0).shopjiage);

							shangpinid = rel.rows.item(0).shopid;

							mysql_kc.transaction(function(tx) {
								tx.executeSql("select * from mycheku202 where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
									mydengji = Number(rel.rows.item(0).mylevel);

									shenjijiage = shenjijiage * mydengji;
									if(confirm("确定要花费" + shenjijiage + "升级吗")) {
										mysql_kc.transaction(function(tx) {
											tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
												if(rel.rows.item(0).usermoney < shenjijiage) {
													alert("你的金币不足")
												} else {
													mysql_kc.transaction(function(tx) {
														tx.executeSql("update user set usermoney=usermoney-" + shenjijiage + " where" +
															" username='" + quanju_name + "'", [],
															function(ta, rel) {
																mysql_kc.transaction(function(tx) {
																	tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
																		$('#left_shop_4').html("我的金币：" + rel.rows.item(0).usermoney);
																		quanju_money = rel.rows.item(0).usermoney;
																	}, function(ta, err) {
																		console.log(err.message)
																	})
																});
																mysql_kc.transaction(function(tx) {
																	tx.executeSql("update mycheku202 set mylevel=mylevel+1  where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
																		//alert("升级成功")
																	}, function(ta, err) {
																		console.log(err.message)
																	});
																	tx.executeSql("update mycheku202 set myspeed=myspeed+1  where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
																		alert("升级成功")
																	}, function(ta, err) {
																		console.log(err.message)
																	})
																})
															},
															function(ta, err) {})
													})
												}
											}, function(ta, err) {})
										})
									}
								}, function(ta, err) {})
							})

						}, function(ta, err) {})

					})

				})
				//下一页
				fla.right_next.on("click", function() {
					var aaa1 = $rongqi.clone(); //存储所有装备框
					danqianye = Number($(fla.right_yema).html()) //获取当前页码
					var zys = Math.ceil(l / 6);
					if(danqianye >= zys) {
						alert("已经是最后一页")
					} else {

						danqianye += 1;
						$(fla.right_yema).html(danqianye)
						fla.right_bottom_conent.empty(); //清空
						var star = (danqianye - 1) * 6; //检索开始
						var end = star + 6; //检索结束
						$(aaa1).children().each(function(e) {
							if(e >= star && e < end) {

								fla.right_bottom_conent.append($(this)); //显示

							}
						})
					}

				})
				//上一页
				fla.right_last.on("click", function() {
					var aaa2 = $rongqi.clone(); //存储所有装备框
					danqianye = Number($(fla.right_yema).html()) //获取当前页码
					var zys = Math.ceil(l / 6);
					if(danqianye <= 1) {
						alert("已经是第一页")
					} else {

						danqianye -= 1;
						$(fla.right_yema).html(danqianye)
						fla.right_bottom_conent.empty(); //清空
						var star = (danqianye - 1) * 6; //检索开始
						var end = star + 6; //检索结束
						$(aaa2).children().each(function(e) {
							if(e >= star && e < end) {

								fla.right_bottom_conent.append($(this)); //显示

							}
						})

					}

				})

			}, function(ta, err) {});

		})
		$(fla.right_left_1).removeClass("jiabian")
		$(fla.right_left_2).addClass("jiabian")
		$(fla.right_left_3).removeClass("jiabian")
		$(fla.right_left_4).removeClass("jiabian")
	})
	//轮子按钮
	this.right_left_3.on("click", function() {
		var $rongqi = $('<div></div>'); //容器1
		fla.right_bottom_conent.empty(); //清空
		fla.right_last.remove();
		fla.right_yema.remove();
		fla.right_next.remove();
		mysql_kc.transaction(function(tx) {
			tx.executeSql('select * from mycheku202,shopkc111 where myshopleixin="轮子" and mname="' + quanju_name + '" and mycheku202.shopid=shopkc111.shopid ', [], function(ta, rel) {
				var l = rel.rows.length;
				console.log(l)
				for(var i = 0; i < l; i++) {

					fla.div_zb = $('<div class="div_zb"></div>') //装备框
					fla.div_zb_top = $('<div class="div_zb_topck">' + rel.rows.item(i).shopname + '</div>') //装备上div
					fla.div_zb_top.css({
						"background": "url(images/equipName.jpg) no-repeat;"
					})
					fla.div_zb_middle = $('<div class="div_zb_middlecheku"></div>') //装备中div
					fla.div_dagou = $('<div class="div_zb_dagou"></div>') //装备中div--打勾
					fla.div_zb_middle.append(fla.div_dagou)
					fla.div_zb_middle.css({
						'background': 'url(' + rel.rows.item(i).shopsrc1 + ') center no-repeat'
					})
					fla.div_zb_bottom = $('<div class="div_zb_bottomck">价格:' + rel.rows.item(i).shopjiage + '</div>') //装备下div
					fla.div_zb_foot = $('<div class="div_zb_foot"></div>') //装备底div
					fla.div_goumai = $('<p class="div_goumaikc"></p>') //购买按钮
					fla.div_yulan = $('<p class="div_yulankc"></p>') //预览按钮
					fla.div_zb_foot.append(fla.div_goumai, fla.div_yulan)

					fla.right_last = $('<div id="right_last"></div>') //上一页
					fla.right_next = $('<div id="right_next"></div>') //下一页
					fla.right_yema = $('<div id="right_yema">1</div>') //页码

					fla.div_zb.append(fla.div_zb_top, fla.div_zb_middle, fla.div_zb_bottom, fla.div_zb_foot)
					$rongqi.append(fla.div_zb);
				}
				fla.right_bottom.append(fla.right_last, fla.right_yema, fla.right_next);

				//默认显示
				var aaa = $rongqi.clone(); //存储所有装备框
				danqianye = $(fla.right_yema).html() //获取当前页码
				var star = (danqianye - 1) * 6; //检索开始
				var end = star + 6; //检索结束
				$(aaa).children().each(function(e) {
					if(e >= star && e < end) {

						fla.right_bottom_conent.append($(this)); //显示

					}
				})
				//点中间预览
				$(".div_zb_middlecheku").click(function() {
					za3 = 1;
					mysql_kc.transaction(function(tx) {
						tx.executeSql('create table if not exists zzzbkc(' +
							'zname text,' +
							'zdi1 integer,' +
							'zdi2 integer,' +
							'zdi3 integer,' +
							'zdi4 integer)')
					})
					console.log($(".div_zb_dagou"))
					var name = $(this).siblings().eq(0).html()

					$('.div_zb_dagou').css("display", "none"); //所有打勾关闭
					$(this).children().css("display", "block"); //开启打勾

					mysql_kc.transaction(function(tx) {
						tx.executeSql("select shopsrc2 from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							fla.lun1.css({
								'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
							});
							fla.lun2.css({
								'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
							});
							var myshangpinid;
							mysql_kc.transaction(function(tx) {
								tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
									console.log(rel)
									myshangpinid = rel.rows.item(0).shopid;
									mysql_kc.transaction(function(tx) {
										tx.executeSql('update zzzbkc set zdi3=' + myshangpinid + ' where uname="' + quanju_name + '"', [], function(ta, rel) {}, function(ta, err) {
											console.log(err.message)
										})
									})
								}, function(ta, err) {})
							})

						}, function(ta, err) {})

					})
				})
				//装备显示属性
				$(".div_goumaikc").click(function() {

					var name = $(this).parent().siblings().eq(0).html()
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select * from shopkc111,mycheku202 where shopkc111.shopid=mycheku202.shopid and mname='" + quanju_name + "' and shopkc111.shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							$('#shuxing_1').html('名称：' + rel.rows.item(0).shopname);
							$('#shuxing_2').html('价格:' + rel.rows.item(0).shopjiage);
							$('#shuxing_3').html('速度:' + rel.rows.item(0).myspeed);
							$('#shuxing_4').html('等级:' + rel.rows.item(0).mylevel);
						}, function(ta, err) {})

					})
				})
				//升级
				$('.div_yulankc').click(function() {
					var name = $(this).parent().siblings().eq(0).html();
					var shenjijiage;
					var mydengji;
					var myspeed;
					var shangpinid;
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {

							shenjijiage = Number(rel.rows.item(0).shopjiage);

							shangpinid = rel.rows.item(0).shopid;

							mysql_kc.transaction(function(tx) {
								tx.executeSql("select * from mycheku202 where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
									mydengji = Number(rel.rows.item(0).mylevel);

									shenjijiage = shenjijiage * mydengji;
									if(confirm("确定要花费" + shenjijiage + "升级吗")) {
										mysql_kc.transaction(function(tx) {
											tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
												if(rel.rows.item(0).usermoney < shenjijiage) {
													alert("你的金币不足")
												} else {
													mysql_kc.transaction(function(tx) {
														tx.executeSql("update user set usermoney=usermoney-" + shenjijiage + " where" +
															" username='" + quanju_name + "'", [],
															function(ta, rel) {
																mysql_kc.transaction(function(tx) {
																	tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
																		$('#left_shop_4').html("我的金币：" + rel.rows.item(0).usermoney);
																		quanju_money = rel.rows.item(0).usermoney;
																	}, function(ta, err) {
																		console.log(err.message)
																	})
																});
																mysql_kc.transaction(function(tx) {
																	tx.executeSql("update mycheku202 set mylevel=mylevel+1  where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
																		//alert("升级成功")
																	}, function(ta, err) {
																		console.log(err.message)
																	});
																	tx.executeSql("update mycheku202 set myspeed=myspeed+1  where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
																		alert("升级成功")
																	}, function(ta, err) {
																		console.log(err.message)
																	})
																})
															},
															function(ta, err) {})
													})
												}
											}, function(ta, err) {})
										})
									}
								}, function(ta, err) {})
							})

						}, function(ta, err) {})

					})

				})
				//下一页
				fla.right_next.on("click", function() {
					var aaa1 = $rongqi.clone(); //存储所有装备框
					danqianye = Number($(fla.right_yema).html()) //获取当前页码
					var zys = Math.ceil(l / 6);
					if(danqianye >= zys) {
						alert("已经是最后一页")
					} else {

						danqianye += 1;
						$(fla.right_yema).html(danqianye)
						fla.right_bottom_conent.empty(); //清空
						var star = (danqianye - 1) * 6; //检索开始
						var end = star + 6; //检索结束
						$(aaa1).children().each(function(e) {
							if(e >= star && e < end) {

								fla.right_bottom_conent.append($(this)); //显示

							}
						})

					}

				})
				//上一页
				fla.right_last.on("click", function() {
					var aaa2 = $rongqi.clone(); //存储所有装备框
					danqianye = Number($(fla.right_yema).html()) //获取当前页码
					var zys = Math.ceil(l / 6);
					if(danqianye <= 1) {
						alert("已经是第一页")
					} else {

						danqianye -= 1;
						$(fla.right_yema).html(danqianye)
						fla.right_bottom_conent.empty(); //清空
						var star = (danqianye - 1) * 6; //检索开始
						var end = star + 6; //检索结束
						$(aaa2).children().each(function(e) {
							if(e >= star && e < end) {

								fla.right_bottom_conent.append($(this)); //显示

							}
						})

					}

				})

			}, function(ta, err) {});

		})
		$(fla.right_left_1).removeClass("jiabian")
		$(fla.right_left_2).removeClass("jiabian")
		$(fla.right_left_3).addClass("jiabian")
		$(fla.right_left_4).removeClass("jiabian")
	})
	//马达按钮
	this.right_left_4.on("click", function() {
		var $rongqi = $('<div></div>'); //容器1
		fla.right_bottom_conent.empty(); //清空
		fla.right_last.remove();
		fla.right_yema.remove();
		fla.right_next.remove();
		mysql_kc.transaction(function(tx) {
			tx.executeSql('select * from mycheku202,shopkc111 where myshopleixin="发动机" and mname="' + quanju_name + '" and mycheku202.shopid=shopkc111.shopid ', [], function(ta, rel) {
				var l = rel.rows.length;
				console.log(l)
				for(var i = 0; i < l; i++) {

					fla.div_zb = $('<div class="div_zb"></div>') //装备框
					fla.div_zb_top = $('<div class="div_zb_topck">' + rel.rows.item(i).shopname + '</div>') //装备上div
					fla.div_zb_top.css({
						"background": "url(images/equipName.jpg) no-repeat;"
					})
					fla.div_zb_middle = $('<div class="div_zb_middlecheku"></div>') //装备中div
					fla.div_dagou = $('<div class="div_zb_dagou"></div>') //装备中div--打勾
					fla.div_zb_middle.append(fla.div_dagou)
					fla.div_zb_middle.css({
						'background': 'url(' + rel.rows.item(i).shopsrc1 + ') center no-repeat'
					})
					fla.div_zb_bottom = $('<div class="div_zb_bottomck">价格:' + rel.rows.item(i).shopjiage + '</div>') //装备下div
					fla.div_zb_foot = $('<div class="div_zb_foot"></div>') //装备底div
					fla.div_goumai = $('<p class="div_goumaikc"></p>') //购买按钮
					fla.div_yulan = $('<p class="div_yulankc"></p>') //预览按钮
					fla.div_zb_foot.append(fla.div_goumai, fla.div_yulan)

					fla.right_last = $('<div id="right_last"></div>') //上一页
					fla.right_next = $('<div id="right_next"></div>') //下一页
					fla.right_yema = $('<div id="right_yema">1</div>') //页码

					fla.div_zb.append(fla.div_zb_top, fla.div_zb_middle, fla.div_zb_bottom, fla.div_zb_foot)
					$rongqi.append(fla.div_zb);
				}
				fla.right_bottom.append(fla.right_last, fla.right_yema, fla.right_next);

				//默认显示
				var aaa = $rongqi.clone(); //存储所有装备框
				danqianye = $(fla.right_yema).html() //获取当前页码
				var star = (danqianye - 1) * 6; //检索开始
				var end = star + 6; //检索结束
				$(aaa).children().each(function(e) {
					if(e >= star && e < end) {

						fla.right_bottom_conent.append($(this)); //显示

					}
				})
				//点中间预览
				$(".div_zb_middlecheku").click(function() {
					za4 = 1;
					mysql_kc.transaction(function(tx) {
						tx.executeSql('create table if not exists zzzbkc(' +
							'zname text,' +
							'zdi1 integer,' +
							'zdi2 integer,' +
							'zdi3 integer,' +
							'zdi4 integer)')
					})
					var name = $(this).siblings().eq(0).html()

					$('.div_zb_dagou').css("display", "none"); //所有打勾关闭
					$(this).children().css("display", "block"); //开启打勾

					mysql_kc.transaction(function(tx) {
						tx.executeSql("select shopsrc2 from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							fla.mada.css({
								'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
							});
							var myshangpinid;
							mysql_kc.transaction(function(tx) {
								tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
									console.log(rel)
									myshangpinid = rel.rows.item(0).shopid;
									mysql_kc.transaction(function(tx) {
										tx.executeSql("update zzzbkc set zdi4=" + myshangpinid + " where uname='" + quanju_name + "'", [], function(ta, rel) {}, function(ta, err) {
											console.log(err.message)
										})
									})
								}, function(ta, err) {})
							})

						}, function(ta, err) {})

					})
				})
				//装备显示属性
				$(".div_goumaikc").click(function() {

					var name = $(this).parent().siblings().eq(0).html()
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select * from shopkc111,mycheku202 where shopkc111.shopid=mycheku202.shopid and mname='" + quanju_name + "' and mname='" + quanju_name + "' and shopkc111.shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							$('#shuxing_1').html('名称：' + rel.rows.item(0).shopname);
							$('#shuxing_2').html('价格:' + rel.rows.item(0).shopjiage);
							$('#shuxing_3').html('速度:' + rel.rows.item(0).myspeed);
							$('#shuxing_4').html('等级:' + rel.rows.item(0).mylevel);
						}, function(ta, err) {})

					})
				})
				//升级
				$('.div_yulankc').click(function() {
					var name = $(this).parent().siblings().eq(0).html();
					var shenjijiage;
					var mydengji;
					var myspeed;
					var shangpinid;
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {

							shenjijiage = Number(rel.rows.item(0).shopjiage);

							shangpinid = rel.rows.item(0).shopid;

							mysql_kc.transaction(function(tx) {
								tx.executeSql("select * from mycheku202 where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
									mydengji = Number(rel.rows.item(0).mylevel);

									shenjijiage = shenjijiage * mydengji;
									if(confirm("确定要花费" + shenjijiage + "升级吗")) {
										mysql_kc.transaction(function(tx) {
											tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
												if(rel.rows.item(0).usermoney < shenjijiage) {
													alert("你的金币不足")
												} else {
													mysql_kc.transaction(function(tx) {
														tx.executeSql("update user set usermoney=usermoney-" + shenjijiage + " where" +
															" username='" + quanju_name + "'", [],
															function(ta, rel) {
																mysql_kc.transaction(function(tx) {
																	tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
																		$('#left_shop_4').html("我的金币：" + rel.rows.item(0).usermoney);
																		quanju_money = rel.rows.item(0).usermoney;
																	}, function(ta, err) {
																		console.log(err.message)
																	})
																});
																mysql_kc.transaction(function(tx) {
																	tx.executeSql("update mycheku202 set mylevel=mylevel+1  where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
																		//alert("升级成功")
																	}, function(ta, err) {
																		console.log(err.message)
																	});
																	tx.executeSql("update mycheku202 set myspeed=myspeed+1  where shopid=" + shangpinid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
																		alert("升级成功")
																	}, function(ta, err) {
																		console.log(err.message)
																	})
																})
															},
															function(ta, err) {})
													})
												}
											}, function(ta, err) {})
										})
									}
								}, function(ta, err) {})
							})

						}, function(ta, err) {})

					})

				})
				//下一页
				fla.right_next.on("click", function() {
					var aaa1 = $rongqi.clone(); //存储所有装备框
					danqianye = Number($(fla.right_yema).html()) //获取当前页码
					var zys = Math.ceil(l / 6);
					if(danqianye >= zys) {
						alert("已经是最后一页")
					} else {

						danqianye += 1;
						$(fla.right_yema).html(danqianye)
						fla.right_bottom_conent.empty(); //清空
						var star = (danqianye - 1) * 6; //检索开始
						var end = star + 6; //检索结束
						$(aaa1).children().each(function(e) {
							if(e >= star && e < end) {

								fla.right_bottom_conent.append($(this)); //显示

							}
						})

					}

				})
				//上一页
				fla.right_last.on("click", function() {
					var aaa2 = $rongqi.clone(); //存储所有装备框
					danqianye = Number($(fla.right_yema).html()) //获取当前页码
					var zys = Math.ceil(l / 6);
					if(danqianye <= 1) {
						alert("已经是第一页")
					} else {

						danqianye -= 1;
						$(fla.right_yema).html(danqianye)
						fla.right_bottom_conent.empty(); //清空
						var star = (danqianye - 1) * 6; //检索开始
						var end = star + 6; //检索结束
						$(aaa2).children().each(function(e) {
							if(e >= star && e < end) {

								fla.right_bottom_conent.append($(this)); //显示

							}
						})

					}

				})

			}, function(ta, err) {});

		})
		$(fla.right_left_1).removeClass("jiabian")
		$(fla.right_left_2).removeClass("jiabian")
		$(fla.right_left_3).removeClass("jiabian")
		$(fla.right_left_4).addClass("jiabian")
	})
	//    触发
	this.right_left_1.trigger("click")
	//前往游戏
	this.qwgame.on("click", function() {
		if(za1 == 1 && za2 == 1 && za3 == 1 && za4 == 1) {
			callback("地图")
		} else {
			alert("请装备道具")
		}
	})

}