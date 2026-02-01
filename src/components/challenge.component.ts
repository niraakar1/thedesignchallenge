import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-challenge',
  standalone: true,
  template: `
    <section class="py-32 bg-brand-cream/30 relative overflow-hidden">
      
      <!-- Background Doodles -->
      <div class="absolute top-10 left-10 opacity-5 z-0 animate-wiggle">
         <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="1">
            <path d="M10 10 Q 50 90 90 10" />
            <path d="M10 50 Q 50 130 90 50" />
            <path d="M10 90 Q 50 170 90 90" />
         </svg>
      </div>
      <div class="absolute bottom-10 right-10 opacity-5 z-0 animate-spin-slow">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" class="text-brand-orange">
          <circle cx="50" cy="50" r="40" stroke-dasharray="8 8" />
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>


      <!-- Header -->
      <div class="text-center mb-24 relative z-10 px-4">
        <p class="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs mb-4">The Context</p>
        <div class="inline-block relative">
           <svg class="absolute -top-6 -right-8 w-12 h-12 text-brand-orange opacity-40 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
           <h2 class="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">Why Design Thinking?</h2>
        </div>
        <div class="w-20 h-1.5 bg-brand-lightTeal mx-auto mt-6 rounded-full opacity-60"></div>
        <p class="text-gray-600 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
          The future belongs to problem solvers. Yet, our current education system often prioritizes rote learning over the critical ability to innovate and empathize.
        </p>
        <svg class="absolute right-20 top-0 w-24 h-24 text-brand-dark/5 rotate-12 animate-float" viewBox="0 0 24 24" fill="currentColor">
             <path d="M9.375 3.375c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5c0-.621.504-1.125 1.125-1.125h4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.828.672-1.5 1.5-1.5h3c.828 0 1.5.672 1.5 1.5v3c0 .828-.672 1.5-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM14.625 13.5a1.125 1.125 0 011.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" />
        </svg>
      </div>

      <div class="max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-center relative z-10">
        
        <!-- Left: Donut Chart / Student Voice -->
        <div class="lg:w-5/12 bg-white rounded-[2rem] shadow-2xl shadow-brand-teal/5 p-10 relative border border-gray-100 group hover:border-brand-lightTeal transition-colors duration-500">
          <div class="absolute -left-8 top-1/4 transform -rotate-12 bg-brand-dark text-white px-4 py-2 rounded-lg shadow-lg z-20 animate-wiggle">
            <span class="font-hand text-xl font-bold">The Problem</span>
          </div>

          <h3 class="text-xl font-bold text-brand-dark text-center mb-10">The Innovation Gap</h3>
          
          <div class="flex justify-center mb-10">
            <!-- Simple SVG Donut -->
            <div class="relative w-72 h-72">
              <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">
                <!-- Background Circle -->
                <path class="text-gray-100" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" stroke="currentColor" stroke-width="2.5" />
                <!-- Foreground Circle (34%) -->
                <path class="text-brand-orange drop-shadow-md group-hover:text-brand-teal transition-colors duration-500" 
                  stroke-dasharray="65, 100" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  stroke-linecap="round"
                  fill="none" stroke="currentColor" stroke-width="2.5" />
              </svg>
              <!-- Center Text -->
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-5xl font-extrabold text-brand-dark">65%</span>
                <span class="text-xs text-gray-400 uppercase tracking-wider mt-1 text-center">Jobs of future<br>don't exist yet</span>
              </div>
            </div>
          </div>

          <p class="text-center text-gray-600 leading-relaxed px-4">
            To prepare for an uncertain future, students need <strong class="text-brand-teal">adaptability</strong> and the ability to solve complex problems creatively.
          </p>
        </div>

        <!-- Right: Points -->
        <div class="lg:w-7/12 space-y-12">
          
          <!-- Item 1 -->
          <div class="flex gap-6 group relative">
             <!-- Connector Line -->
             <div class="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-100 -z-10 group-last:hidden"></div>
             
            <div class="flex-shrink-0 w-16 h-16 bg-white border border-orange-100 text-brand-orange rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-orange-50 transition-all duration-300 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-brand-dark mb-2">Beyond Memorization</h4>
              <p class="text-gray-500 text-base leading-relaxed">
                Traditional systems reward the "correct" answer. Design Thinking rewards the "better" question. It shifts the focus from passive learning to active problem solving.
              </p>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="flex gap-6 group relative">
            <div class="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-100 -z-10 group-last:hidden"></div>

            <div class="flex-shrink-0 w-16 h-16 bg-white border border-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-yellow-50 transition-all duration-300 z-10">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-brand-dark mb-2">Human-Centered</h4>
              <p class="text-gray-500 text-base leading-relaxed">
                We teach students to start with empathy. Understanding the needs of their community is the first step in the Design Thinking process, fostering social responsibility.
              </p>
            </div>
          </div>

          <!-- Item 3 -->
           <div class="flex gap-6 group relative">
            <div class="flex-shrink-0 w-16 h-16 bg-white border border-teal-100 text-brand-teal rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-teal-50 transition-all duration-300 z-10">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-brand-dark mb-2">The Solution: Design Thinking</h4>
              <p class="text-gray-500 text-base leading-relaxed">
                By equipping youths with this mindset, we aren't just teaching them a subject; we are giving them a toolkit to navigate and improve the world around them.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChallengeComponent {}