import React from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';
import { authors } from '../author-list';
import prototype from './img/prototype.png';
import { BsFillPersonFill } from 'react-icons/bs';

export const ProjectPage = () => {
  return (
    <div className="page">
      <div className="content">
        <div className="text">
          <h1 className="title">Slow Wear</h1>
          <h2 className="section-title">Popis projektu</h2>
          <p>
            E-shop Slow Wear funguje jako půjčovna oblečení na principu
            měsíčního poplatku. Zákazníci si mohou každý měsíc vybrat 6 různých
            kousků oblečení, které po 30 dnech vrátí a objednají si další. Cílem
            projektu je pomoci zredukovat množství oblečení v našich skříních,
            které neunosíme, a tím podpořit udržitelnost a zodpovědný přístup k
            módnímu průmyslu.
          </p>
          <h2 className="section-title">Autorky projektu</h2>
          <ul>
            {authors.map((author) => (
              <li key={author.id}>
                <BsFillPersonFill />
                <a href={`/${author.id}`}>{author.name}</a>
              </li>
            ))}
          </ul>
          <h2 className="section-title">Další informace</h2>
          <p>
            Další informace o projektu a jeho funkcích můžete nalézt na GitHubu:
          </p>
          <a
            href="https://github.com/Kristyna-Novakova/slow-wear"
            className="link"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className="prototypeImage">
          <img src={prototype} alt="prototyp" />
        </div>
      </div>
    </div>
  );
};
