import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dons } from '../model/Dons.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonsService {

  constructor(private httpc:HttpClient) {


   }
   
   register(dn:Dons):Observable<Dons>{
    return this.httpc.post<Dons>("http://localhost:8082/adddons", dn);
  }

  getalldons():Observable<Dons[]>{
    return this.httpc.get<Dons[]>("http://localhost:8082/api/donss");
  }
}
