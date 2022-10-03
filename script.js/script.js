const bar = document.querySelector('.navbar-bar')
const clicknavbar = document.querySelector('#click-navbar')
// bar.addEventListener('click', function () {
//   if (clicknavbar.style.display == 'block') {
//     clicknavbar.style.display = 'none'
//     this.style.color = 'black'
//   } else {
//     clicknavbar.style.display = 'block'
//     this.style.color = 'red'
//   }
// })

// Form Implemenatation
const Openformbtn = document.querySelector('.sign')
const loginbtn = document.querySelector('.cross-loginform')
const loginform = document.querySelector('#login-form')
const signupbtn = document.querySelector('.cross-signform')
const signupform = document.querySelector('#sign-up-form')

const switchformbtn = document.querySelector('.already-account')
Openformbtn.addEventListener('click', () => {
  signupform.style.display = 'block'
})
loginbtn.addEventListener('click', function () {
  this.parentNode.style.display = 'none'
})
signupbtn.addEventListener('click', function () {
  this.parentNode.style.display = 'none'
})

switchformbtn.addEventListener('click', () => {
  signupform.style.display = 'none'
  loginform.style.display = 'block'
})
