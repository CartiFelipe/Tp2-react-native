import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Card, { Contact } from "./omponents/card/Card";
import { StatusBar } from "expo-status-bar";

const Oitava = () => {
  const contacts: Contact[] = [
    {
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s",
      name: "João",
      address: "Rua voluntários da pátria",
      number: "(21) 97039-1215",
    },
    {
      photo: "https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp3_d7855f9562.webp",
      name: "Fernando",
      address: "Rua das jaqueiras",
      number: "(21) 93039-1215",
    },
    {
      photo: "https://avatar.iran.liara.run/public/42",
      name: "Joaquim",
      address: "Rua do gás",
      number: "(21) 37425-1215",
    },
  ];
  return (
    <SafeAreaView style={style.mainContainer}>
      {contacts.map((contact, i) => (
        <Card contact={contact} key={i + 1} />
      ))}
    </SafeAreaView>
  );
};
export default Oitava;

const style = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",

    alignItems: "center",
    gap: 10,

    marginTop: 20,
  },
});
