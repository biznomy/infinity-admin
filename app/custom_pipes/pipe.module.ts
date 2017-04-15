import { NgModule }      from '@angular/core';
import { NumberFormat }          from './numberformat.pipe';

@NgModule({
    imports:        [],
    declarations:   [NumberFormat],
    exports:        [NumberFormat],
})

export class PipeModule {

  static forRoot() {
     return {
         ngModule: PipeModule,
         providers: [],
     };
  }
}
