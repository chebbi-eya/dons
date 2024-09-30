import { Injectable } from '@angular/core';
import { Dons } from '../model/Dons.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private productSource = new BehaviorSubject<Dons[]>([]);
  currentProducts = this.productSource.asObservable();

 
  constructor() { }
  addProduct(product: Dons) {
    // Update the list of products in the service
    this.productSource.next([...this.productSource.value, product]);
  }
}
