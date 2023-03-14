import { Link } from "react-router-dom"

const EVENTS = [
  {id: 'e1', title: 'Soccer Game'},
  {id: 'e2', title: 'Basketball Game'},
  {id: 'e3', title: 'Football Game'},
  {id: 'e4', title: 'Baseball Game'},
  {id: 'e5', title: 'Hockey Game'},
]

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map(event => (
          <li key={event.id}>
            <Link to={event.id}>
              {event.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EventsPage