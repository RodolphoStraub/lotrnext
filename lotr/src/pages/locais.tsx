import React from 'react'

import LugarList from '@/componets/LugarList'
import { LugarData } from '@/componets/LugarData'

type Props = {}

const locais = (props: Props) => {
    return (
        <div className="wrapplaces">
          <div className="wrapcards">
            {LugarData.map((data) => (
              <LugarList
                key={data.id}
                imageUrl={data.imageUrl}
                title={data.title}
              />
            ))}
          </div>
        </div>
      );
}

export default locais