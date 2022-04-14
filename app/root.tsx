import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";
import fullCalendarCss from "@fullcalendar/common/main.css";
import fullCalendarDayGridCss from "@fullcalendar/daygrid/main.css";
import fullCalendarTimeGridCss from "@fullcalendar/timegrid/main.css";
import reactCalendarCss from "react-calendar/dist/Calendar.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: fullCalendarCss },
    { rel: "stylesheet", href: fullCalendarDayGridCss },
    { rel: "stylesheet", href: fullCalendarTimeGridCss },
    { rel: "stylesheet", href: reactCalendarCss },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
