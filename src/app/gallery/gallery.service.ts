import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Gallery } from './gallery.model';
import { Configuration } from '../configuration';

@Injectable({ providedIn: 'root' })

export class GalleryService {

  config = new Configuration;
  
  httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('x-auth') , 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient) { 

  }

  
  /** GET Categories from the server */
  getCategories(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(this.config.apiUrl + '/get_categories', this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched categories')),
        catchError(this.handleError<Gallery[]>('getCategories', []))
      );
  }

  /** GET Category by id. Will 404 if id not found */
  getCategoryById(id: number): Observable<Gallery> {
    return this.http.get<Gallery>(this.config.apiUrl + '/get_categories_by_id/?id=' + id, this.httpOptions).pipe(
      tap(_ => this.log(`fetched Category By id=${id}`)),
      catchError(this.handleError<Gallery>(`getCategory id=${id}`))
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