/**
 * Contact Form Script
**/

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQkrp390X2-CF9gLXGap1ZEsXlDl-TnM7Odbxm3DSJd5P3ri6aD90_qNqHjznQHK4b/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent!"
    })
    setTimeout(function() {
        msg.innerHTML = ""

    }, 10000)
    form.reset()
    .catch(error => console.error('Error!', error.message))
})