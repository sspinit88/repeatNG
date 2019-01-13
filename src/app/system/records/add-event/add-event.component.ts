import {Component, Input, OnInit} from '@angular/core';
import {CategoriesModel} from '../../../shared/models/categories.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  form: FormGroup;

  // todo доделать страницу

  @Input()
  categories: CategoriesModel[] = [];

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'amount': new FormControl(
          '1000', [Validators.required, Validators.min(1)]
      )
    });
  }

  addEvent() {

  }

}
