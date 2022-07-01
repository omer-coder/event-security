import {ref} from 'vue'
import {projectFirestore} from '@/firebase/config'

const useDocument =  (collection) => {
 
    const error = ref('')
    const isPending = ref(false)

    const deleteDoc = async (id) => {

        error.value = null
        isPending.value = true

        let docRef = await projectFirestore.collection(collection).doc(id)
        try{
            const res = await docRef.delete();
            isPending.value = false
            return res
        }catch(err){
            console.error(err.message)
            error.value = "could not delete Event"
            isPending.value = false
        }
    }

    const updateDoc = async (id , updates) => {

        error.value = null
        isPending.value = true

        let updatedocRef = await projectFirestore.collection(collection).doc(id)

        try{
            const res = await updatedocRef.update( updates )
            isPending.value = false
            return res
        }catch(err){
            console.log(err.message)
            error.value = "could not update Event"
            isPending.value = false
        }

    }


    return { deleteDoc, isPending , error , updateDoc }
}

export default useDocument

