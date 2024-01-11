import Btn from '../../ui/Btn';

export default function Card3() {
  const cardData = {
    town: 'Brooklin',
    date: 'Fri 30 Nov 2016',
    img: '/img/newyork.jpg',
  };
  return (
    <li className='band-card'>
      <img className='card__img' src={cardData.img} alt={cardData.town} />
      <div className='card__info'>
        <h3 className='card__title'>{cardData.town}</h3>
        <p className='card__date'>{cardData.date}</p>
        <p className='card__text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        <Btn />
      </div>
    </li>
  );
}
