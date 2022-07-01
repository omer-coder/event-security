import { ref } from 'vue'
import { projectauth} from '@/firebase/config'

const error = ref('')
const isPending = ref(false)

const login = async (email , password) => {

    error.value = null
    isPending.value = true

    try{
        
        const res = await projectauth.signInWithEmailAndPassword(email, password)
        error.value = null
        isPending.value = false
        return res

    }catch(err){
        console.log(err.message)
        error.value = 'Incorrect User Credentials'
        isPending.value = false
    }

} 

const useLogin = () => {
    return {login , error , isPending }
}

export default useLogin