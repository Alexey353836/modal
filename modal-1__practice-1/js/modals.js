"use strict"
function openCloseModals() {
  const time1 = 200
  const time2 = 300
  const body = document.querySelector('body')
 
  let popupLinks = document.querySelectorAll('[data-popupLink]')
  let curentPopup;
  let closest = false
  // let btnCloseModal = document.querySelectorAll('[data-closemodal]')
  let aModal = document.querySelectorAll('[data-amodal]')


  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i]
    popupLink.addEventListener('click', function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '')
      curentPopup = document.getElementById(popupName)
      openModal(curentPopup)
      e.preventDefault()
    })
  }

  function lockScroll() {
    const getScrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    body.style.overflow = 'hidden'
    body.style.paddingRight = `${getScrollBarWidth}px`
    
  }
  function unlockScroll() {
    const getScrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    setTimeout(() => {
      body.style.overflow = 'inherit'
      body.style.paddingRight = `${getScrollBarWidth}px`
    }, time1);
  }


  function openModal() {
    if (!closest){
      curentPopup.classList.add('open')
      closest = true
      lockScroll()
    }else{
      closeAllOpen()
    }
  }

  function closeAllOpen() {
    aModal.forEach(element => {
      closest = false
      element.classList.remove('open')
    });
    setTimeout(() => {
      curentPopup.classList.add('open')
      closest = true
    }, time2);
  }

  function closeModal(event) {
    if (event.target.dataset.closemodal){
      curentPopup.classList.remove('open')
      closest = false
      unlockScroll()
    }
  }


  aModal.forEach(element => {
    element.addEventListener('click', closeModal)
  });
  }
