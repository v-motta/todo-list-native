import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1A1A1A",
	},
	body: {
		paddingVertical: 54,
		paddingHorizontal: 24,
		gap: 20,
	},
	taskList: {
		gap: 8,
	},
	text: {
		color: "#FFF",
	},
	separator: {
		width: "100%",
		height: 1,
		backgroundColor: "#333333",
	},
	taskCounterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	tasksLength: {
		color: "#4EA8DE",
		fontWeight: "bold",
	},
	doneTasks: {
		color: "#8284FA",
		fontWeight: "bold",
	},
	emptyContainer: {
		borderTopWidth: 1,
		borderTopColor: "#333333",
		alignItems: "center",
		paddingVertical: 48,
		paddingHorizontal: 20,
		gap: 16,
	},
	number: {
		color: "#D9D9D9",
		fontWeight: "bold",
	},
});
