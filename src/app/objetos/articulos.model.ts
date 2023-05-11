export class Articulos {
    private id:number
    private nombre:string;
    private precio:number;
    private tallas:string[];
    private favorito:boolean;
    private oferta:number | undefined;
    private imagen:string;

    constructor(
        id:number,
        nombre:string,
        precio:number,
        tallas:string[],
        favorito:boolean,
        oferta:number | undefined,
        imagen:string
    ){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tallas = tallas;
        this.favorito = favorito;
        this.oferta = oferta;
        this.imagen = imagen;
    }

    public getId():number { return this.id;}
    public getNombre():string { return this.nombre;}
    public getPrecio():number { return this.precio;}
    public getTallas():string[] { return this.tallas;}
    public getFavorito():boolean { return this.favorito;}
    public getOferta():number | undefined { 
        if (this.oferta == undefined) return undefined;
        else return this.precio-(this.precio*this.oferta);
    }
    public getImagen():string { return this.imagen;}

    
    public setId(id: number) {this.id = id;}
    public setNombre(nombre: string) {this.nombre = nombre;}
    public setPrecio(precio: number) {this.precio = precio;}
    public setTallas(tallas: string[]) {this.tallas = tallas;}
    public setFavorito(favorito: boolean) {this.favorito = favorito;}
    public setOferta(oferta: number | undefined) {this.oferta = oferta;}
    public setImagen(imagen: string) {this.imagen = imagen;}
    
}