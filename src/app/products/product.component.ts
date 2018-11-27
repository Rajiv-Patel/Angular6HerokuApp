import { Component,OnInit } from '@angular/core';
import { RajInterfaceIproduct} from './product_model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',

    //1Inline CSS not recomended
    //styles:['thead{color:purple}','h3{color:olive}']

    //2using product.component.css file to import CSS
    styleUrls: ['./product.component.css']

    //3Inline CSS is writing direclty into HTML Page Not recomm..
    //4th kind of css using dynamic declar imagWidht variable 
    //5th way is Conditional CSS using  [ngStyle]="{'background-color':prod.price<20 ? 'green':'orange'}"

})

export class ProductComponent implements OnInit {
    title: String = '~~~~Product List~~~~ products: any[ ]';
    showImage: Boolean = false;
    filterText: String ='leaf';
    imageWidth: Number = 80; //4th way using css variablye  [style.width.px="imageWidth"]
    
    products: any[] = [
            {
                '_id': '5a05dacc734d1d68d42d31f3',
                'productId': 1,
                'productName': 'Leaf Rake',
                'productCode': 'GDN-0011',
                'releaseDate': 'March 19, 2016',
                'description': 'Leaf rake with 48-inch wooden handle.',
                'price': 19.95,
                'starRating': 3.5,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
            },
            {
                '_id': '5a05daec734d1d68d42d32ca',
                'productId': 2,
                'productName': 'Garden Cart',
                'productCode': 'GDN-0023',
                'releaseDate': 'March 18, 2016',
                'description': '15 gallon capacity rolling garden cart',
                'price': 32.99,
                'starRating': 4.2,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
            }
    ];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
/////////////Start Using Interface Model Schema/////////
    title2: String = '~~~~Product List Using Interface Model ~~~~ products2: RajInterfaceIproduct[ ]';
    showImage2: Boolean = true;
    filterText2: String ='leaf';
    products2: RajInterfaceIproduct[] = [
        {
            '_id': '5a05dacc734d1d68d42d31f3',
            'productId': 1,
            'productName': 'Leaf Rake',
            'productCode': 'GDN-0011',
            'releaseDate': 'March 19, 2016',
            'description': 'Leaf rake with 48-inch wooden handle.',
            'price': 19.95,
            'starRating': 3.5,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
            '_id': '5a05daec734d1d68d42d32ca',
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        },
        {
            '_id': '5a05daec734d1d68d42d32ca',
            "productId": 10,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 1.95,
            "starRating": 1.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            '_id': '5a05daec734d1d68d42d32ca',
            "productId": 20,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 2.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },    
        {
        '_id': '5a05daec734d1d68d42d32ca',
        "productId": 50,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 3.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        '_id': '5a05daec734d1d68d42d32ca',
        "productId": 80,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 2.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        '_id': '5a05daec734d1d68d42d32ca',
        "productId": 100,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 3.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }    
];
    toggleImage2(): void {        
        this.showImage2 = !this.showImage2;
    }    
    onDataRecive(message: String): void {
        this.title2 = '~~~~Product List ~~~~~~ ' + message;
    }
/////////////End Using Interface Model Schema/////////

    title3: String = '~~~~Product List Using Database API ~~~~ products3: API';
    RajfilterText3: String ='23';
    showImage3: Boolean = true;
    products3:RajInterfaceIproduct[];

    constructor(private _productSerivce: ProductService) {}

    ngOnInit(): void {
        this._productSerivce.getProduct()
             .subscribe((data) => this.products3 = data);
     }
     toggleImage3(): void {        
        this.showImage3 = !this.showImage3;
    }
    onDataRecive3(message: String): void {
        this.title3 = '~~~~Product List ~~~~~~ ' + message;
    }

//////////////////////////////////////////   

}




/*
//Type of CSS
1.Writign CSS in TS file
2.Seprate StyleSheet Docuemnt Inport
3.Inline CSS in HTML Docuemnt
4.Dynamic CSS (controlling From TS File)
5.Conditional CSS

One Way Binding
 -- Data Binding {{}}
 -- Property Binding []
 -- Event Binding ()
Two Way Binding [()]
String  ''
Number  1
Boolean true/false
var
let
const
for(i=0;i<10;i++){
    console.log(i)
}
*ngFor
*ngIf
[1,2,3,4]
["A","C"]
[1,2,"ds",true,23,"dv"]
*/

