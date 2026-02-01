import { Component, ChangeDetectionStrategy } from '@angular/core';
import { APP_IMAGES } from '../constants/app-images';

@Component({
  selector: 'app-facilitator',
  standalone: true,
  template: `
    <section class="bg-brand-teal text-white py-32 relative overflow-hidden">
      <!-- Background Abstract -->
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" class="text-brand-dark"/>
          </svg>
      </div>

      <div class="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        <div class="flex flex-col lg:flex-row gap-20 items-center">
          <!-- Image -->
          <div class="lg:w-5/12">
            <div class="relative group">
              <!-- Animated Backdrop -->
              <div class="absolute inset-0 bg-brand-orange rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700 animate-float"></div>
              <div class="absolute inset-0 bg-brand-lightTeal rounded-3xl transform -rotate-2 scale-95 opacity-50 z-0 animate-float-delayed"></div>
              
              <img [src]="images.facilitator_profile" alt="Facilitator" class="relative z-10 rounded-3xl shadow-xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white/10">
            </div>
          </div>

          <!-- Content -->
          <div class="lg:w-7/12">
            <p class="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-4">Lead Facilitator</p>
            <h2 class="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Expert Guidance & Mentorship</h2>

            <div class="grid md:grid-cols-2 gap-x-8 gap-y-12 mb-12">
              <div class="flex gap-5">
                <div class="text-brand-lightTeal flex-shrink-0">
                   <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-xl mb-1">Unleash Innovation Lab</h4>
                  <p class="text-sm text-teal-100 font-light">2022 Mysore</p>
                </div>
              </div>

               <div class="flex gap-5">
                <div class="text-brand-lightTeal flex-shrink-0">
                   <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-xl mb-1">Design Challenge</h4>
                  <p class="text-sm text-teal-100 font-light">Australia, E-3 Educator Exchange</p>
                </div>
              </div>

              <div class="flex gap-5">
                <div class="text-brand-lightTeal flex-shrink-0">
                   <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-xl mb-1">World Bank IDA</h4>
                  <p class="text-sm text-teal-100 font-light">Youth Champion</p>
                </div>
              </div>

              <div class="flex gap-5">
                <div class="text-brand-lightTeal flex-shrink-0">
                   <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-xl mb-1">50+ Sessions</h4>
                  <p class="text-sm text-teal-100 font-light">on Design Thinking</p>
                </div>
              </div>
            </div>

            <blockquote class="italic text-2xl text-teal-100 border-l-4 border-brand-orange pl-6 py-2 mb-12 font-light">
              "7+ years of experience working in the field of Youth Engagement."
            </blockquote>

            <!-- Logos -->
            <div class="flex flex-wrap gap-4 opacity-70">
              <div class="px-6 py-3 border border-white/20 rounded-full bg-white/5 font-bold text-sm tracking-wide hover:bg-white/10 transition-colors cursor-default">Design Challenge</div>
              <div class="px-6 py-3 border border-white/20 rounded-full bg-white/5 font-bold text-sm tracking-wide hover:bg-white/10 transition-colors cursor-default">Rotary</div>
              <div class="px-6 py-3 border border-white/20 rounded-full bg-white/5 font-bold text-sm tracking-wide hover:bg-white/10 transition-colors cursor-default">World Bank Group</div>
              <div class="px-6 py-3 border border-white/20 rounded-full bg-white/5 font-bold text-sm tracking-wide hover:bg-white/10 transition-colors cursor-default">IEP</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacilitatorComponent {
  images = APP_IMAGES;
}