import { NextApiRequest, NextApiResponse } from "next";
import { destinations } from "../../data/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.json(destinations);
  }
  res.status(405).json({ message: "Method not allowed" });
}
