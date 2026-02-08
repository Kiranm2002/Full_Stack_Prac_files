let mode = document.querySelector('#mode')
let body = document.querySelector("body")
let curmode = "light";

mode.addEventListener('click',() =>{
    if (curmode === 'light'){
        curmode = 'dark';
        body.classList.add("dark")
        body.classList.remove("light")
        
    }   else {
            curmode = "light"
            body.classList.add("white")
            body.classList.remove("dark")
        }
    console.log(curmode)
    } )
  