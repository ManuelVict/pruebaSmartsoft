export class Producto{
    public id:number;
    public nombreProducto:string;
    public precio:number;
    public stock:number;
    constructor(nuevoID :number,nombreP:string,nuevoPrecio:number,nuevoStock:number
     ) {
          this.id=nuevoID;
          this.nombreProducto = nombreP;
          this.precio=nuevoPrecio;
          this.stock=nuevoStock;


        }
         
    }
    