
import { competence } from "../../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import {sanityClient} from "../../sanity";

const query = groq`*[_type == "competence"] {
    ...,
  
  }`;

  type Data ={
    Competences: competence[]
  }

  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const Competences: competence[] = await sanityClient.fetch(query);
    res.status(200).json({ Competences })
  }
  