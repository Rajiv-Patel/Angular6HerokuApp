import { Component,OnInit } from '@angular/core';
import { musicService } from './music.service';
import { RootObject} from './music_model';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html'
})

export class MusicComponent implements OnInit {

    Musictitle3: String = '~~~~ Music List Using Database JSON API ~~~~ ';
    Music3:RootObject[]; //itreate data varilabe created
    selectMusic: RootObject[];  
//     imgURL2: 
//     [
//         "https://cdn.britannica.com/39/131339-050-566F660F.jpg",
//         "https://cdn.britannica.com/58/24158-050-3C768A60.jpg",
//         "https://cdn.britannica.com/16/158516-050-B811B101.jpg",
//         "https://2.bp.blogspot.com/-7Qi8JLcptE4/WHs0Pp0KpkI/AAAAAAAAlDw/GAE8m30ful8nrRoXgfRyxKcdzJHSrNG1wCLcB/s1600/20c55e09fedd78813ba5e9b66c7931c4.jpg"        
//    ];

//    img:String = "https://cdn.britannica.com/39/131339-050-566F660F.jpg";
//    img2:String ="Test";
   im = URL;
   URL: any[] = [
    {'imageUrl': 'https://cdn.britannica.com/39/131339-050-566F660F.jpg'},
    {'imageUrl': 'https://cdn.britannica.com/58/24158-050-3C768A60.jpg'},
    {'imageUrl': 'https://cdn.britannica.com/16/158516-050-B811B101.jpg'},
    {'imageUrl': 'https://2.bp.blogspot.com/-7Qi8JLcptE4/WHs0Pp0KpkI/AAAAAAAAlDw/GAE8m30ful8nrRoXgfRyxKcdzJHSrNG1wCLcB/s1600/20c55e09fedd78813ba5e9b66c7931c4.jpg'},    
];



    filterText3: String ='Gam';
    showImage3: Boolean = true;
    
    imageWidthMusic: Number = 120;
    imageWidthMusic2: Number = 220;
    
    constructor(private _musicSerivce: musicService) {}

    ngOnInit(): void {
        this._musicSerivce.getMusic()
             .subscribe((data:RootObject[]) => {
                 this.Music3=data;                 
             });
     }

    onSelect(music4:RootObject[]) : void {
        console.log(music4);
        this.selectMusic = music4;
    }

}






