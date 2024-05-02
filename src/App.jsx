import { Helmet } from 'react-helmet-async';
import LandingPage from './components/LandingPage';
import LandingPageNavabar from './components/LandingPageNavbar';

function App() {

  return (
    <div>
        <Helmet>
        <title>YT SHOPS | For Creators, By Creators</title>
        <meta
          name="description"
          content="Introducing YT Shops: Your One-Stop Shop for Creators Welcome to YT Shops, a dedicated platform specifically designed to cater to the needs of creative professionals like yourself. Whether you are a graphic designer, video editor, web developer, influencer, or any other type of content creator, YT Shops is your one-stop shop for valuable resources."
        />
      </Helmet>
      <LandingPageNavabar />
      <LandingPage />
    </div>
  )
}

export default App
