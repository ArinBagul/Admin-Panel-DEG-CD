import React from "react";
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

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSCJZYUQvQZ7_ZP_nSUqbqGtFVz6WF-Ho",
  authDomain: "egovernance-cf66d.firebaseapp.com",
  databaseURL: "https://egovernance-cf66d-default-rtdb.firebaseio.com",
  projectId: "egovernance-cf66d",
  storageBucket: "egovernance-cf66d.appspot.com",
  messagingSenderId: "22310314453",
  appId: "1:22310314453:web:1cb78be2d297389d0f9d5c",
  measurementId: "G-D7TZ864CW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

function App() {
  return (
    <BrowserRouter>
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

            <Route path="/*" element={<FileNotFound />} />

            <Route path="/place/add" element={<AddPlace />} />
            <Route path="/ps/add" element={<AddPs />} />
            <Route path="/team/add" element={<AddTeam />} />
            <Route path="/contact/add" element={<Contact />} />

            <Route path="/contact/dlno" element={<Dlno />} />
            <Route path="/contact/ps" element={<Pso />} />
            <Route path="/contact/dlno/add" element={<AddDlno />} />
            <Route path="/contact/add/dlno/add" element={<AddDlno />} />
            <Route path="/contact/ps/add" element={<AddPso />} />
            <Route path="/contact/add/ps/add" element={<AddPso />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
