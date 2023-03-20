import {RouterProvider, createBrowserRouter} from "react-router-dom";

import EditEventPage from "./Page/EditEvent";
import ErrorPage from "./Page/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./Page/EventDetails";
import EventsPage, {loader as eventsLoader} from "./Page/Events";
import EventsRootLayout from "./Page/EventsRoot";
import HomePage from "./Page/Home";
import NewEventPage from "./Page/NewEvent";
import RootLayout from "./Page/Root";
import {action as manipulateEventAction} from "./components/EventForm";
import NewsletterPage, {action as newsletterAction} from "./Page/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
