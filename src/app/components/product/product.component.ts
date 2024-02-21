import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../../type';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, ButtonModule],
  providers: [ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private confirmationService: ConfirmationService) { }

  @Input() product!: Product;
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  editProduct() {
    this.edit.emit(this.product)
  }

  confirmDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this product ?',
      accept: () => {
        this.deleteProduct();
      }
    })
  }
  deleteProduct() {
    this.delete.emit(this.product)
  }
}
