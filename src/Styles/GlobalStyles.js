import { StyleSheet, Platform } from "react-native";
export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  topcenter: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
  },
  text1: {
    fontSize: 22,
    alignItems: "center",
    justifyContent: "center",
    color: "#CC5500",
  },
  text2: {
    marginLeft: 7,
    color: "#CC5500",
    alignItems: "flex-end",
  },
  button1: {
    margin: 50,
    backgroundColor: "red",
  },
  button2: {
    margin: 50,
  },

  container: {
    flex: 1,
    backgroundColor: "#23282A",
    justifyContent: "center",
  },
});
