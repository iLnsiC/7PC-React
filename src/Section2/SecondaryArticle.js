import React from "react";

import "../Article.css";
import "./SecondaryArticle.css";

function SecondaryArticle() {
  return (
    <div className="article">
      <h2 className="article-titre">
        Composez votre assortiment<span className="ponctu">...</span>
      </h2>
      <p className="article-text">
        Choisissez votre taille<span className="ponctu">,</span> puis composez
        votre box de bonbons<span className="ponctu">.</span> Laissez vous
        tenter par les 7 peches capitaux<span className="ponctu">,</span> serez
        vous plutot gourmand ou paresseux <span className="ponctu">? </span>
        Peut-etre les deux <span className="ponctu">?</span>
      </p>
    </div>
  );
}
export default SecondaryArticle;
