import { LitElement, html, css } from 'lit';
import "./badge-card.js"
import "./search-bar.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BadgeList extends LitElement {
  static get properties() {
    return {
      badgeCounter: { 
        attribute: "badge-counter",
        type: String },
      badges: { type: Array }
    }
  }

  static styles = css`
    :host {
      display: block;
      align-items: center;
    }
    .counter {
      margin-left: 200px;
    }
  `;

  constructor() {
    super();
    this.badgeCounter = "Badges (0)";
    this.badges = [];
  }

  render() {
    return html`
    <div class="counter">
      ${this.badgeCounter} <button @click="${this.filterDirectory}">Test</button>
    </div>
    <div class="wrapper">
            ${this.badges.map(badge => html`
            <div class="item">
                <badge-card 
                    title="${badge.title}" 
                    icon="${badge.icon}" 
                    description="${badge.description}"
                    document-link="${badge.documentLink}"
                    author-icon="${badge.authorIcon}"
                    author="${badge.author}"
                    time="${badge.time}">   
                </badge-card>
            </div>
            `)}
        </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);