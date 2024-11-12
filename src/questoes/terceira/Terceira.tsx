import { View, Text, StyleSheet } from "react-native";

const Terceira = () => {
  const labels = ["Item A", "Item B", "Item C", "Item D"];

  return (
    <View style={style.container}>
      {labels.map((label, index) => (
        <View key={index} style={style.cardContainer}>
          <Text style={style.text}>{label}</Text>
        </View>
      ))}
    </View>
  );
};
export default Terceira;

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    gap: 10,

    marginTop: 50,

    paddingLeft: 20,
    flexWrap: "wrap",

    flexDirection: "row",
    justifyContent: "center",
  },
  cardContainer: {
    width: "40%",
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
