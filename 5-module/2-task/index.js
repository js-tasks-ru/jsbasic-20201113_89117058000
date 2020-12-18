function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let div = document.querySelector('#text');

  btn.addEventListener('click', () => {
    div.hidden = !div.hidden
  })
}
