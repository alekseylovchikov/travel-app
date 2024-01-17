import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Slides } from '../../components';

const Onboarding = () => {
  const slides = [
    {
      id: '1',
      image: require('../../assets/images/code-1.jpeg'),
      title: 'Learn programming with us',
    },
    {
      id: '2',
      image: require('../../assets/images/code-2.jpeg'),
      title: 'Discover best practice with us',
    },
    {
      id: '3',
      image: require('../../assets/images/code-3.jpeg'),
      title: 'Find the best talent with us',
    },
  ];

  return (
    <FlatList
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Slides item={item} />}
    />
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
