//18.2 creating data type of our form fields  employee.interface-models.ts
export class EmployeeForOrderForm{
    constructor(
        public myfirstname:string, 
        public mylastname:string,
        public fulltime:boolean,
        public gender:string,
        public codelang:string,
        public phonenum:number, //19.2 
        public email:string, //19.3 
        public password:string, //19.3 
    ){ }
}
////18.3 modal class EmployeeForOrderForm need to be called inside the our main products.module.ts, 
