var text1 = document.createElement("h2")
text1.innerText = "Task-1"
document.body.append(text1)
var ul = document.createElement("ul");
var l1 = document.createElement("li");
l1.innerText = "Text-1";
var l2 = document.createElement("li");
l2.innerText = "Text-2";
var l3 = document.createElement("li");
l3.innerText = "Text-3";
var l4 = document.createElement("li");
l4.innerText = "Text-4";
var l5 = document.createElement("li");
l5.innerText = "Text-5";
ul.append(l1, l2, l3, l4, l5);
document.body.append(ul);
var text2 = document.createElement("h2")
text2.innerText = "Task-2"
document.body.append(text2)
var div1 = document.createElement("div")
var p = document.createElement("p")
p.innerText = "The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. "
div1.append(p)
document.body.append(div1)

var text3 = document.createElement("h2")
text3.innerText = "Task-3"
document.body.append(text3)
var div2 = document.createElement("div")
div2.className = "item"
var h1 = document.createElement("h1")
h1.innerText = "Heading Tag"
var p = document.createElement("p")
p.innerText = "Paragraph Tag"
div2.append(h1, p)
document.body.append(div2)

var text4 = document.createElement("h2")
text4.innerText = "Task-4"
document.body.append(text4)
var table = document.createElement("table")
var caption = document.createElement("caption")
caption.innerText = "Table with one Row"
table.append(caption)
var row = document.createElement("tr")
var column1 = document.createElement("td")
column1.innerText = "column-1"
var column2 = document.createElement("td")
column2.innerText = "column-2"
var column3 = document.createElement("td")
column3.innerText = "column-3"
row.append(column1, column2, column3)
table.append(row)
document.body.append(table)

var text5 = document.createElement("h2")
text5.innerText = "Task-5"
document.body.append(text5)

var div3 = document.createElement("div")
div3.className = "item1"
var button_1 = document.createElement("button")
var button_2 = document.createElement("button")
var button_3 = document.createElement("button")
var button_4 = document.createElement("button")
var button_5 = document.createElement("button")
button_1.innerText = "btn-1"
button_2.innerText = "btn-2"
button_3.innerText = "btn-3"
button_4.innerText = "btn-4"
button_5.innerText = "btn-5"
div3.append(button_1, button_2, button_3, button_4, button_5)
document.body.append(div3)