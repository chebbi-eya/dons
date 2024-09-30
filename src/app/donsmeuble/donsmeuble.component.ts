import { Component, OnInit } from '@angular/core';
import { Dons } from '../model/Dons.model';
import { DonsService } from '../services/dons.service';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-donsmeuble',
  templateUrl: './donsmeuble.component.html',
  styleUrls: ['./donsmeuble.component.css']
})
export class DonsmeubleComponent implements OnInit {
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
          (Dons) => Dons.categorie === 'meuble'
        );
      }
    );
  }
}
