    // Zadanie 1
console.log('Zadanie 1');

const allSampleClassElelemtns = document.querySelectorAll('.sample_class');

function getTagsOfElements(elements) {
    let array = [];

    elements.forEach(element => {
        array.push(element.tagName);
    })

    return array;
}

console.log(getTagsOfElements(allSampleClassElelemtns));

    // Zadanie 2
console.log('Zadanie 2');

const sampleIdElement = document.querySelector('#sample_id');

function getClassesOfElement(element) {
    let array = [];

    array.push(element.className);

    return array;
}

console.log(getClassesOfElement(sampleIdElement));

    // Zadanie3
console.log('Zadanie 3');

const allLiElements = document.querySelectorAll('.sample_class_2 li');

function getInnerTextsOfElements(elements) {
    let array = [];

    elements.forEach(element => {
        array.push(element.textContent);
    })

    return array;
}

console.log(getInnerTextsOfElements(allLiElements));

    // Zadanie 4
console.log('Zadanie 4');

const allLinks = document.querySelectorAll('a');

function getAddressesOfElements(elements) {
    let array = [];

    elements.forEach(element => {
        array.push(element.href);
    })

    return array;
}

console.log(getAddressesOfElements(allLinks));

    // Zadanie 5
console.log('Zadanie 5');

const allSampleClassThreeElements = document.querySelector('.sample_class_3').children;

console.log(allSampleClassThreeElements);
