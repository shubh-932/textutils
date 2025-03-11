import React from 'react'

export default function Notification({ notifmsg }) {
    return (
        <div style={{height: '50px'}}>
            {
                notifmsg && <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{notifmsg}</strong>
                </div>
            }
        </div>
    )
}
