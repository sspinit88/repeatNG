import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CategoriesModel} from '../../../shared/models/categories.model';
import {map} from 'rxjs/operators';

@Injectable()

export class CategoriesService {
  constructor(
      private http: HttpClient
  ) {
  }

  addCategory(category: CategoriesModel): Observable<any> {
    return this.http.post(`http://localhost:3004/categories`, category)
        .pipe(
            map(response => {
              console.log(response);
              return response;
            })
        );
  }

}