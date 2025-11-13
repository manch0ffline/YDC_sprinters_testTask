export const TopBarType = {
  Menu: "menu",
  App: "app",
} as const;

export type TopBarType = typeof TopBarType[keyof typeof TopBarType];