/*
copy the selected text to clipboard
*/
function translateSelection(e) {
	var selectedText = window.getSelection().toString().trim();

	if (selectedText) {
		callTranslateService(selectedText);
	}
}

function showTranslatedText(serviceResponse) {
	if (serviceResponse.code != 200) return false;

	var translatedText;
	if (Array.isArray(serviceResponse.text)) {
		translatedText = serviceResponse.text.join(' ');
	} else if(typeof serviceResponse.text === 'string') {
		translatedText = serviceResponse.text;
	}
	console.log(translatedText);
}

function callTranslateService(text) {
	var http = new XMLHttpRequest();

	var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
	var params = "key=trnsl.1.1.20170219T125209Z.187697a50cc795c9.ccb498f53c41e747be967d92c3ac32138216ebc3&lang=pt&text="+text;
	http.open("POST", url, true);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState == 4 && http.status == 200) {
			var obj = JSON.parse(http.responseText)
			showTranslatedText(obj);
		}
	}
	http.send(params);
}
/*
Add translateSelection() as a listener to mouseup events.
*/
document.addEventListener("mouseup", translateSelection);
