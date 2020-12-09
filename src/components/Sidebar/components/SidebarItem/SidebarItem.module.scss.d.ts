export type Styles = {
  "sidebar-content__item": string;
  "sidebar-content__item--selected": string;
  "sidebar-content__item-icon": string;
  "sidebar-content__item-text": string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
