/**
 * Representa um jogador do jogo.
 */
module.exports = class Player {

    constructor() {

        /**
         * Id do jogador
         */
        this.id = "";

        /**
         * Nome do jogador
         */
        this.name = "";

        /**
         * Estado do jogador
         * 
         * 0 - Na sala de espera.
         * 1 - Jogando
         * 2 - Jogador da vez
         * 3 - Fora do jogo (Jogador perdeu todas as pedras e não participa mais de jogadas)
         * 4 - Observador (Não participa das jogadas apenas vê os movimentos)
         */
        status = 0;

        /**
         * Objeto websocket.
         */
        ws = {};
    }

    notify(command) {
        ws.send(command);
    }

}