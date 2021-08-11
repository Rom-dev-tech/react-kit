import PropTypes from 'prop-types';
import '../Painting/Painting.css';
import defaultImg from '../Painting/default.jpg';

const Painting = props => {
  const { imageUrl = defaultImg, title, author, profileUrl, price, quantity } = props;
  return (
    <div className="card">
      <img className="card__img" src={imageUrl ?? defaultImg} alt={title} width="480" />
      <h2 className="card__title">{title}</h2>
      <p className="description__author">
        Автор: <a href={author}>{profileUrl}</a>
      </p>
      <p className="description__price">Цена: {price} кредитов</p>
      <p className="decription__quantity">
        Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}
      </p>
      <button className="basket__button" type="button">
        Добавить в корзину
      </button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
