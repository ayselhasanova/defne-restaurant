import banner from '../../public/banner.jpg';

import teaImage from '../products/tea.jpg';
import tea1Image from '../products/teaaa.jpg';
import greenteaImage from '../products/greentea.jpg';
import mintteaImage from '../products/minttea.jpg';
import fruitteaImage from '../products/fruittea.jpg';
import thymeteaImage from '../products/thymetea.jpg';
import spicyteaImage from '../products/spicytea.jpg';

import alpengold from '../products/alpengold.jpg';
import snickers from '../products/snickers.jpg';
import bounty from '../products/bounty.jpg';
import twix from '../products/twix.jpg';
import rulet from '../products/rulet.jpg';
import chocopie from '../products/chocopie.jpg';
import rafaellokonfet from '../products/rafaellokonfet.jpg';
import croissant from '../products/croissant.jpg';
import popkek from '../products/popkek.jpg';

import whitecherry from '../products/whitecherry.jpg';
import nutjam from '../products/nutjam.jpg';
import strawberryjam from '../products/strawberryjam.jpg';
import plombirjam from '../products/plombirjam.jpg';
import snickersjam from '../products/snickersjam.jpg';

import cola from '../products/cola.jpg';
import fanta from '../products/fanta.jpg';
import sprite from '../products/sprite.jpg';
import spritebanka from '../products/spritebanka.jpg';
import colabanka from '../products/colabanka.jpg';
import fantabanka from '../products/fantabanka.jpg';
import fusetea from '../products/fusetea.jpg';
import fuseteabanka from '../products/fuseteabanka.jpg';
import moxito from '../products/moxito.jpg';
import juice from '../products/juice.jpg';

import redbull from '../products/redbull.jpg';
import bizon from '../products/bizon.jpg';
import monster from '../products/monster.jpg';

import cappucino from '../products/cappucino.jpg';
import americano from '../products/americano.jpg';
import maccofee from '../products/maccoffee.jpg';
import hotchocolate from '../products/hotchocolate.jpg';


