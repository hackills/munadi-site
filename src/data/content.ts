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
      title: 'Munadi — Prayer times, offline and private',
      description:
        'A simple, beautiful, private prayer-times app that began in Qatar and is now in the Gulf and Pakistan too: offline timings, iqamah, Qibla, adhan and widget. No ads or trackers.',
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
      eyebrow: 'Began in Qatar · now in the Gulf and Pakistan · offline',
      title: 'Prayer times.',
      titleAccent: 'Offline and private.',
      body: 'Simple and lightweight, beautifully designed, and privacy-focused by default: accurate offline prayer times that began in Qatar and are now in the Gulf and Pakistan too, with iqamah, qibla, adhan and widget—all in one, in Arabic and English, with no ads and no trackers.',
      primary: 'Download for Android',
      secondary: 'See what’s inside',
      badge: 'Private by default',
      trust: ['No ads', 'No trackers', 'Android 8+'],
    },
    strip: [
      'Qatar Calendar House',
      'Qatar areas · Gulf and Pakistan cities',
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
          body: 'In Qatar the full Qatar Calendar House timetable ships inside the app; in the other supported countries the times are calculated on your phone. No network, no lookup, no waiting.',
        },
        {
          icon: 'clock',
          title: 'Iqamah, your way',
          body: 'Set how many minutes pass between the adhan and iqamah for each prayer. Changes apply instantly.',
        },
        {
          icon: 'spark',
          title: 'The next prayer, clear',
          body: 'A calm countdown, the current prayer highlighted, and the next prayer and adhan time at a glance.',
        },
        {
          icon: 'compass',
          title: 'Qibla, one permission, no extras',
          body: 'A gold needle points to Makkah, corrected to true north, using approximate location alone — no extra permissions requested.',
        },
        {
          icon: 'volume',
          title: 'Adhan you choose',
          body: 'Bundled adhans, short alerts, a beep, silence, or your own audio file — plus a highest-priority mode for phones that delay alarms.',
        },
        {
          icon: 'widget',
          title: 'A widget that waits',
          body: 'Next prayer and iqamah on your home screen, with a countdown track, the Hijri date and sizes for every layout. One color for every widget — Dynamic, Munadi, Maroon, Sand, Ocean or Rose.',
        },
        {
          icon: 'globe',
          title: 'Arabic and English',
          body: 'A complete Arabic interface with a proper right-to-left layout.',
        },
        {
          icon: 'shield',
          title: 'Private by design',
          body: 'No accounts, ads, analytics, or trackers. Your settings and location stay on your device.',
        },
      ],
    },
    qatar: {
      eyebrow: 'Began in Qatar · Now in the Gulf and Pakistan',
      title: 'The timetable is the app.',
      body: 'In Qatar, Munadi does not guess prayer times from the sun. It carries the Qatar Calendar House annual table inside the app, so every time is the published Qatari time—even in airplane mode. Doha is the base, with the published Fajr and Maghrib shifts for Abu Samra, Dukhan and Al Shamal. Munadi has since expanded to Pakistan, where times are calculated on your phone with the Karachi method.',
      points: [
        'Qatar Calendar House annual table',
        'Doha base with Abu Samra, Dukhan and Al Shamal shifts',
        'Iqamah defaults for Qatar and the UAE, editable per prayer',
        'Saudi Arabia, the UAE, Kuwait, Oman and Pakistan: calculated on your phone with each country’s method',
        'Islamic midnight and the last third of the night',
        '12/24-hour time, following Android or your choice',
      ],
      quote: 'No network. No lookup. No waiting.',
      stat: '365',
      statLabel: 'days of Qatar timings inside the app',
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
      body: 'The latest signed APK, direct from GitHub. Free, ad-free, and tracker-free, with update checks you control and settings that move with you.',
      button: 'Download latest APK',
      notes: 'Release notes & checksum',
      versionLabel: 'Version',
      android: 'Android 8.0+',
      verify: 'SHA-256',
      install:
        'Android may ask you to allow installs from your browser. Munadi is not yet available on the Google Play Store or the Apple App Store.',
      signed: 'Signed release',
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Your data stays yours.',
      body: 'No accounts. No analytics. No tracking. Approximate location is used only for the Qibla compass, place name and prayer-time area, times outside Qatar are calculated on your device, and your settings stay on your device.',
      link: 'Read the privacy policy',
      stats: [
        { value: '0', label: 'accounts' },
        { value: '0', label: 'ads' },
        { value: '0', label: 'trackers' },
      ],
    },
    footer: {
      tagline: 'A simple, private prayer-times app. It began in Qatar.',
      productTitle: 'Product',
      trustTitle: 'Trust',
      moreTitle: 'More',
      releases: 'Releases',
      github: 'GitHub',
      issue: 'Report an issue',
      copyright: '© 2026 HStudios. Munadi is proprietary software.',
      made: 'Began in Qatar · now in the Gulf and Pakistan',
    },
  },
  ar: {
    meta: {
      title: 'منادي — مواقيت الصلاة، دون اتصال وبخصوصية',
      description:
        'تطبيق بسيط وجميل وخاص لمواقيت الصلاة، بدأ في قطر وهو الآن في الخليج وباكستان أيضًا: مواقيت دون اتصال، والإقامة والقبلة والأذان والودجة بالعربية والإنجليزية. بلا إعلانات أو متتبعات.',
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
      eyebrow: 'بدأ في قطر · الآن في الخليج وباكستان · دون اتصال',
      title: 'مواقيت الصلاة.',
      titleAccent: 'دون اتصال، وبخصوصية.',
      body: 'بسيط وخفيف، مصمم بعناية، والخصوصية أساسه: مواقيت دقيقة دون اتصال، بدأت في قطر وهي الآن في الخليج وباكستان أيضًا، مع الإقامة والقبلة والأذان والودجة — كل ذلك في تطبيق واحد، بالعربية والإنجليزية، بلا إعلانات أو متتبعات.',
      primary: 'حمّل لأندرويد',
      secondary: 'اكتشف التطبيق',
      badge: 'الخصوصية أساس التصميم',
      trust: ['بلا إعلانات', 'بلا متتبعات', 'أندرويد 8+'],
    },
    strip: [
      'تقويم قطر الدائم',
      'مناطق قطر · مدن الخليج وباكستان',
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
          body: 'في قطر يأتي جدول تقويم قطر الدائم كاملًا داخل التطبيق، وفي بقية البلدان المدعومة تُحسب المواقيت على هاتفك. لا شبكة، لا بحث، ولا انتظار.',
        },
        {
          icon: 'clock',
          title: 'الإقامة كما تريد',
          body: 'حدّد عدد الدقائق بين الأذان والإقامة لكل صلاة. تُطبّق التغييرات فورًا.',
        },
        {
          icon: 'spark',
          title: 'الصلاة القادمة بوضوح',
          body: 'عدّاد هادئ، وإبراز للصلاة الحالية، والصلاة القادمة ووقت الأذان في لمحة.',
        },
        {
          icon: 'compass',
          title: 'القبلة بإذن واحد، بلا أذونات إضافية',
          body: 'إبرة قلم ذهبية تشير إلى مكة، مصححة للشمال الحقيقي، باستخدام موقعك التقريبي فقط — دون طلب أي أذونات إضافية.',
        },
        {
          icon: 'volume',
          title: 'الأذان الذي تختاره',
          body: 'أذانات مضمّنة، تنبيهات قصيرة، نغمة، صمت، أو ملفك الصوتي الخاص — مع وضع أعلى أولوية للهواتف التي تؤخر المنبّهات.',
        },
        {
          icon: 'widget',
          title: 'ودجة تنتظرك',
          body: 'الصلاة القادمة والإقامة على شاشتك الرئيسية، مع شريط عدّ تنازلي والتاريخ الهجري وأحجام تناسب كل تخطيط. لون واحد لجميع الودجات — ديناميكي، منادي، عنابي، رملي، محيطي أو وردي.',
        },
        {
          icon: 'globe',
          title: 'بالعربية والإنجليزية',
          body: 'واجهة عربية كاملة باتجاه صحيح من اليمين إلى اليسار.',
        },
        {
          icon: 'shield',
          title: 'الخصوصية أساس التصميم',
          body: 'لا حسابات، لا إعلانات، لا تحليلات، ولا متتبعات. إعداداتك وموقعك يبقيان على جهازك.',
        },
      ],
    },
    qatar: {
      eyebrow: 'بدأ في قطر · والآن في الخليج وباكستان',
      title: 'الجدول هو التطبيق.',
      body: 'في قطر لا يخمّن منادي مواقيت الصلاة من موقع الشمس. بل يحمل جدول تقويم قطر الدائم السنوي داخل التطبيق، لتكون كل مواقيت هي المواقيت القطرية المنشورة — حتى في وضع الطيران. الدوحة هي الجدول الأساسي، مع فروق الفجر والمغرب المنشورة لأبو سمرة ودخان والشمال. ثم توسّع منادي إلى باكستان، حيث تُحسب المواقيت على هاتفك بطريقة كراتشي.',
      points: [
        'جدول تقويم قطر الدائم السنوي',
        'الدوحة أساسًا، مع فروق أبو سمرة ودخان والشمال',
        'إقامة قطر والإمارات الافتراضية، قابلة للتعديل لكل صلاة',
        'السعودية والإمارات والكويت وعُمان وباكستان: تُحسب على هاتفك بطريقة كل بلد',
        'منتصف الليل الإسلامي والثلث الأخير من الليل',
        'تنسيق 12/24 ساعة، حسب أندرويد أو اختيارك',
      ],
      quote: 'لا شبكة. لا بحث. لا انتظار.',
      stat: '365',
      statLabel: 'يومًا من مواقيت قطر داخل التطبيق',
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
      body: 'أحدث إصدار موقّع مباشرة من GitHub. مجاني، بلا إعلانات، وبلا متتبعات، مع تحقق من التحديثات تتحكم فيه، وإعداداتك تنتقل معك.',
      button: 'حمّل أحدث إصدار',
      notes: 'ملاحظات الإصدار والبصمة',
      versionLabel: 'الإصدار',
      android: 'Android 8.0+',
      verify: 'SHA-256',
      install:
        'قد يطلب أندرويد السماح بالتثبيت من متصفحك. منادي ليس متوفرًا بعد على متجر جوجل بلاي أو متجر آب ستور.',
      signed: 'إصدار موقّع',
    },
    privacy: {
      eyebrow: 'الخصوصية',
      title: 'بياناتك تبقى لك.',
      body: 'لا حسابات. لا تحليلات. لا تتبعات. يُستخدم الموقع التقريبي فقط لبوصلة القبلة واسم المكان ومنطقة مواقيت الصلاة، وتُحسب المواقيت خارج قطر على جهازك، وتبقى إعداداتك على جهازك.',
      link: 'اقرأ سياسة الخصوصية',
      stats: [
        { value: '0', label: 'حسابات' },
        { value: '0', label: 'إعلانات' },
        { value: '0', label: 'متتبعات' },
      ],
    },
    footer: {
      tagline: 'تطبيق مواقيت صلاة بسيط وخاص. بدأ في قطر.',
      productTitle: 'المنتج',
      trustTitle: 'الثقة',
      moreTitle: 'المزيد',
      releases: 'الإصدارات',
      github: 'GitHub',
      issue: 'الإبلاغ عن مشكلة',
      copyright: '© 2026 HStudios. منادي برنامج خاص.',
      made: 'بدأ في قطر · والآن في الخليج وباكستان',
    },
  },
};
