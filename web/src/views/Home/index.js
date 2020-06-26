import React from 'react'
import {Container} from "./styled"
const Home = () => {
  return (
    <div className="pageHtml">
    {/* START CONTAINER */}
     <Container>
       {/* START FORM CONTROL */}
        <form className="form-control">

          {/* START FORM GROUP */}
          <fieldset className="form-group">
            {/* START FORM ITEM TITLE */}
            <article className="form-item">
              <h1 className="form-title">Fale Conosco</h1>
            </article>
          </fieldset>
          {/* END FORM GROUP */}

          {/* START FORM GROUP */}
          <fieldset className="form-group">
            {/* START FORM ITEM LABEL */}
            <label className="form-item">
              <h2 className="form-label">Nome Completo:</h2>
            </label>

            {/* START FORM ITEM INPUT */}
            <article className="form-item">
              <input type="text" className="form-input" />
            </article>
          </fieldset>
          {/* END FORM GROUP */}

          {/* START FORM GROUP HALF*/}
          <fieldset className="form-group-half">
            {/* START FORM ITEM LABEL */}
            <label className="form-item">
              <h2 className="form-label">E-mail:</h2>
            </label>

            {/* START FORM ITEM INPUT */}
            <article className="form-item">
              <input type="email" className="form-input" />
            </article>
          </fieldset>
          {/* END FORM GROUP */}

          {/* START FORM GROUP HALF */}
          <fieldset className="form-group-half">
            {/* START FORM ITEM LABEL */}
            <label className="form-item">
              <h2 className="form-label">Whatsapp/Telefone:</h2>
            </label>

            {/* START FORM ITEM INPUT */}
            <article className="form-item">
              <input type="text" className="form-input" />
            </article>
          </fieldset>
          {/* END FORM GROUP */}

          {/* START FORM GROUP */}
          <fieldset className="form-group">
            {/* START FORM ITEM LABEL */}
            <label className="form-item">
              <h2 className="form-label">Assunto:</h2>
            </label>

            {/* START FORM ITEM INPUT */}
            <article className="form-item">
              <input type="text" className="form-input" />
            </article>
          </fieldset>
          {/* END FORM GROUP */}

          {/* START FORM GROUP */}
          <fieldset className="form-group">
            {/* START FORM ITEM INPUT */}
            <article className="form-item">
              <textarea className="form-textarea"></textarea>
            </article>
          </fieldset>
          {/* END FORM GROUP */}


          {/* START FORM GROUP */}
          <fieldset className="form-group">
            {/* START FORM ITEM TITLE */}
            <article className="form-item">
              <button className="form-button">Enviar</button>
            </article>
          </fieldset>
          {/* END FORM GROUP */}

        </form>
       {/* END FORM CONTROL */}
     </Container>
    {/* END CONTAINER */}
   </div>
  )
}

export default Home

