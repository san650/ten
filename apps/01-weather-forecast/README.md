10 ember apps: Weather forecast
===============================

1. La lista de ciudades puede ser fija (ciudades de Uruguay por ejemplo)
2. El pronóstico del tiempo se puede obtener del servicio de Yahoo
3. La página inicial muestra el pronóstico de Montevideo
4. Se puede diferenciar con los íconos el pronóstico para el día y para la noche

*Yahoo weather*
https://developer.yahoo.com/weather/documentation.html

*Weather condition codes*
https://developer.yahoo.com/weather/documentation.html#codes

*Weather forecast YQL service*
https://developer.yahoo.com/weather/

*Weather icons*
https://github.com/erikflowers/weather-icons

*Images*
https://www.flickr.com/search/?sort=relevance&text=weather&license=1%2C2%2C3%2C4%2C5%2C6

*Dummy data*

```js
var CITIES_IN_URUGUAY = [
  ['Achar', 468081],
  ['Aguas Corrientes', 468010],
  ['Aigua', 468082],
  ['Algorta', 380896],
  ['Artigas', 380894],
  ['Atlantida', 468057],
  ['Balneario Solis', 468011],
  ['Baltasar Brum', 468083],
  ['Belen', 468012],
  ['Bernabe Rivera', 468013],
  ['Blanquillo', 468014],
  ['Canelones', 468058],
  ['Cardal', 468015],
  ['Cardona', 468016],
  ['Carmelo', 468059],
  ['Carmen', 420098],
  ['Cebollati', 468085],
  ['Cerrillos', 469012],
  ['Cerro Chato', 468086],
  ['Cerro Colorado', 468087],
  ['Cerro Vera', 380897],
  ['Chapicuy', 468017],
  ['Chuy', 468118],
  ['Colon', 380898],
  ['Colonia del Sacramento', 468796],
  ['Colonia Lavalleja', 468018],
  ['Colonia Nuevo Paysandu', 380445],
  ['Cuaro', 468019],
  ['Dolores', 468060],
  ['Durazno', 468061],
  ['Ecilda Paullier', 468020],
  ['Empalme Olmos', 468021],
  ['Florencio Sanchez', 380899],
  ['Florida', 468062],
  ['Fraile Muerto', 468088],
  ['Fray Bentos', 468063],
  ['Fray Marcos', 380900],
  ['Guichon', 468089],
  ['Independencia', 468022],
  ['Ismael Cortinas', 468023],
  ['Ituzaingo', 468024],
  ['Joaquin Suarez', 469011],
  ['Jose Batlle Y Ordonez', 468794],
  ['Jose Enrique Rodo', 468090],
  ['Jose Pedro Varela', 468091],
  ['Juan Lacaze', 468797],
  ['La Cruz', 468025],
  ['La Floresta', 468026],
  ['La Paloma', 380901],
  ['La Paz', 380558],
  ['Las Flores', 468027],
  ['Las Piedras', 468054],
  ['Libertad', 468092],
  ['Lorenzo Geyres', 468028],
  ['Mal Abrigo', 468029],
  ['Maldonado', 468065],
  ['Melo', 468066],
  ['Mercedes', 468067],
  ['Miguelete', 469013],
  ['Migues', 468799],
  ['Minas de Corrales', 468031],
  ['Minas', 468068],
  ['Montes', 468032],
  ['Montevideo', 468052],
  ['Nuevo Berlin', 468033],
  ['Ombues De Lavalle', 468094],
  ['Pando', 468069],
  ['Paso de Los Toros', 468070],
  ['Paso del Cerro', 468034],
  ['Paysandu', 468055],
  ['Piedras Coloradas', 468035],
  ['Pinera', 380902],
  ['Piraraja', 468095],
  ['Punta del Este', 468108],
  ['Quebracho', 468096],
  ['Reboledo', 468037],
  ['Rio Branco', 468072],
  ['Rivera', 468053],
  ['Rocha', 468073],
  ['Salto', 468056],
  ['San Antonio', 468038],
  ['San Bautista', 468039],
  ['San Carlos', 468074],
  ['San Javier', 468040],
  ['San Jorge', 380903],
  ['San Jose De Mayo', 468798],
  ['Santa Clara de Olimar', 380822],
  ['Santa Clara', 420099],
  ['Santa Lucia', 468076],
  ['Sauce del Yi', 468043],
  ['Sauce', 468042],
  ['Soca', 468044],
  ['Tacuarembo', 468077],
  ['Tala', 468098],
  ['Tambores', 468045],
  ['Tomas Gomensoro', 468047],
  ['Tranqueras', 468048],
  ['Treinta y Tres', 468078],
  ['Tres Arboles', 380904],
  ['Trinidad', 468079],
  ['Tupambae', 380905],
  ['Valdense', 468795],
  ['Valentines', 468049],
  ['Veinticinco de Mayo', 468051],
  ['Velasquez', 420100],
  ['Velazquez', 380869],
  ['Vergara', 380906],
  ['Villa del Carmen', 380884],
];
```
