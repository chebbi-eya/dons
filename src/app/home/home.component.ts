import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentIndex = 0;
  images = ['/assets/image/donne.jpg', '/assets/image/g.jpg', '/assets/image/gg.jpg', '/assets/image/ggg.jpg']; // Ajoutez plus d'images si nécessaire

  get currentImage(): string {
    return this.images[this.currentIndex];
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  constructor() { }

  ngOnInit(): void {
  }
 

}
