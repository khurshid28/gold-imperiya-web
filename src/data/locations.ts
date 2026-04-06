export interface StoreLocation {
  id: number;
  nameUz: string;
  nameRu: string;
  addressUz: string;
  addressRu: string;
  phone: string;
  workHours: string;
  mapUrl: string;
}

export const locations: StoreLocation[] = [
  {
    id: 1,
    nameUz: "Gold Imperiya — Chorsu",
    nameRu: "Gold Imperiya — Чорсу",
    addressUz: "Toshkent sh., Chorsu bozori yonida, 1-do'kon",
    addressRu: "г. Ташкент, рядом с базаром Чорсу, магазин 1",
    phone: "+998 90 123 45 67",
    workHours: "09:00 — 20:00",
    mapUrl: "https://maps.google.com/?q=41.3267,69.2331",
  },
  {
    id: 2,
    nameUz: "Gold Imperiya — Sergeli",
    nameRu: "Gold Imperiya — Сергели",
    addressUz: "Toshkent sh., Sergeli tumani, Yangi bozor",
    addressRu: "г. Ташкент, Сергелийский район, Янги базар",
    phone: "+998 90 234 56 78",
    workHours: "09:00 — 20:00",
    mapUrl: "https://maps.google.com/?q=41.2257,69.2198",
  },
  {
    id: 3,
    nameUz: "Gold Imperiya — Olmazor",
    nameRu: "Gold Imperiya — Алмазар",
    addressUz: "Toshkent sh., Olmazor tumani, Farhod bozori",
    addressRu: "г. Ташкент, Алмазарский район, базар Фарход",
    phone: "+998 90 345 67 89",
    workHours: "09:00 — 20:00",
    mapUrl: "https://maps.google.com/?q=41.3410,69.2120",
  },
  {
    id: 4,
    nameUz: "Gold Imperiya — Yunusobod",
    nameRu: "Gold Imperiya — Юнусабад",
    addressUz: "Toshkent sh., Yunusobod tumani, Mega Planet savdo markazi",
    addressRu: "г. Ташкент, Юнусабадский район, ТЦ Mega Planet",
    phone: "+998 90 456 78 90",
    workHours: "10:00 — 21:00",
    mapUrl: "https://maps.google.com/?q=41.3654,69.2846",
  },
];
