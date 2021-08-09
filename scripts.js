const nav = document.querySelector('nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header nav')
const headerA = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#carousel-principal .carousel-caption,
  #countdown .container-countdown,
  #services .content, #services .card-service,
  #events .content, #events .card-event,
  #status .status-container,
  #who-speaking .container-who-speaking .content, #who-speaking .image, #who-speaking .who-speaking-container .content,
  #events-gallery .content ,#events-gallery .event-gallery,
  #sponsors .content, #sponsors .sponsor,
  #pricing .content, #pricing .card-pricing,
  #event-guideline .content ,#event-guideline .image, #event-guideline .content-container,
  #news-articles .content, #news-articles .image,#news-articles .content-news, 
  #signup .title, #signup form


  `,
  { interval: 100 }
)

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})
