export type Styles = {
  accordion__item: string;
  "accordion__item--active": string;
  "accordion__item-body": string;
  "accordion__item-body--expanded": string;
  "accordion__item-header": string;
  "accordion__item-icon": string;
  "accordion__item-title": string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
