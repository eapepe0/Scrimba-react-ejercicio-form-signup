import React from "react";

export default function App() {
  /**
   * Challenge: Connect the form to local state
   *
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */

  const [formData, setFormData] = React.useState({
    email: "", //mail vacio
    password: "", // pass vacio
    repassword: "", // pass vacio
    newsletter: false // newsletter vacio
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target; // destructuramos sacando name , value , type , checked de event.target

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value // si el type es check devolvemos verdadero o falso de lo contrario el valor
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.repassword) {
      // si el pass es igual al otro
      console.log("Password ingresado Correcto!"); // mostramos correcto
    } else {
      // de lo contrario
      console.log("Los password no son iguales"); // mostramos no son iguales
      return; // volvemos directamente asi no se ejecuta el if de abajo
    }
    if (formData.newsletter) {
      // si newsletter es verdadero
      console.log("Gracias por la subscripcion"); // mostramos agradecimiento
    }
    console.log(formData);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="repassword"
          onChange={handleChange}
          value={formData.repassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">
            Queres unirte a nuestro newsletter
          </label>
        </div>
        <button className="form--submit">Enviar</button>
      </form>
    </div>
  );
}
