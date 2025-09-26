import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

function ChooseColorScreen({ navigation }) {
  const [selectedColor, setSelectedColor] = useState("đỏ");

  const colorImages = {
    "trang": require("./assets/trang.png"),
    "do": require("./assets/do.png"),
    "den": require("./assets/den.png"),
    "xanh": require("./assets/xanh.png"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.productBox}>
        <Image source={colorImages[selectedColor]} style={styles.productImage} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.productName}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.productDetail}>Màu: {selectedColor}</Text>
          <Text style={styles.supplier}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>1.790.000 đ</Text>
        </View>
      </View>

      <Text style={styles.chooseText}>Chọn một màu bên dưới:</Text>
      <View style={styles.colorBox}>
        <TouchableOpacity onPress={() => setSelectedColor("trang")}>
          <Image source={require("./assets/trang.png")} style={styles.colorOption} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedColor("do")}>
          <Image source={require("./assets/do.png")} style={styles.colorOption} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedColor("den")}>
          <Image source={require("./assets/den.png")} style={styles.colorOption} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedColor("xanh")}>
          <Image source={require("./assets/xanh.png")} style={styles.colorOption} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.navigate("Home", { color: selectedColor })}
      >
        <Text style={styles.doneText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ccc", padding: 10 },
  productBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  productImage: { width: 80, height: 100, resizeMode: "contain" },
  productName: { fontWeight: "bold", fontSize: 14 },
  productDetail: { marginTop: 4, fontSize: 12 },
  supplier: { fontSize: 12, color: "gray", marginVertical: 2 },
  price: { color: "black", fontWeight: "bold", fontSize: 14 },
  chooseText: { marginVertical: 15, fontSize: 14 },
  colorBox: { alignItems: "center", marginBottom: 20 },
  colorOption: {
    width: 100,
    height: 50,
    marginVertical: 8,
    borderRadius: 5,
    resizeMode: "contain",
  },
  doneButton: {
backgroundColor: "#4169e1",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  doneText: { color: "white", fontWeight: "bold", fontSize: 16 },
});
export default ChooseColorScreen;
