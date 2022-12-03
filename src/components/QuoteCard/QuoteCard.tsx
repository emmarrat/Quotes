import React from 'react';
import {QuotesType} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  quote: QuotesType;
  deleteQuote: (id: string) => Promise<void>;
}

const QuoteCard: React.FC<Props> = ({quote, deleteQuote}) => {
  return (
    <div className="card w-75 mb-3 d-flex">
      <div className="card-body">
        <p className="card-text">
          "{quote.text}"
        </p>
        <p className="text-muted mb-0">
          - {quote.author}
        </p>
      </div>
      <div className="card-footer">
        <Link to={"/quotes/edit/" + quote.id} className="btn btn-success me-3">
          Edit
        </Link>
        <button onClick={() => deleteQuote(quote.id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default QuoteCard;