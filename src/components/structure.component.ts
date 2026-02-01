import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structure',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-brand-teal relative overflow-hidden">
      
      <!-- Teaser Content (Main View) -->
      <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
         <h3 class="font-hand text-brand-lightTeal text-3xl mb-2">A Non-Linear Process</h3>
         <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">The Design Thinking Cycle</h2>
         <p class="text-teal-100 max-w-2xl mx-auto text-lg font-light mb-12">
            Explore how innovation works in a continuous loop of learning, testing, and refining.
         </p>
         
         <button (click)="openModal()" class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-brand-teal transition-all duration-200 bg-white text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal hover:bg-brand-cream hover:scale-105 shadow-xl">
            <span>Explore the Interactive Cycle</span>
            <svg class="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
             <div class="absolute inset-0 rounded-full ring-4 ring-white/20 group-hover:ring-white/40 animate-pulse"></div>
         </button>
      </div>

      <!-- Modal Overlay -->
      @if (isModalOpen()) {
        <div class="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
            <!-- Backdrop -->
            <div class="fixed inset-0 bg-brand-dark/90 backdrop-blur-md transition-opacity" (click)="closeModal()"></div>

            <!-- Modal Panel -->
            <div class="flex min-h-screen items-center justify-center p-4 text-center sm:p-6">
                
                <div class="relative transform overflow-hidden rounded-[2.5rem] bg-white text-left shadow-2xl transition-all w-full max-w-[95rem] mx-auto flex flex-col max-h-[90vh]">
                    
                    <!-- Close Button -->
                    <button (click)="closeModal()" class="absolute top-6 right-6 z-50 p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors shadow-sm">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>

                    <!-- Scrollable Content -->
                    <div class="p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col items-center bg-white h-full">
                        
                         <!-- Header -->
                        <div class="text-center mb-12 max-w-3xl z-10 relative flex-shrink-0">
                            <h3 class="font-hand text-brand-lightTeal text-3xl mb-2">A Non-Linear Process</h3>
                            <h2 class="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">The Design Thinking Cycle</h2>
                            <p class="text-gray-500 mt-5 text-lg font-light">
                              Innovation is a continuous loop of learning, testing, and refining.
                            </p>
                            <div class="w-24 h-1.5 bg-brand-lightTeal/30 mx-auto mt-8 rounded-full"></div>
                        </div>

                        <!-- Mobile Flowchart View -->
                        <div class="md:hidden w-full max-w-sm relative py-8 flex-shrink-0">
                             <!-- Central Line -->
                             <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2 z-0"></div>

                             <!-- Step 1 -->
                             <div class="relative z-10 mb-20 group">
                                 <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center w-full relative z-20 transition-transform group-hover:scale-105 group-hover:shadow-2xl">
                                    <div class="text-brand-teal mb-4 group-hover:scale-110 transition-transform">
                                        <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                                    </div>
                                    <h4 class="font-bold text-brand-dark text-2xl">Empathise</h4>
                                    <p class="text-sm text-gray-500">Learn about users</p>
                                 </div>
                                 <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 text-brand-teal/50">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7"/></svg>
                                 </div>
                             </div>

                             <!-- Step 2 -->
                             <div class="relative z-10 mb-20 group">
                                 <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center w-full relative z-20 transition-transform group-hover:scale-105 group-hover:shadow-2xl">
                                    <div class="text-brand-orange mb-4 group-hover:scale-110 transition-transform">
                                         <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <h4 class="font-bold text-brand-dark text-2xl">Define</h4>
                                    <p class="text-sm text-gray-500">Identify problem</p>
                                 </div>
                                  <!-- Loop Left -->
                                 <div class="absolute top-1/2 -left-4 -translate-y-1/2 -translate-x-full w-32 text-[11px] text-right text-brand-lightTeal font-bold leading-tight pr-3">
                                    <span class="bg-teal-50 px-2 py-1 rounded-lg border border-teal-100 block shadow-sm">Empathy helps<br>define problem</span>
                                 </div>
                                 <svg class="absolute top-0 -left-6 h-full w-12 text-brand-lightTeal fill-none stroke-current" viewBox="0 0 20 100" preserveAspectRatio="none">
                                     <path d="M 20 80 Q 0 50 20 20" vector-effect="non-scaling-stroke" stroke-width="2" stroke-dasharray="4 4"/>
                                     <path d="M 20 20 l -4 4" vector-effect="non-scaling-stroke" stroke-width="2"/>
                                     <path d="M 20 20 l 2 5" vector-effect="non-scaling-stroke" stroke-width="2"/>
                                 </svg>
                                 <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 text-brand-teal/50">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7"/></svg>
                                 </div>
                             </div>

                             <!-- Step 3 -->
                             <div class="relative z-10 mb-20 group">
                                 <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center w-full relative z-20 transition-transform group-hover:scale-105 group-hover:shadow-2xl">
                                    <div class="text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
                                         <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                    </div>
                                    <h4 class="font-bold text-brand-dark text-2xl">Ideate</h4>
                                    <p class="text-sm text-gray-500">Brainstorm solutions</p>
                                 </div>
                                 <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 text-brand-teal/50">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7"/></svg>
                                 </div>
                             </div>

                             <!-- Step 4 -->
                             <div class="relative z-10 mb-20 group">
                                 <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center w-full relative z-20 transition-transform group-hover:scale-105 group-hover:shadow-2xl">
                                    <div class="text-brand-lightTeal mb-4 group-hover:scale-110 transition-transform">
                                         <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                                    </div>
                                    <h4 class="font-bold text-brand-dark text-2xl">Prototype</h4>
                                    <p class="text-sm text-gray-500">Build to think</p>
                                 </div>
                                 <!-- Loop Right -->
                                 <div class="absolute top-1/2 -right-4 -translate-y-1/2 translate-x-full w-32 text-[11px] text-left text-brand-lightTeal font-bold leading-tight pl-3">
                                    <span class="bg-teal-50 px-2 py-1 rounded-lg border border-teal-100 block shadow-sm">Prototype sparks<br>a new idea</span>
                                 </div>
                                 <svg class="absolute top-0 -right-6 h-full w-12 text-brand-lightTeal fill-none stroke-current transform scale-x-[-1]" viewBox="0 0 20 100" preserveAspectRatio="none">
                                     <path d="M 20 80 Q 0 50 20 20" vector-effect="non-scaling-stroke" stroke-width="2" stroke-dasharray="4 4"/>
                                     <path d="M 20 20 l -4 4" vector-effect="non-scaling-stroke" stroke-width="2"/>
                                 </svg>
                                 <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 text-brand-teal/50">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7"/></svg>
                                 </div>
                             </div>

                             <!-- Step 5 -->
                             <div class="relative z-10 group">
                                 <div class="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center w-full relative z-20 transition-transform group-hover:scale-105 group-hover:shadow-2xl">
                                    <div class="text-green-500 mb-4 group-hover:scale-110 transition-transform">
                                         <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
                                    </div>
                                    <h4 class="font-bold text-brand-dark text-2xl">Test</h4>
                                    <p class="text-sm text-gray-500">Refine with users</p>
                                 </div>
                                  <!-- Big Loop Back Label -->
                                 <div class="absolute top-1/2 -right-10 -translate-y-1/2 translate-x-full w-36 text-[11px] text-left text-brand-orange font-bold leading-tight pl-3">
                                    <span class="bg-orange-50 px-2 py-1 rounded-lg border border-orange-100 block shadow-sm">Tests reveal insights<br>that redefine problem</span>
                                 </div>
                                 <div class="absolute right-0 top-1/2 translate-x-10 w-10 border-r-2 border-dashed border-brand-orange h-[calc(300%_+_15rem)] rounded-r-[3rem] transform -translate-y-full origin-bottom"></div>
                                  <div class="absolute right-0 -top-[calc(300%_+_9rem)] translate-x-[3rem] text-brand-orange transform rotate-180">
                                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7"/></svg>
                                 </div>
                             </div>
                        </div>

                        <!-- Desktop Unified SVG Diagram (Interactive) -->
                        <div class="hidden md:block w-full flex-grow">
                            <svg viewBox="0 0 1000 850" class="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                    <!-- Markers -->
                                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                      <path d="M0,0 L0,6 L9,3 z" fill="#1B4F55" />
                                    </marker>
                                    
                                    <marker id="arrow-dashed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                      <path d="M0,0 L0,6 L9,3 z" fill="#FF6B35" />
                                    </marker>
                                    
                                    <marker id="arrow-dashed-teal" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                      <path d="M0,0 L0,6 L9,3 z" fill="#5CD8C5" />
                                    </marker>

                                    <filter id="icon-shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#1B4F55" flood-opacity="0.15"/>
                                    </filter>
                                </defs>

                                <!-- 1. Bottom Arcs (Layer Bottom) -->
                                <path d="M 900 420 A 300 300 0 0 1 300 420" fill="none" stroke="#FF6B35" stroke-width="2" stroke-dasharray="8 8" marker-end="url(#arrow-dashed)" class="animate-pulse cursor-pointer hover:stroke-[4px] hover:stroke-brand-orange transition-all duration-300">
                                     <animate attributeName="stroke-dashoffset" from="50" to="0" dur="30s" repeatCount="indefinite" />
                                </path>
                                
                                <path d="M 900 420 A 200 200 0 0 1 500 420" fill="none" stroke="#5CD8C5" stroke-width="2" stroke-dasharray="6 6" opacity="0.6" marker-end="url(#arrow-dashed-teal)" class="cursor-pointer hover:stroke-[4px] hover:stroke-brand-lightTeal hover:opacity-100 transition-all duration-300" />

                                <!-- 2. Main Linear Arrows -->
                                <path d="M 150 300 L 250 300" stroke="#1B4F55" stroke-width="2" marker-end="url(#arrow)" class="cursor-pointer hover:stroke-[4px] transition-all duration-300" />
                                <path d="M 350 300 L 450 300" stroke="#1B4F55" stroke-width="2" marker-end="url(#arrow)" class="cursor-pointer hover:stroke-[4px] transition-all duration-300" />
                                <path d="M 550 300 L 650 300" stroke="#1B4F55" stroke-width="2" marker-end="url(#arrow)" class="cursor-pointer hover:stroke-[4px] transition-all duration-300" />
                                <path d="M 750 300 L 850 300" stroke="#1B4F55" stroke-width="2" marker-end="url(#arrow)" class="cursor-pointer hover:stroke-[4px] transition-all duration-300" />

                                <!-- 3. Top Arcs -->
                                <path d="M 300 220 A 100 100 0 0 0 100 220" fill="none" stroke="#5CD8C5" stroke-width="2" stroke-dasharray="6 6" marker-end="url(#arrow-dashed-teal)" class="cursor-pointer hover:stroke-[4px] hover:stroke-brand-lightTeal transition-all duration-300" />
                                
                                <path d="M 700 220 A 100 100 0 0 0 500 220" fill="none" stroke="#5CD8C5" stroke-width="2" stroke-dasharray="6 6" marker-end="url(#arrow-dashed-teal)" class="cursor-pointer hover:stroke-[4px] hover:stroke-brand-lightTeal transition-all duration-300" />

                                <!-- 4. Labels for Arcs (SVG Text) -->
                                
                                <!-- Top Left Label -->
                                <foreignObject x="100" y="60" width="200" height="60" class="overflow-visible pointer-events-none">
                                    <div class="flex justify-center h-full items-center pointer-events-auto">
                                        <div class="bg-white px-3 py-1.5 rounded-xl shadow-sm border border-teal-50 text-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                                            <span class="text-brand-lightTeal text-[10px] font-bold uppercase tracking-wide leading-tight block group-hover:text-brand-teal transition-colors">Empathy helps<br><span class="text-brand-teal group-hover:text-brand-dark">define problem</span></span>
                                        </div>
                                    </div>
                                </foreignObject>

                                <!-- Top Right Label -->
                                <foreignObject x="500" y="60" width="200" height="60" class="overflow-visible pointer-events-none">
                                     <div class="flex justify-center h-full items-center pointer-events-auto">
                                        <div class="bg-white px-3 py-1.5 rounded-xl shadow-sm border border-teal-50 text-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                                            <span class="text-brand-lightTeal text-[10px] font-bold uppercase tracking-wide leading-tight block group-hover:text-brand-teal transition-colors">Prototype sparks<br><span class="text-brand-teal group-hover:text-brand-dark">new ideas</span></span>
                                        </div>
                                    </div>
                                </foreignObject>

                                <!-- Bottom Long Label -->
                                <foreignObject x="450" y="740" width="300" height="50" class="overflow-visible pointer-events-none">
                                    <div class="flex justify-center h-full items-center pointer-events-auto">
                                        <div class="bg-white px-5 py-2 rounded-full shadow-sm border border-orange-50 text-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                                            <span class="text-brand-orange text-xs font-bold uppercase tracking-wide group-hover:text-brand-dark transition-colors">Tests redefine the problem</span>
                                        </div>
                                    </div>
                                </foreignObject>

                                <!-- Bottom Short Label -->
                                <foreignObject x="600" y="640" width="200" height="40" class="overflow-visible pointer-events-none">
                                     <div class="flex justify-center h-full items-center pointer-events-auto">
                                        <div class="bg-white/90 px-4 py-1.5 rounded-full shadow-sm border border-gray-100 backdrop-blur-sm cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                                            <span class="text-gray-400 text-[9px] font-bold uppercase tracking-wider group-hover:text-brand-dark transition-colors">Tests create ideas</span>
                                        </div>
                                    </div>
                                </foreignObject>


                                <!-- 5. Nodes (Groups) -->
                                
                                <!-- Node 1: Empathise -->
                                <g class="group cursor-pointer hover:opacity-90 transition-opacity">
                                    <circle cx="100" cy="300" r="45" fill="white" filter="url(#icon-shadow)" class="group-hover:stroke-2 group-hover:stroke-brand-teal transition-all duration-300" />
                                    <g transform="translate(76, 276) scale(1)">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1B4F55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform duration-300">
                                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                        </svg>
                                    </g>
                                    <text x="100" y="370" text-anchor="middle" font-family="Poppins" font-weight="bold" font-size="18" fill="#113034" class="group-hover:fill-brand-teal transition-colors">Empathise</text>
                                    <text x="100" y="390" text-anchor="middle" font-family="Poppins" font-size="11" fill="#9CA3AF" letter-spacing="0.05em" text-transform="uppercase">Learn about users</text>
                                </g>

                                <!-- Node 2: Define -->
                                <g class="group cursor-pointer hover:opacity-90 transition-opacity">
                                    <circle cx="300" cy="300" r="45" fill="white" filter="url(#icon-shadow)" class="group-hover:stroke-2 group-hover:stroke-brand-orange transition-all duration-300"/>
                                    <g transform="translate(276, 276)">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform duration-300">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </g>
                                    <text x="300" y="370" text-anchor="middle" font-family="Poppins" font-weight="bold" font-size="18" fill="#113034" class="group-hover:fill-brand-orange transition-colors">Define</text>
                                    <text x="300" y="390" text-anchor="middle" font-family="Poppins" font-size="11" fill="#9CA3AF" letter-spacing="0.05em" text-transform="uppercase">Identify problem</text>
                                </g>

                                <!-- Node 3: Ideate -->
                                <g class="group cursor-pointer hover:opacity-90 transition-opacity">
                                    <circle cx="500" cy="300" r="45" fill="white" filter="url(#icon-shadow)" class="group-hover:stroke-2 group-hover:stroke-yellow-500 transition-all duration-300"/>
                                    <g transform="translate(476, 276)">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#EAB308" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform duration-300">
                                            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </g>
                                    <text x="500" y="370" text-anchor="middle" font-family="Poppins" font-weight="bold" font-size="18" fill="#113034" class="group-hover:fill-yellow-500 transition-colors">Ideate</text>
                                    <text x="500" y="390" text-anchor="middle" font-family="Poppins" font-size="11" fill="#9CA3AF" letter-spacing="0.05em" text-transform="uppercase">Brainstorm</text>
                                </g>

                                <!-- Node 4: Prototype -->
                                <g class="group cursor-pointer hover:opacity-90 transition-opacity">
                                    <circle cx="700" cy="300" r="45" fill="white" filter="url(#icon-shadow)" class="group-hover:stroke-2 group-hover:stroke-brand-lightTeal transition-all duration-300"/>
                                    <g transform="translate(676, 276)">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5CD8C5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform duration-300">
                                            <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </g>
                                    <text x="700" y="370" text-anchor="middle" font-family="Poppins" font-weight="bold" font-size="18" fill="#113034" class="group-hover:fill-brand-lightTeal transition-colors">Prototype</text>
                                    <text x="700" y="390" text-anchor="middle" font-family="Poppins" font-size="11" fill="#9CA3AF" letter-spacing="0.05em" text-transform="uppercase">Build to think</text>
                                </g>

                                <!-- Node 5: Test -->
                                <g class="group cursor-pointer hover:opacity-90 transition-opacity">
                                    <circle cx="900" cy="300" r="45" fill="white" filter="url(#icon-shadow)" class="group-hover:stroke-2 group-hover:stroke-green-500 transition-all duration-300"/>
                                    <g transform="translate(876, 276)">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform duration-300">
                                            <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>
                                    </g>
                                    <text x="900" y="370" text-anchor="middle" font-family="Poppins" font-weight="bold" font-size="18" fill="#113034" class="group-hover:fill-green-600 transition-colors">Test</text>
                                    <text x="900" y="390" text-anchor="middle" font-family="Poppins" font-size="11" fill="#9CA3AF" letter-spacing="0.05em" text-transform="uppercase">Refine</text>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureComponent {
  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen.set(false);
    document.body.style.overflow = 'auto';
  }
}