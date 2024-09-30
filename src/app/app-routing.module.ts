import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { PhotosComponent } from './photos/photos.component';
import { AdminComponent } from './admin/admin.component';
import { DonsComponent } from './dons/dons.component';
import { DonsautreComponent } from './donsautre/donsautre.component';
import { DonsbricoComponent } from './donsbrico/donsbrico.component';
import { DonsjouetComponent } from './donsjouet/donsjouet.component';
import { DonsmeubleComponent } from './donsmeuble/donsmeuble.component';
import { VoirdonsComponent } from './voirdons/voirdons.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ListuserComponent } from './listuser/listuser.component';
import { AjoutedonsComponent } from './ajoutedons/ajoutedons.component';


const routes: Routes = [

  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"signup2",component:Signup2Component},
  {path:"photos",component:PhotosComponent},
  {path:"admin",component:AdminComponent},
  {path:"dons",component:DonsComponent},
  {path:"donsautre",component:DonsautreComponent},
  {path:"donsbrico",component:DonsbricoComponent},
  {path:"donsjouet",component:DonsjouetComponent},
  {path:"donsmeuble",component:DonsmeubleComponent},
  {path:"voirdons",component:VoirdonsComponent},
  {path:"evenement",component:EvenementComponent},
  {path:"listuser",component:ListuserComponent},
  {path:"ajoutedons",component:AjoutedonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
