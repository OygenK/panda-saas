export const LOCALE_COOKIE = 'locale'

export type Locale = 'en' | 'ru'

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ru', label: 'Русский', short: 'RU' },
]

export const DEFAULT_LOCALE: Locale = 'en'

const en = {
  nav: {
    product: 'Product',
    compute: 'Compute',
    pipelines: 'Pipelines',
    pricing: 'Pricing',
    signIn: 'Sign in',
    startFree: 'Start free',
  },
  hero: {
    badge: 'v3 · GPU autoscaling now GA',
    titleLead: 'Cloud infrastructure for ',
    titleAccent: 'ML & DevOps',
    titleTail: ' teams.',
    subtitle:
      'Provision GPU compute, orchestrate training pipelines, and ship model deployments — all from a single control plane built for teams that move fast.',
    ctaPrimary: 'Start building',
    ctaSecondary: 'View live dashboard',
    consoleTitle: 'substrate · control plane',
    console: [
      'provisioning 4× A100 80GB in us-east-1 ...',
      'cluster substrate-prod-7f3 ready in 41s',
      'streaming pipeline: ingest → train → eval → serve',
      'endpoint live · https://api.substrate.io/v1/infer',
    ],
    stats: [
      { v: '41s', l: 'avg cold start' },
      { v: '99.98%', l: 'control-plane SLA' },
      { v: '18k', l: 'GPUs orchestrated' },
    ],
  },
  features: {
    eyebrow: 'One platform',
    title: 'Everything between your model and production',
    subtitle:
      'Substrate replaces the tangle of scripts, schedulers, and dashboards that ML and DevOps teams stitch together — with primitives designed to work as one system.',
    items: [
      {
        title: 'Elastic GPU compute',
        body: 'Spin up A100, H100, and L4 fleets on demand. Autoscaling scales pools to zero when idle, so you only pay for cycles you use.',
      },
      {
        title: 'Pipeline orchestration',
        body: 'Define ingest → train → eval → serve as code. Substrate schedules, checkpoints, and retries steps across your cluster automatically.',
      },
      {
        title: 'Git-native deployments',
        body: 'Every push builds an immutable revision. Promote, roll back, and run canaries with a single command or API call.',
      },
      {
        title: 'Unified observability',
        body: 'Traces, GPU utilization, token throughput, and cost — correlated in one timeline so you can find regressions in seconds.',
      },
      {
        title: 'Reproducible environments',
        body: 'Pin CUDA, drivers, and dependencies per workload. Environments are content-addressed and cached across the fleet.',
      },
      {
        title: 'Enterprise controls',
        body: 'SSO, RBAC, private networking, and SOC 2 Type II. Bring your own cloud account or run fully managed.',
      },
    ],
  },
  pipelines: {
    eyebrow: 'Pipelines',
    title: 'From dataset to endpoint in one graph',
    subtitle:
      'Model each workload as a directed pipeline. Substrate handles scheduling, retries, and artifact passing between stages so your team focuses on the model, not the plumbing.',
    bullets: [
      'Checkpoint and resume long-running jobs without losing GPU state',
      'Fan out hyperparameter sweeps across hundreds of workers',
      'Promote a passing eval straight to a canary deployment',
    ],
    running: 'running',
    caption: 'pipeline · llama-3-70b-finetune',
    stages: [
      { stage: 'Ingest', detail: '2.4 TB · 6 shards' },
      { stage: 'Train', detail: '4× A100 · 3h 12m' },
      { stage: 'Evaluate', detail: 'eval-suite v9 · 61%' },
      { stage: 'Serve', detail: 'canary 5% traffic' },
    ],
  },
  cta: {
    title: 'Ship your next model on infrastructure that keeps up',
    subtitle:
      'Start free with $200 in compute credits. No cluster to babysit, no YAML sprawl — just a control plane that works.',
    primary: 'Create free account',
    secondary: 'Talk to engineering',
  },
  footer: {
    tagline:
      'The control plane for ML and DevOps teams. Provision compute, orchestrate pipelines, and ship deployments from one place.',
    columns: [
      {
        heading: 'Product',
        links: ['Compute', 'Pipelines', 'Deployments', 'Observability', 'Pricing'],
      },
      {
        heading: 'Developers',
        links: ['Documentation', 'API reference', 'CLI', 'Status', 'Changelog'],
      },
      {
        heading: 'Company',
        links: ['About', 'Blog', 'Careers', 'Security', 'Contact'],
      },
    ],
    rights: 'Substrate, Inc. All systems operational.',
    privacy: 'Privacy',
    terms: 'Terms',
    soc2: 'SOC 2',
  },
  auth: {
    badge: 'substrate control plane',
    headline:
      'The single control plane for provisioning compute, orchestrating pipelines, and shipping models.',
    footnote: '// trusted by teams orchestrating 18k+ GPUs',
    points: [
      {
        title: 'Live cluster telemetry',
        desc: 'GPU utilization, throughput, and cost per run in real time.',
      },
      {
        title: 'Reproducible pipelines',
        desc: 'Every training run is versioned, forkable, and auditable.',
      },
      {
        title: 'SOC 2 control plane',
        desc: 'Isolated tenants, scoped tokens, and full audit logs.',
      },
    ],
  },
  dashboard: {
    nav: {
      overview: 'Overview',
      compute: 'Compute',
      pipelines: 'Pipelines',
      deployments: 'Deployments',
      observability: 'Observability',
      settings: 'Settings',
    },
    searchPlaceholder: 'Search clusters, pipelines, endpoints…',
    newCluster: 'New cluster',
    greeting: 'Control plane',
    greetingSub: 'Live status across your compute, pipelines, and deployments.',
    org: 'Acme ML',
    plan: 'Team plan',
    stats: [
      { label: 'Active GPUs', value: '128', delta: '+12', sub: 'A100 · H100 · L4' },
      { label: 'Running pipelines', value: '7', delta: '+2', sub: '3 training · 4 serving' },
      { label: 'Live endpoints', value: '19', delta: '+1', sub: '99.98% uptime' },
      { label: 'Spend this month', value: '$24.8k', delta: '-6%', sub: 'of $40k budget' },
    ],
    utilization: {
      title: 'GPU utilization',
      subtitle: 'Cluster-wide, last 24 hours',
      legendUsed: 'Allocated',
      legendPeak: 'Peak',
      current: 'now',
    },
    clusters: {
      title: 'Clusters',
      viewAll: 'View all',
      headers: {
        name: 'Cluster',
        region: 'Region',
        gpus: 'GPUs',
        util: 'Utilization',
        status: 'Status',
      },
      rows: [
        { name: 'substrate-prod-7f3', region: 'us-east-1', gpus: '4× A100', util: 87, status: 'healthy' },
        { name: 'train-llama-ft', region: 'us-west-2', gpus: '8× H100', util: 94, status: 'healthy' },
        { name: 'batch-eval-suite', region: 'eu-central-1', gpus: '2× L4', util: 41, status: 'idle' },
        { name: 'canary-serving', region: 'us-east-1', gpus: '2× A100', util: 63, status: 'degraded' },
      ],
    },
    pipelines: {
      title: 'Active pipelines',
      viewAll: 'View all',
      eta: 'ETA',
      rows: [
        { name: 'llama-3-70b-finetune', stage: 'Train', progress: 68, eta: '1h 04m' },
        { name: 'rag-index-rebuild', stage: 'Ingest', progress: 32, eta: '22m' },
        { name: 'eval-suite-nightly', stage: 'Evaluate', progress: 81, eta: '9m' },
        { name: 'embeddings-batch', stage: 'Serve', progress: 100, eta: 'done' },
      ],
    },
    activity: {
      title: 'Recent activity',
      items: [
        { text: 'Deployment v412 promoted to production', time: '2m ago', kind: 'deploy' },
        { text: 'Cluster train-llama-ft scaled 4 → 8 GPUs', time: '18m ago', kind: 'scale' },
        { text: 'Pipeline eval-suite-nightly passed (61%)', time: '41m ago', kind: 'pass' },
        { text: 'Canary canary-serving flagged high latency', time: '1h ago', kind: 'warn' },
        { text: 'New API token created by ada@acme.ml', time: '3h ago', kind: 'token' },
      ],
    },
    statusLabels: {
      healthy: 'Healthy',
      idle: 'Idle',
      degraded: 'Degraded',
    },
  },
  login: {
    title: 'Sign in to Substrate',
    subtitle: 'Access your control plane, clusters, and pipelines.',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@company.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••••••',
    forgot: 'Forgot password?',
    errorEmpty: 'Enter your email and password to continue.',
    submit: 'Sign in',
    submitting: 'Signing in',
    noAccount: "Don't have an account? ",
    createOne: 'Create one',
  },
  signup: {
    title: 'Create your account',
    subtitle: 'Spin up your first cluster in under a minute.',
    perks: ['Free 14-day trial', 'No credit card required', '$300 in compute credits'],
    nameLabel: 'Full name',
    namePlaceholder: 'Ada Lovelace',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@company.com',
    passwordLabel: 'Password',
    passwordPlaceholder: 'At least 8 characters',
    errorEmpty: 'Fill in all fields to create your account.',
    errorShort: 'Password must be at least 8 characters.',
    submit: 'Create account',
    submitting: 'Creating account',
    haveAccount: 'Already have an account? ',
    signIn: 'Sign in',
  },
}

