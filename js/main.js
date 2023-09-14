export const mainAction = ()=>{


  const $toggleBtns = document.querySelectorAll('.fav-btn')

  $toggleBtns.forEach((btn)=> {
    btn.addEventListener('click', ()=>{
      btn.classList.toggle('active')
    })
  })
  }
