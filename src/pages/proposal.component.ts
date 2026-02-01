import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ClientsComponent } from '../components/clients.component';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ClientsComponent],
  template: `
    <!-- Full screen override to cover main App Header/Footer -->
    <div class="fixed inset-0 bg-white z-[9999] overflow-y-auto">
      
      @if (!auth.isAuthenticated()) {
         <div class="flex items-center justify-center min-h-screen px-4 bg-gray-50">
          <div class="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center">
             <h2 class="text-xl font-bold text-brand-dark mb-4">Authentication Required</h2>
             <p class="text-gray-500 mb-6">Please log in via the Assets page first.</p>
             <button routerLink="/assets" class="bg-brand-teal text-white px-6 py-2 rounded-lg">Go to Login</button>
          </div>
         </div>
      } @else {
        
        <!-- Close Button (Cross) -->
        <a routerLink="/" 
           title="Exit Proposal"
           class="fixed top-6 right-8 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-50 text-gray-500 transition-colors shadow-sm">
           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </a>

        <!-- Toggle Edit Mode Button (Solid Dot) -->
        <button 
          (click)="toggleEdit()" 
          title="Toggle Edit Mode"
          [class]="'fixed top-20 right-8 w-4 h-4 rounded-full z-50 shadow-xl transition-all duration-300 hover:scale-125 ' + (isEditing() ? 'bg-brand-orange ring-4 ring-orange-100' : 'bg-gray-300 hover:bg-brand-teal')">
        </button>

        <!-- Edit Panel (Floating) -->
        @if (isEditing()) {
          <div class="fixed top-28 right-8 bg-white/95 backdrop-blur shadow-2xl p-6 rounded-2xl border border-gray-100 w-80 z-40 animate-slide-in-right">
             <div class="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                 <h3 class="font-bold text-brand-dark">Customize Proposal</h3>
                 <span class="text-[10px] text-gray-400 uppercase tracking-widest">Editor</span>
             </div>

             <!-- View Switcher -->
             <div class="bg-gray-100 p-1 rounded-lg flex text-[10px] font-bold text-gray-500 mb-6">
                <button (click)="viewMode.set('proposal')" [class]="'flex-1 py-2 rounded-md transition-all ' + (viewMode() === 'proposal' ? 'bg-white text-brand-teal shadow-sm' : 'hover:text-brand-dark')">Proposal Preview</button>
                <button (click)="viewMode.set('email')" [class]="'flex-1 py-2 rounded-md transition-all ' + (viewMode() === 'email' ? 'bg-white text-brand-teal shadow-sm' : 'hover:text-brand-dark')">Email Generator</button>
             </div>
             
             <div class="space-y-4">
                <div>
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Client Name</label>
                    <input type="text" [(ngModel)]="orgName" class="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-brand-teal outline-none" placeholder="e.g. St. Xavier's">
                </div>
                 <div>
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Level</label>
                    <select [(ngModel)]="level" class="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-brand-teal outline-none">
                        <option value="Grades 5-8">Grades 5-8</option>
                        <option value="Grades 9-12">Grades 9-12</option>
                        <option value="University">University</option>
                        <option value="Corporate">Corporate</option>
                    </select>
                </div>
                 <div>
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Scope</label>
                    <div class="grid grid-cols-2 gap-2">
                        @for(s of ['Spark', 'Explorer', 'Innovator', 'Changemaker']; track s) {
                            <button (click)="scope.set(s)" [class]="'py-2 rounded-md text-xs font-bold border transition-colors ' + (scope() === s ? 'bg-brand-teal text-white border-brand-teal' : 'bg-white text-gray-500 border-gray-200')">
                                {{s}}
                            </button>
                        }
                    </div>
                </div>
                <div class="pt-4 mt-4 border-t border-gray-100 text-center">
                    <a routerLink="/assets" class="text-xs text-brand-orange hover:underline">Back to Assets</a>
                </div>
             </div>
          </div>
        }

        <!-- Main Content (Switched based on View Mode) -->
        @if (viewMode() === 'proposal') {
            <!-- Proposal Webpage Content -->
            <div class="w-full bg-white text-gray-800 font-sans selection:bg-brand-orange/20 animate-fade-in-up">
            
            <!-- Hero Section -->
            <header class="relative bg-brand-dark text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-brand-teal to-brand-dark z-0"></div>
                <!-- Abstract Lines -->
                <svg class="absolute right-0 bottom-0 w-1/2 h-full text-white/5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 L100 0 L100 100 Z" fill="currentColor"/></svg>

                <div class="max-w-4xl mx-auto relative z-10">
                    <div class="flex items-center gap-3 mb-6 animate-fade-in-up">
                        <div class="bg-brand-orange text-white p-2.5 rounded-lg transform rotate-3 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                        </div>
                        <span class="font-bold tracking-[0.2em] uppercase text-sm opacity-80">Design Challenge</span>
                    </div>
                    
                    <h1 class="text-5xl md:text-7xl font-extrabold mb-8 leading-tight animate-fade-in-up" style="animation-delay: 0.1s">
                        Proposal for <br>
                        <span class="text-brand-lightTeal border-b-4 border-brand-orange">{{ orgName() || 'Future Partner' }}</span>
                    </h1>
                    
                    <div class="flex flex-col md:flex-row gap-8 text-sm md:text-base opacity-90 animate-fade-in-up" style="animation-delay: 0.2s">
                        <div>
                            <span class="block text-gray-400 text-xs uppercase tracking-widest mb-1">Program</span>
                            <span class="font-bold text-xl">{{ scope() }} Workshop</span>
                        </div>
                        <div>
                            <span class="block text-gray-400 text-xs uppercase tracking-widest mb-1">Target Audience</span>
                            <span class="font-bold text-xl">{{ level() }}</span>
                        </div>
                        <div>
                            <span class="block text-gray-400 text-xs uppercase tracking-widest mb-1">Date</span>
                            <span class="font-bold text-xl">{{ todayDate | date:'MMMM y' }}</span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Executive Summary -->
            <section class="py-20 px-6 md:px-12 max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-brand-dark mb-8">Executive Summary</h2>
                <p class="text-xl leading-relaxed text-gray-600 mb-8 font-light">
                    In a rapidly changing world, the ability to adapt, innovate, and empathize is not just an advantage—it's a necessity. We propose a partnership to bring the <strong class="text-brand-teal">Design Challenge</strong> to <strong>{{ orgName() || 'your institution' }}</strong>.
                </p>
                <p class="text-lg leading-relaxed text-gray-600 mb-8">
                    Our {{ level() }} program focuses on <strong>{{ getFocusArea() }}</strong>. By engaging students in the <strong>{{ scope() }}</strong> module, we aim to transform them from passive learners into active problem solvers who can navigate ambiguity with confidence.
                </p>
            </section>

            <!-- The Methodology -->
            <section class="py-20 bg-gray-50 px-6 md:px-12">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-brand-dark mb-12">Our Methodology</h2>
                    <div class="grid md:grid-cols-5 gap-4">
                        @for (step of steps; track step.title) {
                            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group flex flex-col h-full items-center justify-center min-h-[160px]">
                                <div class="text-brand-orange mb-3 mx-auto">
                                    <div class="w-10 h-10 rounded-full bg-orange-50 text-brand-orange flex items-center justify-center mx-auto font-bold text-lg group-hover:scale-110 transition-transform">{{ step.id }}</div>
                                </div>
                                <h3 class="font-bold text-brand-dark mb-1">{{ step.title }}</h3>
                                <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">{{ step.desc }}</p>
                            </div>
                        }
                    </div>
                </div>
            </section>

            <!-- Scope of Work Details -->
            <section class="py-20 px-6 md:px-12 max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-brand-dark mb-8 flex items-center gap-3">
                        Scope of Work
                        <span class="text-sm bg-brand-teal text-white px-3 py-1 rounded-full align-middle">{{ scope() }} Module</span>
                    </h2>
                    
                    <div class="bg-white border-l-4 border-brand-teal p-8 shadow-lg rounded-r-xl mb-12">
                        <p class="text-lg text-gray-700 mb-6 font-medium">{{ getScopeDescription() }}</p>
                        <p class="text-gray-600 mb-8 leading-relaxed">
                            This module is designed to fit within {{ getDuration() }} of contact time. It covers the essential phases of the design thinking cycle appropriate for {{ level() }} students, ensuring they walk away with tangible outcomes and a shift in perspective.
                        </p>
                        
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 class="font-bold text-brand-dark mb-4 uppercase text-xs tracking-widest">Deliverables</h4>
                                <ul class="space-y-4">
                                    <li class="flex items-start gap-3">
                                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                        </div>
                                        <div>
                                            <span class="text-sm font-bold text-gray-700 block">On-site Workshop Facilitation</span>
                                            <span class="text-xs text-gray-500 block">Expert facilitators for {{ getDuration() }}</span>
                                        </div>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                        </div>
                                        <div>
                                            <span class="text-sm font-bold text-gray-700 block">Materials & Canvases</span>
                                            <span class="text-xs text-gray-500 block">Printed worksheets, sticky notes, prototyping materials</span>
                                        </div>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                        </div>
                                        <div>
                                            <span class="text-sm font-bold text-gray-700 block">Digital Toolkit</span>
                                            <span class="text-xs text-gray-500 block">Access to online resources for post-workshop learning</span>
                                        </div>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                        </div>
                                        <div>
                                            <span class="text-sm font-bold text-gray-700 block">Impact Report</span>
                                            <span class="text-xs text-gray-500 block">Summary of student ideas and engagement metrics</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-brand-dark mb-4 uppercase text-xs tracking-widest">Key Outcomes</h4>
                                <ul class="space-y-4">
                                    <li class="flex items-start gap-3">
                                        <div class="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg class="w-3 h-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                        </div>
                                        <div>
                                            <span class="text-sm font-bold text-gray-700 block">Mindset Shift</span>
                                            <span class="text-xs text-gray-500 block">{{ getKeyOutcome() }}</span>
                                        </div>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <div class="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg class="w-3 h-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                                        </div>
                                        <div>
                                            <span class="text-sm font-bold text-gray-700 block">Collaboration</span>
                                            <span class="text-xs text-gray-500 block">Students learn to leverage diverse strengths in teams</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </section>

            <!-- Investment / Requirements -->
            <section class="py-20 bg-brand-dark text-white px-6 md:px-12">
                <div class="max-w-4xl mx-auto">
                    <div class="flex flex-col md:flex-row justify-between items-start gap-12">
                        <div class="md:w-1/2">
                            <h2 class="text-3xl font-bold mb-6">Investment & Requirements</h2>
                            <p class="text-gray-400 mb-6">To ensure a successful delivery, we require a dedicated space for collaboration and access to basic AV equipment. Our team handles all facilitation and material logistics.</p>
                            <p class="text-sm text-gray-500">Note: Costs cover facilitation, IP usage, and materials. Travel expenses if outside Kathmandu valley are separate.</p>
                        </div>
                        <div class="md:w-1/2 bg-white/5 p-8 rounded-2xl border border-white/10 w-full">
                            <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                                <span class="font-bold">Program Fee</span>
                                <span class="text-brand-orange text-xl font-bold">{{ getFee() }}</span>
                            </div>
                                <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                                <span class="font-bold">Duration</span>
                                <span class="text-brand-orange">{{ getDuration() }}</span>
                            </div>
                                <div class="flex justify-between items-center">
                                <span class="font-bold">Participants</span>
                                <span class="text-gray-400">Up to 30 per cohort</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Previous Clients Section -->
            <app-clients [staticView]="true" />

            <!-- Footer (Proposal Specific) -->
            <footer class="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-gray-100">
                <div class="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 class="text-2xl font-bold text-brand-dark mb-4">Let's make an impact together.</h3>
                <p class="text-gray-500 mb-8">This proposal is valid for 30 days from {{ todayDate | date:'mediumDate' }}.</p>
                
                <div class="flex justify-center gap-8 text-sm font-bold text-gray-400">
                    <span>designchallenge.superscholar.io</span>
                    <span>hello@superscholar.io</span>
                </div>
            </footer>

            </div>
        } @else {
            <!-- Email Generator View -->
            <div class="min-h-screen bg-gray-50 flex flex-col items-center pt-32 pb-20 px-6 font-sans">
                <div class="bg-white max-w-3xl w-full p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 animate-fade-in-up">
                    <div class="flex items-center gap-4 mb-8">
                        <div class="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-brand-dark">Email Generator</h2>
                            <p class="text-sm text-gray-500">Copy this text to send with the PDF proposal attachment.</p>
                        </div>
                    </div>

                    <!-- Warm/Cold Toggle -->
                    <div class="flex justify-center mb-8">
                        <div class="bg-gray-100 p-1.5 rounded-xl flex text-xs font-bold text-gray-500">
                            <button (click)="emailType.set('warm')" [class]="'px-8 py-3 rounded-lg transition-all duration-300 ' + (emailType() === 'warm' ? 'bg-white text-brand-orange shadow-md transform scale-105' : 'hover:text-brand-dark')">
                                Warm Outreach
                            </button>
                            <button (click)="emailType.set('cold')" [class]="'px-8 py-3 rounded-lg transition-all duration-300 ' + (emailType() === 'cold' ? 'bg-white text-brand-teal shadow-md transform scale-105' : 'hover:text-brand-dark')">
                                Cold Outreach
                            </button>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Subject Line</label>
                            <div class="relative group">
                                <input type="text" [value]="emailSubject()" readonly class="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm font-medium rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal font-mono">
                                <button (click)="copyText(emailSubject())" class="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-brand-teal opacity-0 group-hover:opacity-100 transition-opacity" title="Copy Subject">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                                </button>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Email Body</label>
                            <div class="relative group">
                                <textarea readonly class="w-full h-96 bg-gray-50 border border-gray-200 text-gray-600 text-sm leading-relaxed rounded-xl p-6 focus:outline-none focus:border-brand-teal font-mono resize-none" [value]="emailBody()"></textarea>
                                <button (click)="copyText(emailBody())" class="absolute right-4 top-4 p-2 bg-white shadow-sm border border-gray-100 rounded-lg text-gray-400 hover:text-brand-teal opacity-0 group-hover:opacity-100 transition-opacity" title="Copy Body">
                                     <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                                </button>
                            </div>
                        </div>

                         <div class="flex justify-end pt-4 border-t border-gray-100">
                             <button (click)="copyFullEmail()" class="bg-brand-teal text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1">
                                @if(!emailCopied()) {
                                    <span>Copy Full Email</span>
                                } @else {
                                    <span>Copied!</span>
                                }
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                             </button>
                        </div>
                    </div>
                </div>
           </div>
        }
      }
    </div>
  `,
  styles: [`
    @keyframes slide-in-right {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    .animate-slide-in-right {
        animation: slide-in-right 0.3s ease-out forwards;
    }
    @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalComponent {
  auth = inject(AuthService);
  
  // State
  isEditing = signal(true);
  viewMode = signal<'proposal' | 'email'>('proposal');
  emailType = signal<'warm' | 'cold'>('warm');
  emailCopied = signal(false);
  
  // Data
  orgName = signal('');
  level = signal('Grades 5-8');
  scope = signal('Spark'); 
  
  todayDate = new Date();

  steps = [
      { id: 1, title: 'Empathise', desc: 'Understanding needs' },
      { id: 2, title: 'Define', desc: 'Framing the problem' },
      { id: 3, title: 'Ideate', desc: 'Brainstorming' },
      { id: 4, title: 'Prototype', desc: 'Building solutions' },
      { id: 5, title: 'Test', desc: 'Validating impact' },
  ];

  // Computed Email Content
  emailSubject = computed(() => {
    if (this.emailType() === 'cold') {
        return `Partnership Opportunity: Bringing Design Thinking to ${this.orgName() || 'Your Institution'}`;
    }
    return `Proposal: Design Challenge ${this.scope()} Workshop for ${this.orgName() || 'Your Institution'}`;
  });

  emailBody = computed(() => {
    const org = this.orgName() || 'your institution';
    const recipient = this.orgName() ? this.orgName() + ' Team' : '[Client Name]';
    
    // Cold Outreach
    if (this.emailType() === 'cold') {
        return `Dear ${recipient},

I hope this email finds you well.

I am writing to introduce the Design Challenge, a hands-on innovation program designed to empower students with the critical thinking skills needed to solve real-world problems.

We believe that ${org} would be an ideal environment for this workshop. Our program moves students from passive learning to active problem-solving, fostering resilience and creativity.

Please find attached a proposal for our ${this.scope()} module, specifically designed for ${this.level()} students.

Highlights of the proposal:
• Scope: ${this.scope()} Module (${this.getDuration()})
• Focus: ${this.getKeyOutcome()}
• Investment: ${this.getFee()}

I would welcome the opportunity to discuss how we can customize this experience for your students.

Best regards,

[Your Name]
Design Challenge Team
designchallenge.superscholar.io`;
    }

    // Warm Outreach (Default)
    return `Dear ${recipient},

It was a pleasure connecting with you.

As discussed, please find attached the detailed proposal for the ${this.scope()} Design Challenge workshop, specifically tailored for ${this.level()} students at ${org}.

This ${this.getDuration()} session focuses on ${this.getFocusArea()}, helping students shift from passive learners to active problem solvers.

Highlights of the proposal:
• Scope: ${this.scope()} Module
• Focus: ${this.getKeyOutcome()}
• Investment: ${this.getFee()}

We are excited about the possibility of partnering with you to empower the next generation of changemakers.

Best regards,

[Your Name]
Design Challenge Team
designchallenge.superscholar.io`;
  });

  toggleEdit() {
      this.isEditing.update(v => !v);
  }

  copyText(text: string) {
      navigator.clipboard.writeText(text);
  }

  copyFullEmail() {
      const fullText = `Subject: ${this.emailSubject()}\n\n${this.emailBody()}`;
      navigator.clipboard.writeText(fullText).then(() => {
          this.emailCopied.set(true);
          setTimeout(() => this.emailCopied.set(false), 2000);
      });
  }

  getFee() {
      let base = 0;
      switch(this.scope()) {
          case 'Spark': base = 1200; break;
          case 'Explorer': base = 5000; break;
          case 'Innovator': base = 10000; break;
          case 'Changemaker': base = 15000; break;
      }

      // Base rate is for Grades 5-8.
      // 100% higher (x2) for High School (Grades 9-12), University, Corporate
      let multiplier = 1;
      const currentLevel = this.level();
      
      if (currentLevel === 'Grades 9-12' || currentLevel === 'University' || currentLevel === 'Corporate') {
          multiplier = 2;
      }

      const total = base * multiplier;
      return 'Rs. ' + total.toLocaleString();
  }

  // Helpers
  getFocusArea() {
    switch(this.level()) {
        case 'Grades 5-8': return 'igniting curiosity and fostering early agency';
        case 'Grades 9-12': return 'developing resilience, career readiness, and real-world execution';
        case 'University': return 'advanced validation and systemic impact';
        case 'Corporate': return 'organizational transformation and intrapreneurship';
        default: return 'innovation skills';
    }
  }

  getScopeDescription() {
      switch(this.scope()) {
          case 'Spark': return 'A high-energy introduction to the "How Might We?" framework, helping participants reframe problems as opportunities. Perfect for igniting interest.';
          case 'Explorer': return 'A deep dive into problem definition and empathetic ideation, leveraging collective intelligence. Students form teams and identify a core issue.';
          case 'Innovator': return 'An immersive prototyping experience where ideas are built, tested, and refined through "flearning". Focuses on tangible outputs.';
          case 'Changemaker': return 'A comprehensive execution phase involving project management, impact measurement, and final pitches. Ready for real-world application.';
          default: return '';
      }
  }

  getDuration() {
      switch(this.scope()) {
          case 'Spark': return '90 Minutes';
          case 'Explorer': return '1 Day';
          case 'Innovator': return '2 Days';
          case 'Changemaker': return '3 Days';
          default: return '';
      }
  }

  getKeyOutcome() {
      switch(this.scope()) {
          case 'Spark': return 'Shift in mindset from passive to proactive.';
          case 'Explorer': return 'Validated problem statement and solution concepts.';
          case 'Innovator': return 'Physical or digital prototype tested with users.';
          case 'Changemaker': return 'Launch-ready project plan or pitch deck.';
          default: return '';
      }
  }
}