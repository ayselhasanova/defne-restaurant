import React, { useState, useEffect, useRef } from "react";
import {
  Wifi,
  Globe,
  MapPin,
  Phone,
  Wine,
  Utensils,
  Cake,
  Sparkles,
  X,
  ArrowUp,
  Check
} from "lucide-react";
import { menuData } from "./data/menuData";

const ICON_MAP = {
  Wine: Wine,
  Utensils: Utensils,
  Cake: Cake
};

const UI_TEXT = {
  az: {
    wifi: "Wi-Fi",
    lang: "Dil",
    location: "Məkan",
    call: "Zəng",
    interior: "İnteryer",
    cozy: "Geniş və Rahat",
    menu: "Menyu",
    popular: "Popular",
    wifiTitle: "Wi-Fi Məlumatı",
    wifiSub: "Şəbəkəyə qoşulmaq üçün məlumatlar:",
    ssid: "Şəbəkə adı (SSID):",
    pass: "Şifrə:",
    close: "Bağla",
    langTitle: "Dil Seçimi",
    locTitle: "Məkan",
    address: "Ünvan",
    openMaps: "Google Xəritədə Aç",
    price: "Qiymət",
    backToTop: "Yuxarı qalx"
  },
  en: {
    wifi: "Wi-Fi",
    lang: "Lang",
    location: "Location",
    call: "Call",
    interior: "Interior",
    cozy: "Spacious & Cozy",
    menu: "MENU",
    popular: "Popular",
    wifiTitle: "Wi-Fi Information",
    wifiSub: "Connection details:",
    ssid: "Network Name (SSID):",
    pass: "Password:",
    close: "Close",
    langTitle: "Select Language",
    locTitle: "Location",
    address: "Address",
    openMaps: "Open in Google Maps",
    price: "Price",
    backToTop: "Back to top"
  },
  ru: {
    wifi: "Wi-Fi",
    lang: "Язык",
    location: "Место",
    call: "Звонок",
    interior: "Интерьер",
    cozy: "Просторный и уютный",
    menu: "МЕНЮ",
    popular: "Популярное",
    wifiTitle: "Информация о Wi-Fi",
    wifiSub: "Данные для подключения:",
    ssid: "Имя сети (SSID):",
    pass: "Пароль:",
    close: "Закрыть",
    langTitle: "Выбор языка",
    locTitle: "Местоположение",
    address: "Адрес",
    openMaps: "Открыть в Google Картах",
    price: "Цена",
    backToTop: "Наверх"
  }
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [currentLang, setCurrentLang] = useState("az");
  const [activeCategoryId, setActiveCategoryId] = useState(menuData.categories[0].id);

  const sectionRefs = useRef({});

// Loading page
useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const t = (field) => {
    if (!field) return "";
    if (typeof field === "string") return field;
    return field[currentLang] || field["az"] || "";
  };

  const ui = (key) => UI_TEXT[currentLang]?.[key] || UI_TEXT["az"][key] || key;

  const scrollToSection = (catId) => {
    setActiveCategoryId(catId);
    const element = sectionRefs.current[catId];
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const { restaurant, interior, categories, items } = menuData;

  return (
    <div className="min-h-screen bg-[#050505] text-[#FDFBF7] font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* FULLSCREEN VIDEO LOADER SPLASH SCREEN */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center overflow-hidden transition-opacity duration-700">
          <video 
            src="/loader.mp4" 
            autoPlay 
            muted 
            playsInline 
            className="sm:max-w-[540px] md:max-w-[680px] lg:max-w-[900px] h-full object-cover"
          />
        </div>
      )}
      <div className="w-full max-w-full sm:max-w-[540px] md:max-w-[680px] lg:max-w-[900px] mx-auto min-h-screen flex flex-col relative pb-32 shadow-2xl bg-[#09090a] border-x border-[#D4AF37]/15">

        {/* HEADER BRANDING (With Flanking Gold Lines & Radial Glow Background) */}
        <header className="pt-6 pb-3 px-4 sm:px-8 text-center flex flex-col items-center relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14)_0%,transparent_68%)]">

          {/* Logo Container with Left/Right Gold Lines */}
          <div className="w-full flex items-center justify-center gap-3 my-1">

            {/* Left Gold Flanking Line */}
            <div className="flex-1 relative h-[2px] overflow-hidden rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(212,175,55,0.8)_100%)] shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>

            {/* Logo Image */}
            <div className="w-[180px] sm:w-[220px] h-[110px] sm:h-[135px] flex items-center justify-center shrink-0">
              <img
                src="/logo-icon.png"
                alt="Chaidan Logo"
                className="w-full h-full object-contain drop-shadow-[0_4px_18px_rgba(212,175,55,0.4)] scale-160"
              />
            </div>

            {/* Right Gold Flanking Line */}
            <div className="flex-1 relative h-[2px] overflow-hidden rounded-full bg-[linear-gradient(270deg,transparent_0%,rgba(212,175,55,0.8)_100%)] shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>

          </div>

          {/* ACTION BUTTONS BAR */}
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full mt-4">
            <button
              onClick={() => setModalType("wifi")}
              className="flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl bg-[#121214] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all shadow-md group"
            >
              <Wifi className="w-5 h-5 text-[#D4AF37] mb-1 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="text-[10px] tracking-wider text-[#F8E6B9] font-medium uppercase">{ui("wifi")}</span>
            </button>

            <button
              onClick={() => setModalType("language")}
              className="flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl bg-[#121214] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all shadow-md group"
            >
              <Globe className="w-5 h-5 text-[#D4AF37] mb-1 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="text-[10px] tracking-wider text-[#F8E6B9] font-medium uppercase">{ui("lang")}</span>
            </button>

            <button
              onClick={() => setModalType("location")}
              className="flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl bg-[#121214] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all shadow-md group"
            >
              <MapPin className="w-5 h-5 text-[#D4AF37] mb-1 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="text-[10px] tracking-wider text-[#F8E6B9] font-medium uppercase">{ui("location")}</span>
            </button>

            <a
              href={`tel:${restaurant.phone}`}
              className="flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl bg-[#121214] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all shadow-md group"
            >
              <Phone className="w-5 h-5 text-[#D4AF37] mb-1 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="text-[10px] tracking-wider text-[#F8E6B9] font-medium uppercase">{ui("call")}</span>
            </a>
          </div>
        </header>

        {/* INTERIOR BANNER */}
        <section className="px-4 sm:px-8 mt-4">
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-xl bg-[#121214] h-40 sm:h-52 flex items-center justify-center">
            {interior[0]?.image ? (
              <img src={interior[0].image} alt="İnteryer" className="w-full h-full object-cover opacity-80" />
            ) : (
              <div className="absolute inset-0 bg-[#0c0c0e] border border-[#D4AF37]/30 flex items-center justify-center">
                <span className="text-[#D4AF37]/60 font-serif tracking-widest text-sm uppercase">Chaidan Tea House</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-6 pointer-events-none">
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-bold">{ui("interior")}</span>
              <h2 className="text-base sm:text-lg font-serif text-white tracking-wide">{ui("cozy")}</h2>
            </div>
          </div>
        </section>

        {/* MENYU TITLE DIVIDER */}
        <div className="text-center my-6 relative px-4 sm:px-8">
          <div className="absolute inset-0 flex items-center px-4 sm:px-8"><div className="w-full border-t border-[#D4AF37]/25"></div></div>
          <span className="relative px-4 bg-[#09090a] text-[#D4AF37] font-serif text-sm tracking-[0.3em] uppercase font-semibold">
            {ui("menu")}
          </span>
        </div>

        {/* STICKY CATEGORY NAV BUTTONS */}
        <div className="sticky top-2 z-40 px-4 sm:px-8 mb-6">
          <div className="flex gap-2 overflow-x-auto p-2 bg-[#09090a]/95 backdrop-blur-md rounded-2xl border border-[#D4AF37]/30 hide-scrollbar shadow-xl">
            {categories.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs whitespace-nowrap transition-all ${isActive
                    ? "bg-[#D4AF37] text-black font-semibold shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                    : "bg-[#141416] text-zinc-300 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
                    }`}
                >
                  <span>{t(cat.name)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SINGLE-PAGE SCROLLABLE CATEGORIES & DISHES */}
        <main className="px-4 sm:px-8 flex-1 space-y-10">
          {categories.map((cat) => {
            const dishes = items[cat.id] || [];
            if (dishes.length === 0) return null;

            return (
              <section
                key={cat.id}
                ref={(el) => (sectionRefs.current[cat.id] = el)}
                className="scroll-mt-28"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-serif font-bold">{t(cat.name)}</span>
                  <div className="flex-1 border-t border-[#D4AF37]/25"></div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  {dishes.map((dish) => (
                    <div
                      key={dish.id}
                      onClick={() => setSelectedDish(dish)}
                      className="bg-[#121214] border border-[#D4AF37]/25 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg hover:border-[#D4AF37]/60 transition-all cursor-pointer group"
                    >
                      <div className="relative h-55 sm:h-58 overflow-hidden bg-[#0c0c0e] flex items-center justify-center border-b border-[#D4AF37]/20">
                        {dish.image ? (
                          <img src={dish.image} alt={t(dish.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        ) : (
                          <div className="w-full h-full bg-[#0a0a0c] border border-[#D4AF37]/20 flex flex-col items-center justify-center p-2 text-center">
                            <Sparkles className="w-6 h-6 text-[#D4AF37]/50 mb-1" strokeWidth={1.5} />
                            <span className="text-[10px] text-[#D4AF37]/80 font-serif line-clamp-2">{t(dish.title)}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-zinc-100 line-clamp-2 leading-snug mb-2">{t(dish.title)}</h4>
                        <div className="text-[#D4AF37] font-bold text-sm sm:text-base tracking-wide">{dish.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </main>

        {/* MODAL SYSTEM */}
        {modalType && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#141416] border border-[#D4AF37]/40 rounded-2xl p-6 w-full max-w-sm text-center shadow-2xl relative">
              <button onClick={() => setModalType(null)} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
                <X size={20} />
              </button>

              {modalType === "wifi" && (
                <>
                  <Wifi className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" strokeWidth={1.5} />
                  <h3 className="text-lg font-serif text-[#D4AF37] mb-1">{ui("wifiTitle")}</h3>
                  <p className="text-xs text-zinc-400 mb-4">{ui("wifiSub")}</p>
                  <div className="bg-black/50 border border-[#D4AF37]/20 p-3 rounded-xl mb-4 text-left">
                    <div className="text-[11px] text-zinc-400">{ui("ssid")}</div>
                    <div className="text-sm font-semibold text-white mb-2">{restaurant.wifiName}</div>
                    <div className="text-[11px] text-zinc-400">{ui("pass")}</div>
                    <div className="text-sm font-semibold text-[#D4AF37]">{restaurant.wifiPass}</div>
                  </div>
                  <button onClick={() => setModalType(null)} className="w-full py-2.5 bg-[#D4AF37] text-black font-semibold rounded-xl text-xs uppercase tracking-wider">
                    {ui("close")}
                  </button>
                </>
              )}

              {modalType === "language" && (
                <>
                  <Globe className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" strokeWidth={1.5} />
                  <h3 className="text-lg font-serif text-[#D4AF37] mb-4">{ui("langTitle")}</h3>
                  <div className="space-y-2 mb-4">
                    {[
                      { code: "az", label: "Azərbaycan dili" },
                      { code: "en", label: "English" },
                      { code: "ru", label: "Русский" }
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setCurrentLang(lang.code); setModalType(null); }}
                        className={`w-full p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${currentLang === lang.code
                          ? "bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]"
                          : "bg-black/50 border-white/10 text-white hover:border-white/30"
                          }`}
                      >
                        <span>{lang.label}</span>
                        {currentLang === lang.code && <Check size={16} />}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {modalType === "location" && (
                <>
                  <MapPin className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" strokeWidth={1.5} />
                  <h3 className="text-lg font-serif text-[#D4AF37] mb-4">{ui("locTitle")}</h3>
                  <div className="bg-black/50 border border-white/10 rounded-xl p-4 mb-4 text-left">
                    <span className="block text-[#D4AF37] text-[10px] uppercase tracking-wider mb-1">{ui("address")}</span>
                    <p className="text-xs text-white leading-relaxed">{t(restaurant.address)}</p>
                  </div>
                  <a href={restaurant.mapLink} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 bg-[#D4AF37] text-black font-semibold rounded-xl text-xs uppercase tracking-wider block text-center">
                    {ui("openMaps")}
                  </a>
                </>
              )}
            </div>
          </div>
        )}

        {/* DISH DETAIL MODAL */}
        {selectedDish && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-end sm:items-center justify-center sm:p-4">
            <div className="bg-[#121214] border-t sm:border border-[#D4AF37]/40 rounded-t-[2.5rem] sm:rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col">
              <button onClick={() => setSelectedDish(null)} className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-black">
                <X size={18} />
              </button>

              <div className="relative h-80 sm:h-120 w-full bg-[#0c0c0e] flex items-center justify-center shrink-0 border-b border-[#D4AF37]/20">
                {selectedDish.image ? (
                  <img src={selectedDish.image} alt={t(selectedDish.title)} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <Sparkles className="w-12 h-12 text-[#D4AF37]/60 mb-2" strokeWidth={1.5} />
                    <span className="text-sm font-serif text-[#D4AF37]">{t(selectedDish.title)}</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-serif text-[#D4AF37] mb-2">{t(selectedDish.title)}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">{t(selectedDish.desc) || "Məlumat mövcud deyil."}</p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className="text-xs uppercase tracking-wider text-zinc-400">{ui("price")}</span>
                  <span className="text-lg font-bold text-[#D4AF37]">{selectedDish.price}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCROLL TO TOP BUTTON */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={ui("backToTop")}
          className="fixed bottom-5 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/55 bg-[#D4AF37] text-black shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </button>

      </div>
    </div>
  );
}