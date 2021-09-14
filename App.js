import React, { Component } from 'react';
import { BottomNavigation, Text, Card, Avatar, Button, Title, Paragraph, Searchbar } from 'react-native-paper';
import { StyleSheet, Image, View, SafeAreaView, StatusBar, ScrollView, TextInput, Text as TextNative } from 'react-native';

// Carousel Card
import ImagedCarouselCard from "react-native-imaged-carousel-card";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CuentaRoute = () => <SafeAreaView>
                            <ScrollView>
                              <View
                                style={{
                                  top: 32,
                                  alignItems: "center",
                                  justifyContent: "center",
                                  paddingBottom: 50
                                }}
                              >
                                <ImagedCarouselCard
                                  height={200}
                                  width={200}
                                  shadowColor="#051934"
                                  text={""}
                                  source={{
                                    uri:
                                      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                                  }}
                                />
                                <View style={{ marginTop: 32 }}>
                                  <ImagedCarouselCard 
                                    height={200}
                                    width={200}
                                    shadowColor="#051934"
                                    text={""}
                                  />
                                </View>

                                <View style={{ marginTop: 32 }}>
                                  <ImagedCarouselCard
                                    height={200}
                                    width={200}
                                    shadowColor="#051934"
                                    text={""}
                                    source={{
                                      uri:
                                        "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                    }}
                                  />
                                </View>
                              </View>
                            </ScrollView>
                          </SafeAreaView>

const ApuntesRoute = () => <SafeAreaView>
                            <ScrollView>

                              <View style={styles.container}>

                                <TextNative style={styles.textContainer}>
                                  Apuntes:
                                </TextNative>
                                <Card style={styles.cardContainer}>
                                    <Searchbar
                                      placeholder="Buscar apuntes"
                                      onChangeSearch={null}
                                      value={''}
                                    />
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/400'}} />
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Riemann_sqrt.svg/1200px-Riemann_sqrt.svg.png"}}/>
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/350'}} />
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/250'}} />
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/410'}} />
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/405'}} />
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/360'}} />
                                </Card>

                              </View>


                            </ScrollView>
                          </SafeAreaView>;

const CarritoRoute = () => <SafeAreaView>
                            <ScrollView>
                              <View style={styles.container}>

                                
                                  <TextNative style={styles.textContainer}>
                                    Carrito de compras:
                                  </TextNative>
                                

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/262'}} />
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/263'}} />
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/264'}} />
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/265'}} />
                                </Card>

                                <Card style={styles.cardContainer}>
                                <Card.Cover source={{uri: 'https://picsum.photos/266'}} />
                                </Card>
                                
                                <Card style={styles.cardContainer}>
                                <Card.Actions>
                                  <Button>Aceptar</Button>
                                  <Button>Cancelar</Button>
                                </Card.Actions>
                                </Card>


                              </View>
                            </ScrollView>
                          </SafeAreaView>;

const DonacionesRoute = () => <SafeAreaView>
                                <ScrollView>
                                  <View style={styles.container}>

                                    <TextNative style={styles.textContainer}>
                                    Subir apuntes:
                                    </TextNative>

                                    <Card style={styles.cardContainer}>
                                    <Card.Cover source={{ uri: 'https://picsum.photos/260' }} />
                                    </Card>

                                    <Card style={styles.cardContainer}>
                                    <Card.Actions>
                                    <Button>Donar</Button>
                                    </Card.Actions>
                                    </Card>

                                  </View>
                                </ScrollView>
                              </SafeAreaView>;

const MyComponent = () => {
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
    cuenta: CuentaRoute,
    apuntes: ApuntesRoute,
    carrito: CarritoRoute,
    donaciones: DonacionesRoute
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

export default MyComponent;