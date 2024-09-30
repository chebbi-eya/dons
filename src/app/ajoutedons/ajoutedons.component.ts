import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dons } from '../model/Dons.model';
import { DonsService } from '../services/dons.service';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-ajoutedons',
  templateUrl: './ajoutedons.component.html',
  styleUrls: ['./ajoutedons.component.css']
})
export class AjoutedonsComponent implements OnInit {
  forminput !:FormGroup;
  dn !:Dons
  constructor(private fb:FormBuilder ,private donsserv:DonsService,private com:CommunicationService) { }

  ngOnInit(): void {
    this.forminput=this.fb.group(
      {
        'nom':["",Validators.required],
        'descripmin':["",Validators.required],
        'descrip':["",Validators.required],
        'categorie':["",Validators.required],
        'Hauteur':["",Validators.required],
        'profondeur':["",Validators.required],
        'largeur':["",Validators.required],
        'Pays':["",Validators.required],
        'Ville':["",Validators.required],
        'urlimage':["",Validators.required],
        'date':["",Validators.required]
      }
    )
  }
  register(){
    let dons=new Dons;
    dons.nom=this.forminput.controls[ 'nom'].value
    dons.descripmin=this.forminput.controls[ 'descripmin'].value
    dons.descrip=this.forminput.controls[ 'descrip'].value
    dons.categorie=this.forminput.controls[ 'categorie'].value
    dons.Hauteur=this.forminput.controls[ 'Hauteur'].value
    dons.profondeur=this.forminput.controls[ 'profondeur'].value
    dons.largeur=this.forminput.controls[ 'largeur'].value
    dons.Pays=this.forminput.controls[ 'Pays'].value
    dons.Ville=this.forminput.controls[ 'Ville'].value
    dons.urlimage=this.forminput.controls[ 'urlimage'].value
    dons.date=this.forminput.controls[ 'date'].value
    
    this.donsserv.register(dons).subscribe(
    
      (u)=>{
    this.dn=u
    this.com.addProduct(this.dn);
    console.log(this.dn.nom)
      }
    )
    
    
    }
    addProduct(product: Dons) {
      
      this.donsserv.register(product).subscribe(response => {
     
      });
}
}
