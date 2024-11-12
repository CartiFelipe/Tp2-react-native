import { Image, StyleSheet, View, Text, Pressable } from "react-native";
export type Post = {
  title: string;
  content: string;
  likes: number;
  shared: number;
  postDate: string;
};

type cardProps = {
  post: Post;
  handleCardClick: () => void;
};

const Card = ({ post, handleCardClick }: cardProps) => {
  return (
    <Pressable
      onPress={handleCardClick}
      style={{
        width: "100%",
        height: 130,
        display: "flex",
        alignItems: "center",
      }}
    >
      <View style={style.card}>
        <View style={style.upperPostView}>
          <Text style={style.title}>{post.title}</Text>
          <Text style={style.content} numberOfLines={2}>
            {post.content}
          </Text>
        </View>
        <View style={style.lowerPostView}>
          <Text style={style.likes}>Curtidas: {post.likes}</Text>
          <Text style={style.shared}>Compartilhamentos: {post.shared}</Text>
        </View>
      </View>
    </Pressable>
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
    flexDirection: "column",
    gap: 5,
  },
  upperPostView: {
    display: "flex",
    gap: 20,
  },
  lowerPostView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
  },
  likes: {
    fontSize: 14,
  },
  shared: {
    fontSize: 14,
  },
});
