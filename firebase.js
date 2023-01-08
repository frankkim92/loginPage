import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyC2bzfl2rAVTYwNoz6co8muuzH1am9lbDY",
  authDomain: "hyunmo-c4055.firebaseapp.com",
  projectId: "hyunmo-c4055",
  storageBucket: "hyunmo-c4055.appspot.com",
  messagingSenderId: "1089308853962",
  appId: "1:1089308853962:web:df32e71ac65079d993d633",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const auth = getAuth(app);
