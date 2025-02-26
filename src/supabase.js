import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://lpjjssokrsprxswhtbks.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwampzc29rcnNwcnhzd2h0YmtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3NjMwMjEsImV4cCI6MjA0NzMzOTAyMX0.DIWD8J8-y4aVrUWar6h-3CeTw4gvskL0R3DZndWD_-E')

export default supabase