import React from 'react'
import './/style.css'



const Comptebancaire = ({formData, setFormData})=>{

  return (
   <>
    <div className='police'>
      <label htmlFor="Titulaire du compte">Account owner</label>
      <input id="input" type="text" value={formData.titulaireDuCompte} className="comp" placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, titulaireDuCompte: event.target.value});
      }}/>
    </div>
    <div className='police'>
      <label htmlFor="Nom de la banque">Name of the bank</label>
      <input id="input" type="text" value={formData.nomDeLaBanque} className="comp" placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, nomDeLaBanque:event.target.value});
      }}/>
    </div>
    <div className='police'>
      <label htmlFor="Code bancaire">Bank code</label>
      <input id="input" type="text" value={formData.codeBancaire} className="comp" placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, codeBancaire:event.target.value});
      }}/>
    </div>
    <div className='police'>
      <label htmlFor="Code IBAN - IBAN">IBAN Code </label>
      <input id="input" type="text" value={formData.codeIban} className="comp" placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, codeIban: event.target.value});
      }}/>
    </div>
    <div className='police'>
      <label htmlFor="Code Swift">SWIFT Code</label>
      <input id="input" type="text" value={formData.codeSwift} className="comp" placeholder='Enter your response'
       onChange={(event) => {
        setFormData({...formData, codeSwift:event.target.value});
      }}/>
    </div>
   </>
  )
};

export default Comptebancaire;