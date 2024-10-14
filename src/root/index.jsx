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
import ArizaPage from "../pages/ProfileDashboard/ArizaPage";

// Login and NotFoundPage
import LoginPage from "../pages/UserDashboard/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

const Root = () => {
  const isAuthenticated = true;
  // const role = "superadmin";
  // const role = "admin";
  const role = "student";
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
          <Route path="/" element={<Navigate to="/home" />} />
        </Route>

        {/* SUPERADMIN */}
        <Route
          path="/superadmin"
          element={
            isAuthenticated && role === "superadmin" ? (
              <SuperadminDashboard />
            ) : (
              <Navigate to="/login" />
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
              <Navigate to="/login" />
            )
          }
        >
          <Route path="analitika" element={<AdminAnalitika />} />
          <Route path="arizalar" element={<AdminArizalar />} />
          <Route path="" element={<Navigate to="/admin/analitika" />} />
        </Route>

        {/* PROFILE */}
        <Route
          path="/student"
          element={
            isAuthenticated && role === "student" ? (
              <ProfileDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route path="profile" element={<ArizaPage />} />
        </Route>

        {/* LOGIN and * */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default Root;
