//check if email for newsletter subscription is valid
const subscribeButton = document.getElementById('subscribe-button')

subscribeButton.addEventListener('click', event => {
    event.preventDefault()
    const form = document.getElementById('email-input').value;
    const email = /\S+@\S+\.\S+/;
    if (!form.match(email) || form === ''){
		document.getElementById('email-input').classList.add('footer__email--error');
	} else if (form.match(email)) {
		document.querySelector('form').reset();
		document.getElementById('email-input').classList.remove('footer__email--error');
  	}
})
