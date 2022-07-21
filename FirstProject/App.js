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

  function deleteItemHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals .filter(goal => goal.id !== id);
    });
  }

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalList}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return <GoalItem 
                      text={itemData.item.text} 
                      id={itemData.item.id}
                      onDeleteItem={deleteItemHandler}
                    />;
					}}
					keyExtractor={(item) => {
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
