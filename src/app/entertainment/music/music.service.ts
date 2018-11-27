import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// Ang5
// import { Observable } from 'rxjs/observable';
// Ang6
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { RootObject} from './music_model';

@Injectable()


export class musicService {

    //private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';
    //private _musicUrl =  'https://ngmovies.herokuapp.com/api/getMovies';
    private _musicUrl =  'https://ngmusicdb.herokuapp.com/api/getMusic';

    constructor(private _http: Http,
                private __http: HttpClient) {}

    getMusic(): Observable<RootObject[]> {
        return this.__http.get<RootObject[]>(this._musicUrl);
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

/*  https://jsonformatter.curiousconcept.com/ 
[  
   {  
      "_id":"5ab17276f36d282750913a51",
      "artists":[  
         {  
            "id":1,
            "name":"Jimi Hendrix",
            "cover":"jimi_hendrix",
            "bio":"James Marshall Jimi Hendrix was an American rock guitarist, singer, and songwriter. ",
            "albums":[  
               {  
                  "albumId":"a1",
                  "title":"Electric Ladyland",
                  "year":1968,
                  "cover":"electric-ladyland",
                  "price":20
               },
               {  
                  "albumId":"a2",
                  "title":"Experience",
                  "year":1971,
                  "cover":"experienced",
                  "price":25
               },
               {  
                  "albumId":"a3",
                  "title":"Isle of Wright",
                  "year":1971,
                  "cover":"isle_of_wright",
                  "price":15
               },
               {  
                  "albumId":"a4",
                  "title":"Band of Gypsys",
                  "year":1970,
                  "cover":"band_of_gypsys",
                  "price":10
               }
            ],
            "genre":"rock, blues"
         },
         {  
            "id":2,
            "name":"Madonna",
            "cover":"madonna",
            "bio":"Madonna Louise Ciccone is an American singer, songwriter, actress, and businesswoman.",
            "albums":[  
               {  
                  "albumId":"b1",
                  "title":"Like a Virgin",
                  "year":1984,
                  "cover":"like_a_virgin",
                  "price":20
               },
               {  
                  "albumId":"b2",
                  "title":"True Blue",
                  "year":1986,
                  "cover":"true_blue",
                  "price":25
               },
               {  
                  "albumId":"b3",
                  "title":"Erotica",
                  "year":1994,
                  "cover":"erotica",
                  "price":15
               },
               {  
                  "albumId":"b4",
                  "title":"Ray of Light",
                  "year":1998,
                  "cover":"ray_of_light",
                  "price":10
               }
            ],
            "genre":"pop"
         },
         {  
            "id":3,
            "name":"Johnny Cash",
            "cover":"johnny_cash",
            "bio":"John R. Cash was an American singer-songwriter, guitarist, actor, and author.",
            "albums":[  
               {  
                  "albumId":"c1",
                  "title":"Ain't No Grave",
                  "year":2010,
                  "cover":"no_grave",
                  "price":20
               },
               {  
                  "albumId":"c2",
                  "title":"Out Among the Stars",
                  "year":2014,
                  "cover":"among_stars",
                  "price":25
               },
               {  
                  "albumId":"c3",
                  "title":"Solitary Man",
                  "year":2000,
                  "cover":"solitary_man",
                  "price":15
               },
               {  
                  "albumId":"c4",
                  "title":"The Man Comes Around",
                  "year":2002,
                  "cover":"man_comes_around",
                  "price":10
               }
            ],
            "genre":"pop"
         },
         {  
            "id":4,
            "name":"Pink Floyd",
            "cover":"pink_floyd",
            "bio":"Pink Floyd were an English rock band formed in London in 1965. They achieved international acclaim with their progressive and psychedelic music. ",
            "albums":[  
               {  
                  "albumId":"d1",
                  "title":"The Wall",
                  "year":1979,
                  "cover":"the_wall",
                  "price":20
               },
               {  
                  "albumId":"d2",
                  "title":"The Dark Side of the Moon",
                  "year":1973,
                  "cover":"dark_side",
                  "price":25
               },
               {  
                  "albumId":"d3",
                  "title":"Animals",
                  "year":1977,
                  "cover":"animals",
                  "price":15
               }
            ],
            "genre":"Rock"
         }
      ]
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

