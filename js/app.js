function begin(){
  var msge = document.getElementById('encode');
	var encodeBtn = document.getElementById('encode-btn');
	var decodeBtn = document.getElementById('decode-btn');
	var code = document.getElementById('code');
	var valueInput = document.getElementById('value-input');
	var encode =(e) =>{
		valueInput.innerText = msge.value;
		var newString = [ ];
		var inputValue = msge.value;
		if(inputValue.length === 0){
			code.innerText='You should enter at least a letter in the input';
		} else {
			var firstStep = inputValue.replace(/(^\s*)|(\s*$)/gi,'').replace(/[ ]{2,}/gi,' ').toLowerCase();
			for(var i =0;i< firstStep.length;i++){
				if(firstStep[i]*0 !== 0){
					if(firstStep.charCodeAt(i) >= 97 && firstStep.charCodeAt(i) <= 122){
					  var ascciCode =firstStep.charCodeAt(i);
					  var newAscciCode = (ascciCode-65+33)%26+65;
						var encodedString =String.fromCharCode(newAscciCode);
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
	encodeBtn.addEventListener('click', encode);
}

window.onload= begin;