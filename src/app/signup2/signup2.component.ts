import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../model/Utilisateur.model';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {
forminput !:FormGroup;
counter=0;
us !:Utilisateur
  constructor(private fb:FormBuilder,private userserv:UtilisateurService) { }

  ngOnInit(): void {
    this.forminput=this.fb.group(
      {
        'name':["",Validators.required],
        'prenom':["",Validators.required],
        'tel':["",Validators.required],
        'email':["",Validators.required],
        'motdepasse':["",Validators.required],
        'pays':["",Validators.required],
        'ville':["",Validators.required],
        'postal':["",Validators.required],
        'adresse':["",Validators.required]
      }
    )
  }
register(){
let usr=new Utilisateur;
usr.nom=this.forminput.controls[ 'name'].value
usr.prenom=this.forminput.controls[ 'prenom'].value
usr.tel=this.forminput.controls[ 'tel'].value
usr.email=this.forminput.controls[ 'email'].value
usr.mdp=this.forminput.controls[ 'motdepasse'].value
usr.Pays=this.forminput.controls[ 'pays'].value
usr.ville=this.forminput.controls[ 'ville'].value
usr.Codepos=this.forminput.controls[ 'postal'].value
usr.adresse=this.forminput.controls[ 'adresse'].value

this.userserv.register(usr).subscribe(


  (u)=>{
this.us=u
console.log(this.us.nom)
  }
)


}
incrementer(){
this.userserv.incrimenter()
this.counter=this.userserv.conter;
}

}
