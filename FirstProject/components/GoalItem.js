import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
	return (
		<Pressable 
			onPress={props.onDeleteItem.bind(this, props.id)}
			>
			{({pressed}) => (
				<View style={[styles.goalItem, pressed && styles.pressedEfect]}>
					<Text style={styles.goalText}>{props.text}</Text>
				</View>
			)}
		</Pressable>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		padding: 8,
		paddingLeft: 12,
		paddingRight: 12,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "white",
	},
	pressedEfect: {
		backgroundColor: "#ab1cba",
	},
});
