import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-brand-orange text-white">
      <!-- CTA Strip -->
      <div class="max-w-6xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row justify-between items-center gap-10">
        <div class="text-center md:text-left">
           <h2 class="font-hand text-5xl md:text-6xl font-bold mb-4">Ready to empower your students?</h2>
           <p class="text-white/90 text-lg font-light">Bring a Design Thinking workshop to your school today.</p>
        </div>
        <button class="bg-white text-brand-orange font-bold px-10 py-5 rounded-full text-xl shadow-xl hover:bg-gray-100 hover:scale-105 transition-all flex-shrink-0">
          Contact Us
        </button>
      </div>

      <!-- Bottom Footer -->
      <div class="bg-brand-dark py-16 text-center md:text-left">
        <div class="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div class="flex flex-col gap-3 text-sm text-gray-400">
             <div class="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors cursor-pointer">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
               <span>designchallenge.superscholar.io</span>
             </div>
             <div class="flex items-start gap-3 justify-center md:justify-start hover:text-white transition-colors cursor-pointer">
               <svg class="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
               <div class="flex flex-col items-center md:items-start gap-1">
                  <span>+977 981-8509607</span>
                  <span>+977 970-5301030</span>
               </div>
             </div>
             <div class="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors cursor-pointer">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
               <span>designchallenge&#64;superscholar.io</span>
             </div>
          </div>

          <!-- Logo in Footer -->
           <a routerLink="/" class="flex items-center gap-3 cursor-pointer group">
             <div class="bg-brand-orange text-white p-2.5 rounded-lg transform rotate-3 shadow-lg group-hover:rotate-12 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
             </div>
             <div class="text-left">
               <h4 class="font-bold text-white leading-none text-lg">Design Challenge</h4>
               <span class="text-[0.65rem] text-gray-400 uppercase tracking-widest">Innovate for Impact</span>
             </div>
           </a>

        </div>
        <div class="text-center mt-12 text-gray-500 text-xs">
           <a routerLink="/mission" class="hover:text-white transition-colors">Our Mission</a> • <a routerLink="/programs" class="hover:text-white transition-colors">Programs</a> • <a routerLink="/assets" class="hover:text-white transition-colors">Assets</a>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}