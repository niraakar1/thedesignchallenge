import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { ChallengeComponent } from '../components/challenge.component';
import { StructureComponent } from '../components/structure.component';
import { VariantsComponent } from '../components/variants.component';
import { OutcomesComponent } from '../components/outcomes.component';
import { FacilitatorComponent } from '../components/facilitator.component';
import { ClientsComponent } from '../components/clients.component';
import { TestimonialsComponent } from '../components/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ChallengeComponent,
    StructureComponent,
    VariantsComponent,
    OutcomesComponent,
    FacilitatorComponent,
    ClientsComponent,
    TestimonialsComponent
  ],
  template: `
    <app-hero />
    <app-clients />
    <app-challenge />
    <app-structure />
    <app-variants />
    <app-outcomes />
    <app-testimonials />
    <app-facilitator />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}