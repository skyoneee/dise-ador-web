(function() {
	function divsUI(width,height,bgcolor,border,margin,padding, parent) {
		var that = this;
		var divs = DIV_APP.addDiv(width,height,bgcolor,border,margin,padding);
		
		var divc = document.createElement("div");
		divc.style.width = divs.getW();
		divc.style.height = divs.getH();
		divc.style.background = divs.getBG();
		divc.style.border = divs.getB();
		divc.style.margin = divs.getM();
		divc.style.padding = divs.getP();
		
		this.divs = divs;
		this.container = divc;
		this.parent = parent;
	}

	DIV_APP.divsUI = divsUI;

})();

