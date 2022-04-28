import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/tripservice.service';
import { Trip } from '../../model/Trip';



@Component({
  selector: 'app-home',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  titre: string;
  triplist: Trip[]
  nombreMax: number
  image: string = '../assets/caption.jpg'
  nb: number = 0;
  trip: Trip;
  hidden: boolean;
  
  constructor( private tripservice: TripService) { }

  ngOnInit(): void {
    this.titre = 'E-commerce'
    this.hidden = true
    this.trip = new Trip()

    // this.triplist = [
    //   { id: 1, title: 'Product1', price: 20, quantity: 20, like: 0 },
    //   { id: 2, title: 'Product2', price: 15, quantity: 0, like: 0 },
    //   { id: 3, title: 'Product3', price: 17, quantity: 10, like: 0 },
    // ]
    this.tripservice.getmytrip().subscribe((data:Trip)=>(this.trip = data))
  }
  showForm() {
    this.hidden = false;
  }
  hideForm() {
    this.hidden = true;
  }

  buyProduct(product) {
    product.quantity--
  }
  calcul() {
    this.nb = 0
    this.triplist.forEach(produit => {
   
        this.nb++;
      
    }
    );
  }

  addP(product) {
  
    this.tripservice.addProduct(product).subscribe(() =>
      this.triplist.push(product))
  }
  addtrip(product: Trip) {
  
    this.tripservice.addProduct(product).subscribe(
      () => (this.triplist.push(product))
    )
    this.hidden = true
  }
  deletetrip(product: Trip) {
    this.tripservice.deleteProduct(product.idTrip).subscribe  (
      () => {
        let i = this.triplist.indexOf(product);
        this.triplist.splice(i, 1)
      }
    )
  }
  deleteProductId(id: number) {
    this.tripservice.deleteProduct(id).subscribe(
      () => {
        this.triplist.forEach(produit => {
          if (produit.idTrip == id) {
            let product = produit
            let i = this.triplist.indexOf(product)
            this.triplist.splice(i, 1)
          }
        })
      }
    )
  }

}
