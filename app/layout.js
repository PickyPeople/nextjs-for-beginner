import Navigation from "../components/navigation";
// import SalesLayout from "./about-us/company/jobs/sales/layout";
// import AboutUSLayout from "./about-us/layout";
export const metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: 'The best movies on the best frameworks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}


//경로가 3000/about-us/company/jobs/sales 일때
{/* <Layout>
  <AboutUSLayout>
    <SalesLayout>
      <Sales />
    </SalesLayout>
  </AboutUSLayout>
</Layout> */}

//이러한 형식으로 레이아웃을 완성한다.