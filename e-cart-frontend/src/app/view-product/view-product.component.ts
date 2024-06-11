import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Method to navigate back to All Products component
  goBack() {
    this.router.navigate(['/']); // Navigate to the root path
  }
}
