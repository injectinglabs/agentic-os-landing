export const APP_URL = 'https://aos.injecting.ai/app'

export const channels = [
  'Telegram', 'Slack', 'Discord', 'WhatsApp', 'Feishu / Lark', 'Zalo', 'Messenger',
]

export const features = [
  {
    tag: 'Multi-channel',
    title: 'Agents that live where your team already works',
    body: 'Spin up an agent and drop it into Telegram, Slack, Discord, WhatsApp and more. One brain, every channel — group chats, DMs and threads, with per-channel personalities.',
    span: 'lg',
  },
  {
    tag: 'Tools',
    title: 'Real actions, not just answers',
    body: 'Connect Notion, Gmail, Calendar, Drive, Sheets, Docs, GitHub and Slack in two clicks. Agents read and write the tools you already pay for.',
    span: 'sm',
  },
  {
    tag: 'Knowledge',
    title: 'Grounded in your docs',
    body: 'Upload knowledge and let agents retrieve it on demand — answers anchored to your own source of truth, not a hallucination.',
    span: 'sm',
  },
  {
    tag: 'Code execution',
    title: 'A sandbox that runs the work',
    body: 'Agents write and execute code in an isolated sandbox — data wrangling, scripts, charts, file generation — then hand you the result.',
    span: 'sm',
  },
  {
    tag: 'Teams',
    title: 'Shared workspaces with roles',
    body: 'Invite your team, assign owner / admin / member / viewer, and share agents, integrations and usage across one org.',
    span: 'sm',
  },
  {
    tag: 'Models',
    title: 'The right model, every time',
    body: 'A curated catalog routes each request to the best engine — Gemini by default, with fast and frontier tiers a click away. No lock-in.',
    span: 'lg',
  },
]

export const steps = [
  {
    n: '01',
    title: 'Connect a channel',
    body: 'Link Telegram, Slack or Discord — or open the web app. Your agent is reachable in seconds.',
  },
  {
    n: '02',
    title: 'Give it tools & knowledge',
    body: 'Authorize integrations, upload docs, pick skills. The agent inherits everything instantly.',
  },
  {
    n: '03',
    title: 'It gets to work',
    body: 'Ask in plain language. The agent reasons, calls tools, runs code, and reports back — on its own.',
  },
]

export const integrations = [
  'Notion', 'Gmail', 'Google Calendar', 'Google Drive',
  'Google Sheets', 'Google Docs', 'GitHub', 'Slack',
]

export const plans = [
  {
    tier: 'Lite',
    monthly: 20,
    yearly: 16,
    blurb: 'For getting started solo.',
    features: ['20M tokens / month', 'All channels', 'Core integrations', 'Web + chat access'],
    cta: 'Start with Lite',
    featured: false,
  },
  {
    tier: 'Pro',
    monthly: 50,
    yearly: 40,
    blurb: 'For power users who ship.',
    features: ['50M tokens / month', 'Knowledge base (20 docs / 50MB)', 'Code execution sandbox', 'Everything in Lite'],
    cta: 'Go Pro',
    featured: true,
  },
  {
    tier: 'Pro Plus',
    monthly: 200,
    yearly: 160,
    blurb: 'For heavy, unlimited workloads.',
    features: ['200M tokens / month', 'Unlimited knowledge (500MB)', 'Priority routing', 'Everything in Pro'],
    cta: 'Get Pro Plus',
    featured: false,
  },
  {
    tier: 'Team',
    monthly: 200,
    yearly: 160,
    blurb: 'For teams sharing one workspace.',
    features: ['Up to 10 seats', '50M tokens / member', 'Roles & shared agents', 'Org-wide usage view'],
    cta: 'Start a Team',
    featured: false,
  },
]
