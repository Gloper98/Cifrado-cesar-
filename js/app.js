function begin(){
  var $msge = $('#encode');
	var $encodeBtn = $('#encode-btn');
	var $decodeBtn = $('#decode-btn');
	var $code = $('#code');
	
	function reload(){
		window.location.href='index.html';
	}
	
	function encode(e){
		var newString = [];
		var $inputValue = $msge.val();
		if($inputValue.length === 0){
			alert('You shoul enter at least a letter');
		} else {
			var firstStep = $inputValue.replace(/(^\s*)|(\s*$)/gi,'').replace(/[ ]{2,}/gi,' ').toLowerCase();
			console.log(firstStep);
			for(var i =0;i< firstStep.length;i++){
				if(firstStep[i]*0 !== 0){
					if(firstStep.charCodeAt(i) >= 97 && firstStep.charCodeAt(i) <= 122){
					  var ascciCode =firstStep.charCodeAt(i);
					  var newAscciCode = (ascciCode-65+33)%26+65;
						var encodedString =String.fromCharCode(newAscciCode);
						newString.push(encodedString);
				  }
				} else if (firstStep.charCodeAt(i) === 32) {
					newString.push(' ');
				} else {
				  $msge.val('');
					newString = ['You can not enter numbers,',' just letters please :)'];
					}
			}
		}
		if(newString.join('')*0!==0){
			$code.text(newString.join(''));
		} else {
			$msge.val('');
			$code.text('You can not use just the bar space my friend, type some fun things');
		}
	}
	$encodeBtn.click(encode);
}

$(document).ready(begin);