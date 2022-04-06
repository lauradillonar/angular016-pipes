import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  
  nombre = 'Rocky Balboa';
  
  players = {
    player1: 'Computer',
    player2: 'User0405'
  }
  
  actors = {
    stewart: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Patrick_Stewart_Press_Conference_Logan_Berlinale_2017_04.jpg/250px-Patrick_Stewart_Press_Conference_Logan_Berlinale_2017_04.jpg',
    norris: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Chuck_Norris_May_2015.jpg/220px-Chuck_Norris_May_2015.jpg'
  }

  divisas = {
    current: {
      moneda:'Euro',
      total:145.20
    }
  };

  articulo = {
    titulo:'mI tItulo del articulo',
    contenido: 'El artículo de hoy...'
  }

  today = Date.now();

  numeros = '123456789';

  pi = '3.1415926535';
}
