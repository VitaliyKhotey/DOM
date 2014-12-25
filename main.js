 window.onload = function(){

	var d = document,
		add = d.getElementById("add"),
		ul = d.getElementById("list"),
		liFirst = ul.firstChild.nextSibling,
		deletei = d.getElementById("delete"),
		ais = d.getElementById("addStart"),
		selectFirst = d.getElementById("selectFirst"),
		selectLast = d.getElementById("selectLast"),
		selectNext = d.getElementById("selectNext"),
		selecrPrevios = d.getElementById("selectPrevios"),
		i = 0;

		add.onclick = function() {

			var input = d.getElementById("val"),
				newLi = d.createElement("li"),
				content = d.createTextNode(input.value);

			newLi.appendChild(content);
			ul.appendChild(newLi);
			
			input.value = "";

			return false;
		}

		selectFirst.onclick = function() {
			var liLast = ul.lastChild,
			liFirst = ul.firstChild.nextSibling;
			
			liFirst.style.color = "red";

			if (liLast.style.color == "green") {
				liLast.style.color = "black";
			};
			
			return false;
		}

		selectLast.onclick = function() {

			var liLast = ul.lastChild;
			liLast.style.color = "green";
			
			if (liFirst.style.color == "red") {
				liFirst.style.color = "black";
			};
			
			return false;
		}

		selectNext.onclick = function() {

			var li = d.getElementsByTagName("li");
			++i;
			if (li[i] !== undefined) {
				console.log(li[i]);
			} else if(li[i] == undefined){
				console.log("Have not element");
			}
			
			return false;
		}

		selectPrevios.onclick = function() {
			
			var li = d.getElementsByTagName("li");

			--i;
			if (li[i] !== undefined) {
				console.log(li[i]);
			} else if(li[i] == undefined){
				console.log("Have not element");
			}

			return false;
		}

		deletei.onclick = function() {

			var liLast = ul.lastChild.remove();

			return false;
		}

		ais.onclick = function() {
			
			var input = d.getElementById("val"),
				newLi = d.createElement("li");

			newLi.innerHTML = input.value;
			ul.insertBefore(newLi, ul.firstChild.nextSibling);

			input.value = "";

			return false;
		}



};
