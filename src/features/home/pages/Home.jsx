// src/features/home/pages/Home.jsx

import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import AlbumGrid from "../components/AlbumGrid/AlbumGrid";
import PlaylistGrid from "../components/PlaylistGrid/PlaylistGrid";

import useHome from "../hooks/useHome";



function Home() {


  const {

    hero,

    featuredPlaylists,

    newReleases,

    loading,

    error,


  } = useHome();




  if (loading) {

    return <p>Loading...</p>;

  }



  if (error) {

    return <p>Something went wrong.</p>;

  }




  return (

    <>


      <Hero

        hero={hero}

      />




      <Section title="Featured Playlists">


        <PlaylistGrid

          playlists={featuredPlaylists}

        />


      </Section>





      <Section title="New Releases">


        <AlbumGrid

          albums={newReleases}

        />


      </Section>



    </>

  );

}



export default Home;