import React from 'react';
import { useParams } from 'react-router-dom';
import { authors } from '../author-list';
import './style.css';

export const AuthorPage = () => {
  const { authorId } = useParams();
  const authorDetail = authors.find((author) => author.id === authorId);

  if (!authorDetail) {
    return <div>Autorka nenalezena.</div>;
  }

  return (
    <div className="author-page">
      <h1>{authorDetail.name}</h1>
      <div className="textAboutAuthor">
        {' '}
        <h2>Informace o autorce</h2>
        <p>{authorDetail.about}</p>
        <h2>Odkaz na další projekty:</h2>
        <a href={authorDetail.link} target="_blank">
          GitHub
        </a>
      </div>
      <img src={authorDetail.picture} alt={authorDetail.name} />
    </div>
  );
};
