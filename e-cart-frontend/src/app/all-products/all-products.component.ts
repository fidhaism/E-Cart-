import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts:any=[];
  constructor(private api: ApiService, private router: Router) { } // Inject ApiService and Router

  ngOnInit(): void {
    this.api.getAllProductAPI().subscribe({
      next: (result: any) => {
        console.log(result);
        this.allProducts = result
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  // Method to navigate to the view page when View Details button is clicked
  onViewDetails(productId: number) {
    this.router.navigate(['/view', productId]); // Navigate to view/:id route
  }
}

