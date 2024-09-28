import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export default class TablesComponent { }
