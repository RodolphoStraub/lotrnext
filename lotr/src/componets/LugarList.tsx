import React from 'react'

type Props = {}

const LugarList = (props) => {
    return (
        <div className="cards">
          <div className="cardinterior">
            <img className="foto" src={props.imageUrl} />
            <h1>{props.title}</h1>
          </div>
        </div>
      );
}

export default LugarList