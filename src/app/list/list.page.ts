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
    { Id: 1, Name: "Rosca", Price: 1, Image: "/assets/TestPhotos/Rosca.jpg" },
    { Id: 2, Name: "Patata", Price: 1, Image: "/assets/TestPhotos/R_Patata.jpg" },
    { Id: 3, Name: "Chocolate", Price: 1.50, Image: "/assets/TestPhotos/IMG_0017.JPG"},
    { Id: 4, Name: "Cafe", Price: 1.10, Image: "/assets/TestPhotos/IMG_0029.PNG" },
    { Id: 5, Name: "Colacao", Price: 1.20, Image: "/assets/TestPhotos/IMG_0021.JPG" },
    { Id: 6, Name: "Patatas fritas", Price: 2.50, Image: "/assets/TestPhotos/IMG_0044.JPG" },
    { Id: 7, Name: "Avellanas", Price: 4, Image: "/assets/TestPhotos/IMG_0043.JPG" },
    { Id: 8, Name: "Leche", Price: 1 , Image: "/assets/TestPhotos/IMG_0038.JPG"},
    { Id: 9, Name: "Revuelto", Price: 4, Image: "/assets/TestPhotos/IMG_0047.JPG" },
  ]
  total: number = 0;
  shopList: Product[] = [];

  ngOnInit() {
  }

  addProduct(productToAdd: Product){
    this.shopList.push(productToAdd);
    //this.shopList.reduce()
    this.getTotal();
  }

  getTotal(){
    this.total = this.shopList.reduce((total, productToAdd) => { return total + productToAdd.Price; }, 0);
  }

}

interface Product {
  Id: number;
  Name: string;
  Price: number;
  Image?: string;
}
