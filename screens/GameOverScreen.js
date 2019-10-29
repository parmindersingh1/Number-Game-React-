import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import BodyText from "./../components/BodyText";
import TitleText from "./../components/TitleText";
import Colors from "./../constants/colors";
import MainButton from "./../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../assets/success.png")}
          // source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FArtesonraju&psig=AOvVaw39QfH93sM9svvknApZzGKu&ust=1572070406813000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDJtOLgtuUCFQAAAAAdAAAAABAP"}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
