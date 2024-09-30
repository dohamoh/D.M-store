import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  services = [
    { icon: 'bi bi-car-front-fill', title: 'Free Shipping', dec: 'For all orders over $99' },
    { icon: 'bi bi-cash-stack', title: 'Money Back Guarantee', dec: 'If good have Problems' },
    { icon: 'bi bi-headset', title: 'Online Support 24/7', dec: 'Dedicated support' },
    { icon: 'bi bi-file-earmark-lock2-fill', title: 'Payment Secure', dec: '100% secure payment' },
  ]
}
