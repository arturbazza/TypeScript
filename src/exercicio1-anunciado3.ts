interface Ator {
    "id": number,
    "nome": string,
}

interface Personagen {
    "id": number,
    "nome": string,
    "ator": Ator,
}

interface Episodio {
    "id": number,
    "titulo": string,
    "personagens": Array<Personagen>;
}

interface Serie {
    "id": number,
    "titulo": string,
    "episodios": Array<Episodio>;
}

const serie: Serie = {
    "id": 1,
        "titulo": "House of Dragons",
            "episodios": [
                {
                    "id": 1,
                    "titulo": "Piloto",
                    "personagens": [
                        {
                            "id": 1,
                            "nome": "Daemon Targaryen",
                            "ator": {
                                "id": 1,
                                "nome": "Matt Smith"
                            }
                        },
                        {
                            "id": 2,
                            "nome": "Rhaenyra Targaryen",
                            "ator": {
                                "id": 2,
                                "nome": "Emma D'Arcy"
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "titulo": "A Ascensão do Dragão",
                    "personagens": [
                        {
                            "id": 3,
                            "nome": "Viserys I Targaryen",
                            "ator": {
                                "id": 3,
                                "nome": "Paddy Considine"
                            }
                        },
                        {
                            "id": 4,
                            "nome": "Alicent Hightower",
                            "ator": {
                                "id": 4,
                                "nome": "Olivia Cooke"
                            }
                        }
                    ]
                }
            ]
}

serie.episodios.forEach(episodio => {
    episodio.personagens.forEach(personagem => {
        const { ator } = personagem;
        const { nome } = ator;
        console.log(nome);
    })
}) 