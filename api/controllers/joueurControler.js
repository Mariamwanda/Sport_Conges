import users from "../Models/users.js";
import bcrypt from "bcrypt"

class data {
    static async addUser(req,res){
        try{
            const {nom,prenom,email,password} = req.body
            const recEmail = users.findOne({email})
            if(recEmail){
                return res.json({message: "Ce Email existe!!"})
            }
            const User = await users.create({nom,prenom,email,password})
            res.status(200).json({message: "Enregistreé avec succès!",User})
        }catch(error){
           console.error(error);
        }
    }
  static async getUsers(req,res){
    try{
        const AllUser = users.find({})
        res.satus(200).json(AllUser)
    }catch(error){
        console.error(error);
    }
  }

    static async Login (){
        try{
            const {email,password} = req.body
            if(!email || !password){
               return res.json({message:"veuillez renseignez les deux champs"})
            }
            const recEmail = users.findOne({email})
            if(!recEmail){
              return res.json({message : "email incorecte"})
            }
           const auth = await bcrypt.compare(password,recEmail.password)
           if(!auth){
            return res.json({message : "mot de passe incorecte"})
          }
          res.status(200).json({message:'Effectué avec succès',success:true})
        }catch(error){
            console.error(error);
        }
    }
}

export default data