import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-brand-teal text-white pt-32 pb-32 relative overflow-hidden">
        <!-- Abstract Doodles -->
        <div class="absolute top-20 right-20 w-32 h-32 opacity-10 animate-spin-slow pointer-events-none">
             <svg viewBox="0 0 100 100" fill="none" stroke="currentColor"><path d="M50 0 L100 50 L50 100 L0 50 Z" stroke-width="2"/></svg>
        </div>
        
        <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
            <div class="inline-block mb-6 relative">
              <p class="text-brand-orange font-bold uppercase tracking-[0.2em] relative z-10">Our Purpose</p>
              <svg class="absolute -bottom-2 -left-4 w-[120%] h-3 text-brand-orange/30 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="8" fill="none" /></svg>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-extrabold mb-10 tracking-tight leading-tight">
              Mission & <span class="font-hand text-brand-lightTeal">Vision</span>
            </h1>

            <div class="max-w-4xl mx-auto mb-20">
              <p class="text-xl md:text-2xl leading-relaxed font-light text-teal-50">
                  To ensure <span class="text-white font-semibold">early and equitable access</span> to skills for social impact, empowering every young person to solve real-world problems.
              </p>
            </div>

            <!-- Mindset, Skillset, Toolset Highlight -->
            <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <!-- Mindset -->
              <div class="bg-brand-dark/30 backdrop-blur-md p-8 rounded-3xl border border-brand-lightTeal/20 hover:bg-brand-dark/50 transition-colors group">
                <div class="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">The Mindset</h3>
                <p class="text-teal-200 text-sm">Reframing challenges as opportunities. Developing resilience, empathy, and creative confidence.</p>
              </div>

              <!-- Skillset -->
              <div class="bg-brand-dark/30 backdrop-blur-md p-8 rounded-3xl border border-brand-lightTeal/20 hover:bg-brand-dark/50 transition-colors group">
                <div class="w-16 h-16 bg-brand-lightTeal rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                   <svg class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">The Skillset</h3>
                <p class="text-teal-200 text-sm">Critical thinking, rapid prototyping, user research, and collaborative problem solving.</p>
              </div>

              <!-- Toolset -->
              <div class="bg-brand-dark/30 backdrop-blur-md p-8 rounded-3xl border border-brand-lightTeal/20 hover:bg-brand-dark/50 transition-colors group">
                <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">The Toolset</h3>
                <p class="text-teal-200 text-sm">Design Thinking frameworks, empathy maps, and digital tools for innovation.</p>
              </div>
            </div>

        </div>
    </section>

    <section class="py-24 bg-white relative">
        <!-- Background Grid -->
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#1B4F55 1px, transparent 1px); background-size: 30px 30px;"></div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div class="text-center mb-20">
                <h2 class="text-4xl md:text-5xl font-bold text-brand-dark mb-4">8 Guiding Principles</h2>
                <p class="text-gray-500 max-w-2xl mx-auto">Anchored by a commitment to fostering student agency and social responsibility.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <!-- Principle 1: Human-Centered -->
                <div class="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-brand-teal group">
                    <div class="w-16 h-16 bg-teal-50 text-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-teal">Human-Centered</h3>
                    <p class="text-sm text-gray-500 leading-relaxed">We use the iterative process—Empathise, Define, Ideate, Prototype, Test—to create validated solutions.</p>
                </div>

                <!-- Principle 2: Equity -->
                <div class="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-brand-orange group">
                    <div class="w-16 h-16 bg-orange-50 text-brand-orange rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-orange">Equity & Inclusivity</h3>
                    <p class="text-sm text-gray-500 leading-relaxed">Learning must be accessible to all regardless of postcode or background. Diverse perspectives solve complex problems.</p>
                </div>

                <!-- Principle 3: Student Agency -->
                <div class="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-brand-lightTeal group">
                    <div class="w-16 h-16 bg-teal-50 text-brand-lightTeal rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-lightTeal group-hover:text-white transition-colors duration-300">
                       <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-lightTeal">Student Agency</h3>
                    <p class="text-sm text-gray-500 leading-relaxed">Providing 'voice and choice'. When youth own their learning journey, engagement and impact skyrocket.</p>
                </div>

                <!-- Principle 4: Experiential -->
                <div class="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-yellow-400 group">
                    <div class="w-16 h-16 bg-yellow-50 text-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-300">
                         <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark mb-2 group-hover:text-yellow-500">Learn by Doing</h3>
                    <p class="text-sm text-gray-500 leading-relaxed">Shifting from theory to practice. Applying skills hands-on to address real-world situations.</p>
                </div>

                <!-- Principle 5: Resilience -->
                <div class="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-red-400 group">
                    <div class="w-16 h-16 bg-red-50 text-red-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-400 group-hover:text-white transition-colors duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark mb-2 group-hover:text-red-400">Resilience</h3>
                    <p class="text-sm text-gray-500 leading-relaxed">We view failure as "Flearning" (Failing = Learning). A safe environment to pivot and persevere.</p>
                </div>

                <!-- Principle 6: Collaboration -->
                <div class="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-purple-400 group">
                    <div class="w-16 h-16 bg-purple-50 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-400 group-hover:text-white transition-colors duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark mb-2 group-hover:text-purple-400">Collaboration</h3>
                    <p class="text-sm text-gray-500 leading-relaxed">Leveraging collective intelligence. Identifying unique strengths in diverse teams to achieve a shared goal.</p>
                </div>

                 <!-- Principle 7: Global -->
                <div class="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-blue-400 group">
                    <div class="w-16 h-16 bg-blue-50 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-400 group-hover:text-white transition-colors duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark mb-2 group-hover:text-blue-400">Community & Global</h3>
                    <p class="text-sm text-gray-500 leading-relaxed">Connecting local action to global frameworks like the UN SDGs. Solving community issues with a global mindset.</p>
                </div>

                 <!-- Principle 8: Growth Mindset -->
                <div class="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-green-400 group">
                    <div class="w-16 h-16 bg-green-50 text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-400 group-hover:text-white transition-colors duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark mb-2 group-hover:text-green-400">Growth Mindset</h3>
                    <p class="text-sm text-gray-500 leading-relaxed">Believing abilities can be developed. Empowering youth to see opportunities where others see only risk.</p>
                </div>

            </div>
        </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionComponent {}