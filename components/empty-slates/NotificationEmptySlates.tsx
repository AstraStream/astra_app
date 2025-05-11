import React from 'react'
import Icons from '../Icons'

const NotificationEmptySlates = () => {
  return (
    <div className="h-80 flex flex-col items-center justify-center space-y-4 font-medium">
      <Icons.notificationSlash className="w-16 text-grey-300" />
      <h1 className="text-lg text-white">No Notifications</h1>
    </div>
  )
}

export default NotificationEmptySlates