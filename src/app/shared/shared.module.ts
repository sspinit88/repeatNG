import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
})
export class SharedModule {
}
