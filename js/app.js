function begin(){
  var $msge = $('#encode');
	var $encodeBtn = $('#encode-btn');
	var $decodeBtn = $('#decode-btn');
	var $code = $('#code');
	var $valueInput = $('#value-input');
	function encode(e){
		$valueInput.text($msge.val());
		var newString = [];
		var $inputValue = $msge.val();
		if($inputValue.length === 0){
			$code.text('You should enter at least a letter in the input');
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
				  $msge.val('');
				  $code.text(newString.join(''));
			}
		}
		$msge.val('');
	}
	$encodeBtn.click(encode);
}

$(document).ready(begin);