import Container from "@/components/layouts/Container";
import Header from "@/components/layouts/Header";

export default function Home() {
  return (
    <div className="h-screen bg-[url('/assets/home/background-home-mobile.jpg')] overflow-hidden bg-cover text-white">
      <Container>
        <Header />
      </Container>
    </div>
  );
}
