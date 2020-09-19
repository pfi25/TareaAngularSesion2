import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guia-restaurantes';
  restaurantes: string[] = [];
  ciudades: string[] = [];
  
  agregar(restaurante: string, ciudad: string) {
    let flag: boolean = false;

    if(restaurante != "" && ciudad != ""){
      
      this.restaurantes.filter(number => { 
        
        if(number == restaurante){
          return flag = true;
        } 
      
      });

      console.log("valor " + flag)

      if(flag==false){
      this.restaurantes.push(restaurante);
      console.log(this.restaurantes);
      this.ciudades.push(ciudad);
      console.log(this.ciudades);
      }else{
        alert('Ingrese un restaurante diferente');
      }
      
    } else {
      alert('Ingrese un restaurante y ciudad');
    }
  }
}
