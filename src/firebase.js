
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCXqfQ1_-qCcjt79zXysGT4AfcIYgFa778",
  projectId: "learnlingo-df2cc",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

