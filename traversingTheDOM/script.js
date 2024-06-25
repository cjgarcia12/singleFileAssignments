const header = document.getElementsByTagName('header');
console.log(header);

const section = document.querySelectorAll('section');
console.log(section);

const sectionCurrent = document.querySelector('section.current');
console.log(sectionCurrent);

const afterCurrent = sectionCurrent.nextElementSibling;
console.log(afterCurrent);

const beforeCurrent = sectionCurrent.previousElementSibling;
console.log(beforeCurrent);

const beforeCurrentH2 = sectionCurrent.previousElementSibling.children;
console.log(beforeCurrentH2);

const divParent = sectionCurrent.parentElement;
console.log(divParent);

const allSectionWithH2 = Array.from(document.querySelectorAll('h2')).map(function(h2){return h2.parentElement});
console.log(allSectionWithH2)