import { competence } from "../typings";

const API_BASE_URL = process.env.NEXT_PUBLIC_VERCEL_UR ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000";


export const fetchCompetences = async()=>{
    const res = await fetch(`${API_BASE_URL}/api/getCompetences`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Specify that you want to receive a JSON response
        },
        body: JSON.stringify({query: '*'}),
      });

    const data = await res.json()
    const Competences: competence[]= data?.Competences;

    return Competences;
}