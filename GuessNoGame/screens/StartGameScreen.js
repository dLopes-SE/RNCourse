import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButtun from "../components/PrimaryButton";

function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButtun>Reset</PrimaryButtun>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButtun>Confirm</PrimaryButtun>
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
  }
});

export default StartGameScreen;
