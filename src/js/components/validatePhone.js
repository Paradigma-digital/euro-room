const validatePhone = () => {

    let eventCalllback = function (e) {
        let el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7 (___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.classList.add('input-error')
                e.target.value = 'Некорректный номер телефона';
                return;
            }
        }
        if (def.length >= val.length) {
            val = def;
            e.target.classList.remove('input-error')
        }
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    let phone_inputs = document.querySelectorAll('[type="tel"]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
    document.querySelectorAll('form').forEach(i => {
        i.addEventListener('submit', (event)=> {
            if (i.querySelector('.input-error')) {
                event.preventDefault()
            }
        })
    })

}


export default validatePhone;