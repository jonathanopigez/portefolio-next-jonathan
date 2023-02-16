import { projet } from "../../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import {sanityClient} from "../../sanity";

const query = groq`*[_type == "projet"] {
    ...,
    technologies[]->,

  }`;

  type Data ={
    projets: projet[];
  }

  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const projets: projet[] = await sanityClient.fetch(query);
    res.status(200).json({ projets })
  }
  