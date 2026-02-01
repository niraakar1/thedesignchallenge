import { BlogPost } from '../models/blog.interface';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '12',
    slug: 'style-guide-formatting-showcase',
    title: 'Style Guide: Formatting Capabilities Showcase',
    excerpt: 'A demonstration of all supported content formatting options available in our blog engine, from typography to media embeds.',
    author: 'Admin',
    date: '2024-03-01',
    image: 'https://picsum.photos/id/6/800/400',
    tags: ['Style Guide', 'Formatting', 'System'],
    content: `
      <p class="lead text-xl text-gray-500 mb-8">This post serves as a living style guide to demonstrate the visual capabilities of the Design Challenge blog platform. Below are examples of all supported HTML elements and custom components.</p>

      <hr class="my-8 border-gray-200">

      <h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">Typography & Text formatting</h2>
      <p class="mb-4">We support standard text formatting. <strong>Bold text</strong> is used for emphasis, while <em>italics</em> can denote titles or foreign words. You can also use <u class="decoration-brand-teal decoration-2 underline-offset-2">underlines</u> and <del>strikethroughs</del>.</p>
      <p class="mb-4">Inline code looks like <code>const design = 'thinking';</code> and is useful for technical terms.</p>

      <h3 class="text-xl font-bold text-brand-dark mt-6 mb-3">Headings</h3>
      <p>We use H2 for major sections and H3/H4 for subsections. They are automatically styled with the brand colors.</p>

      <h4 class="text-lg font-bold text-brand-dark mt-4 mb-2">This is an H4 Heading</h4>
      <p>Used for minor subsections.</p>

      <hr class="my-8 border-gray-200">

      <h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">Lists</h2>
      
      <h3 class="font-bold text-lg mb-2">Unordered List</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 marker:text-brand-teal">
        <li>Phase 1: Empathise with the user.</li>
        <li>Phase 2: Define the core problem.</li>
        <li>Phase 3: Ideate solutions.
            <ul class="list-circle pl-6 mt-2 space-y-1 text-gray-500">
                <li>Brainstorming</li>
                <li>Crazy 8s</li>
                <li>SCAMPER</li>
            </ul>
        </li>
      </ul>

      <h3 class="font-bold text-lg mb-2">Ordered List</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6 marker:text-brand-orange marker:font-bold">
        <li><strong>Preparation:</strong> Gather materials and team.</li>
        <li><strong>Execution:</strong> Run the workshop.</li>
        <li><strong>Reflection:</strong> Analyze outcomes.</li>
      </ol>

      <hr class="my-8 border-gray-200">

      <h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">Media & Embeds</h2>
      
      <figure class="my-8">
        <img src="https://picsum.photos/id/48/800/500" class="rounded-xl shadow-lg w-full" alt="Architecture">
        <figcaption class="text-center text-sm text-gray-500 mt-2 italic">Fig 1.1: Innovation requires structure.</figcaption>
      </figure>

      <div class="grid grid-cols-2 gap-4 my-8">
         <img src="https://picsum.photos/id/119/400/300" class="rounded-lg shadow-md hover:scale-105 transition-transform" alt="Grid 1">
         <img src="https://picsum.photos/id/180/400/300" class="rounded-lg shadow-md hover:scale-105 transition-transform" alt="Grid 2">
      </div>

      <hr class="my-8 border-gray-200">

      <h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">Quotes & Callouts</h2>
      
      <blockquote class="text-2xl font-serif italic text-gray-600 border-l-8 border-brand-orange pl-6 my-8 py-2 bg-gray-50 rounded-r-lg">
        "Creativity is intelligence having fun."
        <footer class="text-sm font-sans not-italic text-brand-dark font-bold mt-2">— Albert Einstein</footer>
      </blockquote>

      <div class="bg-teal-50 border-l-4 border-brand-teal p-6 my-6 rounded-r-lg">
        <h4 class="font-bold text-brand-teal mb-1 flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Key Insight
        </h4>
        <p class="text-teal-800 text-sm">This is a custom alert box used to highlight critical information or takeaways from a case study.</p>
      </div>

      <div class="bg-orange-50 border-l-4 border-brand-orange p-6 my-6 rounded-r-lg">
        <h4 class="font-bold text-brand-orange mb-1 flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            Challenge
        </h4>
        <p class="text-orange-800 text-sm">Use this style to denote obstacles or design constraints encountered during the process.</p>
      </div>

      <hr class="my-8 border-gray-200">

      <h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">Code & Technical Data</h2>
      
      <pre class="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-6 text-sm font-mono shadow-inner"><code>// Sample TypeScript Interface
interface Innovation {
  id: number;
  problem: string;
  solution: string;
  impact: 'High' | 'Medium' | 'Low';
}

const launch = () => {
  console.log('Liftoff!');
}</code></pre>

      <div class="overflow-x-auto my-8">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-100 border-b-2 border-gray-200">
                    <th class="p-4 font-bold text-brand-dark">Stage</th>
                    <th class="p-4 font-bold text-brand-dark">Goal</th>
                    <th class="p-4 font-bold text-brand-dark">Outcome</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="p-4">Discovery</td>
                    <td class="p-4">Understand the landscape</td>
                    <td class="p-4">Research Report</td>
                </tr>
                <tr class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="p-4">Alpha</td>
                    <td class="p-4">Test hypotheses</td>
                    <td class="p-4">Prototype A/B</td>
                </tr>
                <tr class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="p-4">Beta</td>
                    <td class="p-4">Validate at scale</td>
                    <td class="p-4">MVP Launch</td>
                </tr>
            </tbody>
        </table>
      </div>
    `
  },
  {
    id: '1',
    slug: 'power-of-empathy-in-education',
    title: 'The Power of Empathy: Why It’s the First Step in Innovation',
    excerpt: 'Before we can solve problems, we must understand people. Discover why empathy is the cornerstone of the Design Challenge.',
    author: 'Ajay Yadav',
    date: '2023-10-15',
    image: 'https://picsum.photos/id/1015/800/400',
    tags: ['Empathy', 'Methodology', 'Education'],
    featured: true,
    content: `
      <p class="text-xl font-light leading-relaxed mb-6">"If there is any one secret of success, it lies in the ability to get the other person's point of view and see things from that person's angle as well as from your own." – Henry Ford</p>
      
      <p class="mb-4">In traditional education, we are often taught to rush to the answer. 2 + 2 = 4. The capital of Nepal is Kathmandu. But in the world of innovation, the "answer" is rarely obvious, and the "problem" is often misunderstood.</p>
      
      <h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">The Empathy Map</h2>
      <p class="mb-4">We use a tool called the Empathy Map to help students step out of their own shoes. It asks four simple but profound questions about the user:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Says:</strong> What are they speaking aloud?</li>
        <li><strong>Thinks:</strong> What is occupying their mind?</li>
        <li><strong>Does:</strong> What actions do they take?</li>
        <li><strong>Feels:</strong> What is their emotional state?</li>
      </ul>
      
      <div class="bg-teal-50 border-l-4 border-brand-teal p-6 my-8">
        <h3 class="font-bold text-brand-teal mb-2">Case in Point</h3>
        <p>Students in Pokhara realized that while installing trash cans (the solution) seemed obvious, the community wasn't using them because they were placed in areas considered "sacred" or "clean." By empathizing, they moved the bins to high-traffic "transition" zones, increasing usage by 400%.</p>
      </div>
      
      <p>Empathy isn't just a soft skill; it's a strategic advantage.</p>
    `
  },
  {
    id: '2',
    slug: 'flearning-failing-forward',
    title: 'Flearning: Why We Celebrate Failure',
    excerpt: 'Failure is not the opposite of success; it’s part of success. How we teach resilience through the concept of "Flearning".',
    author: 'Abbal Dhakal',
    date: '2023-10-22',
    image: 'https://picsum.photos/id/1025/800/400',
    tags: ['Resilience', 'Mindset', 'Growth'],
    featured: true,
    content: `
      <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
        <div>
           <p class="mb-4 text-lg">We have a rule in our workshops: <strong>Fail Fast, Fail Often, Fail Cheap.</strong></p>
           <p class="mb-4">The stigma around failure in academic settings is paralyzing. Students are terrified of getting the "wrong" answer. In the Design Challenge, we rebrand failure as "Flearning"—Failing leads to Learning.</p>
        </div>
        <div class="bg-brand-orange text-white p-8 rounded-2xl shadow-lg transform rotate-2">
            <h3 class="text-2xl font-hand font-bold mb-2">The Javelin Board</h3>
            <p>Our primary tool for testing assumptions. If an experiment fails, we don't scrap the project; we simply pivot the strategy.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">The Marshmallow Challenge</h2>
      <p class="mb-4">We often run the famous Marshmallow Challenge. Interestingly, kindergarteners consistently outperform MBA students. Why? Because MBA students spend time planning the perfect structure, while kids <em>build, fail, and rebuild</em> instantly.</p>
      
      <p>Innovation requires the courage to be wrong.</p>
    `
  },
  {
    id: '3',
    slug: 'student-agency-voice-choice',
    title: 'Student Agency: Giving Voice and Choice',
    excerpt: 'When students own their learning journey, engagement skyrockets. Here is how we foster agency.',
    author: 'Design Challenge Team',
    date: '2023-11-05',
    image: 'https://picsum.photos/id/1005/800/400',
    tags: ['Student Agency', 'Pedagogy'],
    content: `
      <p class="mb-6">Student agency is defined as the capacity to set a goal, reflect and act responsibly to effect change. It is about acting rather than being acted upon.</p>
      
      <h3 class="text-xl font-bold text-brand-dark mb-3">The Spectrum of Agency</h3>
      <div class="space-y-4 mb-8">
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">1</div>
            <div><strong class="block text-gray-700">Passive:</strong> Teacher dictates everything.</div>
        </div>
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center font-bold text-brand-orange">2</div>
            <div><strong class="block text-gray-700">Active:</strong> Student participates in pre-set tasks.</div>
        </div>
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center font-bold text-brand-teal">3</div>
            <div><strong class="block text-gray-700">Driven:</strong> Student co-designs the learning path.</div>
        </div>
      </div>
      
      <p>Our workshops operate strictly at Level 3. We provide the framework (Design Thinking), but the students choose the problem, the solution, and the method of execution.</p>
    `
  },
  {
    id: '4',
    slug: 'design-thinking-for-educators',
    title: '5 Ways Educators Can Use Design Thinking Tomorrow',
    excerpt: 'You don’t need a workshop to start. Here are practical tips for teachers to bring innovation into the classroom.',
    author: 'Ajay Yadav',
    date: '2023-11-12',
    image: 'https://picsum.photos/id/1/800/400',
    tags: ['Tips', 'Education', 'Teachers'],
    content: `
      <p class="mb-6">Teachers are natural designers. Every day, you design lesson plans, classroom layouts, and engagement strategies. Here is how to make it intentional.</p>
      
      <ol class="list-decimal pl-6 space-y-4 marker:text-brand-orange marker:font-bold">
        <li>
            <strong>Start with "How Might We":</strong> Instead of saying "Students are distracted," ask "How might we re-design the classroom to encourage focus?"
        </li>
        <li>
            <strong>Feedback Fridays:</strong> Ask students to prototype the next week's lesson plan with you.
        </li>
        <li>
            <strong>Shadow a Student:</strong> Spend one period observing not as a teacher, but as a learner. Empathy changes perspective.
        </li>
        <li>
            <strong>The "Yes, And" Rule:</strong> During brainstorming, ban the word "but". Replace it with "Yes, and..." to build on ideas.
        </li>
        <li>
            <strong>Visual Thinking:</strong> Encourage drawing out concepts. Visuals process 60,000x faster than text.
        </li>
      </ol>
    `
  },
  {
    id: '5',
    slug: 'sisneri-case-study',
    title: 'Case Study: The Water Project at Sisneri',
    excerpt: 'A deep dive into how rural students solved a critical water access issue using simple prototypes.',
    author: 'Abbal Dhakal',
    date: '2023-11-20',
    image: 'https://picsum.photos/id/10/800/400',
    tags: ['Case Study', 'Impact', 'Rural'],
    featured: true,
    content: `
      <blockquote class="text-2xl font-serif italic text-gray-500 border-l-8 border-brand-teal pl-6 my-8">
        "We didn't know we were engineers until we fixed the pipe." – Student, Grade 8
      </blockquote>

      <h3 class="font-bold text-lg mb-2">The Problem</h3>
      <p class="mb-4">The upper campus of Shree Sisneri Secondary School lacked consistent water flow for sanitation. The municipal supply was irregular.</p>

      <h3 class="font-bold text-lg mb-2">The Insight</h3>
      <p class="mb-4">Students realized that water was available, but it was being wasted during the night when the tanks overflowed.</p>

      <h3 class="font-bold text-lg mb-2">The Solution</h3>
      <p class="mb-4">Using bamboo and discarded plastic bottles, students prototyped an automated shut-off valve and a rainwater harvesting funnel. They tested three variations before implementing a PVC version that saved 500 liters a day.</p>
      
      <div class="relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden mt-8">
         <img src="https://picsum.photos/id/16/800/400" class="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" alt="Students working">
         <div class="absolute bottom-0 left-0 bg-black/50 text-white text-xs px-2 py-1">Field Photo</div>
      </div>
    `
  },
  {
    id: '6',
    slug: 'top-innovation-tools',
    title: 'Top 5 Digital Tools for Student Innovators',
    excerpt: 'Equipping the toolset. We review the best free apps for prototyping and collaboration.',
    author: 'Design Challenge Team',
    date: '2023-12-01',
    image: 'https://picsum.photos/id/180/800/400',
    tags: ['Tools', 'Technology'],
    content: `
      <p class="mb-6">While Design Thinking is a mindset, the right toolset accelerates the process. Here are our favorites:</p>
      
      <div class="grid gap-4">
        <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h4 class="font-bold text-brand-teal">1. Miro</h4>
            <p class="text-sm">The infinite whiteboard. Perfect for remote brainstorming and empathy mapping.</p>
        </div>
        <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h4 class="font-bold text-brand-teal">2. Canva</h4>
            <p class="text-sm">For rapid prototyping of marketing materials and pitch decks.</p>
        </div>
        <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h4 class="font-bold text-brand-teal">3. Trello</h4>
            <p class="text-sm">Teaches project management and the Kanban method effectively.</p>
        </div>
         <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h4 class="font-bold text-brand-teal">4. Typeform</h4>
            <p class="text-sm">Essential for user research and gathering feedback data.</p>
        </div>
      </div>
    `
  },
  {
    id: '7',
    slug: 'bridging-the-gap',
    title: 'Bridging the Gap: Academic vs. Real World',
    excerpt: 'Why "textbook smart" isn\'t enough anymore, and how we bridge the divide.',
    author: 'Ajay Yadav',
    date: '2023-12-10',
    image: 'https://picsum.photos/id/20/800/400',
    tags: ['Education', 'Future'],
    content: `
      <p class="first-letter:text-5xl first-letter:font-bold first-letter:text-brand-orange first-letter:mr-3 first-letter:float-left">
      The gap is widening. Employers consistently report that graduates lack "soft skills"—creativity, collaboration, and adaptability. Yet, schools are pressured to focus on standardized testing.</p>
      
      <p class="mb-4">We act as the bridge. Our programs are not extracurricular; they are co-curricular. We take the theoretical knowledge (Science, Math) and give it a context (Climate Change, Engineering).</p>
      
      <p class="font-bold">The Equation:</p>
      <div class="bg-gray-900 text-white p-6 rounded-xl font-mono text-center my-6">
        Content Knowledge + Design Thinking Context = Real World Impact
      </div>
    `
  },
  {
    id: '8',
    slug: 'sdgs-and-innovation',
    title: 'Aligning Innovation with the SDGs',
    excerpt: 'How we use the UN Sustainable Development Goals to frame local challenges.',
    author: 'Abbal Dhakal',
    date: '2023-12-15',
    image: 'https://picsum.photos/id/24/800/400',
    tags: ['SDGs', 'Global Goals', 'Impact'],
    content: `
       <p class="mb-4">Innovation needs direction. Without it, we just create gadgets. The UN Sustainable Development Goals (SDGs) provide the north star for our workshops.</p>
       
       <h3 class="text-xl font-bold mb-2">Popular SDGs in our Workshops:</h3>
       <div class="flex flex-wrap gap-4 my-6">
          <span class="bg-red-500 text-white px-4 py-2 font-bold rounded">1. No Poverty</span>
          <span class="bg-yellow-400 text-white px-4 py-2 font-bold rounded">4. Quality Education</span>
          <span class="bg-blue-400 text-white px-4 py-2 font-bold rounded">6. Clean Water</span>
          <span class="bg-green-500 text-white px-4 py-2 font-bold rounded">13. Climate Action</span>
       </div>
       
       <p>When a student realizes their local water project contributes to Global Goal #6, their sense of purpose expands beyond the classroom walls.</p>
    `
  },
  {
    id: '9',
    slug: 'future-of-work-2030',
    title: 'The Future of Work: 2030 Outlook',
    excerpt: '65% of primary school students will work in jobs that don’t exist yet. Are they ready?',
    author: 'Design Challenge Team',
    date: '2024-01-05',
    image: 'https://picsum.photos/id/3/800/400',
    tags: ['Future', 'Career'],
    content: `
      <p class="mb-4">Automation is replacing routine cognitive tasks. What remains? Complex problem solving.</p>
      
      <h3 class="text-lg font-bold text-brand-dark mb-4">The World Economic Forum's Top Skills for 2025:</h3>
      <ul class="space-y-2 mb-6">
        <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            Analytical thinking and innovation
        </li>
        <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            Active learning strategies
        </li>
        <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            Complex problem-solving
        </li>
        <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            Critical thinking and analysis
        </li>
      </ul>
      <p>Notice a pattern? These are exactly the skills honed during a Design Challenge sprint.</p>
    `
  },
  {
    id: '10',
    slug: 'intrapreneurship-in-schools',
    title: 'Intrapreneurship: Innovation from Within',
    excerpt: 'You don’t have to start a company to be an entrepreneur. Teaching students to innovate within systems.',
    author: 'Ajay Yadav',
    date: '2024-01-12',
    image: 'https://picsum.photos/id/60/800/400',
    tags: ['Entrepreneurship', 'Systems'],
    content: `
      <p class="mb-4">Entrepreneurship is starting a business. <strong>Intrapreneurship</strong> is acting like an entrepreneur within an established organization.</p>
      <p class="mb-4">Schools are perfect grounds for this. Students can:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Redesign the cafeteria flow.</li>
        <li>Create a peer-tutoring system.</li>
        <li>Optimize energy usage in the building.</li>
      </ul>
      <p class="mt-4">We encourage students to look at their own school not as a building they visit, but as an organization they can improve.</p>
    `
  },
  {
    id: '11',
    slug: 'platform-capabilities-spotlight',
    title: 'Platform Feature Spotlight: Tools for the Modern Educator',
    excerpt: 'Explore the digital capabilities of our platform, from generating instant proposals to creating viral outreach assets.',
    author: 'Design Challenge Team',
    date: '2024-02-14',
    image: 'https://picsum.photos/id/180/800/400',
    tags: ['Platform', 'Features', 'Tools'],
    featured: true,
    content: `
      <p class="mb-6">The Design Challenge isn't just a workshop; it's a comprehensive digital ecosystem designed to support facilitators, schools, and students. Today, we are spotlighting the powerful tools built directly into our platform.</p>

      <h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">1. The Interactive Design Cycle</h2>
      <p class="mb-4">Innovation isn't linear. Our <strong>Interactive Structure</strong> visualization allows students to explore the non-linear nature of Design Thinking. By clicking through the cycle—Empathise, Define, Ideate, Prototype, Test—learners see how testing often leads back to redefining the problem, creating a loop of continuous improvement.</p>
      <div class="bg-gray-100 p-4 rounded-xl border-l-4 border-brand-lightTeal mb-6 text-sm">
         <span class="font-bold">Try it out:</span> Visit the Home page and click "Explore the Interactive Cycle".
      </div>

      <h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">2. The Proposal Generator</h2>
      <p class="mb-4">Speed is key. Our <strong>Custom Proposal Generator</strong> allows facilitators to create tailored PDF-ready proposals in seconds.</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Dynamic Pricing:</strong> Automatically calculates fees based on the scope (Spark vs. Changemaker) and audience level.</li>
        <li><strong>Smart Content:</strong> Injects specific methodology details relevant to the selected module.</li>
        <li><strong>Email Generator:</strong> Instantly drafts "Warm" or "Cold" outreach emails to accompany the proposal.</li>
      </ul>

      <h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Instagram Designer & Asset Hub</h2>
      <p class="mb-4">Storytelling matters. The <strong>Asset Creator</strong> empowers teams to generate on-brand social media posts instantly.</p>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
         <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 class="font-bold text-brand-orange mb-2">Smart Highlights</h4>
            <p class="text-xs">Type a quote, select keywords, and watch them automatically highlight in our brand colors.</p>
         </div>
         <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 class="font-bold text-brand-orange mb-2">Style Variations</h4>
            <p class="text-xs">Switch between 5 distinct visual styles (Minimalist, Collage, Bold, etc.) with a single click.</p>
         </div>
      </div>
      
      <p>These tools reduce administrative friction, allowing us to focus on what matters most: empowering students.</p>
    `
  }
];