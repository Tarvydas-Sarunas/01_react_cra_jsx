export default function ProjectCard5() {
  const cardData = {
    project: 'Namas 5',
    img: '/img/newyork.jpg',
  };
  return (
    <li className='project-card'>
      <h3 className='project__title'>{cardData.project}</h3>
      <img className='project__img' src={cardData.img} alt={cardData.town} />
    </li>
  );
}