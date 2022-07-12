
let btn = document.querySelector('.image')

document.querySelector('.image').addEventListener('click',spin)

function spin(){
    btn.classList.add('onclick')
}
function getRandom(){
    return Math.floor(Math.random()*224)+1;
}

document.querySelector('button').addEventListener('click',getAdvice)

function getAdvice(){

 const url =`https://api.adviceslip.com/advice/${getRandom()}`

fetch(url)
    .then(res => res.json())
    .then(data=>{
        console.log(data)

        document.querySelector('.advice').innerText = `Advice #${data.slip.id}`
        document.querySelector('.adv-text').innerText = `"${data.slip.advice}"`
    })

    .catch(err=>{
        console.log(`error ${err}`)
    })
}

// On Load function
window.onload = function () {
    const url = `https://api.adviceslip.com/advice`;
  
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.querySelector('.advice').innerText = `Advice #${data.slip.id}`;
        document.querySelector('.adv-text').innerText = `"${data.slip.advice}"`;
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
  };


