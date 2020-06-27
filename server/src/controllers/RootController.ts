import { Request, Response, Router, NextFunction } from "express";
import { get, controller, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send("Not permited");
}

@controller("")
class RootController {
  @get("/")
  getRoute(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
            <div>You are logged in</div>
            <a href="/auth/logout" >Logout</a>
        </div>
        `);
    } else {
      res.send(`
        <div>
            <div>You are not logged in</div>
            <a href="/auth/login" >Login</a>
        </div>
        `);
    }
  }

  @use(requireAuth)
  @get("/protected")
  getProtected(req: Request, res: Response) {
    res.send(`

    <div>
        <label>Welcome to protected route, user</label>
    </div>
    
  `);
  }
}
