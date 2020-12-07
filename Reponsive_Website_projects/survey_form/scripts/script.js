const formGroups = Array.from(document.querySelectorAll('.form-group'));
let pageID = document.querySelector('#page_id');

let page = 0;
console.log(formGroups)

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');




prevBtn.addEventListener('click', e=>{
    page = (formGroups.length + --page) % formGroups.length;
    formGroups.forEach(g => g.classList.remove('invisibility'))
    formGroups[page].classList.add('invisibility');
    pageID.innerHTML = page + 1;
    console.log({btn: 'prev' ,page, g:formGroups[page]})
    console.log(nextBtn.disabled)
})

nextBtn.addEventListener('click', e=>{
    page = (formGroups.length + ++page) % formGroups.length;
    formGroups.forEach(g => g.classList.remove('invisibility'))
    formGroups[page].classList.add('invisibility');
    pageID.innerHTML = page + 1;
    console.log({btn: 'next' ,page, g:formGroups[page]})
})