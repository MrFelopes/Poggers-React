import { View } from 'react-native';
import {Text} from 'react-native-paper';
import { useEffect } from 'react';
import styles from '../utils/styles';

export default function FetchNews(){
    function fetchNewsData() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(error))
    }
    useEffect(() => {
        fetchNewsData();
    }, []);
    return(
        <View style={styles.container}>
            <Text>Fetch News</Text>
            {data.map((item) => (
                <View key={item.id}>
                    <Text key={item.id}></Text>
                    <Text key={item.title}></Text>
                </View> 
            ))}
        </View>
    )
}