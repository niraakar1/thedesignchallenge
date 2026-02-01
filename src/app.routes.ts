import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { MissionComponent } from './pages/mission.component';
import { ProgramsComponent } from './pages/programs.component';
import { ImpactComponent } from './pages/impact.component';
import { AssetsComponent } from './pages/assets.component';
import { ProposalComponent } from './pages/proposal.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'impact', component: ImpactComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'proposal', component: ProposalComponent },
  { path: '**', redirectTo: '' }
];