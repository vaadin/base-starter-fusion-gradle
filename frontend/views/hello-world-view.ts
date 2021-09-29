import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';
import { customElement, html, LitElement } from 'lit-element';
import * as GreetEndpoint from 'Frontend/generated/GreetEndpoint'

@customElement('hello-world-view')
export class HelloWorldView extends LitElement {
  name = '';

  render() {
    return html`
      <vaadin-text-field label="Your name" @value-changed=${this.nameChanged}></vaadin-text-field>
      <vaadin-button @click=${this.sayHello}>Say hello</vaadin-button>
    `;
  }

  nameChanged(e: CustomEvent) {
    this.name = e.detail.value;
  }

  async sayHello() {
    const message = await GreetEndpoint.greet(this.name);
    alert(message);
  }
}
