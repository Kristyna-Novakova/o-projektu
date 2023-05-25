import React from 'react';
import { useParams } from 'react-router-dom';
import { authors } from '../author-list';

export const AuthorPage = () => {
  const { authorId } = useParams();
  const authorDetail = authors.find((author) => author.id === authorId);

  if (!authorDetail) {
    return <div>Autorka nenalezena.</div>;
  }

  return (
    <div className="author-page">
      <img src={authorDetail.picture} alt={authorDetail.name} />
      <h1>{authorDetail.name}</h1>
      <p>{authorDetail.about}</p>
      <a href={authorDetail.link}>GitHub</a>
    </div>
  );
};
