import React from 'react'

import CardList from '@/componets/CardList';
import { CardsData } from '@/componets/CardData';

type Props = {}

const personagens = (props: Props) => {
    return (
        <div className="wrapcharacters">
          <div className="wrapcards">
            {CardsData.map((data) => (
              <CardList
                key={data.id}
                imageUrl={data.imageUrl}
                title={data.title}
                text={data.text}
              />
            ))}
          </div>
        </div>
      );
}

export default personagens