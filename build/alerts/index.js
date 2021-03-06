'use strict'; // Issue about seeing the text without css: https://github.com/Polymer/lit-element/issues/553

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<div class='alert-close' @click='", "'><i class='eos-icons ", " md-18'>close</i></div>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n     <link\n        rel=\"stylesheet\"\n        href=\"https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css\"\n      />\n      <div class='alert ", " ", " ", "'>\n        <i class=\"alert-icon eos-icons eos-18\">", "</i>\n        <div class='alert-body'>\n            <div class='alert-title ", "'> ", " </div>\n            <p> <slot scope='", "'/> </p>\n        </div>\n        ", "\n      </div>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    :host {\n      width: 100%;\n      height: auto;\n      position: relative;\n    }\n\n    ::slotted(a) {\n      color: var(--eos-bc-gray-1000) !important;\n      text-decoration: underline !important;\n      font-weight: bold !important;\n    }\n\n    ::slotted(a:hover) {\n      text-decoration: none !important;\n    }\n\n    slot[scope=global]::slotted(a) {\n      color: var(--eos-bc-white) !important;\n    }\n\n    /* ==== General==== */\n    .alert {\n      border-left: 5px solid;\n      display: flex;\n      margin-bottom: 20px;\n      margin: 0;\n      padding: 8px;\n      width: auto;\n      position: relative;\n    }\n\n    .alert\n    .alert-title {\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 8px;\n    }\n\n    p {\n      margin: 0;\n      font-size: 14px;\n    }\n\n    .alert-close {\n      cursor: pointer;\n      position: absolute;\n      right: 0;\n      margin-left: auto;\n    }\n\n    .alert-title {\n      font-weight: bold;\n    }\n\n    /* ==== Global ==== */\n    .global {\n      align-items: center;\n      border: 0;\n      color: #ffffff;\n      height: 37px;\n      left: 0;\n      margin: 0;\n      padding: 0 16px;\n      position: fixed;\n      top: 0;\n      width: calc(100% - 20px);\n      z-index: 1040;\n    }\n    .global.success {\n      background-color: var(--eos-bc-green-500);\n    }\n    .global.warning {\n      background-color: var(--eos-bc-yellow-900);\n    }\n    .global.info {\n      background-color: var(--eos-bc-cerulean-500);\n    }\n    .global.danger {\n      background-color: var(--eos-bc-red-500);\n    }\n\n    .global .alert-close {\n      right: 24px;\n    }\n\n    /* ==== Section and Inline ==== */\n    .section\n    .alert-body,\n    .inline\n    .alert-body {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      margin-right: 24px;\n    }\n\n    .section.success,\n    .inline.success {\n      background-color: var(--eos-bc-green-100);\n      border-color: var(--eos-bc-green-500);\n    }\n\n    .section.warning,\n    .inline.warning {\n      background-color: var(--eos-bc-yellow-100);\n      border-color: var(--eos-bc-yellow-900);\n    }\n\n    .section.info,\n    .inline.info {\n      background-color: var(--eos-bc-cerulean-100);\n      border-color: var(--eos-bc-cerulean-500);\n    }\n\n    .section.danger,\n    .inline.danger {\n      background-color: var(--eos-bc-red-100);\n      border-color: var(--eos-bc-red-500);\n    }\n\n    /* ==== Icons inside alerts color ==== */\n    .success .alert-icon {\n      color: var(--eos-bc-green-500)\n    }\n\n    .warning .alert-icon {\n      color: var(--eos-bc-yellow-900)\n    }\n\n    .info .alert-icon {\n      color: var(--eos-bc-cerulean-500)\n    }\n\n    .danger .alert-icon {\n      color: var(--eos-bc-red-500)\n    }\n\n    .global .alert-icon {\n      color: #fff;\n    }\n\n    /* ==== Helpers ==== */\n    .hide {\n      display: none;\n    }\n\n    .eos-18 {\n      font-size: 18px;\n    }\n\n    .eos-icons {\n      margin-right: 8px;\n      vertical-align: bottom;\n    }\n    \n    /* ==== Mobile class ==== */\n    .global.desktop {\n      display: flex;\n    }\n    \n    .global.mobile {\n      display: none;\n    }\n\n    @media screen and (max-width: 769px) {\n\n      .global.desktop {\n        display: none;\n      }\n\n      .global.mobile {\n        display: flex;\n      }\n    }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { LitElement, html, css } from 'lit-element';

class EosAlert extends LitElement {
  static get properties() {
    return {
      type: {
        type: String
      },
      scope: {
        type: String
      },
      title: {
        type: String
      },
      icon: {
        type: Object
      },
      close: {
        type: Boolean
      },
      screen: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.type = this.type;
    this.scope = this.scope;
    this.title = this.title;
    this.screen = this.screen;
    this.icon = {
      'success': 'check_circle',
      'info': 'info',
      'warning': 'warning',
      'danger': 'error'
    };
    this.close = this.close;
  }

  static get styles() {
    return css(_templateObject());
  }

  closeAlert() {
    this.remove();
  }

  render() {
    return html(_templateObject2(), this.type, this.scope, this.screen || 'desktop', this.icon[this.type], this.title || 'hide', this.title, this.scope, this.close ? '' : html(_templateObject3(), this.closeAlert, this.type === 'danger' ? 'hide' : ''));
  }

}

customElements.define('eos-alert', EosAlert);