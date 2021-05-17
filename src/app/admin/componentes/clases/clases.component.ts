import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasesService } from 'src/app/core/servicios/clases/clases.service';
import { Clase } from 'src/app/models/clase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent {

  clases:Clase[]=[];

  constructor(
   private clasesService: ClasesService,
   private router: Router,   
    ) {
      this.cargaClase();
     /* this.filteredItems = this.cartas;
      console.log(`filtro ${this.filteredItems}`);
      this.init();*/
    }

    cargaClase(){
      this.clasesService.getAllClase()
      .subscribe(clases =>{
        this.clases = clases;
        console.log(this.clases);
        this.filteredItems = this.clases;
        this.init();
      })
    }

     devuelveImagen(imagen: string){
       
      if(imagen=="" || imagen == null){
        return `assets/img/user.png`;
      }else{
         
          return `http://localhost:3000/imgClase/${imagen}`;
      }
  }
    
    
    borrarClase(id:string){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.clasesService.deleteClase(id)
          .subscribe( resp =>{
            this.cargaClase()
            console.log('*****BORRADO*****')
          })
        }
      })
         
        }

    editarClase(id: string){

     this.router.navigateByUrl(`../editClass/${id}`);
    }
    /************************************************************* */

  filteredItems: Clase[];
  pages: number = 4;
  pageSize: number = 3;
  pageNumber: number = 0;
  currentIndex: number = 1;
  items: Clase[];
  pagesIndex: Array<number>;
  pageStart: number = 1;
  inputName: string = '';

 
  init() {
    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 4;

    this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
    if (this.filteredItems.length % this.pageSize != 0) {
      this.pageNumber++;
    }

    if (this.pageNumber < this.pages) {
      this.pages = this.pageNumber;
    }

    this.refreshItems();
    console.log("this.pageNumber :  " + this.pageNumber);
  }

  FilterByName() {
    this.filteredItems = [];
    if (this.inputName != "") {
      this.clases.forEach(element => {
        if (element.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
          this.filteredItems.push(element);
        }
      });
    } else {
      this.filteredItems = this.clases;
    }
    console.log(this.filteredItems);
    this.init();
  }
  fillArray(): any {
    var obj = new Array();
    for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
      obj.push(index);
    }
    return obj;
  }
  refreshItems() {
    this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
    this.pagesIndex = this.fillArray();
  }
  prevPage() {
    if (this.currentIndex > 1) {
      this.currentIndex--;
    }
    if (this.currentIndex < this.pageStart) {
      this.pageStart = this.currentIndex;
    }
    this.refreshItems();
  }
  nextPage() {
    if (this.currentIndex < this.pageNumber) {
      this.currentIndex++;
    }
    if (this.currentIndex >= (this.pageStart + this.pages)) {
      this.pageStart = this.currentIndex - this.pages + 1;
    }

    this.refreshItems();
  }
  setPage(index: number) {
    this.currentIndex = index;
    this.refreshItems();
  }

}
