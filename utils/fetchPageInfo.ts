import { PageInfo } from "../typings";

const isProduction = process.env.NODE_ENV === 'production';


const API_BASE_URL = process.env.NEXT_PUBLIC_VERCEL_UR ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000";


export const fetchPageInfo = async()=>{
  
    const res = await fetch(`${API_BASE_URL}/api/getPageInfo`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Specify that you want to receive a JSON response
        },
        body: JSON.stringify({query: '*'}),
      });

    const data = await res.json()
    const pageInfo: PageInfo = data?.pageInfo;
    
    return pageInfo;
    
}


