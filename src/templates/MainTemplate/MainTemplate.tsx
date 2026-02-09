import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

type MainTemplateProps = {
  children: React.ReactNode;
};
export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
