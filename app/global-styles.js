import { createGlobalStyle } from 'styled-components';
import Second from './images/secondDiv.jpg';

const colors = {
  primary: '#38050b',
  secondary: '#38050b23',
};

const important = '!important';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  .inheritFont{
    font-family: inherit;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .removeShadow{
    box-shadow: none !important;
  }

  .heroBigText{
    font-size: 4em !important;
    padding-top: 25%;
  }

  .aboutBigText{
    font-size: 4em !important;
  }

  .navSpacing{
    margin-left: 30px;
    margin-right: 30px;
  }

  .primary{
    background: ${colors.primary} !important;
    color: white;
  }

  .secondary{
    background: ${colors.secondary} !important;
  }

  .secondary-transparent{
    background: #9dc06789 !important;
  }

  .primary-text{
    color: ${colors.primary} !important;
  }

  .primary-transparent{
    background: ${colors.primary};
  }

  .secondary-text{
    color: ${colors.secondary} !important;
  }

  .cleanButton{
    border: 0 !important;
    font-size: 0.7em !important;
    padding: 15px 45px !important;
    border-radius: 0 !important;
  }

  .sideHeroText{
    padding-top: 30%;
    padding-right: 50px;
    padding-left: 100px;
    font-size: 1.3rem;
    text-align: end;
  }

  .sideAboutText{
    font-size: 2.5em;
    display: flex;
    justify-content: center;
    color: ${colors.primary};
  }

  .bold{
    font-size: 1.7em;
    margin: 30px 0;
  }

  .normalText{
    text-transform: capitalize
  }

  .sideHeroFooter{
    margin-top: 30px;
  }

  .secondDiv{
    height: 60vh;
    background: url(${Second});
  }

  .roundedClean{
    border: 0 !important;
    font-size: 0.7em !important;
    padding: 8px 45px !important;
    border-radius: 30px !important;
  }

  .thirdSectionText{
    font-size: 3em !important;
  }

  .fourthSectionText{
    font-size: 2.5em !important;
  }

  .footerHead{
    font-size: 2em;
    font-weight: bold;
  }

  .footer{
    background: #58030e;
    color: white;
    padding: 20px;
  }

  .center-text{
    text-align: center;
  }

  .footerLinks{
    padding-top: 20px;
    color: white;
    padding-bottom: 10px;
  }

  .footerLinks:hover{
    text-decoration: underline;
    color: #9dc067 !important;
  }

  .footerHead2{
    font-size: 1.4em;
    font-weight: bold;
  }

  .footerIcons{
    font-size: 1em;
    color: white;
    margin: 10px;
  }

  .flip-card {
    background-color: transparent;
    width: 100%;
    height: 200px;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }
  
  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  /* Position the front and back side */
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  
  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: white;
    color: black;
  }
  
  /* Style the back side */
  .flip-card-back {
    background-color: ${colors.primary};
    color: white;
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
  }

  .flip-card-expand-back {
    background-color: ${colors.primary};
    color: white;
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .contactFooter{
    border-radius: 50%;
    background: ${colors.secondary};
    padding: 5px;
    color: white !important;
    margin-left: 50px !important;
    font-size: 1.5rem;
    width: 70px !important;
    height: 70px !important;
  }

  .bigModal{
    width: 100% ${important};
    height: 100vh ${important};
    z-index: 5000 ${important};
  } 

  .service-item-modal{
    width: 100vw !important;
    height: 100vh !important;
    overflow: auto;
    top: 0px;
    left:0px;
    position: fixed;
    z-index: 5000;
    display: hidden ${important};
  }
  



`;

export default GlobalStyle;
