import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const resp = await fetchData.json();
      setProducts(resp);
    };

    getData();
  }, []);

  return (
    <View>
      {products.map((item: any, index) => (
        <Text key={index}>{item.title}</Text>
      ))}
    </View>
  );
}
