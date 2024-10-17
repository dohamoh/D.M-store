import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from "../our-services/our-services.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OurServicesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedTab = 'tab1'; // Default to Tab 1

  images: string[] = [
    '/assets/images/product/product-1.jpg',
    '/assets/images/product/product-2.jpg',
    '/assets/images/product/product-3.jpg',
    '/assets/images/product/product-4.jpg',
    '/assets/images/product/product-5.jpg',
    '/assets/images/product/product-6.jpg',
    '/assets/images/product/product-7.jpg',
    '/assets/images/product/product-8.jpg',
  ]
  wImages: string[] = [
    '/assets/images/product/product-1.jpg',
    '/assets/images/product/product-3.jpg',
    '/assets/images/product/product-6.jpg',
    '/assets/images/product/product-7.jpg',
  ]
  mImages: string[] = [
    '/assets/images/product/product-2.jpg',
    '/assets/images/product/product-4.jpg',
    '/assets/images/product/product-5.jpg',
    '/assets/images/product/product-8.jpg',
  ]
  pictures: string[] = [
    '/assets/images/insta/insta-1.jpg',
    '/assets/images/insta/insta-2.jpg',
    '/assets/images/insta/insta-4.jpg',
    '/assets/images/insta/insta-5.jpg',
    '/assets/images/insta/insta-6.jpg',
  ]
  acsImages: string[] = [
    '/assets/images/product/product-9.jpg',
    '/assets/images/product/product-4 (2).jpg',
    '/assets/images/product/product-5 (2).jpg',
    '/assets/images/product/product-7 (2).jpg',
  ]
  kidsImages: string[] = [
    '/assets/images/product/kids-14.webp',
    '/assets/images/product/kids-5.webp',
    '/assets/images/product/kids-8.jpg',
    '/assets/images/product/kids-9.webp',
  ]
  cosImages: string[] = [
    '/assets/images/product/cosmatic-3.webp',
    '/assets/images/product/cosmatic-4.avif',
    '/assets/images/product/cosmatic-2.webp',
    '/assets/images/product/cosmatic-10.webp',
  ]


}
