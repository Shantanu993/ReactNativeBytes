import "react-native-gesture-handler"; // Import this line before any other imports at the top
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../screens/DashboardScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: "My Dashboard",
          drawerLabel: "Dashboard Label",
          drawerActiveBackgroundColor: "blue",
          drawerActiveTintColor: "red",
          drawerContentStyle: { backgroundColor: "orange" },
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}
