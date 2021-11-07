import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// SCREENS
import HomeScreen from "./screen/HomeScreen";
import NavSearchScreen from "./screen/NavSearchScreen";
import NavLinksSearch from "./screen/NavLinksSearch";
import SearchScreen from "./screen/SearchScreen";
import NotFoundScreen from "./screen/NotFoundScreen";

import SingleProductType from "./screen/SingleProductType";
import PlatformScreen from "./screen/PlatformScreen";
import ConsoleScreen from "./screen/ConsoleScreen";
import SingleGameScreen from "./screen/SingleGameScreen";
import AccessoryScreen from "./screen/AccessoryScreen";
import MerchandiseScreen from "./screen/MerchandiseScreen";

import CartItemsScreen from "./screen/CartItemsScreen";
import CartShipPmtScreen from "./screen/CartShipPmtScreen";

import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";
import DashboardScreen from "./screen/DashboardScreen";
import OrderHistory from "./screen/OrderHistory";
import SingleOrderScreen from "./screen/SingleOrderScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />

        {/* SEARCH RELATED */}
        <Route exact path="/products/search" component={SearchScreen} />
        <Route
          exact
          path="/products/searchProducts"
          component={NavSearchScreen}
        />
        <Route
          exact
          path="/products/search/:platform/:product"
          component={NavLinksSearch}
        />

        {/* CATEGORY RELATED */}
        <Route
          exact
          path="/products/console/:console"
          component={PlatformScreen}
        />
        <Route
          exact
          path="/product/:productType"
          component={SingleProductType}
        />
        <Route path="/products/consoles/:id" component={ConsoleScreen} />
        <Route path="/products/accessories/:id" component={AccessoryScreen} />
        <Route
          path="/products/merchandises/:id"
          component={MerchandiseScreen}
        />
        <Route path="/products/games/:id" component={SingleGameScreen} />

        {/* CART RELATED */}
        {/* 'ID' is optional */}
        <Route path="/cart/:id?" component={CartItemsScreen} />
        <Route exact path="/shipping" component={CartShipPmtScreen} />

        {/* USER RELATED */}
        <Route path="/register" component={SignupScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/dashboard" exact component={DashboardScreen} />
        <Route exact path="/dashboard/orderHistory" component={OrderHistory} />
        <Route
          path="/dashboard/orderHistory/:id"
          component={SingleOrderScreen}
        />

        {/* 404 - Not Found */}
        <Route component={NotFoundScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
