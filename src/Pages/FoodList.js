import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import axios from "axios";

import Config from "react-native-config";

import NavHeaderRight from "../components/NavHeaderRight";
import ListCard from "../components/ListCard";

class FoodList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Hungry?",
      headerRight: (
        <NavHeaderRight toScreen={"OrderSummary"} buttonText={"View Basket"} />
      ),
    };
  };
  //
  foods_r = [
    {
      id: 1,
      name: "Spicy Teriyaki",
      price: 19.25,
      image: "spicy-teriyaki.jpg",

      restaurant: {
        id: 25,
        name: "MIZ Japanese Restaurant",
        address: "17 Kampong Bahru Rd, Singapore 169347",
        location: [16.618037, 120.3146543],
      },
    },
    {
      id: 2,
      name: "Honey Garlic Chicken",
      price: 5.5,
      image: "honey-garlic-chicken.jpg",
      restaurant_id: 26,

      restaurant: {
        id: 26,
        name: "Everton Food Place",
        address: "7 Everton Park, Singapore 080007",
        location: [1.2773164, 103.8384773],
      },
    },
  ];
  state = {
    foods: [],
    query: "",
  };
  //

  async componentDidMount() {
    try {
      this.setState({
        foods: this.foods_r,
      });
    } catch (err) {
      console.log("err: ", err);
    }
  }

  onChangeQuery = (text) => {
    this.setState({
      query: text,
    });
  };

  render() {
    const { foods, query } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.topWrapper}>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={this.onChangeQuery}
              value={query}
              placeholder={"What are you craving for?"}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              onPress={() => this.filterList()}
              title="Go"
              color="#c53c3c"
            />
          </View>
        </View>

        <FlatList
          data={foods}
          renderItem={this.renderFood}
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
  //

  filterList = async () => {
    const { query } = this.state;

    this.setState({
      foods: this.foods_r,
      query: "",
    });
  };

  viewItem = (item) => {
    this.props.navigation.navigate("FoodDetails", {
      item,
    });
  };

  renderFood = ({ item }) => {
    return <ListCard item={item} viewItem={this.viewItem} />;
  };
}
//

const styles = StyleSheet.create({
  headerButtonContainer: {
    marginRight: 10,
  },
  wrapper: {
    flex: 1,
    padding: 10,
  },
  topWrapper: {
    flexDirection: "row",
  },
  textInputWrapper: {
    flex: 4,
  },
  textInput: {
    height: 35,
    borderColor: "#5d5d5d",
    borderWidth: 1,
  },
  buttonWrapper: {
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});

export default FoodList;
