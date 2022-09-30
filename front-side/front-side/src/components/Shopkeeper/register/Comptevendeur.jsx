import React from "react";
import './style.css'



const Comptevendeur =  ({formData, setFormData}) => {

return(
        <>
   
  <div className="elements"> 
    <div id="column">    
    <div className="police" >
      <label htmlFor="Nom de la boutique">The Shop name <span style={{color: "red"}}>*</span></label>
      <input placeholder="Enter shop name" id="input" value={formData.nameDeLaBoutique} className="comp"
        onChange={(event) => {
        console.log({...formData});
        setFormData({ ...formData, nameDeLaBoutique : event.target.value})}} />
    </div>

    <div className="police">
      <label   htmlFor="comp">Please select if you are a person or a company <span style={{color: "red"}}>*</span></label>
      <select  id="input" className="comp" value={formData.persone}
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, persone:event.target.value});
      }}
       >
        <option className="option" value="choisir une option">-Choose an option-</option>
        <option value="Personne physique">Physical person</option>
        <option value="Entité commercial/ Entreprise">Business Entity/ Company</option>
      </select>
    </div>
    <div className="police">
      <label   htmlFor="Nom et prénom du gestionnaire de compte">Full name <span style={{color: "red"}}>*</span></label>
      <input  id="input"  placeholder="Enter your full name"  value={formData.nomEtPrénomDuGestionnaireDeCompte} className="comp"
       onChange={(event) => {
        setFormData({...formData, nomEtPrénomDuGestionnaireDeCompte: event.target.value});
      }} 
      />
    </div>
    <div className="police">
      <label htmlFor="Numéro de téléphone du gestionnaire de compte ">Enter Your Phone Number <span style={{color: "red"}}>*</span></label>
      <input placeholder="Phone Number" id="input" type="numero" value={formData.numeroDeTelephone} className="comp" 
       onChange={(event) => {
        setFormData({...formData, numeroDeTelephone:event.target.value});
      }}
      />
    </div>
    <div className="police">
      <label htmlFor="Adresse e-mail ">New email <span style={{color: "red"}}>*</span></label>
      <input placeholder="new email" id="input" type="text" value={formData.email} className="comp"
       onChange={(event) => {
        setFormData({...formData, email: event.target.value});
      }}
      />
    </div>
    <div className="police">
      <label htmlFor="confirmeEmail">Confirm new email <span style={{color: "red"}}>*</span></label>
      <input placeholder="confirm new email" id="input" type="text" value={formData.confirmeEmail} className="comp"
       onChange={(event) => {
        setFormData({...formData, confirmeEmail:event.target.value});
      }}
      />
    </div>
    <div className="police">
      <label htmlFor="password">Enter Password <span style={{color: "red"}}>*</span></label>
      <input placeholder="enter Password" id="input" type="text"  value={formData.password} className="comp"
       onChange={(event) => {
        setFormData({...formData, password:event.target.value});
      }}
      />
    </div>
    <div className="police">
      <label htmlFor="confirmePassword">Reenter Password <span style={{color: "red"}}>*</span></label>
      <input placeholder="Reenter Password" id="input" type="text" value={formData.confirmePassword} className="comp"
       onChange={(event) => {
        setFormData({...formData, confirmePassword:event.target.value});
      }} 
      />
    </div>
  </div>
</div> 
    
    </>
    )
}

export default Comptevendeur;