import Banner from '../components/Banner'
import homeBannerImg from '../assets/home_banner_img.png'
import Galerie from '../components/Galerie';

function Home() {

  return (
    <div>
      <Banner background={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${homeBannerImg})`}
              content="Chez vous, partout et ailleurs" />
      <Galerie/>

    </div>
  );
}

export default Home;
