export type Styles = {
  table: string;
  table__header: string;
  table__item: string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
