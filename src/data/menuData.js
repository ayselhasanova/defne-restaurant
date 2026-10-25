
import teaImage from '../products/tea.jpg';
import greenteaImage from '../products/greentea.jpg';
import mintteaImage from '../products/minttea.jpg';
import thymeteaImage from '../products/thymetea.jpg';
import gingerteaImage from '../products/gingertea.jpg';


// import alpengold from '../products/alpengold.jpg';
import snickers from '../products/snickers.jpg';
import bounty from '../products/bounty.jpg';
import twix from '../products/twix.jpg';
import rulet from '../products/rulet.jpg';
import chocopie from '../products/chocopie.jpg';

import whitecherry from '../products/whitecherry.jpg';
import rafaello from '../products/rafaello.jpg';

export const menuData = {
  "restaurant": {
    "name": "DEFNE",
    "tagline": "LOUNGE",
    "phone": "+994 12 000 00 00",
    "address": {
      "az": "Bakı, Azərbaycan, Nizami küçəsi 45",
      "en": "Baku, Azerbaijan, Nizami Street 45",
      "ru": "Баку, Азербайджан, улица Низами 45"
    },
    "mapLink": "https://maps.google.com/?q=Baku",
    "wifiName": "DEFNE_GUEST",
    "wifiPass": "defne2026"
  },
  "interior": [
    { "id": "int_1", "title": { "az": "Çay dəzgahı", "en": "Tea station", "ru": "Чайная станция" }, "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80" }
  ],
  "categories": [
    { "id": "cay", "name": { "az": "Çay", "en": "Tea", "ru": "Чай" }, "icon": "Wine" },
    { "id": "sokoladlar", "name": { "az": "Şokoladlar", "en": "Chocolates", "ru": "Шоколад" }, "icon": "Cake" },
    { "id": "murebbeler", "name": { "az": "Mürəbbələr", "en": "Jams", "ru": "Варенье" }, "icon": "Cake" },
    { "id": "cerez", "name": { "az": "Çərəz", "en": "Nuts", "ru": "Орехи" }, "icon": "Utensils" },
    { "id": "sirniyyat", "name": { "az": "Şirniyyat & Paxlava", "en": "Sweets & Baklava", "ru": "Сладости и пахлава" }, "icon": "Cake" },
    { "id": "alkoqolsuz", "name": { "az": "Alkoqolsuz İçkilər", "en": "Soft Drinks", "ru": "Безалкогольные" }, "icon": "Wine" },
    { "id": "piva", "name": { "az": "Pivə", "en": "Beer", "ru": "Пиво" }, "icon": "Wine" },
    { "id": "qelyan", "name": { "az": "Qəlyan", "en": "Shisha", "ru": "Кальян" }, "icon": "Utensils" },
    { "id": "pizza", "name": { "az": "Pizza", "en": "Pizza", "ru": "Пицца" }, "icon": "Utensils" },
    { "id": "tost", "name": { "az": "Tost & Fri", "en": "Toast & Fries", "ru": "Тост и фри" }, "icon": "Utensils" },
    { "id": "mezeler", "name": { "az": "Məzələr", "en": "Appetizers", "ru": "Закуски" }, "icon": "Utensils" },
    { "id": "desert", "name": { "az": "Desert", "en": "Dessert", "ru": "Десерт" }, "icon": "Cake" }
  ],
  "items": {
    "cay": [
      { "id": "c_1", "title": { "az": "Qara çay", "en": "Black tea", "ru": "Черный чай" }, "desc": { "az": "Ətirli klassik qara çay", "en": "Aromatic classic black tea", "ru": "Ароматный черный чай" }, "price": "6.00 ₼", "image": teaImage },
      { "id": "c_2", "title": { "az": "Yaşıl çay", "en": "Green tea", "ru": "Зеленый чай" }, "desc": { "az": "Təravətləndirici yaşıl çay", "en": "Refreshing green tea", "ru": "Освежающий зеленый чай" }, "price": "6.00 ₼", "image": greenteaImage },
      { "id": "c_3", "title": { "az": "Nanəli çay", "en": "Mint tea", "ru": "Мятный чай" }, "desc": { "az": "Təzə nanə yarpaqları ilə", "en": "With fresh mint leaves", "ru": "С листьями свежей мяты" }, "price": "7.00 ₼", "image": mintteaImage },
      { "id": "c_4", "title": { "az": "Kəklikotulu çay", "en": "Thyme tea", "ru": "Чай с чабрецом" }, "desc": { "az": "Dağ kəklikotu ilə dəmlənmiş", "en": "Brewed with mountain thyme", "ru": "Заваренный с горным чабрецом" }, "price": "7.00 ₼", "image": thymeteaImage },
      { "id": "c_5", "title": { "az": "Zəncəfilli-ballı çay", "en": "Ginger & Honey tea", "ru": "Имбирный чай с медом" }, "desc": { "az": "Xüsusi zəncəfil və təbii bal ilə", "en": "With special ginger and natural honey", "ru": "С Имбирь и медом" }, "price": "9.00 ₼", "image": gingerteaImage }
    ],
    "sokoladlar": [
      // { "id": "s_1", "title": { "az": "Alpengold", "en": "Alpengold", "ru": "Алпенгод" }, "desc": { "az": "Hər kəsin sevimlisi", "en": "Favorite chocolate", "ru": "Любимый шоколад" }, "price": "4.00 ₼", "image": alpengold },
      { "id": "s_2", "title": { "az": "Snickers", "en": "Snickers", "ru": "Сникерс" }, "desc": { "az": "Fıstıqlı şokolad", "en": "Peanut chocolate", "ru": "Шоколад с арахисом" }, "price": "3.50 ₼", "image": snickers },
      { "id": "s_3", "title": { "az": "Bounty", "en": "Bounty", "ru": "Баунти" }, "desc": { "az": "Kokoslu şokolad", "en": "Coconut chocolate", "ru": "Кокосовый шоколад" }, "price": "3.50 ₼", "image": bounty },
      { "id": "s_4", "title": { "az": "Twix", "en": "Twix", "ru": "Твикс" }, "desc": { "az": "Karamelli peçenyeli şokolad", "en": "Caramel cookie chocolate", "ru": "Шоколад с карамелью и печеньем" }, "price": "3.50 ₼", "image": twix },
      { "id": "s_5", "title": { "az": "Rulet", "en": "Rulet", "ru": "Рулет" }, "desc": { "az": "Şokolad çeşidi", "en": "Chocolate variety", "ru": "Шоколадное ассорти" }, "price": "4.00 ₼", "image": rulet },
      { "id": "s_6", "title": { "az": "Cocopit", "en": "Cocopit", "ru": "Кокопит" }, "desc": { "az": "Kokoslu şokolad", "en": "Coconut bar", "ru": "Кокосовый батончик" }, "price": "3.50 ₼", "image": chocopie }
    ],
    "murebbeler": [
      { "id": "m_1", "title": { "az": "Ağ gilas mürəbbəsi", "en": "White cherry jam", "ru": "Варенье из белой черешни" }, "desc": { "az": "Ev sayağı təbii mürəbbə", "en": "Homemade natural jam", "ru": "Домашнее натуральное варенье" }, "price": "6.00 ₼", "image": whitecherry },
      { "id": "m_2", "title": { "az": "Rafaello", "en": "Rafaello Jam", "ru": "Варенье Рафаэлло" }, "desc": { "az": "Xüsusi reseptlə imza mürəbbə", "en": "Signature jam with special recipe", "ru": "Фирменное варенье" }, "price": "8.00 ₼", "image": rafaello }
    ],
    "cerez": [
      { "id": "cr_1", "title": { "az": "Qoz", "en": "Walnut", "ru": "Грецкий орех" }, "desc": { "az": "Təmizlənmiş qoz ləpəsi", "en": "Peeled walnuts", "ru": "Очищенные грецкие орехи" }, "price": "5.00 ₼", "image": "" },
      { "id": "cr_2", "title": { "az": "Fındıq", "en": "Hazelnut", "ru": "Фундук" }, "desc": { "az": "Qovrulmuş fındıq", "en": "Roasted hazelnuts", "ru": "Жареный фундук" }, "price": "5.00 ₼", "image": "" },
      { "id": "cr_3", "title": { "az": "Keşyu", "en": "Cashew", "ru": "Кешью" }, "desc": { "az": "Xırtıldayan keşyu ləpəsi", "en": "Crispy cashews", "ru": "Хрустящий кешью" }, "price": "6.00 ₼", "image": "" },
      { "id": "cr_4", "title": { "az": "Badam", "en": "Almond", "ru": "Миндаль" }, "desc": { "az": "Seçilmiş badam", "en": "Selected almonds", "ru": "Отборный миндаль" }, "price": "6.00 ₼", "image": "" },
      { "id": "cr_5", "title": { "az": "Püstə", "en": "Pistachio", "ru": "Фисташки" }, "desc": { "az": "Duza qoyulmuş püstə", "en": "Salted pistachios", "ru": "Соленые фисташки" }, "price": "7.00 ₼", "image": "" },
      { "id": "cr_6", "title": { "az": "Kişmiş", "en": "Raisins", "ru": "Изюм" }, "desc": { "az": "Qızılı kişmiş", "en": "Golden raisins", "ru": "Золотистый изюм" }, "price": "4.00 ₼", "image": "" },
      { "id": "cr_7", "title": { "az": "Xurma", "en": "Dates", "ru": "Финики" }, "desc": { "az": "Şirin təbii xurma", "en": "Sweet natural dates", "ru": "Сладкие натуральные финики" }, "price": "4.50 ₼", "image": "" },
      { "id": "cr_8", "title": { "az": "Araxis", "en": "Peanuts", "ru": "Арахис" }, "desc": { "az": "Qovrulmuş duzlu araxis", "en": "Roasted salted peanuts", "ru": "Жареный соленый арахис" }, "price": "3.50 ₼", "image": "" }
    ],
    "sirniyyat": [
      { "id": "sr_1", "title": { "az": "Meyvə qurusu", "en": "Dried fruit", "ru": "Сухофрукты" }, "desc": { "az": "Qarışıq quru meyvələr", "en": "Assorted dried fruits", "ru": "Ассорти сухофруктов" }, "price": "7.00 ₼", "image": "" },
      { "id": "sr_2", "title": { "az": "Türk paxlavası", "en": "Turkish Baklava", "ru": "Турецкая пахлава" }, "desc": { "az": "Fıstıqlı əsl türk paxlavası", "en": "Real Turkish pistachio baklava", "ru": "Настоящая турецкая пахлава с фисташками" }, "price": "9.00 ₼", "image": "" }
    ],
    "alkoqolsuz": [
      { "id": "a_1", "title": { "az": "Redbull", "en": "Redbull", "ru": "Ред Булл" }, "desc": { "az": "Enerji içkisi", "en": "Energy drink", "ru": "Энергетический напиток" }, "price": "6.00 ₼", "image": "" },
      { "id": "a_2", "title": { "az": "Bizon", "en": "Bizon", "ru": "Бизон" }, "desc": { "az": "Enerji içkisi", "en": "Energy drink", "ru": "Энергетический напиток" }, "price": "4.50 ₼", "image": "" },
      { "id": "a_3", "title": { "az": "Cola, Fanta, Sprite", "en": "Cola, Fanta, Sprite", "ru": "Кола, Фанта, Спрайт" }, "desc": { "az": "Sərinləşdirici qazlı içkilər", "en": "Refreshing soft drinks", "ru": "Освежающие газированные напитки" }, "price": "4.00 ₼", "image": "" },
      { "id": "a_4", "title": { "az": "FuseTea", "en": "FuseTea", "ru": "ФьюзТи" }, "desc": { "az": "Soyuq çay", "en": "Iced tea", "ru": "Холодный чай" }, "price": "4.00 ₼", "image": "" },
      { "id": "a_5", "title": { "az": "Şirə", "en": "Juice", "ru": "Сок" }, "desc": { "az": "Təbii meyvə şirəsi", "en": "Natural fruit juice", "ru": "Натуральный сок" }, "price": "4.00 ₼", "image": "" },
      { "id": "a_6", "title": { "az": "Sirab (qazlı/qazsız)", "en": "Sirab Water", "ru": "Сираб вода" }, "desc": { "az": "Mineral su", "en": "Mineral water", "ru": "Минеральная вода" }, "price": "3.00 ₼", "image": "" },
      { "id": "a_7", "title": { "az": "Badamlı", "en": "Badamli water", "ru": "Бадамлы" }, "desc": { "az": "Təbii bulaq suyu", "en": "Natural spring water", "ru": "Природная родниковая вода" }, "price": "3.00 ₼", "image": "" },
      { "id": "a_8", "title": { "az": "İstisu", "en": "Istisu", "ru": "Истису" }, "desc": { "az": "Müalicəvi mineral su", "en": "Medical mineral water", "ru": "Лечебная минеральная вода" }, "price": "3.50 ₼", "image": "" },
      { "id": "a_9", "title": { "az": "Mohito", "en": "Mojito", "ru": "Мохито" }, "desc": { "az": "Nanəli sərinləşdirici", "en": "Refreshing mint mocktail", "ru": "Освежающий мохито" }, "price": "7.00 ₼", "image": "" },
      { "id": "a_10", "title": { "az": "Qəhvə (Kapuçino)", "en": "Coffee (Capuchino)", "ru": "Кофе (Капучино)" }, "desc": { "az": "İsti təzə qəhvə", "en": "Hot fresh coffee", "ru": "Горячий свежий кофе" }, "price": "6.00 ₼", "image": "" }
    ],
    "piva": [
      { "id": "p_1", "title": { "az": "Bokal pivə", "en": "Draft Beer", "ru": "Разливное пиво" }, "desc": { "az": "Təzə sərin bokal pivə", "en": "Fresh draft beer", "ru": "Свежее разливное пиво" }, "price": "6.00 ₼", "image": "" },
      { "id": "p_2", "title": { "az": "Şüşə pivə (Nofilter)", "en": "Bottled Beer (Unfiltered)", "ru": "Бутылочное пиво (Нефильтрованное)" }, "desc": { "az": "Keyfiyyətli nofilter pivə", "en": "Quality unfiltered bottled beer", "ru": "Качественное нефильтрованное пиво" }, "price": "7.00 ₼", "image": "" }
    ],
    "qelyan": [
      { "id": "q_1", "title": { "az": "Qazko qəlyan", "en": "Gasko Shisha", "ru": "Кальян Газко" }, "desc": { "az": "Standart ləzzətli qəlyan", "en": "Standard flavored shisha", "ru": "Стандартный кальян" }, "price": "25.00 ₼", "image": "https://images.unsplash.com/photo-1574894706980-1664d420f8fc?auto=format&fit=crop&w=600&q=80" },
      { "id": "q_2", "title": { "az": "Ananaslı qəlyan", "en": "Pineapple Shisha", "ru": "Ананасовый кальян" }, "desc": { "az": "Təbii ananas kasasında qəlyan", "en": "Shisha served in natural pineapple bowl", "ru": "Кальян на натуральном ананасе" }, "price": "45.00 ₼", "image": "" },
      { "id": "q_3", "title": { "az": "Qreypfrut qəlyan", "en": "Grapefruit Shisha", "ru": "Грейпфрутовый кальян" }, "desc": { "az": "Təbii qreypfrut kasasında", "en": "Served in natural grapefruit bowl", "ru": "На натуральном грейпфруте" }, "price": "35.00 ₼", "image": "" },
      { "id": "q_4", "title": { "az": "Alma qəlyan", "en": "Apple Shisha", "ru": "Яблочный кальян" }, "desc": { "az": "Ətirli alma kasasında qəlyan", "en": "Shisha in apple fruit bowl", "ru": "Кальян на яблоке" }, "price": "30.00 ₼", "image": "" }
    ],
    "pizza": [
      { "id": "pz_1", "title": { "az": "Sifarişlə pizza, pide, lahmacun", "en": "Custom Pizza, Pide, Lahmacun", "ru": "Пицца, пиде, лахмаджун на заказ" }, "desc": { "az": "Odun peçində təzə bişirilən xəmirlər", "en": "Freshly baked dough specialties", "ru": "Свежевыпеченные изделия" }, "price": "12.00 ₼", "image": "" }
    ],
    "tost": [
      { "id": "ts_1", "title": { "az": "Pendirli Tost", "en": "Cheese Toast", "ru": "Сырный тост" }, "desc": { "az": "Qızardılmış pendirli tost", "en": "Grilled cheese toast", "ru": "Жареный сырный тост" }, "price": "5.00 ₼", "image": "" },
      { "id": "ts_2", "title": { "az": "Sucuklu Tost", "en": "Sucuk Toast", "ru": "Тост с суджуком" }, "desc": { "az": "Sucuk və pendirli tost", "en": "Toast with sucuk and cheese", "ru": "Тост с суджуком и сыром" }, "price": "6.00 ₼", "image": "" },
      { "id": "ts_3", "title": { "az": "Kartof Fri", "en": "French Fries", "ru": "Картофель фри" }, "desc": { "az": "Xırtıldayan qızıl kartof fri", "en": "Crispy golden french fries", "ru": "Хрустящий картофель фри" }, "price": "5.00 ₼", "image": "" },
      { "id": "ts_4", "title": { "az": "Sosiska assoti", "en": "Sausage Assortment", "ru": "Ассорти сосисок" }, "desc": { "az": "Qızardılmış sosiska dilimləri", "en": "Fried sausage slices", "ru": "Жареные кусочки сосисок" }, "price": "7.00 ₼", "image": "" }
    ],
    "mezeler": [
      { "id": "mz_1", "title": { "az": "Suxari", "en": "Croutons", "ru": "Сухарики" }, "desc": { "az": "Sarımsaqlı ev suxariləri", "en": "Garlic house croutons", "ru": "Чесночные сухарики" }, "price": "4.00 ₼", "image": "" },
      { "id": "mz_2", "title": { "az": "Çips", "en": "Chips", "ru": "Чипсы" }, "desc": { "az": "Xırtıldayan çips", "en": "Crispy chips", "ru": "Хрустящие чипсы" }, "price": "4.50 ₼", "image": "" },
      { "id": "mz_3", "title": { "az": "Pendir", "en": "Cheese", "ru": "Сыр" }, "desc": { "az": "Pendir çeşidləri", "en": "Cheese selection", "ru": "Ассорти сыров" }, "price": "8.00 ₼", "image": "" },
      { "id": "mz_4", "title": { "az": "Noxud", "en": "Chickpeas", "ru": "Нут" }, "desc": { "az": "Qovrulmuş duzlu noxud", "en": "Roasted salted chickpeas", "ru": "Жареный соленый нут" }, "price": "4.00 ₼", "image": "" },
      { "id": "mz_5", "title": { "az": "İveriya", "en": "Iberia Meats", "ru": "Иберия" }, "desc": { "az": "Ədviyyatlı ət qəlyanaltısı", "en": "Spicy meat appetizer", "ru": "Пряная мясная закуска" }, "price": "10.00 ₼", "image": "" },
      { "id": "mz_6", "title": { "az": "Manqalüstü", "en": "Mangal-style Snack", "ru": "Мангальная закуска" }, "desc": { "az": "Manqal tərəvəzləri əzməsi", "en": "Grilled vegetable dip", "ru": "Закуска из овощей на мангале" }, "price": "7.00 ₼", "image": "" },
      { "id": "mz_7", "title": { "az": "Tum", "en": "Sunflower seeds", "ru": "Семечки" }, "desc": { "az": "Qovrulmuş günəbaxan tumu", "en": "Roasted sunflower seeds", "ru": "Жареные семечки" }, "price": "3.00 ₼", "image": "" },
      { "id": "mz_8", "title": { "az": "Popkorn", "en": "Popcorn", "ru": "Popcorn" }, "desc": { "az": "İsti duzlu popkorn", "en": "Warm salted popcorn", "ru": "Теплый соленый попкорн" }, "price": "4.00 ₼", "image": "" }
    ],
    "desert": [
      { "id": "ds_1", "title": { "az": "Meyvə assorti", "en": "Fruit Assortment", "ru": "Фруктовое ассорти" }, "desc": { "az": "Mövsümün təzə meyvə tabağı", "en": "Fresh seasonal fruit plate", "ru": "Тарелка свежих сезонных фруктов" }, "price": "20.00 ₼", "image": "" },
      { "id": "ds_2", "title": { "az": "Adi", "en": "", "ru": "" }, "desc": { "az": "", "en": "", "ru": "" }, "price": "5.00 ₼", "image": "" },
      { "id": "ds_3", "title": { "az": "VIP", "en": "VIP", "ru": "VIP " }, "desc": { "az": "Xüsusi VIP təqdimat", "en": "Special VIP presentation", "ru": "Специальная VIP подача" }, "price": "15.00 ₼", "image": "" }
    ]
  }
};