import { useState } from "react";

function Test() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Here you would make an API call which would take
      // A certain amount of time.
      // Simulate an API call with a timeout (adjust the time as needed).
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Once the API call is complete, update the state to false.
      setIsSubmitting(false);
    } catch (error) {
      // Handle any errors that occur during the API call.
      // You might want to set isSubmitting to false in the error handling logic as well.
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <SpinnerButton name="Submit" state={isSubmitting} type="submit" />
    </form>
  )
}

export default Test;
