export interface Blessing {
  id: number;
  category: string;
  categoryHe: string;
  hebrewText: string;
  transliteration: string;
  englishTranslation: string;
  themeColor: string; // Tailwind class background accents
  iconName: 'Sparkles' | 'Sun' | 'Compass' | 'Heart' | 'Flower' | 'Smile' | 'Shield' | 'Coffee';
}

export const BLESSINGS: Blessing[] = [
  {
    id: 1,
    category: "Inner Peace",
    categoryHe: "שלווה פנימית",
    hebrewText: "שכל נשימה שלך היום תביא איתה שקט, רוגע ושלווה פנימית עמוקה.",
    transliteration: "She'kol neshima shelcha hayom tavi ita sheket, roga, ve'shalva pnimmit amuka.",
    englishTranslation: "May every breath you take today bring quiet, calm, and deep inner peace.",
    themeColor: "from-amber-100 to-orange-100 border-amber-200 text-amber-900",
    iconName: "Compass"
  },
  {
    id: 2,
    category: "Joyful Smiles",
    categoryHe: "חיוכים של שמחה",
    hebrewText: "שתמצא סיבה לחייך חיוך אמיתי ומכל הלב בכל רגע ורגע בדרך.",
    transliteration: "She'timtza siba lechayech chiyuch amiti u'mi'kol halev be'chol rega va'rega baderech.",
    englishTranslation: "May you find a reason to smile a genuine, heartfelt smile at every single moment along the way.",
    themeColor: "from-yellow-100 to-amber-100 border-yellow-200 text-amber-900",
    iconName: "Smile"
  },
  {
    id: 3,
    category: "Light & Inspiration",
    categoryHe: "אור והשראה",
    hebrewText: "מי ייתן והיום הזה ייפתח בפניך דלתות של השראה, יצירתיות ואור חדש.",
    transliteration: "Mi yiten ve'hayom haze yipatech befaneycha dlatot shel hashra'ah, yetziratiyut ve'or chadash.",
    englishTranslation: "May this day open doors of inspiration, creativity, and a welcoming new light for you.",
    themeColor: "from-orange-100 to-red-100 border-orange-200 text-orange-900",
    iconName: "Sparkles"
  },
  {
    id: 4,
    category: "Full Presence",
    categoryHe: "נוכחות מלאה",
    hebrewText: "מאחל לך להיות מלא בנוכחות, להעריך את היופי שבפרטים הקטנים סביבך.",
    transliteration: "Me'achel lecha lihyot male be'nochachut, le'ha'arich et hayofi sheba'pratim haktanim svivecha.",
    englishTranslation: "Wishing you full presence, to deeply appreciate the unique beauty in the tiny details around you.",
    themeColor: "from-stone-100 to-amber-50 border-stone-200 text-stone-900",
    iconName: "Sun"
  },
  {
    id: 5,
    category: "Kindness & Love",
    categoryHe: "אהבת חינם",
    hebrewText: "שתזכה להעניק ולקבל אהבה חמה וללא תנאים מהאנשים שסביבך.",
    transliteration: "She'tizke le'ha'anik u'lekabel ahava chama ve'lo tnayim me'ha'anashim she'svivecha.",
    englishTranslation: "May you be blessed to share and receive warm, unconditional love from the humans around you.",
    themeColor: "from-red-100 to-rose-100 border-red-200 text-rose-950",
    iconName: "Heart"
  },
  {
    id: 6,
    category: "Discovery",
    categoryHe: "סקרנות וגילוי",
    hebrewText: "סקרנות היא המפתח. מאחל לך לגלות משהו חדש ויפה על עצמך היום.",
    transliteration: "Sakra'nut hi hamafte'ach. Me'achel lecha legalot mashehu chadash ve'yafe al atzmecha hayom.",
    englishTranslation: "Curiosity is the key. Wishing you to discover something new and beautiful about yourself today.",
    themeColor: "from-amber-130 to-orange-100 border-amber-300 text-stone-850",
    iconName: "Flower"
  },
  {
    id: 7,
    category: "Inner Strength",
    categoryHe: "כוח וחוסן",
    hebrewText: "זכור כי יש בך כוח פנימי עצום לעבור כל אתגר בחיוך ובבטחה גדולה.",
    transliteration: "Zchor ki yesh becha ko'ach pnimmi atzum la'avor kol etgar be'chiyuch u've'vitachon gadol.",
    englishTranslation: "Remember that you carry immense inner strength to withstand any challenge with a smile and grace.",
    themeColor: "from-amber-50 to-orange-100 border-orange-200 text-stone-900",
    iconName: "Shield"
  },
  {
    id: 8,
    category: "Mindful Warmth",
    categoryHe: "פשטות מחממת",
    hebrewText: "יום נפלא לעצור, ללגום משהו חם, להוקיר תודה על הקיים ולנשום לרווחה.",
    transliteration: "Yom nifla la'atzor, lilgom mashehu cham, le'hokir toda al hakayam ve'linshom lirvacha.",
    englishTranslation: "A wonderful day to pause, sip something warm, celebrate what is here, and breathe deeply.",
    themeColor: "from-amber-100 to-stone-100 border-amber-200 text-amber-950",
    iconName: "Coffee"
  }
];
