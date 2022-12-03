import React from 'react';
import {QuotesType} from "../../types";
import {Link} from "react-router-dom";

interface Props{
  quote: QuotesType;
}

const QuoteCard:React.FC<Props> = ({quote}) => {
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
          <Link to={"/quotes/" + quote.id} className="btn btn-danger">Delete</Link>
        </div>
      </div>
  );
};

export default QuoteCard;