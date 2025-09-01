var header =document.querySelector('.header');
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky',window.scrollY>0)
})

window.addEventListener('load',()=>{
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend',()=>{
        document.body.removeChild('loader');
    })
})