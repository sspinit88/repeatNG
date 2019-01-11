import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {SystemComponent} from './system.component';

@NgModule({
  declarations: [SystemComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [],
  providers: []
})

export class SystemModule {
}