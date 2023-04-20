import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
    const [personagem, setPersonagem] = useState(null);
    const [totalPersonagens, setTotalPersonagens] = useState(1);
    const [resposta, setResposta] = useState('');
    const [points, setPoints] = useState(0);
    const [isloading, setIsLoading] = useState(false);
    const [chances, setChances] = useState(3);
    const [pulos, setPulos] = useState(3);
    const [resultado, setResultado] = useState('');

    useEffect (() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((json) => {
            setTotalPersonagens(json.info.count);
        });
    }, []);
    useEffect(() => {
        retornaTotalDePesonagens();
    }, []);

    useEffect(() => {
        buscaPersonagemAleatorio();
    }, [totalPersonagens]);

    function handleClick(value) {
        setResposta(value);
    }

    function checkResposta(){
        setIsLoading(true);
        if(resposta === 'Vivo' && checkIfPersonagemEstaVivo() === true){
            setResultado('Você acertou!');
            setTimeout(() => {
                setPoints (points + 1);
                setIsLoading(false);
            }, 1000);

        } else if(resposta === 'Morto' && checkIfPersonagemEstaVivo() === false){
            setResultado('Você acertou!');
            setTimeout(() => {
                setPoints (points + 1);
                setIsLoading(false);
            }, 1000);
        }

        else {
            setResultado ('Você errou!');
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
            setChances (chances - 1);

            if (chances === 0){
                setResultado('Você perdeu!');
                setChances(3);
                setPoints(0);
                setPulos(3);
            }
        }

        setTimeout(() => {
            setResposta('');
            setResultado('');
            buscaPersonagemAleatorio();
        }, 1000);
    }

    function buscaPersonagemAleatorio() {
        fetch('https://rickandmortyapi.com/api/character/' + returnRandomNumber())
            .then((response) => response.json())
            .then((json) => {
                setPersonagem(json);
                setResposta(null);
            })
    }

    function retornaTotalDePesonagens() {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((json) => {
                setTotalPersonagens(json.info.count);
            });
    }

    function checkIfPersonagemEstaVivo() {
        if (personagem.status === 'Alive') {
            return true;
        } else {
            return false;
        }
    }

    const returnRandomNumber = () => {
        let randomNumber = Math.floor(Math.random() * totalPersonagens) + 1;

        if (randomNumber === 0) {
            return 1;
        } else {
            return randomNumber;
        }
    }

    function pular(){
        if (pulos === 0){
            alert('Você não tem mais pulos!');
        } else {
            buscaPersonagemAleatorio();
            setPulos(pulos - 1);
        }
    }

        return (
            <View style={styles.container}>
                    <View style={{border: '5px solid black', borderRadius: 10, padding: 20, alignItems: 'center'}}>
                    <Text style={{fontSize: 30, paddingTop: 10, paddingBottom: 10}}>Este personagem está vivo?</Text>
                    <Image
                        source={{ uri: personagem?.image }}
                        style={{ width: 200, height: 200, borderRadius: 100, border: '3px solid black'}}
                    ></Image>
                    <Text style={{padding:20,}}>Como o/a {personagem?.name} está?</Text>
                    <View style={{alignItems: 'center'}}>
                        <Button onPress={() => handleClick('Vivo')} mode="contained">Vivo</Button>
                        <Button onPress={() => handleClick('Morto')} style={{marginBottom: 30, marginTop: 10}} mode="contained">Morto</Button>
    
                        <Text>Selecionado: {resposta}</Text>
                        <Text style={{fontSize: 50,}}>Pontuação: {points}</Text>
                        <Text style={{fontSize: 20, marginTop: 20}}>Pulos: {pulos}</Text>
                        <Button onPress={pular} mode="contained"> Pular </Button>
                        
                    </View>
    
                    <Button onPress={checkResposta} style={{marginTop: 40, marginBottom: 10}} disabled={isloading} mode="contained">Enviar Resposta</Button>
                    <Text style={{fontSize: 20, marginTop: 10}}>Chances: {chances}</Text>
                    <View>
                        {resultado && (
                            <Text style={{ textAlign: "center", marginVertical: 20 }}>
                                {resultado}
                            </Text> )}
                    </View>
                </View>
            </View>
        )
    }