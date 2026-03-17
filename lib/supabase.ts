import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Cursus {
  id: string;
  titel: string;
  beschrijving: string;
  type: string;
  datum: string;
  tijdstip: string;
  locatie: string;
  prijs: string;
  afbeelding_url: string;
  doelgroep: string;
  sectoren: string;
  created_at?: string;
}
