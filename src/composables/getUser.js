import {ref} from "vue"
import {projectauth} from '@/firebase/config'

const user = ref(projectauth.currentUser)

projectauth.onAuthStateChanged((_user) => {
    console.log("user state changed : current user is : " , _user)
    user.value = _user
});

const getUser = () => {
    return { user}
}

export default getUser