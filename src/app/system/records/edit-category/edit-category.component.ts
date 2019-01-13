import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriesModel} from '../../../shared/models/categories.model';
import {CategoriesService} from '../../shared/services/categories.service';
import {MessageModel} from '../../../shared/models/message.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  form: FormGroup;
  currentCategoryId = 1;
  currentCategory: CategoriesModel;
  message: MessageModel;

  @Input()
  categories: CategoriesModel[] = [];

  @Output()
  edc = new EventEmitter();

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(
          null,
          [Validators.required]
      ),
      'capacity': new FormControl(
          this.currentCategory, [Validators.required, Validators.min(1)]
      )
    });

    this.onCategoryChange();

    this.message = new MessageModel('success', '');
  }

  editCategory() {
    const {name, capacity} = this.form.value;

    const editCategory = new CategoriesModel(
        name,
        capacity,
        +this.currentCategoryId // вместо id
    );

    this.categoriesService.editCategory(editCategory).subscribe((response) => {
      this.showMessage('success', 'Категория изменена!');
      this.edc.emit(response);
    });
  }

  onCategoryChange() {
    this.currentCategory = this.categories.find(category => category.id === +this.currentCategoryId);
  }

  showMessage(type: string = 'success', text: string) {
    this.message = new MessageModel(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

}
