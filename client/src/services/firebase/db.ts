import { db } from './config';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import type { AboutUsContent, SocialLinks, TeamMember } from '@/types/firebase';

export const welcomeService = {
  getSocialLinks: async (): Promise<SocialLinks | null> => {
    const docRef = doc(db, "content", "social-links");
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() as SocialLinks : null;
  }
};

export const aboutService = {
  getContent: async (): Promise<AboutUsContent | null> => {
    const docRef = doc(db, "content", "about-us");
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() as AboutUsContent : null;
  }
};

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  const snapshot = await getDocs(collection(db, 'content', 'our-team', 'members'));
  return snapshot.docs.map(doc => ({ 
    id: doc.id,
    ...doc.data()
  } as TeamMember));
};