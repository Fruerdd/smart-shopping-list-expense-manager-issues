// src/app/features/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,  // ✅ Declared as standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule]  // ✅ Import CommonModule if needed
})
export class HomeComponent {}
