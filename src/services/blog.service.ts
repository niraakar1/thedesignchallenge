import { Injectable, signal, computed, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BLOG_POSTS } from '../data/blog-data';
import { BlogPost } from '../models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  // State
  private posts = signal<BlogPost[]>(BLOG_POSTS);
  searchQuery = signal<string>('');
  selectedTag = signal<string | null>(null);

  // Computed
  filteredPosts = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const tag = this.selectedTag();

    return this.posts().filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(query) || 
                            post.excerpt.toLowerCase().includes(query);
      const matchesTag = tag ? post.tags.includes(tag) : true;
      return matchesSearch && matchesTag;
    });
  });

  allTags = computed(() => {
    const tags = new Set<string>();
    this.posts().forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  });

  featuredPosts = computed(() => {
    return this.posts().filter(p => p.featured).slice(0, 3);
  });

  latestPosts = computed(() => {
    // Sort by date desc
    return [...this.posts()]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  });

  // Actions
  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts().find(p => p.slug === slug);
  }

  setSearch(query: string) {
    this.searchQuery.set(query);
  }

  setTag(tag: string | null) {
    this.selectedTag.set(tag);
  }

  // SEO Management
  updateMetadata(config: { title: string; description: string; image?: string; slug?: string }) {
    // Update Title
    const fullTitle = `${config.title} | Design Challenge`;
    this.titleService.setTitle(fullTitle);

    // Update Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    
    // Open Graph / Social
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    if (config.image) {
      this.metaService.updateTag({ property: 'og:image', content: config.image });
    }
    this.metaService.updateTag({ property: 'og:url', content: `https://designchallenge.superscholar.io/#/blog${config.slug ? '/' + config.slug : ''}` });
    this.metaService.updateTag({ property: 'og:type', content: config.slug ? 'article' : 'website' });
  }
}