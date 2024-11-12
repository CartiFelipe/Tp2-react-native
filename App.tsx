import { SafeAreaView, StyleSheet } from "react-native";
import Sexta from "./src/questoes/sexta/Sexta";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Sexta />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
