<template>

<div class="m-auto alert" v-if="open"> <v-alert type="success" top class="justify-center"> {{open}} </v-alert> </div>
<div class="max-w-2xl  my-8 m-2 lg:mx-auto  md:mx-auto bg-white p-10 padding_responsive  shadow-lg form_register">
  <v-icon @click="goBack" class="arrow ">mdi-arrow-left</v-icon>
 
 <svg
            class="mb-4 responsive    lg:mx-0 md:mx-auto sm:mx-auto"
            width="125"
            height="43"
            viewBox="0 0 125 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="125" height="43" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_119_116"
                  transform="translate(-0.000970874) scale(0.0016699 0.00485437)"
                />
              </pattern>
              <image
                id="image0_119_116"
                width="600"
                height="206"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>
	<form @submit.prevent="submit" >
    <div class="grid gap-6 mb-6 lg:grid-cols-2">
        
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome Completo</label>
            <input type="text" v-model="usuario.name" id="first_name" class="input_type  text-sm rounded-lg    block w-full p-2.5 " placeholder="digite seu nome" required>
        </div>
        <div class="flex">
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Data de nascimento</label>
            <input type="date" v-model="usuario.data_nascimento" id="last_name" class="  input_type1  text-sm rounded-lg   block w-full p-2.5 " placeholder=" Nascimento " required>

        </div>
        <div>
            <label for="sex" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sexo</label>
            <select name="sex" id="sex" class="select_input" v-model="usuario.sex">
              
              
              <option>Masculino</option>
              <option>Feminino</option>
            
            </select>
            
            
        </div>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Documento</label>
            <input type="text" v-model="usuario.document" id="company" class="input_type   text-sm  block w-full p-2.5 " placeholder="digite um documento válido" required>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cel</label>
            <input type="tel" v-model="usuario.phone" id="phone" class="input_type  block w-full p-2.5 " placeholder="(xx) xxxx-xxxx "  required>
        </div>
        <div>
            <label for="mail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
            <input type="email" v-model="usuario.email" id="mail" class="input_type border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-300 dark:focus:border-cyan-300" placeholder="examplo@digite.com" required>
        </div>
        
  <div>
      
      <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Situação</label>
      <div class="flex">
      <div class="form-check">
      <!-- <input type="radio" id="one" value="ATIVO" v-model="usuario.situation">
      <label for="one">ATIVO</label> -->
      <input class="form-check-input  rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-cyan-300 checked:border-cyan-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="ativo" value="ATIVO" v-model="usuario.situation">
      <label class="form-check-label inline-block text-gray-800" for="ativo">
        Ativo
      </label>
  </div>
    <div class="form-check">
      <!-- <input class="bg:cyan-300" type="radio" id="two" value="INATIVO" v-model="usuario.situation">
      <label for="two">INATIVO</label> -->
      <input class="form-check-input  rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-cyan-300 checked:border-cyan-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="inativo" value="INATIVO"  v-model="usuario.situation" >
      <label class="form-check-label inline-block text-gray-800" for="inativo">
       Inativo
      </label>
    </div>
    </div>
  </div>

    </div>
    
    <div class="grid gap-6 mb-10 lg:grid-cols-2  ">
    
    <div class="mb-6">
        <label for="plano" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tipo de Plano</label>
        <input type="text" v-model="usuario.plan" id="plano" class="input_type border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-300 dark:focus:border-cyan-300" placeholder="superclass"  required>
    </div> 
    <div>
        <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cidade</label>
        <input type="text" v-model="usuario.city" id="city" class=" border input_type1  text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder=" Cuiabá " required>

    </div>

    <div>
        <label for="accommodation" class="block mb-2 text-sm font-medium text-gray-900 ">Acomodação</label>
        <select name="sex" id="sex" class="select_input" v-model="usuario.accommodation">
          
              <option>Apartamento</option>
              <option>Enfermaria</option>
            
            </select>
            
   
    </div>




    </div>
    
    
    
   
    <button type="submit" class="botaoCadastrar text-bold">Enviar</button>
</form>



</div>







</template>

<script>
import { db } from '@/firebase'

import { collection, addDoc } from 'firebase/firestore'

export default {
  data() {
    return {
      usuario: {
        name: '',

        document: '',

        data_nascimento: '',

        phone: '',

        email: '',

        situation: '',

            plan:"",

            city:"",

            sex:"",

            accommodation:"",


      },
      open: ''
    }
  
  },
 methods: {
    submit() {
      addDoc(collection(db, 'register'), this.usuario)
        .then(docRef => {
          console.log('Document written with ID: ', docRef.id)


                    this.usuario.accommodation = ''
                    this.usuario.city = ''
                    this.usuario.data_nascimento =  ''
                    this.usuario.document = ''
                    this.usuario.email = ''
                    this.usuario.name = ''
                    this.usuario.phone = ''

                    this.usuario.plan = ''

                    this.usuario.sex = ''

                    this.usuario.situation = ''
    
                    
                    this.open = "Cliente Cadastrado com sucesso!", setTimeout(()=>{ this.open = '' },2000)
        }) 
        .catch(error => {
          console.error('Error adding document: ', error)
        })

    

   },

    goBack() {   this.$router.go(-1) } ,

  },

 
}

</script>

<style scoped>

.alert{

  position: fixed;
  top: 0;
  width: 100%;

}

.arrow{
  text-align: left;
  margin-bottom: 30px;
  color:  #63e1fd;;
}


.arrow:active{
  transform: translate(0em, 0.2em);
}
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}

.botaoCadastrar {
  font-size: 17px;
  padding: 0.5em 2em;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background: #63e1fd;
  color: white;
  border-radius: 4px;
}

.botaoCadastrar:hover {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #63e1fd, rgba(0, 212, 255, 1) 100%);
}

.botaoCadastrar:active {
  transform: translate(0em, 0.2em);
}

.form_register {
  border: 2px solid #63e1fd;
  border-radius: 20px;
  
 
}

.input_type{
  
  background: #F0F5F7;
  border-radius: 10px;
  width: 260px;
  height: 45px;
  margin-right: 34px;
   color: #333333;

}



.input_type1{
  background: #F0F5F7;
  border-radius: 10px;
  width: 150px;
  height: 45px;
  margin-right: 34px;
  color: #333333;
}

.select_input{
  background: #F0F5F7;
  border-radius: 10px;
  width: 120px;
  height: 45px;
  color: #333333;
  
  
}

.select_input:focus {
  outline: none !important;
  border-color: #63e1fd;
  box-shadow: 0 0 10px #63e1fd;
}

.form-check{

  padding-left: 45px;
}

@media (max-width: 640px) {

.responsive{

  margin: auto;
}

.padding_responsive{

  padding: 20px;
}

 }



.input_type:focus {
  outline: none !important;
  border-color: #63e1fd;
  box-shadow: 0 0 10px #63e1fd;
}

.input_type1:focus {
  outline: none !important;
  border-color: #63e1fd;
  box-shadow: 0 0 10px #63e1fd;
}


</style>
