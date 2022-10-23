import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    const onComplete = () => {
        alert ("La informacion del banco es: " + props.text)
    }
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick = {onComplete}
        >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAOtJREFUaEPtmcERwjAMBDeVQAdAJ5QCFUBJlAIVAJXA5JEHIXgiW7bj4fK25dOtrBlHHY1/XeP6UQK1CYrAkgnsgROwrSzyARyBy5SOUAndgXVl8cPxV2BnTeC1EPGDjEmzQwSUgDNBEXA21BxOBKyWjR1LbQrFCSiBEXIRsN4B7/XFCSiB2negeQJqo7VLSAREILGNqIRUQiqhTwf0oCn9Y6v5LpR4hb626z3g7ag1nghYHfNe/38E+snIytvGyHi3X5Oi0HygHzGdgU3koV7bnsAhZsTkJSBrHI1Zs9o7I7gIzDAp65LmCbwBWhA6MZT97hUAAAAASUVORK5CYII="
        alt='info'/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick = {props.onDelete}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVlJREFUaEPtmdFRw0AMRF8qCCWQDpIKCB1QAnRACekkdEAJkAqgFKiAjBhnJoDNrXS2GRvdT35W8u5Kp9zNLZj4WkycPyngryvYVwVugb1TzB3w4Iz5Ae9DwBp4CRLZAK/B2M+wWgGXDfmLIIk3YAXYb2jVCDDST4BVoGZZBa6jIn4T8FHDaoDYVq4pYACnu1L+vwqMaG78UzVTKP7VHiM9AsaeShI3CdQYlgKcnSOZK4GyAk7rG7hkrgSaewW+m1Da7CpeMlcCFSqgEjo1koqXuEmgFPB1E2cFzv3IFmq5V+cUGvuPTN2UOUbbTiS5iXMTQ9fUkrpDAuVRIo8S3TeibKE5TKHYjbccJXWHBJr7nbjspR/xDkivPp4KPANXfi6hiAOwVSI9Am6ARyVpDxh7cjLDissjwJKZiPvmXWxZzO4HmPM7lbyl9wrwUxo4IgUMbHAx/eQrcASN7FUxoYp3eAAAAABJRU5ErkJggg=="
        alt='basura'/>
      </span>
    </li>
  );
}

export { TodoItem };