import {Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'app-star-component',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']

})

export class SharedStarComponent implements OnChanges {
    
    @Input() rating:number; //make rating as input param to receive data from product declar file 
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 6;        
    }
    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
  }
}

/*Three way to pass data to component
input:
Output:
Services:

var a = 10
var b = "my age is "+ a
my age is 10
var b = `my age is ${a}`
my age is 10

*/
