import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedStarComponent } from './star.component';



@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        SharedStarComponent,
    ],
    exports : [
        FormsModule,
        CommonModule,
        SharedStarComponent
    ]
})

export class SharedModule {

}