export const menuData = {
  "restaurant": {
    "name": "DEFNE",
    "tagline": "LOUNGE",
    "phone": "+994 55 715 00 30",
    "address": {
      "az": "Kazımovski 112",
      "en": "Kazımovski 112",
      "ru": "Kazımovski 112"
    },
    "mapLink": "https://maps.app.goo.gl/fArxR6v3R4ZRXR419",
    "wifiName": "Defne Lounge",
    "wifiPass": "Defne2026"
  },
  "interior": [
    { "id": "int_1", "title": { "az": "Çay dəzgahı", "en": "Tea station", "ru": "Чайная станция" }, "image": banner }
  ],
  "categories": [
    { "id": "caylar", "name": { "az": "Çaylar", "en": "Teas", "ru": "Чай" }, "icon": "Wine" },
    { "id": "sirniyyat", "name": { "az": "Şirniyyatlar", "en": "Sweets", "ru": "Сладости" }, "icon": "Cake" },
    { "id": "murebbeler", "name": { "az": "Mürəbbələr", "en": "Jams", "ru": "Варенье" }, "icon": "Cake" },
    { "id": "alkoqolsuz", "name": { "az": "Alkoqolsuz İçkilər", "en": "Soft Drinks", "ru": "Безалкогольные" }, "icon": "Wine" },
    { "id": "enerji", "name": { "az": "Enerji İçkiləri", "en": "Energy Drinks", "ru": "Энергетики" }, "icon": "Wine" },
    { "id": "kofeler", "name": { "az": "Kofelər", "en": "Coffees", "ru": "Кофе" }, "icon": "Wine" },
    { "id": "qelyanlar", "name": { "az": "Qəlyanlar", "en": "Shisha", "ru": "Кальян" }, "icon": "Utensils" },
    { "id": "meyve_qurusu", "name": { "az": "Meyvə Qurusu & Konfet", "en": "Dried Fruits & Candies", "ru": "Сухофрукты и конфеты" }, "icon": "Cake" },
    { "id": "cerezler", "name": { "az": "Çərəzlər", "en": "Nuts", "ru": "Орехи" }, "icon": "Utensils" },
    { "id": "pive", "name": { "az": "Pivə", "en": "Beer", "ru": "Пиво" }, "icon": "Wine" },
    { "id": "pive_mezeleri", "name": { "az": "Pivə Məzələri", "en": "Beer Snacks", "ru": "Закуски к пиву" }, "icon": "Utensils" },
    { "id": "desert", "name": { "az": "Desert", "en": "Dessert", "ru": "Десерт" }, "icon": "Cake" }
  ],
  "items": {
    "caylar": [
      {
        "id": "cy_1",
        "title": { "az": "Qara çay", "en": "Black tea", "ru": "Черный чай" },
        "desc": { "az": "Klassik dəmləmə qara çay", "en": "Classic brewed black tea", "ru": "Классический заварной черный чай" },
        "price": "4.00 ₼",
        "image": teaImage
      },
      {
        "id": "cy_2",
        "title": { "az": "Yaşıl çay", "en": "Green tea", "ru": "Зеленый чай" },
        "desc": { "az": "Təravətli yaşıl çay dəmləməsi", "en": "Fresh green tea brew", "ru": "Свежий зеленый чай" },
        "price": "5.00 ₼",
        "image": greenteaImage
      },
      {
        "id": "cy_3",
        "title": { "az": "Ədviyyatlı çay", "en": "Spiced tea", "ru": "Пряный чай" },
        "desc": { "az": "Seçilmiş ədviyyat və ot əlavələri ilə (Kəklikotu, melissa, jasmin, darçın, nanə, qızılgül, şaftalı, 1001 gecə çayı, manqo, mixək, sitrus)", "en": "With selected herbs and spices", "ru": "С травами и специями" },
        "price": "6.00 ₼",
        "image": spicyteaImage
      },
      {
        "id": "cy_4",
        "title": { "az": "Meyvəli çay", "en": "Fruity tea", "ru": "Фруктовый чай" },
        "desc": { "az": "Zəngin meyvə aromalı çay", "en": "Rich fruit flavored tea", "ru": "Чай с богатым фруктовым ароматом" },
        "price": "8.00 ₼",
        "image": fruitteaImage
      }
    ],
    "sirniyyat": [
      { "id": "cs_1", "title": { "az": "Alpengold", "en": "Alpengold", "ru": "Alpengold" }, "desc": { "az": "Standart şokolad", "en": "Standard chocolate", "ru": "Шоколад" }, "price": "6.00 ₼", "image": alpengold },
      { "id": "cs_2", "title": { "az": "Snickers", "en": "Snickers", "ru": "Snickers" }, "desc": { "az": "Fıstıqlı baton", "en": "Peanut chocolate bar", "ru": "Шоколадный батончик с арахисом" }, "price": "4.00 ₼", "image": snickers },
      { "id": "cs_3", "title": { "az": "Bounty", "en": "Bounty", "ru": "Bounty" }, "desc": { "az": "Kokos içlikli şokolad", "en": "Coconut filled chocolate", "ru": "Шоколад с кокосовой начинкой" }, "price": "4.00 ₼", "image": bounty },
      { "id": "cs_4", "title": { "az": "Twix", "en": "Twix", "ru": "Twix" }, "desc": { "az": "Karamel və peçenye", "en": "Caramel and cookie", "ru": "Печенье с карамелью" }, "price": "4.00 ₼", "image": twix },
      { "id": "cs_5", "title": { "az": "Rulet", "en": "Roll cake", "ru": "Рулет" }, "desc": { "az": "Dilimlənmiş şirin rulet", "en": "Sliced sweet roll", "ru": "Сладкий рулет" }, "price": "5.00 ₼", "image": rulet },
      { "id": "cs_6", "title": { "az": "Cocopie", "en": "Cocopie", "ru": "Chocopie" }, "desc": { "az": "Paketdə 6 ədəd", "en": "6 pieces in pack", "ru": "6 штук в упаковке" }, "price": "6.00 ₼", "image": chocopie },
      { "id": "cs_7", "title": { "az": "Rafaello", "en": "Rafaello", "ru": "Rafaello" }, "desc": { "az": "Kokoslu konfet, 6 ədəd", "en": "Coconut candies, 6 pcs", "ru": "Кокосовые конфеты, 6 шт" }, "price": "6.00 ₼", "image": rafaellokonfet },
      { "id": "cs_8", "title": { "az": "Kruassan", "en": "Croissant", "ru": "Круассан" }, "desc": { "az": "Təzə bişmiş kruassan", "en": "Freshly baked croissant", "ru": "Свежевыпеченный круассан" }, "price": "7.00 ₼", "image": croissant },
      { "id": "cs_9", "title": { "az": "Pop kek", "en": "Pop cake", "ru": "Поп кек" }, "desc": { "az": "Şirin pop kek", "en": "Sweet pop cake", "ru": "Сладкий кекс" }, "price": "6.00 ₼", "image": popkek }
    ],
    "murebbeler": [
      { "id": "mr_1", "title": { "az": "Qoz mürəbbəsi", "en": "Walnut jam", "ru": "Варенье из грецкого ореха" }, "desc": { "az": "Ev üsulu qoz mürəbbəsi", "en": "Homemade walnut jam", "ru": "Домашнее варенье из грецкого ореха" }, "price": "7.00 ₼", "image": nutjam },
      { "id": "mr_2", "title": { "az": "Çiyələk mürəbbəsi", "en": "Strawberry jam", "ru": "Клубничное варенье" }, "desc": { "az": "Təbii çiyələk mürəbbəsi", "en": "Natural strawberry jam", "ru": "Натуральное клубничное варенье" }, "price": "6.00 ₼", "image":strawberryjam },
      { "id": "mr_3", "title": { "az": "Snickers mürəbbəsi", "en": "Snickers jam", "ru": "Варенье Сникерс" }, "desc": { "az": "Xüsusi hazırlanmış desert mürəbbə", "en": "Special dessert jam", "ru": "Специальное десертное варенье" }, "price": "6.00 ₼", "image": snickersjam },
      { "id": "mr_4", "title": { "az": "Plombir mürəbbəsi", "en": "Plombir jam", "ru": "Варенье Пломбир" }, "desc": { "az": "Krem dadlı mürəbbə", "en": "Cream flavored jam", "ru": "Варенье со вкусом пломбира" }, "price": "6.00 ₼", "image": plombirjam },
      { "id": "mr_5", "title": { "az": "Ağ gilas mürəbbəsi", "en": "White cherry jam", "ru": "Варенье из белой черешни" }, "desc": { "az": "Ənənəvi ağ gilas mürəbbəsi", "en": "Traditional white cherry jam", "ru": "Традиционное варенье из белой черешни" }, "price": "6.00 ₼", "image": whitecherry }
    ],
    "alkoqolsuz": [
      { "id": "a_1", "title": { "az": "Cola (1L)", "en": "Cola (1L)", "ru": "Кола (1Л)" }, "desc": { "az": "Sərinləşdirici qazlı içki 1 litr", "en": "Refreshing soft drink 1L", "ru": "Освежающий газированный напиток 1л" }, "price": "3.00 ₼", "image": cola },
      { "id": "a_2", "title": { "az": "Fanta (1L)", "en": "Fanta (1L)", "ru": "Фанта (1Л)" }, "desc": { "az": "Portağal qazlı içki 1 litr", "en": "Orange soft drink 1L", "ru": "Апельсиновый напиток 1л" }, "price": "3.00 ₼", "image": fanta },
      { "id": "a_3", "title": { "az": "Sprite (1L)", "en": "Sprite (1L)", "ru": "Спрайт (1Л)" }, "desc": { "az": "Limon qazlı içki 1 litr", "en": "Lemon soft drink 1L", "ru": "Лимонный напиток 1л" }, "price": "3.00 ₼", "image": sprite },
      { "id": "a_4", "title": { "az": "Cola (Banka)", "en": "Cola (Can)", "ru": "Кола (Жерстяная банка)" }, "desc": { "az": "Banka qazlı içki", "en": "Canned soft drink", "ru": "Газированный напиток в банке" }, "price": "3.00 ₼", "image": colabanka },
      { "id": "a_5", "title": { "az": "Fanta (Banka)", "en": "Fanta (Can)", "ru": "Фанта (Банка)" }, "desc": { "az": "Banka qazlı içki", "en": "Canned soft drink", "ru": "Газированный напиток в банке" }, "price": "3.00 ₼", "image": fantabanka },
      { "id": "a_6", "title": { "az": "Sprite (Banka)", "en": "Sprite (Can)", "ru": "Спрайт (Банка)" }, "desc": { "az": "Banka qazlı içki", "en": "Canned soft drink", "ru": "Газированный напиток в банке" }, "price": "3.00 ₼", "image": spritebanka },
      { "id": "a_7", "title": { "az": "Fuse tea (0.5L)", "en": "Fuse tea (0.5L)", "ru": "Фьюз чай (0.5Л)" }, "desc": { "az": "Soyuq çay 0.5 litr", "en": "Iced tea 0.5L", "ru": "Холодный чай 0.5л" }, "price": "2.50 ₼", "image": fusetea },
      { "id": "a_8", "title": { "az": "Fuse tea (Banka)", "en": "Fuse tea (Can)", "ru": "Фьюз чай (Банка)" }, "desc": { "az": "Banka soyuq çay", "en": "Canned iced tea", "ru": "Холодный чай в банке" }, "price": "3.00 ₼", "image": fuseteabanka },
      { "id": "a_9", "title": { "az": "Meyvə şirəsi (1L)", "en": "Fruit juice (1L)", "ru": "Фруктовый сок (1Л)" }, "desc": { "az": "Qutu meyvə şirəsi 1 litr", "en": "Box fruit juice 1L", "ru": "Фруктовый сок в пакете 1л" }, "price": "4.00 ₼", "image": juice },
      { "id": "a_10", "title": { "az": "Moxito (Qrafin)", "en": "Mojito (Pitcher)", "ru": "Мохито (Кувшин)" }, "desc": { "az": "Sərinləşdirici moxito qrafində", "en": "Refreshing mojito in pitcher", "ru": "Освежающий мохито в кувшине" }, "price": "6.00 ₼", "image": moxito }
    ],
    "enerji": [
      { "id": "en_1", "title": { "az": "Red bull", "en": "Red bull", "ru": "Red bull" }, "desc": { "az": "Enerji içkisi", "en": "Energy drink", "ru": "Энергетический напиток" }, "price": "5.00 ₼", "image": redbull },
      { "id": "en_2", "title": { "az": "Bizon", "en": "Bizon", "ru": "Bizon" }, "desc": { "az": "Bütün növlər", "en": "All varieties", "ru": "Все виды" }, "price": "3.00 ₼", "image": bizon },
      { "id": "en_3", "title": { "az": "Monster", "en": "Monster", "ru": "Monster" }, "desc": { "az": "Böyük həcm enerji içkisi", "en": "Large energy drink", "ru": "Энергетический напиток большой" }, "price": "10.00 ₼", "image": monster }
    ],
    "kofeler": [
      { "id": "kf_1", "title": { "az": "Kappucino (paket)", "en": "Cappuccino (packet)", "ru": "Капучино (пакет)" }, "desc": { "az": "İsti hazır qəhvə", "en": "Hot instant coffee", "ru": "Горячий растворимый кофе" }, "price": "2.00 ₼", "image": cappucino },
      { "id": "kf_2", "title": { "az": "Amerikano (paket)", "en": "Americano (packet)", "ru": "Американо (пакет)" }, "desc": { "az": "İsti qəhvə", "en": "Hot coffee", "ru": "Горячий кофе" }, "price": "2.00 ₼", "image": americano },
      { "id": "kf_3", "title": { "az": "Maccofe (paket)", "en": "Maccode (packet)", "ru": "Maccode (пакет)" }, "desc": { "az": "Hazır qəhvə paketi", "en": "Instant coffee packet", "ru": "Пакет растворимого кофе" }, "price": "2.00 ₼", "image": maccofee },
      { "id": "kf_4", "title": { "az": "İsti şokolad", "en": "Hot chocolate", "ru": "Горячий шоколад" }, "desc": { "az": "Şokoladlı isti içki", "en": "Chocolate hot drink", "ru": "Шоколадный горячий напиток" }, "price": "2.00 ₼", "image": hotchocolate }
    ],
    "qelyanlar": [
      { "id": "ql_1", "title": { "az": "Saxsı", "en": "Clay bowl", "ru": "Глиняная чаша" }, "desc": { "az": "Standart şaxtı qəlyan", "en": "Standard clay bowl shisha", "ru": "Стандартный кальян на чаше" }, "price": "10.00 ₼", "image": "https://images.unsplash.com/photo-1574894706980-1664d420f8fc?auto=format&fit=crop&w=600&q=80" },
      { "id": "ql_2", "title": { "az": "Alma", "en": "Apple shisha", "ru": "Яблочный кальян" }, "desc": { "az": "Təbii alma kasasında", "en": "In natural apple bowl", "ru": "На натуральном яблоке" }, "price": "15.00 ₼", "image": "" },
      { "id": "ql_3", "title": { "az": "Qreyfrut", "en": "Grapefruit shisha", "ru": "Грейпфрутовый кальян" }, "desc": { "az": "Təbii qreyfrut kasasında", "en": "In natural grapefruit bowl", "ru": "На натуральном грейпфруте" }, "price": "18.00 ₼", "image": "" },
      { "id": "ql_4", "title": { "az": "Portağal", "en": "Orange shisha", "ru": "Апельсиновый кальян" }, "desc": { "az": "Təbii portağal kasasında", "en": "In natural orange bowl", "ru": "На натуральном апельсине" }, "price": "18.00 ₼", "image": "" }
    ],
    "meyve_qurusu": [
      { "id": "mq_1", "title": { "az": "Xurma", "en": "Dates", "ru": "Финики" }, "desc": { "az": "Qurudulmuş xurma", "en": "Dried dates", "ru": "Сушеные финики" }, "price": "3.00 ₼", "image": "" },
      { "id": "mq_2", "title": { "az": "Banan qurusu", "en": "Dried banana", "ru": "Сушеный банан" }, "desc": { "az": "Xırtıldayan banan çipsləri", "en": "Crispy banana chips", "ru": "Хрустящие банановые чипсы" }, "price": "4.00 ₼", "image": "" },
      { "id": "mq_3", "title": { "az": "Alma qurusu", "en": "Dried apple", "ru": "Сушеное яблоко" }, "desc": { "az": "Təbii alma dilimləri", "en": "Natural apple slices", "ru": "Натуральные дольки яблока" }, "price": "3.00 ₼", "image": "" },
      { "id": "mq_4", "title": { "az": "Papaya qurusu", "en": "Dried papaya", "ru": "Сушеная папайя" }, "desc": { "az": "Şirin papaya tikələri", "en": "Sweet papaya pieces", "ru": "Сладкие кусочки папайи" }, "price": "2.00 ₼", "image": "" },
      { "id": "mq_5", "title": { "az": "Yoğurt konfeti", "en": "Yogurt candy", "ru": "Йогуртовые конфеты" }, "desc": { "az": "Yoğurt örtüklü şirniyyat", "en": "Yogurt coated candy", "ru": "Конфеты в йогуртовой глазури" }, "price": "5.00 ₼", "image": "" },
      { "id": "mq_6", "title": { "az": "Manqo qurusu", "en": "Dried mango", "ru": "Сушеное манго" }, "desc": { "az": "Qurudulmuş manqo dilimləri", "en": "Dried mango slices", "ru": "Сушеные дольки манго" }, "price": "3.00 ₼", "image": "" },
      { "id": "mq_7", "title": { "az": "Ərik qurusu", "en": "Dried plum", "ru": "Сушеный чернослив" }, "desc": { "az": "Qurudulmuş erik", "en": "Dried plum", "ru": "Сушеный чернослив" }, "price": "4.00 ₼", "image": "" },
      { "id": "mq_8", "title": { "az": "Qaysı", "en": "Dried apricot", "ru": "Курага" }, "desc": { "az": "Şirin qaysı qurusu", "en": "Sweet dried apricot", "ru": "Сладкая курага" }, "price": "5.00 ₼", "image": "" },
      { "id": "mq_9", "title": { "az": "Jele konfeti", "en": "Jelly candy", "ru": "Желейные конфеты" }, "desc": { "az": "Rəngli jele konfetlər", "en": "Colorful jelly candies", "ru": "Цветные желейные конфеты" }, "price": "5.00 ₼", "image": "" }
    ],
    "cerezler": [
      { "id": "cr_1", "title": { "az": "Ağ kişmiş", "en": "White raisins", "ru": "Белый изюм" }, "desc": { "az": "Təmizlənmiş ağ kişmiş", "en": "Peeled white raisins", "ru": "Очищенный белый изюм" }, "price": "3.50 ₼", "image": "" },
      { "id": "cr_2", "title": { "az": "Qara kişmiş", "en": "Black raisins", "ru": "Черный изюм" }, "desc": { "az": "Seçilmiş qara kişmiş", "en": "Selected black raisins", "ru": "Отборный черный изюм" }, "price": "3.50 ₼", "image": "" },
      { "id": "cr_3", "title": { "az": "Qoz", "en": "Walnut", "ru": "Грецкий орех" }, "desc": { "az": "Təmizlənmiş qoz ləpəsi", "en": "Peeled walnut kernels", "ru": "Очищенные ядра грецкого ореха" }, "price": "5.00 ₼", "image": "" },
      { "id": "cr_4", "title": { "az": "Fındıq", "en": "Hazelnut", "ru": "Фундук" }, "desc": { "az": "Qovrulmuş fındıq", "en": "Roasted hazelnuts", "ru": "Жареный фундук" }, "price": "4.00 ₼", "image": "" },
      { "id": "cr_5", "title": { "az": "Badam", "en": "Almond", "ru": "Миндаль" }, "desc": { "az": "Seçilmiş badam ləpəsi", "en": "Selected almond kernels", "ru": "Отборный миндаль" }, "price": "5.00 ₼", "image": "" },
      { "id": "cr_6", "title": { "az": "Keşyu", "en": "Cashew", "ru": "Кешью" }, "desc": { "az": "Xırtıldayan keşyu", "en": "Crispy cashews", "ru": "Хрустящий кешью" }, "price": "5.00 ₼", "image": "" },
      { "id": "cr_7", "title": { "az": "Püstə", "en": "Pistachio", "ru": "Фисташки" }, "desc": { "az": "Duzlu püstə ləpəsi", "en": "Salted pistachios", "ru": "Соленые фисташки" }, "price": "7.50 ₼", "image": "" },
      { "id": "cr_8", "title": { "az": "Araxis", "en": "Peanuts", "ru": "Арахис" }, "desc": { "az": "Qovrulmuş araxis", "en": "Roasted peanuts", "ru": "Жареный арахис" }, "price": "3.00 ₼", "image": "" }
    ],
    "pive": [
      { "id": "pv_1", "title": { "az": "Xırdalan (0.5L)", "en": "Xirdalan (0.5L)", "ru": "Хырдалан (0.5Л)" }, "desc": { "az": "Şüşə qablaşdırma yerli pivə", "en": "Bottled local beer", "ru": "Бутылочное местное пиво" }, "price": "4.50 ₼", "image": "" },
      { "id": "pv_2", "title": { "az": "Corona (0.35L)", "en": "Corona (0.35L)", "ru": "Corona (0.35Л)" }, "desc": { "az": "Şüşə idxal pivə", "en": "Bottled imported beer", "ru": "Бутылочное импортное пиво" }, "price": "8.00 ₼", "image": "" },
      { "id": "pv_3", "title": { "az": "Efes draft (0.33L)", "en": "Efes draft (0.33L)", "ru": "Efes draft (0.33Л)" }, "desc": { "az": "Şüşə yüngül pivə", "en": "Bottled draft beer", "ru": "Бутылочное легкое пиво" }, "price": "5.00 ₼", "image": "" }
    ],
    "pive_mezeleri": [
      { "id": "pm_1", "title": { "az": "Yaquar tum", "en": "Yaguar seeds", "ru": "Семечки Ягуар" }, "desc": { "az": "Qovrulmuş tum", "en": "Roasted sunflower seeds", "ru": "Жареные семечки" }, "price": "3.00 ₼", "image": "" },
      { "id": "pm_2", "title": { "az": "Suxari", "en": "Croutons", "ru": "Сухарики" }, "desc": { "az": "Duzlu ev suxarisi", "en": "Salted house croutons", "ru": "Соленые сухарики" }, "price": "3.00 ₼", "image": "" },
      { "id": "pm_3", "title": { "az": "Çipsi", "en": "Chips", "ru": "Чипсы" }, "desc": { "az": "Xırtıldayan çips", "en": "Crispy potato chips", "ru": "Хрустящие чипсы" }, "price": "4.00 ₼", "image": "" }
    ],
    "desert": [
      { "id": "ds_1", "title": { "az": "Meyvə (orta)", "en": "Medium fruit plate", "ru": "Фруктовая тарелка (средняя)" }, "desc": { "az": "Mövsüm meyvələri çeşidi", "en": "Seasonal fruit assortment", "ru": "Ассорти сезонных фруктов" }, "price": "15.00 ₼", "image": "" },
      { "id": "ds_2", "title": { "az": "Meyvə (böyük)", "en": "Large fruit plate", "ru": "Фруктовая тарелка (большая)" }, "desc": { "az": "Böyük həcmli meyvə tabağı", "en": "Large fruit serving plate", "ru": "Большая порция фруктов" }, "price": "25.00 ₼", "image": "" }
    ]
  }
};