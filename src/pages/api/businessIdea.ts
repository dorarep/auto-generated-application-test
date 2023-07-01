import { NextApiRequest, NextApiResponse } from 'next';
import { BusinessIdea, MVV } from '../../types/index';
import { openaiAPI } from '../../services/openaiAPI';

export default async function convertToMVV(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const businessIdea: BusinessIdea = req.body;
    try {
      const mvv: MVV = await openaiAPI.convertIdeaToMVV(businessIdea);
      res.status(200).json(mvv);
    } catch (error) {
      res.status(500).json({ error: 'Error converting business idea to MVV' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}