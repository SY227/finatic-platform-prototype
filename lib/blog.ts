export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: string;
  intro: string[];
  keyTakeaways: string[];
  sections: BlogSection[];
};

// Add future posts by appending another object to BLOG_POSTS.
// Required fields are enforced by the BlogPost type above.
const BLOG_POSTS: BlogPost[] = [
  {
    slug: "72-hour-money-reset",
    title: "The 72-Hour Money Reset: A Practical Plan to Feel in Control Again",
    excerpt:
      "If your finances feel messy, this 3-day reset helps you stop spiraling, get clear on priorities, and build momentum with realistic next steps.",
    category: "Money Basics",
    publishedAt: "2026-03-17",
    readTime: "8 min read",
    author: "Finatic Editorial Team",
    intro: [
      "Most people are not bad with money. They are overloaded, tired, and trying to make decisions in the middle of life happening at full speed.",
      "When that happens, finances feel like background anxiety: you know you should do something, but you are not sure where to start, so you avoid it. Then the stress grows.",
      "The fix is not a perfect budget spreadsheet. The fix is a short reset that gives you clarity, breathing room, and one clear move at a time. This is that reset.",
    ],
    keyTakeaways: [
      "You can reduce money stress fast by focusing on cash flow first, not complicated optimization.",
      "A simple 72-hour sequence creates immediate control and sets up long-term progress.",
      "Small systems (autopay, weekly check-ins, one spending rule) beat motivation every time.",
    ],
    sections: [
      {
        heading: "Hour 1: Get honest data — not perfect data",
        paragraphs: [
          "Open your checking account, credit cards, and any loan balances. Write down what is true right now: current balances, bills due in the next 14 days, and your next paycheck date.",
          "Do not try to solve everything in this step. Your only job is to replace financial fog with financial facts.",
        ],
        bullets: [
          "Current checking balance",
          "Total minimum debt payments due this month",
          "Rent/mortgage, utilities, insurance, and transport costs",
          "Paycheck amount and date",
        ],
      },
      {
        heading: "Hour 24: Build a two-week survival budget",
        paragraphs: [
          "Forget monthly perfection for a moment. Start with the next two weeks. Cover essentials first, then debt minimums, then everything else.",
          "This short planning window lowers overwhelm and immediately tells you whether you have a gap, a break-even plan, or extra room to deploy.",
        ],
        bullets: [
          "Prioritize: housing, food, utilities, transportation, medications",
          "Set hard caps for flexible categories like eating out and impulse shopping",
          "If numbers are tight, pause low-priority subscriptions today",
        ],
      },
      {
        heading: "Hour 36: Prevent one common setback",
        paragraphs: [
          "Most plans fail because one surprise expense knocks everything off course. Choose one likely setback and pre-handle it now.",
          "If groceries usually run over, set a weekly cash transfer limit. If late fees keep happening, move due dates or enable autopay for minimums.",
        ],
      },
      {
        heading: "Hour 48: Choose your single primary goal",
        paragraphs: [
          "Trying to tackle five money goals at once creates friction and guilt. Pick one primary goal for the next 90 days: debt payoff, emergency cushion, or spending control.",
          "Your primary goal gets your extra dollars and attention. Other goals stay in maintenance mode until this phase is complete.",
        ],
      },
      {
        heading: "Hour 60: Turn intent into automatic behavior",
        paragraphs: [
          "Automation is where stress drops. Set up one recurring transfer or payment that supports your primary goal. Even a modest amount creates consistency.",
          "People think they need bigger income first. Usually, they need fewer manual decisions first.",
        ],
      },
      {
        heading: "Hour 72: Create a 15-minute weekly money rhythm",
        paragraphs: [
          "Schedule one weekly check-in. Same day, same time. Review what changed, what is due next, and one move for the coming week.",
          "This is how you stay out of panic mode: frequent, lightweight check-ins instead of occasional financial emergencies.",
        ],
        bullets: [
          "Review account balances",
          "Check upcoming bills and subscriptions",
          "Make one adjustment (cut, transfer, or extra payment)",
          "Log one win to reinforce progress",
        ],
      },
      {
        heading: "What to do if you feel behind",
        paragraphs: [
          "Feeling behind is common, especially if you are recovering from debt, income volatility, or life disruptions. Feeling behind is not a strategy problem — it is usually a sequence problem.",
          "Start with the next right move, not the whole mountain. Progress compounds faster than guilt.",
        ],
      },
      {
        heading: "Final word",
        paragraphs: [
          "Financial confidence does not come from knowing every finance term. It comes from seeing yourself follow through on a plan that fits your real life.",
          "If you do this 72-hour reset this week, you will not have solved every money problem. But you will have something more valuable: traction.",
        ],
      },
    ],
  },
];

export function getAllBlogPosts() {
  return [...BLOG_POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRecentBlogPosts(limit = 3) {
  return getAllBlogPosts().slice(0, limit);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
