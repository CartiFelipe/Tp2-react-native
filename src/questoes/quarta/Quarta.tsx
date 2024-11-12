import { View, Text, StyleSheet } from "react-native";

const Quarta = () => {
  const labels = ["Item A", "Item B", "Item C"];

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
export default Quarta;

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    gap: 10,

    marginTop: 50,

    paddingRight: 20,
    alignItems: "flex-end",
  },
  cardContainer: {
    width: "20%",
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
