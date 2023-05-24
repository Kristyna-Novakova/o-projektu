import React from 'react';
import './style.css';

export const ProjectPage = () => {
  return (
    <div className="page">
      <div className="logo" />
      <h1 className="title">Slow Wear</h1>
      <div className="content">
        <h2 className="section-title">Popis projektu</h2>
        <p>
          E-shop Slow Wear funguje jako půjčovna oblečení na principu měsíčního
          poplatku. Zákazníci si mohou každý měsíc vybrat 6 různých kousků
          oblečení, které po 30 dnech vrátí a objednají si další. Cílem projektu
          je pomoci zredukovat množství oblečení v našich skříních, které
          neunosíme, a tím podpořit udržitelnost a zodpovědný přístup k módnímu
          průmyslu.
        </p>
        <p>
          Další informace o projektu a jeho funkcích můžete nalézt na GitHubu:
        </p>
        <a href="odkaz_na_github" className="link">
          GitHub
        </a>
      </div>
    </div>
  );
};
