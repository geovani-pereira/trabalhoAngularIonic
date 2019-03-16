import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 //template: '<h1>pode ser aqui inline</h1>'
  styleUrls: ['./app.component.css'],
  styles:[
    //pode inserir estilo direto aqui ou direcionar com StyleUrls
  ]
})
export class AppComponent {
  title = 'Angular';
}
