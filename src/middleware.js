export { auth as middleware } from "@/auth";
// Bu satir authentication yapisinin tum uygulamada devreye alinmasini saglar
// Eger istenirse config tanimlanarak bu kapsama alani belirlenebilir.
export const config = {
    //matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    matcher: ['/dashboard/:path*', '/login']
};