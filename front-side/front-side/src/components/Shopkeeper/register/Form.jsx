import React, { useState } from "react";
import { Steps } from "rsuite";
import Comptevendeur from "./Comptevendeur";
import Summary from "./Summary";
import Informationdaffaire from "./Informationd'affaire";
import Comptebancaire from "./Comptebancaire";
import axios from "axios";
import IP from "../../api/ip";
import "../register/style.css";
import { Link } from "react-router-dom";
import "../../layout/App.css";




const Form = ( ) => {
  
  
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    nameDeLaBoutique: "",
    persone: "",
    nomEtPrénomDuGestionnaireDeCompte: "",
    numeroDeTelephone: "",
    email: "",
    confirmeEmail: "",
    password: "",
    confirmePassword: "",
    unePlusieursBoutiques: "",
    siOuiLaQuel: "",
    siOuiPourquoi: "",
    nomDeLaSociété: "",
    adresse1: "",
    codePostal: "",
    ville: "",
    pays: "",
    prénomsEtNomDuPropriétaire: "",
    deuxièmePrénomDuPropriétaire: "",
    dateDeNaissance:"",
    pièceDidentité: "",
    téléchargezUneCopieduPropriétaireDeLaSociété:"",
    nombreDemployés: "",
    numéroDimmatriculation: "",
    matriculeFiscal: "",
    identifiantFiscal: "",
    TéléchargezUneCopieDeIdentificationFiscale:"",
    country: "",
    titulaireDuCompte: "",
    nomDeLaBanque: "",
    codeBancaire: "",
    codeIban: "",
    codeSwift: "",
  });


  const FormTitles = [
    "Comptevendeur",
    "Information d'affaire",
    "Compte bancaire",
    "Summary"
  ];

  const send = () => {
    console.log(formData)
    axios
      .post(`${IP}/auth/shopowner/signup`, formData)

      .then((response) => {
        alert("you're registered")
        console.log(response.data);
        
      });
  };
  
  const PageDisplay = () => {
    if (page === 0) {
      return <Comptevendeur formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <Informationdaffaire formData={formData} setFormData={setFormData} />
      );
    } else if (page === 2) {
      return <Comptebancaire formData={formData} setFormData={setFormData} />;
    } else {
      return <Summary formData={formData} setFormData={setFormData} />;

    }
  };
 
  return (
    <>
    <header className="main-nav">
    <Link to="/" id="myshop">
          M-shop
        </Link>
      <div className="flex">
        <a type="button" href="/sellercenter" className="log" >
          ALREADY  REGISTERED 
        </a>
      </div>
    </header>
      <h2 id="h3">Register Here</h2>
      <div id="form">
        <div id="form-container">
          <div id="header">
            <div>
              <Steps current={page} id="steps">
                <Steps.Item title="Votre compte vendeur" />
                <Steps.Item title="informations d'affaire" />
                <Steps.Item title="compte bancaire" />
                <Steps.Item title="summary" />
              </Steps>
            </div>
            <hr />
          </div>
          <div className="body">{PageDisplay()}</div>
          <hr />
          <footer id="footer">
            <button
              id="button-back"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Back
            </button>
            <button
              id="button-next"
              disabled={page === FormTitles.length - 0}
              hidden={page === 3}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next
            </button>
            
            <button
              id="button-submit"
              hidden={page === 0 || page === 1 || page === 2}
              onClick={send}
            >
              submit
            </button>
            
          </footer>
        </div>
      
      </div>
     
    </>
  );
};

export default Form;
