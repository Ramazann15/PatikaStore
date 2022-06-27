import React from "react";
import { Image, View ,Text } from "react-native";

import styles from "./ProductCard.style";

const ProductCard =({product})=>{

    return(
        <View style={styles.container}>
            <Image style={styles.Image} source={{uri:product.imgURL}} />
            <View style={styles.containerInner}>
                <Text style={styles.Name}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                {
                    !product.inStock &&<Text style={styles.inStock}>Stokta YOK</Text>
                }
            </View>
            
        </View>
    )
}

export default ProductCard