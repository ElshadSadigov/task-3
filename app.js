let increaseBtns = document.querySelectorAll('.btnIncrease')
let decreaseBtns = document.querySelectorAll('.btnDecrease')
let totalQuantity = document.querySelector('.totalQuantity')


increaseBtns.forEach((e)=>{
    e.addEventListener('click', ()=>{
        e.parentElement.children[1].innerHTML = Number(e.parentElement.children[1].innerHTML) + 1
        totalQuantity.innerHTML = Number(totalQuantity.innerHTML) + 1
    })
})

decreaseBtns.forEach((e) => {
    e.addEventListener('click', ()=>{
        if(e.parentElement.children[1].innerHTML > 0){
            e.parentElement.children[1].innerHTML = Number(e.parentElement.children[1].innerHTML) - 1
            totalQuantity.innerHTML = Number(totalQuantity.innerHTML) - 1
        }
    })
})