onload = (() => { 
  let msge = document.getElementById('encode');
	let encodeBtn = document.getElementById('encode-btn');
	let decodeBtn = document.getElementById('decode-btn');
	let code = document.getElementById('code');
	let valueInput = document.getElementById('value-input');
	var encode =(e) =>{
		valueInput.innerText = msge.value;
		let newString = [];
		const inputValue = msge.value;
		if(inputValue.length === 0){
			code.innerText='You should enter at least a letter in the input';
		} else {
			let firstStep = inputValue.replace(/(^\s*)|(\s*$)/gi,'').replace(/[ ]{2,}/gi,' ').toLowerCase();
			for(var i =0;i< firstStep.length;i++){
				if(firstStep[i]*0 !== 0){
					if(firstStep.charCodeAt(i) >= 97 && firstStep.charCodeAt(i) <= 122){
					  let ascciCode =firstStep.charCodeAt(i);
					  let newAscciCode = (ascciCode-65+33)%26+65;
						let encodedString =String.fromCharCode(newAscciCode);
						newString.push(encodedString);
						console.log(ascciCode);
				  }
				} else if (firstStep.charCodeAt(i) === 32) {
					newString.push(' ');
				} else {
				  msge.value='';
					newString = ['You can not enter numbers,',' just letters please :)'];
					}
				  msge.value='';
				  code.innerText = newString.join('');
			}
		}
		msge.value='';
	}
	
	var preEncode = (e)=>{
		if(e.keyCode == 13){
			encode();
		}
	}
	
	encodeBtn.addEventListener('click', encode);
	window.addEventListener('keypress', preEncode);
})()