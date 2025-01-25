import { db } from './config';
import { collection, getDocs } from 'firebase/firestore';
import type { SocialLinks } from '@/types/firebase';

export const welcomeService = {
  getSocialLinks: async () => {
    const socialRef = collection(db, 'welcome');
    const snapshot = await getDocs(socialRef);
    return snapshot.docs[0].data() as SocialLinks;
  }
};