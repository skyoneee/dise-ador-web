(function() {
	var id = 1;
	var idUl = 1;
    window.onload = function() {
		document.getElementById('main').ondragstart = function (event) {
            event.dataTransfer.setData("Text",event.target.id);
        }
		
		document.getElementById('main').ondrop = function (event) {
            event.preventDefault();
            event.target.appendChild(document.getElementById(event.dataTransfer.getData("Text")));
        }
		
		function modDiv(div) {
		    div.style.border = '3px solid blue';
            document.getElementById('w').value= String(div.style.width);
			document.getElementById('h').value= String(div.style.height);
			document.getElementById('bg').value= String(div.style.background);
			var ancho,alto,bgdiv;
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
			document.getElementById('enviar').onclick = function() {
				div.style.width = ancho;
				div.style.height = alto;
				div.style.background = bgdiv;
			};

        }
		
		function delDiv(div) {
			div.parentNode.removeChild(div);
		}

        document.getElementById('div').onclick = function() {
			var main = document.getElementById('main');
			var div  = document.createElement('div');
			div.onclick = function() {modDiv(this)};
			div.style.border = '0';
			div.draggable = "true";
			div.id = 'div'+id;
			id+=1;
			div.style.float = 'left';
			div.style.resize = 'both';
			div.style.overflow = 'hidden';
			div.style.height = '50px';
			div.style.width = '50px';
			div.style.background = 'green';
			
			var button = document.createElement("button");
			button.className = 'borrar';
			button.onclick = function() {
				delDiv(this);
			};

			div.appendChild(button);

			main.appendChild(div);
			
        };

        document.getElementById('li').onclick = function() {
			var main = document.getElementById('main');
			var div  = document.createElement('div');
			div.onmouseout = "this.style.border=0";
			div.draggable = "true";
			div.id = 'div'+id;
			id+=1;
			div.style.float = 'left';
				var ul  = document.createElement('ul');
				ul.id = 'div'+idUl;
				idUl+=1;
					var li1  = document.createElement('li');
					li1.style.display = 'inline';
						var a1  = document.createElement('a');
						a1.style.border = '1px solid #fff';
						a1.innerHTML = 'Home';
						a1.style.float = 'left'; 
						a1.style.padding = '10px'; 
						a1.style.background = '#2175bc'; 
						a1.onmouseout= function(){ a1.style.background = '#2175bc';}
						a1.onmouseover= function(){ a1.style.background = '#ccc';}
						a1.style.color = '#fff';
						li1.appendChild(a1);
					ul.appendChild(li1);
					
					var li2  = document.createElement('li');
					li2.style.display = 'inline';
						var a2  = document.createElement('a');
						a2.style.border = '1px solid #fff';
						a2.innerHTML  = 'Login';
						a2.style.float = 'left'; 
						a2.style.padding = '10px'; 
						a2.style.background = '#2175bc'; 
						a2.onmouseout= function(){ a2.style.background = '#2175bc';}
						a2.onmouseover= function(){ a2.style.background = '#ccc';}
						a2.style.color = '#fff';
						li2.appendChild(a2);
					ul.appendChild(li2);
					
					var li3  = document.createElement('li');
					li3.style.display = 'inline';
						var a3  = document.createElement('a');
						a3.style.border = '1px solid #fff';
						a3.innerHTML = 'Register';
						a3.style.float = 'left'; 
						a3.style.padding = '10px'; 
						a3.style.background = '#2175bc';
						a3.onmouseout= function(){ a3.style.background = '#2175bc';}						
						a3.onmouseover= function(){ a3.style.background = '#ccc';}
						a3.style.color = '#fff';
						li3.appendChild(a3);
					ul.appendChild(li3);
			div.appendChild(ul);
			main.appendChild(div);
        };
    };
})();