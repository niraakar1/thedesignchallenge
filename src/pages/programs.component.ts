import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

type Level = 'Middle School' | 'High School' | 'College/University' | 'Organizations';

interface ProgramDetail {
  name: string;
  duration: string;
  description: string;
  tags: string[];
  colorClass: string;
  icon?: string;
}

interface LevelData {
  id: Level;
  title: string;
  subtitle: string;
  focus: string;
  programs: ProgramDetail[];
}

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen bg-gray-50 pt-32 pb-24 relative overflow-hidden">
       
       <!-- Background Elements -->
       <div class="absolute top-0 left-0 w-full h-96 bg-brand-teal rounded-b-[4rem] z-0"></div>
       <div class="absolute top-40 right-10 w-64 h-64 bg-brand-lightTeal opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>

       <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <!-- Header -->
          <div class="text-center mb-16 text-white">
            <h1 class="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Our Programs</h1>
            <p class="text-teal-100 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Tailored learning experiences designed to meet students and teams exactly where they are in their innovation journey.
            </p>
          </div>

          <!-- Level Selector / Tabs -->
          <div class="flex flex-wrap justify-center gap-4 mb-16">
            @for (level of levels; track level.id) {
              <button 
                (click)="selectedLevel.set(level.id)"
                [class]="'px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-lg ' + 
                (selectedLevel() === level.id 
                  ? 'bg-brand-orange text-white scale-105 ring-4 ring-orange-200' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:-translate-y-1')">
                {{ level.id }}
              </button>
            }
          </div>

          <!-- Active Content -->
          <div class="animate-float-in">
             
             <!-- Level Focus Banner -->
             <div class="bg-white rounded-3xl p-8 md:p-10 shadow-xl mb-12 border-l-8 border-brand-teal relative overflow-hidden">
                <div class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-0"></div>
                <div class="relative z-10">
                   <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-2">{{ currentData().title }}</h2>
                   <p class="text-gray-400 font-bold uppercase text-xs tracking-widest mb-4">{{ currentData().subtitle }}</p>
                   <div class="flex items-start gap-3">
                      <div class="mt-1 text-brand-orange">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                      </div>
                      <p class="text-lg md:text-xl text-gray-600 italic">
                        "{{ currentData().focus }}"
                      </p>
                   </div>
                </div>
             </div>

             <!-- Program Cards Grid -->
             <div class="grid md:grid-cols-2 gap-8">
                @for (prog of currentData().programs; track prog.name) {
                  <div class="bg-white rounded-[2rem] p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group">
                    
                    <div class="flex justify-between items-start mb-6">
                        <div [class]="'w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform ' + prog.colorClass">
                           <!-- Dynamic Icons based on program name approx -->
                           @if (prog.name.includes('Spark')) {
                             <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                           } @else if (prog.name.includes('Explorer')) {
                             <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                           } @else if (prog.name.includes('Innovator')) {
                             <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                           } @else {
                             <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                           }
                        </div>
                        <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">{{ prog.duration }}</span>
                    </div>

                    <h3 class="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-teal transition-colors">{{ prog.name }}</h3>
                    
                    <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
                      {{ prog.description }}
                    </p>

                    <div class="flex flex-wrap gap-2 mt-auto">
                      @for (tag of prog.tags; track tag) {
                        <span class="text-[10px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 px-2 py-1 rounded-md">{{ tag }}</span>
                      }
                    </div>
                  </div>
                }
             </div>

          </div>

       </div>
    </section>
  `,
  styles: [`
    @keyframes float-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-float-in {
      animation: float-in 0.5s ease-out forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgramsComponent {
  selectedLevel = signal<Level>('Middle School');

  levels: LevelData[] = [
    {
      id: 'Middle School',
      title: 'Middle School (Years 5–8)',
      subtitle: 'Ignition',
      focus: 'Igniting curiosity and fostering early agency.',
      programs: [
        {
          name: 'The Spark',
          duration: '90 Minutes',
          description: 'A high-energy introduction to the “How Might We?” framework. Students learn to see challenges in their immediate community not as obstacles, but as opportunities for innovation.',
          colorClass: 'bg-brand-orange',
          tags: ['How Might We?', 'Community', 'Opportunity']
        },
        {
          name: 'The Explorer',
          duration: '1 Day',
          description: 'Students identify local issues they are passionate about and apply empathy and ideation. Working in teams of 3–5, they leverage collective intelligence to brainstorm diverse solutions.',
          colorClass: 'bg-brand-lightTeal',
          tags: ['Empathy', 'Collective Intelligence', 'Brainstorming']
        },
        {
          name: 'The Innovator',
          duration: '2 Days',
          description: 'A "sandpit" for iterative prototyping where students move from ideas to physical or digital mock-ups. Emphasizes “flearning”—learning from failure in a safe environment.',
          colorClass: 'bg-brand-dark',
          tags: ['Prototyping', 'Flearning', 'Mock-ups']
        },
        {
          name: 'The Changemaker',
          duration: '3 Days',
          description: 'Students develop a social enterprise model and learn basic financial terms like costs and revenue. Culminates in a “milestone moment” celebration where they share projects with the school.',
          colorClass: 'bg-yellow-500',
          tags: ['Social Enterprise', 'Finance Basics', 'Presentation']
        }
      ]
    },
    {
      id: 'High School',
      title: 'High School (Years 9–12)',
      subtitle: 'Resilience',
      focus: 'Developing resilience, career readiness, and real-world execution.',
      programs: [
        {
          name: 'The Spark',
          duration: '90 Minutes',
          description: 'An intensive sprint focused on reframing problems as opportunities. Students learn to approach daunting global issues, like climate change, with a proactive and resilient mindset.',
          colorClass: 'bg-brand-orange',
          tags: ['Reframing', 'Global Issues', 'Proactive Mindset']
        },
        {
          name: 'The Explorer',
          duration: '1 Day',
          description: 'A deep dive into problem definition, where students conduct research to understand root causes. Builds critical thinking and collaborative skills essential for the future workforce.',
          colorClass: 'bg-brand-lightTeal',
          tags: ['Problem Definition', 'Root Cause Analysis', 'Critical Thinking']
        },
        {
          name: 'The Innovator',
          duration: '2 Days',
          description: 'Using the Javelin Board, students identify and test their riskiest assumptions. They engage in “in-the-moment learning,” gaining knowledge to pivot based on real-world feedback.',
          colorClass: 'bg-brand-dark',
          tags: ['Javelin Board', 'Assumptions', 'Pivot']
        },
        {
          name: 'The Changemaker',
          duration: '3 Days',
          description: 'A comprehensive execution phase involving project and risk management. Students prepare a pitch deck and present their validated solutions to industry mentors for professional feedback.',
          colorClass: 'bg-yellow-500',
          tags: ['Pitch Deck', 'Risk Management', 'Industry Mentors']
        }
      ]
    },
    {
      id: 'College/University',
      title: 'College and University',
      subtitle: 'Validation',
      focus: 'Advanced validation, systemic impact, and entrepreneurial pathways.',
      programs: [
        {
          name: 'The Spark',
          duration: '90 Minutes',
          description: 'Focuses on agility and rapid ideation, preparing tertiary students to navigate uncertain career landscapes.',
          colorClass: 'bg-brand-orange',
          tags: ['Agility', 'Rapid Ideation', 'Career Navigation']
        },
        {
          name: 'The Explorer',
          duration: '1 Day',
          description: 'Students apply human-centered design to complex societal challenges. They utilize stakeholder analysis to understand the broader ecosystem surrounding their chosen impact area.',
          colorClass: 'bg-brand-lightTeal',
          tags: ['Complex Challenges', 'Stakeholder Analysis', 'Ecosystem']
        },
        {
          name: 'The Innovator',
          duration: '2 Days',
          description: 'An incubator-style (YINC) experience focused on solution-market fit. Participants use lean startup methodologies to validate their social enterprise ideas with potential users.',
          colorClass: 'bg-brand-dark',
          tags: ['Incubator', 'Lean Startup', 'Market Fit']
        },
        {
          name: 'The Changemaker',
          duration: '3 Days',
          description: 'Prepares students for intrapreneurship—applying an innovation mindset within existing organizations. Students capture Natural Evidence of Learning (NEoL) to build digital resumes.',
          colorClass: 'bg-yellow-500',
          tags: ['Intrapreneurship', 'Digital Resume', 'NEoL']
        }
      ]
    },
    {
      id: 'Organizations',
      title: 'Organizations (Corporate, NGO, Gov)',
      subtitle: 'Transformation',
      focus: 'Innovation culture, sustainability transformation, and intrapreneurship.',
      programs: [
        {
          name: 'The Spark',
          duration: '90 Minutes',
          description: 'A codesign workshop to identify internal “pain points” and spark an innovative culture within the team.',
          colorClass: 'bg-brand-orange',
          tags: ['Codesign', 'Culture', 'Pain Points']
        },
        {
          name: 'The Explorer',
          duration: '1 Day',
          description: 'Teams use strength-based collaboration to solve specific organizational or community challenges. Introduces intrapreneurial skills to enhance productivity and forward-thinking.',
          colorClass: 'bg-brand-lightTeal',
          tags: ['Strength-based', 'Productivity', 'Collaboration']
        },
        {
          name: 'The Innovator',
          duration: '2 Days',
          description: 'An intensive focus on validation and de-risking. Teams test new internal systems or social impact initiatives through iterative prototyping and stakeholder feedback.',
          colorClass: 'bg-brand-dark',
          tags: ['De-risking', 'Internal Systems', 'Feedback']
        },
        {
          name: 'The Changemaker',
          duration: '3 Days',
          description: 'Focuses on sustainability transformation aligned with the UN SDGs. Participants develop an impact measurement plan and a narrative to advocate for systemic change.',
          colorClass: 'bg-yellow-500',
          tags: ['UN SDGs', 'Impact Measurement', 'Systemic Change']
        }
      ]
    }
  ];

  currentData = computed(() => {
    return this.levels.find(l => l.id === this.selectedLevel()) || this.levels[0];
  });
}