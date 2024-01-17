import { View, Image, Text } from 'react-native';
import React from 'react';
import styles from './slides.style';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, SIZES } from '../../constants/theme';
import ReusableBtn from '../Buttons/ReusableBtn';
import HeightSpacer from '../Reusable/HeightSpacer';
import { useNavigation } from '@react-navigation/native';

const Slides = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Image source={item.image} style={styles.image} />

      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family="medium"
          size={SIZES.xxLarge}
          color={COLORS.white}
        />

        <HeightSpacer height={20} />

        <ReusableBtn
          onPress={() => null}
          btnText="Let's go"
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.blue}
          borderColor={COLORS.blue}
          textColor={COLORS.white}
          borderWidth={0}
        />

        <HeightSpacer height={20} />

        <ReusableBtn
          onPress={() => null}
          btnText="Let's go"
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.blue}
          borderColor={COLORS.blue}
          textColor={COLORS.white}
          borderWidth={0}
        />
      </View>
    </View>
  );
};

export default Slides;
