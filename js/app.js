const navSlide = () =>{
    const sidebar = document.querySelector('.sidebar-icon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    sidebar.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{

                link.style.animation = `slideinAniation 0.5s ease forwards ${index/7 + 1.3}s`;
                //console.log(index/7);
            }
        });
    });
}

navSlide();