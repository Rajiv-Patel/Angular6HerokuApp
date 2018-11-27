import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// Ang5
// import { Observable } from 'rxjs/observable';
// Ang6
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { RajInterfaceImovie} from './movie_model';

@Injectable()


export class MovieService {

    //private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';
    private _moviesUrl =  'https://ngmovies.herokuapp.com/api/getMovies';

    constructor(private _http: Http,
                private __http: HttpClient) {}

    getMovies(): Observable<RajInterfaceImovie[]> {
        return this.__http.get<RajInterfaceImovie[]>(this._moviesUrl);
    }
    // getProduct(): Observable<RajInterfaceIproduct[]> {
    //     return this.__http.get<RajInterfaceIproduct[]>(this._productUrl);
    // }
    // getProductDetail(id): Observable<RajInterfaceIproduct[]> {
    //     return this.__http.get<RajInterfaceIproduct[]>(`${this._productUrl}?productId=${id}`);
    // }

    // getMovies(): Observable<any[]> {
    //     return this.__http.get<any[]>(this._moviesUrl);
    // }

}

/*
[
    {
      "_id": "5ab12612f36d2879268f284a",
      "name": "Black Panther",
      "language": "ENGLISH",
      "rate": 4.5,
      "type": "Action Adventure Fantasy",
      "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
    },
    {
      "_id": "5ab12666f36d2879268f2902",
      "name": "Death Wish",
      "language": "ENGLISH",
      "type": "Action Crime Thriller",
      "rate": 3.2,
      "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
    },
    {
      "_id": "5ab12678f36d2879268f291d",
      "name": "Coco",
      "language": "ENGLISH",
      "type": "Adventure Animation Family",
      "rate": 5,
      "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
    },
    {
      "_id": "5ab126b6f36d2879268f2943",
      "name": "Avengers",
      "language": "ENGLISH",
      "type": "Actione",
      "rate": 2,
      "imageUrl": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg"
    },
    {
      "_id": "5ab4e66b0c1d2b27846c6407",
      "name": "Black Friday",
      "language": "ENGLISH",
      "rate": 4.5,
      "type": "Action Adventure Fantasy",
      "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
    },
    {
      "_id": "5ab12686f36d2879268f2930",
      "name": "Mission Impossible",
      "language": "English",
      "rate": 2.5,
      "type": "Horror Thriller",
      "imageUrl": "https://pre00.deviantart.net/5d3b/th/pre/f/2017/313/2/b/mission_impossible__dark_directive_teaser_poster_by_themadbutcher-dbt9wav.png"
    },
    {
      "_id": "5ab12698f36d2879268f293e",
      "name": "Incredibles 2",
      "language": "ENGLISH",
      "type": "Animated",
      "rate": 4,
      "imageUrl": "http://static1.squarespace.com/static/588a4776f5e23132a09d23b2/588a4e91be65945e50a36c0e/5b24084baa4a999c88a9f277/1529088827756/tre.jpg"
    }
  ]
*/

/*
promises <= ===== .then
Observable => rxjs   ====== .subscribe  (fast)(stream line)
http=> old
httpclient => new
getProduct(): Promise<RajInterfaceIproduct[]> {
        return this._http.get(this._productUrl)
              .toPromise()
              .then((res) => res.json());
    }
     private extractData(res: Response) {
        return res.json();
    }
getProduct(): Observable<RajInterfaceIproduct[]> {
        return this._http.get(this._productUrl)
            .pipe(map(this.extractData));
    }
*/

