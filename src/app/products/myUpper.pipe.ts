import {Pipe, PipeTransform} from '@angular/core';//will give you Transform method funciton
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
    name:'myupper'

})

//you can only have one export and also one pipe 
export class MyUpperPipe implements PipeTransform{

//1.Using One parameter and Passing Value
        // transform(value: String){
        //     value = value.toUpperCase();
        //     return value;
    // //<td>{{prod.productName | myupper }}</td>
    //What ever the value on left side of pipe (prod.productName) will be the 1st Parameter 
    //to our transfor fuciton which is variable call value, return has toUppercase()
    
//2.Using two parameter and passing value, 
    transform(value: String, type:String){
        if(type === 'upper'){
            value=value.toUpperCase();
        } else{
            value = value.toLowerCase();
        }
        return value;
    }
}

/*
function add(a,b){  //old way of using function 
    return a+b
}

var add = (a,b) => { //new way of usig funciton 
    return a+b
}

var ages = [32,33,16,40,"string"];

let checkAdultAge = (age) => { //age is a parameter 
    return age >= 19;  //
console.lgo(age);
//32,33,40
}

function.myFunction(){
    document.getElementById("demo").innerHTML = ages.filter((age) => {return age >=18});
    //32,33,40 Same Output but directly writne the funciton 
}

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_map
var numbers = [4, 9, 16, 25];
function myFunction() {
    x = document.getElementById("demo")
    x.innerHTML = numbers.map(Math.sqrt);
}
//OutPut: 2,3,4,5

function myFunction() {
    var str = "Rajiv Patel universe.";
    var n = str.indexOf("Patel");
    document.getElementById("demo").innerHTML = n;
}
OutPut: 6
*/
