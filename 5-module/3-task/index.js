function initCarousel() {
  let btnRight = document.querySelector('.carousel__arrow_right');
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner'); 
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left')
  let slideLen = document.querySelectorAll('.carousel__slide').length;
  let slide = document.querySelector('.carousel__slide');
  let slideWidth = slide.offsetWidth - slide.offsetWidth
  carouselArrowLeft.style.display = 'none'

  btnRight.addEventListener('click', function() {
    carouselArrowLeft.style.display = ''
    slideWidth = slideWidth - slide.offsetWidth;
    carouselInner.style.transform = `translateX(${slideWidth}px)`;
    if(slideWidth == (-slide.offsetWidth * slideLen)+slide.offsetWidth) {
      carouselArrowRight.style.display = 'none'
    }
  })

  btnLeft.addEventListener('click', function() {
    slideWidth = slideWidth + slide.offsetWidth
    carouselInner.style.transform = `translateX(${slideWidth}px)`;
    carouselArrowRight.style.display = ''
    if(slideWidth == 0) {
      carouselArrowLeft.style.display = 'none'
    } 
  })
}