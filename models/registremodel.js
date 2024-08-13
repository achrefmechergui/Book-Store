const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


let schemaregister = mongoose.Schema({
    name:String,
    email : String,
    password : String
})


let users = mongoose.model('user',schemaregister)

const url = 'mongodb://localhost:27017/library'



exports.registeradduser = (name,email,password)=>{
return new Promise ((resolve,reject)=>{
    mongoose.connect(url).then(()=>{
        return users.findOne({email:email})
    }).then((user)=>{
        if (user) {
            mongoose.disconnect()
            reject("user exist !!!!")
        }
        else {
          return bcrypt.hash(password,10)
        }
    }).then((hashedpassword)=>{
      return  users.insertMany({name:name,email:email,password:hashedpassword})
    }).then((user)=>{
        mongoose.disconnect()
        resolve("user created successfully !!")
    }).catch((err)=>{
        mongoose.disconnect()
        reject(err)
      
    })
})
}



exports.modellogin = (email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            return users.findOne({email:email})
        }).then((user)=>{
            if (user){
                return bcrypt.compare(password,user.password).then((verify)=>{
                      if(verify){
                        mongoose.disconnect()
                        resolve(user._id)
                      }
                      else {
                        mongoose.disconnect()
                        reject('invalid password')
                      }
                })
            }
            else {
                mongoose.disconnect()
                reject("user not found !!!!")
            }
        }).catch((err)=>{
            mongoose.disconnect()
            console.log(err)
        })
    })
}




// bcrypt.hash() retourne une promesse qui doit être résolue pour obtenir 
// le hachage réel du mot de passe, vous devez attendre cette résolution 
// avant d'insérer le hachage dans votre modèle