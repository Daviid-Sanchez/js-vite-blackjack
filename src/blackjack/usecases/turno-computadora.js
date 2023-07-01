    import { pedirCarta } from "./pedir-carta";
    // import {acumularPuntos,crearCarta,determinarGanador} from "../index"
    
    
    
    // turno de la computadora
export    const turnoComputadora = ( deck=[],puntosJugadores,puntosMinimos ) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta( deck);
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1 );
            crearCarta(carta, puntosJugadores.length - 1 );

        } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

        determinarGanador();
    }
