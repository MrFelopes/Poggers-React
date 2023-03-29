import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { useEffect, useState } from "react";
import styles from "../utils/styles";

export default function FetchNews() {
  const [data, setData] = useState([]);

  function fetchNewsData() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>       
          <Text>Fetch News</Text>
        {data.results?.map((item) => (
          <Text style={{ fontSize: "20px", margin: "8px" }} key={item.id}>
            <View>
              <Image
                source={{ uri: item.image }}
                style={{ width: 300, height: 300 }}
              />
              <View style={{ alignItems: "center", marginTop: 10 }}>
                {item.name}
              </View>
              <View style={{ alignItems: "center" }}>{item.status}</View>
              <View style={{ alignItems: "center" }}>{item.species}</View>
              <View style={{ alignItems: "center" }}>{item.gender}</View>
            </View>
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
