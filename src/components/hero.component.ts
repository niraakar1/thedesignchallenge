import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="relative bg-brand-dark text-white overflow-hidden min-h-[85vh] flex items-center justify-center">
      
      <!-- Shuffling Background Images -->
      <div class="absolute inset-0 z-0">
        @for (img of heroImages; track img; let i = $index) {
            <div 
                class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                [class.opacity-100]="currentImageIndex() === i"
                [class.opacity-0]="currentImageIndex() !== i"
            >
                <img [src]="img" class="w-full h-full object-cover" alt="Hero Background">
            </div>
        }
        <!-- Overlays for Readability -->
        <div class="absolute inset-0 bg-brand-teal/80 mix-blend-multiply z-10"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/60 z-10"></div>
      </div>

      <!-- Animated Doodles (Subtle) -->
      <div class="absolute top-20 left-10 opacity-20 animate-spin-slow z-20 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" class="text-brand-lightTeal">
           <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke-width="2"/>
        </svg>
      </div>
      <div class="absolute bottom-40 right-20 opacity-10 animate-float-delayed z-20 pointer-events-none">
         <svg width="80" height="80" viewBox="0 0 100 100" fill="none" class="text-brand-orange">
            <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5"/>
         </svg>
      </div>

      <!-- Centered Content -->
      <div class="max-w-6xl mx-auto px-6 md:px-12 relative z-30 w-full text-center">
        
        <div class="max-w-4xl mx-auto space-y-10">
           
          <div class="relative inline-block">
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-4 drop-shadow-2xl">
              Mindset. Skillset. <br>
              <span class="text-brand-cream relative inline-block mt-2">
                Toolset.
                <svg class="absolute w-full h-4 -bottom-4 left-0 text-brand-orange" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 12 100 5" stroke="currentColor" stroke-width="4" fill="none" class="animate-pulse" />
                </svg>
              </span>
            </h1>
          </div>
          
          <p class="text-xl md:text-2xl text-teal-50 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            We are on a mission to ensure <strong>early and equitable access</strong> to skills for social impact. Empowering youth to reframe challenges as opportunities for positive change.
          </p>

          <div class="flex flex-col sm:flex-row gap-6 pt-8 justify-center items-center">
            <button routerLink="/programs" class="bg-brand-orange hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-3 group transform hover:-translate-y-1">
              Explore Programs
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <button routerLink="/mission" class="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-brand-dark px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-white/20">
              Our Mission
            </button>
          </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnDestroy {
  currentImageIndex = signal(0);
  private intervalId: any;

  heroImages = [
    'https://picsum.photos/id/201/1920/1080', // Coding/Laptop
    'https://picsum.photos/id/119/1920/1080', // Workstation
    'https://picsum.photos/id/3/1920/1080',   // Tech
    'https://picsum.photos/id/180/1920/1080', // Meeting
    'https://picsum.photos/id/60/1920/1080'   // Office
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex.update(i => (i + 1) % this.heroImages.length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}