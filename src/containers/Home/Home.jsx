import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.scss';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    const getAllArticles = async () => {
      try {
        const { data } = await axios.get('/api/articles');

        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllArticles();
  }, []);

  return (
    <>
      <main className="articles container">
        {!!articles.length &&
          articles.map(({ title, path }) => (
            <a className="articles_link" href={`/blog/${path}`}>
              {title} ➜
            </a>
          ))}
      </main>
    </>
  );
};

export default Home;
