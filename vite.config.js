import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/'
})

// export default defineConfig(({command,mode,ssrBuild})=>{
//   console.log(command,mode,ssrBuild);
//   if(mode === 'production')
//     return {plugins: [react()],base:'/vite'}
//   return {plugins: [react()]}
// })

// export default defineConfig(({command,mode})=>{

//   const env = loadEnv(mode,process.cwd(),'APP_');
//   console.log(env);
  
//   return {
//     plugins: [react()],
//     clearScreen:false,
//     envPrefix:'APP_',
//     css: {
//         devSourcemap: true
//     },
//     server:{
//       port:3000
//     },
//     preview:{
//       port:8080
//     },
//     logLevel:'silent'
//   }
// })
