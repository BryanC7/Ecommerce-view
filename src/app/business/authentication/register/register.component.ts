import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../../../core/services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent { 
  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  phone: number = 0;
  registerDate: string = new Date().toLocaleDateString('en-CA');
  errorMessage: string = '';

  constructor(private registerService: RegisterService, private router: Router, private cdr: ChangeDetectorRef) {}

  register(): void {
    this.registerService.register(this.name, this.lastName, this.email, this.password, this.phone, this.registerDate).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err: Error) => {
        this.errorMessage = err.message;
        this.autoHideError();
        this.cdr.detectChanges(); 
      }
    })
  }

  autoHideError(): void {
    setTimeout(() => {
      this.errorMessage = '';
    }, 1000);  
  }
}
