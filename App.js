import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet, StatusBar } from 'react-native';
import PantallaApuntes from './pantallas/PantallaApuntes';
import PantallaCuenta from './pantallas/PantallaCuenta';
import PantallaCarrito from './pantallas/PantallaCarrito';
import PantallaDonaciones from './pantallas/PantallaDonaciones';

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'cuenta', title: 'Cuenta', icon: 'account-circle' },
    { key: 'apuntes', title: 'Apuntes', icon: 'book-search-outline' },
    { key: 'carrito', title: 'Carrito', icon: 'cart' },
    { key: 'donaciones', title: 'Donaciones', icon: 'coffee'},
  ]);

  // Esconder la barra de estados
  StatusBar.setHidden(true, 'none');

  const renderScene = BottomNavigation.SceneMap({
    cuenta: PantallaCuenta,
    apuntes: PantallaApuntes,
    carrito: PantallaCarrito,
    donaciones: PantallaDonaciones
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20, 
    marginLeft: 20, 
    marginRight: 20, 
    marginBottom: 20,
  },
  cardContainer: {
    width: 315,
    marginBottom: 8
  },
  textContainer: {
    fontSize: 25,
    paddingBottom: 5,
  }

});

export default App;