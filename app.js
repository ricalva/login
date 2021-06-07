// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA9PyMty_fPH-p-ILPElZ1Xtysb6ZbPCgc",
    authDomain: "unidad3-1ee40.firebaseapp.com",
    databaseURL: "https://unidad3-1ee40-default-rtdb.firebaseio.com",
    projectId: "unidad3-1ee40",
    storageBucket: "unidad3-1ee40.appspot.com",
    messagingSenderId: "524142032727",
    appId: "1:524142032727:web:9b424e935c054957987012"
    //databaseURL: "https://unidad3-1ee40-default-rtdb.firebaseio.com",


    //databaseURL: "https://unidad3firebase-f56b6-default-rtdb.firebaseio.com",
 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    // Declaro Variable para mi base de datos
    var basedatos = firebase.database();

    // Variable para comunuicarme con mi html
    var app = document.getElementById('app');
  
    // ejemplo de innerHTML app.innerHTML = '<p>Hola que hay</p>';
  
    // Consumir datos de Realtime
    
    /*var coleccion = firebase.database().ref().child('mensaje');
    coleccion.on('value', (snaphot) => {
        console.log(snaphot.val())
    });*/
  
    function readval(){
      var coleccion = basedatos.ref().child('users/username/');
        coleccion.on('value', (snapshot) => {
        console.log(snapshot.val());
        app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
      });
      window.alert("Dato mostrado en la consola");
    }
    
    function readget(){
        basedatos.ref('users').child('username').get().then(function(snapshot) {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
          window.alert("Dato mostrado en la consola");
        }
        else {
          console.log("No data available");
          app.innerText = 'No data available';
        }
      }).catch(function(error) {
        console.error(error);
      });
    }
  
  
    //Agregar colección a base de datos
    function writecollection() {
      var nombre = document.getElementById('Nombre').value;
      var gmail = document.getElementById('Email').value;
      basedatos.ref('users').set({
        username: nombre,
        email: gmail
      });
      console.log("Datos agregados");
      window.alert("Dato agregado en firebase");
    }
    
    