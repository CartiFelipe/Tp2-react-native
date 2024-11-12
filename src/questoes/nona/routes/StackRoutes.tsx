import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Views/Home";
import Post from "../Views/Post";
const StackRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackRoutes;
