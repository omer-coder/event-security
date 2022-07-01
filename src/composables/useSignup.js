import {ref} from "vue"
import {projectauth} from '@/firebase/config'

const error = ref(null)
const isPending = ref(false)

const signup = async (displayName , email , password , status) => {
    error.value = null
    isPending.value = true

    try{

        const res = await projectauth.createUserWithEmailAndPassword(email , password)

        if(!res){
            throw new Error("could not complete signup")
        }
        
        await res.user.updateProfile({ displayName })
        await res.user.updateProfile({ photoURL : status })
        
        error.value = null
        isPending.value = false

        return res

    }catch(err){
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }
}

const useSignup = () => {
    return {error , isPending , signup}
}

export default useSignup