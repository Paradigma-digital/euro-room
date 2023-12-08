const scrollClass = () => {

    let scrollpos = window.scrollY

    const header = document.querySelector("header")
    const scrollChange = 1

    const add_class_on_scroll = () => header.classList.add("bg-white")
    const remove_class_on_scroll = () => header.classList.remove("bg-white")

    if (scrollpos > 10) {
        add_class_on_scroll()
    }

    window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;

        if (scrollpos >= scrollChange) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
    
    })


}


export default scrollClass;