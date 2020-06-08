'use strict'
// Issue about seeing the text without css: https://github.com/Polymer/lit-element/issues/553
import { LitElement, html, css } from 'lit-element';

class EosButton extends LitElement {
  static get properties () {
    return {
      type: { type: String },
      state: { type: String },
      scope: { type: String },
      icon: { type: String },
      size: { type: String }
    }
  }

  constructor () {
    super()
    this.type = this.type
    this.state= this.state
    this.scope = this.scope
    this.icon = this.icon
    this.size = this.size
  }

  static get styles () {
    return css`
    :host {
      margin-right: 1em;
    }

    ::slotted(a) {
      color: var(--eos-bc-gray-1000);
      text-decoration: underline;
      font-weight: bold;
    }

    ::slotted(a:hover) {
      text-decoration: none;
    }

    slot[scope=global]::slotted(a) {
      color: white ;
    }

    /* ==== General ==== */
    .btn {
      -webkit-appearance: button;
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: 20px;
      display: inline-block;
      font-family: inherit;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.5em;
      overflow: visible;
      padding: 8px 16px;
      text-align: center;
      text-transform: none;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      user-select: none;
      vertical-align: middle;
      white-space: nowrap;
    }

    .btn:not(:disabled):not(.disabled) {
      cursor: pointer;
    }
    /* ==== Primary ==== */
    .primary {
      background-color: var(--eos-bc-green-500);
      border-color: var(--eos-bc-green-500);
      color: var(--eos-bc-white);
    }
    .primary:hover, .primary:active:hover {
      background-color: var(--eos-bc-green-900);
      border-color: var(--eos-bc-green-900);
      color: var(--eos-bc-white);
    }
    /* ==== Primary disabled ==== */
    .primary.disabled, .primary.disabled:hover, .primary.disabled:focus {
      background-color: var(--eos-bc-green-500);
      border-color: var(--eos-bc-green-500);
      opacity: 0.6;
    }
    /* ==== Primary outline ==== */
    .primary-outline {
      border-color: var(--eos-bc-green-500);
      color: var(--eos-bc-green-500);
      background-image: none;
    }
    .primary-outline:hover, .primary-outline:active:hover {
      border-color: var(--eos-bc-green-900);
      color: var(--eos-bc-green-900);
    }
    /* ==== Primary outline disabled ==== */
    .primary-outline.disabled, .primary-outline.disabled:hover, .primary-outline.disabled:focus {
      border-color: var(--eos-bc-green-500);
      color: var(--eos-bc-green-500);
      opacity: 0.6;
    }
    /* ==== Secondary ==== */
    .secondary {
      border-color: var(--eos-bc-gray-1000);
      color: var(--eos-bc-gray-1000);
    }
    .secondary:hover, .btn-secondary:active:hover {
      border-color: var(--eos-bc-gray-900);
      color: var(--eos-bc-gray-900);
    }
    /* ==== Secondary disabled ==== */
    .secondary.disabled, .secondary.disabled:hover, .secondary.disabled:focus {
      background-color: transparent;
      border-color: var(--eos-bc-gray-500);
      color: var(--eos-bc-gray-500);
      opacity: 0.6;
    }
    /* ==== Secondary inverse ==== */
    .secondary-inverse {
      border-color: var(--eos-bc-white);
      color: var(--eos-bc-white);
    }
    .secondary-inverse:hover, .secondary-inverse:active:hover {
      border-color: var(--eos-bc-gray-100);
      color: var(--eos-bc-gray-100);
    }
    .secondary-inverse.disabled, .secondary-inverse.disabled:hover, .secondary-inverse.disabled:focus {
      background-color: transparent;
      border-color: var(--eos-bc-white);
      color: var(--eos-bc-white);
      opacity: 0.6;
    }
    .secondary-inverse.disabled, .secondary-inverse.disabled:hover, .secondary-inverse.disabled:focus {
      background-color: transparent;
      border-color: var(--eos-bc-white);
      color: var(--eos-bc-white);
      opacity: 0.6;
    }
    /* ==== Danger button ==== */
    .danger {
      background-color: var(--eos-bc-red-500);
      border-color: var(--eos-bc-red-500);
      color: var(--eos-bc-white);
    }
    .danger:hover, .danger:active:hover {
      background-color: var(--eos-bc-red-900);
      border-color: var(--eos-bc-red-900);
      color: var(--eos-bc-white);
    }
    .danger.disabled, .danger.disabled:hover, .danger.disabled:focus {
      background-color: var(--eos-bc-red-500);
      border-color: var(--eos-bc-red-500);
      color: var(--eos-bc-white);
      opacity: 0.6;
    }
    .danger.disabled, .danger.disabled:hover, .danger.disabled:focus {
      background-color: var(--eos-bc-red-500);
      border-color: var(--eos-bc-red-500);
      color: var(--eos-bc-white);
      opacity: 0.6;
    }
    /* ==== Icon button ==== */
    .hide {
      display: none;
    }
    .eos-18 {
      font-size: 18px;
      width: 18px;
    }
    .btn .eos-icons {
      margin-right: 0;
      pointer-events: none;
      vertical-align: text-bottom;
    }
    /* ==== Sizes ==== */
    .block {
      display: block;
      width: 100%;
    }
    .small {
      padding: 4px 8px;
    }
    `;
  }

  render () {
    return html`
     <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css"
      />

      <button class='btn ${this.type} ${this.state} ${this.size}'>
        ${this.icon?
          html`<i class='eos-icons eos-18'>${this.icon}</i>` : ''
        }
        <slot></slot>
      </button>

    `;
  }
}


customElements.define('eos-button', EosButton);
