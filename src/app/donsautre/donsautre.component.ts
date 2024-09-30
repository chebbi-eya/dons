import { Component, OnInit } from '@angular/core';
import { DonsService } from '../services/dons.service';
import { CommunicationService } from '../services/communication.service';
import { Dons } from '../model/Dons.model';

@Component({
  selector: 'app-donsautre',
  templateUrl: './donsautre.component.html',
  styleUrls: ['./donsautre.component.css']
})
export class DonsautreComponent implements OnInit {
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
          (Dons) => Dons.categorie === 'autre'
        );
      }
    );
  }
}
