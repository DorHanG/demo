function Ditu(odd, hhh) {
	var fla = this;
	this.$div = $('<div id="game_sc"></div>');
	this.$div.css({
		"background": "url(" + hhh + ")",
		"width": "14400",
		"height": "100%",
		"background-size": "100% 100%",
		"position": "absolute",
		"top": "0px",
		"z-index": "-1"
	})
	var height = $(window).height();
	var t1 = height * 0.77 //限制下  580
	var t2 = height * 0.36 //限制上  310
	var h_top = height / 2;
	var sud = 0;
	var sud1 = 0;
	odd.append(this.$div);
	this.move = function(spx) {
		sud -= spx;
		this.$div.css({
			"left": +sud + "px"
		})
	}
	this.move2 = function(spx) {

		sud1 += spx;
		this.$div.css({
			"top": +sud1 + "px"
		})
	}

	var arr = [];
	for(var i = 0; i <= 11000; i++) {
		arr.push(i);

	}

	//金币

	for(var w = 0; w < 30; w++) {
		var j = Math.ceil(Math.random() * (arr.length))
		var nn = arr[j];
		arr.splice(j, 100)
		arr.splice(j - 100, 100)

		var kkk = new jb_money();
		var num_y = Math.random() * (t1 - t2);
		kkk.$div111.css({
			"position": "absolute",
			"left": 500 + nn + "px",
			"top": h_top + num_y + "px",
			"z-index": "50"
		})
		$(this.$div).append(kkk.$div111);

	}

	//木桶

	for(var w1 = 0; w1 < 8; w1++) {
		var j = Math.ceil(Math.random() * (arr.length))
		var nn = arr[j];
		console.log(j)
		arr.splice(j, 100)
		arr.splice(j - 100, 100)

		var ccc = new jb_money();
		var num_y = Math.random() * (t1 - t2);
		ccc.mut_div.css({
			"position": "absolute",
			"left": 500 + nn + "px",
			"top": h_top + num_y + "px",
			"z-index": "50"
		})
		$(this.$div).append(ccc.mut_div);

	}
	//水坑
	for(var w2 = 0; w2 < 8; w2++) {
		var j = Math.ceil(Math.random() * (arr.length))
		var nn = arr[j];
		arr.splice(j, 100)
		arr.splice(j - 100, 100)

		var sss = new jb_money();
		var num_y = Math.random() * (t1 - t2);
		sss.wate_div.css({
			"position": "absolute",
			"left": 500 + nn + "px",
			"top": h_top + num_y + "px",
			"z-index": "50"
		})
		$(this.$div).append(sss.wate_div);

	}
	//沙地
	for(var w3 = 0; w3 < 8; w3++) {
		var j = Math.ceil(Math.random() * (arr.length))
		var nn = arr[j];
		arr.splice(j, 100)
		arr.splice(j - 100, 100)

		var shadi = new jb_money();
		var num_y = Math.random() * (t1 - t2);
		shadi.sha_div.css({
			"position": "absolute",
			"left": 500 + nn + "px",
			"top": h_top + num_y + "px",
			"z-index": "50"
		})
		$(this.$div).append(shadi.sha_div);

	}

}