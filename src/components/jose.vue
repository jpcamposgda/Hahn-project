<template>
     <div class="flex flex-col">
        <label for="accommodation"  >Acomodação</label>
        <select name="sex" id="sex" v-model="jose_diego" >
          
              <option>
                CPF
                </option>
              <option>
                CNPJ
              </option>
            
            </select>
            
   
    </div>

    <div class="">
        <input type="text" class="border" placeholder="CPF" v-if="jose_diego === 'CPF'" >
        <input type="text" class="border" placeholder="nome" v-if="jose_diego === 'CPF'" >
        <div class=" flex flex-col-2">
        <input type="text" class="border" placeholder="telefone" v-if="jose_diego === 'CPF'" >
        <input type="text" class="border" placeholder="email cliente" v-if="jose_diego === 'CPF'" >
        </div>
        <input type="text" class="border" placeholder="local da empresa" v-if="jose_diego === 'CNPJ'"  >
        <input type="text" class="border" placeholder="email da empresa" v-if="jose_diego === 'CNPJ'"  >
        <input type="text" class="border" placeholder="numero da empresa" v-if="jose_diego === 'CNPJ'"  >
        <input type="text" class="border" placeholder="razao social" v-if="jose_diego === 'CNPJ'"  >
        
    </div>
</template>


<script>
    export default {
  data() {
    return {
        jose_diego:'',
        
        
    }
    },

   

    }
</script>