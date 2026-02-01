import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../services/blog.service';
import { BlogCardComponent } from '../components/blog/blog-card.component';
import { BlogSidebarComponent } from '../components/blog/blog-sidebar.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, BlogCardComponent, BlogSidebarComponent],
  template: `
    <div class="min-h-screen bg-gray-50 pt-32 pb-24">
       <!-- Hero / Header -->
       <div class="max-w-7xl mx-auto px-6 md:px-12 mb-12">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <p class="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-4">Insights & Stories</p>
                <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">The Innovation Blog</h1>
                <p class="text-gray-500 text-lg">
                    Explore the latest thinking on design, education, and social impact.
                </p>
            </div>
       </div>

       <div class="max-w-7xl mx-auto px-6 md:px-12">
           <div class="grid lg:grid-cols-12 gap-12">
               
               <!-- Main Content Grid -->
               <div class="lg:col-span-8">
                    @if (blogService.filteredPosts().length === 0) {
                        <div class="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed">
                            <div class="text-gray-300 mb-4">
                                <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-700">No articles found</h3>
                            <p class="text-gray-500">Try adjusting your search or filter.</p>
                            <button (click)="reset()" class="mt-4 text-brand-teal font-bold hover:underline">Clear Filters</button>
                        </div>
                    } @else {
                        <div class="grid md:grid-cols-2 gap-8">
                            @for (post of blogService.filteredPosts(); track post.id) {
                                <app-blog-card [post]="post" />
                            }
                        </div>
                    }
               </div>

               <!-- Sidebar -->
               <div class="lg:col-span-4">
                    <div class="sticky top-32">
                        <app-blog-sidebar />
                    </div>
               </div>

           </div>
       </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent implements OnInit {
  blogService = inject(BlogService);

  ngOnInit() {
    this.blogService.updateMetadata({
        title: 'Blog',
        description: 'Read the latest insights on Design Thinking, Student Agency, and Innovation in Education from the Design Challenge team.'
    });
  }

  reset() {
      this.blogService.setSearch('');
      this.blogService.setTag(null);
  }
}