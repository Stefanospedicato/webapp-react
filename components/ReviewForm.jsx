import { useState } from "react";
import axios from "axios";

const ReviewForm = ({ movie_id, fetchMovie }) => {
  const api_url = import.meta.env.VITE_API_URL;

  const initialFormData = {
    name: "",
    text: "",
    vote: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const setFieldValue = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="form" onSubmit={handlerSubmit}>
        <h1>INSERISCI UNA RECENSIONE</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Inserisci il tuo nome
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={setFieldValue}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Inserisci la tua recensione</label>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                name="text"
                type="text"
                value={formData.text}
                onChange={setFieldValue}
              ></textarea>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Inserisci una votazione al film
            </label>
            <input
              name="vote"
              type="number"
              placeholder="Inserisci un voto da 1 a 5..."
              className="form-control"
              min={1}
              max={5}
              value={formData.vote}
              onChange={setFieldValue}
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-warning">
            Invia recensione...
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
