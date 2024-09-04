import React from 'react'

import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

type Props = {}

const CardList = (props) => {
    return (
<Popover 
placement="left-start">
      <PopoverTrigger>
        <Button>
        <div className="cards">
          <div className="cardinterior">
            <img className="foto" src={props.imageUrl} />
            <h1>{props.title}</h1>
          </div>
        </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="allbg">
        <div className="px-1 py-2">
        <img className="foto" src={props.imageUrl} />
        <p>{props.text}</p>
        </div>
        </div>
      </PopoverContent>
    </Popover>

      );
}

export default CardList