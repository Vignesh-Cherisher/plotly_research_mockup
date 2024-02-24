import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlotlyComponentComponent } from './plotly-component/plotly-component.component';
import { PlotlyService } from './services/plotly-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlotlyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PlotlyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
