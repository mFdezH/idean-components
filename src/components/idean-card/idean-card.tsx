import { Component, h } from '@stencil/core';

@Component({
  tag: 'idean-card',
  styleUrl: 'idean-card.scss',
  shadow: true,
})
export class IdeanCard {

  render() {
    return (
      <div class="card">
        <div class="card-image">
          <div>
            <img src="https://source.unsplash.com/random/160x100" />
            <div class="title-container">
              <h5 class="title1"><slot name="title1"></slot></h5>
              <h4 class="title2"><slot name="title2"></slot></h4>
              <p class="text"><slot name="text"></slot></p>
            </div>
          </div>
        </div>

        <div class="button-container">
          <slot name="button"></slot>
        </div>
      </div>
    );
  }

}
