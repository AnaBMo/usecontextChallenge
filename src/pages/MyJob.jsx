import { useState } from "react";

function MyJobEvents() {

  // Estado para manejar los eventos
  const [mensaje, setMensaje] = useState("Este mensaje cambiará tras hacer click en el botón.");
  const [texto, setTexto] = useState("");
  const [nombre, setNombre] = useState("");

  // Función para manejar clics
  function manejarClick() {
    setMensaje("¡Has hecho clic!");
  }

  // Función para manejar cambios en el input de texto
  function manejarCambio(evento) {
    setTexto(evento.target.value);
  }

  // Función para manejar el envío del formulario
  function manejarEnvio(evento) {
    evento.preventDefault(); // Evita la recarga de la página
    alert(`Formulario enviado con: ${nombre}`);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>| MyJob | </h1>
      <h2>Practicando eventos:</h2>

      {/* Evento onClick */}
      <button onClick={manejarClick}>Haz clic aquí</button>
      <p>{mensaje}</p>

      <hr />

      {/* Evento onChange */}
      <h2>Campo de texto (onChange)</h2>
      <input
        type="text"
        placeholder="Escribe algo..."
        onChange={manejarCambio}
      />
      <p>Texto ingresado: {texto}</p>

      <hr />

      {/* Evento onSubmit */}
      <h2>Formulario (onSubmit)</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      <hr />

    </div>
  );
}

export default MyJobEvents;