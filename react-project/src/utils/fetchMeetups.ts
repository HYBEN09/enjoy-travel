import { collection, getDocs } from '@firebase/firestore';
import { db } from '@/firebase/firestore';

export async function fetchMeetups() {
  try {
    const meetupsSnapshot = await getDocs(collection(db, 'meetups'));
    const meetupsData = meetupsSnapshot.docs.map((doc) => doc.data()).reverse();
    return meetupsData;
  } catch (error) {
    console.error('Error fetching meetups: ', error);
  }
}
