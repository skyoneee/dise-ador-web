(function() {

	var root = this;
	var divs = {};
	var numdivs = 0;
	var id = 0;
        
	function reset() {
		divs = {};
		numdivs = 0;
		id = 0;
	}

	function addDiv(width,height,bgcolor,border,margin,padding) {
		var div = {
			getId: (function(myId) {
				return function() {
					return myId;
				};
			}(id)),
			getW: function() {
				return width;
			},
			getH: function() {
				return height;
			},
			getBG: function() {
				return bgcolor;
			},
			getB: function() {
				return border;
			},
			getM: function() {
				return margin;
			},
			getP: function() {
				return padding;
			},
			setW: function(myW) {
				width = myW;
			},
			setH: function(myH) {
				height = myH;
			},
			setBG: function(myBG) {
				bgcolor = myBG;
			},
			setB: function(myB) {
				border = myB;
			},
			setM: function(myM) {
				margin = myM;
			},
			setP: function(myP) {
				padding = myP;
			}
		};
		divs[id] = div;
		numdivs++;
		id++;
		return div;

	}

	function getDiv(id) {
		return divs[id];
	}

	function delDiv(id) {
		var deleted = divs[id];
		deleted.isDeleted = function() {
			return true;
		};
		delete divs[id];
		numdivs--;
		return deleted;
	}

	function modDiv(id,width,height,bgcolor,border,margin,padding) {
		divs[id].setW(width);
		divs[id].setH(height);
		divs[id].setBG(bgcolor);
		divs[id].setB(border);
		divs[id].setM(margin);
		divs[id].setP(padding);
		return divs[id];
	}

	function countdivs() {
		return numdivs;
	}

	root.DIV_APP = {
		addDiv: addDiv,
		getDiv: getDiv,
		delDiv: delDiv,
		modDiv: modDiv,
		countdivs: countdivs,
		reset: reset
	};

}).call(this);