//21 Creating ReactiveForm 
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl,} from '@angular/forms'; //21 New Things Required 
import {FormBuilder} from '@angular/forms'; //21.1 New Things Required 
import {Validators} from '@angular/forms'; //21.4 New Things Required 
import {AbstractControl} from '@angular/forms';//21.6
import {ValidatorFn} from '@angular/forms';//21.8 //it will make more dynamic 
import {FormArray} from '@angular/forms'; //22.1


//To avoid making an object for every individual form field of our FormGroup which is bulky and heavy, 
//we will import FormBuilder //21.1
//import {Customer} from '../interface-customer';//21
import { Customer } from './interface-customer';//21

//21.6 Custome Function for Only Rating Field
//you can write seprate .js function file and import that as well. make it re-usable
//use of function, must need AbstractControl (is part of form), Import aboveas as well
function rattingRange(cVar:AbstractControl):{[key:string]:boolean}|null{ //21.6
    //cVar using dataTypeof AbstCtl:{key:dataWeGet or GetABoolean} 
    //take the value and return key value pair (either true or false) else nothing null
    //if my function returns something I have to play with that else return me null . 
    if(cVar.value != undefined && (isNaN(cVar.value) ||cVar.value < 1 || cVar.value > 5)){
    //CVar(userInput).value != empty  && (notnumber(UserInput) || value<1 || value>5 )
    //if condition is satisfye when user sends input then 
        return{'Rajrange':true}//'mykeyName(range):true'below return true
        ////21.7 Rajrange in HTML show true for validation
    };
    return null //else it will return null
}   

//some input field we need 1 to 5 and/or another 50 to 30 then we use as more generic funnction 
//21.8 How to make it more generic, wrap function(21.7) inside another function, 
function rattingRange2(min:number,max:number):ValidatorFn{ //import ValidatorFn is function
                    //passing min & max parameters when declaring function at 21.9
    //function srattingRange2, using fat erro as function returing value 
    return (cVar:AbstractControl):{[key:string]:boolean}|null => {   //Using ES6 Fat Erro Func. 
        if(cVar.value != undefined && (isNaN(cVar.value) ||cVar.value < min || cVar.value > max)){
        //CVar(userInput).value != empty  && (notnumber(UserInput) || value<1 || value>5 )
        //if condition is satisfye when user sends input then 
            return{'Rajrange2':true}//'mykeyName(range):true'below return true
            ////21.7 Rajrange in HTML show true for validation
        };
        return null //else it will return null
    } 
}

//21.10 Video 1:30:00 1:36:00 Video Explain  https://scotch.io/@ibrahimalsurkhi/match-password-validation-with-angular-2
function RajemailMatcher(dVar:AbstractControl){  //email validation 
    let emailControl = dVar.get('Email');
    let confrimControl = dVar.get('EmailConfirm');
    //let SetconfrimControl = dVar.setValue('EmailConfirm');

    if(emailControl.pristine || confrimControl.pristine){
        return null;
    }
    if(emailControl.value === confrimControl.value){
        return null;
    }
        return {'Rajmatch':true}
}

@Component({
    templateUrl:'./order-reactive-form-html.component.html'
})
export class RajReactiveform2OrderComponent{
    title="Reactive Form"  //our Header Title Variable to Display in HTML 
    RajcustomerForm:FormGroup; //making an object of RajcustomerForm
    //below interface Customer data type and assigned to Rajcustomer 
    Rajcustomer:Customer = new Customer();  
    showAddress:false; //22.1
    emailMessage:string; ///22.3

    get addresses(): FormArray{ ////22.1
        return <FormArray>this.RajcustomerForm.get('addresses');
    }

    private validationMessage = {////////22.3
        required:'Please enter your email address',
        pattern:'Please enter a valid email'
    }

    ////21.2 First we will make an object of FormBuilder
    constructor(private RajFormBuilder:FormBuilder){};
    
