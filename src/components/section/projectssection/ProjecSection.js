import ProjectCard1 from './ProjectCard1';
import ProjectCard2 from './ProjectCard2';
import ProjectCard3 from './ProjectCard3';
import ProjectCard4 from './ProjectCard4';
import ProjectCard5 from './ProjectCard5';
import ProjectCard6 from './ProjectCard6';
import ProjectSectionTitles from './ProjectTitle';

export default function ProjectSection() {
  return (
    <section className='bands-section'>
      <div className='container'>
        <ProjectSectionTitles />
        <ul className='unlisted grid'>
          <ProjectCard1 />
          <ProjectCard2 />
          <ProjectCard3 />
          <ProjectCard4 />
          <ProjectCard5 />
          <ProjectCard6 />
        </ul>
      </div>
    </section>
  );
}
