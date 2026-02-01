import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../../models/blog.interface';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
      <!-- Image -->
      <a [routerLink]="['/blog', post().slug]" class="relative h-48 overflow-hidden block">
        <img [src]="post().image" [alt]="post().title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
        <div class="absolute top-4 left-4 flex gap-2">
            @for(tag of post().tags.slice(0, 2); track tag) {
                <span class="bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">{{ tag }}</span>
            }
        </div>
      </a>

      <!-- Content -->
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">
             <span>{{ post().date | date:'mediumDate' }}</span>
             <span>•</span>
             <span>{{ post().author }}</span>
        </div>

        <h3 class="text-xl font-bold text-brand-dark mb-3 leading-tight group-hover:text-brand-teal transition-colors">
            <a [routerLink]="['/blog', post().slug]">{{ post().title }}</a>
        </h3>

        <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
            {{ post().excerpt }}
        </p>

        <a [routerLink]="['/blog', post().slug]" class="text-brand-orange font-bold text-sm flex items-center gap-2 mt-auto group/link">
            Read Article
            <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogCardComponent {
  post = input.required<BlogPost>();
}