
document.addEventListener('DOMContentLoaded',()=>{
    let navButton = document.getElementById('navToggle');
    let nav = document.querySelector('nav');
    
    let reset = window.matchMedia("(min-width: 768px) and (orientation:landscape)"); 

    function openMenu() {
        navButton.style.color = '#0e0e0e'
        navButton.style.backgroundColor = '#f3f4f4';
            
        navButton.innerText = "CLOSE";
        nav.style.height='auto';
        nav.style.visibility = 'visible';
        
    }

    function closeMenu() {
        navButton.style.color = '#f3f4f4'
        navButton.style.backgroundColor = '#0e0e0e';
        navButton.innerText = "MENU";
        nav.style.height = 0;
        nav.style.visibility = 'hidden';
    }
    resetMenu(reset);

    function resetMenu(x){
        if(x.matches)
        {
            openMenu();
        } else {   
            closeMenu();
        }
    }
    navButton.addEventListener('click', function() {

        if(this.innerText === 'MENU')
        {
            openMenu();

        } else {
            closeMenu();
        }
    });
    reset.addEventListener('change',function(){
        resetMenu(reset);
    });   
});