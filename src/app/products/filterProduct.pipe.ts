import {Pipe,PipeTransform} from '@angular/core';
import {RajInterfaceIproduct} from './product_model';

@Pipe({
    name:'PipeNamefiltered'

})

export class FilterProductPipe implements PipeTransform{
    //1:36:33,1:42:26 value will be complete array of the data using model/interface class instead of any
    //       (parameter 1 IsMyArray, parameter 2 is UsnerFormInputFiled )
    transform(value:RajInterfaceIproduct[], InputfilterBy:string){
    //ternary operator will be used below, more like a if condition in a single line,  
    //var = var.has.value.true.as.default ?.(than) var.tolowercase :(else) null.dont.do.anything;
    InputfilterBy = InputfilterBy ? InputfilterBy.toLowerCase():null;

        return InputfilterBy ?       value.filter((Varproduct:RajInterfaceIproduct) => 
    //  return var.value.true ?(then) value(myArray[]).fliter(Var.KeyPair : Value.RajInterfaceIproduct[]) => 

        (Varproduct.productName.toLowerCase().indexOf(InputfilterBy) !== -1) ||  //if its not -1 (productname.Inputfilerby match then return)
        //VarKey.productname.lowercase.
        (Varproduct.productCode.toLowerCase().indexOf(InputfilterBy) !== -1)) : value; //if its -1 (then dong show the any)
    } 
}

/*
//arrow function
function add(a,b){
    return a+b
}
let add = (a,b) => {
    return a + b
}

(a,b) => return a + b
//-------------------------------

ternary operator using a > 5 ? if.cond.true(value1) : else.cond.false(value2) 
var a = 10; //if a is 10 then do this else do this
a > 10 ? 'hi':'by'  //no a is not greater then 10 so it will return 'by' string
//its 'by'

function myFunction() {
    var str = "Rajiv Patel universe.";
    var n = str.indexOf("Patel");
    document.getElementById("demo").innerHTML = n;
}
OutPut: 6
Patel starts from sixth position of the string 

var a = [4,8,16,25] 
a.indexof(4) //0 index first one
a.indexof(16) //2 index third one
a.indexof(10) //-1 (cant find nubmer 10, so it will return -1)

var a = RajInterfaceIproduct[{'productName': 'Leaf Rake',
                             'productCode': 'GDN-0011',}]
var InputfilterBy = R;

a.indxof(InputfilterBy)
*/