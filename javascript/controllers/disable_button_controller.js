// 0. Importar o Stimulus no controle
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  // 3. Adicionar os targets dos data-controller-target
  static targets = ['button', "link"];

  // 4. Adicionar os targets dos data-controller-valuename-value
  static values = {
    text: String,
    reset: String
  }

  // 1. Conferir se o controle está conectado com o HTML
	connect() {
    console.log('Hello from Stimulus');
    console.log(this.element);
	}

  // 2. Criar a função do data-action
  disable() {
    this.buttonTarget.setAttribute('disabled', '');
    this.buttonTarget.innerText = this.textValue;
    this.linkTarget.classList.remove('d-none');
  }

  reset() {
    this.buttonTarget.removeAttribute('disabled', '');
    this.buttonTarget.innerText = this.resetValue;
    this.linkTarget.classList.add('d-none');
  }
}
