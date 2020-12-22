import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render()
    this.btn = this.btn()
    this.btnClick = this.btnClick()
  }

  render() {
    let div = document.createElement('DIV');
    div.classList.add('carousel');
    let buttons = ` 
      <div class="carousel__arrow carousel__arrow_right">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `

    let carouselInner = document.createElement('DIV');
    carouselInner.classList.add('carousel__inner');

    let slide = '';
    for(let i = 0; i < this.slides.length; i++) {
      slide = slide + `
        <div class="carousel__slide" data-id=${this.slides[i].id}>
          <img src="../../assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${this.slides[i].price}</span>
            <div class="carousel__title">${this.slides[i].name}</div>
            <button type="button" class="carousel__button">
              <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
    `
    }

    div.insertAdjacentHTML('beforeend', buttons)
    div.append(carouselInner)
    carouselInner.insertAdjacentHTML('beforeend', slide)

    return div
  }

  btn() {
    let btnRight = this.elem.querySelector('.carousel__arrow_right');
    let btnLeft = this.elem.querySelector('.carousel__arrow_left');

    let carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left')

    let carouselInner = this.elem.querySelector('.carousel__inner');
    let slide = this.elem.querySelector('.carousel__slide');
    let slideWidth = slide.offsetWidth - slide.offsetWidth;
    let slideLen = this.elem.querySelectorAll('.carousel__slide').length;
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

  btnClick() {
    let slide = this.elem.querySelector('.carousel__slide');
    let slideID = slide.dataset.id

    let customEvent = new CustomEvent("product-add", {
      detail: slideID,
      bubbles: true
    })

    let btnPlusAll = this.elem.querySelectorAll('.carousel__button')
    for (let btnPlus of btnPlusAll) {
      btnPlus.addEventListener('click', function(event){
        event.path[3].dispatchEvent(customEvent);
      })
    }
  }

}
