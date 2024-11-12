import { Text } from "react-native";

const Post = ({ navigation, route }) => {
  const { post } = route.params;

  return <Text>{post.title}</Text>;
};
export default Post;
