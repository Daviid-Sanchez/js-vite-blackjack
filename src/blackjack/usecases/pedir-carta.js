    // Esta función me permite tomar una carta
    export const pedirCarta = (deck) => {
        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }