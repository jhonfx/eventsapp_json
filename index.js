var fs = require('fs');
var csv = require('fast-csv');
var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;
const getCSV = require('get-csv');
// var http = requiere('http')
var https = require('https')
var request = require('request')

var cut = [];
var categories = [];
var eventosGenerados = [];
var pantallas = [];
var tuplas = [];
var firstObj = {}
var catalog = [];
var urlData = "https://jsonplaceholder.typicode.com/posts";
var urlData2 = "https://webservices.twinkey.cool/sura_app_xls/trackings.csv";
var localFile = "trackings.csv";


// fs.readFile(urlData2, function(err, data) {
//   console.log("readfileurl")
//   console.log(data);
// });


// fs.createReadStream('trackings.csv')
// .pipe(csv())
// .on('data', function(data ){
  
//   if (data[0].includes("_")) {
//     // console.log(data[1])
//     cut = data[0].split("_");
//     categories = cut[0].split(" ");
//     pantallas = cut[1];
//     firstObj = {
//       "track_name": categories[1],
//       "pageview": data[1],
//       "pantalla": pantallas
//     };
//     tuplas.push(firstObj);
//     // console.log(firstObj);
    
//     // console.log(categories[1]);
//     if (categories[1] == "EventosGenerados") {
//       // console.log("si hay");
//     }
    
//   }
//   // console.log(eventosGenerados)  
// })
// .on('end', function(data) {
//   // console.log('Read finished');
// });

// https.get(urlData, function(res) {
//   res.setEncoding("utf8");
//   res.on("data", function(data){
//     console.log(data);
//   })
// })

// getCSV(urlData, {headers: false}, function(rows) {
//   console.log("get data with getCSV");
//   console.log(rows)
// });

csv.fromStream(request(urlData2))
.on("data", function(data) {
  // console.log(data);
  console.log("empieza a leer el CSV");
  // console.log("CSV from stream!!!")
  // console.log(data);
  if (data[0].includes("_")) {
    // console.log(data[1])
    cut = data[0].split("_");
    categories = cut[0].split(" ");
    pantallas = cut[1];
    firstObj = {
      "track_name": categories[1],
      "pageview": data[1],
      "pantalla": pantallas,
      "unique_page": data[2],
      "entrances": data[3],
      "exits": data[4],
      "avg_page": data[5],
      "bounce": data[6]
    };
    console.log("termina de leer");
    tuplas.push(firstObj);
    // console.log(tuplas);

  }
})

// https.get(urlData2, function(res) {
//   res.setEncoding("utf8")
//   res.on("data", function(data){
//     // console.log(data);

//     if (data[0].includes("_")) {
//       // console.log(data[1])
//       cut = data[0].split("_");
//       categories = cut[0].split(" ");
//       pantallas = cut[1];
//       firstObj = {
//         "track_name": categories[1],
//         "pageview": data[1],
//         "pantalla": pantallas
//       };
//       tuplas.push(firstObj);
//       // console.log(tuplas);
      
//       // console.log(categories[1]);
//       if (categories[1] == "EventosGenerados") {
//         // console.log("si hay");
//       }
      
//     }
//   }).on('end', function(data) {
//     // console.log(data);
//   })
// })


// app.get("/catalog", function(req, res) {
//   res.json(catalog)
// })


app.get('/', function(req, res) {
  res.send("Hello world");
})

// app.use(bodyParser.json());

app.get("/tuplas", function(req, res) {
  // res.header()
  
    // console.log(tuplas);
    // res.render()
    console.log("pintando json");
    res.json(tuplas)
})

