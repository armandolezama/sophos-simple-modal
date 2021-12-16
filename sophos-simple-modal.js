import { LitElement, html } from 'lit';
import styles from './sophos-simple-modal-styles';

class SophosSimpleModal extends LitElement {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor () {
    super();
    this.class = '';
    this.modalTitle = '';
    this.modalMessage = '';
    this.modalFooterMessage = '';
    this.modalStyle = '';
    this.isOnlySlottedContentShown = false;
    this.isOnlySlottedHeaderShown = false;
    this.isOnlySlottedBodyShown = false;
    this.isOnlySlottedFooterShown = false;
    this.isCloseButtonDisplayed = false;
    this._hiddenClass = 'hidden-modal';
    this._showedClass = 'showed-modal';
    this.isModalOpened = false;
  }

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties () {
    return {
      class : { type: String },
      modalStyle : { type : String },
      isOnlySlottedContentShown : { type : Boolean},
      isOnlySlottedHeaderShown : { type : Boolean},
      isOnlySlottedBodyShown : { type : Boolean},
      isOnlySlottedFooterShown : { type : Boolean},
      isModalOpened : { type : Boolean },
      isCloseButtonDisplayed : { type : Boolean}
    };
  }

  static get styles () {
    return styles;
  }

  set isModalOpened (value) {
    const newValue = value;
    const oldValue = this._isModalOpened;
    this._isModalOpened = newValue;
    if(newValue){
      this.openModal();
    } else {
      this.closeModal();
    }

    this.requestUpdate('isModalOpened', oldValue);
  }

  firstUpdated () {
    super.firstUpdated();
    this.class = this._hiddenClass;
  }

  openModal (){
    this.class = this._showedClass;
  }

  closeModal (){
    this.class = this._hiddenClass;
  }

  createModalHeader (){
    const name = 'modal-header';
    
    return this.isOnlySlottedHeaderShown ? html`
      ${this.createSlot(name)}
    ` : html`
      <h2>${this.modalTitle}</h2>
      ${this.createSlot(name)}
    `;
  }

  createModalBody (){
    const name = 'modal-body'
    return this.isOnlySlottedBodyShown ? html`
      ${this.createSlot(name)}
    ` : html`
      <p>${this.modalMessage}</p>
      ${this.createSlot(name)}
    `;
  }

  createModalFooter (){
    const name = 'modal-footer'
    return this.isOnlySlottedFooterShown ? html`
      ${this.createSlot(name)}
    ` : html`
      <h3>${this.modalFooterMessage}</h3>
      ${this.createSlot(name)}
    `;
  }

  createSlot (name){
    return html`
      <slot name=${name}></slot>
    `;
  }

  showCloseButton (){
    if(this.isCloseButtonDisplayed){
      return html`
        <span @click=${this.closeModal} id="close-button">&times;</span>
      `;
    }
  }

  render () {
    return html`
      <div id="modal-main-container" class="${this.class} ${this.modalStyle}">
        <div id="modal-container">
          ${this.isOnlySlottedContentShown ? html`
            ${this.createSlot('modal-content')}
          ` : html`
          <div id="modal-content">
            <div id="modal-header">
              ${this.showCloseButton()}
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