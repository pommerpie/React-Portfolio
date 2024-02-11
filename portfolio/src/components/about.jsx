import profImage from '../assets/mascot.png';
function About() {
    return (
      <section className="my-5">
        <div className="my-2">
          <div className="profile-img my-5">
          <img src={profImage} height="250px"></img>
          </div>
          <p>
          I'm Mollie, and I'm a coding student currently attending UCF. I'm a freelance
          artist and have a passion to create and design. Through the coding bootcamp program
          at UCF, I've learned how to use HTML, CSS, JavaScript, React, Node, Express, and
          MongoDB. I'm excited to continue learning and growing as a developer.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;
  