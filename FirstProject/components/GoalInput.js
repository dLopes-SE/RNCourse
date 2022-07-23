import { useState } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from "react-native";

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	}

	return (
		<Modal animationType="slide" visible={props.modalVisible}>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				></Image>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<Button
						title="Cancel"
						onPress={() => props.closeModal()}
						color={"#f31282"}
					/>
					<Button title="Add Goal" onPress={addGoalHandler} color={"#b180f0"} />
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#311b7b",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		borderRadius: 8,
		backgroundColor: "#e4d0ff",
		width: "80%",
		padding: 10,
		marginBottom: 8,
		color: "#120438",
	},
	buttonContainer: {
		width: "42%",
		marginHorizontal: 8,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});
