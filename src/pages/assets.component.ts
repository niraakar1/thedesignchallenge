import { Component, ChangeDetectionStrategy, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="min-h-screen pt-24 bg-gray-50 pb-20">
      
      @if (!auth.isAuthenticated()) {
        <!-- Login Form -->
        <div class="flex items-center justify-center min-h-[60vh] px-4">
          <div class="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center">
            <div class="w-16 h-16 bg-brand-dark text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <h2 class="text-2xl font-bold text-brand-dark mb-2">Restricted Access</h2>
            <p class="text-gray-500 mb-6">Please enter the password to view outreach assets.</p>
            
            <form (submit)="onLogin($event)" class="space-y-4">
              <input 
                type="password" 
                [(ngModel)]="password" 
                name="password"
                placeholder="Enter Password" 
                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
              >
              @if (error()) {
                <p class="text-red-500 text-sm">Incorrect password.</p>
              }
              <button type="submit" class="w-full bg-brand-teal text-white font-bold py-3 rounded-xl hover:bg-brand-dark transition-colors">
                Unlock Assets
              </button>
            </form>
          </div>
        </div>
      } @else {
        <!-- Assets Content -->
        <div class="w-full px-6 md:px-12 animate-fade-in">
          
          <div class="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8">
            <div>
              <p class="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2">Internal Resources</p>
              <h1 class="text-4xl font-extrabold text-brand-dark">Brand & Outreach Assets</h1>
            </div>
            <button routerLink="/proposal" class="mt-4 md:mt-0 bg-brand-orange text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-all flex items-center gap-2">
               <span>Generate Proposal</span>
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>

          <!-- Section: Banners -->
          <div class="mb-20">
            <h3 class="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
               <svg class="w-6 h-6 text-brand-lightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
               Digital Banners (Rendered)
            </h3>
            
            <div class="flex flex-col xl:flex-row gap-12">
                
                <!-- LinkedIn Banner Render -->
                <div class="flex-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div class="flex justify-between items-center mb-6">
                         <h4 class="font-bold text-brand-dark flex items-center gap-2">
                             <span class="w-2 h-8 bg-brand-teal rounded-full"></span>
                             LinkedIn Banner
                         </h4>
                         <span class="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">1584 x 396 px</span>
                    </div>

                     <div class="aspect-[4/1] w-full bg-brand-dark relative overflow-hidden flex items-center px-8 md:px-12 rounded-lg select-none mb-6 group shadow-lg ring-1 ring-black/5">
                        <!-- Background Graphic -->
                        <div class="absolute right-0 top-0 h-full w-2/3 bg-brand-teal transform -skew-x-12 translate-x-20 z-0"></div>
                        <div class="absolute right-10 top-1/2 -translate-y-1/2 text-white/10 z-0">
                           <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="50" r="50"/></svg>
                        </div>

                        <!-- Content -->
                        <div class="relative z-10 text-white">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="bg-brand-orange w-8 h-8 rounded-lg transform rotate-3 flex items-center justify-center">
                                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                </div>
                                <span class="font-bold tracking-[0.2em] uppercase text-xs opacity-90">Design Challenge</span>
                            </div>
                            <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">Innovate for <br><span class="text-brand-lightTeal">Social Impact</span></h1>
                        </div>
                    </div>
                </div>

                <!-- Instagram Designer Section -->
                <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full max-w-6xl mx-auto xl:mx-0">
                    <!-- Controls Header -->
                    <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                        <h4 class="font-bold text-brand-dark flex items-center gap-2 text-xl">
                            <span class="w-3 h-8 bg-brand-orange rounded-full"></span>
                            Instagram Designer
                        </h4>
                        <div class="flex gap-3 bg-gray-50 p-2 rounded-xl">
                            @for (v of [1,2,3,4,5]; track v) {
                                <button (click)="instaVariation.set(v)" [class]="'w-10 h-10 rounded-lg font-bold text-sm transition-all flex items-center justify-center ' + (instaVariation() === v ? 'bg-brand-dark text-white shadow-lg scale-110' : 'bg-white text-gray-400 hover:bg-gray-100')">
                                    {{v}}
                                </button>
                            }
                        </div>
                    </div>

                    <div class="flex flex-col xl:flex-row gap-12">
                        <!-- Controls Sidebar -->
                        <div class="xl:w-1/3 space-y-6 order-2 xl:order-1">
                             
                             <!-- Text Input -->
                             <div class="space-y-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <label class="text-xs font-bold text-gray-400 uppercase tracking-wide flex items-center gap-2">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                                    Main Text
                                </label>
                                <textarea [(ngModel)]="instaText" placeholder="Your inspiring quote here..." rows="4" class="w-full text-base p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal outline-none transition-all shadow-sm"></textarea>
                                
                                <div>
                                    <label class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 block">Highlights (comma separated)</label>
                                    <input [(ngModel)]="instaHighlightInput" type="text" placeholder="e.g. opportunities, disguise" class="w-full text-sm p-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all">
                                </div>
                             </div>

                             <!-- Tags Input -->
                             <div class="space-y-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <label class="text-xs font-bold text-gray-400 uppercase tracking-wide flex items-center gap-2">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>
                                    Tags
                                </label>
                                <div class="flex gap-2">
                                    <input [(ngModel)]="newTag" (keydown.enter)="addTag()" type="text" placeholder="Add tag + Enter" class="flex-grow text-sm p-3 rounded-xl border border-gray-200 focus:border-brand-teal outline-none">
                                    <button (click)="addTag()" class="bg-brand-teal text-white px-4 rounded-xl font-bold hover:bg-brand-dark transition-colors">+</button>
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    @for (tag of instaTags(); track tag; let i = $index) {
                                        <span class="bg-white border border-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                                            {{ tag }}
                                            <button (click)="removeTag(i)" class="text-red-400 hover:text-red-600">×</button>
                                        </span>
                                    }
                                </div>
                             </div>

                             <!-- Images & Stickers -->
                             <div class="space-y-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <label class="text-xs font-bold text-gray-400 uppercase tracking-wide">Background</label>
                                <div class="grid grid-cols-4 gap-2 mb-4">
                                    @for (img of presetImages; track img) {
                                        <button (click)="instaImage.set(img)" [class]="'w-full aspect-square rounded-xl overflow-hidden border-2 transition-all ' + (instaImage() === img ? 'border-brand-orange ring-2 ring-brand-orange/20' : 'border-transparent hover:border-gray-300')">
                                            <img [src]="img" class="w-full h-full object-cover">
                                        </button>
                                    }
                                </div>

                                <label class="text-xs font-bold text-gray-400 uppercase tracking-wide">Stickers</label>
                                <div class="flex gap-3 overflow-x-auto pb-2">
                                    <button (click)="addSticker('✨')" class="w-10 h-10 flex-shrink-0 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-center text-xl shadow-sm">✨</button>
                                    <button (click)="addSticker('🔥')" class="w-10 h-10 flex-shrink-0 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-center text-xl shadow-sm">🔥</button>
                                    <button (click)="addSticker('💡')" class="w-10 h-10 flex-shrink-0 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-center text-xl shadow-sm">💡</button>
                                    <button (click)="addSticker('🚀')" class="w-10 h-10 flex-shrink-0 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-center text-xl shadow-sm">🚀</button>
                                    <button (click)="addSticker('❤️')" class="w-10 h-10 flex-shrink-0 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-center text-xl shadow-sm">❤️</button>
                                    <button (click)="clearStickers()" class="w-10 h-10 flex-shrink-0 bg-red-50 border border-red-100 rounded-lg hover:bg-red-100 flex items-center justify-center text-red-500">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                    </button>
                                </div>
                             </div>

                        </div>

                        <!-- Canvas Preview -->
                        <div class="xl:w-2/3 order-1 xl:order-2 flex flex-col items-center justify-start">
                            <div class="aspect-square w-full max-w-[600px] shadow-2xl relative overflow-hidden select-none group bg-gray-100 text-brand-dark" id="insta-canvas">
                                
                                <!-- 
                                   VARIATION 1: The Quote (Refined) 
                                   Gradient background, centered text, clean typography.
                                -->
                                @if (instaVariation() === 1) {
                                    <div class="absolute inset-0 bg-gradient-to-br from-brand-orange via-[#FF8C61] to-[#FF6B35] text-white p-12 flex flex-col justify-between">
                                        <!-- Texture overlay -->
                                        <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                                        
                                        <!-- Header Tags -->
                                        <div class="relative z-10 flex flex-wrap gap-2">
                                            @for(tag of instaTags(); track tag) {
                                               <span class="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/30">{{ tag }}</span>
                                            }
                                        </div>

                                        <!-- Main Content -->
                                        <div class="relative z-10 my-auto">
                                            <svg class="w-8 h-8 text-white/40 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.789 15.63 15.685 15.63C16.356 15.63 16.634 16.035 16.634 16.581C16.634 17.536 16.115 18.257 15.444 18.257C15.176 18.257 14.939 18.156 14.939 18.156L14.78 20.354C14.78 20.354 15.155 20.536 15.701 20.536C17.245 20.536 18.667 19.387 18.667 17.302C18.667 15.67 17.659 14.004 15.617 14.004C14.468 14.004 13.568 14.502 12.964 15.011L13.064 11.232L18.129 11.232L18.129 9L11.517 9L11.517 21L14.017 21ZM6.545 21L6.545 18C6.545 16.896 7.318 15.63 8.214 15.63C8.885 15.63 9.163 16.035 9.163 16.581C9.163 17.536 8.644 18.257 7.973 18.257C7.705 18.257 7.468 18.156 7.468 18.156L7.309 20.354C7.309 20.354 7.684 20.536 8.23 20.536C9.774 20.536 11.196 19.387 11.196 17.302C11.196 15.67 10.188 14.004 8.146 14.004C6.997 14.004 6.097 14.502 5.493 15.011L5.593 11.232L10.658 11.232L10.658 9L4.046 9L4.046 21L6.545 21Z"/></svg>
                                            <h1 class="text-4xl lg:text-5xl font-hand font-bold leading-tight">
                                                @for(part of parsedText(); track $index) {
                                                    @if(part.isHighlight) {
                                                        <span class="text-brand-dark bg-white/20 px-1 rounded">{{ part.text }}</span>
                                                    } @else {
                                                        <span>{{ part.text }}</span>
                                                    }
                                                }
                                            </h1>
                                            <div class="h-1.5 w-16 bg-brand-teal mt-6 rounded-full"></div>
                                        </div>

                                        <!-- Footer -->
                                        <div class="relative z-10 flex items-center justify-between border-t border-white/20 pt-4 mt-8">
                                            <div class="flex items-center gap-2">
                                                 <div class="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                                     <span class="text-brand-orange text-xs font-bold">DC</span>
                                                 </div>
                                                 <span class="text-xs font-medium opacity-90 tracking-wide">Design Challenge</span>
                                            </div>
                                            <span class="text-[10px] opacity-70">superscholar.io</span>
                                        </div>
                                    </div>
                                }

                                <!-- 
                                   VARIATION 2: The Collage 
                                   Messy desk, taped photo, handwritten font.
                                -->
                                @if (instaVariation() === 2) {
                                    <div class="absolute inset-0 bg-[#F3F4F6] p-8 flex flex-col items-center justify-center overflow-hidden">
                                         <!-- Grid Background -->
                                         <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px;"></div>
                                         
                                         <!-- Random background elements -->
                                         <div class="absolute top-10 right-10 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl"></div>
                                         <div class="absolute bottom-10 left-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-2xl"></div>

                                         <!-- Photo Card -->
                                         <div class="relative bg-white p-3 pb-10 shadow-xl transform -rotate-2 w-3/4 aspect-[4/5] z-10 flex flex-col items-center">
                                             <!-- Tape -->
                                             <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 transform rotate-1 shadow-sm z-20"></div>
                                             
                                             <div class="w-full h-3/4 relative overflow-hidden bg-gray-200">
                                                 <img [src]="instaImage()" class="absolute inset-0 w-full h-full object-cover">
                                             </div>
                                             
                                             <div class="mt-6 w-full px-4 text-center">
                                                <h2 class="font-hand text-2xl text-brand-dark leading-none">
                                                    {{ instaText() }}
                                                </h2>
                                             </div>
                                         </div>

                                         <!-- Tags scattered -->
                                         <div class="absolute bottom-12 right-12 flex flex-col gap-2 transform rotate-6 z-20">
                                             @for(tag of instaTags(); track tag) {
                                                 <span class="bg-brand-orange text-white px-3 py-1 text-xs font-bold shadow-md inline-block transform hover:scale-110 transition-transform cursor-default">{{ tag }}</span>
                                             }
                                         </div>
                                    </div>
                                }

                                <!-- 
                                   VARIATION 3: Orange Bold Split
                                   More orange as requested.
                                -->
                                @if (instaVariation() === 3) {
                                    <div class="absolute inset-0 flex flex-col relative">
                                        <!-- Image Half -->
                                        <div class="h-1/2 w-full relative overflow-hidden">
                                            <img [src]="instaImage()" class="absolute inset-0 w-full h-full object-cover">
                                            <div class="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
                                            <!-- Diagonal Cut Overlay (SVG) -->
                                            <svg class="absolute bottom-0 left-0 w-full h-24 text-brand-orange" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                <path d="M0 100 L100 0 L100 100 Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                        
                                        <!-- Text Half -->
                                        <div class="h-1/2 w-full bg-brand-orange text-white px-8 pb-8 pt-4 flex flex-col justify-center relative">
                                            
                                            <div class="absolute -top-8 left-8 bg-brand-teal p-3 rounded-lg shadow-lg z-10 transform -rotate-6">
                                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                            </div>

                                            <div class="flex flex-wrap gap-2 mb-4 relative z-10">
                                                @for(tag of instaTags(); track tag) {
                                                    <span class="text-xs font-bold uppercase tracking-widest text-orange-100 border border-white/20 px-2 py-0.5 rounded">{{ tag }}</span>
                                                }
                                            </div>

                                            <h2 class="font-bold text-3xl leading-snug">
                                                @for(part of parsedText(); track $index) {
                                                    @if(part.isHighlight) {
                                                        <span class="text-brand-dark bg-white px-1">{{ part.text }}</span>
                                                    } @else {
                                                        <span>{{ part.text }}</span>
                                                    }
                                                }
                                            </h2>
                                            
                                            <div class="mt-auto flex justify-between items-end border-t border-white/20 pt-4">
                                                <span class="text-xs font-medium">Design Challenge</span>
                                                <span class="text-[10px] opacity-80">@superscholar</span>
                                            </div>
                                        </div>
                                    </div>
                                }

                                <!-- 
                                   VARIATION 4: Duotone/Typography 
                                   Full Image, Gradient Overlay, HUGE text.
                                -->
                                @if (instaVariation() === 4) {
                                    <div class="absolute inset-0 relative">
                                        <img [src]="instaImage()" class="absolute inset-0 w-full h-full object-cover grayscale">
                                        <!-- Duotone-ish Gradient Overlay -->
                                        <div class="absolute inset-0 bg-gradient-to-tr from-brand-teal/90 via-brand-teal/70 to-brand-orange/60 mix-blend-hard-light"></div>
                                        
                                        <div class="absolute inset-0 p-10 flex flex-col justify-center items-center text-center">
                                            <div class="border-2 border-white/30 p-8 w-full h-full flex flex-col justify-center items-center relative backdrop-blur-sm bg-white/5">
                                                
                                                <div class="absolute -top-4 bg-brand-orange text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
                                                    {{ instaTags()[0] || 'Insight' }}
                                                </div>

                                                <h1 class="text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                                                   @for(part of parsedText(); track $index) {
                                                        @if(part.isHighlight) {
                                                            <span class="text-brand-orange">{{ part.text }}</span>
                                                        } @else {
                                                            <span>{{ part.text }}</span>
                                                        }
                                                    }
                                                </h1>
                                                
                                                <div class="absolute bottom-6 flex gap-2">
                                                    <div class="w-2 h-2 rounded-full bg-white"></div>
                                                    <div class="w-2 h-2 rounded-full bg-white/50"></div>
                                                    <div class="w-2 h-2 rounded-full bg-white/50"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }

                                <!-- 
                                   VARIATION 5: Brand Frame Card
                                   Clean, white border, card insert.
                                -->
                                @if (instaVariation() === 5) {
                                    <div class="absolute inset-0 bg-brand-dark p-6 flex items-center justify-center">
                                        <div class="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col relative shadow-2xl">
                                            
                                            <!-- Header Strip -->
                                            <div class="h-16 bg-brand-teal flex items-center justify-between px-6 flex-shrink-0">
                                                <div class="flex items-center gap-2">
                                                    <div class="w-2 h-2 bg-brand-orange rounded-full"></div>
                                                    <span class="text-white font-bold text-sm tracking-wide">DESIGN CHALLENGE</span>
                                                </div>
                                                <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
                                            </div>

                                            <!-- Image Area -->
                                            <div class="flex-grow relative overflow-hidden">
                                                 <img [src]="instaImage()" class="absolute inset-0 w-full h-full object-cover">
                                                 <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                                 
                                                 <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                      <div class="flex gap-2 mb-3">
                                                        @for(tag of instaTags(); track tag) {
                                                            <span class="bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded">{{ tag }}</span>
                                                        }
                                                      </div>
                                                      <h2 class="text-2xl font-bold leading-snug">
                                                          {{ instaText() }}
                                                      </h2>
                                                 </div>
                                            </div>

                                            <!-- Footer Strip -->
                                            <div class="h-12 bg-white flex items-center justify-between px-6 flex-shrink-0 border-t border-gray-100">
                                                <span class="text-xs text-gray-400">superscholar.io</span>
                                                <div class="flex gap-1">
                                                    <div class="w-1 h-4 bg-brand-teal"></div>
                                                    <div class="w-1 h-4 bg-brand-orange"></div>
                                                    <div class="w-1 h-4 bg-brand-lightTeal"></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                }

                                <!-- Stickers Layer (Common) -->
                                @for (s of stickers(); track s.id) {
                                    <div 
                                        class="absolute z-40 text-4xl drop-shadow-lg cursor-move select-none"
                                        [style.left.%]="s.x"
                                        [style.top.%]="s.y"
                                        [style.transform]="'rotate(' + s.rot + 'deg)'">
                                        {{ s.type }}
                                    </div>
                                }
                            </div>
                            <div class="mt-4 flex justify-between w-full max-w-[600px]">
                                <span class="text-xs text-gray-400">1080 x 1080 px</span>
                                <button class="text-brand-teal text-xs font-bold hover:underline">Download PNG</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
          </div>

          <!-- Section: Email Footer -->
          <div class="mb-20">
             <h3 class="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
               <svg class="w-6 h-6 text-brand-lightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
               Email Signature
            </h3>
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
                <div class="flex-grow font-sans text-gray-800">
                    <p class="font-bold text-lg text-brand-teal">Name Surname</p>
                    <p class="text-sm text-gray-600 mb-2">Role | Design Challenge</p>
                    <div class="w-10 h-0.5 bg-brand-orange mb-2"></div>
                    <p class="text-xs text-gray-500">
                        <strong>W:</strong> designchallenge.superscholar.io<br>
                        <strong>E:</strong> hello@superscholar.io
                    </p>
                    <p class="text-[10px] text-gray-400 mt-2 italic">"Empowering youth to innovate for impact."</p>
                </div>
                <button class="bg-gray-100 hover:bg-gray-200 text-gray-600 px-6 py-2 rounded-lg font-bold text-sm transition-colors flex-shrink-0">
                    Copy HTML
                </button>
            </div>
          </div>
          
           <!-- Bottom CTA -->
           <div class="bg-brand-teal rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden mb-12">
              <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <h2 class="relative z-10 text-3xl md:text-4xl font-bold mb-4">Need a Custom Proposal?</h2>
              <p class="relative z-10 text-teal-100 mb-8 max-w-xl mx-auto">Generate a tailored PDF proposal for schools or organizations in seconds.</p>
              <button routerLink="/proposal" class="relative z-10 bg-white text-brand-teal px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
                  Launch Proposal Generator
              </button>
           </div>

        </div>
      }
    </div>
  `,
  styles: [`
    @keyframes fade-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fade-in 0.6s ease-out forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetsComponent {
  auth = inject(AuthService);
  password = '';
  error = signal(false);

  // Instagram Designer State
  instaVariation = signal(1);
  instaText = signal('Problems are just opportunities in disguise.');
  instaHighlightInput = signal('opportunities');
  instaTags = signal(['Workshop', 'Design']);
  newTag = signal('');
  instaImage = signal('https://picsum.photos/id/201/800/800');
  stickers = signal<{id: number, type: string, x: number, y: number, rot: number}[]>([]);
  
  presetImages = [
      'https://picsum.photos/id/201/800/800',
      'https://picsum.photos/id/180/800/800',
      'https://picsum.photos/id/119/800/800',
      'https://picsum.photos/id/20/800/800'
  ];

  parsedText = computed(() => {
    const text = this.instaText();
    const highlightsStr = this.instaHighlightInput();

    if (!text) return [{ text: '', isHighlight: false }];
    if (!highlightsStr) return [{ text: text, isHighlight: false }];

    const highlights = highlightsStr.split(',').map(h => h.trim().toLowerCase()).filter(h => h);
    if (highlights.length === 0) return [{ text: text, isHighlight: false }];

    // Escape special regex chars
    const escapedHighlights = highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`(${escapedHighlights.join('|')})`, 'gi');
    const parts = text.split(pattern);

    return parts.map(part => {
        return {
            text: part,
            isHighlight: highlights.includes(part.toLowerCase())
        };
    });
  });

  onLogin(e: Event) {
    e.preventDefault();
    if (!this.auth.login(this.password)) {
      this.error.set(true);
    } else {
      this.error.set(false);
    }
  }

  addTag() {
    if (this.newTag().trim()) {
      this.instaTags.update(t => [...t, this.newTag().trim()]);
      this.newTag.set('');
    }
  }

  removeTag(index: number) {
    this.instaTags.update(t => t.filter((_, i) => i !== index));
  }

  addSticker(type: string) {
      const newSticker = {
          id: Date.now(),
          type,
          x: Math.random() * 60 + 20, // Random pos between 20-80%
          y: Math.random() * 60 + 20,
          rot: Math.random() * 40 - 20
      };
      this.stickers.update(s => [...s, newSticker]);
  }

  clearStickers() {
      this.stickers.set([]);
  }
}