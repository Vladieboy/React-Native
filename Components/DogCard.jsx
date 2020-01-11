import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default props => {
    let lastPress = 0, displayLike = "none";
  const [dogImage, setDogImage] = useState(
    "https://en.wikipedia.org/wiki/File:Mops_oct09_cropped2.jpg"
  );

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => {
        return resp.json();
      })
      .then(myJson => setDogImage(myJson.message));
  }, [props.update]);

  const likeDog = () => {
    console.log("hi");
  };

  const onDoubleClick = () => {
    const time = new Date().getTime();
    const delta = time - lastPress;
    const doublePressDelay = 400;

    if (delta < doublePressDelay) {
      likeDog();
      displayLike = "";
    } else {
      displayLike = "";
    }

    lastPress = time;
  };

  return (
    <View>
      <TouchableOpacity onPress={onDoubleClick}>
        <ImageBackground style={styles.dogImage} source={{ uri: dogImage }}>
          <View style={styles.instaHeart}>
            <Ionicons
              style={{ padding: 100, display: displayLike }}
              color="red"
              size={32}
              name="md-heart"
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  dogImage: {
    width: 350,
    height: 500,
    flex: 0.9,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  instaHeart: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  }
};
