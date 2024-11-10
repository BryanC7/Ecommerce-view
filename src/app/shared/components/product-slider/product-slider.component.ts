import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [
    CommonModule, ProductCardComponent
  ],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSliderComponent { 
  @Input() title:any;
  @Input() products:any;
}
