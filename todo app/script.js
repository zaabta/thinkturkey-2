const listItems = document.querySelectorAll("li");

for(var i = 0; i < listItems.length; i++){
    listItems[i].style = `background-color: 
    rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
}
