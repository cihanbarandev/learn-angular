import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private httpClient: HttpClient) { }

  // get resources
  getAll() {
    return this.httpClient.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // create resource
  create(resource) {
    return this.httpClient.post(this.url, resource)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update resource
  update(resource) {
    return this.httpClient.put(this.url + '/' + resource.id, resource)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete resource
  delete(id) {
    return this.httpClient.delete(this.url + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  // handle error
  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadRequestError(error));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    return throwError(new AppError(error));
  }
}
