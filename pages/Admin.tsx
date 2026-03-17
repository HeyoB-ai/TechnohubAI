import React, { useState, useEffect } from 'react';
import { supabase, Cursus } from '../lib/supabase';

const EMPTY_FORM: Omit<Cursus, 'id' | 'created_at'> = {
  titel: '',
  beschrijving: '',
  type: '',
  datum: '',
  tijdstip: '',
  locatie: '',
  prijs: '',
  afbeelding_url: '',
  doelgroep: '',
  sectoren: '',
};

const Admin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [cursussen, setCursussen] = useState<Cursus[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [formError, setFormError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) loadCursussen();
  }, [session]);

  const loadCursussen = async () => {
    setFetchError('');
    const { data, error } = await supabase
      .from('cursussen')
      .select('*')
      .order('datum', { ascending: true });

    if (error) {
      setFetchError('Fout bij ophalen cursussen: ' + error.message);
    } else {
      setCursussen(data || []);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setLoginError(error.message);
    setIsLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddCursus = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!formData.titel.trim()) {
      setFormError('Titel is verplicht.');
      return;
    }
    setIsSaving(true);
    const { error } = await supabase.from('cursussen').insert([formData]);
    if (error) {
      setFormError('Fout bij opslaan: ' + error.message);
    } else {
      setShowForm(false);
      setFormData(EMPTY_FORM);
      await loadCursussen();
    }
    setIsSaving(false);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteId) return;
    setIsDeleting(true);
    const { error } = await supabase.from('cursussen').delete().eq('id', deleteId);
    if (!error) {
      setCursussen(prev => prev.filter(c => c.id !== deleteId));
    }
    setDeleteId(null);
    setIsDeleting(false);
  };

  // --- Login screen ---
  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
          <h1 className="text-3xl font-black mb-2">Beheerders login</h1>
          <p className="text-gray-500 mb-8 text-sm">Alleen toegankelijk voor beheerders.</p>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold mb-1">E-mailadres</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-th-red"
                placeholder="beheerder@technohub.nl"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Wachtwoord</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-th-red"
                placeholder="••••••••"
              />
            </div>
            {loginError && (
              <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{loginError}</p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-th-red text-white font-black py-3 rounded-xl hover:bg-black transition-all disabled:opacity-60"
            >
              {isLoading ? 'Inloggen...' : 'Inloggen'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- Admin dashboard ---
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <span className="text-th-red font-black tracking-widest uppercase text-sm mb-1 block">Beheerdersdashboard</span>
            <h1 className="text-4xl font-black">Cursussen beheren</h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => { setShowForm(true); setFormData(EMPTY_FORM); setFormError(''); }}
              className="bg-th-red text-white font-black px-6 py-3 rounded-xl hover:bg-black transition-all text-sm"
            >
              + Nieuwe cursus toevoegen
            </button>
            <button
              onClick={handleLogout}
              className="border border-gray-300 text-gray-600 font-bold px-5 py-3 rounded-xl hover:bg-gray-100 transition-all text-sm"
            >
              Uitloggen
            </button>
          </div>
        </div>

        {/* Fetch error */}
        {fetchError && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl px-6 py-4 mb-6 text-sm">
            {fetchError}
          </div>
        )}

        {/* Cursussen tabel */}
        {cursussen.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-16 text-center text-gray-400">
            <p className="text-lg font-bold mb-2">Nog geen cursussen</p>
            <p className="text-sm">Voeg de eerste cursus toe via de knop hierboven.</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-6 py-4 font-black text-gray-700">Titel</th>
                    <th className="text-left px-6 py-4 font-black text-gray-700">Type</th>
                    <th className="text-left px-6 py-4 font-black text-gray-700">Datum</th>
                    <th className="text-left px-6 py-4 font-black text-gray-700">Locatie</th>
                    <th className="text-left px-6 py-4 font-black text-gray-700">Prijs</th>
                    <th className="text-right px-6 py-4 font-black text-gray-700">Actie</th>
                  </tr>
                </thead>
                <tbody>
                  {cursussen.map((cursus, i) => (
                    <tr
                      key={cursus.id}
                      className={`border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/30'} hover:bg-gray-50 transition-all`}
                    >
                      <td className="px-6 py-4 font-bold">{cursus.titel}</td>
                      <td className="px-6 py-4 text-gray-500">{cursus.type || '—'}</td>
                      <td className="px-6 py-4 text-gray-500">{cursus.datum || '—'}</td>
                      <td className="px-6 py-4 text-gray-500">{cursus.locatie || '—'}</td>
                      <td className="px-6 py-4 text-gray-500">{cursus.prijs || '—'}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setDeleteId(cursus.id)}
                          className="text-red-500 hover:text-red-700 font-bold text-xs border border-red-200 hover:border-red-400 px-3 py-1.5 rounded-lg transition-all"
                        >
                          Verwijder
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* --- Formulier modal --- */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-2xl font-black">Nieuwe cursus toevoegen</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-black text-2xl font-bold leading-none"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleAddCursus} className="px-8 py-6 space-y-5">
              {[
                { name: 'titel', label: 'Titel *', type: 'text', placeholder: 'AI Strategie voor Managers' },
                { name: 'type', label: 'Type', type: 'text', placeholder: 'Workshop / Training / Webinar' },
                { name: 'datum', label: 'Datum', type: 'date', placeholder: '' },
                { name: 'tijdstip', label: 'Tijdstip', type: 'time', placeholder: '' },
                { name: 'locatie', label: 'Locatie', type: 'text', placeholder: 'Eindhoven / Online' },
                { name: 'prijs', label: 'Prijs', type: 'text', placeholder: '€ 495 excl. btw' },
                { name: 'afbeelding_url', label: 'Afbeelding URL', type: 'url', placeholder: 'https://...' },
                { name: 'doelgroep', label: 'Doelgroep', type: 'text', placeholder: 'Directeuren, Managers' },
                { name: 'sectoren', label: 'Sectoren', type: 'text', placeholder: 'Maakindustrie, Techniek' },
              ].map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-bold mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleFormChange}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-th-red transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold mb-1">Beschrijving</label>
                <textarea
                  name="beschrijving"
                  value={formData.beschrijving}
                  onChange={handleFormChange}
                  rows={3}
                  placeholder="Korte omschrijving van de cursus..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-th-red transition-colors resize-none"
                />
              </div>

              {formError && (
                <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{formError}</p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex-1 bg-th-red text-white font-black py-3 rounded-xl hover:bg-black transition-all disabled:opacity-60"
                >
                  {isSaving ? 'Opslaan...' : 'Cursus opslaan'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-all"
                >
                  Annuleren
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- Verwijder bevestigingsdialoog --- */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl p-8">
            <h2 className="text-xl font-black mb-3">Cursus verwijderen</h2>
            <p className="text-gray-600 mb-8">
              Weet je zeker dat je deze cursus wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDeleteConfirm}
                disabled={isDeleting}
                className="flex-1 bg-red-600 text-white font-black py-3 rounded-xl hover:bg-red-700 transition-all disabled:opacity-60"
              >
                {isDeleting ? 'Verwijderen...' : 'Ja, verwijder'}
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 border border-gray-200 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-50 transition-all"
              >
                Annuleren
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
