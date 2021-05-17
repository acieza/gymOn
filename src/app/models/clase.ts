import { Ejercicio } from "./ejercicio";

export interface Clase {
  _id:string;
  imagen: string;
  nombre: string;
  descripcion: string;
  diaS: string;
  hora: string;
  ejercicios: Ejercicio[];
  
}
