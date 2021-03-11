import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButton slot='start' color='0x000000'>
            <IonIcon name='menu-outline' onClick={()=>console.log('asd')}/>
          </IonButton> */}
          <IonMenuButton slot='start' />
          <IonTitle class='ion-text-center' style={{color:'#ff8800'}}>LAWTALK</IonTitle>
          <IonButton slot='end' color='black'>
            <IonText>로그인</IonText>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
