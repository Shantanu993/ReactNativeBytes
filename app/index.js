import "react-native-gesture-handler"; // Import this line before any other imports at the top
// import { createBottomTabNavigator } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import CourseListScreen from "../screens/CourseListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { AboutStack } from "../milestones/app/indexComp8.1";

// Creating an instance of createBottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer> // NavigationContainer is required to be wrapped around the Tab.Navigator
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "below-icon", // Position of the tab label
        tabBarShowLabel: true, // Show the tab label
        tabBarActiveTintColor: "red", // Color of the active tab
      }}
    >
      <Tab.Screen name="Course List" component={CourseListScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "My Profile", // Custom label for the Profile tab
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={20} /> // Icon for the Profile tab
          ),
          tabBarBadge: 3, // Badge for the Profile tab
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      {/* Nesting Navigators */}
      <Tab.Screen
        name="About Stack"
        component={AboutStack}
        options={{
          headerShown: false, // Hide the header for the About Stack
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer> // Uncomment this line if NavigationContainer is required
  );
}
