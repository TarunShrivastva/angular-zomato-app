import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { CategoryType } from './category-type.model';
import { Configuration } from '../configuration';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryTypeService {
  config = new Configuration;

  
  httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('x-auth') , 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient, private route: ActivatedRoute) {
  }

  
  /** GET Categories from the server */
  getRestaurentsByCategoryName(name:string): Observable<CategoryType[]> {
    return this.http.get<CategoryType[]>(this.config.apiUrl + '/get_restaurent_by_category_name?name='+ name, this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched categories')),
        catchError(this.handleError<CategoryType[]>('getCategories', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }  

}
