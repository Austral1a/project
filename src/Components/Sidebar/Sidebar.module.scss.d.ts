export type Styles = {
  sidebar: string;
  sidebar__empty: string;
  sidebar_closed: string;
  "sidebar-content": string;
  "sidebar-content__burger": string;
  "sidebar-content__items": string;
  "sidebar-overlay": string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
