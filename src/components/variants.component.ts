import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Program {
  title: string;
  subtitle: string;
  duration: string;
  durationClass: string;
  description: string;
  btnText: string;
  btnClass: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-variants',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-32 bg-white">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        
        <div class="text-center mb-20 max-w-3xl mx-auto">
          <p class="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-4">Choose Your Journey</p>
          <h2 class="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">Program Scope</h2>
          <div class="w-24 h-1 bg-brand-lightTeal mx-auto mt-6 rounded-full"></div>
          <p class="text-gray-600 mt-8 text-lg leading-relaxed">
            From quick ignitions to comprehensive execution, we have a module designed for every stage of the innovation journey.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (prog of programs(); track prog.title) {
            <div class="border border-gray-100 rounded-[2rem] p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white group relative overflow-hidden">
              @if (prog.highlight) {
                <div class="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 bg-brand-orange/10 rounded-full blur-2xl group-hover:bg-brand-orange/20 transition-all"></div>
              }

              <!-- Tag -->
              <div class="mb-6 flex justify-between items-center">
                <span [class]="'px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider ' + prog.durationClass">
                  {{ prog.duration }}
                </span>
              </div>

              <h3 class="text-2xl font-bold text-brand-dark mb-1 group-hover:text-brand-teal transition-colors">{{ prog.title }}</h3>
              <h4 class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{{ prog.subtitle }}</h4>
              
              <p class="text-gray-600 text-sm mb-8 flex-grow leading-relaxed font-normal">
                {{ prog.description }}
              </p>

              <button routerLink="/programs" [class]="'w-full py-3.5 rounded-xl font-bold text-white transition-all transform active:scale-95 text-xs uppercase tracking-wide flex items-center justify-center gap-2 ' + prog.btnClass">
                {{ prog.btnText }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariantsComponent {
  programs = signal<Program[]>([
    {
      title: 'The Spark',
      subtitle: 'Ignition',
      duration: '90 Minutes',
      durationClass: 'bg-brand-orange',
      description: 'Reframing problems as surmountable opportunities. A high-energy introduction to the mindset.',
      btnText: 'Explore Levels',
      btnClass: 'bg-brand-orange hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30',
      highlight: true
    },
    {
      title: 'The Explorer',
      subtitle: 'Discovery',
      duration: '1 Day',
      durationClass: 'bg-brand-lightTeal',
      description: 'Passion-led problem definition and empathetic ideation. Deep dive into understanding the user.',
      btnText: 'Explore Levels',
      btnClass: 'bg-brand-lightTeal hover:bg-teal-500 shadow-lg hover:shadow-teal-400/30',
      highlight: false
    },
    {
      title: 'The Innovator',
      subtitle: 'Validation',
      duration: '2 Days',
      durationClass: 'bg-brand-dark',
      description: 'Testing assumptions and building resilience through "flearning". From idea to physical prototype.',
      btnText: 'Explore Levels',
      btnClass: 'bg-brand-dark hover:bg-gray-800 shadow-lg hover:shadow-gray-700/30',
      highlight: false
    },
    {
      title: 'The Change Maker',
      subtitle: 'Execution',
      duration: '3 Days',
      durationClass: 'bg-yellow-500',
      description: 'Strategic management and measuring impact against global goals. Real-world execution.',
      btnText: 'Explore Levels',
      btnClass: 'bg-yellow-500 hover:bg-yellow-600 shadow-lg hover:shadow-yellow-500/30',
      highlight: false
    }
  ]);
}