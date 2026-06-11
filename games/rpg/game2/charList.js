import { OC } from './OC.js';
import * as d from './Dialogos.js';

let none    = new OC ('no', 'no', 'no no', 'N/A', 'var(--char)', 1, 1, 0, 0, 100, 0, 100, ['Hola', 'Holis', 'JAJSJAJ', 'Sabes que hay más personajes, ¿verdad?', 'En serio, elige un personaje, están a tu izquierda']) // Default
let adam    = new OC('Adam', 'adam', 'Adam Carter Miller', 'M', '#e99221', 16, 7, 29, 1, 82, 10, 85, [d.adamD1]);
let julian  = new OC('Julián', 'julian', 'Julián Santiago Mateo Riquelme Sandoval', 'M', '#63a526', 12, 5, 16, 4, 43, 56, 45, []);
let melissa = new OC ('Melissa', 'melissa', 'Melissa Isidora Torres Carson', 'F', '#5d2eb6', 3, 1, 25, 0, 90, 0, 96, []);
let zelie   = new OC('Zelie', 'zelie', 'Selie Sakrihura', 'F', '#d65797', 0, 0, 22, 14, 48, 60, 100, []);
let yun     = new OC ('Yun', 'yun', 'Yun Larketes', 'M', '', 1, 1, 23, 0, 67, 12, 85, ['Hola', 'Holis', 'JAJSJAJ', 'Sabes que hay más personajes, ¿verdad?', 'En serio, elige un personaje, están a tu izquierda']) // Default

export {none, adam, julian, melissa}