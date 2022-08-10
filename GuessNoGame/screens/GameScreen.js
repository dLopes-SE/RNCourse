import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import NumberContainer from '../components/game/NumberContainer';
import Title from "../components/ui/Title";

function generateRandomBetween (min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max-min) + min);
  if (rndNum === exclude) 
    return generateRandomBetween(min, max, exclude)

  return rndNum;  
}

function GameScreen({userNo}) {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userNo));
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View><Text>LOG ROUNDS</Text></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 32
  },
});