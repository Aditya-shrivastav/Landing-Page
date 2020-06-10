function start(){
    const navi = document.querySelector('#navbar__list');
    const sections = document.querySelectorAll('section')
    // adding sections to ul
    function addSec() {
        for (let item of sections) {
            let section = document.createElement('li');
            section.className = 'menu__link';
            section.dataset.nav = item.id;
            section.innerText = item.dataset.nav;
            navi.appendChild(section);
        };
    };

    // adding view page class to your-active-class and removing the your-active-class from other classes
    function active () {
        window.addEventListener('scroll', function (event) {
            let sec = sections[0];
            let val = 100000;
            for(let item of sections){
                let bounding = item.getBoundingClientRect();
                if(bounding.top > -300 & bounding.top < val){
                    val = bounding.top;
                    sec = item;
                }
            }
            sec.classList.add('your-active-class');
            for (let item of sections) {
                if (item.id != sec.id & item.classList.contains('your-active-class')) {
                    item.classList.remove('your-active-class');
                }
            }
        });
    };
    //scrolling to the chosen section
    function scroll(){
        navbar.addEventListener('click',function(event){
            const view = document.getElementById(event.target.dataset.nav)
            view.scrollIntoView({block:"end", behavior:"smooth"});
        });
    }
    addSec();
    scroll();
    active();
}

start();


