// 0. Importar o Stimulus no JS
import { Application } from "@hotwired/stimulus"
window.Stimulus = Application.start()

// 1. Registrar o novo controle no application.js
import DisableButtonController from './controllers/disable_button_controller.js'
Stimulus.register('disable-button', DisableButtonController);

import MoviesController from './controllers/movies_controller.js'
Stimulus.register('movies', MoviesController);
