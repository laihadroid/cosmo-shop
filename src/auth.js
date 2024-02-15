import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { redirect } from "next/dist/server/api-utils";

const config = { 
    providers: [GitHub, Google, Credentials({
        credentials:{
            username:{label:"Username"},
            password:{label:"Passsword",type:"password"}
        },

        //async kısım kullanıcıdan alınan username ve passwordu kontrol etmek için, fake restAPI için dummyJson sitesinden fetch kısmını aldık ve düzenledik. Sitede kopyaladığımız kısmın üstündeki user list kısmında yer alan herhangi bir username ve password ile giriş sağlanabilir. 
        async authorize(credentials){
            //console.log(credentials)  
            const res=await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
                })
                if(!res.ok) return null;
                const user=await res.json()
                return user;
                
                        }

    })], //sıralamayı değiştirerek github ve google aşağı alabiliriz
    callbacks:{
        // bu callback mutlaka tanimlanmali
        // middleware icinde aktif hale getirilen route lara her giriste calisir
        // eger bu callback true donerse route icine girlir, yoksa signin sayfasina gidilir
        authorized({request, auth}){
            //console.log(auth)
            //console.log(request.nextUrl)
            const {pathname,searchParams}=request.nextUrl
            //console.log(pathname,searchParams)
            
            //Kullanıcı login sayfasında mı
            const isUserLoggedIn=!!auth?.user
            
            //Kullanıcı login sayfasında mı
            const isUserLoginPage=pathname==="/login";

            if (isUserLoggedIn && isUserLoginPage) {
                const callbackUrl = searchParams.get("callbackUrl");
                const url = new URL(
                    callbackUrl || "/dashboard",
                    request.nextUrl
                );
                return Response.redirect(url);
            }
            
            return isUserLoggedIn
            
        }
    },
    pages:{
        signIn:"/login"
    }
 };

// Oluşturulan config nesnesine göre tüm altyapıyı hazırlayan NextAuth metodudur. Başarılı bir login den sonra giriş yapmış kullanıcının bilgilerine erişmek için auth.js dosyasında export ettiğimiz auth metod kullanılır. Bu metod sadece server component tarafında çalışır.Kullanıcı erişemez
export const { handlers, auth ,signIn, signOut } = NextAuth(config);