import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { SpinnerModule } from './spinner/spinner.module';
// import { DatePickerModule } from './date-picker/date-picker.module';
// import { TableSectionModule } from './table-section/table-section.module';

// import { TranslateModule } from '@ngx-translate/core';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
       // MDBBootstrapModule.forRoot()
    ],
    exports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        // DatePickerModule,
        // SpinnerModule,
        // TableSectionModule,
     //   TranslateModule,
      //  MDBBootstrapModule
        
    ],
    providers: [
    ]
})
export class SharedModule { }
