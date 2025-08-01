import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";
import { weeklyDeals } from "../data/constants";

export default function WeeklyDealsCarousel({ currentIndex, setCurrentIndex }) {
  const decreasingDots = Array(5).fill(0).map((_, i) => ({
    quantity: 1,
    config: {
      opacity: 1 - i * 0.2,
      color: "#FF5864",
      margin: 4,
      size: 8,
    },
  }));

  return (
    <View style={{ width: "100%", paddingLeft: 16, alignItems: "flex-start" }}>
      <Carousel
        loop
        width={320}
        height={140}
        autoPlay
        data={weeklyDeals}
        onSnapToItem={setCurrentIndex}
        scrollAnimationDuration={1200}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 40,
        }}
        renderItem={({ item }) => (
          <LinearGradient
            colors={["#FFA500", "#FF4D4D"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.mainDealCard}
          >
            <View style={styles.dealTextContainer}>
              <Text style={styles.mainDealTitle}>{item.title}</Text>
              <Text style={styles.mainDealSubtitle}>{item.description}</Text>
            </View>
            <View style={styles.promoImageContainer}>
              <Image source={item.image} style={styles.promoImage} resizeMode="cover" />
            </View>
          </LinearGradient>
        )}
      />
      <AnimatedDotsCarousel
        length={weeklyDeals.length}
        currentIndex={currentIndex}
        maxIndicators={5}
        interpolateOpacityAndColor
        decreasingDots={decreasingDots}
        activeIndicatorConfig={{
          color: "#FF5864",
          margin: 4,
          opacity: 1,
          size: 12,
        }}
        inactiveIndicatorConfig={{
          color: "#FF5864",
          margin: 4,
          opacity: 0.3,
          size: 8,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainDealCard: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 15,
    marginRight: 20,
    alignItems: "center",
    width: 320,
    height: 140,
    justifyContent: "space-between",
  },
  dealTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  mainDealTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  mainDealSubtitle: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
  },
  promoImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  promoImage: {
    width: "100%",
    height: "100%",
  },
});
