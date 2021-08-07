import "./Projects.css";
import {
  IonLabel,
  IonChip,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

interface ContainerProps {}

const Projects: React.FC<ContainerProps> = () => {
  return (
    <div className="projectsPage" id="projectPage">
      <h1 className="technologyHeader font-effect-3d-float">
        Some of my recent projects!
      </h1>
      <div className="projectContainer">
        <IonCard
          className="projectCard"
          button
          target="_blank"
          href="https://github.com/nickknapton12/Class-Reminder-Bot-2.0"
        >
          <img src={project1} />
          <IonCardHeader>
            <IonCardSubtitle>Python, MongoDB</IonCardSubtitle>
            <IonCardTitle>Class Reminder Bot</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Discord class reminder bot built with Python and MongoDB using
            discords API. Currently in use by over 200 engineering students and
            growing. Serves daily reminders to students on what assignments they
            have due, tests coming up and any other events they may need to be
            reminded of in the form of discord DMs!
          </IonCardContent>
        </IonCard>
        <IonCard
          className="projectCard"
          button
          target="_blank"
          href="https://github.com/nickknapton12/MTB-FantasyLeague-App"
        >
          <img src={project2} />
          <IonCardHeader>
            <IonCardSubtitle>React, MongoDB, Node, ExpressJS</IonCardSubtitle>
            <IonCardTitle>Mountain Bike Fantasy League</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Built a fantasy sports application to serve as a major improvement
            to the current existing mountain bike fantasy leagues. Works just
            like other fantasy sport sites, users can create acounts and build a
            team of riders to compete against others.
          </IonCardContent>
        </IonCard>
        <IonCard
          className="projectCard"
          button
          target="_blank"
          href="https://github.com/relectric-car-team/user-interface"
        >
          <img src={project4} />
          <IonCardHeader>
            <IonCardSubtitle>React, NodeJS, Redux, SASS</IonCardSubtitle>
            <IonCardTitle>Relectric Car Team</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Part of a small team building the UI for the dashboard and
            infotainment system of Relectric's electric car conversion. This
            system is responsible for recieving data from various sensors on the
            car and displaying them in a meaningfull way, along with providing
            access for navigation, climate, etc.
          </IonCardContent>
        </IonCard>
        <IonCard
          className="projectCard"
          button
          target="_blank"
          href="https://github.com/nickknapton12/Sudoku-Solver-Visualizer"
        >
          <img src={project3} />
          <IonCardHeader>
            <IonCardSubtitle>Javascript</IonCardSubtitle>
            <IonCardTitle>Sudoku Solver and Visualizer</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            A VanillaJS application to solve Sudoku puzzles as well as visualize
            the commonly used Backtracking algorithm. Based on a C++ version I
            had built but with a friendly UI and algorithm visualizer. Users can
            enter a Sudoku problem and watch it be solved at a speed of their
            choice, or choose a example puzzle to see it working!
          </IonCardContent>
        </IonCard>
      </div>
    </div>
  );
};

export default Projects;
