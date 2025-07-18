export default function Root(props) {
  function handleClick() {
    window.dispatchEvent(
      new CustomEvent("menu-event", { detail: "Hello from Menu!" })
    );
  }
  return (
    <section>
      {props.name} is mounted!
      <button onClick={handleClick}>
        Clique aqui para desparar o evento no outro MF
      </button>
    </section>
  );
}
