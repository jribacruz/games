const _ = require('lodash');

/**
 * Representa uma sala com um conjunto de jogadores.
 */
module.exports = class Room {

    constructor() {
        /**
         * Estado da sala
         * 
         * 0 - Esperando jogadores
         * 1 - Em jogo
         * 2 - Jogo finalizado
         */
        this.status = 0;

        /**
         * Array de jogadores da sala;
         */
        this.players = [];
    }

}