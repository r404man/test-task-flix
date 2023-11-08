import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, of } from 'rxjs';
import { UserRole } from '../models/UserRole';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userRole: ReplaySubject<UserRole> = new ReplaySubject<UserRole>();

  constructor() {}

  setUserRole(role: UserRole): void {
    this.userRole.next(role);
  }

  getUserRole(): Observable<UserRole> {
    this.setUserRole('USER');

    return this.userRole.asObservable();
  }
}
