//Tabs
class ItcTabs {
    constructor(target, tabsButton, tab, tabShowClass, config) {
        if (target) {
            const defaultConfig = {};
            this.tabShowClass = tabShowClass;
            this.tabsButton = tabsButton;
            this.tab = tab;
            this._config = Object.assign(defaultConfig, config);
            this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
            if (this._elTabs) {
                this._elButtons = this._elTabs.querySelectorAll(this.tabsButton);
                this._elPanes = this._elTabs.querySelectorAll(this.tab);
                this._eventShow = new Event('tab.itc.change');
                this._init();
                this._events();
            }
        }
        
    }
    _init() {
        this._elTabs.setAttribute('role', 'tablist');
        this._elButtons.forEach((el, index) => {
            el.dataset.index = index;
            el.setAttribute('role', 'tab');
            this._elPanes[index].setAttribute('role', 'tabpanel');
        });
    
    }
    show(elLinkTarget) {
        const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
        const elLinkActive = this._elTabs.querySelector('.active');
        const elPaneShow = this._elTabs.querySelector(`.${this.tabShowClass}`);
        
        if (elLinkTarget === elLinkActive) {
            return;
        }
        elLinkActive ? elLinkActive.classList.remove('active') : null;
        elPaneShow ? elPaneShow.classList.remove(this.tabShowClass) : null;
        elLinkTarget.classList.add('active');
        elPaneTarget.classList.add(this.tabShowClass);
        this._elTabs.dispatchEvent(this._eventShow);
        elLinkTarget.focus();
    }
    showByIndex(index) {
        const elLinkTarget = this._elButtons[index];
        elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
        this._elTabs.addEventListener('click', (e) => {
            const target = e.target.closest(this.tabsButton);
            if (target) {
                e.preventDefault();
                this.show(target);
            }
        });
    }
}


export default ItcTabs;