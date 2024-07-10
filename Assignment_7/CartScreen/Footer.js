import { StyleSheet, View, Text, Image} from "react-native";
import { useCart } from "../CartContext";

export default function Footer(){
    const { cart } = useCart();
  const totalSum = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        cart.map(item => <CartList key={item.id} item={item} />)
      ) : (
        <Text>Your cart is empty</Text>
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalSum.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  cartList: {
    flexDirection: 'row',
    padding: 13,
    alignItems: 'center',
    position: 'relative',
    top: 15,
  },
  productImage: {
    width: 90,
    height: 120,
    marginRight: 11,
  },
  productDetails: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    letterSpacing: 4,
    fontWeight: '400',
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: '#737373',
  },
  price: {
    fontSize: 15,
    color: '#D18035',
  },
  removeButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    right: 30,
  },
  removeImage: {
    width: 20,
    height: 20,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D18035',
  },
});