/* eslint-disable no-undef */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

