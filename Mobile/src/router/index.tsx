import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/home/Home";
import CartScreen from "../screens/cart/Cart";
import OrderScreen from "../screens/order/Order";
import ProfileScreen from "../screens/profile/Profile";
import DetailProductScreen from "../screens/detailProduct/DetailProduct";
import CategoryScreen from "../screens/category/Category";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen
                name="Homes"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <HomeStack.Screen
                name="Categories"
                component={CategoryScreen}
                options={{ headerShown: false }}
              />
              <HomeStack.Screen
                name="Details"
                component={DetailProductScreen}
                options={{ headerShown: false }}
              />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Cart">
          {() => (
            <CartStack.Navigator>
              <CartStack.Screen
                name="Carts"
                component={CartScreen}
                options={{ headerShown: false }}
              />
            </CartStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Order">
          {() => (
            <OrderStack.Navigator>
              <OrderStack.Screen
                name="Homes"
                component={OrderScreen}
                options={{ headerShown: false }}
              />
            </OrderStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Profile">
          {() => (
            <ProfileStack.Navigator>
              <ProfileStack.Screen
                name="Profiles"
                component={ProfileScreen}
                options={{ headerShown: false }}
              />
            </ProfileStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
