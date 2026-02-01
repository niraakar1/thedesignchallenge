import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-brand-teal text-white py-6 sticky top-0 z-50 shadow-md transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-3 cursor-pointer group">
          <div class="bg-brand-orange text-white p-2 rounded-lg transform rotate-3 shadow-lg group-hover:rotate-12 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div>
            <h1 class="text-xl font-bold leading-tight tracking-tight">Design Challenge</h1>
            <p class="text-[0.65rem] opacity-80 uppercase tracking-widest leading-none font-medium">Innovate for Impact</p>
          </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
          <a routerLink="/" routerLinkActive="text-brand-orange" [routerLinkActiveOptions]="{exact: true}" class="hover:text-brand-orange transition-colors duration-300">Home</a>
          <a routerLink="/mission" routerLinkActive="text-brand-orange" class="hover:text-brand-orange transition-colors duration-300">Our Mission</a>
          <a routerLink="/programs" routerLinkActive="text-brand-orange" class="hover:text-brand-orange transition-colors duration-300">Programs</a>
          <a routerLink="/impact" routerLinkActive="text-brand-orange" class="hover:text-brand-orange transition-colors duration-300">Impact</a>
          <a routerLink="/blog" routerLinkActive="text-brand-orange" class="hover:text-brand-orange transition-colors duration-300">Blog</a>
        </nav>

        <!-- Mobile Menu Button -->
        <button (click)="toggleMenu()" class="md:hidden text-white focus:outline-none p-2">
          @if (!isMenuOpen()) {
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          } @else {
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          }
        </button>
      </div>

      <!-- Mobile Dropdown -->
      @if (isMenuOpen()) {
        <div class="md:hidden bg-brand-dark px-6 py-8 space-y-6 shadow-inner border-t border-white/10">
          <a routerLink="/" (click)="toggleMenu()" class="block text-white hover:text-brand-orange text-lg">Home</a>
          <a routerLink="/mission" (click)="toggleMenu()" class="block text-white hover:text-brand-orange text-lg">Our Mission</a>
          <a routerLink="/programs" (click)="toggleMenu()" class="block text-white hover:text-brand-orange text-lg">Programs</a>
          <a routerLink="/impact" (click)="toggleMenu()" class="block text-white hover:text-brand-orange text-lg">Impact</a>
          <a routerLink="/blog" (click)="toggleMenu()" class="block text-white hover:text-brand-orange text-lg">Blog</a>
        </div>
      }
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}