import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { GalleryThumbnail } from './gallery-thumbnail.model';
import { Configuration } from '../../configuration';

@Injectable({
  providedIn: 'root'
})
export class GalleryThumbnailService {

  config = new Configuration;
  
  httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('x-auth') , 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET Restaurent by id. Will 404 if id not found */
  getRestaurentById(id: number): Observable<GalleryThumbnail> {
    return this.http.get<GalleryThumbnail>(this.config.apiUrl + '/get_restaurent_by_id?id=' + id, this.httpOptions).pipe(
      tap(_ => this.log(`fetched Restaurent By id=${id}`)),
      catchError(this.handleError<GalleryThumbnail>(`Restaurent id=${id}`))
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

  /** Log a Restaurent message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
