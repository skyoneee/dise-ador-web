(function() {

    var parent = {
    };

    var dUI = [];
    var ancho,alto,bgdiv,borde,margen,pad;
    window.onload = function() {

        document.getElementById('w').onkeypress = function(event) {
			ancho= event.target.value;
        };
		
		document.getElementById('h').onkeypress = function(event) {
			alto= event.target.value;
        };
		
		document.getElementById('bg').onkeypress = function(event) {
			bgdiv= event.target.value;
        };
		
		document.getElementById('b').onkeypress = function(event) {
			borde= event.target.value;
        };
		
		document.getElementById('m').onkeypress = function(event) {
			margen= event.target.value;
        };
		
		document.getElementById('p').onkeypress = function(event) {
			pad= event.target.value;
        };

        document.getElementById('enviar').onclick = function() {
            addDiv(ancho,alto,bgdiv,borde,margen,pad);
        };

    };

    function addDiv(ancho,alto,bgdiv,borde,margen,pad) {
			debugger
				console.log(ancho);
							console.log(alto);
										console.log(bgdiv);
				console.log(borde);
							console.log(margen);
										console.log(pad);
            var divUI = new DIV_APP.divsUI(ancho,alto,bgdiv,borde,margen,pad, parent);
            dUI.push(divUI);
            document.getElementById('main').appendChild(divUI.container);
            return true;
    }



   
})();


