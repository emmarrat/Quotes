import React, {useCallback, useEffect, useState} from 'react';
import {QuotesApi, QuotesType} from "../../types";
import axiosApi from "../../axios-api";
import Spinner from "../../components/Spinner/Spinner";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import {useParams} from "react-router-dom";

const Quotes = () => {
    const {id} = useParams();

    const [quotes, setQuotes] = useState<QuotesType[]>([]);
    const [loading, setLoading] = useState(false);

    const link = id ? `/quotes.json?orderBy="category"&equalTo="${id}"` : '/quotes.json';
    const getQuotes = useCallback(async () => {
          try {
            setLoading(true);
            const quotesResponse = await axiosApi.get<QuotesApi>(link);
            const quotes = Object.keys(quotesResponse.data).map(key => {
              const quote = quotesResponse.data[key];
              quote.id = key;
              return quote;
            })
            setQuotes(quotes);
          } finally {
            setLoading(false)
          }
        }, [link]);

    console.log(quotes);

    useEffect(() => {
      getQuotes().catch(console.error);
    }, [getQuotes]);

    return (
      <div className="d-flex flex-column align-items-center">
        {loading ? <Spinner/> : quotes.map(quote => (
          <QuoteCard quote={quote} key={quote.id}/>
        ))}
      </div>
    );
  }
;

export default Quotes;