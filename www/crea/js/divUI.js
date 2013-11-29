(function() {
	function divsUI(width,height,bgcolor,border,margin,padding, parent) {
		var that = this;
		var divs = DIV_APP.addDiv(width,height,bgcolor,border,margin,padding);
		
		var divc = document.createElement("div");
		divc.style.float = "left";
		divc.id = "div"+(DIV_APP.countDivs());
		divc.onmouseout = "this.style.border=0";
		divc.draggable = "true";
		divc.style.width = divs.getW();
		divc.style.height = divs.getH();
		divc.style.background = divs.getBG();
		divc.style.border = divs.getB();
		divc.style.margin = divs.getM();
		divc.style.padding = divs.getP();
		divc.style.resize = "both";
		divc.style.overflow = "hidden";
		
		var button = document.createElement("button");
		button.className = 'borrar';
		button.onclick = function() {
			DIV_APP.delDiv(divs.getId());
			parent.delDivUI(that);
		};

		divc.appendChild(button);
		this.divs = divs;
		this.container = divc;
		this.remover = button;
		this.parent = parent;
	}

	DIV_APP.divsUI = divsUI;

})();

