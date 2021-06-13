import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Parser } from 'html-to-react';
import axios from 'axios';
import './styles.scss';

const ReactParser = new Parser();

const Article = () => {
  const params = useParams();
  const history = useHistory();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const getArticle = async (article) => {
      try {
        const {
          data: { html },
        } = await axios.get(`/api/articles/${article}`);

        // To do: Revise this in the future, as it may not
        //  apply to all articles
        const titleBeginning = 18; // length of <hr /><p>title: "
        const endOfTitle = html.indexOf('</p>');
        const title = html.slice(titleBeginning, endOfTitle - 1);

        setTitle(title);
        setContent(html.slice(endOfTitle + 5)); // // Add 5 to remove the last </p> part
      } catch (error) {
        history.push('/not-found');
      }
    };

    getArticle(params.article);
  }, []);

  return (
    !!content && (
      <main className="article container">
        <h1 className="article_title">{title}</h1>
        {ReactParser.parse(content)}
      </main>
    )
  );
};

export default Article;
