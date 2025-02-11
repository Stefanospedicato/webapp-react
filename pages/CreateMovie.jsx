import { useState } from "react";

const CreateMovie = () => {
  const initialFormData = {
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstract: "",
    image: null,
  };
  const [formData, setFormData] = useState(initialFormData);

  return (
    <div className="home-movies">
      <div className="container">
        <div className="form">
          <h1>Aggiungi un nuovo film:</h1>
          <form onSubmit="">
            <div className="mb-3">
              <label className="form-label">
                Inserisci il titolo del film:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Inserisci il titolo..."
                name="name"
                value=""
                onChange=""
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Inserisci il regista:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Inserisci il regista..."
                name="name"
                value=""
                onChange=""
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Inserisci il genere (se più di uno separati da virgola):
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Inserisci il genere..."
                name="name"
                value=""
                onChange=""
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Inserisci l'anno di uscita:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Inserisci l'anno..."
                name="name"
                value=""
                onChange=""
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Inserisci una descrizione del film:
              </label>
              <textarea
                className="form-control"
                placeholder="inserisci descrizione..."
                name="text"
                value=""
                onChange=""
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Inserisci l'immagine della locandina:
              </label>
              <input
                type="file"
                className="form-control"
                name="name"
                onChange=""
              />
            </div>
            <div className="mb-3 form-check"></div>
            <button type="submit" className="btn btn-warning">
              Aggiungi film...
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
