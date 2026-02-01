import { Component, ChangeDetectionStrategy, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-white border-b border-gray-100 overflow-hidden relative z-20">
      
      <div class="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-300 uppercase tracking-widest">Our Clients</h2>
      </div>
      
      @if (staticView()) {
        <!-- Static Grid View for Proposals/PDF -->
        <div class="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-y-8 gap-x-12 items-center">
             @for (client of clients(); track client.name) {
                <div class="flex flex-col items-center justify-start gap-3 w-32 group/item">
                    <div class="h-16 w-full flex items-center justify-center grayscale opacity-70">
                        <img [src]="client.logo" [alt]="client.name" class="max-h-full max-w-full object-contain mix-blend-multiply">
                    </div>
                    <span class="text-[10px] font-bold text-gray-400 text-center leading-tight uppercase tracking-wide">{{ client.name }}</span>
                </div>
            }
        </div>
      } @else {
        <!-- Animated Marquee View for Web -->
        <div class="relative w-full">
            <!-- Gradient Masks -->
            <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <!-- Scrolling Container -->
            <div class="flex overflow-hidden group hover:cursor-grab active:cursor-grabbing">
                <!-- First Set -->
                <div class="flex gap-20 items-start animate-marquee whitespace-nowrap py-4 px-8">
                    @for (client of clients(); track client.name) {
                        <div class="flex flex-col items-center justify-start gap-4 w-48 flex-shrink-0 group/item">
                            <div class="h-24 w-full flex items-center justify-center transition-all duration-300 grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110">
                                <img [src]="client.logo" [alt]="client.name" class="max-h-full max-w-full object-contain mix-blend-multiply">
                            </div>
                            <span class="text-sm font-semibold text-gray-500 whitespace-normal text-center leading-tight group-hover/item:text-brand-teal transition-colors duration-300">{{ client.name }}</span>
                        </div>
                    }
                </div>
                
                <!-- Duplicate Set for Seamless Loop -->
                <div class="flex gap-20 items-start animate-marquee whitespace-nowrap py-4 px-8" aria-hidden="true">
                    @for (client of clients(); track client.name) {
                         <div class="flex flex-col items-center justify-start gap-4 w-48 flex-shrink-0 group/item">
                            <div class="h-24 w-full flex items-center justify-center transition-all duration-300 grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110">
                                <img [src]="client.logo" [alt]="client.name" class="max-h-full max-w-full object-contain mix-blend-multiply">
                            </div>
                            <span class="text-sm font-semibold text-gray-500 whitespace-normal text-center leading-tight group-hover/item:text-brand-teal transition-colors duration-300">{{ client.name }}</span>
                        </div>
                    }
                </div>
            </div>
        </div>
      }
    </section>
  `,
  styles: [`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      animation: marquee 50s linear infinite;
    }
    .group:hover .animate-marquee {
      animation-play-state: paused;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent {
  staticView = input(false);

  clients = signal([
    { name: 'World Bank', logo: 'https://picsum.photos/id/1/200/100' },
    { name: 'World Food Forum Nepal', logo: 'https://picsum.photos/id/2/200/100' },
    { name: 'OMLAS', logo: 'https://picsum.photos/id/3/200/100' },
    { name: 'American Spaces Kathmandu', logo: 'https://picsum.photos/id/4/200/100' },
    { name: 'Illuminate Education Australia', logo: 'https://picsum.photos/id/5/200/100' },
    { name: 'Hult Prize', logo: 'https://picsum.photos/id/6/200/100' },
    { name: 'SxC Jawalakhel', logo: 'https://picsum.photos/id/7/200/100' },
    { name: 'SARC Education Foundation', logo: 'https://picsum.photos/id/8/200/100' },
    { name: 'Canon Secondary School', logo: 'https://picsum.photos/id/9/200/100' },
    { name: 'Rotaract Club of Kathmandu', logo: 'https://picsum.photos/id/10/200/100' },
  ]);
}