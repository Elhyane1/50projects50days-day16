let mini_glasses = document.querySelectorAll('.mini')
let big_glass = document.querySelector('.big')
let volume = document.querySelector('.full')
let remained = document.querySelector('.remained')
let liter = document.querySelector('h4')

let mini_glasses_array = []
for (let x of mini_glasses){
    mini_glasses_array.push(x)
}

mini_glasses.forEach(element => {
    let cup = 100/8
    element.addEventListener('click', ()=>{
        let cssVol = window.getComputedStyle(volume)
        let cssRem = window.getComputedStyle(remained)
        let cssCup = 294/8
        if (parseFloat(cssVol.height)!== cssCup * (mini_glasses_array.indexOf(element) + 1)){
            volume.style.height = `${cup * (mini_glasses_array.indexOf(element) + 1)}%`
            remained.style.height = `${100 - cup * (mini_glasses_array.indexOf(element) + 1)}%`
            mini_glasses.forEach(e => {
                e.classList.remove('full')
                if (mini_glasses_array.indexOf(e) <= mini_glasses_array.indexOf(element)){
                    e.classList.add('full')
                }
            })
        }else if(parseFloat(cssVol.height) == cssCup * (mini_glasses_array.indexOf(element) + 1)){
             volume.style.height = `${(cup * (mini_glasses_array.indexOf(element) + 1)) - cup}%`
             remained.style.height = `${(100 - cup * (mini_glasses_array.indexOf(element) + 1)) + cup}%`
             element.classList.toggle('full')
        }
        volume.innerHTML = volume.style.height
        liter.innerHTML = `${2 - parseFloat(volume.style.height)*2/100}L`
    })
});
