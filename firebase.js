import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// COLOQUE SUA CONFIGURAÇÃO FIREBASE AQUI
const firebaseConfig = {
apiKey: "SUA_API_KEY",
authDomain: "SEU_PROJETO.firebaseapp.com",
projectId: "SEU_PROJECT_ID",
storageBucket: "SEU_PROJETO.appspot.com",
messagingSenderId: "SEU_ID",
appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
