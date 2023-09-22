//your JS code here. If required.
documnet.addEventListener("DOMContentLoader",() => {
	

let levelElement = document.getElementByid("level");
	let level = 1;
while(true){
	if(levelElement.tagName === "HTML"){
		break;
	}
	levelElement = levelElement.parentNode;
	level++;
}
	alert(`The level of the element ${level}`);
})