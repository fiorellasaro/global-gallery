
import './card.css';
import propTypes from 'prop-types';
import {useState} from 'react'

function Card({title, img}) {
    const value = 15;

    const [counter, setstate] = useState(value);
    const moreProducts = () => {
        setstate(counter+1)
    }

    const resetProducts = () => {
        setstate(counter-counter)
    }

    const lessProducts = () => {
        setstate(counter-1)
    }

  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={img}></img>
      <div className="button-group">
          <button onClick={moreProducts}> + </button>
          <button onClick={resetProducts}> borrar </button>
          <button onClick={lessProducts}> - </button>
      </div>
      <p>{counter}</p>
    </div>
  );

  Card.propTypes = {
    title: propTypes.string.isRequired
  }

  Card.defaultProps = {
    img: ""
  }
}

export default Card;