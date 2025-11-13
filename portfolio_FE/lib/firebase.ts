import { initializeApp, getApp, getApps, type FirebaseApp } from "firebase/app"
import { getAuth, type Auth } from "firebase/auth"
import type { Analytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyBa5kbhZoMZcyIqCCxDrpSbORxmSkRH3Ao",
  authDomain: "cicd-48b0d.firebaseapp.com",
  projectId: "cicd-48b0d",
  storageBucket: "cicd-48b0d.firebasestorage.app",
  messagingSenderId: "36043118091",
  appId: "1:36043118091:web:a93ce2de1a57403ad3990e",
  measurementId: "G-YJELWWBQN4",
}

const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth: Auth = getAuth(app)

let analytics: Analytics | null = null

if (typeof window !== "undefined") {
  import("firebase/analytics")
    .then(async ({ getAnalytics, isSupported }) => {
      try {
        if (await isSupported()) {
          analytics = getAnalytics(app)
        }
      } catch (error) {
        console.error("Failed to initialize Firebase analytics:", error)
      }
    })
    .catch((error) => {
      console.error("Error loading Firebase analytics:", error)
    })
}

export { app, auth, analytics }
