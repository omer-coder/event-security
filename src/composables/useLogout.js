import {ref} from 'vue'
import {projectauth} from '@/firebase/config'

const error = ref('')
const isPending = ref(false)

const logout = async () => {
    
    error.value = null
    isPending.value = true

    try{
    
        await projectauth.signOut()
        isPending.value = false
    
    }catch(err){
        
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    
    }
}

const useLogout = () => {
    return {error , isPending , logout}
}

export default useLogout