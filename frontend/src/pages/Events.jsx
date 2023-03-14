import { Suspense } from 'react'
import { useLoaderData, json, defer, Await } from 'react-router-dom'

import EventsList from '../components/EventsList'

function EventsPage() {
  const {events} = useLoaderData()
  
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  )
}

export default EventsPage


async function loadEvents() {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    // return {isError: true, message: 'Count not fetch events.'}
    // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500})
    throw json(
      { message: 'Could not fetch events.' },
      { status: 500 },
    )
  } else {
    const responseData = await response.json()
    return responseData.events
  }
}

// code in loader executes in the browser, not in backend server --> so you can use any browser APIs in the loader fxn (localStorage, cookies, etc.
// can't use React hooks -> bc it's not in the react component)
export function loader() {
  return defer({
    events: loadEvents()
  })
}