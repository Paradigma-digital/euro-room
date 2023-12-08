
import anime from 'animejs/lib/anime.es.js';
export default function scrollElement(elementScroll) {
    if (document.querySelector(elementScroll)) {
        // функция определяет нахождение элемента в области видимости
        // если элемент видно - возвращает true
        // если элемент невидно - возвращает false
        function isOnVisibleSpace(element) {
            var bodyHeight = window.innerHeight;
            var elemRect = element.getBoundingClientRect();
            var offset   = elemRect.top;// - bodyRect.top;
            if(offset<0) return false;
            if(offset>bodyHeight) return false;
            return true;
        }

        // глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
        var listenedElements = [];
        // обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements 
        // на предмет попадания(выпадения) в зону видимости
        window.onscroll = function() {
            listenedElements.forEach(item=>{
            // проверяем находится ли элемент в зоне видимости
            var result = isOnVisibleSpace(item.el);
            
            
            // если элемент находился вне зоны видимости и вошел в нее
            // вызываем обработчик попадания в зону видимости
            if(!item.el.isOnVisibleSpace && result){
                item.el.isOnVisibleSpace = true;
            item.inVisibleSpace(item.el);
            return;
            }
        });
        }

        // функция устанавливает обработчики событий 
        // появления элемента в зоне видимости и
        // выхода из нее
        function onVisibleSpaceListener(elementId, cbIn, cbOut) {
            // получаем ссылку на объект элемента
            var el = document.querySelector(elementId);
            // добавляем элемент и обработчики событий 
            // в массив отслеживаемых элементов
            listenedElements.push({
                el: el,
                inVisibleSpace: cbIn,
                outVisibleSpace: cbOut    
            });
        }

        // устанавливаем обработчики для элемента "video"
        onVisibleSpaceListener(elementScroll, 
            el=>{
                // функция вызываемая при попадании элемента в зону видимости
                // тут вставляем код запуска анимации
                // el.innerHTML = "111111111111111111111111";
                // window.alert("элемент в зоне видимости");
                const paths = document.querySelectorAll(`${elementScroll} svg path`);
                anime({
                    targets: paths,
                    duration: 2000,
                    delay: 200,
                    easing: 'easeInOutExpo',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    complete: function () {
                        paths.forEach(i => {
                            setTimeout(()=> {
                                i.style.fill = i.getAttribute('stroke')
                                i.removeAttribute('stroke')
                            }, 500)
                        })
                        
                    }
                })
            }
        );
    } else {
        return false;
    }
}