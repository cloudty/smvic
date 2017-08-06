<template>
  <div class="footer">
   <el-row type="flex" class="footer" justify="start" align="middle">
			<el-col :span=20>
				
				<span>© Copyright 2017 SMVIC. All Rights Reserved. </span>
				<span class="cPointer"><router-link to="register">关于我们</router-link></span>
				 
				<span class="cPointer"><router-link to="register">联系我们</router-link></span>
			</el-col>
			
		</el-row>
   
  </div>
</template>

<script>
	
export default {
  name: 'footer',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
		
	}
}

</script>

