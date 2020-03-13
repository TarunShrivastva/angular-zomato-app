import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { State } from './state-interface/state';

@Injectable({ providedIn: 'root' })

export class StateService {

  private stateUrl = 'assets/data/state.json';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET states from the server */
  getStates (): Observable<State[]> {
    return this.http.get<State[]>(this.stateUrl)
      .pipe(
        tap(_ => this.log('fetched states')),
        catchError(this.handleError<State[]>('getStates', []))
      );
  }

  /** GET state by id. Will 404 if id not found */
  getStateById(id: number): Observable<State> {
    const url = `${this.stateUrl}`;
    return this.http.get<State>(url).pipe(
      tap(_ => this.log(`fetched State id=${id}`)),
      catchError(this.handleError<State>(`getState id=${id}`))
    );
  }

  
  /** GET state by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<State> {
    const url = `${this.stateUrl}/?id=${id}`;
    return this.http.get<State[]>(url)
      .pipe(
        map(states => states[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<State>(`getState id=${id}`))
      );
  }
  
  /** POST: add a new state to the server */
  addState (state: State): Observable<State> {
    return this.http.post<State>(this.stateUrl, state, this.httpOptions).pipe(
      tap((newState: State) => this.log(`added hero w/ id=${newState.id}`)),
      catchError(this.handleError<State>('addHero'))
    );
  }

  /** DELETE: delete the state from the server */
  deleteState (state: State | number): Observable<State> {
    const id = typeof state === 'number' ? state : state.id;
    const url = `${this.stateUrl}/${id}`;

    return this.http.delete<State>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<State>('deleteHero'))
    );
  }

  /** PUT: update the state on the server */
  updateState (state: State): Observable<any> {
    return this.http.put(this.stateUrl, state, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${state.id}`)),
      catchError(this.handleError<any>('updateHero'))
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