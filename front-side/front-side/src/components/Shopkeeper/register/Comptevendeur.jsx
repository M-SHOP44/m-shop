import React from "react";
import './/style.css'



const Comptevendeur =  ({formData, setFormData}) => {

return(
        <>
   
         
    <div className="police" >
      <label htmlFor="Nom de la boutique">Shop name <span style={{color: "red"}}>*</span></label>
      <input placeholder="shop name" id="Nom de la boutique" value={formData.nameDeLaBoutique}
        onChange={(event) => {
        console.log({...formData});
        setFormData({ ...formData, nameDeLaBoutique : event.target.value})}} />
        </div>
    <div className="police2">
      <label  htmlFor="comp">Veuillez sélectionner si vous êtes une personne physique ou une entreprise <span style={{color: "red"}}>*</span></label>
      <select className="comp" value={formData.persone}
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, persone:event.target.value});
      }}
       >
        <option className="option" value="choisir une option">- Choisir une option -</option>
        <option value="Personne physique">Personne physique</option>
        <option value="Entité commercial/ Entreprise">Entité commercial/ Entreprise</option>
      </select>
    </div>
    <div className="police3">
      <label  htmlFor="Nom et prénom du gestionnaire de compte">Full name <span style={{color: "red"}}>*</span></label>
      <input placeholder="Enter your full name" id="Nom et prénom du gestionnaire de compte" value={formData.nomEtPrénomDuGestionnaireDeCompte}
       onChange={(event) => {
        setFormData({...formData, nomEtPrénomDuGestionnaireDeCompte: event.target.value});
      }} 
      />
    </div>
    <div className="police4">
      <label htmlFor="Numéro de téléphone du gestionnaire de compte ">Enter Your Phone Number <span style={{color: "red"}}>*</span></label>
      <input placeholder="Phone Number" id="Numéro de téléphone du gestionnaire de compte " type="numero" value={formData.numeroDeTelephone}
       onChange={(event) => {
        setFormData({...formData, numeroDeTelephone:event.target.value});
      }}
      />
    </div>
    <div className="police">
      <label htmlFor="Adresse e-mail ">New email <span style={{color: "red"}}>*</span></label>
      <input placeholder="new email" id="Adresse e-mail " type="text" value={formData.email}
       onChange={(event) => {
        setFormData({...formData, email: event.target.value});
      }}
      />
    </div>
    <div className="police">
      <label htmlFor="confirmeEmail">Confirm new email <span style={{color: "red"}}>*</span></label>
      <input placeholder="confirm new email" id="confirmeEmail" type="text" value={formData.confirmeEmail}
       onChange={(event) => {
        setFormData({...formData, confirmeEmail:event.target.value});
      }}
      />
    </div>
    <div className="police">
      <label htmlFor="password">Enter Password <span style={{color: "red"}}>*</span></label>
      <input placeholder="enter Password" id="password" type="text"  value={formData.password}
       onChange={(event) => {
        setFormData({...formData, password:event.target.value});
      }}
      />
    </div>
    <div className="police">
      <label htmlFor="confirmePassword">Reenter Password <span style={{color: "red"}}>*</span></label>
      <input placeholder="Reenter Password" id="confirmePassword" type="text" value={formData.confirmePassword}
       onChange={(event) => {
        setFormData({...formData, confirmePassword:event.target.value});
      }} 
      />
    </div>
    
    </>
    )
}

export default Comptevendeur;