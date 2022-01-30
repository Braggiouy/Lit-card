import { html, css, LitElement } from 'lit';

export class LitCard extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
      }

      .card {
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.25rem;
      }

      .card-header,
      .card-footer {
        padding: 0.75rem 1.25rem;
        background-color: rgba(0, 0, 0, 0.03);
      }
      .card-body {
        padding: 1.25rem;
        line-height: 1.5;
      }
      .card-header {
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      }

      .card-footer {
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        text-align: var(--footer-align, left);
      }

      h5 {
        font-size: 1.25rem;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-bottom: 0.75rem;
      }

      ::slotted(p) {
        margin-block-start: 0;
        margin-block-end: 1rem;
      }

      .card-img {
        width: 100%;
        height: 180px;
        border-top-left-radius: calc(0.25rem - 1px);
        border-top-right-radius: calc(0.25rem - 1px);
      }

      .card-action {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        color: var(--action-button-color, #fff);
        background-color: var(--action-button-bg, #007bff);
        border-color: var(--action-button-bg, #007bff);
        cursor: pointer;
      }

      .card-action:hover {
        color: var(--action-button-color, #fff);
        background-color: var(--action-button-bg-hover, #0069d9);
        border-color: var(--action-button-border-hover, #0062cc);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      header: { type: String },
      footer: { type: String },
      img: { type: String },
      action: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Card title';
    this.action = 'accept';
  }

  render() {
    return html`
      <div class="card">
        ${this.header
          ? html`<div class="card-header">${this.header}</div>`
          : ''}
        ${this.img && !this.header
          ? html`<img class="card-img" src="${this.img}" alt="Img" />`
          : ''}
        <div class="card-body">
          <h5>${this.title}</h5>
          <slot></slot>
          ${this.action
            ? html`<button class="card-action" @click=${this.handleAction}>
                ${this.action}
              </button>`
            : ''}
        </div>
        ${this.footer
          ? html`<div class="card-footer">${this.footer}</div>`
          : ''}
      </div>
    `;
  }

  handleAction() {
    const event = new CustomEvent('card-action');
    this.dispatchEvent(event);
  }
}
