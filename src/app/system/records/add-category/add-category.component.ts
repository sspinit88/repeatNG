import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../shared/services/categories.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  form: FormGroup;

  constructor(
      private categoriesService: CategoriesService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(
          null,
          [Validators.required]
      ),
      'capacity': new FormControl(
          '1', [Validators.required, Validators.min(1)]
      )
    });
  }

  addedCategories() {
    console.log(this.form.value);
  }


}


