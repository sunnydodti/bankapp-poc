import { useAuth } from '../AuthProvider'

import React from 'react'

export default function Dashboard() {
    const authUser = useAuth()
    var welcomeMessage = ''
    authUser.user === null ?
        welcomeMessage = '' : welcomeMessage = 'Welcome, ' + authUser.user.firstName

    return (
        <div>
            <p>Dashboard</p>
            {welcomeMessage}
        </div>
    )
}
