import React, { useState } from "react";

import Bonbon from "./Bonbon";

import "./Bonbons.css";

function Bonbons(props) {
  // je dois creer un vecteur de position et l'envoyer a carousel
  let [Position, setPosition] = useState([
    {
      id: "bonbon-1",
      left: 0,
    },
    {
      id: "bonbon-2",
      left: 33,
    },
    {
      id: "bonbon-3",
      left: 66,
    },
  ]);
  let leftPosition = [];
  Position.forEach((e) => leftPosition.push(e.left));

  props.onRecuperation(leftPosition);

  // props.onGetPosition(Position);
  // je recoit le nouveau vecteur de position et je les applique avec une animation
  return (
    <div className="bonbons">
      <Bonbon bonbonProps={Position[0]} />
      <Bonbon bonbonProps={Position[1]} />
      <Bonbon bonbonProps={Position[2]} />
    </div>
  );
}

export default Bonbons;

// $( document ).ready(function(){
//   // recuperer les ID next et prev pour les utiliser pour le onClick
//   let next = document.getElementById('next');
//   let prev = document.getElementById('prev');

//   // creer une NodeListe avec les differents div
//   let carousel = document.querySelectorAll('.bonbon');

//   // on pose les fonction pour chaque bouton
//   next.onclick = carouselNext;
//   prev.onclick = carouselPrev;

//   // on cree les fonction pour chaque bouton
//   function carouselNext() {
//     carouselAction('next')
//   }
//   function carouselPrev() {
//     carouselAction('prev')
//   }

//   // fonction pour recuperer les postions actuelles
//   function getPosition() {
//     let divArray = [];
//     let divClass = [];
//     carousel.forEach(e => divArray.push(e));
//     divArray.forEach(e => {
//       let obj = {
//         id: e.getAttribute('id'),
//         position: Math.round(100 * parseFloat($('#'+e.getAttribute('id')).css('left')) / parseFloat($('#'+e.getAttribute('id')).parent().css('width')))
//       };
//       divClass.push(obj)
//     })
//     // console.log( divClass )
//     return divClass;
//   }

//   function carouselAction(action){
//     let divPosition = getPosition()
//     let newPosition = []

//     console.log( divPosition )
//     // deuxieme boucle pour atribuer les nouvelles positions
//     divPosition.map(e =>{
//       let nextPosition
//       if(action === 'next'){
//         zIndexVal = 0;
//         nextPosition = (e.position + 33  > 67) ? 0 : e.position + 33;
//       }
//       if(action === 'prev'){
//         zIndexVal = 66;
//         nextPosition = (e.position - 33 < -1 ) ? 66 : e.position - 33;
//       }
//       let obj = {
//         id : e.id,
//         position : nextPosition
//       }
//       newPosition.push(obj);
//     })
//     // console.log( newPosition );

//     newPosition.map(e => {
//       //
//       if (e.position === zIndexVal){
//           document.querySelector('#' + e.id ).style.zIndex = '0'
//       }else{
//           document.querySelector('#' + e.id ).style.zIndex = '1'
//       }

//       let agrandissement = (e.position === 33 ) ? '70%' : '40%'
//       $('button').prop("disabled",true)

//       let animation  = $('#' + e.id ).animate({
//           left: e.position+ '%',
//           backgroundSize: agrandissement
//       },1000);

//       animation.promise().done(function () {
//           $('button').prop("disabled",false)
//       })
//     });
//   }
// })
