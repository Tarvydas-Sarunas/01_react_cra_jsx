import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import SectionTitles from './SectionTitles';

export default function TourSection() {
  return (
    <section className='bands-section'>
      <div className='container'>
        <SectionTitles />
        <ul className='unlisted grid'>
          <Card1 />
          <Card2 />
          <Card3 />
        </ul>
      </div>
    </section>
  );
}
