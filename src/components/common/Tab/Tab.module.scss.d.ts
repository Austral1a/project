export type Styles = {
  tab: string;
  "tab__active-line": string;
  tab__body: string;
  tab__header: string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