    ngOnInit():void{  //50:55 watch 
        /*
        //below is making an object for every Form Filed to avoid we use 21.3
        this.RajcustomerForm = new FormGroup({   
            //writting our Field Names which are used in the form
            firstName:new FormControl("Test Value 1"),//default value 
            lastName:new FormControl("Test Value 2"),//default value 
            phone:new FormControl("Test Value 3")//default value 
        })
    }*/

    //21.3 Using an object of FormBuilder we will make .group(all input field)
        this.RajcustomerForm = this.RajFormBuilder.group({   
            //firstName:{value:"n/a",disabled:true}, 
            firstName:["",[
                Validators.required,  //must required
                Validators.minLength(3), //min length must be 3 char
                Validators.maxLength(5)]],//max length less <= 5 char 
            //default value or validation condition
            
            //One Step Validation uisng requried only 
            lastName:["",Validators.required],//21.4 default value in HTML page 

    //21.10 Grouping Email and Child Email (confirmEmail)
            RajEmailGroup:this.RajFormBuilder.group({
                    //two Step Validation uisng requried & minLength only 
                    Email:["",[
                        Validators.required,
                        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+')]],//https://regexr.com/39tc1
                    EmailConfirm:["",[Validators.required,
                                    /*Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+')*/]
                ],
            },{validator:RajemailMatcher}),
            
            phone:"",//default value none as we are using 21.5 
            notification:"email", //21.5 default value emial or text, 
            //when user radio btn check to Text, prmopt to Phone Field
            //its called run time validation 
            rating:["",rattingRange],//21.6 Running Function to rating for validation
            rating2:["",rattingRange2(20,30)],//21.9 passing min,max value(param) making generic
            sendCatalog:'', //21.2
            addresses: this.RajFormBuilder.array([this.buildAddress()]) //22.1
        });
    
        ///////22.3
        const emailControl = this.RajcustomerForm.get('RajEmailGroup.Email');
        emailControl.valueChanges.debounceTime(800).subscribe(value =>
            this.setMessage(emailControl));

        this.RajcustomerForm.get('sendCatalog').valueChanges //22.2
                            .subscribe(value => this.showAddress= value)

        //21.11 removing click functanality from HTML by adding follwing on fire
        this.RajcustomerForm.get('notification').valueChanges
            .subscribe(value => this.RajSetNotification(value)) //gettign value from 21.5
            //using .subs to pass the value to our function
    }

    ///////22.3
    setMessage(c:AbstractControl):void{ //22.3
        this.emailMessage="";
        if((c.touched||c.dirty) && c.errors){
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessage[key]).join(' ');
        }
    }
   
    buildAddress(): FormGroup{  //22.1
        return this.RajFormBuilder.group({
            addressType:'home',
            street1:'',
            street2:'',
            city:'',
            zip:''
        })
    }
    addAddress(): void{  //22.1
        this.addresses.push(this.buildAddress())
    }

    
    //21.5 RunTime Validation, when Radio btn check text, prompt to Phone Input Field
    RajSetNotification(Rajnotify:string):void{
        const phoneControl = this.RajcustomerForm.get('phone');
        //variable = get value from the form input field phone, 
        if(Rajnotify === "text"){ //if radio btn is text then do this
            phoneControl.setValidators([Validators.required,Validators.maxLength(10)])
            //setting validator to required and maxLength    
        }else{ 
            phoneControl.clearValidators();
            //else radio button is not text then clear the validators 
        } 
        phoneControl.updateValueAndValidity();
        //update value & Validty() to our logic if else(email or text click)    
    }

    //using this click method to auto populate data in the form fileds  
    autoPopulateData():void{
        //.setValue(all field need) vs. .patchValue (singal fild okay)
        this.RajcustomerForm.patchValue({ //.patchValue okay with 1 value
            phone:'908-903-0001',//it can auto fill one value   
            
        /*this.RajcustomerForm.setValue({ //.setValue required all the filed
            firstName:'Rajiv', //when you remove one filed 
            lastName:'Patel', //then this function not work
            phone:'908-903-0001'//try it out   
        */     
        })
    }
            save(){
                console.log(this.RajcustomerForm);
                console.log('Saved: ' + JSON.stringify(this.RajcustomerForm.value));
            }  
}

/*
Angular Six Inbuilt Class, Every Inputbox associated with this six classes 
ng-untouched   //we have to trage with input name #myfirstname
ng-pristine  //pure default value did not changed, as you type it will chagne to ng-dirty
ng-valid    //place required in input box and user will be prompt to type 
ng-touched //input box touch but did not change value 
ng-dirty  //default value changed and its dirty and will not comeback to pristin
ng-invalid

*/