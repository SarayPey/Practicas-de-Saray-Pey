async function ocsLoad(){
	let responseOC = await fetch('../json/ocs.json');
	let ocJSON = await responseOC.json();
	let charFather = document.querySelector('#ocs');
	let characters = ocJSON;

	function ocShow(){
		for(oc of characters){
			let ocP = document.createElement('div');
			let nameOC = document.createElement('h3');
			let ageOC = document.createElement('p');
			nameOC.innerHTML = `<b>${oc["nombre"]}</b>`;
			ageOC.innerHTML = `<b>Edad:</b> ${oc["edad"]} (${oc["nacimiento"]})`;
			charFather.appendChild(ocP);
			charFather.appendChild(ageOC);
			ocP.appendChild(nameOC);
		};
	};

	if(characters.length > 0){
		charFather.innerHTML = `OCs creados: <b>${characters.length}</b>.`
		ocShow();
	} else {
		charFather.innerHTML = "<b>No hay</b>";
	};
};

ocsLoad();
