import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { PhotosComponent } from './photos/photos.component';
import { AdminComponent } from './admin/admin.component';
import { DonsComponent } from './dons/dons.component';
import { DonsjouetComponent } from './donsjouet/donsjouet.component';
import { DonsmeubleComponent } from './donsmeuble/donsmeuble.component';
import { DonsbricoComponent } from './donsbrico/donsbrico.component';
import { DonsautreComponent } from './donsautre/donsautre.component';
import { VoirdonsComponent } from './voirdons/voirdons.component';
import { EvenementComponent } from './evenement/evenement.component';
import { HttpClientModule} from '@angular/common/http';
import { ListuserComponent } from './listuser/listuser.component';
import { AjoutedonsComponent } from './ajoutedons/ajoutedons.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    Signup2Component,
    PhotosComponent,
    AdminComponent,
    DonsComponent,
    DonsjouetComponent,
    DonsmeubleComponent,
    DonsbricoComponent,
    DonsautreComponent,
    VoirdonsComponent,
    EvenementComponent,
    ListuserComponent,
    AjoutedonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
