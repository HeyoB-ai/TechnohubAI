
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    bedrijfsnaam: '',
    contactpersoon: '',
    rol: '',
    email: '',
    telefoon: '',
    focus: '',
    programma: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Aanmelding verzonden! We nemen binnen 24 uur contact op.');
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-6xl font-black text-black mb-8 leading-tight">Zet de volgende <span className="text-th-red">stap</span> in AI.</h1>
            <p className="text-xl text-gray-600 mb-12">
              Of je nu wilt aanmelden voor het programma "Concreet aan de slag met AI" op 9 maart, of een vrijblijvende intake wilt voor een Factory Scan: wij staan klaar.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-th-red">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Locatie</h4>
                  <p className="text-gray-500">TechnoHUB Woerden, Nederland</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-th-red">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">E-mail</h4>
                  <p className="text-gray-500">info@technohub.nl</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-black text-xl mb-4">Agenda: Plan direct een intake</h4>
              <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center text-gray-400">
                <p>[ Calendly / Agenda Embed Placeholder ]</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-black mb-8">Aanmelden & Contact</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Bedrijfsnaam</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-th-red focus:ring-1 focus:ring-th-red outline-none transition-all" 
                    placeholder="bijv. Janssen Productie B.V."
                    onChange={(e) => setFormData({...formData, bedrijfsnaam: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Contactpersoon</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-th-red focus:ring-1 focus:ring-th-red outline-none transition-all" 
                    placeholder="Naam"
                    onChange={(e) => setFormData({...formData, contactpersoon: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Rol binnen bedrijf</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-th-red focus:ring-1 focus:ring-th-red outline-none transition-all"
                  onChange={(e) => setFormData({...formData, rol: e.target.value})}
                >
                  <option>Selecteer rol...</option>
                  <option>Directie / Eigenaar</option>
                  <option>Operations Manager</option>
                  <option>IT / Innovatie Manager</option>
                  <option>Anders</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-th-red focus:ring-1 focus:ring-th-red outline-none transition-all" 
                    placeholder="e-mailadres"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Telefoon</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-th-red focus:ring-1 focus:ring-th-red outline-none transition-all" 
                    placeholder="telefoonnummer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Waar ligt de focus?</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-th-red focus:ring-1 focus:ring-th-red outline-none transition-all" 
                  placeholder="Beschrijf kort je huidige AI uitdagingen of wensen..."
                ></textarea>
              </div>

              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="prog"
                  className="w-5 h-5 accent-th-red" 
                  onChange={(e) => setFormData({...formData, programma: e.target.checked})}
                />
                <label htmlFor="prog" className="text-sm font-bold text-gray-700">Ik wil me aanmelden voor het programma "Concreet aan de slag met AI" op 9 maart.</label>
              </div>

              <button className="w-full bg-th-red text-white py-5 rounded-xl font-black text-xl hover:bg-black transition-all shadow-xl shadow-th-red/20">
                Verzend Aanvraag
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
