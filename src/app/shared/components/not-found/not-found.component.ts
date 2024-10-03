import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent { }
