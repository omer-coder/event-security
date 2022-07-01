<template>
  <div class="">
    <div class="background"></div>
    <div class="alert-box">
        <div class="icon">
            <i class="fas fa-exclamation"></i>
        </div>
        <header>Confirm</header>
        <p>Are you sure you want to permanently delete ?</p>
        <div class="btns">
            <label for="check" @click="handleDelete(Job.id)">Yes , Delete!</label>
            <label for="check" @click="cancel">cancel</label>
        </div>
    </div>
  </div>
</template>

<script>
import useDocument from '@/composables/useDocument'
import getDocument from '@/composables/getDocument'
import {useRouter} from 'vue-router'
export default {
    props: ['id'],
    setup(props , context){

        const {deleteDoc , error} = useDocument('Jobs')

        const {document : Job } = getDocument("Jobs" , props.id)

        const router = useRouter()


        const cancel = () => {
            context.emit("hideModal")
        }

        const handleDelete = async (id) => {

            await deleteDoc(id)

            if(!error.value){
                console.log("job deleted");
                router.push({name : 'Alljobs'})
                context.emit("hideModal")
            }


        }

        return { handleDelete , Job , cancel }
    }

}
</script>

<style scoped>

.alert-box{
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50% , -50%);
    padding : 30px;
    display : flex;
    background : #fff;
    flex-direction : column;
    align-items : center;
    text-align : center;
    max-width : 450px;
    border-radius : 5px;
    z-index: 100;
    opacity : 1;
    transform : translate(-50% , -50%) scale(0.97);
    transition : all 0.3s ease;
}

.background{
    position : absolute;
    height : 100%;
    width : 100%;
    top : 0;
    left : 0;
    background : rgba(0 ,0, 0, 0.5);
    opacity : 1;
    transition : all 0.3s ease;
    z-index : 99;
}

#check{
    display: none;
}

.alert-box .icon{
    height : 100px;
    width : 100px;
    color : #f23b26;
    border : 3px solid #f23b26;
    border-radius : 50%;
    line-height : 97px;
    font-size : 50px; 
}

.alert-box header{
    font-size : 35px;
    font-weight : 500;
    margin : 10px 0;
}

.alert-box p{
    font-size : 20px;
}

.alert-box .btns{
    margin-top : 20px;
}

.btns label{
    display : inline-flex;
    height : 55px;
    padding : 0 30px;
    font-size : 20px;
    font-weight : 400;
    cursor : pointer;
    line-height : 55px;
    outline : none;
    margin : 0 10px;
    border : none;
    color : #fff;
    border-radius : 5px;
    transition : all 0.3 ease;
}

.btns label:first-child{
    background : #2980b9;
}

.btns label:first-child:hover{
    background : #2573a7;
}

.btns label:last-child{
    background : #f23b26;
}

.btns label:last-child:hover{
    background : #d9210d;
}

</style>