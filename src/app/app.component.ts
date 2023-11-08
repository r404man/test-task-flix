import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserRole } from './models/UserRole';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userRole!: Observable<UserRole>;
  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private userSerivce: UserService) {}

  checkRole(): void {
    this.userRole.subscribe((role) => {
      if (role === 'ADMIN') {
        this.isAdmin.next(true);
      }
      this.isAdmin.next(false);
    });
  }

  ngOnInit(): void {
    this.userSerivce.getUserRole();
    this.userRole = this.userSerivce.userRole;

    this.checkRole();
  }
}
