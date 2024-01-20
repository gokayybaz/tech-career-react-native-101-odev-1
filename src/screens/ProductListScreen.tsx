import {ScrollView} from 'react-native';
import {Card, Text} from 'react-native-paper';
import React from 'react';
import {productList} from '../data/productList';

const ProductListScreen = () => {
  return (
    <ScrollView style={{paddingLeft: '5%', paddingRight: '5%'}}>
      {productList.map(item => (
        <Card style={{marginTop: '5%'}} key={item.id}>
          <Card.Cover style={{padding: '2%'}} source={{uri: item.image}} />
          <Card.Content style={{marginTop: '5%'}}>
            <Text style={{fontWeight: 'bold'}} variant="titleLarge">
              {item.name}
            </Text>
            <Text style={{marginTop: '2%', fontSize: 18}} variant="titleLarge">
              Fiyat : {item.unitPrice}
            </Text>
            <Text style={{marginTop: '2%'}} variant="bodyMedium">
              Özellikler : {item.description}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

export default ProductListScreen;
