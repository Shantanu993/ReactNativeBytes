import "react-native-gesture-handler"; // Import this line before any other imports at the top
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import CourseListScreen from "../screens/CourseListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { AboutStack } from "../milestones/app/indexComp8.1";

// creating instance of createBottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarShowLabel: true,
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen name="Course List" component={CourseListScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "My Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={20} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      {/* Nesting Navigators */}
      <Tab.Screen
        name="About Stack"
        component={AboutStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
