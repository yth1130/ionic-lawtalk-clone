import { IonBackButton, IonButton, IonContent, IonIcon, IonItem, IonList, IonMenuButton, IonSearchbar, IonText, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './ExploreContainer.css';
//https://github.com/ionic-team/ionic-framework/issues/18847
import { chevronDown, chevronUp } from 'ionicons/icons';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [showFooterEtc, setShowFooterEtc] = useState(false);
  return (
    // <div className="container">
    // <strong>Ready to create an app?</strong>
    // <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    // </div>
    <IonContent>
      <IonSearchbar></IonSearchbar>
      <IonList>
        <IonItem>Ready to create an app?</IonItem>
        <IonItem>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem><IonIcon name='add'></IonIcon></IonItem>
      </IonList>
      {showFooterEtc === false &&
        <IonToolbar>
          <IonText style={{marginLeft:10, fontSize:12}}>(C) Law&Company Co., Ltd. ALL RIGHTS RESERVED</IonText>
          <IonButton fill='clear' onClick={()=>setShowFooterEtc(!showFooterEtc)} slot='end'><IonIcon icon={chevronDown}></IonIcon></IonButton>
        </IonToolbar>
      }
      {showFooterEtc === true &&
        <IonToolbar>
          <IonToolbar>
            <IonText style={{marginLeft:10, fontSize:12}}>(C) Law&Company Co., Ltd. ALL RIGHTS RESERVED</IonText>
            <IonButton fill='clear' onClick={()=>setShowFooterEtc(!showFooterEtc)} slot='end'><IonIcon icon={chevronUp}></IonIcon></IonButton>
          </IonToolbar>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonToolbar>
      }
    </IonContent>
  );
};

export default ExploreContainer;
