import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLE
import "../styles/dashboard.css";

// COMPONENT
import ScreenBgd from "../components/ScreenBgd";

// REDUX RELATED
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetails,
  updateDeliveryAddress,
  updatePassword,
  updatePersonalDetails,
} from "../actions/userActions";

const DashboardScreen = ({ history }) => {
  // PERSONAL DETAILS CONSTS
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  // PASSWORD CONSTS
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // DELIVERY ADDRESS CONSTS
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  // PAYMENT DETAILS CONSTS
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [secCode, setSecCode] = useState("");
  // ERROR MESSAGE
  const [message, setMessage] = useState(null);

  // REDUX RELATED
  const dispatch = useDispatch();
  // USER DETAILS
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  // USER INFO - Extracted to see if user is logged in or not
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // USER INFO - Extracted to get the 'success' status when 'personal details' updated
  const userUpdatePersonalDetails = useSelector(
    (state) => state.userUpdatePersonalDetails
  );
  const { success: successPersonal } = userUpdatePersonalDetails;
  // USER INFO - Extracted to get the 'success' status when 'password' updated
  const userUpdatePassword = useSelector((state) => state.userUpdatePassword);
  const { success: successPassword } = userUpdatePassword;
  // USER INFO - Extracted to get the 'success' status when 'adddress' updated
  const userUpdateAddress = useSelector((state) => state.userUpdateAddress);
  const { success: successAddress } = userUpdateAddress;

  useEffect(() => {
    // If 'userInfo' unavailable, redirect to 'LOGIN' page
    if (!userInfo) {
      history.push("/login");
    } else {
      // IF logged in and user details is missing, fetch it through 'getUserProfile' ACTION.
      // If User's 'fName' itself is not there, means other details are also not there. And so we dispatch 'getUserDetails'
      if (!user.fName) {
        dispatch(getUserDetails("profile"));
      } else {
        // If user details is available, we set the form fields
        setfName(user.fName);
        setlName(user.lName);
        setEmail(user.email);
        setStreetAddress(user.streetAddress);
        setZipCode(user.zipCode);
        setNumber(user.number);
        setCity(user.city);
      }
    }
  }, [dispatch, history, user, userInfo]);

  // PERSONAL DETAILS SUBMIT HANDLER
  const personalSubmitHandler = (e) => {
    e.preventDefault();
    // DISPATCH 'UPDATE PERSONAL DETAILS' ACTION
    dispatch(
      updatePersonalDetails({
        id: user._id,
        fName,
        lName,
        email,
      })
    );
  };

  // UPDATE PASSWORD SUBMIT HANDLER
  const passwordSubmitHandler = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match. Try again.");
    } else {
      // DISPATCH 'UPDATE PASSWORD' ACTION
      dispatch(
        updatePassword({
          id: user._id,
          newPassword,
        })
      );
    }
  };

  // UPDATE DELIVERY ADDRESS SUBMIT HANDLER
  const addressSubmitHandler = (e) => {
    e.preventDefault();
    // DISPATCH 'UPDATE DELIVERY ADDRESS' ACTION
    dispatch(
      updateDeliveryAddress({
        id: user._id,
        streetAddress,
        zipCode,
        city,
        number,
      })
    );
  };

  return (
    <>
      <ScreenBgd brightNess={"35%"} />
      <section id="dashboard">
        <div className="dashboard-grid">
          <div className="left-pane">
            <div className="fixed-container">
              <div className="account-settings">
                <h4 className="account-settings-title">Account Settings</h4>
                <ul className="account-group">
                  <li>
                    <a href="#personal-details">Personal Details</a>
                  </li>
                  <li>
                    <a href="#change-password">Change Password</a>
                  </li>
                  <li>
                    <a href="#delivery-address">Delivery Address</a>
                  </li>
                  <li>
                    <a href="#payment-details">Payment Details</a>
                  </li>
                </ul>
              </div>
              <div className="my-orders">
                <h4 className="my-orders-title">My Orders</h4>
                <a href="/dashboard/orderHistory">Order History</a>
              </div>
            </div>
          </div>
          <div className="right-pane">
            {/* PERSONAL DETAILS */}
            <div className="personal-details" id="personal-details">
              <h3 className="personal-title">Personal Details</h3>
              <form className="form-personal">
                <div className="form-personal-group">
                  <label htmlFor="fName">First name</label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    value={fName}
                    onChange={(e) => setfName(e.target.value)}
                  />
                </div>
                <div className="form-personal-group">
                  <label htmlFor="lName">Last name</label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    value={lName}
                    onChange={(e) => setlName(e.target.value)}
                  />
                </div>
                <div className="form-personal-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  className="personal-btn"
                  onClick={personalSubmitHandler}
                >
                  Save Changes
                </button>
              </form>
            </div>
            <hr />
            {/* CHANGE PASSWORD */}
            <div className="change-pwd" id="change-password">
              <h3 className="pwd-title">Change Password</h3>
              <form className="form-pwd">
                <div className="form-pwd-group">
                  <label htmlFor="currPwd">Current Password</label>
                  <input
                    type="password"
                    name="currPwd"
                    id="currPwd"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div className="form-pwd-group">
                  <label htmlFor="newPwd">New password</label>
                  <input
                    type="password"
                    name="newPwd"
                    id="newPwd"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="form-pwd-group">
                  <label htmlFor="confirmPwd">Confirm password</label>
                  <input
                    type="password"
                    name="confirmPwd"
                    id="confirmPwd"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button className="pwd-btn" onClick={passwordSubmitHandler}>
                  Save Changes
                </button>
              </form>
            </div>
            <hr />
            {/* DELIVERY DETAILS */}
            <div className="delivery-details" id="delivery-address">
              <h3 className="delivery-title">Delivery Address</h3>
              <form className="delivery">
                <div className="delivery-form-group">
                  <label htmlFor="address">Street address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    id="address"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </div>
                <div className="delivery-form-group">
                  <label htmlFor="zip">Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
                <div className="delivery-form-group">
                  <label htmlFor="city">City</label>
                  <select
                    name="city"
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="" disabled>
                      Select your city
                    </option>
                    <option value="Dubai" selected={city === "Dubai"}>
                      Dubai
                    </option>
                    <option value="Abu Dhabi" selected={city === "Abu Dhabi"}>
                      Abu Dhabi
                    </option>
                    <option value="Sharjah" selected={city === "Sharjah"}>
                      Sharjah
                    </option>
                  </select>
                </div>
                <div className="delivery-form-group">
                  <label htmlFor="contact">Contact number</label>
                  <input
                    type="tel"
                    name="contact"
                    id="contact"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <button className="delivery-btn" onClick={addressSubmitHandler}>
                  Save Changes
                </button>
              </form>
            </div>
            <hr />
            {/* PAYMENT DETAILS */}
            <div className="payment-details" id="payment-details">
              <h3 className="payment-title">Payment Details</h3>
              <form className="cc-form">
                <div className="cc-form-group">
                  <label htmlFor="ccNumber">Card number</label>
                  <input
                    type="text"
                    name="ccNumber"
                    id="ccNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                <div className="cc-form-group">
                  <label htmlFor="expMonth">Expiry (month)</label>
                  <select
                    name="expMonth"
                    id="expMonth"
                    defaultValue={expiryMonth}
                    onChange={(e) => setExpiryMonth(e.target.value)}
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="cc-form-group">
                  <label htmlFor="expYear">Expiry (year)</label>
                  <select
                    name="expYear"
                    id="expYear"
                    defaultValue={expiryYear}
                    onChange={(e) => setExpiryYear(e.target.value)}
                  >
                    <option value="2021" selected>
                      2021
                    </option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
                <div className="cc-form-group">
                  <label htmlFor="secCode">Security Code</label>
                  <input
                    type="password"
                    name="secCode"
                    id="secCode"
                    value={secCode}
                    onChange={(e) => setSecCode(e.target.value)}
                  />
                </div>
                <button className="cc-form-btn">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardScreen;
