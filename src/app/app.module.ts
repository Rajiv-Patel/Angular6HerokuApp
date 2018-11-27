import { NgModule } from '@angular/core';    
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule,ReactiveFormsModule} from '@angular/forms';  
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; //app.comp.ts >> Main 1st AppComponent
import { FirstClassCompbyRaj } from './myFirst.component'; //myFirst.comp.ts >> Sub 2nd Component
import { NotFoundComponent } from './shared/notFound.component';
import { OrderComponent } from './orders/order.component';

import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/products.module';
import { formsComponent } from './forms/forms.component';
import { Rajform2OrderComponent } from './forms/template-form/order-form-ts.component';
import { RajFormPostData } from './forms/services/form-post-ts.services';
import { RajReactiveform2OrderComponent } from './forms/reactive-form/order-reactive-form-ts.component';

import { MusicComponent } from './entertainment/music/music.component';
import { musicService } from './entertainment/music/music.service';
import { MovieComponent } from './entertainment/movie/movie.component';
import { MovieService } from './entertainment/movie/movie.service';
// import { MovieService } from './entertainment/movies/movie.service';
// import { MovieComponent } from './entertainment/movies/movies.component';


@NgModule({
imports: [
ReactiveFormsModule,
BrowserModule, //Must need to render HTML page on window, 
//if you remove BrowserModule, then no compiling error but no content show    
FormsModule,
HttpModule,
HttpClientModule,
RouterModule.forRoot([

  // {path: 'products', component: ProductComponent},
  // {path: 'products/:id', canActivate:[RouterGaurds], component: ProductDetailComponent},
  {path: 'reactive-form', component: RajReactiveform2OrderComponent},
  {path: 'template-form', component: Rajform2OrderComponent},
  {path: 'forms', component: formsComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'music', component: MusicComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]),
ProductModule
],

declarations: [    
  AppComponent, //app.comp.ts >> Main 1st AppComponent 
  FirstClassCompbyRaj,  //myFirst.comp.ts >> Sub 2nd Component          
  //ProductComponent,  //product Component 
  NotFoundComponent,
  OrderComponent,
  MovieComponent,
  MusicComponent,
  HomeComponent,
  formsComponent,
  Rajform2OrderComponent,
  RajReactiveform2OrderComponent,

  //ProductDetailComponent
],  

bootstrap: [
  AppComponent //class contains selectors for other Component files
  //such as for calss FirstClassCompbyRaj has 'myFirstComponent' selector
], 
//All Services
providers:[
  RajFormPostData,
  MovieService,
  musicService
  //RouterGaurds
]
})
export class AppModule { }


/*
Using Typescript without definition files (error TS2307: Cannot find module) 
avoid using any
*/

//https://aleksandar.xyz/blog/using-typescript-without-definition-files-error-ts2307-cannot-find-module/

