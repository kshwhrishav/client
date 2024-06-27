import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('http://localhost:3002/register', req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(400).json({ message: error.response.data });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
