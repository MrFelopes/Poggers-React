import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
    const [personagem, setPersonagem] = useState(null);
    const [totalPersonagens, setTotalPersonagens] = useState(0);
    const [resposta, setResposta] = useState('');

    useEffect(() => {
        retornaTotalDePesonagens();
    }, []);

    function handleClick(value) {
        setResposta(value);
    }

    function checkResposta(){
        if(resposta === 'Sim' && checkIfPersonagemEstaVivo() === true){
            alert('Você acertou!');
        } else if(resposta === 'Não' && checkIfPersonagemEstaVivo() === false){
            alert('Você acertou!');
        }
        else {
            alert('Você errou!');
        }
    }

    function buscaPersonagemAleatorio() {
        fetch('https://rickandmortyapi.com/api/character/' + retornaIndiceAleatorio())
            .then((response) => response.json())
            .then((json) => {
                setPersonagem(json);
            })
    }

    function retornaTotalDePesonagens() {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((json) => {
                setTotalPersonagens(json.info.count);
            });
    }

    function retornaIndiceAleatorio() {
        return Math.floor(Math.random() * totalPersonagens);
    }

    function checkIfPersonagemEstaVivo() {
        if (personagem.status === 'Alive') {
            return true;
        } else {
            return false;
        }
    }


    return (
        <View style={styles.container}>
            <Text>Este personagem está vivo?</Text>
            <Image
                source={{ uri: personagem?.image }}
                style={{ width: 200, height: 200 }}
            ></Image>
            <Text style={{padding:20,}}>Personagem: {personagem?.name}</Text>
            <View>
                <Button onPress={() => handleClick('Sim')}>SIM</Button>
                <Button onPress={() => handleClick('Não')}>NÃO</Button>
                <Text style ={{padding:20,}}>Selecionado: {resposta}</Text>
                <Button onPress={checkResposta}>Enviar Resposta</Button>
            </View>


            <Button onPress={buscaPersonagemAleatorio} > Buscar Personagem </Button>
        </View>
    )

}