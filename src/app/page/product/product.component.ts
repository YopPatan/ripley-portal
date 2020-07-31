import { Component, OnInit } from '@angular/core';
import {GalleryItem, ImageItem} from '@ngx-gallery/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  panelOpenState = false;
  images: GalleryItem[];
  product: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const sku = this.route.snapshot.paramMap.get('sku');
    this.http.get('http://localhost:3000/' + sku).subscribe( response => {
      console.log('response', response);
      this.product = response;
      this.images = this.product.images.map(item => {
        return new ImageItem( { src: item, thumb: item } );
      });
    });
  }

}
