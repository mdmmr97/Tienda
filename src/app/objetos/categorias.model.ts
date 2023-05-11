export class Categorias {
    private id: number;
    private imagen: string;
    private nombre: string

    constructor(
        id: number,
        nombre:string,
        imagen:string
        
    ){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
    }

    public getId() : number {
        return this.id;
    }
    
    public getImagen() : string {
        return this.imagen;
    }
    
    public getNombre() : string {
        return this.nombre;
    }

    public setId(id : number) {
        this.id = id;
    }
    
    public setImagen(imagen: string) {
        this.imagen = imagen;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
}