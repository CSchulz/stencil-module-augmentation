import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() ariaLabel: string | null = null;

  render() {
    return <div>Hello, World! I'm {this.ariaLabel}</div>;
  }
}
