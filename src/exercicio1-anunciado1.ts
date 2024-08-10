
interface Pefiferico {
    descricao: string;
    categorias: Array<string>;
    valor: number;
}

const periferico: Pefiferico = {
    descricao: "Teclado Logitech MX Keys",
    categorias: ["informática", "periféricos", "teclado"],
    valor: 600
} 

const perifericos: Array<Pefiferico> = [
    periferico,
        {
            "descricao": "Mouse Logitech MX Master 3",
            "categorias": ["informática", "periféricos", "mouse"],
            "valor": 500
        },
        {
            "descricao": "Monitor Dell UltraSharp",
            "categorias": ["informática", "monitores"],
            "valor": 1500
        },
        {
            "descricao": "Notebook Apple MacBook Pro",
            "categorias": ["informática", "notebooks"],
            "valor": 12000
        },
        {
            "descricao": "Cadeira Gamer DXRacer",
            "categorias": ["móveis", "cadeiras"],
            "valor": 1000
        }
]