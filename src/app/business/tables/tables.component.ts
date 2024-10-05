import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { UsersService } from '../../core/services/users.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablesComponent {
  users: any = [];
  faPencil = faPencil;
  faTrash = faTrash;

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
  
  update(): void {
    Swal.fire("SweetAlert2 is working!");
  }
}
