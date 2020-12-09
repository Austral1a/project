export type Styles = {
  header: string;
  "header__drop-down-menu": string;
  header__title: string;
  "header__title-icon": string;
  "header__tooltip-menu": string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
