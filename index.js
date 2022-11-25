const scrollBtn = document.getElementById
('contactUs')
const section = document.getElementById('pageSix')

function scrollElement(){
    section.scrollIntoView()
}

// scrollBtn.addEventListener('click', () =>{
//     window.scrollTo({
//         left: 0,
//         top: section,

//     })
// })



const boxes = document.querySelector('.bestEngineers__boxes')


function users(url){


fetch(url)
.then((res) => res.json())
.then((res) => res.map((item) => {
    boxes.innerHTML += `
    <div class="bestEngineers__box">
                            <div>
                    <div class="bestEngineers__box__tools">
                        <img src="./assets/GOLD ZVEZDA.svg" alt="star">
                        <img src="./assets/TOCHKI.svg" alt="points">
                    </div>
                    <div class="bestEngineers__box__engineers">
                        <img src="./assets/CHRIS.svg" alt="тутКРИС">
                        <h2>${item.name}</h2>
                        <p>Michigan, TX</p>
                    </div>
                        <div class="bestEngineers__box__engineers__info">
                            <p>989-653-2986</p>
                            <p>${item.email}</p>
                        </div>
                        </div>
                </div>
    `
}))
}
users('https://jsonplaceholder.typicode.com/users')

const btnPrew = document.getElementById('btnPrew')
const btnNext = document.getElementById('btnNext')
let scroll = 0

btnNext.addEventListener('click', () =>{
    scroll = scroll - 380
    boxes.style.left = scroll + 'px'
    if(scroll < -2660){
        scroll = -2660
    } else{
        boxes.style.left = scroll + 'px'
    }
    console.log(scroll)
})

btnPrew.addEventListener('click', ()=>{
    scroll = scroll +380
    if(scroll > 0){
        scroll = 0
    }else{
        boxes.style.left = scroll + 'px'
    }
    boxes.style.left = scroll + 'px'
    console.log(scroll);
})