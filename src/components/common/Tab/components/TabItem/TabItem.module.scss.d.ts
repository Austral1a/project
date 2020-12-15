export type Styles = {
  tab: string;
  tab__title: string;
  "tab__title--active": string;
  "tab__title--inactive": string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
