import { SafeAreaView, StyleSheet } from "react-native";
import Oitava from "./src/questoes/oitava/Oitava";
import Nona from "./src/questoes/nona/Nona";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Nona />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
