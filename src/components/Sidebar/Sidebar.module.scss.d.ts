export type Styles = {
  main__content: string;
  sidebar: string;
  "sidebar--closed": string;
  "sidebar-background": string;
  "sidebar-content": string;
  "sidebar-content__burger": string;
  "sidebar-content__items": string;
  "sidebar-overlay": string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
