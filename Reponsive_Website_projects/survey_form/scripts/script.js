const formGroups = Array.from(document.querySelectorAll('.form-group'));
let pageID = document.querySelector('#page_id');

let page = 0;


const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const submitBtn = document.querySelector('#submit');
const ticks = Array.from(document.querySelectorAll('#bg'));

ticks.forEach(t => t.style.fill = "white");
ticks[0].style.fill = "#6C63FF";
console.log(ticks)

prevBtn.addEventListener('click', e=>{
    page = (formGroups.length + --page) % formGroups.length;
    formGroups.forEach(g => g.classList.remove('invisibility'))
    formGroups[page].classList.add('invisibility');
    //Update page 
    pageID.innerHTML = page + 1;
    //update ticks on svg
    ticks.forEach(t => t.style.fill = "white")
    ticks[page].style.fill = "#6C63FF";
    console.log(ticks[page])
})

nextBtn.addEventListener('click', e=>{
    page = (formGroups.length + ++page) % formGroups.length;
    formGroups.forEach(g => g.classList.remove('invisibility'))
    formGroups[page].classList.add('invisibility');
    pageID.innerHTML = page + 1;
    ticks.forEach(t => t.style.fill = "white")
    ticks[page].style.fill = "#6C63FF";
    console.log({btn: 'next' ,page, g:formGroups[page]})
})

submitBtn.addEventListener('click', e => {
    ticks.forEach(t => t.style.fill = "#6C63FF")
})