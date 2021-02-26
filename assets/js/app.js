function scrollNav(nav_name,nav_name_active){
  // nav_name - имя блока меню
  // nav_name_active
  let prevScrollPos = window.pageYOffset;
  let navName = document.querySelector('.'+nav_name)

   window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;

     if(prevScrollPos > currentScrollPos){
        navName.classList.add(nav_name_active)
     }
     if(currentScrollPos < 50 || prevScrollPos < currentScrollPos){
      navName.classList.remove(nav_name_active)
     }
     prevScrollPos = currentScrollPos;
   }
}

scrollNav('top__menu','top__menu-active');


function slider(block_name,block_name_active,dots_name,dots_name_active,parent_name){
    // block_name - класс изменяемых элементов
    // block_name_active - класс активных изменяемых элементов
    // dots_name - класс навигационных точек
    // dots_name_active -класс активных навигационных точек
    // parent_name - класс родительского для точек
    // писать все в кавычках

    let blockName = document.querySelectorAll('.'+block_name);
    
    function addDot(){
        for( let dotInd = 0; dotInd != blockName.length ; dotInd++){
        let parentName = document.querySelector('.'+parent_name);

        parentName.insertAdjacentHTML('beforeend',`<span class="${dots_name}" data-target="${dotInd}"></span>`)
        }
      }
      addDot()
      let dotsName = document.querySelectorAll('.'+dots_name);
      let index = 0;
      blockName[index].classList.toggle(block_name_active);
      dotsName[index].classList.toggle(dots_name_active);
      
      function setImage(event){
        blockName[index].classList.remove(block_name_active);
        dotsName[index].classList.remove(dots_name_active);
        index = event.currentTarget.dataset.target;
        blockName[index].classList.toggle(block_name_active);
        dotsName[index].classList.toggle(dots_name_active);
      }
      
      dotsName.forEach(element => {
        element.addEventListener("click", setImage);
      });
}
slider('header__slide','header__slide-active','slider__nav-btn','slider__nav-btn-active','slider__nav')


function preloader(name){
  window.addEventListener('load',function(){
    let element = document.querySelector('.'+name);
    element.classList.add('preloader__hide')
  })
}
preloader('preloader')