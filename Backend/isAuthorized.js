module.exports = function(req, res, next) {
  console.log(req)
const auth = req.header('Authorization')
  if (auth && auth === 'qazwsx') {
      next()
  } else {
      res.sendStatus(401)
  }
  
}