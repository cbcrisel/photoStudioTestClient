export class Utils {
    public static set(key: string, value: any) {
      
        sessionStorage.setItem(key, value);
        
    }

    public static get(key: string) {
         let item=sessionStorage.getItem(key) ;

         return item;
         /* let decrypt=this.decryptData(sessionStorage.getItem(key))
         if(item!=null){

        
        //  console.log('ITEM    '+item);
        //  console.log('DECRIPT '+decrypt)
       
         if(stringify(item).localeCompare(stringify(decrypt))==0 ){
         Utils.set(Constants.ERROR_LOCAL_VARIABLES,'asds');
         }
        }
         return decrypt; */
         
    }
  
    public static delete(key: string) {
        sessionStorage.removeItem(key);
    }

    public static deleteAll() {
        sessionStorage.clear();
    }

    /* private static encryptData(data:any) {

        try {
          return CryptoJS.AES.encrypt(JSON.stringify(data),"prueba123").toString();
        } catch (e) {
          console.log(e);
        }
      }
    
    private static decryptData(data:any) {
    
        try {
          const bytes = CryptoJS.AES.decrypt(data, "prueba123");
          if (bytes.toString()) {
            return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          }
          return data;
        } catch (e) {
        //  console.error(e);
         
        }
      } */
}