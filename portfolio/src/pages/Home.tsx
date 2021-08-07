import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import Landing from '../components/Landing';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="header">
          <IonButtons slot="start">    
             <IonTitle className="title" onClick={() => document.getElementById("projectsPage")?.scrollIntoView({ behavior: "smooth" })}>Projects</IonTitle> 
          </IonButtons>
          <IonButtons>
            <IonTitle className="title">About</IonTitle>
          </IonButtons>
          <IonButtons slot="end">
            <IonTitle className="title">Contact</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="mainContent" fullscreen>
        <Landing />
        <Technologies />
        <Projects />
        <Contact />
      </IonContent>
    </IonPage>
  );
};

export default Home;
