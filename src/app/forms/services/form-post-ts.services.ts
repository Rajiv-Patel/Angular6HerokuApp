////20.00 making post call, whole page. Video Time starts 1:27:25
import {Injectable} from '@angular/core'; 
import{Http,Headers,Response,RequestOptions} from '@angular/http'; //we need http in our main app module also 
import { EmployeeForOrderForm} from '../models/employee.inteface-models'; //our data type for form
//import {Observable} from 'rxjs/Observable'; //20.1.5
import { Observable } from 'rxjs/Rx'; //20.1.5
//import {map} from 'rxjs/operators';
import 'rxjs/rx'; //RX will get .map,.catch 


@Injectable()

export class RajFormPostData{  //declar into product mod. 

    constructor(private http:Http){    
    }
            ////20.1.6 our API seed has some Res:Response in the body 
            private extractData(res:Response){
                let body = res.json();
                return body.fields || { }  
                //my API JSON returs fields || iw ill pass {nothing}
            }
            
            ////20.1.7
            private handleError(error:any){
                return Observable.throw(error.statusText)// statusText like 400,501,300 error code        
                //return Observable.throw(error)  
            }

    //20.1.1 my_method(who will receive data)//recevie by employee data from employee
    //postEmployeeMsg2 is for test purpose to see if data is coming in console. 
    postEmployeeMsg2(EmployeeForOrderForm:EmployeeForOrderForm){ //Relate to 20.1.4c
        //just to check if we are receviing data or not? chekc on console than post to my API
        console.log("Msg2:Rajiv Posting Data In Using Service Modual",EmployeeForOrderForm)
        //now basic services is done, lets move to below remove this method. 
    }

    //Msg2 is confirmed that we are receving the data so now make a post call using below. 
    //Below var having issue with Http land not showing anythign in the :3100 port. 
    //Relate to 20.1.4c
    postEmployeeMsg1(EmployeeForOrderForm:EmployeeForOrderForm):Observable<any>{ //20.1.8 Observable<any>
    //console.log("Msg1:Using Post() to Send Data Using Services ",EmployeeForOrderForm)//show usering services 
        
        let body = JSON.stringify(EmployeeForOrderForm); 
        //body has the data = conver to JSON.stringiyf(receving data/datatype of our form)
        
        let headers = new Headers({'Content-Type': 'application/json'});
        //creating new Headers(pass your data type : json or text etc..)//Content-Type is a header in our API
        
        let options = new RequestOptions({headers:headers});//what ever you are passing to API 
        //RequestOptions(we can pass login, password.key or text as needed for our API) 
        //Our seed API is simple no pass etc, so jsut content type and data type JSON. 

        //http call using .post(URL,body(data),Options ) 
        //makeLinkToAccess?id to use direct ID to work with data
        return this.http.post('http://localhost:3100/makeLinkToAccess',body,options) // Access/${id}',body
        //you can use http.delete, http.add more options to paly with API

        .map(this.extractData)  //20.1.6
        .catch(this.handleError)  //20.1.7
        }
}

    /*
    this.http.post(url, body, options).map((res:Response) => res.json()).subscribe(
                     data => { response = data },
                     err => console.error(err),
                     () => { console.log(response) });
    */

    
