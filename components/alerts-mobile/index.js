'use strict'
// Issue about seeing the text without css: https://github.com/Polymer/lit-element/issues/553
import { LitElement, html, css } from 'lit-element';

class EosAlertMobile extends LitElement {
  static get properties () {
    return {
      type: { type: String },
      icon: { type: Object },
      close: { type: Boolean }
    }
  }

  constructor () {
    super()
    this.type = this.type
    this.icon = {
      'success': 'check_circle',
      'info': 'info',
      'warning': 'warning',
      'danger': 'error'
    }
    this.close = this.close
  }

  static get styles () {
    return css`
    :host {
      width: 100%;
      height: auto;
      position: relative;
    }

    ::slotted(a) {
      color: var(--eos-bc-white);
      text-decoration: underline;
      font-weight: bold;
      font-size: 14px;
    }

    ::slotted(a:hover) {
      text-decoration: none;
    }


    /* ==== General==== */
    .alert {
      border-left: 5px solid;
      display: flex;
      margin-bottom: 20px;
      margin: 0;
      padding: 8px;
      width: auto;
      position: relative;
    }

    p {
      font-size: 14px;
    }

    .alert-close {
      cursor: pointer;
      position: absolute;
      right: 0;
      margin-left: auto;
    }


    /* ==== Global ==== */
    .global {
      align-items: center;
      border: 0;
      color: #ffffff;
      height: 37px;
      left: 0;
      margin: 0;
      padding: 0 16px;
      position: fixed;
      top: 0;
      width: calc(100% - 20px);
      z-index: 1040;
    }
    .global.success {
      background-color: var(--eos-bc-green-500);
    }
    .global.warning {
      background-color: var(--eos-bc-yellow-900);
    }
    .global.info {
      background-color: var(--eos-bc-cerulean-500);
    }
    .global.danger {
      background-color: var(--eos-bc-red-500);
    }

    .global .alert-close {
      right: 24px;
    }

    /* ==== Icons inside alerts color ==== */
    .global .alert-icon {
      color: #fff;
    }

    /* ==== Helpers ==== */
    .hide {
      display: none;
    }

    .eos-18 {
      font-size: 18px;
    }

    .eos-icons {
      margin-right: 8px;
      vertical-align: bottom;
    }
    
     /* ==== Mobile class ==== */

    .global.mobile {
      display: none;
    }

    @media screen and (max-width: 769px) {
      .global.mobile {
        display: flex;
      }
    }
    `;
  }

  closeAlert () {
    this.remove()
  }

  render () {
    return html`
     <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css"
      />

      <div class='alert ${this.type} global mobile'>
        <i class="alert-icon eos-icons eos-18">${this.icon[this.type]}</i>
        <div class='alert-body'>
            <p> <slot/> </p>
        </div>
        ${this.close?
          '' : html`<div class='alert-close' @click='${this.closeAlert}'><i class='eos-icons ${this.type === 'danger' ? 'hide' : ''} md-18'>close</i></div>`
        }
      </div>
    `;
  }
}


customElements.define('eos-alert-mobile', EosAlertMobile);
