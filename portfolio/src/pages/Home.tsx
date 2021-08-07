import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
} from "@ionic/react";
import Landing from "../components/Landing";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="md" className="header">
            <IonButtons slot="start">
              <IonTitle className="title" onClick={() => document.getElementById('projectPage')?.scrollIntoView({ behavior:"smooth" })}>Projects</IonTitle>
          </IonButtons>
          <IonButtons>
            <IonTitle className="title" onClick={() => document.getElementById('aboutPage')?.scrollIntoView({ behavior:"smooth" })}>About</IonTitle>
          </IonButtons>
          <IonButtons slot="end">
            <IonTitle className="title" onClick={() => document.getElementById('contactPage')?.scrollIntoView({ behavior:"smooth" })}>Contact</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="mainContent" fullscreen scrollEvents={true}>
        <Landing />
        <Technologies />
        <Projects />
        <Contact />
      </IonContent>
    </IonPage>
  );
};

export default Home;
