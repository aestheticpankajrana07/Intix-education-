/* ═══════════════════════════════════
   INTIX EDUCATION — COURSES DATA
═══════════════════════════════════ */

const COURSES = [
  // ── FREE COURSES ──────────────────────────────────────────────
  {
    id: 'ai-basics',
    title: 'AI Basics for Beginners',
    desc: 'Understand artificial intelligence from scratch. No coding required.',
    emoji: '🤖',
    category: 'AI',
    level: 'Beginner',
    lessons: 6,
    duration: '3h 20m',
    isPremium: false,
    tags: ['AI', 'Machine Learning', 'Fundamentals'],
    lessons_data: [
      { title: 'What is Artificial Intelligence?', videoId: 'mJeNghZXtMo', content: 'Artificial Intelligence is the simulation of human intelligence processes by machines. In this lesson, we explore what AI means, its history, and how it\'s transforming industries from healthcare to education. AI systems can learn, reason, and solve problems — capabilities once thought exclusive to humans.' },
      { title: 'Types of AI: Narrow vs General', videoId: 'oV74Najm6Nc', content: 'Understand the difference between Narrow AI (task-specific) and General AI (human-level reasoning). Today\'s AI tools like ChatGPT are narrow AI — incredibly powerful in specific domains but unable to generalize across all human tasks.' },
      { title: 'Machine Learning Fundamentals', videoId: 'GwIo3gDZCVQ', content: 'Machine Learning is the backbone of modern AI. Instead of programming rules explicitly, ML systems learn patterns from data. We cover supervised, unsupervised, and reinforcement learning with real-world examples.' },
      { title: 'Neural Networks Explained Simply', videoId: 'aircAruvnKk', content: 'Neural networks are inspired by the human brain\'s structure. Layers of interconnected "neurons" process information and learn to recognize patterns. This lesson breaks down deep learning without the math complexity.' },
      { title: 'AI in Everyday Life', videoId: 'E_txG2C3Kko', content: 'AI is already embedded in your daily life — from Netflix recommendations to Google Maps routing. Discover the 15+ ways AI silently powers your world and what this means for your future career.' },
      { title: 'Building an AI-First Mindset', videoId: 'OkRen0J5HqI', content: 'The most valuable skill in the next decade isn\'t coding — it\'s knowing how to think with AI. Learn frameworks for human-AI collaboration, prompt thinking, and how to position yourself as an AI-native professional.' }
    ]
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering Fundamentals',
    desc: 'Master the art of communicating with AI systems to get powerful results.',
    emoji: '⚡',
    category: 'AI',
    level: 'Beginner',
    lessons: 5,
    duration: '2h 45m',
    isPremium: false,
    tags: ['Prompt Engineering', 'ChatGPT', 'AI Tools'],
    lessons_data: [
      { title: 'What is Prompt Engineering?', videoId: 'T9aRN5JkmL8', content: 'Prompt engineering is the practice of crafting precise inputs to AI systems to get optimal outputs. It\'s the new programming language of the AI era — no code required, just clear thinking and communication skills.' },
      { title: 'The Anatomy of a Perfect Prompt', videoId: '1bUy-1hGZpI', content: 'Every powerful prompt has 5 components: Role, Context, Task, Format, and Constraints. We break down the RCTFC framework with 20+ examples across different use cases from content creation to data analysis.' },
      { title: 'Zero-Shot vs Few-Shot Prompting', videoId: 'wVzuvf9D9BU', content: 'Discover two fundamental prompting techniques: Zero-shot (asking without examples) and Few-shot (providing examples to guide AI behavior). Learn when to use each technique for maximum effectiveness.' },
      { title: 'Chain of Thought Prompting', videoId: 'BoQ4bQJBLkc', content: 'Complex problems require step-by-step reasoning. Chain-of-thought prompting guides AI to think through problems methodically, dramatically improving accuracy on logic, math, and multi-step tasks.' },
      { title: 'Advanced Prompting Patterns', videoId: '5ef83Wljm-M', content: 'Master advanced techniques: System prompts, role assignment, iterative refinement, and multi-turn strategies. Build your personal prompt library for work, creativity, and business automation.' }
    ]
  },
  {
    id: 'web-dev-basics',
    title: 'Web Development Basics',
    desc: 'Build your first website from scratch using HTML, CSS, and JavaScript.',
    emoji: '🌐',
    category: 'Development',
    level: 'Beginner',
    lessons: 6,
    duration: '4h 10m',
    isPremium: false,
    tags: ['HTML', 'CSS', 'JavaScript', 'Web'],
    lessons_data: [
      { title: 'How the Web Works', videoId: 'hJHvdBlSxug', content: 'Before writing a single line of code, understand how websites reach your browser. We cover DNS, HTTP, servers, clients, and the request-response cycle that powers the internet.' },
      { title: 'HTML — Structure of the Web', videoId: 'qz0aGYrrlhU', content: 'HTML is the skeleton of every webpage. Learn semantic HTML5 tags, document structure, links, images, forms, and accessibility best practices that make your sites discoverable and usable.' },
      { title: 'CSS — Making It Beautiful', videoId: 'yfoY53QXEnI', content: 'CSS transforms plain HTML into stunning visual experiences. Master selectors, the box model, flexbox, grid, animations, and responsive design with real-world projects.' },
      { title: 'JavaScript — Making It Alive', videoId: 'W6NZfCO5SIk', content: 'JavaScript adds behavior and interactivity to your pages. Cover variables, functions, DOM manipulation, events, and fetch API — the four pillars of frontend development.' },
      { title: 'Building Your First Project', videoId: 'G3e-cpL7ofc', content: 'Apply everything by building a personal portfolio website from scratch. We\'ll design it, code it, and deploy it live — your first real project for potential employers and clients.' },
      { title: 'Deploying Your Website for Free', videoId: 'YHcFJu4u9gQ', content: 'Deploy your website to the world for free using Netlify, Vercel, or GitHub Pages. Set up a custom domain, SSL certificate, and automated deployments from your code repository.' }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Fundamentals',
    desc: 'Design beautiful, user-centered digital experiences from scratch.',
    emoji: '🎨',
    category: 'Design',
    level: 'Beginner',
    lessons: 5,
    duration: '3h 30m',
    isPremium: false,
    tags: ['UI Design', 'UX', 'Figma', 'Design'],
    lessons_data: [
      { title: 'Design Thinking Framework', videoId: 'a7sEoEvT8l8', content: 'Design Thinking is a human-centered approach to innovation. The 5-stage process — Empathize, Define, Ideate, Prototype, Test — creates products that people actually love to use.' },
      { title: 'Visual Design Principles', videoId: 'YqQx75OPRa0', content: 'Master the 7 visual design principles: Contrast, Alignment, Repetition, Proximity, Balance, Space, and Hierarchy. These fundamentals are the difference between amateur and professional design.' },
      { title: 'Color Theory & Typography', videoId: 'AvgCkHrcj90', content: 'Color communicates emotion and meaning before words do. Learn color psychology, palette building, contrast ratios for accessibility, and how to pair fonts to create premium visual identities.' },
      { title: 'Figma Fundamentals', videoId: 'FTFaQWZBqQ8', content: 'Figma is the industry-standard design tool. From components and auto-layout to prototyping and collaboration — master the tool used at Apple, Google, and every top design team worldwide.' },
      { title: 'Building Your Design Portfolio', videoId: 'htY1CG9bZcY', content: 'Your portfolio is your most powerful career asset. Learn what makes a compelling design case study, how to structure your portfolio site, and how to position yourself for your first UX role.' }
    ]
  },
  {
    id: 'freelancing',
    title: 'Freelancing Starter Guide',
    desc: 'Start earning online with your skills. Build your freelance career from zero.',
    emoji: '💼',
    category: 'Business',
    level: 'Beginner',
    lessons: 5,
    duration: '2h 55m',
    isPremium: false,
    tags: ['Freelancing', 'Online Income', 'Career'],
    lessons_data: [
      { title: 'The Freelance Mindset', videoId: 'AtgTof9BSCA', content: 'Freelancing is a business — treat it like one. We cover the freedom, responsibility, income potential, and mindset shifts required to thrive as an independent professional in the digital economy.' },
      { title: 'Finding Your Niche & Services', videoId: 'oLpd24DCUQQ', content: 'The riches are in the niches. Learn how to identify your most marketable skills, define your services with precision, and position yourself as a specialist rather than a generalist.' },
      { title: 'Building Your Online Presence', videoId: 'dU1xS07N-FA', content: 'Your online presence is your digital storefront. Set up a portfolio site, LinkedIn profile, and Upwork/Fiverr account that attracts your ideal clients and builds credibility from day one.' },
      { title: 'Getting Your First Client', videoId: 'uYBNIvxlqUc', content: 'The first client is always the hardest. We cover cold outreach templates, proposal writing, pricing your services, and the exact scripts used by top freelancers to land $500+ projects consistently.' },
      { title: 'Scaling to ₹1L+/Month', videoId: 'cdLHqXOEMiA', content: 'Once you have your first clients, learn to scale — raise rates, get referrals, build systems, hire subcontractors, and transition from freelancer to agency owner at your own pace.' }
    ]
  },
  {
    id: 'productivity',
    title: 'Productivity Systems',
    desc: 'Build AI-powered systems to work smarter, not harder.',
    emoji: '⚙️',
    category: 'Productivity',
    level: 'Beginner',
    lessons: 5,
    duration: '2h 20m',
    isPremium: false,
    tags: ['Productivity', 'Systems', 'Automation', 'AI'],
    lessons_data: [
      { title: 'The Second Brain Framework', videoId: 'SjZSy8s2VEE', content: 'Your brain is for thinking, not storing. The Second Brain method — using digital tools to capture, organize, distill, and express information — multiplies your productivity by 10x.' },
      { title: 'Time Blocking with AI', videoId: 'oTugjssqOT0', content: 'Time blocking is the scheduling superpower of high performers. Learn to combine traditional time blocking with AI tools to auto-schedule tasks, protect deep work time, and eliminate decision fatigue.' },
      { title: 'Building Automation Workflows', videoId: '3jy0qQo9oRA', content: 'Automate repetitive tasks with no-code tools like Zapier, Make, and n8n. We build 5 real automation workflows that save 10+ hours per week for freelancers and business owners.' },
      { title: 'AI Tools for Daily Work', videoId: 'sBhFDmDi7Q8', content: 'Curate your personal AI toolkit: ChatGPT for thinking, Notion AI for writing, Perplexity for research, Midjourney for visuals, and 10+ specialized tools that amplify your output.' },
      { title: 'Deep Work in a Distracted World', videoId: 'ZiM3pCFXFk0', content: 'Cal Newport\'s Deep Work philosophy meets modern AI tools. Create an environment for focused, high-value work while using AI to handle the shallow tasks that used to drain your creative energy.' }
    ]
  },
  {
    id: 'content-creation',
    title: 'Content Creation Basics',
    desc: 'Create engaging content that builds audiences and generates income online.',
    emoji: '📱',
    category: 'Marketing',
    level: 'Beginner',
    lessons: 5,
    duration: '3h 05m',
    isPremium: false,
    tags: ['Content', 'Instagram', 'YouTube', 'Creator'],
    lessons_data: [
      { title: 'The Creator Economy in 2025', videoId: 'pLOtEPGWMfk', content: 'The creator economy has crossed $250 billion. Individual creators are building audiences and income streams that rival traditional media companies. Learn where the opportunities are and how to position yourself.' },
      { title: 'Content Strategy Framework', videoId: 'Gz3IB-yNMZM', content: 'Great content starts with strategy, not ideas. Build a content strategy using the 3E Framework: Educate, Entertain, Empower. Learn content pillars, posting cadence, and how to batch-create 30 days of content in 3 hours.' },
      { title: 'Short-Form Video Mastery', videoId: 'tEBLlr4NhxE', content: 'Short-form video (Reels, Shorts, TikTok) is the highest-distribution content format alive. We cover hooks, editing pacing, caption strategy, hashtag systems, and how to make content that gets 1M+ views organically.' },
      { title: 'AI-Powered Content Creation', videoId: 'e82_jsBGCBU', content: 'Use AI to 10x your content output without sacrificing quality. ChatGPT for scripts, Midjourney for thumbnails, ElevenLabs for voiceovers, and CapCut AI for editing — build your AI content studio.' },
      { title: 'Monetizing Your Audience', videoId: 'CPZJL_iEBSY', content: 'Your audience is an asset — learn to monetize it ethically. From brand deals and affiliate marketing to digital products and paid communities, build multiple income streams from your creative work.' }
    ]
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding Essentials',
    desc: 'Build a powerful personal brand that opens doors and creates opportunities.',
    emoji: '✨',
    category: 'Marketing',
    level: 'Beginner',
    lessons: 5,
    duration: '2h 40m',
    isPremium: false,
    tags: ['Personal Brand', 'LinkedIn', 'Online Presence'],
    lessons_data: [
      { title: 'Why Personal Brand Is Your Superpower', videoId: 'smPzTMOkSmY', content: 'In the age of AI and automation, human expertise and authentic reputation are more valuable than ever. Your personal brand is the moat that protects your career and opens doors that CVs cannot.' },
      { title: 'Defining Your Brand Identity', videoId: 'ttxPAsJf4N8', content: 'Brand identity is more than aesthetics — it\'s your unique positioning in the world. Define your niche, values, voice, and target audience using the Brand Compass framework used by top thought leaders.' },
      { title: 'LinkedIn: Your Professional Showcase', videoId: 'yGlKJyVnx2A', content: 'LinkedIn is the highest-ROI professional platform for career growth and client acquisition. Optimize your profile, create content that goes viral, build your network strategically, and attract inbound opportunities.' },
      { title: 'Building in Public', videoId: 'mbA5Xe_y2bY', content: 'The most powerful personal branding strategy is building in public — sharing your journey, learnings, and projects as you create them. Learn the art of vulnerable-but-professional sharing that builds real trust.' },
      { title: 'From Personal Brand to Business', videoId: 'ZsCx1bnfFXQ', content: 'Your personal brand can become the foundation of a real business. Learn how to launch digital products, consulting offers, courses, and communities on the back of an audience that already trusts you.' }
    ]
  },

  // ── NEW FREE COURSES ────────────────────────────────────────
  {
    id: 'generative-ai',
    title: 'Generative AI Basics',
    desc: 'Explore the world of AI that creates — text, images, audio, and video.',
    emoji: '🎭',
    category: 'AI',
    level: 'Beginner',
    lessons: 5,
    duration: '2h 50m',
    isPremium: false,
    tags: ['Generative AI', 'ChatGPT', 'Midjourney', 'AI'],
    lessons_data: [
      { title: 'What is Generative AI?', videoId: 'G2fqAlgmoPo', content: 'Generative AI creates new content — text, images, code, music, and video — from patterns learned in training data. This lesson explains how LLMs, diffusion models, and GANs work at an intuitive level.' },
      { title: 'Large Language Models (LLMs) Explained', videoId: 'osKyvYJ3PRM', content: 'ChatGPT, Claude, Gemini — they\'re all LLMs. Learn how these models work: tokenization, attention mechanisms, and how billions of parameters enable human-like text generation.' },
      { title: 'AI Image Generation', videoId: 'SVcsDDABEkM', content: 'Tools like Midjourney, DALL-E, and Stable Diffusion create stunning images from text. Master prompt crafting for image generation and learn the business applications from product design to marketing.' },
      { title: 'AI Video & Audio Generation', videoId: 'dQw4w9WgXcQ', content: 'AI can now generate realistic video, clone voices, and compose music. Explore tools like Sora, ElevenLabs, Suno, and how creators are using them to produce professional content without large budgets.' },
      { title: 'Ethical Use of Generative AI', videoId: 'keMF8YzQoRM', content: 'With power comes responsibility. Understand copyright, deepfakes, bias in AI systems, and how to use generative AI ethically in your work and content creation.' }
    ]
  },
  {
    id: 'digital-entrepreneurship',
    title: 'Digital Entrepreneurship',
    desc: 'Launch and grow an online business in the AI era.',
    emoji: '🚀',
    category: 'Business',
    level: 'Intermediate',
    lessons: 6,
    duration: '4h 00m',
    isPremium: false,
    tags: ['Entrepreneurship', 'Startup', 'Online Business'],
    lessons_data: [
      { title: 'The Digital Business Landscape', videoId: 'C9SkG7tRa-A', content: 'The internet has democratized entrepreneurship — you can build a $100K/year business from your bedroom with a laptop and internet connection. Explore the landscape of digital business models and find your entry point.' },
      { title: 'Validating Your Business Idea', videoId: 'NZkMtime0bE', content: 'Most businesses fail because they build before they validate. Learn the Lean Startup methodology, how to run cheap experiments, and the 3 signals that prove your idea has real market demand.' },
      { title: 'Building Your MVP in 48 Hours', videoId: 'TCFMacS2J34', content: 'Your Minimum Viable Product doesn\'t need to be perfect — it needs to ship. We cover rapid prototyping with no-code tools, how to gather feedback, and the iteration loop that leads to product-market fit.' },
      { title: 'Digital Marketing for Founders', videoId: '3_wFWcEv3ro', content: 'Growth is the lifeblood of any startup. Master the founder\'s growth playbook: SEO, content marketing, social media, email lists, and paid ads — with emphasis on the channels that give the highest ROI for bootstrapped founders.' },
      { title: 'Revenue Models & Pricing', videoId: '4yRFE3dGS6c', content: 'Choosing the right revenue model determines the ceiling of your business. Compare SaaS subscriptions, one-time products, marketplace models, and service businesses — and learn pricing psychology that maximizes value capture.' },
      { title: 'Scaling Your Digital Business', videoId: 'XbSd_8GEesg', content: 'Once you have revenue, scaling is about systems and leverage. Automate fulfillment, hire your first team members, and build the operational foundation that lets you grow without working more hours.' }
    ]
  },
  {
    id: 'future-careers',
    title: 'Future Careers & AI Skills',
    desc: 'Discover what careers will thrive in the AI era and how to prepare now.',
    emoji: '🔮',
    category: 'Career',
    level: 'Beginner',
    lessons: 5,
    duration: '2h 30m',
    isPremium: false,
    tags: ['Career', 'Future of Work', 'AI Skills'],
    lessons_data: [
      { title: 'Jobs in the AI Era', videoId: 'l9s4U8UHB4I', content: 'AI won\'t replace humans — it will replace humans who don\'t use AI. Analyze which careers are AI-resistant, which are amplified by AI, and which are being automated — and position yourself on the right side.' },
      { title: 'Top 10 Future-Proof Skills', videoId: 'E_txG2C3Kko', content: 'The 10 skills that will be most valuable in 2030: AI collaboration, critical thinking, creativity, data literacy, emotional intelligence, systems design, cross-domain expertise, communication, adaptability, and entrepreneurship.' },
      { title: 'AI Careers in India', videoId: 'FmpDd1YQBEI', content: 'India is becoming the AI talent hub of the world. Explore AI career paths — from ML Engineer and Data Scientist to AI Product Manager and AI Ethics Researcher — with salary ranges and roadmaps for each role.' },
      { title: 'Building a T-Shaped Skill Profile', videoId: 'Px4vHPyRrY8', content: 'The T-shaped professional has deep expertise in one area (the vertical bar) and broad knowledge across many domains (the horizontal bar). Build your personal T-shape that makes you indispensable in the AI age.' },
      { title: 'Creating Your 90-Day Learning Plan', videoId: 'NP2gJzwE8mQ', content: 'Knowledge without action is useless. Build a personalized 90-day learning and implementation plan using the skills from this course, with weekly milestones and accountability systems.' }
    ]
  },
  {
    id: 'social-media-growth',
    title: 'Social Media Growth Basics',
    desc: 'Grow your audience organically on Instagram, YouTube, and LinkedIn.',
    emoji: '📊',
    category: 'Marketing',
    level: 'Beginner',
    lessons: 5,
    duration: '2h 45m',
    isPremium: false,
    tags: ['Instagram', 'YouTube', 'Social Media', 'Growth'],
    lessons_data: [
      { title: 'The Algorithm Decoded', videoId: 'V5RvNJiqWuI', content: 'Every platform\'s algorithm has one goal: keep users engaged. Learn the exact ranking signals for Instagram, YouTube, and LinkedIn — and how to create content that the algorithm rewards with massive distribution.' },
      { title: 'Audience Psychology & Hooks', videoId: 'VqgdqVUlSog', content: 'The first 3 seconds determine whether someone stays or scrolls. Master psychological hooks, pattern interrupts, and the content frameworks that stop the scroll and drive saves, shares, and follows.' },
      { title: 'Instagram Growth Strategy 2025', videoId: 'tEBLlr4NhxE', content: 'Instagram\'s meta is rapidly evolving. Reels are king, carousels drive saves, and Stories build relationships. Learn the 2025 playbook for consistent 1000+ new followers per month without paid ads.' },
      { title: 'YouTube: Building Long-Term Assets', videoId: 'oLpd24DCUQQ', content: 'YouTube videos are assets that compound over time. Unlike Instagram, a great YouTube video can generate traffic for years. Learn SEO, thumbnails, titles, and the video structure that maximizes watch time.' },
      { title: 'Monetizing Social Media', videoId: 'CPZJL_iEBSY', content: 'Turn your following into income through brand partnerships, affiliate marketing, digital products, and platform monetization programs. We review real income reports from creators at the 10K, 50K, and 100K+ follower level.' }
    ]
  },
  {
    id: 'ai-productivity',
    title: 'AI Productivity Systems',
    desc: 'Build AI-powered workflows that save 20+ hours per week.',
    emoji: '🧠',
    category: 'Productivity',
    level: 'Intermediate',
    lessons: 5,
    duration: '3h 00m',
    isPremium: false,
    tags: ['AI Automation', 'Productivity', 'Workflows'],
    lessons_data: [
      { title: 'Mapping Your Workflow for AI', videoId: '3jy0qQo9oRA', content: 'Before automating, you need to understand your current workflow. Map every task you do in a week, classify by complexity and repeatability, and identify the 20% of tasks consuming 80% of your time.' },
      { title: 'ChatGPT as Your AI Assistant', videoId: 'wVzuvf9D9BU', content: 'ChatGPT can handle emails, research, writing, analysis, and planning when you know how to use it properly. We set up your custom GPT workspace with system prompts, memory, and workflow integrations.' },
      { title: 'No-Code Automation with Make & Zapier', videoId: '3_wFWcEv3ro', content: 'Connect your apps and automate workflows without code. Build automations for lead capture, content distribution, email responses, and report generation — saving hours every single week.' },
      { title: 'AI Writing & Research Workflows', videoId: 'sBhFDmDi7Q8', content: 'Writing and research are the biggest time sinks for knowledge workers. Build an AI-enhanced research workflow using Perplexity, ChatGPT, and Notion that produces 10x more output with 50% less effort.' },
      { title: 'Your Personal AI Operating System', videoId: 'ZiM3pCFXFk0', content: 'Bring it all together: build your Personal AI OS — a connected system of tools, automations, and habits that makes you consistently operate at your highest capability level every single day.' }
    ]
  },
  {
    id: 'startup-building',
    title: 'Startup Building Fundamentals',
    desc: 'From idea to first users — the complete startup founding playbook.',
    emoji: '🏗️',
    category: 'Business',
    level: 'Intermediate',
    lessons: 6,
    duration: '3h 45m',
    isPremium: false,
    tags: ['Startup', 'Entrepreneurship', 'Product', 'Funding'],
    lessons_data: [
      { title: 'The Startup Mindset', videoId: 'cMkg3ZFcBgM', content: 'Startups are not small versions of big companies — they\'re experimental vehicles for finding scalable business models. Understand the unique challenges, advantages, and mindset required to build a startup vs. a traditional business.' },
      { title: 'Finding Your Problem & Market', videoId: 'NZkMtime0bE', content: 'Great startups solve real, painful problems for specific people. Use Jobs-to-be-Done theory, customer interviews, and market sizing techniques to find the opportunity worth building.' },
      { title: 'The Business Model Canvas', videoId: 'QoAOzMTLP5s', content: 'The Business Model Canvas is the startup founder\'s one-page business plan. Map your customers, value proposition, channels, revenue, costs, and key partnerships in a framework that can be updated as you learn.' },
      { title: 'Growth Hacking for Startups', videoId: 'AoNmNNkMrh4', content: 'Growth hacking uses creative, low-cost strategies to acquire users rapidly. Study the viral loops, referral programs, community-led growth, and distribution hacks used by Dropbox, Slack, and Airbnb to grow explosively.' },
      { title: 'Fundraising 101', videoId: 'wBpWBRCtbq0', content: 'If you choose to raise funding, understand the landscape: pre-seed, seed, Series A, angels vs. VCs, term sheets, and valuations. Learn when raising money makes sense and when it\'s the wrong move for your business.' },
      { title: 'Building Your First Team', videoId: 'gflmEE53bWE', content: 'Your first 10 hires define your company culture. Learn how to find co-founders, when to hire your first employees, how to structure equity, and the interview frameworks that identify exceptional early-stage talent.' }
    ]
  },

  // ── PREMIUM COURSES ─────────────────────────────────────────
  {
    id: 'advanced-ai-mastery',
    title: 'Advanced AI Tools Mastery',
    desc: 'Master the complete AI tool stack for professional and business applications.',
    emoji: '🔥',
    category: 'AI',
    level: 'Advanced',
    lessons: 8,
    duration: '6h 30m',
    isPremium: true,
    price: 49,
    tags: ['Advanced AI', 'Professional', 'AI Tools'],
    lessons_data: [
      { title: 'Advanced ChatGPT & GPT-4 Techniques', videoId: 'T9aRN5JkmL8', content: 'Go beyond basic prompting. Master system prompts, function calling, custom GPTs, API integration, and the advanced techniques used by AI power users to achieve 100x output with the same models.' },
      { title: 'Claude AI: Advanced Applications', videoId: 'osKyvYJ3PRM', content: 'Claude\'s extended context and analysis capabilities make it uniquely powerful for research, document analysis, and complex reasoning tasks. Master Claude\'s strengths and when to use it over ChatGPT.' },
      { title: 'AI Agents & Autonomous Systems', videoId: 'salY_Sm6mv4', content: 'AI agents can browse the web, write and execute code, manage files, and complete complex multi-step tasks autonomously. Build your first AI agent workflow and understand the future of autonomous AI systems.' },
      { title: 'Midjourney Advanced Techniques', videoId: 'SVcsDDABEkM', content: 'Go from beginner to professional AI artist. Master advanced Midjourney parameters, style references, consistent character generation, and how to build a profitable AI art business or design studio.' },
      { title: 'AI Video Production Workflow', videoId: 'dQw4w9WgXcQ', content: 'Produce professional video content with AI: scripts with ChatGPT, voiceovers with ElevenLabs, B-roll with Runway, thumbnail with Midjourney, and editing with Descript. Full production pipeline, zero crew.' },
      { title: 'AI for Business Analytics', videoId: 'G2fqAlgmoPo', content: 'Use AI to analyze business data, create dashboards, generate insights, and make data-driven decisions. Covers Code Interpreter, data visualization, and building automated reporting systems.' },
      { title: 'Building AI-Powered Products', videoId: 'aircAruvnKk', content: 'Non-technical founders can now build AI-powered products using no-code and low-code tools. Build 3 AI products from scratch: a chatbot, a content tool, and an automation workflow — all without writing code.' },
      { title: 'Monetizing AI Skills in 2025', videoId: 'cdLHqXOEMiA', content: 'The AI skills economy is exploding. Discover 15 ways to monetize your AI expertise: consulting, courses, done-for-you services, AI tools, prompt packs, and building AI-enhanced agencies.' }
    ]
  },
  {
    id: 'fullstack-bootcamp',
    title: 'Full Stack Web Dev Bootcamp',
    desc: 'Complete bootcamp from beginner to professional full-stack developer.',
    emoji: '💻',
    category: 'Development',
    level: 'Advanced',
    lessons: 8,
    duration: '8h 00m',
    isPremium: true,
    price: 49,
    tags: ['Full Stack', 'React', 'Node.js', 'Backend'],
    lessons_data: [
      { title: 'Modern JavaScript (ES6+)', videoId: 'NCwa_xi0Uuc', content: 'Modern JavaScript is the foundation of full-stack development. Master arrow functions, destructuring, promises, async/await, modules, and the ES6+ features used in every professional codebase.' },
      { title: 'React.js Fundamentals', videoId: 'w7ejDZ8SWv8', content: 'React is the world\'s most popular frontend library. Build dynamic UIs with components, hooks (useState, useEffect, useContext), and the unidirectional data flow that makes complex apps manageable.' },
      { title: 'Node.js & Express Backend', videoId: 'ENrzD9HAZK4', content: 'Build fast, scalable backends with Node.js and Express. REST API design, middleware, authentication, and error handling — everything you need to power your frontend with real data.' },
      { title: 'Databases: SQL & NoSQL', videoId: 'p3qvj9hO_Bo', content: 'Every application needs persistent data. Master PostgreSQL for relational data and MongoDB for document storage — understand when to use each, how to design schemas, and how to query efficiently.' },
      { title: 'Authentication & Security', videoId: 'Ud5xKCYQTjM', content: 'Security is non-negotiable. Implement JWT authentication, bcrypt password hashing, OAuth (Google/GitHub login), rate limiting, and the OWASP security practices that protect your users\' data.' },
      { title: 'Deployment & DevOps Basics', videoId: 'YHcFJu4u9gQ', content: 'Get your app to production on Vercel, Railway, or AWS. Set up CI/CD pipelines with GitHub Actions, environment variables, SSL certificates, and domain configuration for your first professional deployment.' },
      { title: 'Building a Full-Stack Project', videoId: 'G3e-cpL7ofc', content: 'Apply everything by building a complete full-stack SaaS application: user auth, dashboard, data management, payment integration, and email notifications — a real project for your portfolio.' },
      { title: 'Career Path as a Developer', videoId: 'qz0aGYrrlhU', content: 'Navigate the developer job market: portfolio strategy, technical interviews, salary negotiation, and the freelance vs. employment decision. Get actionable steps to land your first ₹8L+ developer role.' }
    ]
  },
  {
    id: 'entrepreneurship-masterclass',
    title: 'Digital Entrepreneurship Masterclass',
    desc: 'The complete playbook to build a profitable digital business from zero.',
    emoji: '👑',
    category: 'Business',
    level: 'Advanced',
    lessons: 7,
    duration: '5h 30m',
    isPremium: true,
    price: 49,
    tags: ['Business', 'Monetization', 'Entrepreneurship'],
    lessons_data: [
      { title: 'Digital Business Models Deep Dive', videoId: 'C9SkG7tRa-A', content: 'Not all digital businesses are created equal. Compare SaaS, e-commerce, content businesses, agencies, marketplaces, and info products — with realistic revenue potential, time-to-profitability, and capital requirements for each.' },
      { title: 'Market Research & Validation', videoId: 'NZkMtime0bE', content: 'Validated ideas build successful businesses; unvalidated ideas waste years. Master the complete validation playbook: customer interviews, landing page tests, pre-sales, and the 3 signals that prove real demand exists.' },
      { title: 'Building Digital Products That Sell', videoId: 'XbSd_8GEesg', content: 'Digital products (courses, templates, software, communities) have infinite margins. Learn the product creation process: research, development, pricing, packaging, and launch strategies that generate revenue from day one.' },
      { title: 'Sales & Copywriting Psychology', videoId: '4yRFE3dGS6c', content: 'Copywriting is the highest-leverage skill in digital business. Master the psychology of persuasion: AIDA, PAS, social proof, scarcity, and the email and sales page formulas that convert strangers into paying customers.' },
      { title: 'Paid Advertising for ROI', videoId: '3_wFWcEv3ro', content: 'When organic growth is too slow, paid advertising accelerates everything. Learn Meta Ads, Google Ads, and YouTube Ads — how to structure campaigns, read data, optimize for ROI, and scale what\'s working.' },
      { title: 'Building Systems for Passive Income', videoId: 'TCFMacS2J34', content: 'Passive income is never truly passive — it requires active work upfront to build systems that generate ongoing revenue. Design your income systems: evergreen content, automated funnels, and productized services.' },
      { title: 'The ₹10L/Month Blueprint', videoId: 'AoNmNNkMrh4', content: 'Reverse-engineer a ₹10L/month digital business: what products, how many customers, what price points, what marketing channels, what team structure. Concrete models with real math, not motivational fluff.' }
    ]
  },
  {
    id: 'generative-ai-systems',
    title: 'Generative AI Content Systems',
    desc: 'Build AI content engines that produce high-quality content at scale.',
    emoji: '⚡',
    category: 'AI',
    level: 'Advanced',
    lessons: 6,
    duration: '4h 45m',
    isPremium: true,
    price: 49,
    tags: ['Generative AI', 'Content Systems', 'Automation'],
    lessons_data: [
      { title: 'Content at Scale: The AI Approach', videoId: 'e82_jsBGCBU', content: 'Building a content engine that produces consistent, high-quality output at scale is now possible for solo creators. Map your content system architecture: input → AI processing → quality control → distribution.' },
      { title: 'AI Writing Systems with ChatGPT', videoId: '1bUy-1hGZpI', content: 'Build automated content pipelines using ChatGPT API. Create article generators, social post creators, email writers, and SEO content tools — all powered by AI with your brand voice baked in.' },
      { title: 'Visual Content Automation', videoId: 'SVcsDDABEkM', content: 'Automate your visual content creation: thumbnails, social graphics, product mockups, and marketing materials at scale using Midjourney API, DALL-E, and Canva automation.' },
      { title: 'AI-Powered SEO Content Strategy', videoId: 'GwIo3gDZCVQ', content: 'Use AI to research keywords, analyze competitors, generate content briefs, write articles, and optimize for search engines — building a content moat that drives organic traffic on autopilot.' },
      { title: 'Content Distribution Automation', videoId: 'V5RvNJiqWuI', content: 'Create once, distribute everywhere. Build automated distribution workflows using Zapier and Make to publish content across all platforms simultaneously — with platform-specific formatting for maximum performance.' },
      { title: 'Monetizing AI Content Systems', videoId: 'CPZJL_iEBSY', content: 'Your AI content system is a business asset. Sell it as a service, license the system to clients, or use it to grow an audience you monetize with products and partnerships. Real business models for AI content agencies.' }
    ]
  },
  {
    id: 'ai-automation-mastery',
    title: 'AI Automation & Productivity Mastery',
    desc: 'Build enterprise-grade automation systems using AI and no-code tools.',
    emoji: '🤖',
    category: 'Productivity',
    level: 'Advanced',
    lessons: 7,
    duration: '5h 15m',
    isPremium: true,
    price: 49,
    tags: ['Automation', 'AI', 'No-Code', 'Workflows'],
    lessons_data: [
      { title: 'Automation Architecture Design', videoId: '3jy0qQo9oRA', content: 'Great automation starts with great design. Learn to map business processes, identify automation opportunities, design trigger-action-output flows, and build modular systems that are easy to maintain and scale.' },
      { title: 'Make.com (Integromat) Mastery', videoId: 'oTugjssqOT0', content: 'Make is the most powerful no-code automation platform available. Build complex multi-step workflows with data transformation, error handling, conditional logic, and API integrations that connect your entire business stack.' },
      { title: 'AI Agents with n8n', videoId: 'salY_Sm6mv4', content: 'n8n is the open-source automation powerhouse. Deploy your own automation server, build AI agent workflows, and create self-hosted systems that give you complete data privacy and unlimited customization.' },
      { title: 'CRM & Sales Automation', videoId: 'NZkMtime0bE', content: 'Automate your entire sales process: lead capture, qualification, nurturing, follow-up, proposal generation, and onboarding. Build a CRM automation system that works 24/7 to grow your business.' },
      { title: 'Customer Service Automation', videoId: 'E_txG2C3Kko', content: 'Deploy AI-powered customer service: chatbots, automated email responses, FAQ systems, and escalation workflows. Reduce support load by 70% while improving customer satisfaction scores.' },
      { title: 'Data Collection & Reporting Automation', videoId: 'G2fqAlgmoPo', content: 'Automate data collection from all your business systems, transform it into meaningful insights, and deliver automated reports to stakeholders — building a data-driven decision culture without a data team.' },
      { title: 'Selling Automation as a Service', videoId: 'cdLHqXOEMiA', content: 'Automation expertise is one of the most in-demand and highest-paid digital services today. Package your skills into a retainer service, build an automation agency, and land clients at ₹25K-2L/month pricing.' }
    ]
  }
];

// ── EXAM QUESTIONS DATABASE ──────────────────────────────────
const EXAM_QUESTIONS = {
  'ai-basics': [
    { q: 'What does AI stand for?', opts: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Integration', 'Applied Interface'], ans: 1 },
    { q: 'Which of these is an example of Narrow AI?', opts: ['A robot with human-level consciousness', 'A chess-playing program', 'A fully autonomous scientist', 'A general problem solver'], ans: 1 },
    { q: 'What is Machine Learning primarily about?', opts: ['Programming explicit rules', 'Learning patterns from data', 'Writing code faster', 'Designing hardware'], ans: 1 },
    { q: 'Neural networks are inspired by:', opts: ['Computer chips', 'The human brain', 'Electrical circuits', 'Mathematical formulas'], ans: 1 },
    { q: 'Which technology powers most modern AI chatbots?', opts: ['Expert systems', 'Decision trees', 'Large Language Models', 'Rule-based systems'], ans: 2 },
    { q: 'Supervised learning requires:', opts: ['Labeled training data', 'No data at all', 'Only video data', 'Random input'], ans: 0 },
    { q: 'What is reinforcement learning based on?', opts: ['Labeled datasets', 'Random guessing', 'Rewards and penalties', 'Image recognition'], ans: 2 },
    { q: 'Which is NOT a type of machine learning?', opts: ['Supervised', 'Unsupervised', 'Reinforcement', 'Predetermined'], ans: 3 },
    { q: 'Deep learning uses:', opts: ['Simple algorithms', 'Multiple layers of neural networks', 'Basic statistics', 'Rule-based systems'], ans: 1 },
    { q: 'The term "AI-First Mindset" means:', opts: ['Using AI for everything', 'Replacing humans with AI', 'Thinking about how to collaborate with AI', 'Avoiding AI tools'], ans: 2 }
  ],
  'prompt-engineering': [
    { q: 'What is prompt engineering?', opts: ['Building AI models', 'Crafting inputs to get optimal AI outputs', 'Writing Python code', 'Designing UI for AI'], ans: 1 },
    { q: 'In the RCTFC framework, "C" stands for:', opts: ['Coding', 'Context', 'Command', 'Configuration'], ans: 1 },
    { q: 'Zero-shot prompting means:', opts: ['Providing many examples', 'Asking without examples', 'Using zero tokens', 'Getting no output'], ans: 1 },
    { q: 'Chain-of-thought prompting helps with:', opts: ['Image generation', 'Complex reasoning tasks', 'Video creation', 'Database queries'], ans: 1 },
    { q: 'Few-shot prompting involves:', opts: ['Using few tokens', 'Providing examples to guide AI', 'Limiting AI responses', 'Avoiding prompts'], ans: 1 },
    { q: 'A system prompt is typically used to:', opts: ['End a conversation', 'Set the AI\'s behavior and context', 'Generate images', 'Speed up responses'], ans: 1 },
    { q: 'Iterative refinement means:', opts: ['Using one prompt only', 'Improving prompts based on results', 'Random prompting', 'Deleting prompts'], ans: 1 },
    { q: 'Role assignment in prompting means:', opts: ['Assigning tasks to humans', 'Telling AI to act as a specific persona', 'Creating user roles', 'Managing API keys'], ans: 1 },
    { q: 'What is a prompt library?', opts: ['A software library', 'A collection of effective prompts', 'An AI tool', 'A database'], ans: 1 },
    { q: 'The most important skill in prompt engineering is:', opts: ['Python coding', 'Clear and precise communication', 'Math ability', 'Design skills'], ans: 1 }
  ],
  'web-dev-basics': [
    { q: 'What does HTML stand for?', opts: ['High Text Markup Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'Hyper Transfer Method Language'], ans: 1 },
    { q: 'Which language is used for styling websites?', opts: ['HTML', 'JavaScript', 'CSS', 'Python'], ans: 2 },
    { q: 'JavaScript is primarily used for:', opts: ['Database management', 'Website interactivity', 'Server hardware', 'Network protocols'], ans: 1 },
    { q: 'What does CSS stand for?', opts: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System', 'Coding Style Standards'], ans: 1 },
    { q: 'What is a DOM?', opts: ['Document Object Model', 'Data Object Management', 'Digital Output Mode', 'Dynamic Object Method'], ans: 0 },
    { q: 'Which HTML tag creates a hyperlink?', opts: ['<link>', '<a>', '<href>', '<url>'], ans: 1 },
    { q: 'What is Flexbox used for in CSS?', opts: ['Typography', 'Layout and alignment', 'Colors', 'Animations only'], ans: 1 },
    { q: 'What does API stand for?', opts: ['Application Programming Interface', 'Automated Program Integration', 'Advanced Protocol Interface', 'Applied Programming Index'], ans: 0 },
    { q: 'Netlify is used for:', opts: ['Database storage', 'Website deployment', 'Video hosting', 'Email sending'], ans: 1 },
    { q: 'Responsive design means:', opts: ['Fast loading websites', 'Websites that work on all screen sizes', 'Websites with responses', 'AI-powered websites'], ans: 1 }
  ],
  'ui-ux-design': [
    { q: 'What does UX stand for?', opts: ['User Experience', 'Universal Exchange', 'Unified Extension', 'User Execution'], ans: 0 },
    { q: 'Design Thinking has how many stages?', opts: ['3', '4', '5', '6'], ans: 2 },
    { q: 'Which is NOT a visual design principle?', opts: ['Contrast', 'Alignment', 'Bandwidth', 'Balance'], ans: 2 },
    { q: 'Figma is primarily used for:', opts: ['Coding websites', 'UI/UX design', 'Database design', 'Video editing'], ans: 1 },
    { q: 'A wireframe is:', opts: ['A final design', 'A basic layout blueprint', 'A color scheme', 'A font system'], ans: 1 },
    { q: 'Color contrast is important for:', opts: ['Aesthetics only', 'Accessibility and readability', 'SEO', 'Loading speed'], ans: 1 },
    { q: 'The "E" in Empathize (Design Thinking) means:', opts: ['Edit user data', 'Understand users\' needs and feelings', 'Email users', 'Execute designs'], ans: 1 },
    { q: 'A prototype is:', opts: ['A final product', 'An interactive model for testing', 'A server component', 'A design tool'], ans: 1 },
    { q: 'Typography pairing means:', opts: ['Using one font only', 'Combining fonts that complement each other', 'Avoiding bold text', 'Using system fonts'], ans: 1 },
    { q: 'User testing involves:', opts: ['Testing code bugs', 'Observing real users interacting with a design', 'Testing server performance', 'Internal team reviews only'], ans: 1 }
  ]
};

// Default questions for courses without specific questions
function getExamQuestions(courseId) {
  if (EXAM_QUESTIONS[courseId]) return EXAM_QUESTIONS[courseId];
  const course = COURSES.find(c => c.id === courseId);
  const defaultQ = [
    { q: `What is the main focus of ${course?.title || 'this course'}?`, opts: ['Entertainment', 'Learning and skill development', 'Social networking', 'Gaming'], ans: 1 },
    { q: 'What is the recommended approach when learning a new skill?', opts: ['Skip basics', 'Practice consistently', 'Learn only theory', 'Avoid challenges'], ans: 1 },
    { q: 'Which mindset is most important for growth?', opts: ['Fixed mindset', 'Avoidant mindset', 'Growth mindset', 'Defensive mindset'], ans: 2 },
    { q: 'What does "iterative learning" mean?', opts: ['Learning once and stopping', 'Continuously improving through feedback loops', 'Memorizing facts', 'Random learning'], ans: 1 },
    { q: 'The best way to apply new knowledge is:', opts: ['Reading more books', 'Practical projects and real application', 'Watching videos only', 'Taking notes only'], ans: 1 },
    { q: 'What makes a skill "future-proof"?', opts: ['It requires no practice', 'It cannot be automated easily and requires human judgment', 'It is easy to learn', 'It requires no updates'], ans: 1 },
    { q: 'Personal branding in the digital age is about:', opts: ['Having many followers', 'Building authentic expertise and reputation', 'Posting frequently', 'Spending on ads'], ans: 1 },
    { q: 'The most valuable resource for learning in 2025 is:', opts: ['Expensive degrees only', 'A combination of AI tools, online resources, and practice', 'Traditional textbooks', 'Classroom lectures only'], ans: 1 },
    { q: 'What does "lifelong learning" mean?', opts: ['Studying in school forever', 'Continuously acquiring new skills throughout life', 'Never finishing education', 'Learning one subject deeply'], ans: 1 },
    { q: 'Which is the best metric for measuring learning success?', opts: ['Hours spent studying', 'Certificates earned', 'Real-world application and results', 'Test scores only'], ans: 2 }
  ];
  return defaultQ;
}