// Russian dictionary — must mirror the shape of `en`.
const ru: typeof en = {
  nav: {
    product: 'Продукт',
    compute: 'Вычисления',
    pipelines: 'Пайплайны',
    pricing: 'Тарифы',
    signIn: 'Войти',
    startFree: 'Начать бесплатно',
  },
  hero: {
    badge: 'v3 · Автомасштабирование GPU уже доступно',
    titleLead: 'Облачная инфраструктура для команд ',
    titleAccent: 'ML и DevOps',
    titleTail: '.',
    subtitle:
      'Разворачивайте GPU-вычисления, оркестрируйте пайплайны обучения и выкатывайте модели — всё из единой панели управления, созданной для команд, которые двигаются быстро.',
    ctaPrimary: 'Начать разработку',
    ctaSecondary: 'Открыть дашборд',
    consoleTitle: 'substrate · панель управления',
    console: [
      'разворачиваем 4× A100 80GB в us-east-1 ...',
      'кластер substrate-prod-7f3 готов за 41с',
      'пайплайн: ingest → train → eval → serve',
      'эндпоинт активен · https://api.substrate.io/v1/infer',
    ],
    stats: [
      { v: '41с', l: 'средний холодный старт' },
      { v: '99.98%', l: 'SLA панели управления' },
      { v: '18k', l: 'GPU в оркестрации' },
    ],
  },
  features: {
    eyebrow: 'Единая платформа',
    title: 'Всё между вашей моделью и продакшеном',
    subtitle:
      'Substrate заменяет клубок скриптов, планировщиков и дашбордов, которые команды ML и DevOps собирают вручную — примитивами, спроектированными работать как единая система.',
    items: [
      {
        title: 'Эластичные GPU-вычисления',
        body: 'Поднимайте пулы A100, H100 и L4 по требованию. Автомасштабирование сворачивает простаивающие пулы до нуля — вы платите только за использованные циклы.',
      },
      {
        title: 'Оркестрация пайплайнов',
        body: 'Описывайте ingest → train → eval → serve как код. Substrate планирует шаги, делает чекпоинты и автоматически повторяет их по кластеру.',
      },
      {
        title: 'Git-нативные деплои',
        body: 'Каждый push создаёт неизменяемую ревизию. Продвигайте, откатывайте и запускайте канареечные релизы одной командой или вызовом API.',
      },
      {
        title: 'Единая наблюдаемость',
        body: 'Трейсы, утилизация GPU, пропускная способность по токенам и стоимость — в одной временной шкале, чтобы находить регрессии за секунды.',
      },
      {
        title: 'Воспроизводимые окружения',
        body: 'Фиксируйте CUDA, драйверы и зависимости для каждой задачи. Окружения адресуются по содержимому и кэшируются по всему флоту.',
      },
      {
        title: 'Корпоративный контроль',
        body: 'SSO, RBAC, приватная сеть и SOC 2 Type II. Подключайте свой облачный аккаунт или используйте полностью управляемый вариант.',
      },
    ],
  },
  pipelines: {
    eyebrow: 'Пайплайны',
    title: 'От датасета до эндпоинта в одном графе',
    subtitle:
      'Опишите каждую задачу как направленный пайплайн. Substrate берёт на себя планирование, повторы и передачу артефактов между стадиями, чтобы команда сосредоточилась на модели, а не на инфраструктуре.',
    bullets: [
      'Делайте чекпоинты и возобновляйте долгие задачи без потери состояния GPU',
      'Распределяйте перебор гиперпараметров по сотням воркеров',
      'Продвигайте успешную оценку сразу в канареечный деплой',
    ],
    running: 'выполняется',
    caption: 'пайплайн · llama-3-70b-finetune',
    stages: [
      { stage: 'Загрузка', detail: '2.4 ТБ · 6 шардов' },
      { stage: 'Обучение', detail: '4× A100 · 3ч 12м' },
      { stage: 'Оценка', detail: 'eval-suite v9 · 61%' },
      { stage: 'Раздача', detail: 'канарейка 5% трафика' },
    ],
  },
  cta: {
    title: 'Выкатывайте свою следующую модель на инфраструктуре, которая не отстаёт',
    subtitle:
      'Начните бесплатно с $200 кредитов на вычисления. Не нужно нянчить кластер и утопать в YAML — просто панель управления, которая работает.',
    primary: 'Создать бесплатный аккаунт',
    secondary: 'Связаться с инженерами',
  },
  footer: {
    tagline:
      'Панель управления для команд ML и DevOps. Разворачивайте вычисления, оркестрируйте пайплайны и выкатывайте деплои из одного места.',
    columns: [
      {
        heading: 'Продукт',
        links: ['Вычисления', 'Пайплайны', 'Деплои', 'Наблюдаемость', 'Тарифы'],
      },
      {
        heading: 'Разработчикам',
        links: ['Документация', 'Справочник API', 'CLI', 'Статус', 'Изменения'],
      },
      {
        heading: 'Компания',
        links: ['О нас', 'Блог', 'Вакансии', 'Безопасность', 'Контакты'],
      },
    ],
    rights: 'Substrate, Inc. Все системы работают штатно.',
    privacy: 'Конфиденциальность',
    terms: 'Условия',
    soc2: 'SOC 2',
  },
  auth: {
    badge: 'панель управления substrate',
    headline:
      'Единая панель управления для разворачивания вычислений, оркестрации пайплайнов и выката моделей.',
    footnote: '// нам доверяют команды, оркестрирующие 18k+ GPU',
    points: [
      {
        title: 'Живая телеметрия кластера',
        desc: 'Утилизация GPU, пропускная способность и стоимость каждого запуска в реальном времени.',
      },
      {
        title: 'Воспроизводимые пайплайны',
        desc: 'Каждый запуск обучения версионируется, форкается и поддаётся аудиту.',
      },
      {
        title: 'SOC 2 панель управления',
        desc: 'Изолированные тенанты, ограниченные токены и полные журналы аудита.',
      },
    ],
  },
  dashboard: {
    nav: {
      overview: 'Обзор',
      compute: 'Вычисления',
      pipelines: 'Пайплайны',
      deployments: 'Деплои',
      observability: 'Наблюдаемость',
      settings: 'Настройки',
    },
    searchPlaceholder: 'Поиск кластеров, пайплайнов, эндпоинтов…',
    newCluster: 'Новый кластер',
    greeting: 'Панель управления',
    greetingSub: 'Статус вычислений, пайплайнов и деплоев в реальном времени.',
    org: 'Acme ML',
    plan: 'Командный тариф',
    stats: [
      { label: 'Активные GPU', value: '128', delta: '+12', sub: 'A100 · H100 · L4' },
      { label: 'Запущенные пайплайны', value: '7', delta: '+2', sub: '3 обучение · 4 раздача' },
      { label: 'Активные эндпоинты', value: '19', delta: '+1', sub: '99.98% аптайм' },
      { label: 'Расходы за месяц', value: '$24.8k', delta: '-6%', sub: 'из бюджета $40k' },
    ],
    utilization: {
      title: 'Утилизация GPU',
      subtitle: 'По всему кластеру, за 24 часа',
      legendUsed: 'Выделено',
      legendPeak: 'Пик',
      current: 'сейчас',
    },
    clusters: {
      title: 'Кластеры',
      viewAll: 'Все',
      headers: {
        name: 'Кластер',
        region: 'Регион',
        gpus: 'GPU',
        util: 'Утилизация',
        status: 'Статус',
      },
      rows: [
        { name: 'substrate-prod-7f3', region: 'us-east-1', gpus: '4× A100', util: 87, status: 'healthy' },
        { name: 'train-llama-ft', region: 'us-west-2', gpus: '8× H100', util: 94, status: 'healthy' },
        { name: 'batch-eval-suite', region: 'eu-central-1', gpus: '2× L4', util: 41, status: 'idle' },
        { name: 'canary-serving', region: 'us-east-1', gpus: '2× A100', util: 63, status: 'degraded' },
      ],
    },
    pipelines: {
      title: 'Активные пайплайны',
      viewAll: 'Все',
      eta: 'Осталось',
      rows: [
        { name: 'llama-3-70b-finetune', stage: 'Обучение', progress: 68, eta: '1ч 04м' },
        { name: 'rag-index-rebuild', stage: 'Загрузка', progress: 32, eta: '22м' },
        { name: 'eval-suite-nightly', stage: 'Оценка', progress: 81, eta: '9м' },
        { name: 'embeddings-batch', stage: 'Раздача', progress: 100, eta: 'готово' },
      ],
    },
    activity: {
      title: 'Недавняя активность',
      items: [
        { text: 'Деплой v412 продвинут в продакшен', time: '2 мин назад', kind: 'deploy' },
        { text: 'Кластер train-llama-ft масштабирован 4 → 8 GPU', time: '18 мин назад', kind: 'scale' },
        { text: 'Пайплайн eval-suite-nightly пройден (61%)', time: '41 мин назад', kind: 'pass' },
        { text: 'Канарейка canary-serving: высокая задержка', time: '1 ч назад', kind: 'warn' },
        { text: 'Новый API-токен создан ada@acme.ml', time: '3 ч назад', kind: 'token' },
      ],
    },
    statusLabels: {
      healthy: 'В норме',
      idle: 'Простой',
      degraded: 'Деградация',
    },
  },
  login: {
    title: 'Вход в Substrate',
    subtitle: 'Доступ к вашей панели управления, кластерам и пайплайнам.',
    emailLabel: 'Рабочая почта',
    emailPlaceholder: 'you@company.com',
    passwordLabel: 'Пароль',
    passwordPlaceholder: '••••••••••••',
    forgot: 'Забыли пароль?',
    errorEmpty: 'Введите почту и пароль, чтобы продолжить.',
    submit: 'Войти',
    submitting: 'Вход',
    noAccount: 'Нет аккаунта? ',
    createOne: 'Создать',
  },
  signup: {
    title: 'Создайте аккаунт',
    subtitle: 'Поднимите свой первый кластер меньше чем за минуту.',
    perks: ['Бесплатно 14 дней', 'Без банковской карты', '$300 кредитов на вычисления'],
    nameLabel: 'Полное имя',
    namePlaceholder: 'Ада Лавлейс',
    emailLabel: 'Рабочая почта',
    emailPlaceholder: 'you@company.com',
    passwordLabel: 'Пароль',
    passwordPlaceholder: 'Минимум 8 символов',
    errorEmpty: 'Заполните все поля, чтобы создать аккаунт.',
    errorShort: 'Пароль должен содержать не менее 8 символов.',
    submit: 'Создать аккаунт',
    submitting: 'Создаём аккаунт',
    haveAccount: 'Уже есть аккаунт? ',
    signIn: 'Войти',
  },
}

export type Dict = typeof en

export const translations: Record<Locale, Dict> = { en, ru }

export function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'ru'
}
