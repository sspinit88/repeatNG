import {Component, OnInit} from '@angular/core';
import {CategoriesModel} from '../../shared/models/categories.model';
import {CategoriesService} from '../shared/services/categories.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  categories: CategoriesModel[] = [];
  isLoaded = false;

  constructor(
      private categoriesService: CategoriesService
  ) {
  }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(response => {
      this.categories = response;
      this.isLoaded = true;
    });
  }

  newCategoryAdded(category: CategoriesModel) {
    this.categories.push(category);
  }

  categoriesEdited(category) {
   console.log(category);
   const idx = this.categories.findIndex(c => c.id === category.id);
   this.categories[idx] = category;
  }

}
