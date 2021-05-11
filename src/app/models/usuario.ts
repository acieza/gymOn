import { Clase } from "./clase";

export class Usuario {
    constructor(
        public nombre:string,
        public email: string,
        public password: string,
        public img?:string,        
        public role?: 'admin' | 'user' | 'profesor',    
        public _id?: string,
        public altura?: number,
        public peso?: number,
        public clases?: Clase[],
    ){}
  


    imprimirUsuario(){
        console.log(this.nombre)
        // console.log(this.cursos)
    }

    get devuelveImagen(){
        if(this.img){
            return `http://localhost:3000/img/${this.img}`;
        }else{
            return `assets/img/user.png`;
        }
    }

    get devuelveIMC(){
    //    var imc:Number = (this.peso / ((this.altura/100) * (this.altura/100)));
       
       return this.peso / ((this.altura/100) * (this.altura/100));
    }


}