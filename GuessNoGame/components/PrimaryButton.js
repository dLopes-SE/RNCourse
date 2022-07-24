import { View, Pressable, Text } from "react-native";

function PrimaryButtun({ children }) {
	return (
		<Pressable>
			<View>
				<Text>{children}</Text>
			</View>
		</Pressable>
	);
}

export default PrimaryButtun;
