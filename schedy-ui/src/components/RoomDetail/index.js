import React, { useEffect } from 'react'

import SchedulerBar from '../Cards/SchedulerBar'
import RemoveRoomModal from '../Modals/RemoveRoomModal'
import { getSchedulersByDay } from '../../helpers/helpers';

// export default class RoomDetail extends React.Component {

const RoomDetail = ({ room }) => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  return (
      <div className="p-3">
          <div className="text-center mb-3">
              <h3>{room.name}</h3>
              <span><i>{room.actors.toString()}</i></span>
          </div>
          {days.map((v, i) => (
            <div key={`${room.name}-${days[i]}`} className="container pt-1">
              <span>{days[i]}</span>
              <SchedulerBar schedulers={getSchedulersByDay(room.schedule, (i+1))} />
            </div>
          ))}
          <div className="text-center mt-5">
              <a href="#" className="link-danger" data-bs-toggle="modal" data-bs-target="#removeRoomModal">Delete room</a>
          </div>
          <RemoveRoomModal key={room.name} name={room.name} />
      </div>
  )
}

export default RoomDetail
