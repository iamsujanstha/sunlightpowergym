declare module 'react-scroll' {
  import * as React from 'react';

  interface ScrollLinkProps {
    activeClass?: string;
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    saveHashHistory?: boolean;
    containerId?: string;
    container?: Element;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<ScrollLinkProps> { }
}
