import { NgModule }      from '@angular/core';
import { NumberFormat }          from './numberformat.pipe';
import { checkValue }          from './checkValue';

@NgModule({
    imports:        [],
    declarations:   [NumberFormat,checkValue],
    exports:        [NumberFormat,checkValue],
})

export class PipeModule {

  static forRoot() {
     return {
         ngModule: PipeModule,
         providers: [],
     };
  }
}
