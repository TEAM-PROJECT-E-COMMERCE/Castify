import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#292929",
          tabBarStyle: {
            height: 60,
            position: "absolute",
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius: 15,
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { marginBottom: 10, marginTop: -10 },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        >
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

        <Tab.Screen
          name="Cart"
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { marginBottom: 10, marginTop: -10 },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
          }}
        >
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

        <Tab.Screen
          name="Order"
          options={{
            tabBarLabel: "Order",
            tabBarLabelStyle: { marginBottom: 10, marginTop: -10 },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="script-text"
                color={color}
                size={size}
              />
            ),
          }}
        >
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

        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { marginBottom: 10, marginTop: -10 },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        >
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