app.get("/durojson", function(req, res) {
  // res.header()
  // res.json(tuplas)
  var rows = [
    {"track_name":"InicioApp","pageview":"46","pantalla":"SuraAppAndroid-Inicio","unique_page":"41","entrances":"0","exits":"5","avg_page":"57.74","bounce":"0.00%"},{"track_name":"EventosGenerados","pageview":"43","pantalla":"SuraAppAndroid-PantallaIngresoCurp","unique_page":"21","entrances":"0","exits":"0","avg_page":"7.84","bounce":"0.00%"},{"track_name":"EventosGenerados","pageview":"40","pantalla":"SuraAppAndroid-IngresoDatos","unique_page":"21","entrances":"0","exits":"0","avg_page":"19.03","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"36","pantalla":"SuraAppAndroid-PantallaLogin","unique_page":"16","entrances":"2","exits":"11","avg_page":"222.03","bounce":"100.00%"},{"track_name":"EventosGenerados","pageview":"23","pantalla":"SuraAppAndroid-RespuestaCurpUsuarioRegistrado","unique_page":"13","entrances":"0","exits":"3","avg_page":"141.78","bounce":"0.00%"},{"track_name":"CURPSValidos","pageview":"21","pantalla":"SuraAppAndroid-PantallaEnvioCodigoSeguridad","unique_page":"16","entrances":"0","exits":"0","avg_page":"20.14","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"20","pantalla":"SuraAppAndroid-PantallaConfirmaCodigoSeguridad","unique_page":"16","entrances":"0","exits":"0","avg_page":"11.85","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"19","pantalla":"SuraAppAndroid-PantallaContrasenia","unique_page":"16","entrances":"0","exits":"0","avg_page":"20.42","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"19","pantalla":"SuraAppAndroid-PantallaGeneraContrasenia","unique_page":"16","entrances":"0","exits":"0","avg_page":"7.79","bounce":"0.00%"},{"track_name":"AccesoAppNoSURA","pageview":"19","pantalla":"SuraAppAndroid-UsuarioConPreregistro","unique_page":"16","entrances":"0","exits":"0","avg_page":"2.32","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"18","pantalla":"SuraAppAndroid-TomarID","unique_page":"12","entrances":"0","exits":"2","avg_page":"286.94","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"18","pantalla":"SuraAppAndroid-PantallaBienvenidoAforeSura","unique_page":"15","entrances":"0","exits":"2","avg_page":"179.28","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"16","pantalla":"SuraAppIOS-PantallaLogin","unique_page":"6","entrances":"1","exits":"2","avg_page":"208.56","bounce":"0.00%"},{"track_name":"EventosGenerados","pageview":"13","pantalla":"SuraAppIOS-PantallaIngresoCurp","unique_page":"6","entrances":"0","exits":"0","avg_page":"3.85","bounce":"0.00%"},{"track_name":"EventosGenerados","pageview":"12","pantalla":"SuraAppIOS-IngresoDatos","unique_page":"6","entrances":"0","exits":"0","avg_page":"70.67","bounce":"0.00%"},{"track_name":"EventosGenerados","pageview":"10","pantalla":"SuraAppAndroid-RespuestaCurpUsuarioIndependiente","unique_page":"9","entrances":"0","exits":"0","avg_page":"11.2","bounce":"0.00%"},{"track_name":"EventosGenerados","pageview":"10","pantalla":"SuraAppIOS-RespuestaCurpUsuarioRegistrado","unique_page":"5","entrances":"0","exits":"2","avg_page":"208.8","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"9","pantalla":"SuraAppAndroid-DatosDomicilio","unique_page":"8","entrances":"0","exits":"0","avg_page":"3.78","bounce":"0.00%"},{"track_name":"CURPSValidos","pageview":"9","pantalla":"SuraAppIOS-PantallaEnvioCodigoSeguridad","unique_page":"5","entrances":"1","exits":"0","avg_page":"99","bounce":"0.00%"},{"track_name":"Autenticacion","pageview":"8","pantalla":"SuraAppAndroid-ConfirmaDatosDomicilio","unique_page":"8","entrances":"0","exits":"6","avg_page":"210.63","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"8","pantalla":"SuraAppIOS-PantallaConfirmaCodigoSeguridad","unique_page":"5","entrances":"0","exits":"0","avg_page":"2.38","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"8","pantalla":"SuraAppIOS-PantallaContrasenia","unique_page":"5","entrances":"0","exits":"0","avg_page":"50.5","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"8","pantalla":"SuraAppIOS-PantallaGeneraContrasenia","unique_page":"5","entrances":"0","exits":"0","avg_page":"24.5","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"8","pantalla":"SuraAppIOS-PantallaBienvenidoAforeSura","unique_page":"5","entrances":"0","exits":"0","avg_page":"0.5","bounce":"0.00%"},{"track_name":"AccesoAppNoSURA","pageview":"8","pantalla":"SuraAppIOS-UsuarioConPreregistro","unique_page":"5","entrances":"0","exits":"0","avg_page":"0.5","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"7","pantalla":"SuraAppIOS-TomarID","unique_page":"2","entrances":"0","exits":"0","avg_page":"193","bounce":"0.00%"},{"track_name":"RegistrosNoSURA","pageview":"7","pantalla":"SuraAppAndroid-TrabajadorIndependiente","unique_page":"7","entrances":"0","exits":"0","avg_page":"1.71","bounce":"0.00%"},{"track_name":"RegistrosSURA","pageview":"5","pantalla":"SuraAppIOS-TrabajadorAutovinculado","unique_page":"4","entrances":"0","exits":"1","avg_page":"107","bounce":"0.00%"},{"track_name":"InAppSura","pageview":"3","pantalla":"SuraAppIOS-DatosDomicilio","unique_page":"2","entrances":"0","exits":"0","avg_page":"0","bounce":"0.00%"},{"track_name":"Autenticacion","pageview":"3","pantalla":"SuraAppIOS-ConfirmaDatosDomicilio","unique_page":"2","entrances":"0","exits":"0","avg_page":"406","bounce":"0.00%"},{"track_name":"RegistrosNoSURA","pageview":"2","pantalla":"SuraAppIOS-TrabajadorTraspaso","unique_page":"2","entrances":"0","exits":"0","avg_page":"652","bounce":"0.00%"},{"track_name":"EventosGenerados","pageview":"2","pantalla":"SuraAppIOS-RespuestaCurpUsuarioIndependiente","unique_page":"2","entrances":"0","exits":"0","avg_page":"16","bounce":"0.00%"},{"track_name":"Autenticacion","pageview":"1","pantalla":"SuraAppAndroid-CancelaDatosDomicilio","unique_page":"1","entrances":"0","exits":"0","avg_page":"1","bounce":"0.00%"},{"track_name":"EventosGenerados","pageview":"1","pantalla":"SuraAppIOS-RespuestaCurpUsuarioAsignado","unique_page":"1","entrances":"0","exits":"0","avg_page":"21","bounce":"0.00%"},{"track_name":"RegistrosSURA","pageview":"1","pantalla":"SuraAppIOS-TrabajadorAsignadoSura","unique_page":"1","entrances":"0","exits":"0","avg_page":"151","bounce":"0.00%"},{"track_name":"RegistrosNoSURA","pageview":"1","pantalla":"SuraAppIOS-TrabajadorIndependiente","unique_page":"1","entrances":"0","exits":"1","avg_page":"0","bounce":"0.00%"}
  ];
  res.json(rows)
  
})

app.listen(port, function() {
  console.log("deploying port 3000");
});

// http.createServer(app).listen(60)
// https.createServer(options, app).listen(643)