import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { TesteComponent } from './teste/teste.component';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { AnimaisComponent } from './animais/animais.component';

@NgModule({
  declarations: [
    AppComponent,
    AssinaturaComponent,
    TesteComponent,
    TabuadaComponent,
    AnimaisComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
