import { Component,OnInit } from '@angular/core';
import { RajInterfaceImovie} from './movie_model';
import { MovieService } from './movie.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html'
})

export class MovieComponent implements OnInit {

    Movietitle3: String = '~~~~ Movie List Using Database JSON API ~~~~ ';
    movies3:RajInterfaceImovie[]; //itreate data varilabe created
    selectMovies: RajInterfaceImovie[];  


    filterText3: String ='Gam';
    showImage3: Boolean = true;
    
    imageWidthMovie: Number = 120;
    imageWidthMovie2: Number = 220;
    
    constructor(private _movieSerivce: MovieService) {}

    ngOnInit(): void {
        this._movieSerivce.getMovies()
             .subscribe((data:RajInterfaceImovie[]) => {
                 this.movies3=data;                 
             });
     }

    onSelect(movies4:RajInterfaceImovie[]) : void {
        console.log(movies4);
        this.selectMovies = movies4;
    }

}






