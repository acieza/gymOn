import { Ejercicio } from "./ejercicio";

export interface Clase {
  imagen: string;
  nombre: string;
  descripcion: string;
  diaS: string;
  hora: string;
  ejercicios: Ejercicio[];
  
}
