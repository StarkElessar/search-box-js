document.addEventListener('DOMContentLoaded', () => {
  const searchPanel = document.querySelector('.search-box')
  const searchInput = document.querySelector('#search')
  const cardsAll = document.querySelectorAll('.img-card')

  window.addEventListener('scroll', () => {
    searchPanel.classList.toggle('sticky', document.documentElement.scrollTop > 300)
  })

  searchInput.addEventListener('input', function () {
    const searchValue = this.value.toLowerCase()
    
    cardsAll.forEach((card) => {
      const dataName = card.dataset.name.toLowerCase()

      if (searchValue !== '') {
        card.style.display = dataName.indexOf(searchValue) > -1
          ? 'block'
          : 'none'
      } else {
        card.style.display = 'block'
      }
    }) 
  })
})