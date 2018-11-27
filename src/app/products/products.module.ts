import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterGaurds } from './router.gaurd';

import { ProductComponent } from './product.component'; //product component
import { ProductDetailComponent } from './detail/productDetail.component';

//importing Pipe | Filtering Functions
import { MyUpperPipe } from './myUpper.pipe';
import { DiscountPipe } from './discountPrice.pipe';
import { FilterProductPipe } from './filterProduct.pipe';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';   //Import Star Compo


// import { SharedStarComponent } from '../shared/star.component';
// import { ProductComponent } from './product.component';
// import { MyUpperPipe } from './myUpper.pipe';
// import { DiscountPipe } from './discountPrice.pipe';
// import { FilterProductPipe } from './filterProduct.pipe';
// import { ProductDetailComponent } from './detail/productDetail.component';
// import { ProductService } from './product.service';
// import { RouterGaurds } from './router.gaurd';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
        {path: 'products', component: ProductComponent},
        {path: 'products/:id', canActivate:[RouterGaurds], component: ProductDetailComponent},
    ])
],

declarations: [
ProductComponent,  //product Component 
ProductDetailComponent,

  //Imported Pipe | Filtering Functions
MyUpperPipe,
DiscountPipe,
FilterProductPipe,


],

providers: [
ProductService,
RouterGaurds
]
})

export class ProductModule {

}