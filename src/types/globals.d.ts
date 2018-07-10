// tslint:disable no-namespace
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

declare namespace NodeJS {
  interface Global {
    fetch: () => {};
    jsdom: {
      reconfigure: ({ url: string }) => void;
    };
  }
}
