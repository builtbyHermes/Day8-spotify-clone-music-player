// src/features/home/pages/Home.jsx

import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import RecentlyPlayed from "../components/RecentlyPlayed/RecentlyPlayed";
import AlbumGrid from "../components/AlbumGrid/AlbumGrid";
import PlaylistGrid from "../components/PlaylistGrid/PlaylistGrid";
import ArtistGrid from "../components/ArtistGrid/ArtistGrid";
import RecommendationSection from "../components/RecommendationSection/RecommendationSection";

import useHome from "../hooks/useHome";

function Home() {

  const {
    hero,
    featuredAlbums,
    featuredPlaylists,
    popularArtists,
    recentlyPlayed,
    recommendations,
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

      <Hero hero={hero} />

      <Section title="Recently Played">
        <RecentlyPlayed
          songs={recentlyPlayed}
        />
      </Section>

      <Section title="Featured Albums">
        <AlbumGrid
          albums={featuredAlbums}
        />
      </Section>

      <Section title="Made For You">
        <PlaylistGrid
          playlists={featuredPlaylists}
        />
      </Section>

      <Section title="Popular Artists">
        <ArtistGrid
          artists={popularArtists}
        />
      </Section>

      <RecommendationSection
        recommendations={recommendations}
      />

    </>
  );
}

export default Home;