import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonCard>
          <div className="ion-text-center ion-margin-top ion-padding-top">
            <img src="/assets/svg/login.svg" height="200 px" />
          </div>
          <IonCardHeader>
            <div className="ion-text-center">
              <IonCardTitle>Login </IonCardTitle>
              <IonCardSubtitle>Enter your credential:</IonCardSubtitle>
            </div>
          </IonCardHeader>
          <IonCardContent>
            <div className="ion-text-center">
              <IonItem>
                <IonInput type="text" placeholder="Username" />
              </IonItem>
              <IonItem>
                <IonInput type="password" placeholder="********" />
              </IonItem>
            </div>
          </IonCardContent>
        </IonCard>

        <IonButton expand="block">Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
