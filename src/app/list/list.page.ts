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

  public cards: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //public cards: Array<Number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];


  public products: Product[] = [
    { name: "Churros", price: 2, image: "/assets/shapes.svg" },
    { name: "Porras", price: 3, image: "/assets/shapes.svg" },
    { name: "Chocolate", price: 2.5, image: "/assets/shapes.svg"},
    { name: "Cafe", price: 1, image: "/assets/shapes.svg" },
    { name: "Colacao", price: 1, image: "/assets/shapes.svg" },
    { name: "Patatas fritas", price: 2.43, image: "/assets/shapes.svg" },
    { name: "Item random", price: 342, image: "/assets/shapes.svg" },
    { name: "No se me ocurren nombres largos", price: 2343 , image: "/assets/shapes.svg"},
    { name: "Piña", price: 2343, image: "/assets/shapes.svg" },
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