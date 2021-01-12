import Hero from './hero.js'
const ul = document.createElement('ul')
console.log(Hero)
for(let key in Hero){
    let li = document.createElement('li')
    li.textContent = key + ' - ' + Hero[key]
    ul.appendChild(li)
}

document.querySelector('body').appendChild(ul)