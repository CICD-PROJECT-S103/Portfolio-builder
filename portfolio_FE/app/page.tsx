import { redirect } from 'next/navigation'

export default function Home() {
  // Redirect to landing page for now
  // Later this will check authentication and redirect accordingly
  redirect('/landing')
}
