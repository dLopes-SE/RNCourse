import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import NumberContainer from '../components/game/NumberContainer';
import PrimaryButtun from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

let generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max-min) + min);
  if (rndNum === exclude) 
    return generateRandomBetween(min, max, exclude)

  return rndNum;  
};

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNo}) {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(minBoundary, maxBoundary, userNo));

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNo) || 
      (direction === "higher" && currentGuess > userNo)
    ) {
      Alert.alert("Don't lie", "You know that is wrong...", [
        { text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    
    if (direction === 'lower') 
      maxBoundary = currentGuess;
    else
      minBoundary = currentGuess;

    setCurrentGuess(generateRandomBetween(minBoundary, maxBoundary, currentGuess));
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <PrimaryButtun onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButtun>
        <PrimaryButtun onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButtun>
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