import React from 'react';
import { useParams } from 'react-router-dom';
import { authors } from '../author-list';
import './style.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export const AuthorPage = () => {
  const { authorId } = useParams();
  const authorDetail = authors.find((author) => author.id === authorId);

  if (!authorDetail) {
    return <div>Autorka nenalezena.</div>;
  }

  return (
    <div className="author-page">
      <h1>{authorDetail.name}</h1>
      <div className="author-info">
        {' '}
        <div className="about">
          <h2>Informace o autorce</h2>
          <p>{authorDetail.about}</p>
          <h2>Odkaz na další projekty:</h2>
          <ul>
            <li>
              <AiFillGithub />{' '}
              <a href={authorDetail.github} target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <AiFillLinkedin />
              <a href={authorDetail.linkedin} target="_blank">
                LinkedIn profil
              </a>
            </li>
            <li>
              <MdEmail />
              <a href="mailto: {authorDetail.email}">{authorDetail.email}</a>
            </li>
          </ul>
        </div>
        <img src={authorDetail.picture} alt={authorDetail.name} />
      </div>
    </div>
  );
};
