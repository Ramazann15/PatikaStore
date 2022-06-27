import { Text, View ,FlatList, TextInput } from 'react-native';
import styles from './App.style';
import product_Data from "./product-data.json"

import ProductCard from './components/ProductCard/';

export default function App() {

  const prodcutRender =({item})=><ProductCard product={item}/>

  return (
    <View style={styles.container}>
      <Text style={styles.logoName}>PATIKASTORE</Text>
      <TextInput placeholder='Ara...' style={styles.input}></TextInput>

      <FlatList 
        keyExtractor={({ id }) => id.toString()}
        data={product_Data}
        renderItem={prodcutRender} 
        numColumns={2}

      />

    </View>
  );
}


