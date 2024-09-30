import { Component, OnInit } from '@angular/core';
import { Dons } from '../model/Dons.model';
import { DonsService } from '../services/dons.service';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-donsbrico',
  templateUrl: './donsbrico.component.html',
  styleUrls: ['./donsbrico.component.css']
})
export class DonsbricoComponent implements OnInit {
  listdons2:Dons[]=[]
  constructor(private donsserv:DonsService,private com:CommunicationService) { }

  ngOnInit(): void {
    this.com.currentProducts.subscribe(products => {
      this.listdons2 = products;
    });
    
    // Load products initially
    this.loadProducts();
  }
  loadProducts() {
    this.donsserv.getalldons().subscribe(
      (tab) => {
        this.listdons2 = tab.filter(
          (Dons) => Dons.categorie === 'bricolage'
        );
      }
    );
  }
}
