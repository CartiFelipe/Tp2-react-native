import { View, Text, StyleSheet } from "react-native";

const Sexta = () => {
  const labels = ["Item A", "Item B", "Item C", "Item D"];

  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        {labels.map((label, index) => (
          <View key={index} style={style.cardContainer}>
            <Text style={style.text}>{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
export default Sexta;

const style = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: 40,
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContainer: {
    width: "100%",
    height: 100,
    color: "red",

    borderWidth: 1,
    borderColor: "black",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
