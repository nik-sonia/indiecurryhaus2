import Albumsection from "../albumsection/Albumsection";
import Fooddrinks from "../food-drinks/Fooddrinks";
import Footer1 from "../footer1/Footer1";
import Gallerycontent from "../gallerycontent/Gallerycontent";
import Layout from "../layout/Layout";
import Mapsection from "../mapsection/Mapsection";
import Svganimate from "../svganimate/Svganimate";
import Herosection from "./herosection/Herosection";

export default function Home(){
    return(
        <Layout>
            <Herosection/>
            <Albumsection/>
            <Fooddrinks/>
            <Gallerycontent/>
            <Svganimate/>
            <Mapsection/>
           
        </Layout>
    )
}