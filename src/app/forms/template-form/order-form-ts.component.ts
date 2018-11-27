//17.1 Creating Form Page on Nav.Bar
import {Component} from '@angular/core';
import { EmployeeForOrderForm } from '../models/employee.inteface-models'; //18.3
import { RajFormPostData } from '../services/form-post-ts.services';//20.00
import { NgForm } from '@angular/forms';//20.1.4b need when we use form

@Component({
    templateUrl:'./order-form-html.component.html'
})

export class Rajform2OrderComponent{
    title="Order form"
    language=["NodeJs","AngularJs", "ReactJs"] //18.1
    RajmodelForm = new EmployeeForOrderForm ("", "Patel", true,"female","NodeJs", 123456789,"test@test.com","" );//18.3
    //19.2 added new number field and default value is #8
    //19.3 added Email using pattern[Regex]
    hasCodelangError=false; //19.4 declar variable to false, Our default value is NodeJS
    
    //18.5 RajfirstToUpper($event)
    RajfirstToUpper(value:string){ //value:string is parameter 
        if(value.length>0) //if vlaue is greter then zero follow next step
        this.RajmodelForm.myfirstname = value.charAt(0).toUpperCase() + value.slice(1);
        //this.newConstructer.inputname = value.method(indexOf.0).toUpperCase + value.slice(noncapital)
        else
        this.RajmodelForm.myfirstname = value
    }

    //19.4 validating if user selected then red flag ask him for new selection 
    validateLang(){
        if(this.RajmodelForm.codelang === "default")
            this.hasCodelangError = true
        else
            this.hasCodelangError = false
    } 

    //20.1.2 made obj of the class using const.
    constructor(private RajFormPostData:RajFormPostData){}
    
    //20.1.4a Post Form When you Submit Form you can see post data on console.log
    RajsubmitForm(form:NgForm){  //creating method when user click on submit form 
        //console.log(form.value); //sending on console to check 
        //valaditing submit form to showing up on console.log 
        if (this.hasCodelangError) //if hasCodeLangErro set to true return nothing 
        
        //if needed to create throw error msg, when submit is click, 
        //declar at this line, var formErr="type correctly", place var in your html

        return;  //below will not execuated if form is not fill correclty. 

        //RajFormPostData.postEmployeeMsg1 coming from (form-post-ts.services.ts file)
        this.RajFormPostData.postEmployeeMsg1(this.RajmodelForm) //20.1.4c
        //class.variable(this.variable) call the services class.passing-tothe-(modal)  

                .subscribe(   //20.1.9, video 2:22:00 Done   
                    data => console.log("success sending to server port 3100",data),
                    error=> console.log("error",error)
                )
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