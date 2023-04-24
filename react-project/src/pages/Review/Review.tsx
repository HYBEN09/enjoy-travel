import { Header } from '@/components/Header/Header';
import { NewMeetupForm } from '@/components/NewMeetupForm/NewMeetupForm';

function Review() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default Review;
