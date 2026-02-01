import { Component, ChangeDetectionStrategy } from '@angular/core';
import { APP_IMAGES } from '../constants/app-images';

@Component({
  selector: 'app-outcomes',
  standalone: true,
  template: `
    <section class="py-32 bg-gray-50 overflow-hidden relative">
      <!-- Background Grid Doodle -->
      <div class="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style="background-image: radial-gradient(#113034 1px, transparent 1px); background-size: 40px 40px;"></div>
      
      <!-- Random Background Shapes -->
      <div class="absolute top-40 left-10 text-brand-lightTeal opacity-10 animate-spin-slow">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>

      <!-- Inclusions Banner -->
      <div class="max-w-6xl mx-auto px-6 md:px-12 mb-24 relative z-10">
        <div class="bg-white border border-gray-200 rounded-[2rem] p-10 md:p-12 relative shadow-lg shadow-gray-200/50">
          <h3 class="text-2xl font-bold text-brand-dark mb-8 text-center md:text-left">Inclusivity at the Core:</h3>
          <div class="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
            <div class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                 <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
              </div>
              <span class="font-bold text-gray-700 text-lg">Equitable Access</span>
            </div>
            <div class="flex items-center gap-4 group">
               <div class="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
               </div>
              <span class="font-bold text-gray-700 text-lg">Strengths-Based</span>
            </div>
            <div class="flex items-center gap-4 group">
               <div class="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
               </div>
              <span class="font-bold text-gray-700 text-lg">Safe Learning Space</span>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <h2 class="text-4xl md:text-5xl font-extrabold text-brand-dark mb-16 relative inline-block tracking-tight">
          Creating <span class="text-brand-orange">Change Makers</span>
          <svg class="absolute -top-6 -left-10 w-20 h-20 text-brand-lightTeal opacity-40 animate-pulse-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
        </h2>

        <div class="flex flex-col lg:flex-row gap-20 items-start">
          
          <!-- List -->
          <div class="lg:w-1/2 space-y-12">
            
            <div class="flex gap-6 group">
              <div class="flex-shrink-0 w-16 h-16 bg-white border border-brand-orange/30 rounded-2xl flex items-center justify-center text-brand-orange shadow-md group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-brand-dark mb-3">Student Agency</h3>
                <p class="text-gray-500 leading-relaxed">We give students "voice and choice". When youth own their learning journey, they become active drivers of their own success.</p>
              </div>
            </div>

            <div class="flex gap-6 group">
              <div class="flex-shrink-0 w-16 h-16 bg-white border border-brand-lightTeal/30 rounded-2xl flex items-center justify-center text-brand-lightTeal shadow-md group-hover:bg-brand-lightTeal group-hover:text-white transition-colors duration-300">
                 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-brand-dark mb-3">Resilience through "Flearning"</h3>
                <p class="text-gray-500 leading-relaxed">We reframe failure as learning ("Flearning"). This builds the resilience needed to pivot and persevere in a changing world.</p>
              </div>
            </div>

             <div class="flex gap-6 group">
              <div class="flex-shrink-0 w-16 h-16 bg-white border border-brand-dark/30 rounded-2xl flex items-center justify-center text-brand-dark shadow-md group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
                 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-brand-dark mb-3">Global Connection</h3>
                <p class="text-gray-500 leading-relaxed">Students connect local community issues to the UN Sustainable Development Goals, fostering a sense of global citizenship.</p>
              </div>
            </div>

          </div>

          <!-- Image -->
          <div class="lg:w-1/2 relative mt-8 lg:mt-0">
            <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white z-10">
              <img [src]="images.outcomes_main" alt="Audience of students" class="w-full h-auto object-cover">
            </div>
            
            <!-- Quote Box -->
            <div class="absolute -bottom-10 -left-10 bg-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl border-t-4 border-brand-orange max-w-sm hidden md:block z-20">
              <p class="font-hand text-2xl text-brand-dark font-bold leading-tight">"Seeing problems as opportunities is a superpower."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutcomesComponent {
  images = APP_IMAGES;
}