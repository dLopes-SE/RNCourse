import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
	const [userNumber, setUserNumber] = useState();

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;
	if (userNumber) 
		screen = <GameScreen userNo={userNumber}/>;

	return (
		<LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500 ]}>
			<ImageBackground
				style={styles.rootScreen}
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
