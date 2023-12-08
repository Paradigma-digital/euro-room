
const accordion = document.querySelectorAll('.accordion')

const accordionShow = () => {
    if (accordion) {
        
        accordion.forEach(accordion => {
            accordion.querySelectorAll('.accordion-item').forEach(item => {
                item.style.maxHeight = item.querySelector('.accordion-title').scrollHeight + 'px'
                item.addEventListener('click', (event)=> {
                if (event.target.classList.contains('accordion-title')) {
                    item.classList.toggle('active')
                    if(item.classList.contains('active')) {
                        item.style.maxHeight = item.scrollHeight + 'px'
                    } else {
                        item.style.maxHeight = item.querySelector('.accordion-title').scrollHeight + 'px'
                    }
                }
                })
            })
        })
    }
}

export default accordionShow;