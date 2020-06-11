'use strict'; // Issue about seeing the text without css: https://github.com/Polymer/lit-element/issues/553

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<i class='eos-icons eos-18'>", "</i>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n     <link\n        rel=\"stylesheet\"\n        href=\"https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css\"\n      />\n\n      <button class='btn ", " ", " ", "'>\n        ", "\n        <slot></slot>\n      </button>\n\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    :host {\n      margin-right: 1em;\n    }\n\n    ::slotted(a) {\n      color: var(--eos-bc-gray-1000);\n      text-decoration: underline;\n      font-weight: bold;\n    }\n\n    ::slotted(a:hover) {\n      text-decoration: none;\n    }\n\n    slot[scope=global]::slotted(a) {\n      color: white ;\n    }\n\n    /* ==== General ==== */\n    .btn {\n      -webkit-appearance: button;\n      background-color: transparent;\n      border: 1px solid transparent;\n      border-radius: 20px;\n      display: inline-block;\n      font-family: inherit;\n      font-size: 14px;\n      font-weight: bold;\n      line-height: 1.5em;\n      overflow: visible;\n      padding: 8px 16px;\n      text-align: center;\n      text-transform: none;\n      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n      user-select: none;\n      vertical-align: middle;\n      white-space: nowrap;\n    }\n\n    .btn:not(:disabled):not(.disabled) {\n      cursor: pointer;\n    }\n    /* ==== Primary ==== */\n    .primary {\n      background-color: var(--eos-bc-green-500);\n      border-color: var(--eos-bc-green-500);\n      color: var(--eos-bc-white);\n    }\n    .primary:hover, .primary:active:hover {\n      background-color: var(--eos-bc-green-900);\n      border-color: var(--eos-bc-green-900);\n      color: var(--eos-bc-white);\n    }\n    /* ==== Primary disabled ==== */\n    .primary.disabled, .primary.disabled:hover, .primary.disabled:focus {\n      background-color: var(--eos-bc-green-500);\n      border-color: var(--eos-bc-green-500);\n      opacity: 0.6;\n    }\n    /* ==== Primary outline ==== */\n    .primary-outline {\n      border-color: var(--eos-bc-green-500);\n      color: var(--eos-bc-green-500);\n      background-image: none;\n    }\n    .primary-outline:hover, .primary-outline:active:hover {\n      border-color: var(--eos-bc-green-900);\n      color: var(--eos-bc-green-900);\n    }\n    /* ==== Primary outline disabled ==== */\n    .primary-outline.disabled, .primary-outline.disabled:hover, .primary-outline.disabled:focus {\n      border-color: var(--eos-bc-green-500);\n      color: var(--eos-bc-green-500);\n      opacity: 0.6;\n    }\n    /* ==== Secondary ==== */\n    .secondary {\n      border-color: var(--eos-bc-gray-1000);\n      color: var(--eos-bc-gray-1000);\n    }\n    .secondary:hover, .btn-secondary:active:hover {\n      border-color: var(--eos-bc-gray-900);\n      color: var(--eos-bc-gray-900);\n    }\n    /* ==== Secondary disabled ==== */\n    .secondary.disabled, .secondary.disabled:hover, .secondary.disabled:focus {\n      background-color: transparent;\n      border-color: var(--eos-bc-gray-500);\n      color: var(--eos-bc-gray-500);\n      opacity: 0.6;\n    }\n    /* ==== Secondary inverse ==== */\n    .secondary-inverse {\n      border-color: var(--eos-bc-white);\n      color: var(--eos-bc-white);\n    }\n    .secondary-inverse:hover, .secondary-inverse:active:hover {\n      border-color: var(--eos-bc-gray-100);\n      color: var(--eos-bc-gray-100);\n    }\n    .secondary-inverse.disabled, .secondary-inverse.disabled:hover, .secondary-inverse.disabled:focus {\n      background-color: transparent;\n      border-color: var(--eos-bc-white);\n      color: var(--eos-bc-white);\n      opacity: 0.6;\n    }\n    .secondary-inverse.disabled, .secondary-inverse.disabled:hover, .secondary-inverse.disabled:focus {\n      background-color: transparent;\n      border-color: var(--eos-bc-white);\n      color: var(--eos-bc-white);\n      opacity: 0.6;\n    }\n    /* ==== Danger button ==== */\n    .danger {\n      background-color: var(--eos-bc-red-500);\n      border-color: var(--eos-bc-red-500);\n      color: var(--eos-bc-white);\n    }\n    .danger:hover, .danger:active:hover {\n      background-color: var(--eos-bc-red-900);\n      border-color: var(--eos-bc-red-900);\n      color: var(--eos-bc-white);\n    }\n    .danger.disabled, .danger.disabled:hover, .danger.disabled:focus {\n      background-color: var(--eos-bc-red-500);\n      border-color: var(--eos-bc-red-500);\n      color: var(--eos-bc-white);\n      opacity: 0.6;\n    }\n    .danger.disabled, .danger.disabled:hover, .danger.disabled:focus {\n      background-color: var(--eos-bc-red-500);\n      border-color: var(--eos-bc-red-500);\n      color: var(--eos-bc-white);\n      opacity: 0.6;\n    }\n    /* ==== Icon button ==== */\n    .hide {\n      display: none;\n    }\n    .eos-18 {\n      font-size: 18px;\n      width: 18px;\n    }\n    .btn .eos-icons {\n      margin-right: 0;\n      pointer-events: none;\n      vertical-align: text-bottom;\n    }\n    /* ==== Sizes ==== */\n    .block {\n      display: block;\n      width: 100%;\n    }\n    .small {\n      padding: 4px 8px;\n    }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { LitElement, html, css } from 'lit-element';

class EosButton extends LitElement {
  static get properties() {
    return {
      type: {
        type: String
      },
      state: {
        type: String
      },
      scope: {
        type: String
      },
      icon: {
        type: String
      },
      size: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.type = this.type;
    this.state = this.state;
    this.scope = this.scope;
    this.icon = this.icon;
    this.size = this.size;
  }

  static get styles() {
    return css(_templateObject());
  }

  render() {
    return html(_templateObject2(), this.type, this.state, this.size, this.icon ? html(_templateObject3(), this.icon) : '');
  }

}

customElements.define('eos-button', EosButton);