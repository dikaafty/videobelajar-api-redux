import Header from "../components/header";
import Body from "../components/body";
import Hero from "../components/hero";
import Container from "../components/container";
import CardSectionDesc from "../components/card-section-desc";
import CardSectionTabs from "../components/card-section-tabs";
import Card from "../components/card";
import ListView from "../components/list-view";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import FooterBrandInfo from "../components/footer-brand-info";
import Nav from "../components/nav";
import Divider from "../components/divider";
import FooterBottomBar from "../components/footer-bottom-bar";
import Dialog from "../components/dialog";
import AddCourseBtn from "../components/add-course-btn";
import newsletterBackground from "../assets/images/newsletter-background.jpeg";

const Homepage = () => {
  return (
    <>
      <Header />

      <Body>
        <Hero />

        <Container className="w-full flex flex-col gap-6 sm:gap-8">
          <CardSectionDesc />

          <CardSectionTabs />

          <Container
            className="w-full grid grid-cols-[1fr] sm:grid-cols-[repeat(auto-fit,_minmax(384px,_1fr))]
            grid-rows-[repeat(auto-fit,_minmax(0,_1fr))] place-items-center gap-y-5 sm:gap-y-8 gap-x-6">
              <Card id={1} />
              <Card id={2} />
              <Card id={3} />
              <Card id={4} />
              <Card id={5} />
              <Card id={6} />
              <Card id={7} />
              <Card id={8} />
              <Card id={9} />

              <ListView />
          </Container>
        </Container>

        <Container
          className="w-full h-100 bg-center bg-cover bg-no-repeat rounded-sm px-5 
          shadow-[0_12px_45px_-10px_#003BDE33] flex justify-center items-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${newsletterBackground})` 
          }}>
            <Newsletter />
        </Container>
      </Body>

      <Footer>
        <Container
          className="w-full flex flex-col lg:flex-row justify-between gap-4 sm:gap-8 lg:gap-5">
            <FooterBrandInfo />

            <Container 
              className="h-fit flex flex-col sm:flex-row gap-3 sm:gap-12 max-lg:gap-y-8
              max-lg:flex-wrap max-lg:overflow-y-auto">
                <Nav 
                  navText="Kategori" 
                  navList={["Digital & Teknologi", "Pemasaran",
                  "Manajemen Bisnis", "Pengembangan Diri", "Desain"]} 
                />

                <Nav 
                  navText="Perusahaan" 
                  navList={["Tentang Kami", "FAQ",
                  "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"]} 
                />

                <Nav 
                  navText="Komunitas" 
                  navList={["Tips Sukses", "Blog"]} 
                />
            </Container>
        </Container>

        <Divider />

        <FooterBottomBar />
      </Footer>

      <Dialog />

      <AddCourseBtn />
    </>
  );
}

export default Homepage;