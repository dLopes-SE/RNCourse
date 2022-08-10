import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButtun from "../components/PrimaryButton";

function StartGameScreen(props) {
	const [enteredNumber, setEnteredNumber] = useState("");

	const numberInputHandler = (enteredText) => {
		setEnteredNumber(enteredText);
	};

	const resetBtnHandler = () => {
		setEnteredNumber("");
	};

	const confirmInputHandler = () => {
		const choosenNo = parseInt(enteredNumber);

		if (isNaN(choosenNo) || choosenNo <= 0 || choosenNo > 99) {
			Alert.alert(
				'Invalid number!', 
				'Number has to be between 1 and 99.', 
				[{text: 'Okay', style: 'destructive', onPress: resetBtnHandler()}]
			);
			return;
		}

		props.onPickNumber(choosenNo);
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
				value={enteredNumber}
				onChangeText={numberInputHandler}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButtun onPress={resetBtnHandler}>Reset</PrimaryButtun>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButtun onPress={confirmInputHandler}>Confirm</PrimaryButtun>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 100,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: "#3b021f",
		borderRadius: 12,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
		borderWidth: 0,
		elevation: 8,
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
});

export default StartGameScreen;
