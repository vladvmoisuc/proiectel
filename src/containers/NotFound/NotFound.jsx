import React from 'react';
import { useHistory } from 'react-router';
import { PAGE_4O4 } from '../../constants/values';
import './styles.scss';

const { title, cta } = PAGE_4O4;

const NotFound = () => {
  const history = useHistory();

  const onClick = () => {
    history.push('/');
  };

  return (
    <main className="not-found container">
      <h1 className="not-found_title">{title}</h1>
      <button onClick={onClick} className="not-found_button">
        {cta}
      </button>
    </main>
  );
};

export default NotFound;
