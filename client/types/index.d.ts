declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const component: React.FC<React.SVGProps<SVGSVGElement>>;

  export default component;
}

declare module '*.gif' {
  const src: string;
  export default src;
}
