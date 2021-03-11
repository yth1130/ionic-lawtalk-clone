import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet, IonMenuButton, IonBackButton, IonIcon, IonFooter, IonText, IonButton } from '@ionic/react';
export const Menu: React.FC = () => {
    return (
        <>
        <IonMenu side="start" contentId="menu">
            <IonHeader>
                <IonToolbar>
                    <IonItem slot='start'/>
                    <IonTitle class='ion-text-center' style={{color:'#ff8800'}}>LAWTALK</IonTitle>
                    <IonMenuButton slot='end'><IonIcon color='white' name='close'></IonIcon></IonMenuButton>
                    {/* <IonBackButton></IonBackButton> */}
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList style={{WebkitScrollbar:{display:'none'}}}>
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
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                </IonList>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonButton color='black' onClick={()=>{console.log('회원가입')}}>회원가입</IonButton>
                    <IonButton color='black'>로그인</IonButton>
                    <IonButton color='black' style={{color:'#ff8800'}}>쿠폰함</IonButton>
                </IonToolbar>
            </IonFooter>
        </IonMenu>
        <IonRouterOutlet id="menu"></IonRouterOutlet>
        </>
    )
}