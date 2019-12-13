import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEventos();
  }
  getEventos() {
    this.http
      .get('https://de708a04-8e9e-4879-be24-2d7aac76be85.mock.pstmn.io/Eventos')
      .subscribe(
        response => {
          console.log('Teste');
          this.eventos = response;
        },
        error => {
          console.log(error);
        }
      );
  }
}
