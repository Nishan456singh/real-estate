import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const particularUserId = 'sjhomes1359@gmail.com'; // Replace with the actual user ID

  if (userId !== particularUserId) {
    return null; // Or return a message saying the user is not authorized
  }

  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center
    py-5 md:py-10 ">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
    </section>

    <div className="wrapper my-8">
        <EventForm  userId={userId} type="Create"/>
    </div>
    </>
  )
}

export default CreateEvent