import { skill } from "../typings";


const API_BASE_URL = process.env.NEXT_PUBLIC_VERCEL_UR ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000";



export const fetchSkills = async()=>{
    const res = await fetch(`${API_BASE_URL}/api/getSkills`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Specify that you want to receive a JSON response
        },
        body: JSON.stringify({query: '*'}),
      });

    const data = await res.json()
    const skills: skill[]= data?.skills;

    return skills;
}