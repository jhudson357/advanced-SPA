import { useLoaderData } from 'react-router-dom'

import EventsList from '../components/EventsList'

function EventsPage() {
  const data = useLoaderData()
  
  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }
  const events = data.events
  
  return (
    <>
      <EventsList events={events} />
    </>
  )
}

export default EventsPage

// code in loader executes in the browser, not in backend server --> so you can use any browser APIs in the loader fxn (localStorage, cookies, etc.
// can't use React hooks -> bc it's not in the react component)
export async function loader() {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    // return {isError: true, message: 'Count not fetch events.'}
    throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500})
  } else {
    return response
  }
}