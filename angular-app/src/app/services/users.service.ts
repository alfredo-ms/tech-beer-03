import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) { }

    getUsers(): Observable<Array<User>> {
        return this.httpClient.get('/node-backend/user') as Observable<Array<User>>;
    }
}