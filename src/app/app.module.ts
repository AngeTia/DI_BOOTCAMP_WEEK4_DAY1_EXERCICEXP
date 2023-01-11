import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyAppModule } from './my-app/my-app.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
