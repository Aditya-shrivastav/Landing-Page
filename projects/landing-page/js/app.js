
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section')
const containerCount = document.getElementsByClassName('landing__container')


function isActive() {
    maxSection = sections[0];
    minVal = 1000000;
    for (item of sections) {
        let bounding = item.getBoundingClientRect();
        if (bounding.top > -300 & bounding.top < minVal) {
            minVal = bounding.top;
            maxSection = item;
        };
    };
    return maxSection;
};


function addSection() {
    for (let item of sections) {
        let section = document.createElement('li');
        section.className = 'menu__link';
        section.dataset.nav = item.id;
        section.innerText = item.dataset.nav;
        navbar.appendChild(section);
    };
};


function active () {
    window.addEventListener('scroll', function (event) {
        let section = isActive();
        section.classList.add('your-active-class');
        // set other sections as inactive
        for (let item of sections) {
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }
    });
};

function scroll(){
    navbar.addEventListener('click',function(event){
        const view = document.querySelector('#'+event.target.dataset.nav)
        view.scrollIntoView({block:"end", behavior:"smooth"});
    });
}



addSection();
scroll();
active();



