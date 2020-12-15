export type Styles = {
  table: string;
  table__header: string;
  table__item: string;
  "table__item--no-data": string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
