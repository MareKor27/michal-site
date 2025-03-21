export const Paths = {
  INDEX: { absolute: "/", routerConfig: "/" },
  ABOUT_US: { absolute: "/o-nas", routerConfig: "o-nas" },
  PRICE_LIST: { absolute: "/cennik", routerConfig: "cennik" },
  GALLERY: { absolute: "/galeria", routerConfig: "galeria" },
  CONTACT: { absolute: "/kontakt", routerConfig: "kontakt" },
  ADMIN: {
    INDEX: { absolute: "/administrator", routerConfig: "administrator" },
    LOGIN: { absolute: "/administrator/login", routerConfig: "login" },
    CHANGE_PASSWORD: {
      absolute: "/administrator/zmien-haslo/:token",
      routerConfig: "zmien-haslo/:token",
    },
    FORGOT_PASSWORD: {
      absolute: "/administrator/zapomnialem-hasla",
      routerConfig: "zapomnialem-hasla",
    },
    CALENDAR: {
      absolute: "/administrator/kalendarz",
      routerConfig: "kalendarz",
    },
    CALENDAR_ADD_RESERVATION: {
      absolute: "/administrator/rezerwacja",
      routerConfig: "rezerwacja",
    },
    OPTION: { absolute: "/administrator/opcje", routerConfig: "opcje" },
    STUFF: {
      absolute: "/administrator/instruktorzy",
      routerConfig: "instruktorzy",
    },
  },
};
