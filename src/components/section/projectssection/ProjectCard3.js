export default function ProjectCard3() {
  const cardData = {
    project: 'Namas 3',
    img: '/img/newyork.jpg',
  };
  return (
    <li className='project-card'>
      <h3 className='project__title'>{cardData.project}</h3>
      <img className='project__img' src={cardData.img} alt={cardData.town} />
    </li>
  );
}
