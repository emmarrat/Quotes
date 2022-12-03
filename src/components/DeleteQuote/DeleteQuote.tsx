import React, {useCallback} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axios-api";

const DeleteQuote = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const deleteQuote = useCallback(async () => {
    try {
      await axiosApi.delete('/quotes/' + id + '.json');
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  }, [id, navigate]);
  return (
    <div className="d-flex justify-content-center">
      <div className="card w-50">
        <h3 className="card-header text-center">Are you sure that you want to delete quote?</h3>
        <div className="d-flex justify-content-center py-3">
          <div>
            <button className="btn btn-danger me-3" onClick={deleteQuote}>Delete</button>
          </div>
          <div>
            <button className="btn btn-success" onClick={() => navigate("/")}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteQuote;