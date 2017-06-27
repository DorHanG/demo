function shop_kc(callback) {
	var fla = this;
	var danqianye; //当前页
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
	this.right_top = $('<div id="right_top"></div>'); //右框上

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
	this.right_bottom.append(this.right_bottom_conent);
	this.right_div.append(this.right_left, this.right_top, this.right_bottom, this.guanbi);

	this.left_div_shop = $('<div></div>');
	this.left_shop_1 = $('<div id="left_shop_1"></div>');
	this.left_shop_2 = $('<div id="left_shop_2"></div>');
	this.left_shop_3 = $('<div id="left_shop_3"></div>');
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
	this.left_shop_4 = $('<div id="left_shop_4"></div>');
	this.left_shop_5 = $('<div id="left_shop_5"></div>');
	this.left_shop_6 = $('<div id="left_shop_6"></div>');
	//拼接
	this.left_div_shop.append(this.left_shop_1, this.left_shop_2, this.left_shop_3, this.left_shop_4, this.left_shop_5, this.left_shop_6)
	this.left_div.append(this.left_div_shop);
	this.anquan.append(this.left_div, this.right_div);
	this.$div.append(this.anquan);
	//显示用户名
	this.left_shop_2.html(quanju_name);
	this.left_shop_4.html("我的金币：" + quanju_money);
	this.left_shop_4.css("color", "orange")

	//关闭按钮
	this.guanbi.on("click", function() {
		callback("主页面")
	})

	//创建显示装备
	//车手按钮
	this.right_left_1.on("click", function() {
		var $rongqi = $('<div></div>'); //容器1
		fla.right_bottom_conent.empty(); //清空
		fla.right_last.remove();
		fla.right_yema.remove();
		fla.right_next.remove();
		mysql_kc.transaction(function(tx) {
			tx.executeSql('select * from shopkc111 where shopleixin="车手"', [], function(ta, rel) {
				var l = rel.rows.length;
				console.log(l)
				for(var i = 0; i < l; i++) {

					fla.div_zb = $('<div class="div_zb"></div>') //装备框
					fla.div_zb_top = $('<div class="div_zb_top">' + rel.rows.item(i).shopname + '</div>') //装备上div
					fla.div_zb_middle = $('<div class="div_zb_middle"></div>') //装备中div
					fla.div_zb_middle.css({
						'background': 'url(' + rel.rows.item(i).shopsrc1 + ') center no-repeat'
					})
					fla.div_zb_bottom = $('<div class="div_zb_bottom">价格:' + rel.rows.item(i).shopjiage + '</div>') //装备下div
					fla.div_zb_foot = $('<div class="div_zb_foot"></div>') //装备底div
					fla.div_goumai = $('<p class="div_goumai"></p>') //购买按钮
					fla.div_yulan = $('<p class="div_yulan"></p>') //预览按钮
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
				//预览
				$(".div_yulan").click(function() {
					var name = $(this).parent().siblings().eq(0).html()
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select shopsrc2 from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							fla.shenti.css({
								'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
							})
						}, function(ta, err) {})

					})
				})
				//购买
				$(".div_goumai").click(function() {
					if(confirm("确定要购买吗？")) {
						var yyshopid; //保存id
						var yyspeed; //保存速度
						var yyleed; //保存等级
						var yyleixin; //保全类型
						var yymoney; //保存价格
						var name = $(this).parent().siblings().eq(0).html()
						mysql_kc.transaction(function(tx) {
							tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
								if(quanju_money < rel.rows.item(0).shopjiage) {
									alert("余额不足")
								} else {
									yyshopid = rel.rows.item(0).shopid
									yyspeed = rel.rows.item(0).speed;
									yyleed = rel.rows.item(0).level;
									yyleixin = rel.rows.item(0).shopleixin;
									yymoney = rel.rows.item(0).shopjiage;
									console.log(yymoney)
									console.log(rel);
									mysql_kc.transaction(function(tx) {
										tx.executeSql("select * from mycheku202 where shopid=" + yyshopid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
											if(rel.rows.length > 0) {
												alert("已经拥有此商品")
											} else {

												mysql_kc.transaction(function(tx) {
													tx.executeSql("insert into mycheku202(shopid,myspeed,myshopleixin,mylevel,mname)" +
														"values(" + yyshopid + "," + yyspeed + ",'" + yyleixin + "'," + yyleed + ",'" + quanju_name + "')", [],
														function(ta, rel) {
															mysql_kc.transaction(function(tx) {
																tx.executeSql("update user set usermoney=usermoney-" + yymoney + " where username='" + quanju_name + "'", [], function(ta, rel) {
																	mysql_kc.transaction(function(tx) {
																		tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {

																			quanju_money = rel.rows.item(0).usermoney;
																			fla.left_shop_4.html("我的金币：" + rel.rows.item(0).usermoney);
																		}, function(ta, err) {
																			console.log(err.message)
																		})
																	})
																	//fla.left_shop_4.html("我的金币："+rel.rows.item(0).usermoney);
																}, function(ta, err) {
																	console.log(err.message)
																})
															})

															alert("购买成功")
														},
														function(ta, err) {
															console.log(err.message)
														})
												})
											}
										}, function(ta, err) {})
									})
								}

							}, function(ta, err) {})

						})
					}
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
						//预览
						$(".div_yulan").click(function() {
							var name = $(this).parent().siblings().eq(0).html()
							mysql_kc.transaction(function(tx) {
								tx.executeSql("select shopsrc2 from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
									console.log(rel)
									fla.shenti.css({
										'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
									})
								}, function(ta, err) {})

							})
						})
						//购买
						$(".div_goumai").click(function() {
							if(confirm("确定要购买吗？")) {
								var yyshopid; //保存id
								var yyspeed; //保存速度
								var yyleed; //保存等级
								var yyleixin; //保全类型
								var yymoney; //保存价格
								var name = $(this).parent().siblings().eq(0).html()
								mysql_kc.transaction(function(tx) {
									tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
										if(quanju_money < rel.rows.item(0).shopjiage) {
											alert("余额不足")
										} else {
											yyshopid = rel.rows.item(0).shopid
											yyspeed = rel.rows.item(0).speed;
											yyleed = rel.rows.item(0).level;
											yyleixin = rel.rows.item(0).shopleixin;
											yymoney = rel.rows.item(0).shopjiage;
											console.log(yymoney)
											console.log(rel);
											mysql_kc.transaction(function(tx) {
												tx.executeSql("select * from mycheku202 where shopid=" + yyshopid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
													if(rel.rows.length > 0) {
														alert("已经拥有此商品")
													} else {

														mysql_kc.transaction(function(tx) {
															tx.executeSql("insert into mycheku202(shopid,myspeed,myshopleixin,mylevel,mname)" +
																"values(" + yyshopid + "," + yyspeed + ",'" + yyleixin + "'," + yyleed + ",'" + quanju_name + "')", [],
																function(ta, rel) {
																	mysql_kc.transaction(function(tx) {
																		tx.executeSql("update user set usermoney=usermoney-" + yymoney + " where username='" + quanju_name + "'", [], function(ta, rel) {
																			mysql_kc.transaction(function(tx) {
																				tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
																					quanju_money = rel.rows.item(0).usermoney;
																					fla.left_shop_4.html("我的金币：" + rel.rows.item(0).usermoney);
																				}, function(ta, err) {
																					console.log(err.message)
																				})
																			})

																		}, function(ta, err) {
																			console.log(err.message)
																		})
																	})

																	alert("购买成功")
																},
																function(ta, err) {
																	console.log(err.message)
																})
														})
													}
												}, function(ta, err) {})
											})
										}

									}, function(ta, err) {})

								})
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
						//预览
						$(".div_yulan").click(function() {
							var name = $(this).parent().siblings().eq(0).html()
							mysql_kc.transaction(function(tx) {
								tx.executeSql("select shopsrc2 from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
									console.log(rel)
									fla.shenti.css({
										'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
									})
								}, function(ta, err) {})

							})
						})
						//购买
						$(".div_goumai").click(function() {
							if(confirm("确定要购买吗？")) {
								var yyshopid; //保存id
								var yyspeed; //保存速度
								var yyleed; //保存等级
								var yyleixin; //保全类型
								var yymoney; //保存价格
								var name = $(this).parent().siblings().eq(0).html()
								mysql_kc.transaction(function(tx) {
									tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
										if(quanju_money < rel.rows.item(0).shopjiage) {
											alert("余额不足")
										} else {
											yyshopid = rel.rows.item(0).shopid
											yyspeed = rel.rows.item(0).speed;
											yyleed = rel.rows.item(0).level;
											yyleixin = rel.rows.item(0).shopleixin;
											yymoney = rel.rows.item(0).shopjiage;
											console.log(yymoney)
											console.log(rel);
											mysql_kc.transaction(function(tx) {
												tx.executeSql("select * from mycheku202 where shopid=" + yyshopid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
													if(rel.rows.length > 0) {
														alert("已经拥有此商品")
													} else {

														mysql_kc.transaction(function(tx) {
															tx.executeSql("insert into mycheku202(shopid,myspeed,myshopleixin,mylevel,mname)" +
																"values(" + yyshopid + "," + yyspeed + ",'" + yyleixin + "'," + yyleed + ",'" + quanju_name + "')", [],
																function(ta, rel) {
																	mysql_kc.transaction(function(tx) {
																		tx.executeSql("update user set usermoney=usermoney-" + yymoney + " where username='" + quanju_name + "'", [], function(ta, rel) {
																			mysql_kc.transaction(function(tx) {
																				tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
																					quanju_money = rel.rows.item(0).usermoney;
																					fla.left_shop_4.html("我的金币：" + rel.rows.item(0).usermoney);
																				}, function(ta, err) {
																					console.log(err.message)
																				})
																			})

																		}, function(ta, err) {
																			console.log(err.message)
																		})
																	})

																	alert("购买成功")
																},
																function(ta, err) {
																	console.log(err.message)
																})
														})
													}
												}, function(ta, err) {})
											})
										}

									}, function(ta, err) {})

								})
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
	//触发
	this.right_left_1.trigger("click")
	//车子按钮
	this.right_left_2.on("click", function() {
		var $rongqi123 = $('<div></div>'); //容器1
		var yulan = $('<div></div>') //预览容器
		fla.right_bottom_conent.empty(); //清空
		fla.right_last.remove();
		fla.right_yema.remove();
		fla.right_next.remove();

		mysql_kc.transaction(function(tx) {
			tx.executeSql('select * from shopkc111 where shopleixin="车子"', [], function(ta, rel) {
				var l = rel.rows.length;
				console.log(l)
				for(var i = 0; i < l; i++) {

					fla.div_zb = $('<div class="div_zb"></div>') //装备框
					fla.div_zb_top = $('<div class="div_zb_top">' + rel.rows.item(i).shopname + '</div>') //装备上div
					fla.div_zb_middle = $('<div class="div_zb_middle"></div>') //装备中div
					fla.div_zb_middle.css({
						'background': 'url(' + rel.rows.item(i).shopsrc1 + ') center no-repeat'
					})
					fla.div_zb_bottom = $('<div class="div_zb_bottom">价格:' + rel.rows.item(i).shopjiage + '</div>') //装备下div
					fla.div_zb_foot = $('<div class="div_zb_foot"></div>') //装备底div
					fla.div_goumai = $('<p class="div_goumai"></p>') //购买按钮
					fla.div_yulan = $('<p class="div_yulan"></p>') //预览按钮
					fla.div_zb_foot.append(fla.div_goumai, fla.div_yulan)

					fla.right_last = $('<div id="right_last"></div>') //上一页
					fla.right_next = $('<div id="right_next"></div>') //下一页
					fla.right_yema = $('<div id="right_yema">1</div>') //页码

					fla.div_zb.append(fla.div_zb_top, fla.div_zb_middle, fla.div_zb_bottom, fla.div_zb_foot)
					$rongqi123.append(fla.div_zb);

				}
				fla.right_bottom.append(fla.right_last, fla.right_yema, fla.right_next);

				//默认显示
				console.log($(".div_yulan").children())
				var aaa = $rongqi123.clone(); //存储所有装备框
				danqianye = $(fla.right_yema).html() //获取当前页码
				var star = (danqianye - 1) * 6; //检索开始
				var end = star + 6; //检索结束
				$(aaa).children().each(function(e) {
					if(e >= star && e < end) {

						fla.right_bottom_conent.append($(this)); //显示

					}
				})
				//预览
				$(".div_yulan").click(function() {
					var name = $(this).parent().siblings().eq(0).html()
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select shopsrc2 from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							fla.che.css({
								'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
							})
						}, function(ta, err) {})

					})
				})
				//购买
				$(".div_goumai").click(function() {
					if(confirm("确定要购买吗？")) {
						var yyshopid; //保存id
						var yyspeed; //保存速度
						var yyleed; //保存等级
						var yyleixin; //保全类型
						var yymoney; //保存价格
						var name = $(this).parent().siblings().eq(0).html()
						mysql_kc.transaction(function(tx) {
							tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
								if(quanju_money < rel.rows.item(0).shopjiage) {
									alert("余额不足")
								} else {
									yyshopid = rel.rows.item(0).shopid
									yyspeed = rel.rows.item(0).speed;
									yyleed = rel.rows.item(0).level;
									yyleixin = rel.rows.item(0).shopleixin;
									yymoney = rel.rows.item(0).shopjiage;
									console.log(yymoney)
									console.log(rel);
									mysql_kc.transaction(function(tx) {
										tx.executeSql("select * from mycheku202 where shopid=" + yyshopid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
											if(rel.rows.length > 0) {
												alert("已经拥有此商品")
											} else {

												mysql_kc.transaction(function(tx) {
													tx.executeSql("insert into mycheku202(shopid,myspeed,myshopleixin,mylevel,mname)" +
														"values(" + yyshopid + "," + yyspeed + ",'" + yyleixin + "'," + yyleed + ",'" + quanju_name + "')", [],
														function(ta, rel) {
															mysql_kc.transaction(function(tx) {
																tx.executeSql("update user set usermoney=usermoney-" + yymoney + " where username='" + quanju_name + "'", [], function(ta, rel) {
																	mysql_kc.transaction(function(tx) {
																		tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
																			quanju_money = rel.rows.item(0).usermoney;
																			fla.left_shop_4.html("我的金币：" + rel.rows.item(0).usermoney);
																		}, function(ta, err) {
																			console.log(err.message)
																		})
																	})

																}, function(ta, err) {
																	console.log(err.message)
																})
															})

															alert("购买成功")
														},
														function(ta, err) {
															console.log(err.message)
														})
												})
											}
										}, function(ta, err) {})
									})
								}

							}, function(ta, err) {})

						})
					}
				})
				//下一页
				fla.right_next.on("click", function() {
					var aaa1 = $rongqi123.clone(); //存储所有装备框
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
					var aaa2 = $rongqi123.clone(); //存储所有装备框
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
		var $rongqi2 = $('<div></div>'); //容器1
		fla.right_bottom_conent.empty(); //清空
		fla.right_last.remove();
		fla.right_yema.remove();
		fla.right_next.remove();

		mysql_kc.transaction(function(tx) {
			tx.executeSql('select * from shopkc111 where shopleixin="轮子"', [], function(ta, rel) {
				var l = rel.rows.length;
				console.log(l)
				for(var i = 0; i < l; i++) {

					fla.div_zb = $('<div class="div_zb"></div>') //装备框
					fla.div_zb_top = $('<div class="div_zb_top">' + rel.rows.item(i).shopname + '</div>') //装备上div
					fla.div_zb_middle = $('<div class="div_zb_middle"></div>') //装备中div
					fla.div_zb_middle.css({
						'background': 'url(' + rel.rows.item(i).shopsrc1 + ') center no-repeat'
					})
					fla.div_zb_bottom = $('<div class="div_zb_bottom">价格:' + rel.rows.item(i).shopjiage + '</div>') //装备下div
					fla.div_zb_foot = $('<div class="div_zb_foot"></div>') //装备底div
					fla.div_goumai = $('<p class="div_goumai"></p>') //购买按钮
					fla.div_yulan = $('<p class="div_yulan"></p>') //预览按钮
					fla.div_zb_foot.append(fla.div_goumai, fla.div_yulan)

					fla.right_last = $('<div id="right_last"></div>') //上一页
					fla.right_next = $('<div id="right_next"></div>') //下一页
					fla.right_yema = $('<div id="right_yema">1</div>') //页码

					fla.div_zb.append(fla.div_zb_top, fla.div_zb_middle, fla.div_zb_bottom, fla.div_zb_foot)
					$rongqi2.append(fla.div_zb);

				}
				fla.right_bottom.append(fla.right_last, fla.right_yema, fla.right_next);
				//默认显示
				var aaa = $rongqi2.clone(); //存储所有装备框
				danqianye = $(fla.right_yema).html() //获取当前页码
				var star = (danqianye - 1) * 6; //检索开始
				var end = star + 6; //检索结束
				$(aaa).children().each(function(e) {
					if(e >= star && e < end) {

						fla.right_bottom_conent.append($(this)); //显示

					}
				})
				//预览
				$(".div_yulan").click(function() {
					var name = $(this).parent().siblings().eq(0).html()
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select shopsrc2 from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							fla.lun1.css({
								'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
							})
							fla.lun2.css({
								'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
							})
						}, function(ta, err) {})

					})
				})
				//购买
				$(".div_goumai").click(function() {
					if(confirm("确定要购买吗？")) {
						var yyshopid; //保存id
						var yyspeed; //保存速度
						var yyleed; //保存等级
						var yyleixin; //保全类型
						var yymoney; //保存价格
						var name = $(this).parent().siblings().eq(0).html()
						mysql_kc.transaction(function(tx) {
							tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
								if(quanju_money < rel.rows.item(0).shopjiage) {
									alert("余额不足")
								} else {
									yyshopid = rel.rows.item(0).shopid
									yyspeed = rel.rows.item(0).speed;
									yyleed = rel.rows.item(0).level;
									yyleixin = rel.rows.item(0).shopleixin;
									yymoney = rel.rows.item(0).shopjiage;
									console.log(yymoney)
									console.log(rel);
									mysql_kc.transaction(function(tx) {
										tx.executeSql("select * from mycheku202 where shopid=" + yyshopid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
											if(rel.rows.length > 0) {
												alert("已经拥有此商品")
											} else {

												mysql_kc.transaction(function(tx) {
													tx.executeSql("insert into mycheku202(shopid,myspeed,myshopleixin,mylevel,mname)" +
														"values(" + yyshopid + "," + yyspeed + ",'" + yyleixin + "'," + yyleed + ",'" + quanju_name + "')", [],
														function(ta, rel) {
															mysql_kc.transaction(function(tx) {
																tx.executeSql("update user set usermoney=usermoney-" + yymoney + " where username='" + quanju_name + "'", [], function(ta, rel) {
																	mysql_kc.transaction(function(tx) {
																		tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
																			quanju_money = rel.rows.item(0).usermoney;
																			fla.left_shop_4.html("我的金币：" + rel.rows.item(0).usermoney);
																		}, function(ta, err) {
																			console.log(err.message)
																		})
																	})

																}, function(ta, err) {
																	console.log(err.message)
																})
															})

															alert("购买成功")
														},
														function(ta, err) {
															console.log(err.message)
														})
												})
											}
										}, function(ta, err) {})
									})
								}

							}, function(ta, err) {})

						})
					}
				})
				//上一页
				fla.right_last.on("click", function() {
					var aaa2 = $rongqi2.clone(); //存储所有装备框
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
	//发动机按钮
	this.right_left_4.on("click", function() {
		var $rongqi4 = $('<div></div>'); //容器1
		fla.right_bottom_conent.empty(); //清空
		fla.right_last.remove();
		fla.right_yema.remove();
		fla.right_next.remove();

		mysql_kc.transaction(function(tx) {
			tx.executeSql('select * from shopkc111 where shopleixin="发动机"', [], function(ta, rel) {
				var l = rel.rows.length;
				console.log(l)
				for(var i = 0; i < l; i++) {

					fla.div_zb = $('<div class="div_zb"></div>') //装备框
					fla.div_zb_top = $('<div class="div_zb_top">' + rel.rows.item(i).shopname + '</div>') //装备上div
					fla.div_zb_middle = $('<div class="div_zb_middle"></div>') //装备中div
					fla.div_zb_middle.css({
						'background': 'url(' + rel.rows.item(i).shopsrc1 + ') center no-repeat'
					})
					fla.div_zb_bottom = $('<div class="div_zb_bottom">价格:' + rel.rows.item(i).shopjiage + '</div>') //装备下div
					fla.div_zb_foot = $('<div class="div_zb_foot"></div>') //装备底div
					fla.div_goumai = $('<p class="div_goumai"></p>') //购买按钮
					fla.div_yulan = $('<p class="div_yulan"></p>') //预览按钮
					fla.div_zb_foot.append(fla.div_goumai, fla.div_yulan)

					fla.right_last = $('<div id="right_last"></div>') //上一页
					fla.right_next = $('<div id="right_next"></div>') //下一页
					fla.right_yema = $('<div id="right_yema">1</div>') //页码

					fla.div_zb.append(fla.div_zb_top, fla.div_zb_middle, fla.div_zb_bottom, fla.div_zb_foot)
					$rongqi4.append(fla.div_zb);

				}
				fla.right_bottom.append(fla.right_last, fla.right_yema, fla.right_next);
				//默认显示
				var aaa = $rongqi4.clone(); //存储所有装备框
				danqianye = $(fla.right_yema).html() //获取当前页码
				var star = (danqianye - 1) * 6; //检索开始
				var end = star + 6; //检索结束
				$(aaa).children().each(function(e) {
					if(e >= star && e < end) {

						fla.right_bottom_conent.append($(this)); //显示

					}
				})
				//预览
				$(".div_yulan").click(function() {
					var name = $(this).parent().siblings().eq(0).html()
					mysql_kc.transaction(function(tx) {
						tx.executeSql("select shopsrc2 from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
							console.log(rel)
							fla.mada.css({
								'background': 'url(' + rel.rows.item(0).shopsrc2 + ') center no-repeat'
							})
						}, function(ta, err) {})

					})
				})
				//购买
				$(".div_goumai").click(function() {
					if(confirm("确定要购买吗？")) {
						var yyshopid; //保存id
						var yyspeed; //保存速度
						var yyleed; //保存等级
						var yyleixin; //保全类型
						var yymoney; //保存价格
						var name = $(this).parent().siblings().eq(0).html()
						mysql_kc.transaction(function(tx) {
							tx.executeSql("select * from shopkc111 where shopname='" + name + "'", [], function(ta, rel) {
								if(quanju_money < rel.rows.item(0).shopjiage) {
									alert("余额不足")
								} else {
									yyshopid = rel.rows.item(0).shopid
									yyspeed = rel.rows.item(0).speed;
									yyleed = rel.rows.item(0).level;
									yyleixin = rel.rows.item(0).shopleixin;
									yymoney = rel.rows.item(0).shopjiage;
									console.log(yymoney)
									console.log(rel);
									mysql_kc.transaction(function(tx) {
										tx.executeSql("select * from mycheku202 where shopid=" + yyshopid + " and mname='" + quanju_name + "'", [], function(ta, rel) {
											if(rel.rows.length > 0) {
												alert("已经拥有此商品")
											} else {

												mysql_kc.transaction(function(tx) {
													tx.executeSql("insert into mycheku202(shopid,myspeed,myshopleixin,mylevel,mname)" +
														"values(" + yyshopid + "," + yyspeed + ",'" + yyleixin + "'," + yyleed + ",'" + quanju_name + "')", [],
														function(ta, rel) {
															mysql_kc.transaction(function(tx) {
																tx.executeSql("update user set usermoney=usermoney-" + yymoney + " where username='" + quanju_name + "'", [], function(ta, rel) {
																	mysql_kc.transaction(function(tx) {
																		tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
																			quanju_money = rel.rows.item(0).usermoney;
																			fla.left_shop_4.html("我的金币：" + rel.rows.item(0).usermoney);
																		}, function(ta, err) {
																			console.log(err.message)
																		})
																	})

																}, function(ta, err) {
																	console.log(err.message)
																})
															})

															alert("购买成功")
														},
														function(ta, err) {
															console.log(err.message)
														})
												})
											}
										}, function(ta, err) {})
									})
								}

							}, function(ta, err) {})

						})
					}
				})
				//下一页
				fla.right_next.on("click", function() {
					var aaa1 = $rongqi4.clone(); //存储所有装备框
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
					var aaa2 = $rongqi4.clone(); //存储所有装备框
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

	//充值
	this.left_shop_6.on("click", function() {
		var $czdiv = $('<div id="czdiv"><div id="cz_guanbi">X</div><p id="wenzi">请输入金额：</p><input id="je" type="number">' +
			'<div><input id="cz_qd" type="button" value="确定"></div></div>');
		fla.anquan.append($czdiv);
		$("#cz_guanbi").on("click", function() {
			$("#czdiv").remove()
		})
		$("#cz_qd").on("click", function() {
			var cz_money = $("#je").val();
			mysql_kc.transaction(function(tx) {
				tx.executeSql("update user set usermoney=usermoney+" + cz_money + " where username='" + quanju_name + "'", [], function(ta, rel) {
					alert("充值成功")

				}, function(ta, err) {
					console.log(err.message)
				})
			})
			mysql_kc.transaction(function(tx) {
				tx.executeSql("select * from user where username='" + quanju_name + "'", [], function(ta, rel) {
					quanju_money = rel.rows.item(0).usermoney;
					fla.left_shop_4.html("我的金币：" + rel.rows.item(0).usermoney);
				}, function(ta, err) {
					console.log(err.message)
				})
			})

			$("#czdiv").remove()
		})
	})
	//    进入车库
	this.left_shop_5.on("click", function() {
		callback("车库")
	})
}