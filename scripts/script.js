document.querySelector('title').innerHTML = 'Alejo Martinez'
;(function () {
   const sections = Array.from(document.querySelectorAll('.curriculum'))
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
              (sections[1].style.display = 'grid'))
            : ((sections[0].style.display = 'grid'),
              (sections[1].style.display = 'none'))
      })
   })
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
})()

const cssTemplateString = [
   `.header__list-item:hover {
   color: var(--golden-poppy);
   transform: scale(1.02) translate(-2px, 0px);
}`,
   `.header__list-item::before {
   transition: opacity 0.3s, border 0.3s;
}`,
   `.header__list-item::after {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 200px;
   height: 200px;
   background-color: var(--tabaco);
   border-color: transparent;
   border-radius: 50%;
   transform: translate(-50px, -70px) scale(0.1);
   opacity: 0;
   z-index: -1;
   transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
}`,
   `.header__list-item:hover::after {
   opacity: 1;
   transform-origin: 100px 100px;
   transform: scale(1.2) translate(-10px, -70px);
}`,
   `.active:hover {
   color: var(--tabaco);
   transform: scale(1.02) translate(-2px, 0px);
}`,
   ` .active::before {
   transition: opacity 0.3s, border 0.3s;
}`,
   `.active::after {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 200px;
   height: 200px;
   background-color: var(--golden-poppy);
   border-color: transparent;
   border-radius: 50%;
   transform: translate(-10px, -70px) scale(0.1);
   opacity: 0;
   z-index: -1;
   transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
}`,
   `.active:hover::after {
   opacity: 1;
   transform-origin: 100px 100px;
   transform: scale(1.2) translate(-10px, -70px);
}`,
]
const styleTag = document.createElement('style')
styleTag.innerHTML = cssTemplateString
document.head.insertAdjacentElement('beforeend', styleTag)
