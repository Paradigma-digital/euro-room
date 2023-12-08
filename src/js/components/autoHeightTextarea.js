const autoHeightTextarea = () => {

    let tx = document.querySelectorAll('textarea');
    tx.forEach(i => i.addEventListener('input', OnInput))
    
    function OnInput() {
        this.style.maxHeight = 'auto';
        this.style.height = 'auto';
        this.style.maxHeight = (this.scrollHeight) + 'px';
        this.style.height = (this.scrollHeight) + 'px';
    }

}


export default autoHeightTextarea;