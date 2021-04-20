import { Component, h } from '@stencil/core';

@Component({
  tag: 'idean-text-input',
  styleUrl: 'idean-text-input.scss',
  shadow: true,
})
export class IdeanTextInput {

  render() {
    return (
      <form action="">
        <label htmlFor="text"><slot name="text-input"></slot></label>
        <input type="text" class="idean-text-input" name="text" placeholder="Write here..."/>
      </form>
    );
  }

}
