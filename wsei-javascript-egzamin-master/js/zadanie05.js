const btns = document.querySelectorAll('button');
const container = document.querySelector('#container');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        container.textContent = btn.dataset.text;
        // console.log(btn.dataset.text);
    })
})
