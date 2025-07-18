import { useEffect } from "react";

export default function Root(props) {
  useEffect(() => {
    window.addEventListener("menu-event", (event) => {
      console.log("Received event from Menu:", event);
    });
  }, []);
  return (
    <section>
      <p> Transactions Microfrontend - </p>
      {props.name} is mounted!
    </section>
  );
}
