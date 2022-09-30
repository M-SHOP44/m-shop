import React from 'react'
import './/style.css'

const Informationdaffaire = ({formData, setFormData}) => {
  


  return (
    <>
    
    <div className='police'>
      <label  htmlFor="comp">Do you already have one/several shops on m-shop</label>
      <select className="comp" value={formData.unePlusieursBoutiques} id="input"
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, unePlusieursBoutiques:event.target.value});
      }} >
        <option value="choisir une option">- Choose an option -</option>
        <option value="oui">Yes</option>
        <option value="non">No</option>
      </select>
    </div>
    <div className='police'>
      <label  htmlFor="Nom de la boutique">If yes, please indicate the name of the stores. *</label>
      <input className='comp' type="text" value={formData.siOuiLaQuel} id="input" placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, siOuiLaQuel:event.target.value});
      }} />
    </div>
   
    <div className='police'>
      <label  htmlFor="pourquoi ">If yes, why do you want to open a new store on m-shop?</label>
      <input  className='comp' value={formData.siOuiPourquoi} id="input" placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, siOuiPourquoi:event.target.value});
      }} />
    </div>
    <div className='police'>
      <label  htmlFor="Nom de la société / raison sociale">Company name / company name</label>
      <input className='comp' id="input" type="numero" value={formData.nomDeLaSociété} placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, nomDeLaSociété:event.target.value});
      }} />
    </div>
    <div className='police'>
      <label  htmlFor="Adresse">Adresse (1) *</label>
      <input  className='comp' id="input" type="text" value={formData.adresse1} placeholder='Enter your response'
       onChange={(event) => {
       setFormData({...formData, adresse1:event.target.value});
      }}/>
    </div>
    <div className='police'>
      <label   htmlFor="Code postal">Postal code</label>
      <input  className='comp' id="input" type="text" value={formData.codePostal} placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, codePostal:event.target.value});
      }}/>
    </div>
    <div className='police'>
      <label  htmlFor="Ville">City *</label>
      <input  className='comp' id="input" type="text" value={formData.ville} placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, ville: event.target.value});
      }}/>
    </div>
    <div className='police'>
      <label  htmlFor="Pays">country</label>
      <select className='comp' value={formData.pays} id="input"
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, pays: event.target.value});
      }} >
        <option value="choisir une option">-Choose an option-</option>
        <option value="1">Tunisia</option>
        <option value="2">France</option>
      </select>
    </div>
    <div className='police' >
      <label  htmlFor="Pays">First and last names of the owner of the company or legal representative <br/> (Manager, Managing Director, Senior Executives)</label>
      <input  className='comp' type="text" value={formData.prénomsEtNomDuPropriétaire} id="input" placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, prénomsEtNomDuPropriétaire: event.target.value});
      }} />
    </div>
    <div className='police'>
      <label htmlFor="Deuxièmeprénom">Middle name of company owner or legal representative</label>
      <input className='comp' type="text" value={formData.deuxièmePrénomDuPropriétaire} id="input" placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, deuxièmePrénomDuPropriétaire: event.target.value});
      }} />
    </div>
  
    <div className='police'>
      <label  htmlFor="Type de pièce">Type of identity document of the owner of the company or legal representative</label>
      <select className='comp' value={formData.pièceDidentité} id="input"
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, pièceDidentité: event.target.value});
      }} >
        <option value="choisir une option">-Choose an option-</option>
        <option value="Passport">Passport</option>
        <option value="Carte d'identité nationale">National ID card</option>
      </select>
    </div>
    <div className='police'>
      <label  htmlFor="Type de pièce">If you are a commercial entity / company / legal entity, select the number of employees</label>
      <select className='comp' value={formData.nombreDemployés} id="input" 
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, nombreDemployés: event.target.value});
      }} >
        <option value="choisir une option">-Choose an option-</option>
        <option value="1">1-3</option>
        <option value="2">4-10</option>
        <option value="3">11-99</option>
        <option value="4">100 and more</option>
      </select>
    </div>
    <div className='police'>
      <label htmlFor="Numérod'immatriculation">Registration number in the National Business Register (RNE)</label>
      <input  className='comp' id="input" type="text" value={formData.numéroDimmatriculation} placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, numéroDimmatriculation: event.target.value});
      }} />
    </div>
    <div className='police'>
      <label  htmlFor="matricule">Avez-vous un matricule fiscal ? *</label>
      <select className='comp' value={formData.matriculeFiscal} id="input"
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, matriculeFiscal: event.target.value});
      }} >  
        <option value="choisir une option">-Choose an option-</option>
        <option value="oui">Yes</option>
        <option value="non">No</option>
        
      </select>
    </div>
    <div className='police'>
      <label htmlFor="Identifiantfiscal">Identifiant fiscal</label>
      <input className='comp' id="input" type="text" value={formData.identifiantFiscal} placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, identifiantFiscal: event.target.value});
      }} />
    </div>
    <div  className='police'>
      <label  htmlFor="country">Which country will you shipping from *</label>
      <select className='comp' value={formData.country} id="input"
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, country: event.target.value});
      }} >
        <option value="choisir une option">-Choose an option-</option>
        <option value="1">Tunisie</option>
        <option value="2">France</option>
      </select>
    </div> 
</>
  )
}

export default Informationdaffaire;