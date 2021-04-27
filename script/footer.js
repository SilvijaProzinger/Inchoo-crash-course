const toggleFooter = (function(){
    const openOrCloseDetails = () => {
        const details = document.querySelector('.summary__container').querySelectorAll("details")
        
        if (window.matchMedia("(min-width: 765px)").matches){
          details.forEach(detail => {
            detail.setAttribute('open', true)
          })
        } else {
          details.forEach(detail => {
            detail.removeAttribute('open')
          })
        }
    }

    return {
        openOrCloseDetails: openOrCloseDetails
    }
})()
    
toggleFooter.openOrCloseDetails()


