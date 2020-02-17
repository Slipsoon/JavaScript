  document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.querySelector('#button-1');
    const btn2 = document.querySelector('#button-2');
    const btn3 = document.querySelector('#button-3');
    const list = document.querySelector('#shopping-list');
  
    btn1.addEventListener('click', () => {
      let newLiElement = document.createElement('li');
      newLiElement.textContent = 'chleb';
      list.appendChild(newLiElement);
    })

    btn2.addEventListener('click', () => {
        const lastLiElement = document.querySelector('li:last-child');

        lastLiElement.parentNode.removeChild(lastLiElement);
    })

    btn3.addEventListener('click', () => {
        let newLiElement = document.createElement('li');
        const secondListElement = list.querySelector('li:nth-child(2)');

        newLiElement.textContent = secondListElement.textContent;

        list.appendChild(newLiElement);
    })
  })
  
