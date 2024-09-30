import { Component, OnInit } from '@angular/core';
import { Dons } from '../model/Dons.model';
import { DonsService } from '../services/dons.service';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-dons',
  templateUrl: './dons.component.html',
  styleUrls: ['./dons.component.css']
})
export class DonsComponent implements OnInit {
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
          (Dons) => Dons.categorie === 'vetement'
        );
      }
    );
  }
}
