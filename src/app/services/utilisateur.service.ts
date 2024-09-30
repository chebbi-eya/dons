import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utilisateur } from '../model/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8082/api/utilisateurs';

items=new BehaviorSubject(0);
conter=0;
  constructor(private httpc:HttpClient) { 
    this.items.subscribe(
      (x)=>{
        this.conter=x
      }
    )
  }


  incrimenter(){
    this.items.next(this.items.getValue()+1)
  }

  
  register(usr:Utilisateur):Observable<Utilisateur>{
    return this.httpc.post<Utilisateur>("http://localhost:8082/adduser", usr);
  }


  getallusers():Observable<Utilisateur[]>{
    return this.httpc.get<Utilisateur[]>(this.apiUrl);
  }
}
