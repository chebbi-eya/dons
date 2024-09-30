import { Component, OnInit } from '@angular/core';
import { DonsService } from '../services/dons.service';
import { CommunicationService } from '../services/communication.service';
import { Dons } from '../model/Dons.model';

@Component({
  selector: 'app-donsjouet',
  templateUrl: './donsjouet.component.html',
  styleUrls: ['./donsjouet.component.css']
})
export class DonsjouetComponent implements OnInit {
  listdons:Dons[]=[]
  constructor(private donsserv:DonsService,private com:CommunicationService) { }

  ngOnInit(): void {
    this.com.currentProducts.subscribe(products => {
      this.listdons = products;
    });
    
    // Load products initially
    this.loadProducts();
  }
  loadProducts() {
    this.donsserv.getalldons().subscribe(
      (tab) => {
        this.listdons = tab.filter(
          (Dons) => Dons.categorie === 'jouet'
        );
      }
    );
  }
}
