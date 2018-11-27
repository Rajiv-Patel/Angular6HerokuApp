import {Component} from'@angular/core'; //package.json core:^7.0.0 
	
@Component({
//any Component you make, you have to declare them in the app.module.ts 
 //under app.module.ts file, inside declarations add Component 'myFirstHtmlTag'
	
selector:'myFirstComponent',  //custom html tag called 'myFirstHtmlTag'
	        //below info in template will be available to my layout file 
template:`
		<table><tr><td align="center">		
		<div class="container text-success">template string: 
		<b>I am importing my first-Component HTML text 2</b>		
		</div></td></tr></table>
	    `
})
export class FirstClassCompbyRaj {}                         
//creating component class called FirstClassCompbyRaj
//it need to be added into app.module.ts under declaration:[ ]
//so we can reuse it for other purpose and called on it.
