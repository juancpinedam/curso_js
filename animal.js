class Animal {

constructor(especie,edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
}
verInfo(){
    document.write(`<hr> 
    especie: ${this.especie}
    edad: ${this.edad} 
    color: ${this.color}  <hr>`);
}


}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        document.write("<hr>wow");
    }

    static saludar(){
        document.write("<hr>te saludo do");
    }

    set setEspecie(especie){
        this.especie=especie;
    }

    get getEspecie(){
        return this.especie;
    }

    
verInfoPerro(){
    document.write(`<hr> 
    especie: ${this.especie}
    <br>edad: ${this.edad} 
    <br>color: ${this.color} 
    <br>raza: ${this.raza}  <hr>`);
}

}

let perro = new Perro("perro",3,"marron","pitbull");
perro.setEspecie="perrosky";

let especiePerro = perro.getEspecie;
perro.ladrar();
perro.verInfoPerro();
document.write("especie de perro: "+especiePerro);



