export {};

declare global {
  // interface HTMLElement {
  //   ariaLabel: string | null;
  // }
  //
  // interface HTMLStencilElement {
  //   ariaLabel: string | null;
  // }
  //
  // interface HTMLMyComponentElement {
  //   ariaLabel: string | null;
  // }
}

declare module '@stencil/core/internal' {
  interface HTMLStencilElement {
    ariaLabel: string | null;
  }
}

declare module '@stencil/core' {
  interface HTMLStencilElement {
    ariaLabel: string | null;
  }
}


