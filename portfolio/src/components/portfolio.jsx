import ProjectOne from '../assets/projects/pass.png';
import ProjectTwo from '../assets/projects/work.png';
import ProjectThree from '../assets/projects/note.png';
import ProjectFour from '../assets/projects/reci.png';
import ProjectFive from '../assets/projects/read.png';
import ProjectSix from '../assets/projects/svg.png';

function Portfolio() {
    return (
      <section className="projectimg">
        <div className="my-2">
          <a href="https://github.com/pommerpie/PasswordGenerator"><img src={ProjectOne} alt="Password Generator" height="250px"></img></a>
          <a href="https://github.com/pommerpie/work-day-scheduler"><img src={ProjectTwo} alt="Work Day Scheduler" height="250px"></img></a>
          <a href="https://github.com/pommerpie/note-taker"><img src={ProjectThree} alt="Note Taker" height="250px"></img></a>
          <a href="https://github.com/pommerpie/Recipeasy"><img src={ProjectFour} alt="Recipeasy" height="250px"></img></a>
          <a href="https://github.com/pommerpie/README-Generator"><img src={ProjectFive} alt="README Generator" height="250px"></img></a>
          <a href="https://github.com/pommerpie/SVG-Generator"><img src={ProjectSix} alt="SVG Generator" height="250px"></img></a>

          </div>

      </section>
    );
  }
  
  export default Portfolio;
