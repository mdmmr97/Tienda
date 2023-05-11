export class Imagenes {
    private id: number;
    private imagen: string;

    constructor(
        id: number,
        imagen:string
    ){
        this.id = id;
        this.imagen = imagen;
    }

    public getId() : number {
        return this.id;
    }
    
    public getImagen() : string {
        return this.imagen;
    }
    
    public setId(id : number) {
        this.id = id;
    }
    
    public setImagen(imagen: string) {
        this.imagen = imagen;
    }
    
}
