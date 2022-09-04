// when the browser reads the html file and when it  found html elements like 
// body, head,html etc it creates a node for each and every element.
// which results in a dom tree

// each node have its type (node is the baap of all these four)
// 1)element - button, div etc
// 2)text - innertext   
// 3)comment - 
// 4)document - queryselector , getidbyelement

// each node have inheritence from their parent that is node

//node itself have parent that is eventtarget -which contains eventlisteners 

// 🔻 to select 

document.getElementById("button")//to select something with id
document.querySelector(".button");//to select something with class or id 
document.querySelectorAll(".button")////to select all with id or class
document.getElementsByClassName("button");////to select something with class 
document.getElementsByTagName("button");//to select something with tag name 

// note :- the tagname and classname will update it nodes whenever their is change or deletion in elements


// 🔻to create

let b = document.querySelector(".bod");
let ele = document.createElement("div"); //the element is now created
// now add something in that element
ele.textContent = "hey connections";
// if we want to add html inside this ele then we can use innerhtml
// ele.innerHTML = `<div>haha</div>`
// now we can add class attribute in this element
ele.classList.add("message");
// now we have to put it inside our dom then
//  if we want to put it as first child then use prepend
b.prepend(ele);
// if we want to put it as last child then use append
b.append(ele);
// note:- if we try to add one element twice by ap   pend or prepend then the last method to 
// add will be displayed because one element can be present only one time in dom
// its like one person can go somewhere one place at a time

// if we want to add same element multiple time then we can clone it 
b.prepend(ele.cloneNode(true)) //if we pass true in clonenode then it will copy all the child elements inside it

// 🔻to delete
// document.querySelector(".message").addEventListener("click",function(e){
//     ele.remove(); 
//     console.log(e);
// })

document.querySelectorAll('.message').forEach(item => {
  item.addEventListener('click', event => {
    ele.remove();
  })
})

// 🔻to style
ele.style.color="red";
