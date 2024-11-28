import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateActivity from "./components/CreateActivity";
import ShowActivity from "./components/ShowActivity";
import EditActivity from "./components/EditActivity";
import DeleteActivity from "./components/DeleteActivity";
import AuthPage from "./pages/AuthPage"; 

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route 
            path="/activity" 
            element={<Home user={user} setUser={setUser} />} 
          />
          <Route path="/activity/create" element={<CreateActivity />} />
          <Route path="/activity/details/:id" element={<ShowActivity />} />
          <Route path="/activity/edit/:id" element={<EditActivity />} />
          <Route path="/activity/delete/:id" element={<DeleteActivity />} />
          <Route path="/" element={<AuthPage setUser={setUser} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
