import React from "react";
import "./FooterRight.css";
import Card from "../Card";

function FooterRight() {
  return (
    <Card className="Right__footer">
      <ul className="categories">
        <li className="sousCat">
          <ul>
            <li className="titre">Information</li>
            <li>
              <a href="https://www.facebook.com/">Gestion des cookies</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Mode de livraison</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Moyen de paiement</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                Condition generale de vente
              </a>
            </li>
          </ul>
        </li>
        <li className="sousCat">
          <ul>
            <li className="titre">En savoir +</li>
            <li>
              <a href="https://www.facebook.com/">Notre catalogue</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Fabrication artisanal</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Votre compte</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Les confiseries de France</a>
            </li>
          </ul>
        </li>
        <li className="sousCat">
          <ul>
            <li className="titre">La Confiserie</li>
            <li>
              <a href="https://www.facebook.com/">Qui sommes-nous ?</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Partenaires</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Blog</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Notre agenda</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Temoignage</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Inscription</a>
            </li>
          </ul>
        </li>
        <li className="sousCat">
          <ul>
            <li className="titre">Les bonbons LSPC</li>
            <li>
              <a href="https://www.facebook.com/">Acessoires & Goodies</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Bonbons</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Sucettes</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Caramels</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Nougats</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Assortiments</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Box Evenements</a>
            </li>
          </ul>
        </li>
        <li className="sousCat">
          <ul>
            <li className="titre">RGPD</li>
            <li>
              <a href="https://www.facebook.com/">Formulaire de retractation</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Droit a l'oublie</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                Limitation traitement de donnees
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                Portabilites de vos donnees
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </Card>
  );
}

export default FooterRight;
