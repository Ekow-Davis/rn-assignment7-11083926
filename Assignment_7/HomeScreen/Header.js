import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Modal, Text, ScrollView } from 'react-native';

export default function Header( {navigation}) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSidebar}>
        <Image style={styles.menu} source={require('../assets/Menu.png')} />
      </TouchableOpacity>
      <View>
        <Image style={styles.logo} source={require('../assets/Logo.png')} />
      </View>
      <View style={styles.iconsContainer}>
        <Image style={styles.search} source={require('../assets/Search.png')} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
          <Image style={styles.shoppingBag} source={require('../assets/shoppingBag.png')} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={sidebarVisible}
        onRequestClose={toggleSidebar}
      >
        <View style={styles.sidebarContainer}>
          <TouchableOpacity onPress={toggleSidebar}>
            <Image style={styles.closeIcon} source={require('../assets/Close.png')} />
          </TouchableOpacity>
          <ScrollView>
            <Text style={styles.sidebarItem}>Store</Text>
            <Text style={styles.sidebarItem}>Locations</Text>
            <Text style={styles.sidebarItem}>Blog</Text>
            <Text style={styles.sidebarItem}>Clothing</Text>
            <Text style={styles.sidebarItem}>Jewelry</Text>
            <Text style={styles.sidebarItem}>Electronics</Text>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  menu: {
    width: 30,
    height: 33,
  },
  logo: {
    width: 99,
    height: 40,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  shoppingBag: {
    width: 30,
    height: 30,
  },
  button: {
    position: 'relative',
  },
  sidebarContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
    padding: 20,
  },
  closeIcon: {
    width: 30,
    height: 30,
    marginBottom: 20,
  },
  sidebarItem: {
    fontSize: 20,
    marginVertical: 10,
    color: '#fff',
  },
});
