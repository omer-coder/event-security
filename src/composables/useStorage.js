import {ref} from 'vue'
import {projectStorage} from '@/firebase/config'
import getUser from './getUser'

const useStorage = () => {

    const error = ref("")
    const url = ref("")
    const filePath = ref("")

    const {user} = getUser()

    const uploadImage = async (file) => {

        filePath.value = `covers/${user.value.uid}/${file.name}`
        const storageRef = projectStorage.ref(filePath.value)

        try{
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL()
        }catch(err){
            console.log(err.message)
            error.value = err.message
        }
    }

    const deleteImage = async (path) => {
        const storageRef = projectStorage.ref(path)

        try{
            await storageRef.delete()
        }catch(err){
            console.log(err.message)
            error.value = err.message
        }
    }

    return { error , url , filePath , uploadImage , deleteImage}
}

export default useStorage