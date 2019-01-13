import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoriesService} from '../../shared/services/categories.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriesModel} from '../../../shared/models/categories.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  form: FormGroup;

  @Output()
    setNewCapacity = new EventEmitter();

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(
          null,
          [Validators.required]
      ),
      'capacity': new FormControl(
          '1000', [Validators.required, Validators.min(1)]
      )
    });
  }

  addedCategories() {
    const {name, capacity} = this.form.value;

    const newCategory = new CategoriesModel(name, capacity);

    this.categoriesService.addCategory(newCategory)
        .subscribe((response: CategoriesModel) => {
          this.form.reset();
          this.form.patchValue({capacity: 1000});
          this.setNewCapacity.emit(response);
        });
  }
}


