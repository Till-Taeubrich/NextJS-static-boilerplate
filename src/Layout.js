import Header from './Sections/Layout/SectionHeader/Header';
import Footer from './Sections/Layout/SectionFooter/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
