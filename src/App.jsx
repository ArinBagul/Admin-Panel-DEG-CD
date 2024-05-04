import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Dashboard from "./screens/Dashboard";
import Place from "./screens/Place";
import Contact from "./screens/Contact";
import Team from "./screens/Team";
import Ps from "./screens/Ps";
import FileNotFound from "./screens/FileNotFound";

import "./App.css";
import "./screens/styles/tabContent.css";
import "./screens/styles/table.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import AddPlace from "./screens/AddPlace";
import AddPs from "./screens/AddPs";
import { AddTeam } from "./screens/AddTeam";
import AddDlno from "./screens/AddDlno";
import Dlno from "./screens/Dlno";
import AddPso from "./screens/AddPso";
import Pso from "./screens/Pso";
import Ac from "./screens/Ac";
import AddAc from "./screens/AddAc";
import Impo from "./screens/Impo";
import AddImpo from "./screens/AddImpo";
import LoginScreen from "./screens/LoginScreen";
import Notification from "./screens/Notification";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const apiKey = import.meta.env.VITE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const databaseURL = import.meta.env.VITE_DATABASE_URL;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;
const measurementId = import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
// console.log(import.meta.env.VITE_API_KEY)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [erMsg, setErMsg] = useState(false)

  const handleLogin = (userData) => {
    // Here you can perform any action with the login data received from the child component
    // console.log("Received login data:", userData.username);
    // For demonstration purposes, I'm just setting isLoggedIn to true
    if (userData.username === import.meta.env.VITE_USERNAME && userData.password === import.meta.env.VITE_PASSWORD) {
      setIsLoggedIn(true);
    } else{
      setErMsg(true);
    }
  };

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} isError={erMsg} />
      ) : (
        <div className="appContainer">
          <Navbar />
          <div className="pageContainer">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/ps" element={<Ps />} />
              <Route path="/team" element={<Team />} />
              <Route path="/place" element={<Place />} />
              <Route path="/notify" element={<Notification />} />
              <Route path="/notify/add" element={<Notification />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/notification/add" element={<Notification />} />
              <Route path="/message" element={<Notification />} />
              <Route path="/message/add" element={<Notification />} />

              <Route path="/*" element={<FileNotFound />} />

              <Route path="/place/add" element={<AddPlace />} />
              <Route path="/ps/add" element={<AddPs />} />
              <Route path="/team/add" element={<AddTeam />} />
              <Route path="/contact/add" element={<Contact />} />

              <Route path="/contact/dlno" element={<Dlno />} />
              <Route path="/contact/ps" element={<Pso />} />
              <Route path="/contact/ac" element={<Ac />} />
              <Route path="/contact/impo" element={<Impo />} />

              <Route path="/contact/add/dlno" element={<Dlno />} />
              <Route path="/contact/add/ps" element={<Pso />} />
              <Route path="/contact/add/ac" element={<Ac />} />
              <Route path="/contact/add/impo" element={<Impo />} />

              <Route path="/contact/dlno/add" element={<AddDlno />} />
              <Route path="/contact/ps/add" element={<AddPso />} />
              <Route path="/contact/ac/add" element={<AddAc />} />
              <Route path="/contact/impo/add" element={<AddImpo />} />

              <Route path="/contact/add/dlno/add" element={<AddDlno />} />
              <Route path="/contact/add/ps/add" element={<AddPso />} />
              <Route path="/contact/add/ac/add" element={<AddAc />} />
              <Route path="/contact/add/impo/add" element={<AddImpo />} />
            </Routes>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
