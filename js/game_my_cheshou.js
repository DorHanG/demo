function Mycheshou(odiv, image, x, y) {

	var height = $(window).height();
	console.log(height)
	var h_end = height - 144;

	this.$div = $("<div id='game_rw'></div>");
	this.div_logo = $("<div id='div_logo'></div>")
	this.div_logo.css({
		"display": "none"
	})
	this.$div.css("position", "absolute");
	this.$div.css({
		"top": y + h_end + "px",
		"left": x + "px",
		"background-size:": "100% 100%"
	})

	this.$div1 = $('<div id="shenti"></div>');
	this.$div1.css({
		"width": "112px",
		"height": "122px",
		"background": "url(" + image[0] + ") no-repeat",
		"position": "absolute",
		"z-index": "10",
		"left": "65px",
		"top": "3px",
		"background-size:": "100% 100%"
	})
	this.$div2 = $('<div id="che" ></div>');
	this.$div2.css({
		"width": "141px",
		"height": "97px",
		"background": "url(" + image[1] + ") no-repeat",
		"position": "absolute",
		"left": "45px",
		"top": "75px",
		"z-index": "5",
		"background-size:": "100% 100%"
	});
	this.$div3 = $('<div id="lun1" ></div>');
	this.$div3.css({
		"width": "45px",
		"height": "45px",
		"background": "url(" + image[2] + ") no-repeat",
		"position": "absolute",
		"top": "100px",
		"left": "45px",
		"background-size:": "100% 100%"
	})

	this.$div4 = $('<div id="lun2"></div>');
	this.$div4.css({
		"width": "45px",
		"height": "45px",
		"background": "url(" + image[3] + ") no-repeat",
		"position": "absolute",
		"top": "100px",
		"left": "135px",
		"background-size:": "100% 100%"
	})
	this.$div.append(this.div_logo, this.$div1, this.$div2, this.$div3, this.$div4);
	odiv.append(this.$div);
	//移动
	var fls = this;
	var height = $(window).height();
	this.yd = 0; //横向
	this.zyd = height - 144; //纵向
	this.move = function(spx, spy) {
		//console.log(spy)
		fls.yd += spx;
		fls.zyd += spy;
		fls.$div.css({
			"left": fls.yd + "px",
			"top": fls.zyd + "px"
		})
	}
	this.move2 = function(spx) {
		fls.yd += spx;
		fls.$div.css({
			"left": fls.yd + "px"
		})
	}
}