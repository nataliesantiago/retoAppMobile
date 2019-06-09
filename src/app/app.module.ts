import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalHobbieComponent } from './tab3/components/modal-hobbie/modal-hobbie.component';
import { ModalAllHobbiesComponent } from './tab3/components/modal-all-hobbies/modal-all-hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalHobbieComponent,
    ModalAllHobbiesComponent
  ],
  entryComponents: [
    ModalHobbieComponent,
    ModalAllHobbiesComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
