import { Navbar } from './../components/Navbar';
import BannerUrl from './../assets/images/banner.jpg';
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <img style={{ width: '100%' }} src={BannerUrl}></img>
    </>
  );
}
