import React from 'react'

import {Button, notification ,Card } from 'antd'

export default class Notifications extends React.Component{
    handleNotification=(type)=>{
        notification[type]({
            message:'this is react Notification',
            description:'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick:()=>{
                console.log('唯一的一盏明灯')
            }
        })
    }
    render() {
        return (
            <div className="content-wrap">
                <Card title="Notification" className="card-wrap">
                    <Button onClick={()=>this.handleNotification('open')}>
                        open
                    </Button>
                    <Button onClick={() => this.handleNotification('success')}>Success</Button>
                    <Button onClick={() => this.handleNotification('info')}>Info</Button>
                    <Button onClick={() => this.handleNotification('warning')}>Warning</Button>
                    <Button onClick={() => this.handleNotification('error')}>Error</Button>
                </Card>
            </div>
        )
    }
}