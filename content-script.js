/*
copy the selected text to clipboard
*/
function translateSelection(e) {
	var selectedText = window.getSelection().toString().trim();

	if (selectedText) {
		console.log(selectedText);
		//traslate here
	}

}

/*
Add translateSelection() as a listener to mouseup events.
*/
document.addEventListener("mouseup", translateSelection);
