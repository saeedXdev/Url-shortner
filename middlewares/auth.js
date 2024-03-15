const { getUser } = require("../service/auth");
const jwt = require('jsonwebtoken')

async function restrictToLoggedInUser(req, res, next) {
  const token = req.cookies.uid;

  if (!token) return res.redirect("/login");

  const user = getUser(token);
  if (!user) return res.redirect("/login");

  res.user = user;
  next();
}

async function ifAuth(req, res, next) {
  const token = req.cookies?.uid;
  const user = getUser(token);
  res.user = user;
  next();
}
function checkForAdminUser(req,res,next)
{
        const token = req.cookies.uid;
        

        if(token)
        {
            jwt.verify(token,process.env.JWT_PRIVATE_KEY,(err,decodedData)=>{
                if(err)
                    return res.status(401).end("Unauthorized");
                else if(decodedData.role !== "admin")
                    return res.status(401).end("Unauthorized")
                else
                    next();
            })
        }
        else{
            return res.status(401).end("Not authorized, Token Not found")
        }
        

            
    }
    

module.exports = {
  restrictToLoggedInUser,
  ifAuth,
  checkForAdminUser
};
