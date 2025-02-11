import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateMovie = () => {
  const api_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const initialFormData = {
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstract: "",
    image: null,
  };
  const [formData, setFormData] = useState(initialFormData);

  const handlerSetValue = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    for (let key in formData) {
      dataToSend.append(key, formData[key]);
    }

    axios
      .post(api_url, dataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => navigate("/"))
      .catch((err) => console.log("errore"));
  };

  return (
    <div className="home-movies">
      <div className="container">
        <div className="form">
          <h1>Aggiungi un nuovo film:</h1>
          <form onSubmit={handlerSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Inserisci il titolo del film:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Inserisci il titolo..."
                name="title"
                value={formData.title}
                onChange={handlerSetValue}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Inserisci il regista:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Inserisci il regista..."
                name="director"
                value={formData.director}
                onChange={handlerSetValue}
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
                name="genre"
                value={formData.genre}
                onChange={handlerSetValue}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Inserisci l'anno di uscita:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Inserisci l'anno..."
                name="release_year"
                value={formData.release_year}
                onChange={handlerSetValue}
                min={1800}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Inserisci una descrizione del film:
              </label>
              <textarea
                className="form-control"
                placeholder="inserisci descrizione..."
                name="abstract"
                value={formData.abstract}
                onChange={handlerSetValue}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Inserisci l'immagine della locandina:
              </label>
              <input
                type="file"
                className="form-control"
                name="image"
                onChange={handlerSetValue}
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
