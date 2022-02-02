import './Landing.css';

interface ContainerProps { }

const Landing: React.FC<ContainerProps> = () => {
  return (
      <div className="container" id="aboutPage">
        <div className="window">
          <div className="windowHeader">
            <div className="dotContainer">
              <div className="dot" style={{backgroundColor:`red`}}></div>
              <div className="dot" style={{backgroundColor:`yellow`}}></div>
              <div className="dot" style={{backgroundColor:`green`}}></div>
            </div>
            <div className="searchbar">
              <p className="searchbarText">www.nicholasknapton.ca</p>
            </div>
            <div className="barContainer">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="windowContent">
              <h1 className="windowTitle">Nicholas Knapton</h1>
              <h2 className="windowSubtitle">A <br /><span className="font-effect-3d-float" style={{color:`rgb(1,15,70)`, fontWeight:`bold`}}>&lt;Software Engineering /&gt;</span><br /> Student with a minor in<br /><span className="font-effect-3d-float" style={{color:`rgb(1,15,70)`, fontWeight:`bold`}}>&lt;BioMedical /&gt;</span><br />Engineering</h2>
              <div className="windowDescriptionContainer">
                <i className="material-icons" id="atIcon">place</i>
                <h2 className="windowDescription">University of Calgary</h2>
              </div>
          </div>
        </div>
      </div>
  );
};

export default Landing;
