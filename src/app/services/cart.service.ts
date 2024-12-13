import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  constructor() {}

  addToCart(product: Product) {
    this.cart.update((products) => [...products, product]);
  }

  removeFromCart(productId: number) {
    this.cart.update((products) =>
      products.filter((product) => product.id !== productId)
    );
  }
}
