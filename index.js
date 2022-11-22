import './index.css'
import JS_IMAGE from './assets/img.png'

console.log('Hello World!')

const jsImageHTML = document.createElement('img')
jsImageHTML.className = 'image'
jsImageHTML.src = JS_IMAGE

const textHTML = document.createElement('h1')
textHTML.className = 'text_styles'
textHTML.innerText = 'I love JavaScript'
document.body.append(textHTML, jsImageHTML)
console.log(body)
