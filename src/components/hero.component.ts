import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_IMAGES } from '../constants/app-images';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative bg-brand-teal text-white overflow-hidden">
      <!-- Background Overlay Image -->
      <div class="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
        <img [src]="images.hero_overlay" alt="Students collaboration" class="w-full h-full object-cover grayscale">
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-brand-teal via-brand-teal/95 to-brand-teal/90 z-0"></div>

      <!-- Animated Doodles -->
      <div class="absolute top-20 left-10 opacity-20 animate-spin-slow z-0 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" class="text-brand-lightTeal">
           <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke-width="2"/>
        </svg>
      </div>
      <div class="absolute bottom-40 right-1/2 opacity-10 animate-float-delayed z-0 pointer-events-none">
         <svg width="80" height="80" viewBox="0 0 100 100" fill="none" class="text-brand-orange">
            <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5"/>
         </svg>
      </div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        <div class="md:w-1/2 space-y-8 relative">
           
          <div class="relative">
            <h1 class="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Mindset. <br>
              Skillset. <br>
              <span class="text-brand-cream relative inline-block mt-2">
                Toolset.
                <svg class="absolute w-full h-4 -bottom-2 left-0 text-brand-orange" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 12 100 5" stroke="currentColor" stroke-width="4" fill="none" class="animate-pulse" />
                </svg>
              </span>
            </h1>
          </div>
          
          <p class="text-lg md:text-xl text-teal-50 max-w-lg leading-relaxed font-light">
            We are on a mission to ensure <strong>early and equitable access</strong> to skills for social impact. Empowering youth to reframe challenges as opportunities for positive change.
          </p>

          <div class="flex flex-col sm:flex-row gap-5 pt-6">
            <button routerLink="/programs" class="bg-brand-orange hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-3 group">
              Explore Programs
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <button routerLink="/mission" class="bg-transparent border-2 border-brand-lightTeal text-brand-lightTeal hover:bg-brand-lightTeal hover:text-brand-dark px-10 py-4 rounded-full font-bold text-lg transition-all">
              Our Mission
            </button>
          </div>
        </div>

        <!-- Right Side Image/Graphic -->
        <div class="md:w-1/2 relative">
          <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform md:rotate-3 border-[6px] border-white/10 hover:rotate-0 transition-transform duration-500">
            <img [src]="images.hero_main" alt="Students using design thinking" class="w-full h-auto aspect-square object-cover">
             <div class="absolute inset-0 bg-brand-teal mix-blend-multiply opacity-20"></div>
          </div>
          <!-- Decorative Elements (Blobs) -->
          <div class="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-orange rounded-full opacity-40 blur-3xl animate-float"></div>
          <div class="absolute -top-12 -left-12 w-48 h-48 bg-brand-lightTeal rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  images = APP_IMAGES;
}