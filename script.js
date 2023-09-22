//your JS code here. If required.
let levelElement = document.getElementById("level");
        let level = 1;
    while(true){
        if(levelElement.tagName === "HTML"){
            break;
        }
        console.log(levelElement)
        levelElement = levelElement.parentNode;
        level++;
    }
        alert(`The level of the element ${level}`);
    f the element ${level}`);
})