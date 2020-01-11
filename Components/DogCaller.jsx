import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import DogCard from "./DogCard";

export default props => {
  const [update, setUpdate] = useState(false);
  const [rotation, setRotation] = useState("0deg");

  useEffect(() => {}, [rotation]);

  const LeftActions = (progress, dragX) => {
    console.log(progress, dragX);
    return (
      <View style={[styles.swipeableComponents]}>
        <DogCard />
      </View>
    );
  };

  const RightActions = (progress, dragX) => {
    return (
      <View style={styles.swipeableComponents}>
        <Text>Disliked</Text>
      </View>
    );
  };
  return (
    <View style={{ justifyContent: "space-between" }}>
      <Swipeable
        leftThreshold={40}
        friction={2}
        rightThreshold={40}
        // renderLeftActions={LeftActions}
        // renderRightActions={RightActions}
        onSwipeableLeftOpen={() => setUpdate(!update)}
      >
        <View
          style={{
            padding: 100,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flex: 1,
            transform: [{ rotate: rotation }]
          }}
        >
          
          <DogCard update={update} />
        </View>
      </Swipeable>

      {/* Dog Buttons */}
      {/* <View>
        <TouchableOpacity
          style={styles.dogButton}
          onPress={() => setUpdate(!update)}
        >
          <Text style={styles.dogButtonText}>Get A New Dog Pic</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  dogButton: {
    flex: 1,
    maxHeight: 60,
    backgroundColor: "#00ACED",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  dogButtonText: {
    textShadowOffset: { width: 10, height: 10 },
    fontSize: 25,
    color: "white"
  },
  swipeableComponents: {
    padding: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flex: 1
  }
});
