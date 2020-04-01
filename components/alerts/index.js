'use strict'
// Issue about seeing the text without css: https://github.com/Polymer/lit-element/issues/553
import { LitElement, html, css } from 'lit-element';

class EosAlert extends LitElement {
  static get properties () {
    return {
      type: { type: String },
      scope: { type: String },
      title: { type: String },
      icon: { type: Object }
    }
  }

  constructor () {
    super()
    this.type = this.type
    this.scope = this.scope
    this.title = this.title
    this.icon = {
      'success': 'check_circle',
      'info': 'info',
      'warning': 'warning',
      'danger': 'error'
    }
  }

  static get styles () {
    return css`
    :host {
      width: 100%;
      height: auto;
      position: relative;
    }


    ::slotted(a) {
      color: var(--eos-bc-gray-1000) ;
      text-decoration: underline;
      font-weight: bold;
    }

    ::slotted(a:hover) {
      text-decoration: none;
    }

    slot[scope=global]::slotted(a) {
      color: white ;
    }

    /* ==== General==== */
    .alert {
      border-left: 5px solid;
      display: flex;
      margin-bottom: 20px;
      margin: 0;
      padding: 8px;
      width: 100%;
      position: relative;
    }

    .alert
    .alert-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    p {
      margin: 0;
      font-size: 14px;
    }

    .alert-close {
      cursor: pointer;
      position: absolute;
      right: 0;
    }

    .alert-title {
      font-weight: bold;
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
      width: 99%;
      z-index: 1040;
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

    /* ==== Section and Inline ==== */
    .section
    .alert-body,
    .inline
    .alert-body {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .section.success,
    .inline.success {
      background-color: var(--eos-bc-green-100);
      border-color: var(--eos-bc-green-500);
    }

    .section.warning,
    .inline.warning {
      background-color: var(--eos-bc-yellow-100);
      border-color: var(--eos-bc-yellow-900);
    }

    .section.info,
    .inline.info {
      background-color: var(--eos-bc-cerulean-100);
      border-color: var(--eos-bc-cerulean-500);
    }

    .section.danger,
    .inline.danger {
      background-color: var(--eos-bc-red-100);
      border-color: var(--eos-bc-red-500);
    }

    /* ==== Icons inside alerts color ==== */
    .success .alert-icon {
      color: var(--eos-bc-green-500)
    }

    .warning .alert-icon {
      color: var(--eos-bc-yellow-900)
    }

    .info .alert-icon {
      color: var(--eos-bc-cerulean-500)
    }

    .danger .alert-icon {
      color: var(--eos-bc-red-500)
    }

    .global .alert-icon {
      color: #fff;
    }

    /* ==== Helpers ==== */
    .hide {
      display: none;
    }

    .md-18 {
      font-size: 18px;
    }

    .eos-icons {
      margin-right: 8px;
      vertical-align: bottom;
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
        href="https://cdn.jsdelivr.net/npm/eos-icons/dist/extended/css/eos-icons-extended.css"
      />

      <div class='alert ${this.type} ${this.scope}'>
        <i class="alert-icon eos-icons md-18">${this.icon[this.type]}</i>
        <div class='alert-body'>
            <div class='alert-title ${(this.title || 'hide')}'> ${this.title} </div>
            <p> <slot scope='${this.scope}'/> </p>
        </div>
        <div class='alert-close' @click='${this.closeAlert}'>
          <i class='eos-icons ${this.type === 'danger' ? 'hide' : ''} md-18'>close</i>
        </div>
      </div>
    `;
  }
}


customElements.define('eos-alert', EosAlert);
