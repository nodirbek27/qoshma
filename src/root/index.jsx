import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// User
import UserDashboard from "../pages/UserDashboard";
import HomePage from "../pages/UserDashboard/HomePage";
import NewsPage from "../pages/UserDashboard/NewsPage";
import QabulPage from "../pages/UserDashboard/QabulPage";
import GalleryPage from "../pages/UserDashboard/GalleryPage";

// Superadmin
import SuperadminDashboard from "../pages/SuperadminDashboard";
import Analitika from "../pages/SuperadminDashboard/Analitika";
import Adminlar from "../pages/SuperadminDashboard/Adminlar";
import Arizalar from "../pages/SuperadminDashboard/Arizalar";

// Admin
import AdminDashboard from "../pages/AdminDashboard";
import AdminAnalitika from "../pages/AdminDashboard/Analitika";
import AdminArizalar from "../pages/AdminDashboard/Arizalar";

// Profile
import ProfileDashboard from "../pages/ProfileDashboard";
import ProfileArizaPage from "../pages/ProfileDashboard/ProfileArizaPage";
import ProfileInfoPage from "../pages/ProfileDashboard/ProfileInfoPage";
import ProfileChatPage from "../pages/ProfileDashboard/ProfileChatPage";

// Register and NotFoundPage
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/UserDashboard/RegisterPage";

const Root = () => {
  const isAuthenticated = true;
  // const role = "superadmin";
  // const role = "admin";
  const role = "profile";
  // const role = "";

  return (
    <Router>
      <Routes>
        {/* USER */}
        <Route path="/" element={<UserDashboard />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/qabul" element={<QabulPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route
            path="/home#contact"
            element={<Navigate to="/home#contact" />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Route>

        {/* SUPERADMIN */}
        <Route
          path="/superadmin"
          element={
            isAuthenticated && role === "superadmin" ? (
              <SuperadminDashboard />
            ) : (
              <Navigate to="/register" />
            )
          }
        >
          <Route path="analitika" element={<Analitika />} />
          <Route path="adminlar" element={<Adminlar />} />
          <Route path="arizalar" element={<Arizalar />} />
          <Route path="" element={<Navigate to="/superadmin/analitika" />} />
        </Route>

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            isAuthenticated && role === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/register" />
            )
          }
        >
          <Route path="analitika" element={<AdminAnalitika />} />
          <Route path="arizalar" element={<AdminArizalar />} />
          <Route path="" element={<Navigate to="/admin/analitika" />} />
        </Route>

        {/* PROFILE */}
        <Route
          path="/profile"
          element={
            isAuthenticated && role === "profile" ? (
              <ProfileDashboard />
            ) : (
              <Navigate to="/register" />
            )
          }
        >
          <Route path="info" element={<ProfileInfoPage />} />
          <Route path="arizalar" element={<ProfileArizaPage />} />
          <Route path="chat" element={<ProfileChatPage />} />
        </Route>

        {/* REGISTER and * */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default Root;
