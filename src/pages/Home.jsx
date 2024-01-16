import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import HeaderSocial from "../components/headerSocial/HeaderSocial";

const Home = () => {
    return (
        <div>
            <HeaderSocial />
            <Header />
            <Banner />
            <Posts />
        </div>
    );
}

export default Home;