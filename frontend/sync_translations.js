const fs = require('fs');

const langs = ['az', 'en', 'ru'];
const categoryDicts = {
  az: {
    gelinlikler: "Gəlinliklər",
    kostyumlar: "Kişi Kostyumları",
    xanim_geyimleri: "Xanım Geyimləri",
    usaq_geyimleri: "Uşaq Geyimləri",
    hero_d: "Hər zövqə və hər tədbirə uyğun mükəmməl geyim kolleksiyası",
    count_pre: "Cəmi ",
    count_post: " məhsul tapıldı",
    empty: "Bu kateqoriyada hələ məhsul yoxdur.",
    not_found_t: "Kateqoriya tapılmadı",
    not_found_d: "Axtardığınız səhifə mövcud deyil və ya silinib."
  },
  en: {
    gelinlikler: "Bridal Dresses",
    kostyumlar: "Men's Suits",
    xanim_geyimleri: "Women's Clothing",
    usaq_geyimleri: "Kids' Clothing",
    hero_d: "Perfect clothing collection for every taste and every event",
    count_pre: "Total ",
    count_post: " products found",
    empty: "No products in this category yet.",
    not_found_t: "Category not found",
    not_found_d: "The page you are looking for does not exist or has been removed."
  },
  ru: {
    gelinlikler: "Свадебные платья",
    kostyumlar: "Мужские костюмы",
    xanim_geyimleri: "Женская одежда",
    usaq_geyimleri: "Детская одежда",
    hero_d: "Идеальная коллекция одежды на любой вкус и для любого мероприятия",
    count_pre: "Всего найдено ",
    count_post: " товаров",
    empty: "В этой категории пока нет товаров.",
    not_found_t: "Категория не найдена",
    not_found_d: "Страница, которую вы ищете, не существует или была удалена."
  }
};

for (const lang of langs) {
  const path = `i18n/dictionaries/${lang}.json`;
  let data = JSON.parse(fs.readFileSync(path, 'utf8'));
  data.category = categoryDicts[lang];
  
  // Also add "None" option for product creation
  if (!data.create_listing) data.create_listing = {};
  data.create_listing.cat_none = lang === 'az' ? 'Həmkarlar / Heç biri' : (lang === 'en' ? 'None / Other' : 'Никакой / Другое');
  
  // Store Browser labels
  if (!data.home) data.home = {};
  data.home.store_title = lang === 'az' ? 'Mağazalara göz at' : (lang === 'en' ? 'Browse Stores' : 'Посмотреть магазины');
  data.home.store_sub = lang === 'az' ? 'Ən yaxşı butiklər və satıcılar bir yerdə' : (lang === 'en' ? 'Top boutiques and sellers in one place' : 'Лучшие бутики и продавцы в одном месте');
  
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

// Fix SearchOverlay.tsx
let search = fs.readFileSync('components/layout/SearchOverlay.tsx', 'utf8');
search = search.replace(
  /key=\{tag\}\s+onClick=\{\(\)\s+=>\s+setQuery\(tag\)\}/g,
  `key={tagKey} onClick={() => setQuery(t("search.tags." + tagKey))}`
);
search = search.replace(
  /\{\s*tag\s*\}/g,
  `{t("search.tags." + tagKey)}`
);
fs.writeFileSync('components/layout/SearchOverlay.tsx', search);

console.log("Translations synced and SearchOverlay fixed.");
