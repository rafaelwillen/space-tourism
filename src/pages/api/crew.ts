import { NextApiRequest, NextApiResponse } from "next";
import { crew } from "../../data/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.json(crew);
  }
  return res.status(405).json({ message: "Method not allowed" });
}
