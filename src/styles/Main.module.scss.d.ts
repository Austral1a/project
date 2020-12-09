export type Styles = {
  main: string;
  root: string;
};

export type classes = keyof Styles;

declare const styles: Styles;

export default styles;
