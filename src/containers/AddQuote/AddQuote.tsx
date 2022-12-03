import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Categories, SingleQuote} from "../../types";
import axiosApi from "../../axios-api";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

interface Props {
  categories: Categories[];
}

const AddQuote: React.FC<Props> = ({categories}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const sendQuote = async (quote: SingleQuote) => {
    try {
      setLoading(true);
      await axiosApi.post('quotes.json', quote);
      navigate('/')
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
     <QuoteForm categories={categories} onSubmit={sendQuote} loading={loading}/>
    </div>
  );
};

export default AddQuote;