export type Lang = 'en' | 'ar';

export interface Feature {
  icon: string;
  title: string;
  body: string;
}

export interface LandingContent {
  meta: {
    title: string;
    description: string;
  };
  brand: string;
  nav: {
    features: string;
    privacy: string;
    licenses: string;
    releases: string;
    download: string;
    menu: string;
    otherLang: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string;
    primary: string;
    secondary: string;
    badge: string;
    trust: string[];
  };
  strip: string[];
  features: {
    eyebrow: string;
    title: string;
    body: string;
    items: Feature[];
  };
  qatar: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
    quote: string;
    stat: string;
    statLabel: string;
    label: string;
  };
  bilingual: {
    eyebrow: string;
    title: string;
    body: string;
    chips: string[];
    imageAlt: string;
  };
  download: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
    notes: string;
    versionLabel: string;
    android: string;
    verify: string;
    install: string;
    signed: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    body: string;
    link: string;
    stats: { value: string; label: string }[];
  };
  footer: {
    tagline: string;
    productTitle: string;
    trustTitle: string;
    moreTitle: string;
    releases: string;
    github: string;
    issue: string;
    copyright: string;
    made: string;
  };
}

export const content: Record<Lang, LandingContent> = {
  en: {
    meta: {
      title: 'Munadi — Prayer times for Qatar, quietly done',
      description:
        'A lightweight, private prayer-times app for Qatar: accurate offline timings, iqamah, Qibla, adhan and widget in Arabic and English. No ads or trackers.',
    },
    brand: 'Munadi',
    nav: {
      features: 'Features',
      privacy: 'Privacy',
      licenses: 'Licenses',
      releases: 'Releases',
      download: 'Download APK',
      menu: 'Menu',
      otherLang: 'العربية',
    },
    hero: {
      eyebrow: 'Qatar prayer times · offline',
      title: 'Prayer times for Qatar.',
      titleAccent: 'Quietly done.',
      body: 'Simple and lightweight, beautifully designed, and privacy-focused by default: accurate offline Qatar timings, iqamah, qibla, adhan and widget—all in one, in Arabic and English, with no ads and no trackers.',
      primary: 'Download for Android',
      secondary: 'See what’s inside',
      badge: 'Private by default',
      trust: ['No ads', 'No trackers', 'Android 8+'],
    },
    strip: [
      'Qatar Calendar House',
      'Works offline',
      'Arabic & English',
      'Iqamah for every prayer',
      'Home-screen widget',
    ],
    features: {
      eyebrow: 'What’s inside',
      title: 'Everything you need. Nothing you don’t.',
      body: 'A small, deliberate app for the five prayers—and the quiet time around them.',
      items: [
        {
          icon: 'cloud-off',
          title: 'Offline, always',
          body: 'The full Qatar Calendar House timetable ships inside the app. No network, no lookup, no waiting.',
        },
        {
          icon: 'clock',
          title: 'Iqamah, your way',
          body: 'Set a separate iqamah offset for every prayer. Changes apply instantly.',
        },
        {
          icon: 'spark',
          title: 'The next prayer, clear',
          body: 'A calm countdown, current and next highlighting, and the exact adhan time at a glance.',
        },
        {
          icon: 'compass',
          title: 'Qibla, without precise location',
          body: 'A gold qalam needle points to Makkah using approximate location only.',
        },
        {
          icon: 'volume',
          title: 'Adhan you choose',
          body: 'Bundled adhans, short alerts, a beep, silence, or your own audio file.',
        },
        {
          icon: 'widget',
          title: 'A widget that waits',
          body: 'Next prayer and iqamah on your home screen, with system light and dark.',
        },
        {
          icon: 'globe',
          title: 'Arabic and English',
          body: 'A complete Arabic interface with a proper right-to-left layout.',
        },
        {
          icon: 'shield',
          title: 'Private by design',
          body: 'No accounts, ads, analytics, or trackers. Your settings stay on your device.',
        },
      ],
    },
    qatar: {
      eyebrow: 'Built for Qatar',
      title: 'The timetable is the app.',
      body: 'Munadi does not guess prayer times from the sun. It carries the Qatar Calendar House annual table inside the APK, so every time is the published Qatari time—even in airplane mode.',
      points: [
        'Qatar Calendar House annual table',
        'Doha iqamah defaults, editable per prayer',
        'Islamic midnight and the last third of the night',
        'Follows your Android 12/24-hour setting',
      ],
      quote: 'No network. No lookup. No waiting.',
      stat: '365',
      statLabel: 'days of timings inside the APK',
      label: 'Qatar Calendar House',
    },
    bilingual: {
      eyebrow: 'One app · Two languages',
      title: 'English. العربية. Yours.',
      body: 'The whole interface is available in Arabic and English, with a true right-to-left layout—not a translation bolted on.',
      chips: ['العربية', 'English'],
      imageAlt: 'Munadi home screen in Arabic',
    },
    download: {
      eyebrow: 'Download',
      title: 'Take the quiet with you.',
      body: 'The latest signed APK, direct from GitHub. Free, ad-free, and tracker-free.',
      button: 'Download latest APK',
      notes: 'Release notes & checksum',
      versionLabel: 'Version',
      android: 'Android 8.0+',
      verify: 'SHA-256',
      install:
        'Android may ask you to allow installs from your browser. Munadi is not on Google Play.',
      signed: 'Signed release',
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Your data stays yours.',
      body: 'No accounts. No analytics. No tracking. Approximate location is used only for the Qibla compass and place name, and your settings stay on your device.',
      link: 'Read the privacy policy',
      stats: [
        { value: '0', label: 'accounts' },
        { value: '0', label: 'ads' },
        { value: '0', label: 'trackers' },
      ],
    },
    footer: {
      tagline: 'A quiet, private prayer-times app for Qatar.',
      productTitle: 'Product',
      trustTitle: 'Trust',
      moreTitle: 'More',
      releases: 'Releases',
      github: 'GitHub',
      issue: 'Report an issue',
      copyright: '© 2026 HStudios. Munadi is proprietary software.',
      made: 'Made for Qatar',
    },
  },
  ar: {
    meta: {
      title: 'منادي — مواقيت الصلاة في قطر، بهدوء',
      description:
        'تطبيق خفيف وخاص لمواقيت الصلاة في قطر: مواقيت دقيقة دون اتصال، مع الإقامة والقبلة والأذان والودجة بالعربية والإنجليزية. بلا إعلانات أو متتبعات.',
    },
    brand: 'منادي',
    nav: {
      features: 'المزايا',
      privacy: 'الخصوصية',
      licenses: 'التراخيص',
      releases: 'الإصدارات',
      download: 'تحميل التطبيق',
      menu: 'القائمة',
      otherLang: 'English',
    },
    hero: {
      eyebrow: 'مواقيت الصلاة في قطر · دون اتصال',
      title: 'مواقيت الصلاة في قطر.',
      titleAccent: 'بهُدوء.',
      body: 'بسيط وخفيف، مصمم بعناية، والخصوصية أساسه: مواقيت قطرية دقيقة دون اتصال، مع الإقامة والقبلة والأذان والودجة — كل ذلك في تطبيق واحد، بالعربية والإنجليزية، بلا إعلانات أو متتبعات.',
      primary: 'حمّل لأندرويد',
      secondary: 'اكتشف التطبيق',
      badge: 'الخصوصية أساس التصميم',
      trust: ['بلا إعلانات', 'بلا متتبعات', 'أندرويد 8+'],
    },
    strip: [
      'تقويم قطر الدائم',
      'يعمل دون اتصال',
      'بالعربية والإنجليزية',
      'إقامة لكل صلاة',
      'ودجة للشاشة الرئيسية',
    ],
    features: {
      eyebrow: 'داخل التطبيق',
      title: 'كل ما تحتاجه. دون زوائد.',
      body: 'تطبيق صغير ومتعمّد للصلوات الخمس — وللوقت الهادئ حولها.',
      items: [
        {
          icon: 'cloud-off',
          title: 'يعمل دون اتصال',
          body: 'جدول تقويم قطر الدائم كامل داخل التطبيق. لا شبكة، لا بحث، ولا انتظار.',
        },
        {
          icon: 'clock',
          title: 'الإقامة كما تريد',
          body: 'حدّد فارق الإقامة لكل صلاة على حدة. التغييرات تُطبّق فورًا.',
        },
        {
          icon: 'spark',
          title: 'الصلاة القادمة بوضوح',
          body: 'عدّاد هادئ، وإبراز للصلاة الحالية والقادمة، ووقت الأذان في لمحة.',
        },
        {
          icon: 'compass',
          title: 'القبلة دون تحديد دقيق',
          body: 'إبرة قلم ذهبية تشير إلى مكة باستخدام الموقع التقريبي فقط.',
        },
        {
          icon: 'volume',
          title: 'الأذان الذي تختاره',
          body: 'أذانات مضمّنة، تنبيهات قصيرة، نغمة، صمت، أو ملفك الصوتي الخاص.',
        },
        {
          icon: 'widget',
          title: 'ودجة تنتظرك',
          body: 'الصلاة القادمة والإقامة على شاشتك الرئيسية، بألوان النظام الفاتحة والداكنة.',
        },
        {
          icon: 'globe',
          title: 'بالعربية والإنجليزية',
          body: 'واجهة عربية كاملة باتجاه صحيح من اليمين إلى اليسار.',
        },
        {
          icon: 'shield',
          title: 'الخصوصية أساس التصميم',
          body: 'لا حسابات، لا إعلانات، لا تحليلات، ولا متتبعات. إعداداتك تبقى على جهازك.',
        },
      ],
    },
    qatar: {
      eyebrow: 'مصمم لقطر',
      title: 'الجدول هو التطبيق.',
      body: 'لا يخمّن منادي مواقيت الصلاة من موقع الشمس. بل يحمل جدول تقويم قطر الدائم السنوي داخل التطبيق، لتكون كل مواقيت هي المواقيت القطرية المنشورة — حتى في وضع الطيران.',
      points: [
        'جدول تقويم قطر الدائم السنوي',
        'إقامة الدوحة الافتراضية، قابلة للتعديل لكل صلاة',
        'منتصف الليل الإسلامي والثلث الأخير من الليل',
        'يتبع إعداد 12/24 ساعة في أندرويد',
      ],
      quote: 'لا شبكة. لا بحث. لا انتظار.',
      stat: '365',
      statLabel: 'يومًا من المواقيت داخل التطبيق',
      label: 'تقويم قطر الدائم',
    },
    bilingual: {
      eyebrow: 'تطبيق واحد · لغتان',
      title: 'English. العربية. لك.',
      body: 'الواجهة كاملة بالعربية والإنجليزية، باتجاه حقيقي من اليمين إلى اليسار — لا ترجمة مُلصقة.',
      chips: ['العربية', 'English'],
      imageAlt: 'شاشة منادي الرئيسية بالعربية',
    },
    download: {
      eyebrow: 'تحميل',
      title: 'خذ الهدوء معك.',
      body: 'أحدث إصدار موقّع مباشرة من GitHub. مجاني، بلا إعلانات، وبلا متتبعات.',
      button: 'حمّل أحدث إصدار',
      notes: 'ملاحظات الإصدار والبصمة',
      versionLabel: 'الإصدار',
      android: 'Android 8.0+',
      verify: 'SHA-256',
      install: 'قد يطلب أندرويد السماح بالتثبيت من متصفحك. منادي ليس على Google Play',
      signed: 'إصدار موقّع',
    },
    privacy: {
      eyebrow: 'الخصوصية',
      title: 'بياناتك تبقى لك.',
      body: 'لا حسابات. لا تحليلات. لا تتبعات. يُستخدم الموقع التقريبي فقط لبوصلة القبلة واسم المكان، وتبقى إعداداتك على جهازك.',
      link: 'اقرأ سياسة الخصوصية',
      stats: [
        { value: '0', label: 'حسابات' },
        { value: '0', label: 'إعلانات' },
        { value: '0', label: 'متتبعات' },
      ],
    },
    footer: {
      tagline: 'تطبيق مواقيت صلاة هادئ وخاص لقطر.',
      productTitle: 'المنتج',
      trustTitle: 'الثقة',
      moreTitle: 'المزيد',
      releases: 'الإصدارات',
      github: 'GitHub',
      issue: 'الإبلاغ عن مشكلة',
      copyright: '© 2026 HStudios. منادي برنامج خاص.',
      made: 'صُنع لقطر',
    },
  },
};
