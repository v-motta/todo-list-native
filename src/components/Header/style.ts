import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
	container: {
		height: 173,
		backgroundColor: "#0D0D0D",
		justifyContent: "center",
		alignItems: "center",
	},
	logoContainer: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	formContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	form: {
		gap: 4,
		flexDirection: "row",
		position: "absolute",
		bottom: -54 / 2,
		flex: 1,
		width: "100%",
		paddingHorizontal: 24,
	},
	input: {
		color: "#FFF",
		height: 54,
		flex: 1,
		backgroundColor: "#262626",
		borderRadius: 6,
		padding: 16,
	},
	button: {
		width: 52,
		backgroundColor: "#1E6F9F",
		borderRadius: 6,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontSize: 20,
		color: "#FFF",
	},
});
