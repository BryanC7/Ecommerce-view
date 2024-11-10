import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLayerGroup, faShield, faTruckFast, faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import { ProductSliderComponent } from '../../shared/components/product-slider/product-slider.component';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProductSliderComponent,
    NavbarComponent,
    FooterComponent,
    FontAwesomeModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class HomeComponent {
  faLayerGroup = faLayerGroup;
  faShield = faShield;
  faTruckFast = faTruckFast;
  faCommentDollar = faCommentDollar;

  products: any = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: data => {
        this.products = data;
      },
      error: err => {
        console.error('Error fetching users:', err);
      }
    });
  }
}