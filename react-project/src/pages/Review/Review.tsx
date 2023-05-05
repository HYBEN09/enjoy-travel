import { NewMeetupForm } from '@/components/NewMeetupForm/NewMeetupForm';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

function Review() {
  useDocumentTitle('여행 리뷰 작성');

  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default Review;
