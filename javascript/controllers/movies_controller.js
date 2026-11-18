// 0. Importar o Stimulus no controle
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  // 3. Adicionar os targets dos data-controller-target
  static targets = ['input', 'results'];

  // 4. Adicionar os targets dos data-controller-valuename-value
  static values = {
    baseUrl: String
  }

  // 1. Conferir se o controle está conectado com o HTML
	connect() {
		console.log('Conectou Movies Controller');
	}

  // 2.a Fazer o fetch da API e pegar os dados da response
  async fetchMovies(query) {
    const url = `${this.baseUrlValue}?s=${query}&apikey=adf1f2d7`;
    const response = await fetch(url);
    const data = await response.json();
    this.insertMovies(data);
  }

  // 2.b Pegar os dados da response e inserir no HTML
  insertMovies(data) {
    data.Search.forEach((result) => {
    const movieTag = `<li class='list-group-item borde-0'>
      <img src="${result.Poster}" alt="${result.Title}" width='200px' height='100%'>
    </li>`
    this.resultsTarget.insertAdjacentHTML('beforeend', movieTag);
    });
  }

  // 2. Criar a função do data-action
  search(event) {
    event.preventDefault();
    this.resultsTarget.innerHTML = '';
    this.fetchMovies(this.inputTarget.value);
  }
}
