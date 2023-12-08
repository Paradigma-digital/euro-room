const initYMap = () => {
    if(ymaps) {
        ymaps.ready(init);
        function init(){
            const myMap = new ymaps.Map("maps", {
                center: [48.62302307385791,44.40447899999996],
                zoom: 16
            });
    
            var myPlacemark = new ymaps.Placemark([48.62302307385791,44.40447899999996], {}, {
              iconLayout: 'default#image',
              iconImageHref: '/bitrix/templates/osnovnoy/images/map-icon.png',
              iconImageSize: [71, 99],
            //   iconImageSize: document.body.clientWidth <= 768 ? [40, 52] : [60, 79],
              iconImageOffset: [-14, -40],
     
          });
            // document.querySelector('#full-map').addEventListener('click', ()=> {
            //     myMap.container.enterFullscreen()
            // } )
            // myMap.behaviors.disable('scrollZoom'); // Отключение зум колесиком мыши
            myMap.geoObjects.add(myPlacemark);
        }
    }
}

export default initYMap;