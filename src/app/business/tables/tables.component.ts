import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablesComponent {
  users: any = [];

  constructor(private usersService: UsersService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: data => {
        this.users = data;
        this.cdr.detectChanges(); 
      },
      error: err => {
        console.error('Error fetching users:', err);
      }
    });
  }
}
