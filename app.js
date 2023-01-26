const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content')

function PageTransition(){
    //Onclick Active Btn
    for(let i=0; i<secBtn.length; i++){
        secBtn[i].addEventListener('click', (trg) => {
            clickedBtn = trg.target;
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            clickedBtn.className += ' active-btn';
        })
    }

    //active sections page
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove data-id for other sections
            secBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            
            const element = document.getElementById(id);
            element.classList.add('active');    
        }
    })
}

PageTransition();