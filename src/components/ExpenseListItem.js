import React from "react";
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div >
        <h3>
          <p>
          <NavLink to={`/edit/${id}`} activeClassName="is-active">{description}</NavLink>
          </p>
        </h3>
        <p>{amount}. {createdAt}</p>
    </div>
  );

export default ExpenseListItem;