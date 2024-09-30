import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  details = [
    {title:'Category' , item1:'women', item2:'men', item3:'kids', item4:'Cosmetics'},
    {title:'Company' , item1:'about', item2:'news', item3:'FAQ', item4:'Contact'},
    {title:'Address' , item1:'200, Green block, NewYork', item2:'+10 456 267 1678', item3:'contact89@winter.com', item4:''},
    {title:'NEWSLETTER' , item1:'', item2:'', item3:'', item4:''},
  ]

}
