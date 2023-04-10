import { useState } from "react"
import { View, Text, Button } from "react-native"

export default function RMGameScreen() {

    function buscaPersonagemAleatorio(){
        const [personagem, setPersonagem] = useState(null)
        const [personagens, setPersonagens] = useState([])
        const [totalPersonagens, setTotalPersonagens] = useState(0)
        fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((json) =>{
            setTotalPersonagens(json.info.count)
            setPersonagens(json.results) 

            const indiceAleatorio = Math.floor(Math.random() * totalPersonagens)
            
            setPersonagem(personagens[indiceAleatorio])
        })
        .catch((error) => {
            console.error(error)
        })
    }

    function buscaPersonagemAleatorio(){
        fetch('https://rickandmortyapi.com/api/character' + retornaIndiceAleatorio())
        .then((response) => response.json())
        .then((json) =>{
            setPersonagem(json)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    function retornaIndiceAleatorio

    return (
        <View>
            <Text>Personagem: {personagem?.name}</Text>
            <Button title="Buscar personagem" onPress={buscaPersonagemAleatorio}>Buscar Personagem
            </Button>
        </View>
    )
}