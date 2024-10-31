import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  FlatList,
  SectionList,
  TextInput,
  Switch,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";

export default function Index() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No Posts Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={
            <Text style={styles.footerText}>End of list</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

// key value pairs are used to define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 16,
    color: "#333",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
