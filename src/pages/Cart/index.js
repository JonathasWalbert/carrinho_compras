import { useContext } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import { CartContext } from '../../Contexts/CartContext';

import CartItem from '../../Components/CartItem';

export default function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext)

  


 return (
   <View style={styles.container}>
    <FlatList 
      data={cart}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item no carrinho...</Text>}
      renderItem={({item}) => ( <CartItem data={item} addAmount={() => addItemCart(item)  } removeAmount={() => removeItemCart(item)} /> ) }
      ListFooterComponent={() => <Text style={styles.total}>Total: R$ {total}</Text>}
    />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#FAFAFA",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  empty:{
    textAlign: 'center',
    fontSize: 18,
  },
  total:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  }
})