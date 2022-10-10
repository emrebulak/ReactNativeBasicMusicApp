import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './card.style';

const Card = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.data.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.data.title}</Text>

        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text>{props.data.artist}</Text>
            <Text style={styles.year}>{props.data.year}</Text>
          </View>
          {props.data.isSoldOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Card;
