import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle';
import Home from './pages/Home/Home';
import Review from './pages/Review/Review';
import Community from './pages/Community/Community';
import News from './pages/News/News';
import SignInForm from './pages/SignIn/SignIn';
import SignupForm from './pages/Signup/Signup';
import Detail from './pages/Detail/Detail';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Liked from './pages/Liked/Liked';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:meetupTitle" element={<Detail />} />
          <Route path="/news" element={<News />} />
          <Route path="/signIn" element={<SignInForm />} />
          <Route path="/signUp" element={<SignupForm />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
