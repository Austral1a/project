export type Styles = {
  tab: string;
  tab__body: string;
  "tab__body--showed": string;
  tab__header: string;
  "tab__header-active-line": string;
  "tab__header-line": string;
  tab__title: string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
