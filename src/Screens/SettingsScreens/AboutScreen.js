import React from "react";
import { View, Text } from "react-native";
import { ScreenContainer } from "react-native-screens";
import styles from "../../Styles/GlobalStyles";

export default AboutScreen = () => (
  <ScreenContainer>
    <View style={styles.topcenter}>
      <Text style={styles.text1}>WILLOWS Coffee House</Text>
      <Text style={styles.text2}>
        Willows opened in August 2020 with one goal in mind: providing an
        enjoyable relaxed cosy coffee house experience to the people of
        Basingstoke. Thanks to our dedication and hard work, we’ve managed to
        bring a smile as well as gorgeous food and drink to our customers. We're
        dog friendly too, as after all Willows is named after the owners very
        own furbaby.
      </Text>
    </View>
  </ScreenContainer>
);
