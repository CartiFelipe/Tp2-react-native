import { ScrollView, StyleSheet, Text, View } from "react-native";

const Post = ({ navigation, route }) => {
  const { post } = route.params;

  return (
    <View style={style.mainContainer}>
      <View style={style.upperInfo}>
        <View>
          <Text style={style.title}>{post.title}</Text>
        </View>
        <View style={style.interactionsContainer}>
          <Text style={style.interactionText}>Curtidas: {post.likes} </Text>
          <Text style={style.interactionText}>Compartilhamentos: {post.shared}</Text>
        </View>
      </View>
      {/* ScrollView que cubra 70% da pagina */}
      <ScrollView style={style.contentContainer}>
        <Text>{post.content}</Text>
      </ScrollView>
      <View style={style.footer}>
        <Text>{post.author}</Text>
        <Text>{post.postDate}</Text>
      </View>
    </View>
  );
};
export default Post;

const style = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",

    display: "flex",

    padding: 30,
    gap: 20,
  },
  upperInfo: {
    display: "flex",
    gap: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  interactionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  contentContainer: {
    height: "70%",

    borderColor: "black",
  },

  footer: {
    display: "flex",

    justifyContent: "space-between",
    flexGrow: 1,
  },
});
