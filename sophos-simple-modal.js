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
    this._hiddenClass = 'hidden-modal';
    this._showedClass = 'showed-modal';
    this.class = this._hiddenClass;
    this.modalStyle = '';
  };

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
      class : { type: String },
      modalStyle : { type : String }
    };
  };

  static get styles() {
    return styles;
  };

  openModal(){
    this.class = this._showedClass;
  };

  closeModal(){
    this.class = this._hiddenClass;
  };

  render() {
    return html`
      <div id="modal-main-container" class="${this.class} ${this.modalStyle}">
        <div id="modal-container">          
          <div class="modal-content">
            <div class="modal-header">
              <span @click="${this.closeModal}" class="close">&times;</span>
              <h2>Modal Header</h2>
            </div>
            <div class="modal-body">
              <p>Some text in the Modal Body</p>
              <p>Some other text...</p>
            </div>
            <div class="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>
      </div>`
  }
}
customElements.define('sophos-simple-modal', SophosSimpleModal);