import React from 'react'

import ItensList from '@/componets/ItensList';
import { ItensData } from '@/componets/ItensData';

type Props = {}

const itens = (props: Props) => {
    return (
        <div className="wrapitens">
          <div className="wrapcards">
            {ItensData.map((data) => (
              <ItensList
                key={data.id}
                imageUrl={data.imageUrl}
                title={data.title}
              />
            ))}
          </div>
        </div>
      );
}

export default itens