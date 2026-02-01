import { Component, ChangeDetectionStrategy, inject, signal, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../models/blog.interface';
import { BlogSidebarComponent } from '../components/blog/blog-sidebar.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink, BlogSidebarComponent],
  template: `
    <div class="min-h-screen bg-gray-50 pt-32 pb-24">
        @if (post()) {
            <!-- Hero Image -->
            <div class="max-w-7xl mx-auto px-6 md:px-12 mb-12">
                <div class="aspect-video md:aspect-[2.5/1] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                    <img [src]="post()!.image" [alt]="post()!.title" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                        <div class="flex gap-3 mb-4">
                            @for(tag of post()!.tags; track tag) {
                                <span class="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider shadow-sm">{{ tag }}</span>
                            }
                        </div>
                        <h1 class="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">{{ post()!.title }}</h1>
                        <div class="flex items-center gap-4 text-sm md:text-base text-gray-200 font-medium">
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                                </div>
                                {{ post()!.author }}
                            </div>
                            <span>•</span>
                            <span>{{ post()!.date | date:'longDate' }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-6 md:px-12">
                <div class="grid lg:grid-cols-12 gap-12">
                    
                    <!-- Main Content -->
                    <div class="lg:col-span-8">
                        <article class="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
                             <!-- Dynamic HTML Content -->
                             <div class="prose prose-lg prose-headings:text-brand-dark prose-a:text-brand-teal hover:prose-a:text-brand-dark prose-img:rounded-xl max-w-none text-gray-600 leading-relaxed" 
                                  [innerHTML]="post()!.content">
                             </div>

                             <!-- Share / Tags Footer -->
                             <div class="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div class="flex items-center gap-2 text-sm font-bold text-gray-500">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>
                                    Tags: 
                                    <span class="text-brand-teal">{{ post()!.tags.join(', ') }}</span>
                                </div>
                                <div class="flex gap-4">
                                    <button class="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors">Share on LinkedIn</button>
                                    <button class="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors">Copy Link</button>
                                </div>
                             </div>
                        </article>

                        <!-- Navigation -->
                        <div class="mt-12 flex justify-between">
                            <a routerLink="/blog" class="flex items-center gap-2 text-brand-dark font-bold hover:text-brand-teal transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                                Back to Blog
                            </a>
                        </div>
                    </div>

                    <!-- Sidebar -->
                    <div class="lg:col-span-4">
                        <div class="sticky top-32">
                            <app-blog-sidebar />
                        </div>
                    </div>
                </div>
            </div>

        } @else {
            <!-- Not Found State -->
            <div class="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
                <h2 class="text-4xl font-extrabold text-brand-dark mb-4">Article Not Found</h2>
                <p class="text-gray-500 mb-8 max-w-md">The article you are looking for might have been removed or the link is incorrect.</p>
                <a routerLink="/blog" class="bg-brand-teal text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-colors">Back to Blog</a>
            </div>
        }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  
  post = signal<BlogPost | undefined>(undefined);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const foundPost = this.blogService.getPostBySlug(slug);
        this.post.set(foundPost);
        
        if (foundPost) {
            // Update SEO Metadata
            this.blogService.updateMetadata({
                title: foundPost.title,
                description: foundPost.excerpt,
                image: foundPost.image,
                slug: foundPost.slug
            });
            // Scroll to top
            window.scrollTo(0, 0);
        }
      }
    });
  }
}