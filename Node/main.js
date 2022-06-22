var articleDiv = document.querySelector("div.article");
// находим узел, который будем заменять - первый параграф
var oldNode = document.querySelectorAll("div.article p")[0];
// создаем элемент
var newNode = document.createElement("h2");
// создаем для него текст
var elemText = document.createTextNode("Привет мир");
// добавляем текст в элемент в качестве дочернего элемента
newNode.appendChild(elemText);
// заменяем старый узел новым
articleDiv.replaceChild(newNode, oldNode);