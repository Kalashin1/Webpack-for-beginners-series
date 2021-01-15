import Hero from './hero.js'

import './style.scss'

import Image from './6c4017964d32ace94c9524e320f47880.jpg'

const img = document.createElement('img')

const ul = document.createElement('ul')

ul.className = 'hero-list'

img.src = Image

img.className = 'hero-img'


console.log(Hero)
for(let key in Hero){
    let li = document.createElement('li')
    li.textContent = key + ' - ' + Hero[key]
    li.className = 'hero-item'
    ul.appendChild(li)
}
const body = document.querySelector('body')

body.appendChild(img)
body.appendChild(ul)
