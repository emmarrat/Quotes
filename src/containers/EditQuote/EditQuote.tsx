import React, {useCallback, useEffect, useState} from 'react';
import {Categories, SingleQuote} from "../../types";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axios-api";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

interface Props {
  categories: Categories[];
}

const EditQuote: React.FC<Props> = ({categories}) => {
  const {id} = useParams(), navigate = useNavigate();

  const [quote, setQuote] = useState<SingleQuote | null>(null);
  const [loading, setLoading] = useState(false);

  const getQuote = useCallback(async () => {
    try {
      setLoading(true);
      const quoteResponse = await axiosApi.get<SingleQuote>('/quotes/' + id + '.json');
      setQuote(quoteResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect( () => {
    getQuote().catch(console.error)
  }, [getQuote]);

  const editQuote = async (quote: SingleQuote) => {
    try {
      setLoading(true);
      await axiosApi.put('/quotes/' + id + '.json', quote);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      {quote && (
        <QuoteForm onSubmit={editQuote} editingQuote={quote} loading={loading} categories={categories}/>
      )}
    </div>
  );
};

export default EditQuote;