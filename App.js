import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import { getCalendarColumns } from "./src/util";

export default function App() {
  const now = new Date();
  console.log(dayjs(now).format("YYYY-MM-DD HH:mm:ss"));
  const x = getCalendarColumns(now);
  console.log(x);
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
