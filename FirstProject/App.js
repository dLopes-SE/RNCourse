import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	function addGoalHandler(enteredText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredText, id: Math.random().toString() },
		]);
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalList}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return <GoalItem text={itemData.item.text} />;
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
					alwaysBounceVertical={false}
				></FlatList>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		alignItems: "center",
		flex: 1,
	},

	goalList: {
		flex: 8,
		width: "90%",
	},
});
