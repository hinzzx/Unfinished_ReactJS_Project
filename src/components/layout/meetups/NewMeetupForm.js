import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {

  // creating referent object, which we can store in variable ;
  const titleInput = useRef();
  const ImageInput = useRef();
  const AddressInput = useRef();
  const DescriptionInput = useRef();


  function submitHandler(event) {

    /* vanilla js function from preventing default browser 
         allowing us to fully handle the submission in react */

    event.preventDefault();
    const enteredTitle = titleInput.current.value;
    const enteredImage = ImageInput.current.value;
    const enteredAddress = AddressInput.current.value;
    const enteredDescription = DescriptionInput.current.value;

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription,
    };
    console.log(meetupData);
}
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={ImageInput}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={AddressInput}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={DescriptionInput}></textarea>
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
