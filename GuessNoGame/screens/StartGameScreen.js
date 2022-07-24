import { TextInput, View } from "react-native";

import PrimaryButtun from "../components/PrimaryButton";

function StartGameScreen() {
	return (
		<View>
			<TextInput />
      <PrimaryButtun>Reset</PrimaryButtun>
      <PrimaryButtun>Confirm</PrimaryButtun>
		</View>
	);
}

export default StartGameScreen;
