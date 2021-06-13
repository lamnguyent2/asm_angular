import { Injectable } from '@angular/core';
import {
    HttpHeaders,
    HttpClient,
    HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Userz } from '../../interface/users';


@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };
    private REST_API_SERVER = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) {}
    public getUser() {
        const url = `${this.REST_API_SERVER}/users`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getUserss(Username:any,Password:any) {
        const url = `${this.REST_API_SERVER}/users?Username=`+Username+`&Password=`+Password;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }
    public getUserpass(Password:any) {
        const url = `${this.REST_API_SERVER}/users?Password=`+Password;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getUsersss(Username:any) {
        const url = `${this.REST_API_SERVER}/users?Username=`+Username;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getUsers1(id:any) {
        const url = `${this.REST_API_SERVER}/users/`+id;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getUsersssz(id:any) {
        const url = `${this.REST_API_SERVER}/users?id=`+id;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public putUserss(Username:any) {
        const url = `${this.REST_API_SERVER}/users`;
        return this.httpClient
            .post<any>(url,Username, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getWest() {
        const url = `${this.REST_API_SERVER}/users?TeamName=West`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getSouth() {
        const url = `${this.REST_API_SERVER}/users?TeamName=South`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getEast() {
        const url = `${this.REST_API_SERVER}/users?TeamName=East`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public getNorth() {
        const url = `${this.REST_API_SERVER}/users?TeamName=North`;
        return this.httpClient
            .get<any>(url, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public addUser(data:any) {
        const url = `${this.REST_API_SERVER}/users`;
        return this.httpClient
            .post<any>(url, data, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public deleteUsers(id: number) {
        const url = `${this.REST_API_SERVER}/users/` + id;
        return this.httpClient.delete<any>(url).pipe(catchError(this.handleError));
    }

    public modifyUser(userId: number, data: Userz) {
        const url = `${this.REST_API_SERVER}/users/` + userId;
        return this.httpClient
            .put<any>(url, data, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    public deleteUser(userID: number) {
        const url = `${this.REST_API_SERVER}/users/` + userID;
        return this.httpClient.delete<any>(url).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` + `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
}
