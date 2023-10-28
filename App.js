import App from './js/main.js'

fetch('./data/data.json')
.then(res => res.json())
.then(Data => {
    App(Data);
})