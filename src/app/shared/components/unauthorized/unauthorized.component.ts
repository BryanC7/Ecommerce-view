import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'unauthorized',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UnauthorizedComponent { }
