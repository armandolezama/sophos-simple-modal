import { css } from 'lit-element'

export default css`
  :host {
    --sophos-modal-content-background-color: ;
    --sophos-modal-header-background-color: ;
    --sophos-modal-body-background-color: ;
    --sophos-modal-footer-background-color: ;
  }

  .hidden-modal {
    display: var(--sophos-card-hidden-modal-display, none);
  }
  
  .showed-modal {
    display: var(--sophos-card-showed-modal-display, block);
    padding-top: var(--sophos-card-showed-modal-padding-top, 100px);
    left: var(--sophos-card-showed-modal-left, 0);
    top: var(--sophos-card-showed-modal-top, 0);
    width: var(--sophos-card-showed-modal-width, 100%);
    height: var(--sophos-card-showed-modal-height, 100%);
    overflow: var(--sophos-card-showed-modal-overflow, auto);
    background-color: var(--sophos-card-showed-modal-background-color, rgba(0,0,0,0.4));
  }

  .full-screen {
    position: var(--sophos-card-full-screen-position, fixed);
  }

  .limited-screen {
    position: var(--sophos-card-limited-screen-position, relative);
  }

  #modal-content {
    position: var(--sophos-card-modal-content-position, relative);
    background-color: var(--sophos-card-modal-content-background-color, #fefefe);
    margin: var(--sophos-card-modal-content-margin, auto);
    padding: var(--sophos-card-modal-content-padding, 0);
    border: var(--sophos-card-modal-content-border, 1px solid #888);
    width: var(--sophos-card-modal-content-width, 80%);
    box-shadow: var(--sophos-card-modal-content-box-shadow, 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19));
    -webkit-animation-name: var(--sophos-card-modal-content--webkit-animation-name, animatetop);
    -webkit-animation-duration: var(--sophos-card-modal-content--webkit-animation-duration, 0.4s);
    animation-name: var(--sophos-card-modal-content-animation-name, animatetop);
    animation-duration: var(--sophos-card-modal-content-animation-duration, 0.4s);
    border-radius: var(--sophos-card-modal-content-border-radius, 20px);
    overflow: var(--sophos-card-modal-content-overflow, hidden);
  }

  @-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
  }

  @keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
  }

  #close-button {
    color: var(--sophos-card-modal-content-color, white);
    float: var(--sophos-card-modal-content-float, right);
    font-size: var(--sophos-card-modal-content-font-size, 28px);
    font-weight: var(--sophos-card-modal-content-font-weight, bold);
  }

  #close-button:hover,
  #close-button:focus {
    color: var(--sophos-card-close-button-hover-close-button-focus-color, #000);
    text-decoration: var(--sophos-card-close-button-hover-close-button-focus-text-decoration, none);
    cursor: var(--sophos-card-close-button-hover-close-button-focus-cursor, pointer);
  }

  #modal-header {
    padding: var(--sophos-card-modal-header-padding, 2px 16px);
    background-color: var(--sophos-card-modal-header-background-color, #5cb85c);
    color: var(--sophos-card-modal-header-color, white);
  }

  #modal-body {
    padding: var(--sophos-card-modal-body-padding, 2px 16px);
  }

  #modal-footer {
    padding: var(--sophos-card-modal-footer-padding, 2px 16px);
    background-color: var(--sophos-card-modal-footer-background-color, #5cb85c);
    color: var(--sophos-card-modal-footer-color, white);
  }
`;