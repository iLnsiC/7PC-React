import React from "react";
import "../Article.css";
import "./MainArticle.css";
function MainArticle() {
  return (
    <div className="article ">
      <h2 className="article-titre">Nouveau !</h2>
      <p className="article-text">
        Desormais , <span className="important">Les 7 Peches Capitaux</span>{" "}
        fabrique artisanalement tous ses caramels bretons
        <span className="ponctu">,</span> bonbons au caramel au beurre sale de
        Guerande dans son atelier
        <span className="ponctu">.</span> Chaque caramel
        <span className="ponctu">,</span> mou et fondant
        <span className="ponctu">,</span> est emballe individuellement a la main
        dans le respect de la tradition bretonne
        <span className="ponctu">.</span>
      </p>
    </div>
  );
}
export default MainArticle;
