import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from '../Components/Login'
import Dashboard from '../Components/Dashboard'

export default function AllRoutes() {
    return ( <div>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
                </Routes>
            </div>
    )
}