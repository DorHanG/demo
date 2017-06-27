function jb_money() {
	this.$div = $("<div id='cdcd'></div>"); //最后的div
	this.$div.css({
		"width": "300px",
		"height": "300px"
	}) //样式
	var cav = $("<canvas></canvas>"); //画布
	cav[0].width = "60" //画布样式
	cav[0].height = "60";

	var ctx = cav[0].getContext('2d');
	var h = 0;

	var jbimg = new Image(); //定义图片
	jbimg.src = "images/money.png";
	timee_jb = setInterval(function() { //定时器 画布做的内容
		//console.log(jbimg)
		ctx.beginPath();
		ctx.clearRect(0, 0, 60, 60);
		ctx.drawImage(jbimg, 60 * h, 0, 60, 60, 0, 0, 60, 60);
		h++;
		if(h == 20) {
			h = 0;
		}
		ctx.closePath();
	}, 200)

	this.$div111 = $("<div class='asw'></div>");
	this.$div111.css({
		"width": "60px",
		"height": "60px"
	})
	this.$div111.append(cav);
	this.$div.append(this.$div111);

	//木桶
	this.mut_div = $("<div class='mut_div'></div>")
	this.mut_div.css({
		"width": "102px",
		"height": "70px",
		"background": "url(images/tong.png) no-repeat center"
	});

	//水坑
	this.wate_div = $("<div class='wate_div'></div>")
	this.wate_div.css({
		"width": "102px",
		"height": "70px",
		"background": "url(images/water.png) no-repeat center"
	});

	//沙地
	this.sha_div = $("<div class='sha_div'></div>")
	this.sha_div.css({
		"width": "254px",
		"height": "34px",
		"background": "url(images/stang.png) no-repeat center"
	});
}