import { LitElement, html } from 'lit-element';
import styles from './sophos-simple-modal-styles';

class SophosSimpleModal extends LitElement {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.class = '';
    this.modalTitle = 'Modal component title';
    this.modalMessage = 'Hello from modal';
    this.modalFooterMessage = 'Hello from footer';
    this.modalStyle = '';
    this.showOnlySlottedContent = false;
    this.showOnlySlottedHeader = false;
    this.showOnlySlottedBody = false;
    this.showOnlySlottedFooter = false;
    this._hiddenClass = 'hidden-modal';
    this._showedClass = 'showed-modal';
  };

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
      class : { type: String },
      modalStyle : { type : String },
      showOnlySlottedContent : { type : Boolean},
      showOnlySlottedHeader : { type : Boolean},
      showOnlySlottedBody : { type : Boolean},
      showOnlySlottedFooter : { type : Boolean}
    };
  };

  static get styles() {
    return styles;
  };

  firstUpdated() {
    this.class = this._hiddenClass;
  }

  openModal(){
    this.class = this._showedClass;
  };

  closeModal(){
    this.class = this._hiddenClass;
  };

  createModalHeader(){
    const name = 'modal-header';
    
    return this.showOnlySlottedHeader ? html`
      ${this.createSlot(name)}
    ` : html`
      <h2>${this.modalTitle}</h2>
      ${this.createSlot(name)}
    `;
  };

  createModalBody(){
    const name = 'modal-body'
    return this.showOnlySlottedBody ? html`
      ${this.createSlot(name)}
    ` : html`
      <p>${this.modalMessage}</p>
      ${this.createSlot(name)}
    `;
  };

  createModalFooter(){
    const name = 'modal-footer'
    return this.showOnlySlottedFooter ? html`
      ${this.createSlot(name)}
    ` : html`
      <h3>${this.modalFooterMessage}</h3>
      ${this.createSlot(name)}
    `;
  };

  createSlot(name){
    return html`
      <slot name="${name}"></slot>
    `;
  };

  render() {
    return html`
      <div id="modal-main-container" class="${this.class} ${this.modalStyle}">
        <div id="modal-container">
          ${this.showOnlySlottedContent ? html`
            ${this.createSlot('modal-content')}
          ` : html`
          <div id="modal-content">
            <div id="modal-header">
              <span @click="${this.closeModal}" id="close-button">&times;</span>
              ${this.createModalHeader()}
            </div>
            <div id="modal-body">
              ${this.createModalBody()}
            </div>
            <div id="modal-footer">
              ${this.createModalFooter()}
            </div>
          </div>
          `}          
        </div>
      </div>`
  }
}
customElements.define('sophos-simple-modal', SophosSimpleModal);