import { Text, View, SafeAreaView, StyleSheet, Alert } from "react-native";
import Card, { Post } from "../components/card/Card";
import { createStackNavigator } from "@react-navigation/stack";

const Home = ({ navigation }) => {
  const posts = [
    {
      title: "Roubo",
      content:
        "Um roubo ocorreu na cidade ontem à noite, onde vários itens de valor foram levados. A polícia está investigando o caso e pede que qualquer pessoa com informações entre em contato.",
      likes: 20,
      postDate: "2021-09-01",
      shared: 10,
      author: "João da Silva",
    },
    {
      title: "Acidente de Trânsito",
      content:
        "Um acidente de trânsito envolvendo vários veículos ocorreu na manhã de hoje. Felizmente, não houve vítimas fatais, mas o trânsito ficou congestionado por várias horas.",
      likes: 15,
      postDate: "2021-09-02",
      shared: 5,
      author: "Maria Oliveira",
    },
    {
      title: "Evento Cultural",
      content:
        "A cidade sediará um evento cultural no próximo fim de semana, com diversas atrações musicais e gastronômicas. Todos estão convidados a participar e prestigiar o evento.",
      likes: 30,
      postDate: "2021-09-03",
      shared: 20,
      author: "José Santos",
    },
  ];

  const handleCardClick = (id) => {
    // navigate to post screen
    navigation.navigate("post", { post: posts[id] });
  };
  return (
    <View style={style.mainContainer}>
      {posts.map((post, i) => (
        <Card post={post} key={i + 1} handleCardClick={() => handleCardClick(i)} />
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",

    alignItems: "center",
    marginTop: 50,
    gap: 10,
  },
});

export default Home;
