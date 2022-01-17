import { Injectable } from "@angular/core";

@Injectable()
export class VideojuegoService {

    private videojuegos: Videojuego[] = [
        {
            nombre: 'Fornite',
            descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            image: 'https://i.pinimg.com/originals/52/41/19/524119df67d3a7720939860ea9b6b38d.jpg',
            lanzamiento: '2017',
            consola: 'PS4'
        },
        {
            nombre: 'Horizon Zero Dawn',
            descripcion: 'Es lo max bebe',
            image: 'https://m.media-amazon.com/images/I/71Uzb-UfIQS._SL1000_.jpg',
            lanzamiento: '2017',
            consola: 'PS4'
        },
        {
            nombre: 'God Of War',
            descripcion: 'Eres un papucho',
            image: 'https://as01.epimg.net/meristation/imagenes/2018/07/02/game_cover/1530495172_495172_020676_gameplatform.jpg',
            lanzamiento: '2018',
            consola: 'PS4'
        }

    ]

    constructor() {
        console.log('Servicio Listo para usarse');
    }

    getVideojuegos(): Videojuego[]{
        return this.videojuegos;
    }

    getVideojuego(idx: number){
        return this.videojuegos[idx];
    }

    buscarVideojuegos(termino: string): Videojuego[]{
        let videojuegosArr: Videojuego[] = [];

        termino = termino.toLowerCase();

        for(let videojuego of this.videojuegos){
            let nombre = videojuego.nombre.toLowerCase();
            if( nombre.indexOf(termino) >= 0){
                videojuegosArr.push(videojuego);
            }
        }
        return videojuegosArr;
    }
}


export interface Videojuego {
    nombre: string;
    descripcion: string;
    image: string;
    lanzamiento: string;
    consola: string;
}