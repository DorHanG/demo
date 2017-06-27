function zh_end(callback){
    this.$div=$("<div id='end'></div>");
    this.$div.css({
        "background": "url(images/bg.jpg)",
        "width": "100%",
        "height": "100%",
        "background-size":"100% 100%",
        "position": "absolute",
        "top":"0px"
    })
    var anquankuan_end=$("<div id='anquan_end'></div>"); //安全框
    var conent_top=$("<div id='end_top'></div>");  //上
    var conent_top_con=$("<div id='end_bom'></div>");  // 上框内容  奖杯图片
    var rw_end1=$("<div id='rw_end1'></div>")   //领奖1

    var rw_end1_time=$("<div id='rw_end1_time'></div>")
    rw_end1.append(rw_end1_time)
    var rw_end2=$("<div id='rw_end2'></div>")   //领奖2
    var rw_end2_time=$("<div id='rw_end1_time'></div>")
    rw_end2.append(rw_end2_time)
    var rw_end3=$("<div id='rw_end3'></div>")   //领奖3
    var rw_end3_time=$("<div id='rw_end1_time'></div>")
    rw_end3.append(rw_end3_time)

    rw_end1.css({"-webkit-animation":"bbb 2s linear infinite"})
    rw_end2.css({"-webkit-animation":"bbb 2s linear infinite"})
    rw_end3.css({"-webkit-animation":"bbb 2s linear infinite"})

    conent_top_con.append(rw_end1,rw_end2,rw_end3)
    var right=$("<div id='r_end'></div>")  //右框

    var right_xsl=$("<div id='right_xsl'></div>")  //显示名次栏
    var right_end=$("<div id='right_end'></div>") //右人物框
    var money_div=$('<div id="money_div1"></div>')  //钱的 div
    right.append(money_div,right_end);


    right_xsl.html("第"+cc_mc+"名"+"<br/>"+cc_time)

    //显示车手
    mysql_kc.transaction(function(tx){
        tx.executeSql("select * from shopkc111 where shopsrc2='"+sheshou_img+"'",[]
        ,function(ta,rel){
                var img_end=rel.rows.item(0).shopsrc3;
                console.log(img_end)
                if(cc_mc==1)
                {
                    // 获取显示名次和金币
                    money_div.html(count+"+"+20)
                    count=count+20;
                    //更新金币
                    mysql_kc.transaction(function(tx){
                        tx.executeSql("update user set usermoney=usermoney+"+count+" where username='"+quanju_name+"'",[]
                            ,function(ta,rel){
                          
                            }
                            ,function(ta,err){
                                console.log(err.message)
                            })
                    })
                    mysql_kc.transaction(function(tx){
                        tx.executeSql("select * from user where username='"+quanju_name+"'",[]
                            ,function(ta,rel){
                                quanju_money=rel.rows.item(0).usermoney
                            }
                            ,function(ta,err){
                                console.log(err.message)
                            })
                    })

                    rw_end2.css({ "background": "url("+img_end+")"})
                    right_end.css({ "background": "url("+img_end+") no-repeat 0 center","background-size":"100% 100%"});
                    rw_end1.css({ "background": "url(images/cha01.png)"})
                    rw_end3.css({ "background": "url(images/cha03.png)"})

                    rw_end1_time.html("机器人2"+"<br/>"+"01:10:00")
                    rw_end2_time.html(quanju_name+"<br/>"+cc_time)
                    rw_end3_time.html("机器人1"+"<br/>"+"01:18:00")
                }
                else if(cc_mc==2)
                {
                    // 获取显示名次和金币
                    money_div.html(count+"+"+10)
                    count=count+10;
                    //更新金币
                    mysql_kc.transaction(function(tx){
                        tx.executeSql("update user set usermoney=usermoney+"+count+" where username='"+quanju_name+"'",[]
                            ,function(ta,rel){
                            }
                            ,function(ta,err){
                                console.log(err.message)
                            })
                    })
                    mysql_kc.transaction(function(tx){
                        tx.executeSql("select * from user where username='"+quanju_name+"'",[]
                            ,function(ta,rel){
                                quanju_money=rel.rows.item(0).usermoney
                            }
                            ,function(ta,err){
                                console.log(err.message)
                            })
                    })


                    rw_end1.css({ "background": "url("+img_end+")"})
                    right_end.css({ "background": "url("+img_end+") no-repeat 0 center","background-size":"100% 100%"});
                    rw_end2.css({ "background": "url(images/cha01.png)"})
                    rw_end3.css({ "background": "url(images/cha03.png)"})

                    rw_end2_time.html("机器人2"+"<br/>"+"01:10:00")
                    rw_end1_time.html(quanju_name+"<br/>"+cc_time)
                    rw_end3_time.html("机器人1"+"<br/>"+"01:18:00")
                }
                else if(cc_mc==3)
                {
                    // 获取显示名次和金币
                    money_div.html(count+"+"+0)
                    count=count+0;
                    //更新金币
                    mysql_kc.transaction(function(tx){
                        tx.executeSql("update user set usermoney=usermoney+"+count+" where username='"+quanju_name+"'",[]
                            ,function(ta,rel){
                                
                            }
                            ,function(ta,err){
                                console.log(err.message)
                            })
                    })
                    mysql_kc.transaction(function(tx){
                        tx.executeSql("select * from user where username='"+quanju_name+"'",[]
                            ,function(ta,rel){
                                quanju_money=rel.rows.item(0).usermoney
                            }
                            ,function(ta,err){
                                console.log(err.message)
                            })
                    })


                    rw_end3.css({ "background": "url("+img_end+")"})
                    right_end.css({ "background": "url("+img_end+") no-repeat 0 center","background-size":"100% 100%"});
                    rw_end2.css({ "background": "url(images/cha01.png)"})
                    rw_end1.css({ "background": "url(images/cha03.png)"})

                    rw_end2_time.html("机器人2"+"<br/>"+"01:10:00")
                    rw_end3_time.html(quanju_name+"<br/>"+cc_time)
                    rw_end1_time.html("机器人1"+"<br/>"+"01:18:00")
                }

            }
        ,function(ta,err){
                console.log(err.message)
            })
    })

    var bom_end=$("<div id='bom_end'></div>");  //下 --所有按钮
    var bom_end_1=$("<div id='bom_end_123'></div>");
    var bom_end_2=$("<div id='bom_end_2'></div>");
    var bom_end_3=$("<div id='bom_end_3'></div>");


    bom_end.append(bom_end_1,bom_end_2,bom_end_3);
    conent_top.append(conent_top_con,right_xsl,right)
    anquankuan_end.append(conent_top,bom_end);



    if(cc_mc==1)
    {
        //开启新关卡
        var gk_zjid_end=gk_zjid+1;
        mysql_kc.transaction(function(tx){
            tx.executeSql("select * from myguankakc where gname="+gk_zjid+" and uname='"+quanju_name+"' and gkji="+gbj_gk+"",[]
            ,function(ta,rel){
                    var r1=rel.rows.item(0).gsrc1;
                    var r2=rel.rows.item(0).gsrc2;
               
                    mysql_kc.transaction(function(tx){
                        tx.executeSql("update myguankakc set gsrc1='"+r2+"' where gname="+gk_zjid+" and uname='"+quanju_name+"' and gkji="+gbj_gk+" ",[]
                        ,function(ta,rel){
                            }
                        ,function(ta,err){
                                console.log(err.message)
                            })
                    });
                    mysql_kc.transaction(function(tx){
                        tx.executeSql("update myguankakc set gsrc1='"+r1+"' where gname="+gk_zjid_end+" and uname='"+quanju_name+"' and gkji="+gbj_gk+" ",[]
                            ,function(ta,rel){
                                alert("成功解锁新关卡")
                            }
                            ,function(ta,err){
                                console.log(err.message)
                            })
                    })
                    mysql_kc.transaction(function(tx){
                        tx.executeSql("update myguankakc set gjiesuo=1 where gname="+gk_zjid_end+" and gkji="+gbj_gk+" and uname='"+quanju_name+"' ")
                    })
                    //判断是否都解锁了  开启新地图
                    mysql_kc.transaction(function(tx){
                        tx.executeSql("select * from myguankakc  where uname='"+quanju_name+"' and gkji="+gbj_gk+" and gjiesuo=1",[]
                        ,function(ta,rel){
                                console.log(rel,rel.rows.length)
                                if(rel.rows.length==6)
                                {
                                    var zjid_end=zjid+1;
                                    mysql_kc.transaction(function(tx){
                                        tx.executeSql("select * from myditukc where mid="+zjid_end+" and uname='"+quanju_name+"'",[]
                                        ,function(ta,rel){
                                                var mr1=rel.rows.item(0).msrc1;
                                                var mr2=rel.rows.item(0).msrc2;
                                                mysql_kc.transaction(function(tx){
                                                    tx.executeSql("update myditukc set msrc1='"+mr2+"' where mid="+zjid_end+" and uname='"+quanju_name+"'",[]
                                                    ,function(ta,rel){
                                                            //alert("成功解锁新地图")
                                                        }
                                                    ,function(te,err){
                                                            console.log(err.message)
                                                        })
                                                })
                                            }
                                        ,function(ta,err){
                                                console.log(err.message)
                                            })
                                    })
                                }
                            }
                        ,function(ta,err){})
                    })
                }
            ,function(ta,err){})
        })
    }



    this.$div.append(anquankuan_end)
 

    bom_end_2.click(function(){
        callback("主页面")
    })

    bom_end_3.on("click",function(){
        callback("游戏")
    })

    bom_end_1.on("click", function () {
        callback("关卡")
    })

}