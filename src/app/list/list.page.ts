import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  public products: Product[] = [
    { name: "Rosca", price: 1, image: "/assets/TestPhotos/Rosca.jpg" },
    { name: "Patata", price: 1, image: "/assets/TestPhotos/R_Patata.jpg" },
    { name: "Chocolate", price: 1.50, image: "/assets/TestPhotos/IMG_0017.JPG"},
    { name: "Cafe", price: 1.10, image: "/assets/TestPhotos/IMG_0029.PNG" },
    { name: "Colacao", price: 1.20, image: "/assets/TestPhotos/IMG_0021.JPG" },
    { name: "Patatas fritas", price: 2.50, image: "/assets/TestPhotos/IMG_0044.JPG" },
    { name: "Avellanas", price: 4, image: "/assets/TestPhotos/IMG_0043.JPG" },
    { name: "Leche", price: 1 , image: "/assets/TestPhotos/IMG_0038.JPG"},
    { name: "Revuelto", price: 4, image: "/assets/TestPhotos/IMG_0047.JPG" },
  ]

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

}

interface Product {
  name: string;
  price: number;
  image?: string;
}