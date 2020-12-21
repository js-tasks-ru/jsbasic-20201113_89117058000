import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render()
    this.btnClick = this.btnClick()
  }

  render() {
    let div = document.createElement('DIV');
    div.classList.add('card');
    let result = 
    `
      <div class="card__top">
          <img src="../../assets/images/products/${this.product.image}" class="card__image" alt="product">
          <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${this.product.name}</div>
          <button type="button" class="card__button">
              <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
    `
    div.insertAdjacentHTML('beforeend', result) 
    return div
  }

  btnClick() {
    let customEvent = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    })

    let btn = this.elem.querySelector('.card__button')
    btn.addEventListener('click', function(event){
      event.path[3].dispatchEvent(customEvent);
    })
  }
}
