import { Request, Response, NextFunction } from "express";
import { get, controller, use, bodyValidator, post } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
<form method = "POST">
    <div>
        <label>Email</label>
        <input name="email" />
    </div>
    <div>
        <label>Password</label>
        <input name="password" type="password" />
    <button>Submit</button>
    </div>
</form>
  `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === "me@email.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid credentials");
    }
  }

  @get("/logout")
  getlogout(req: Request, res: Response) {
    req.session = null;
    res.redirect("/");
  }
}
