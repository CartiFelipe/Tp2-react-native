import { Image, StyleSheet, View, Text } from "react-native";

export type Contact = {
  photo: string;
  name: string;
  address: string;
  number: string;
};

const Card = ({ contact }: { contact: Contact }) => {
  return (
    <View style={style.card}>
      <View style={style.imgView}>
        <Image source={{ uri: contact.photo }} style={style.img} />
      </View>
      <View style={style.infoView}>
        <Text style={style.title}>{contact.name}</Text>
        <Text>{contact.address}</Text>
        <Text>{contact.number}</Text>
      </View>
    </View>
  );
};
export default Card;

const style = StyleSheet.create({
  card: {
    width: "80%",
    height: 130,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,

    display: "flex",
    flexDirection: "row",
    gap: 5,
  },

  img: {
    width: 100,
    height: "100%",
    borderWidth: 1,
    borderColor: "black",

    borderRadius: 45,
  },

  infoView: {
    borderColor: "black",
    display: "flex",
    justifyContent: "space-between",

    flexGrow: 2,
  },

  title: { fontSize: 30 },

  imgView: { flexGrow: 1 },
});
