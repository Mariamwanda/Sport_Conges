import { model,Schema} from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema(
    {
        nom:{
            type:String,
            required:true,
        },
        prenom:{
            type:String,
            required:true,
        },
        categorie:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
)

userSchema.pre("save",async function(){
  this.password = await bcrypt.hash(this.password,10)
})

export default model("users",userSchema)