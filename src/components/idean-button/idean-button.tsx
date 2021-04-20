import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'idean-button',
  styleUrl: 'idean-button.scss',
  
})
export class IdeanButton {

  @Prop({reflect: true}) type: 'primary'|'secundary'|'text'| 'disabled' = 'primary';
  render() {
    return (
      <button><slot></slot></button>
    );
  }

}
