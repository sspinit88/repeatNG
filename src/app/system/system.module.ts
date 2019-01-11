import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {SystemComponent} from './system.component';
import {SystemRoutingModule} from './system-routing.module';
import {HistoryComponent} from './history/history.component';
import {BillComponent} from './bill/bill.component';
import {PlaningComponent} from './planing/planing.component';
import {RecordsComponent} from './records/records.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {AddCategoryComponent} from './records/add-category/add-category.component';
import {AddEventComponent} from './records/add-event/add-event.component';
import {EditCategoryComponent} from './records/edit-category/edit-category.component';
import {CategoriesService} from './shared/services/categories.service';

@NgModule({
  declarations: [
    SystemComponent,
    HistoryComponent,
    BillComponent,
    PlaningComponent,
    RecordsComponent,
    HeaderComponent,
    SidebarComponent,
    AddCategoryComponent,
    AddEventComponent,
    EditCategoryComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SystemRoutingModule
  ],
  exports: [],
  providers: [CategoriesService]
})

export class SystemModule {
}