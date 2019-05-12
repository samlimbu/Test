import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { TranslateComponent } from './translate.component';

@NgModule({
  declarations: [
    TranslatePipe,
    TranslateComponent
  ],
  imports: [
  ],
  exports: [
    TranslatePipe,
    TranslateComponent
  ]
})
export class TranslateCompModule { }
