import {ref } from "vue"
import {projectFirestore} from '@/firebase/config'

const useCollection = (collection) => {

    const error = ref('')
    const isPending = ref(false)

    const addDoc = async (doc) => {
        error.value = null
        isPending.value = true

        try{
            const res2 = await projectFirestore.collection(collection).add(doc)
            isPending.value = false
            return res2
        }catch(err){
            console.log(err.message)
            error.value = "could not send the data"
            isPending.value = false
        }
    }

    return {addDoc , error , isPending }
}

export default useCollection