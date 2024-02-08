// responsible for checking the auth of the user when we do req to an API that is necessary for the user to be authenticated

import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constants/http_status";
import jwt from "jsonwebtoken";

export default (req: any, res: any, next: any) => {
  const token = req.headers.access_token as string;
  if (!token) return res.status(HTTP_UNAUTHORIZED).send();
  try {
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decodedUser;
  } catch (error) {
    res.status(HTTP_UNAUTHORIZED).send();
  }
  return next();
};
