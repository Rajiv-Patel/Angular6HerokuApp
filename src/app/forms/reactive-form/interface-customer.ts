export class Customer {  //21
    constructor(public firstName = '',
        public lastName = '',
        public email = '',
        public sendCatalog = false,
        public addressType = 'home') { }
}