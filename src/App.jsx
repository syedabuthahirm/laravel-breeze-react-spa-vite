import React, { useContext } from 'react'
import { Routes, Route } from "react-router-dom";
import { AuthContext } from '@/contexts/auth';
import Login from '@/pages/login';
import Register from '@/pages/register';
import Home from '@/pages/home'
import Dashboard from '@/pages/dashboard';
import Error404 from '@/pages/404';
import VerifyEmail from '@/pages/verify-email';
import ForgotPassword from '@/pages/forgot-password';
import GuestLayout from './components/Layouts/GuestLayout';
import AppLayout from './components/Layouts/AppLayout';

export default function App() {
  const { user, fetching } = useContext(AuthContext);
  if (fetching) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <Routes>
        {user ?
          <Route path='/' element={<AppLayout user={user} />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          :
          <Route path="/" element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Route>
        }
      </Routes>
    </>
  )
}
