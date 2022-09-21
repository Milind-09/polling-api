import PollingState from "./context/PollingState";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./screens/Details";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <PollingState>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </PollingState>
  );
}
