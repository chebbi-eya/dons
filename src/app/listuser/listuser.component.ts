import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../model/Utilisateur.model';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
 list:number[]=[1,2,3]
 listusr:Utilisateur[]=[]
  constructor(private userserv:UtilisateurService) { }

  ngOnInit(): void {

   
      this.userserv.getallusers().subscribe(
        (tab)=>{
      this.listusr=tab
        }
      )
      

  }

}
