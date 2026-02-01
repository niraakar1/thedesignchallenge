import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <aside class="space-y-8">
        <!-- Search -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 class="font-bold text-brand-dark mb-4">Search</h3>
            <div class="relative">
                <input 
                    type="text" 
                    [ngModel]="blogService.searchQuery()"
                    (ngModelChange)="blogService.setSearch($event)"
                    placeholder="Search articles..." 
                    class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-teal text-sm transition-colors"
                >
                <svg class="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
        </div>

        <!-- Featured -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 class="font-bold text-brand-dark mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                Featured
            </h3>
            <div class="space-y-4">
                @for (post of blogService.featuredPosts(); track post.id) {
                    <a [routerLink]="['/blog', post.slug]" class="group flex gap-3 items-start">
                        <div class="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                            <img [src]="post.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-gray-700 leading-tight group-hover:text-brand-teal transition-colors mb-1">{{ post.title }}</h4>
                            <span class="text-xs text-gray-400">{{ post.date | date:'mediumDate' }}</span>
                        </div>
                    </a>
                }
            </div>
        </div>

        <!-- Tags -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 class="font-bold text-brand-dark mb-4">Topics</h3>
            <div class="flex flex-wrap gap-2">
                <button 
                    (click)="blogService.setTag(null)"
                    [class]="'text-xs font-bold px-3 py-1.5 rounded-lg transition-colors border ' + (!blogService.selectedTag() ? 'bg-brand-dark text-white border-brand-dark' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-brand-teal')"
                >
                    All
                </button>
                @for (tag of blogService.allTags(); track tag) {
                    <button 
                        (click)="blogService.setTag(tag)"
                        [class]="'text-xs font-bold px-3 py-1.5 rounded-lg transition-colors border ' + (blogService.selectedTag() === tag ? 'bg-brand-teal text-white border-brand-teal' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-brand-teal')"
                    >
                        {{ tag }}
                    </button>
                }
            </div>
        </div>
    </aside>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogSidebarComponent {
  blogService = inject(BlogService);
}