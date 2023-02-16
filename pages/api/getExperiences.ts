import { experience } from "../../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import {sanityClient} from "../../sanity";

const query = groq`*[_type == "experience"] {
    ...,
    technologies[]->,
    points[]->
  }`;

  type Data ={
    experiences: experience[];
  }

  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const experiences: experience[] = await sanityClient.fetch(query);
    res.status(200).json({ experiences })
  }
  