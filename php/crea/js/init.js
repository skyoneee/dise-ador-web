(function() {

    var parent = {
		delDivUI: delDivUI
    };

    var dUI = [];
    var ancho,alto,bgdiv,borde,margen,pad;
    window.onload = function() {
		document.getElementById('main').ondragstart = function (event) {
            event.dataTransfer.setData("Text",event.target.id);
        }
		
		document.getElementById('main').ondrop = function (event) {
            event.preventDefault();
            event.target.appendChild(document.getElementById(event.dataTransfer.getData("Text")));
        }
		
        document.getElementById('w').onkeypress = function(event) {
			if (event.keyCode === 13) {
				this.blur();
            }
			w.addEventListener('blur', function() {
			   ancho= event.target.value;
			});
        };
		document.getElementById('h').onkeypress = function(event) {
			if (event.keyCode === 13) {
				this.blur();
            }
			h.addEventListener('blur', function() {
			   alto= event.target.value;
			});
        };
		
		document.getElementById('bg').onkeypress = function(event) {
			if (event.keyCode === 13) {
				this.blur();
            }
			bg.addEventListener('blur', function() {
			   bgdiv= event.target.value;
			});
			
        };
		
		document.getElementById('b').onkeypress = function(event) {
			if (event.keyCode === 13) {
				this.blur();
            }
			b.addEventListener('blur', function() {
			   borde= event.target.value;
			});
			
        };
		
		document.getElementById('m').onkeypress = function(event) {
			if (event.keyCode === 13) {
				this.blur();
            }
			m.addEventListener('blur', function() {
			   margen= event.target.value;
			});
			
        };
		
		document.getElementById('p').onkeypress = function(event) {
			if (event.keyCode === 13) {
				this.blur();
            }
			p.addEventListener('blur', function() {
			   pad= event.target.value;
			});
			
        };

        document.getElementById('div-enviar').onclick = function() {
            addDiv(ancho,alto,bgdiv,borde,margen,pad);
        };

    };

    function addDiv(ancho,alto,bgdiv,borde,margen,pad) {
		var divUI = new DIV_APP.divsUI(ancho,alto,bgdiv,borde,margen,pad, parent);
		dUI.push(divUI);
		document.getElementById('main').appendChild(divUI.container);
		return true;
    }
	
    function delDivUI(divUI) {
        document.getElementById('main').removeChild(divUI.container);
        var removed = false,
        i = 0;
        while (!removed && i < dUI.length) {
            if (dUI[i] === divUI) {
                dUI.splice(i, 1);
                removed = true;
            } else {
                i++;
            }
        }
    }
})();


