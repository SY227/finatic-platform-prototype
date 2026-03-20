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
  updatedAt: string;
  readTime: string;
  author: string;
  authorRole: string;
  primaryKeyword: string;
  readerPromise: string;
  framework: string;
  intro: string[];
  keyTakeaways: string[];
  sections: BlogSection[];
  relatedToolHref: string;
  relatedToolText: string;
  relatedGuideHref: string;
  relatedGuideText: string;
  siblingPostHref: string;
  siblingPostText: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "72-hour-money-reset",
    title: "The 72-Hour Money Reset: A Practical Plan to Feel in Control Again",
    excerpt:
      "If your finances feel messy, this 3-day reset helps you stop spiraling, get clear on priorities, and build momentum with realistic next steps.",
    category: "Money Basics",
    publishedAt: "2026-03-17",
    updatedAt: "2026-03-19",
    readTime: "8 min read",
    author: "Finatic Editorial Team",
    authorRole: "Personal finance educators",
    primaryKeyword: "72-hour money reset",
    readerPromise: "In three days, you'll move from financial fog to a workable weekly plan.",
    framework: "Reset sequence: reality check -> short budget -> one primary goal -> weekly rhythm",
    intro: [
      "Most people are not bad with money. They are overloaded, tired, and trying to make decisions in the middle of life happening at full speed.",
      "When that happens, finances feel like background anxiety: you know you should do something, but you are not sure where to start, so you avoid it. Then the stress grows.",
    ],
    keyTakeaways: [
      "You can reduce money stress fast by focusing on cash flow first.",
      "A simple 72-hour sequence creates immediate control and momentum.",
      "Small systems beat motivation spikes every time.",
    ],
    sections: [
      {
        heading: "Day 1: Get honest data, not perfect data",
        paragraphs: [
          "Open checking, credit cards, and debt balances. List what's due in the next 14 days and your next paycheck date.",
          "Your job is to replace uncertainty with facts. This step alone lowers stress because your brain stops guessing worst-case scenarios.",
        ],
      },
      {
        heading: "Day 2: Build a two-week plan",
        paragraphs: [
          "Forget monthly perfection for now. Make a two-week spending plan: essentials, minimum debt payments, then everything else.",
          "If numbers are tight, cut low-priority spend immediately and protect housing, food, transportation, and medication first.",
        ],
        bullets: [
          "Set one spending cap for flexible categories",
          "Pause at least one low-value subscription",
          "Schedule due-date reminders today",
        ],
      },
      {
        heading: "Day 3: Choose one primary target",
        paragraphs: [
          "Pick one focus for the next 30 to 90 days: debt payoff, starter emergency fund, or spending stability.",
          "Trying to optimize everything at once is usually what causes people to quit. One target creates cleaner decisions.",
        ],
      },
      {
        heading: "Set a 15-minute weekly money routine",
        paragraphs: [
          "Pick one weekly check-in time. Review balances, upcoming bills, and one adjustment for next week.",
          "That rhythm is the difference between reacting to money problems and managing them early.",
        ],
      },
    ],
    relatedToolHref: "/tools/budget-planner",
    relatedToolText: "Use the free monthly budget planner",
    relatedGuideHref: "/guides/debt-payoff-guide",
    relatedGuideText: "Read the debt payoff guide",
    siblingPostHref: "/blog/how-to-stop-starting-over-with-your-money",
    siblingPostText: "How to stop starting over with your money",
  },
  {
    slug: "how-to-make-a-budget-when-you-hate-budgeting",
    title: "How to Make a Budget When You Hate Budgeting",
    excerpt:
      "A low-friction approach for people who avoid budgeting but still want more control over cash flow.",
    category: "Budgeting",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    readTime: "9 min read",
    author: "Maya Chen",
    authorRole: "Fintech content editor",
    primaryKeyword: "how to make a budget when you hate budgeting",
    readerPromise: "You'll get a simple, realistic budget method that doesn't feel like punishment.",
    framework: "3-bucket budget: must-pay, must-keep, flexible",
    intro: [
      "If budgeting feels restrictive, you're not broken. Most people were handed a system that was too detailed for real life.",
      "A good budget should reduce decisions, not create more of them.",
    ],
    keyTakeaways: [
      "Start with three buckets, not twenty categories.",
      "Use caps and guardrails instead of perfect tracking.",
      "Review weekly and adjust quickly instead of scrapping the whole plan.",
    ],
    sections: [
      {
        heading: "Use a 3-bucket budget",
        paragraphs: [
          "Bucket 1 is fixed essentials (rent, utilities, insurance). Bucket 2 is goals (debt, savings). Bucket 3 is flexible life spending.",
          "This format protects priorities without requiring detailed line-item accounting.",
        ],
      },
      {
        heading: "Make your plan survivable",
        paragraphs: [
          "Set realistic numbers based on what you've actually spent in the last 30 to 60 days.",
          "If your budget assumes perfect behavior, you'll likely abandon it after one rough week.",
        ],
      },
      {
        heading: "Common failure pattern",
        paragraphs: [
          "People overspend one category, feel like they failed, then abandon the whole plan.",
          "Better move: cap the damage, rebalance one category, and continue.",
        ],
      },
    ],
    relatedToolHref: "/tools/budget-planner",
    relatedToolText: "Run your numbers in the budget planner",
    relatedGuideHref: "/guides/emergency-fund",
    relatedGuideText: "Build your emergency fund alongside your budget",
    siblingPostHref: "/blog/why-your-budget-keeps-failing",
    siblingPostText: "Why your budget keeps failing",
  },
  {
    slug: "starter-emergency-fund-how-much-is-enough",
    title: "Starter Emergency Fund: How Much Is Enough?",
    excerpt:
      "How to set a realistic first emergency fund target without stalling debt payoff or bill stability.",
    category: "Emergency Fund",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    readTime: "8 min read",
    author: "Finatic Editorial Team",
    authorRole: "Personal finance educators",
    primaryKeyword: "starter emergency fund how much",
    readerPromise: "You'll leave with a practical emergency fund target for your current stage.",
    framework: "3-stage emergency fund: starter -> stabilizer -> resilience",
    intro: [
      "Most people get stuck because they hear wildly different emergency fund targets and assume they are doing it wrong.",
      "A better approach is staged: build a starter cushion first, then increase as your cash flow stabilizes.",
    ],
    keyTakeaways: [
      "A starter fund is about shock absorption, not perfection.",
      "Your first target should reflect bill volatility and job risk.",
      "Rebuild quickly after withdrawals to protect momentum.",
    ],
    sections: [
      {
        heading: "Start with a stage-based target",
        paragraphs: [
          "Stage 1 is a starter buffer designed to absorb common surprises like car repairs or urgent travel.",
          "Stage 2 grows toward one month of core expenses. Stage 3 expands as income and stability improve.",
        ],
      },
      {
        heading: "How to choose your first number",
        paragraphs: [
          "If your income is stable and debt is high-interest, a smaller starter fund may be reasonable while you still prioritize debt reduction.",
          "If income is volatile, your starter target should be larger because cash flow shocks happen more often.",
        ],
      },
    ],
    relatedToolHref: "/tools/budget-planner",
    relatedToolText: "Use the budget planner to estimate core monthly expenses",
    relatedGuideHref: "/guides/emergency-fund",
    relatedGuideText: "Read the emergency fund guide",
    siblingPostHref: "/blog/the-simplest-weekly-money-routine",
    siblingPostText: "The simplest weekly money routine",
  },
  {
    slug: "debt-snowball-vs-avalanche-for-real-people",
    title: "Debt Snowball vs Avalanche for Real People",
    excerpt:
      "The right debt payoff method depends on your behavior pattern, not just interest math.",
    category: "Debt Payoff",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    readTime: "10 min read",
    author: "Maya Chen",
    authorRole: "Fintech content editor",
    primaryKeyword: "debt snowball vs avalanche",
    readerPromise: "You'll choose a payoff method you can stick with long enough to win.",
    framework: "Math-first vs momentum-first decision model",
    intro: [
      "Snowball and avalanche both work. The better method is the one you can sustain through stressful months.",
    ],
    keyTakeaways: [
      "Avalanche usually saves more interest over time.",
      "Snowball often gives faster motivation through early wins.",
      "Consistency beats a theoretically perfect strategy you abandon.",
    ],
    sections: [
      {
        heading: "When avalanche is usually best",
        paragraphs: [
          "If you're analytical, stable, and motivated by long-term savings, avalanche often fits.",
          "You target the highest APR debt first while paying minimums on the rest.",
        ],
      },
      {
        heading: "When snowball is usually best",
        paragraphs: [
          "If motivation drops quickly or you need visible progress, snowball can outperform in real life.",
          "Closing small balances early creates proof that your plan is working.",
        ],
      },
      {
        heading: "Hybrid approach",
        paragraphs: [
          "Some people close one small balance first, then switch to avalanche for the remaining debts.",
          "That can combine momentum and interest efficiency.",
        ],
      },
    ],
    relatedToolHref: "/tools/debt-payoff-calculator",
    relatedToolText: "Model your payoff timeline in the debt calculator",
    relatedGuideHref: "/guides/debt-payoff-guide",
    relatedGuideText: "Read the full debt payoff guide",
    siblingPostHref: "/blog/72-hour-money-reset",
    siblingPostText: "The 72-hour money reset",
  },
  {
    slug: "what-to-do-when-your-paycheck-is-already-spoken-for",
    title: "What to Do When Your Paycheck Is Already Spoken For",
    excerpt:
      "A triage approach for months when your income is fully committed before the month even begins.",
    category: "Cash Flow",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    readTime: "8 min read",
    author: "Finatic Editorial Team",
    authorRole: "Personal finance educators",
    primaryKeyword: "paycheck already spoken for",
    readerPromise: "You'll learn how to stabilize cash flow when every dollar already has a job.",
    framework: "Cash flow triage: protect essentials -> stop leakage -> sequence bills",
    intro: ["Feeling behind isn't failure. Usually it's a sequencing problem in your cash flow."],
    keyTakeaways: [
      "Protect essentials first before any optimization.",
      "Sequence due dates against paycheck timing.",
      "Create one immediate margin source, even if small.",
    ],
    sections: [
      {
        heading: "Step 1: Protect non-negotiables",
        paragraphs: [
          "Keep housing, utilities, food, transportation, and medication in the protected category.",
          "Everything else is adjustable until cash flow stabilizes.",
        ],
      },
      {
        heading: "Step 2: Stop leakage for 30 days",
        paragraphs: [
          "Pause low-value recurring charges and default purchases that bypass your priorities.",
          "One temporary reset month can free breathing room quickly.",
        ],
      },
    ],
    relatedToolHref: "/tools/budget-planner",
    relatedToolText: "Run a triage budget in the planner",
    relatedGuideHref: "/guides/emergency-fund",
    relatedGuideText: "Use emergency fund basics to reduce future cash shocks",
    siblingPostHref: "/blog/how-to-stop-starting-over-with-your-money",
    siblingPostText: "How to stop starting over with your money",
  },
  {
    slug: "how-to-stop-starting-over-with-your-money",
    title: "How to Stop Starting Over With Your Money",
    excerpt:
      "Build a repeatable money system so one bad week doesn't reset all your progress.",
    category: "Money Habits",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    readTime: "8 min read",
    author: "Maya Chen",
    authorRole: "Fintech content editor",
    primaryKeyword: "how to stop starting over with money",
    readerPromise: "You'll replace stop-and-start cycles with a system you can return to quickly.",
    framework: "Reset protocol: baseline plan -> trigger list -> restart steps",
    intro: ["Most people don't fail because they lack knowledge. They fail because they don't have a restart protocol."],
    keyTakeaways: [
      "Create a minimum viable plan for hard weeks.",
      "Use trigger-based adjustments instead of emotional resets.",
      "Recovery speed matters more than perfection.",
    ],
    sections: [
      {
        heading: "Build your baseline",
        paragraphs: [
          "Your baseline is the smallest plan that keeps bills current and momentum alive.",
          "It's your fallback when life gets chaotic.",
        ],
      },
      {
        heading: "Use a restart checklist",
        paragraphs: [
          "When you drift, run the same short checklist: review balances, sequence next bills, make one transfer, choose one focus.",
          "Consistency comes from repeatable process, not willpower.",
        ],
      },
    ],
    relatedToolHref: "/tools/budget-planner",
    relatedToolText: "Use the planner to rebuild your baseline budget",
    relatedGuideHref: "/guides/debt-payoff-guide",
    relatedGuideText: "If debt stress is the trigger, start with this payoff guide",
    siblingPostHref: "/blog/the-simplest-weekly-money-routine",
    siblingPostText: "The simplest weekly money routine",
  },
  {
    slug: "how-to-budget-on-an-irregular-income",
    title: "How to Budget on an Irregular Income",
    excerpt:
      "A practical way to budget when paychecks vary month to month.",
    category: "Budgeting",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    readTime: "9 min read",
    author: "Finatic Editorial Team",
    authorRole: "Personal finance educators",
    primaryKeyword: "how to budget on irregular income",
    readerPromise: "You'll learn a stable budgeting method for variable-income months.",
    framework: "Low-month budget + buffer tiers + income smoothing",
    intro: ["Variable income doesn't require complicated spreadsheets. It requires a conservative baseline and disciplined sequencing."],
    keyTakeaways: [
      "Budget from your low-income month, not your best month.",
      "Separate true essentials from optional spending quickly.",
      "Use surplus months to smooth future volatility.",
    ],
    sections: [
      {
        heading: "Set a low-month baseline",
        paragraphs: [
          "Pick a conservative monthly income number based on your lower recent months.",
          "Build your core budget from that number so you can survive slower periods.",
        ],
      },
      {
        heading: "Create a holding bucket",
        paragraphs: [
          "When income is higher, hold part of the surplus to fund lower months.",
          "This reduces panic decisions and keeps your priorities stable.",
        ],
      },
    ],
    relatedToolHref: "/tools/budget-planner",
    relatedToolText: "Stress-test variable income with the budget planner",
    relatedGuideHref: "/guides/emergency-fund",
    relatedGuideText: "Use emergency fund stages to absorb irregular months",
    siblingPostHref: "/blog/what-to-do-when-your-paycheck-is-already-spoken-for",
    siblingPostText: "What to do when your paycheck is already spoken for",
  },
  {
    slug: "the-simplest-weekly-money-routine",
    title: "The Simplest Weekly Money Routine",
    excerpt:
      "A 15-minute weekly routine that helps you stay in control without spending hours on personal finance.",
    category: "Money Habits",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    readTime: "7 min read",
    author: "Finatic Editorial Team",
    authorRole: "Personal finance educators",
    primaryKeyword: "weekly money routine",
    readerPromise: "You'll get a simple weekly script to reduce surprises and keep momentum.",
    framework: "15-minute loop: review -> adjust -> schedule -> commit",
    intro: ["Money stress often comes from too much time between check-ins. A short weekly loop fixes that."],
    keyTakeaways: [
      "A short routine beats occasional marathon money sessions.",
      "One weekly adjustment can prevent next week's cash crunch.",
      "Predictability lowers financial anxiety.",
    ],
    sections: [
      {
        heading: "Step 1: Review what changed",
        paragraphs: [
          "Check balances, recent transactions, and upcoming due dates.",
          "You are not auditing every penny—just identifying what needs attention this week.",
        ],
      },
      {
        heading: "Step 2: Make one adjustment",
        paragraphs: [
          "Choose one high-impact action: move money to savings, pay extra debt principal, or cut one leak.",
          "Small actions repeated weekly compound faster than big plans abandoned monthly.",
        ],
      },
    ],
    relatedToolHref: "/tools/budget-planner",
    relatedToolText: "Use the budget planner during your weekly review",
    relatedGuideHref: "/guides/debt-payoff-guide",
    relatedGuideText: "If debt is priority, run this payoff sequence",
    siblingPostHref: "/blog/72-hour-money-reset",
    siblingPostText: "Start with the 72-hour money reset",
  },
  {
    slug: "why-your-budget-keeps-failing",
    title: "Why Your Budget Keeps Failing (and What to Fix First)",
    excerpt:
      "If your budget keeps breaking, the issue is usually design, not discipline. Here's what to fix first.",
    category: "Budgeting",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    readTime: "8 min read",
    author: "Maya Chen",
    authorRole: "Fintech content editor",
    primaryKeyword: "why your budget keeps failing",
    readerPromise: "You'll identify the specific reason your budget keeps breaking and apply a practical fix.",
    framework: "Failure audit: unrealistic targets -> missing buffers -> weak weekly review",
    intro: [
      "Most people blame themselves when a budget falls apart, but the root cause is often the system itself.",
      "A good budget survives imperfect months. If yours only works in perfect months, redesign it.",
    ],
    keyTakeaways: [
      "Budget failure is often structural, not moral.",
      "Add buffers and simpler categories before cutting deeper.",
      "Weekly review cadence is usually the missing piece.",
    ],
    sections: [
      {
        heading: "Problem 1: Unrealistic baseline",
        paragraphs: [
          "If your spending caps are far below real behavior, you'll break the plan quickly.",
          "Start from recent spending history, then reduce gradually.",
        ],
      },
      {
        heading: "Problem 2: No shock buffer",
        paragraphs: [
          "Without a small emergency cushion, minor surprises force new debt or plan collapse.",
          "A starter fund protects budget integrity.",
        ],
      },
    ],
    relatedToolHref: "/tools/budget-planner",
    relatedToolText: "Audit your current numbers with the budget planner",
    relatedGuideHref: "/guides/emergency-fund",
    relatedGuideText: "Use this emergency fund guide to add your first buffer",
    siblingPostHref: "/blog/how-to-make-a-budget-when-you-hate-budgeting",
    siblingPostText: "How to make a budget when you hate budgeting",
  },
  {
    slug: "how-to-pay-off-credit-card-debt-faster",
    title: "How to Pay Off Credit Card Debt Faster",
    excerpt:
      "A practical payoff sequence for high-APR credit card balances without burning out.",
    category: "Debt Payoff",
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    readTime: "9 min read",
    author: "Finatic Editorial Team",
    authorRole: "Personal finance educators",
    primaryKeyword: "how to pay off credit card debt faster",
    readerPromise: "You'll get a realistic credit card payoff plan with clear weekly actions.",
    framework: "APR map -> minimum autopay -> targeted extra payment -> weekly check-in",
    intro: [
      "Credit card debt can feel endless because high APR erodes monthly progress.",
      "The fastest path is usually simple: make minimums automatic and target one account with every extra dollar.",
    ],
    keyTakeaways: [
      "Autopay minimums first to protect your baseline.",
      "Target one card aggressively at a time.",
      "Small consistent extra payments can cut months off payoff timelines.",
    ],
    sections: [
      {
        heading: "Map your cards by APR and balance",
        paragraphs: [
          "List each card's APR, balance, and minimum payment.",
          "That map helps you decide between avalanche, snowball, or a hybrid.",
        ],
      },
      {
        heading: "Protect momentum with weekly tracking",
        paragraphs: [
          "Track balances weekly so progress is visible.",
          "Visibility keeps motivation higher than waiting for monthly statements.",
        ],
      },
    ],
    relatedToolHref: "/tools/debt-payoff-calculator",
    relatedToolText: "Estimate your timeline with the debt payoff calculator",
    relatedGuideHref: "/guides/debt-payoff-guide",
    relatedGuideText: "Use the debt payoff guide to choose your method",
    siblingPostHref: "/blog/debt-snowball-vs-avalanche-for-real-people",
    siblingPostText: "Debt snowball vs avalanche for real people",
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
