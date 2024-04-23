import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import bcrypt from "bcryptjs";

const router = Router();

router.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
      res.send("Seed is already done");
      return;
    }

    await UserModel.create(sample_users);
    res.send("Seed is Done!");
  })
);

router.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    //admin
    if (user?.email === "dragos@gmail.com") {
      res.send(generateTokenResponse(user));
      return;
    }
    //trebuie comparata parola introdusa cu parola cryptata din bd
    if (user && (await bcrypt.compare(password, user.password))) {
      res.send(generateTokenResponse(user));
    } else {
      res.status(HTTP_BAD_REQUEST).send("User name or password is not valid!");
    }
  })
);
//vechea varianta
// router.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const user = sample_users.find(
//     (user) => user.email === email && user.password === password
//   );
//   if (user) {
//     res.send(generateTokenResponse(user));
//   } else {
//     res.status(400).send("User name or password is not valid!");
//   }
// });

router.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const { name, email, password, address } = req.body;
    const user = await UserModel.findOne({ email }); //verificam daca exista deja un user cu acest email
    if (user) {
      // res.status(400)
      res.status(HTTP_BAD_REQUEST).send("Users already exists, please login!");
      return;
    }

    //encrypt the password before saving
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser: User = {
      id: "",
      name: name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      address: address,
      //orice new user e admin
      isAdmin: false,
    };
    const dbUser = await UserModel.create(newUser); //o sa genereze automat id-ul
    res.send(generateTokenResponse(dbUser));
  })
);

//JWT token
const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "30d" }
  );

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token,
  };
};

export default router;
