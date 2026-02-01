import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_IMAGES } from '../constants/app-images';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen bg-gray-50 pt-20">
      
      <!-- Impact Hero -->
      <div class="relative bg-brand-dark text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-20">
            <img [src]="images.impact_hero" alt="Impact Background" class="w-full h-full object-cover">
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        
        <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
            <h1 class="text-5xl md:text-7xl font-extrabold mb-6">Measuring <span class="text-brand-orange">Change</span></h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                We believe in the ripple effect. Every student empowered is a community transformed.
            </p>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="max-w-6xl mx-auto px-6 md:px-12 -mt-16 relative z-20 mb-24">
         <div class="grid md:grid-cols-3 gap-6">
            <!-- Stat 1 -->
            <div class="bg-white p-8 rounded-3xl shadow-xl text-center border-b-4 border-brand-orange">
                <div class="text-6xl font-extrabold text-brand-dark mb-2">50+</div>
                <div class="text-gray-500 font-bold uppercase tracking-widest text-sm">Design Thinking Sessions</div>
            </div>
             <!-- Stat 2 -->
            <div class="bg-white p-8 rounded-3xl shadow-xl text-center border-b-4 border-brand-lightTeal">
                <div class="text-6xl font-extrabold text-brand-dark mb-2">1000+</div>
                <div class="text-gray-500 font-bold uppercase tracking-widest text-sm">Students Reached</div>
            </div>
             <!-- Stat 3 -->
            <div class="bg-white p-8 rounded-3xl shadow-xl text-center border-b-4 border-brand-teal">
                <div class="text-6xl font-extrabold text-brand-dark mb-2">15+</div>
                <div class="text-gray-500 font-bold uppercase tracking-widest text-sm">Partner Institutions</div>
            </div>
         </div>
      </div>

      <!-- Case Study: Shree Sisneri -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 mb-24">
         <div class="flex flex-col lg:flex-row gap-12 items-center bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
            
            <!-- Decorative Blob -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-brand-lightTeal/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <!-- Content -->
            <div class="lg:w-1/2 relative z-10">
                <div class="inline-block bg-brand-teal text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">Case Study</div>
                <h2 class="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Shree Sisneri Secondary School, Nepal</h2>
                
                <div class="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        In a powerful engagement with the students of Shree Sisneri, we witnessed the transformative potential of the Design Thinking methodology in a rural context.
                    </p>
                    <p>
                        Over the course of the program, students moved from passive observation to active problem-solving. They mapped local challenges regarding resource management and sanitation, used the "How Might We" framework to reframe these barriers, and developed low-fidelity prototypes using locally available materials.
                    </p>
                    <div class="border-l-4 border-brand-orange pl-6 italic text-gray-800">
                        "The milestone moment wasn't just the solutions they created, but the shift in their mindset—realizing they had the agency to shape their own school environment."
                    </div>
                </div>
            </div>

            <!-- Image/Visual -->
            <div class="lg:w-1/2 w-full">
                <div class="relative rounded-[2rem] overflow-hidden aspect-video shadow-lg group">
                    <img [src]="images.impact_sisneri" alt="Shree Sisneri Secondary School Impact" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div class="flex gap-4 mt-6 justify-center lg:justify-start">
                     <span class="px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-500">Rural Education</span>
                     <span class="px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-500">Community Design</span>
                     <span class="px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-500">Student Agency</span>
                </div>
            </div>
         </div>
      </div>

      <!-- Featured Session: Video -->
      <div class="max-w-5xl mx-auto px-6 md:px-12 mb-24 text-center">
         <div class="inline-block mb-6 relative">
            <h2 class="text-3xl md:text-4xl font-bold text-brand-dark relative z-10">Featured Session</h2>
            <div class="h-3 w-full bg-brand-orange/20 absolute bottom-1 left-0 -rotate-1 z-0"></div>
         </div>
         <p class="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Witness the energy, collaboration, and rapid prototyping in action during one of our recent Design Challenge workshops.
         </p>
         
         <div class="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-4 border-white ring-1 ring-gray-200">
            <iframe 
                class="absolute inset-0 w-full h-full" 
                src="https://www.youtube.com/embed/M_chjPFzcTI?rel=0&modestbranding=1" 
                title="Design Challenge Session" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
         </div>
      </div>

    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImpactComponent {
  images = APP_IMAGES;
}