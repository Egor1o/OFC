import React from 'react'
import { CircleUser } from 'lucide-react';

type Props =
 {
  boardMembers: []
}

const BoardTable: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid gird-cols-1 md:grid-cols-2 gap-6 w-3/4">
        {props.boardMembers.map(elem => {
          return <div key={elem.name} className="flex justify-end">
            <div className="flex justify-end">
            <CircleUser size={90} className="w-full mr-8"/>
            </div>
            <div
              className="w-1/2 flex flex-col justify-center">
              <div className="flex w-full text-start">
                <p className="font-bold text-white text-sm md:text-lg">{elem.name}</p>
              </div>
              <p className="text-white text-sm flex justify-start">{elem.role}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default BoardTable