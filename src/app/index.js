import Teacher from './user.js'
import './some.scss'

const {name, job} = Teacher

const heading = document.createElement('h3');
heading.textContent = `Welcome ${name}`;
heading.classList.add('heading')
document.body.append(heading)