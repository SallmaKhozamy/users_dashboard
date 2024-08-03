import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://reqres.in/api/users';
  private cache = new Map<number, any>();

  constructor(private http: HttpClient) { }

  // Fetch a single page of users
  getUsers(page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&per_page=${pageSize}`);
  }

  // Fetch user details by ID
  getUser(id: number): Observable<any> {
    if (this.cache.has(id)) {
      return this.cache.get(id);
    }
    const user$ = this.http.get(`${this.apiUrl}/${id}`).pipe(
      map(user => {
        this.cache.set(id, user);
        return user;
      })
    );
    this.cache.set(id, user$);
    return user$;
  }

  // Fetch all users dynamically by first determining the total number of pages
  getAllUsers(): Observable<any[]> {
    return this.getUsers(1, 10).pipe(
      map(response => {
        const totalPages = response.total_pages;
        const pageObservables = [];

        // Create an observable for each page request
        for (let page = 1; page <= totalPages; page++) {
          pageObservables.push(this.getUsers(page, 10));
        }

        // Use forkJoin to combine the observables and aggregate results
        return forkJoin(pageObservables).pipe(
          map((results: any[]) => {
            // Combine results from all pages
            return results.flatMap(result => result.data);
          })
        );
      }),
      switchMap(observable => observable)
    );
  }
}


