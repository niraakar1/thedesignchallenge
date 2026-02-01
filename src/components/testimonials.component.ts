import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-white relative overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style="background-image: radial-gradient(#FF6B35 1px, transparent 1px); background-size: 24px 24px;">
      </div>

      <div class="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16">
          <p class="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-4">Success Stories</p>
          <h2 class="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">What Students Are Saying</h2>
          <div class="w-24 h-1 bg-brand-lightTeal mx-auto mt-6 rounded-full"></div>
        </div>

        <!-- Carousel -->
        <div class="relative max-w-4xl mx-auto">
            
            <!-- Slides Container -->
            <div class="overflow-hidden rounded-3xl shadow-2xl bg-white aspect-video md:aspect-[2/1] relative group border border-gray-100 flex flex-col justify-center">
                @for (item of testimonials; track item.id; let i = $index) {
                    <div 
                        class="absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center bg-white p-8 md:p-16 text-center"
                        [class.opacity-0]="currentSlide() !== i"
                        [class.opacity-100]="currentSlide() === i"
                        [class.pointer-events-none]="currentSlide() !== i"
                    >
                        <div class="mb-8 text-brand-orange opacity-30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.789 15.63 15.685 15.63C16.356 15.63 16.634 16.035 16.634 16.581C16.634 17.536 16.115 18.257 15.444 18.257C15.176 18.257 14.939 18.156 14.939 18.156L14.78 20.354C14.78 20.354 15.155 20.536 15.701 20.536C17.245 20.536 18.667 19.387 18.667 17.302C18.667 15.67 17.659 14.004 15.617 14.004C14.468 14.004 13.568 14.502 12.964 15.011L13.064 11.232L18.129 11.232L18.129 9L11.517 9L11.517 21L14.017 21ZM6.545 21L6.545 18C6.545 16.896 7.318 15.63 8.214 15.63C8.885 15.63 9.163 16.035 9.163 16.581C9.163 17.536 8.644 18.257 7.973 18.257C7.705 18.257 7.468 18.156 7.468 18.156L7.309 20.354C7.309 20.354 7.684 20.536 8.23 20.536C9.774 20.536 11.196 19.387 11.196 17.302C11.196 15.67 10.188 14.004 8.146 14.004C6.997 14.004 6.097 14.502 5.493 15.011L5.593 11.232L10.658 11.232L10.658 9L4.046 9L4.046 21L6.545 21Z"/></svg>
                        </div>
                        
                        <p class="text-xl md:text-2xl font-light italic text-gray-700 leading-relaxed mb-8 max-w-2xl">
                            "{{ item.text }}"
                        </p>
                        
                        <div>
                             <h4 class="font-bold text-brand-dark text-lg">{{ item.author }}</h4>
                             <p class="text-sm text-brand-teal font-medium uppercase tracking-wide">{{ item.role }}</p>
                        </div>
                    </div>
                }
                
                <!-- Arrows -->
                <button (click)="prev()" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-brand-dark p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 z-20 border border-gray-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button (click)="next()" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-brand-dark p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 z-20 border border-gray-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </button>
            </div>

            <!-- Dots Navigation -->
            <div class="flex justify-center gap-3 mt-10">
                @for (item of testimonials; track item.id; let i = $index) {
                    <button 
                        (click)="goTo(i)"
                        [class]="'h-3 rounded-full transition-all duration-300 ' + (currentSlide() === i ? 'w-10 bg-brand-orange shadow-md' : 'w-3 bg-gray-200 hover:bg-brand-teal')"
                        [attr.aria-label]="'Go to slide ' + (i + 1)"
                    ></button>
                }
            </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
    currentSlide = signal(0);
    
    testimonials = [
        { 
            id: 1, 
            text: "I can't believe that my mind can think that much extra things.", 
            author: 'Kusum Adhikari',
            role: 'Student Participant'
        },
        { 
            id: 2, 
            text: "The session was very interactive. Expected it to be some kind of boring event but it turned out very interactive with facilitator as well as teammates. My major takeaway is the way of solving problems. Developed the process of Critical thinking.", 
            author: 'Workshop Participant',
            role: 'Student'
        },
        { 
            id: 3, 
            text: "I truly feel more confident and it enhanced my creativity and way of thinking. This was one of the most interactive and fun workshops I attended.", 
            author: 'Workshop Participant',
            role: 'Student'
        }
    ];

    next() {
        this.currentSlide.update(curr => (curr + 1) % this.testimonials.length);
    }

    prev() {
        this.currentSlide.update(curr => (curr - 1 + this.testimonials.length) % this.testimonials.length);
    }

    goTo(index: number) {
        this.currentSlide.set(index);
    }
}