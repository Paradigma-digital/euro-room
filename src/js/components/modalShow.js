const modalShow = () => {

    const callModal = document.querySelectorAll('.btn-call'),
        modalConst = document.querySelectorAll('.modal'),
        modalClose = document.querySelectorAll('.modal-close'),
        bodyDoc = document.querySelector('body');

    callModal.forEach(item => {
        item.addEventListener('click', (e)=> {
            e.preventDefault()
            modalConst.forEach(i=> {
                if (i.getAttribute('id') == item.getAttribute('data-modal')) {
                    i.classList.toggle('active')
                    bodyDoc.classList.toggle('hidden')
                }
            })
        
        })
    })
    modalConst.forEach(i=> {
        i.addEventListener('click', (event)=> {
            if (event.target === i) {
                i.classList.toggle('active')
                bodyDoc.classList.toggle('hidden')
            }
        })
    })
    
    modalClose.forEach(i=> {
        i.addEventListener('click', ()=> {
            i.closest('.modal').classList.toggle('active')
            bodyDoc.classList.toggle('hidden')
        })
    })

}


export default modalShow;