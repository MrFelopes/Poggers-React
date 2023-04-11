import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
    const [personagem, setPersonagem] = useState(null);
    const [personagens, setPersonagens] = useState([]);
    const [totalPersonagens, setTotalPersonagens] = useState(0);
    const [resposta, setResposta] = useState('');
    const [updated, setUpdated] = useState(resposta);


    const handleChange = (event) => {
        setResposta(event.target.value);
    }

    const handleClick = (e) => {
        setUpdated (resposta)
    }

    useEffect(() => {
        retornaTotalDePesonagens();
    }, [])

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

<<<<<<< HEAD
    // function retornaIndiceAleatorio
=======
    function checkIfPersonagemEstaVivo() {
        if (personagem.status === 'Alive') {
            return true;
        } else {
            return false;
        }
    }

    function checkResposta(){
        if (resposta === checkIfPersonagemEstaVivo()){
            alert('Você acertou!')
        } else {
            alert('Você errou!')
        }
    }

    function enviarResposta(){
        handleClick();
        handleChange();
        checkResposta();
    }
>>>>>>> 16c0011b8b1cd53f90499311c2b296b572705999

    return (
        <View style={styles.container}>
            <Text>Este personagem está vivO?</Text>
            <Image
                source={{ uri: personagem?.image }}
                style={{ width: 200, height: 200 }}
            ></Image>
            <Text>Personagem: {personagem?.name}</Text>
            <View>
                <Button value={true} onPress={enviarResposta}>SIM</Button>
                <Button value={false} onPress={enviarResposta}>NÃO</Button>
                
            </View>


            <Button onPress={buscaPersonagemAleatorio} > Buscar Personagem </Button>
        </View>
    )

}