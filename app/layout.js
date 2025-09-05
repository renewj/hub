export const metadata={
  title:'Hello Next',
  description:'Hello World'
};

export default function RootLayout({children}){
  return(
    <html>
    <body style={{margin:0,fontfamily:'arial'}}>
    {children}
    </body>
    </html>
  );
}
