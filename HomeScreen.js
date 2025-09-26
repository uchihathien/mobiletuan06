import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function HomeScreen({ navigation, route }) {
  const { color } = route.params || {}; // lấy màu từ ChooseColorScreen

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {/* Ảnh sản phẩm */}
        <Image
          source={
            color === "xanh"
              ? require("./assets/do.png")
              : color === "do"
              ? require("./assets/den.png")
              : color === "den"
              ? require("./assets/xanh.png")
              : color === "xanh"
              ? require("./assets/trang.png")
              : require("./assets/xanh.png")
          }
          style={styles.productImage}
        />

        <Text style={styles.title}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>

        <View style={styles.ratingRow}>
          {[...Array(5)].map((_, i) => (
            <Icon key={i} name="star" size={18} color="gold" style={{ marginRight: 2 }} />
          ))}
          <Text style={styles.reviewText}>(Xem 828 đánh giá)</Text>
        </View>

        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.oldPrice}>1.990.000 đ</Text>

        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => navigation.navigate("ChooseColor")}
        >
          <Text style={styles.colorText}>4 MÀU - CHỌN LOẠI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, alignItems: "center", padding: 20 },
  productImage: { width: 200, height: 300, resizeMode: "contain" },
  title: { fontSize: 16, fontWeight: "bold", textAlign: "center", marginTop: 10 },

  ratingRow: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  reviewText: { fontSize: 14, color: "#666", marginLeft: 5 },

  price: { fontSize: 20, fontWeight: "bold", color: "red", marginTop: 5 },
  oldPrice: {
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
    marginBottom: 15,
  },

  colorButton: {
    marginTop: 0,
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 12,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
  },
  colorText: { fontWeight: "600" },
  buyButton: {
    marginTop: 10,
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
  },
  buyText: { color: "white", fontWeight: "bold", fontSize: 16 },
});

export default HomeScreen;