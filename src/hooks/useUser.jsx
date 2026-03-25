import { useState,useEffect } from "react";
import { addMak,updatepro,removepro,mak} from "../services/useservice";
export function useUser(){
    const [user, setUser] = useState([])
    useEffect(() => {
        mak().then(res=>setUser(res.data))
    }, [])
    const refrech=()=>{
        mak().then(res=>setUser(res.data))
    }
    const addmark=async(data)=>{
       await addMak(data).then(res=>res.data)
       refrech()
    }
    const updat=async(id,data)=>{
       await updatepro(id,data).then(res=>res.data)
       refrech()
    }
    const remove=async(id)=>{
        await removepro(id).then(res=>res.data)
        refrech()
    }
    return{
        user,
        addmark,
        updat,
        remove
    }
}