import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { MissionComponent } from './pages/mission.component';
import { ProgramsComponent } from './pages/programs.component';
import { ImpactComponent } from './pages/impact.component';
import { AssetsComponent } from './pages/assets.component';
import { ProposalComponent } from './pages/proposal.component';
import { BlogListComponent } from './pages/blog-list.component';
import { BlogPostComponent } from './pages/blog-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'impact', component: ImpactComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogPostComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'proposal', component: ProposalComponent },
  { path: '**', redirectTo: '' }
];