const toggleFooter = (function(){
    const mqlTablet = window.matchMedia("(min-width: 765px)")

    const openOrCloseDetails = () => {
        const details = document.querySelector('.summary__container').querySelectorAll("details")
        
        if (mqlTablet.matches){
          details.forEach(detail => {
            detail.setAttribute('open', true)
          })
        } else {
          details.forEach(detail => {
            detail.removeAttribute('open')
          })
        }
    }

    mqlTablet.addEventListener("change", openOrCloseDetails)

    return {
        openOrCloseDetails: openOrCloseDetails
    }
})()
    
toggleFooter.openOrCloseDetails()


