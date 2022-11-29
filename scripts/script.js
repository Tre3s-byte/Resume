document.querySelector('title').innerHTML = 'Alejo Martinez'

const sections = Array.from(document.querySelectorAll('.curriculum'))
const slide = Array.from(document.querySelectorAll('.header__list-item--slide'))
const headerButtons = Array.from(
   document.querySelectorAll('.header__list-item')
)

const buttonSelection = headerButtons.forEach((button) => {
   button.addEventListener('click', function () {
      let otherButton = headerButtons.filter(
         (sideButton) => sideButton !== button
      )
      otherButton.forEach(function (sideButton) {
         sideButton.classList.remove('active')
      }),
         this.classList.add('active')
      'Summary' == this.innerText
         ? ((sections[0].style.display = 'none'),
           (sections[1].style.display = 'grid'),
           slide[0].classList.remove('active'),
           slide[1].classList.add('active'))
         : ((sections[0].style.display = 'grid'),
           (sections[1].style.display = 'none'),
           slide[1].classList.remove('active'),
           slide[0].classList.add('active'))
   })
})

function createBoxes() {
   let tagTarget = Array.from(document.querySelectorAll('.skill__progress-bar'))

   let percentanges = [100, 80, 80, 60, 60, 60]
   tagTarget.forEach((tag, index) => {
      tag.innerHTML = `<div class="skill__progress-bar--fill"></div>`
      const progressBars = Array.from(
         document.querySelectorAll('.skill__progress-bar--fill')
      )
      let progressBar = progressBars[index].style
      let width = percentanges[index]
      progressBar.width = `${width}%`
      progressBar.height = '1em'
      progressBar.backgroundColor = '#ffc500'
   })
}
createBoxes()
