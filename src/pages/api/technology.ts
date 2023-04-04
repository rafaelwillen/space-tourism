import { NextApiRequest, NextApiResponse } from "next";
import { technology } from "../../data/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.json(technology);
  }
  return res.status(405).json({ message: "Method not allowed" });
}
