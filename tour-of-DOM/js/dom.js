const sections = document.querySelectorAll('section');
for(const section of sections){
    // console.log(section);
    section.style.border = '2px solid red'; 
    section.style.marginBottom = '5px';
    section.style.borderRadius = '8px';
    section.style.paddingLeft = '5px';
    section.style.backgroundColor = 'lightgray';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');