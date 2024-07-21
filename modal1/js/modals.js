function openCloseModals(){
  
  const animationSpeedFerst= 200
  const animationSpeedSecond= 300
  const body = document.querySelector('body')
  const popupLinks = document.querySelectorAll('[data-popupLink]')

  let modals = document.querySelectorAll('.amodal')
  let closing = false
  let curentPopup

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
    const getScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.paddingRight = `${getScrollbarWidth}px`
    body.style.overflow = "hidden"
  }

  function unlockScroll() {
    setTimeout(() => {
      const getScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.paddingRight = `${getScrollbarWidth}px`
      body.style.overflow = "inherit"
    }, animationSpeedFerst);
  }

  function openModal (curentPopup) {
  if (!closing){
    curentPopup.classList.add('open')
    closing = true
    lockScroll ()
  } else {
    closeAll()
    setTimeout(() => {
      curentPopup.classList.add('open')
      closing = true
    }, animationSpeedSecond);
  }
  }

  function closeModal() {
  curentPopup.classList.remove('open')
    setTimeout(() => {
      unlockScroll()
      closing = false
    }, animationSpeedFerst);
  }

  function closeAll() {
    modals.forEach(element => {
      element.classList.remove('open')
      setTimeout(() => {
        closing = false
      }, animationSpeedFerst);
    })
  }

  const listenerModals = event => {
    if (event.target.dataset.closemodal) {
      closeModal()
    }
  }

  modals.forEach(element => {
    element.addEventListener('click', listenerModals)
  })
}




