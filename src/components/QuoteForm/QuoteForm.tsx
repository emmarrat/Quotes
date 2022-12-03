import React, {useState} from 'react';
import {Categories, SingleQuote} from "../../types";
import {useNavigate} from "react-router-dom";
import Spinner from "../Spinner/Spinner";

interface Props {
  editingQuote?: SingleQuote;
  categories: Categories[];
  onSubmit: (quote: SingleQuote) => void;
  loading: boolean
}

const QuoteForm: React.FC<Props> = ({categories, editingQuote, onSubmit, loading}) => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState<SingleQuote>(editingQuote ? editingQuote : {
    author: '',
    text: '',
    category: '',
  });

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setQuote(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const postQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(quote);
  };

  let quoteForm = (
    <>
      <h2 className="text-center">{editingQuote ? 'Edit quote' : 'Post new quote'}</h2>
      <form className="mt-3" onSubmit={postQuote}>
        <div className="d-flex flex-row-reverse">
          <button onClick={() => navigate('/')} className="btn btn-sm btn-secondary">Cancel</button>
        </div>
        <div className="form-group">
          <label className="form-label">
            <select
              className="form-select"
              required
              name="category"
              value={quote.category}
              onChange={onChangeForm}

            >
              <option disabled value="">Select the category!</option>
              {categories.map(category => (
                <option key={category.id}>{category.id}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">Author</label>
          <input
            onChange={onChangeForm}
            name="author"
            type="text"
            className="form-control"
            value={quote.author}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Quote text</label>
          <textarea
            onChange={onChangeForm}
            name="text"
            className="form-control"
            value={quote.text}
            required
          />
        </div>
        <div className="form-group mt-3">
          <button className="btn btn-success">{editingQuote ? 'Save edits' : 'Post'}</button>
        </div>
      </form>
    </>
  );

  if (loading) {
    quoteForm = (
      <Spinner/>
    );
  }

  return (
    <>
      {quoteForm}
    </>
  );
};

export default QuoteForm;