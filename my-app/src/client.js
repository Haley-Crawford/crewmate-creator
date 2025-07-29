import { createClient } from '@supabase/supabase-js'

const URL = 'https://kpzoblxttwjnycbrhdcb.supabase.co'
const KEY = import.meta.env.VITE_SUPABASE_KEY
export const supabase = createClient(URL, KEY)