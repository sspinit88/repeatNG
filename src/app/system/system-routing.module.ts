import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SystemComponent} from './system.component';
import {BillComponent} from './bill/bill.component';
import {HistoryComponent} from './history/history.component';
import {PlaningComponent} from './planing/planing.component';
import {RecordsComponent} from './records/records.component';

const routes: Routes = [
  {
    path: 'system',
    component: SystemComponent,
    children: [
      {
        path: 'bill',
        component: BillComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'planing',
        component: PlaningComponent
      },
      {
        path: 'records',
        component: RecordsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
