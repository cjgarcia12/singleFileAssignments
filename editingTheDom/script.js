let firstLi = document.querySelector('ul li');
const applesLi = firstLi.nextElementSibling;
applesLi.innerHTML = 'Granny Smith Apple';
console.log(applesLi);

const oatMilkLi = applesLi.nextElementSibling.nextElementSibling;
oatMilkLi.remove();

const newLi = document.createElement('li');
newLi.innerHTML = 'Kombucha';
const list = document.getElementById('list');
list.appendChild(newLi);

// const allLi = document.querySelectorAll('li');

// let temp = list.children.length;
// for(let i = 0; i < temp; i++) {
//     list.children[0].remove();
// }

// console.log(list.children.length);

while (list.children.length > 0) {
    list.children[0].remove();
}

let newArray = ['protein bars', 'almonds', 'peanut butter'];

for(let i = 0; i < newArray.length; i++) {
    let newLi2 = document.createElement('li');
    newLi2.innerHTML = newArray[i];

    list.appendChild(newLi2);
}


console.log(list.children.length)
// firstLi.nextElementSibling.className = 'important';
for(let i = 0; i < list.children.length; i++) {
    if(list.children[i].innerHTML === 'almonds') {
        list.children[i].className = 'important';
    }
}
