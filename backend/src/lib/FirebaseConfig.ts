import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'
import { getStorage} from 'firebase/storage'

export const firebaseConfig = {
	apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
}



export const firebaseApp = initializeApp(firebaseConfig)
export const storage = getStorage(firebaseApp);