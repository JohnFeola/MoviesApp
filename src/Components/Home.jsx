import React from 'react'
import Movie from './Movie'

const Home = () => {
  return (
    <div className='movies'>
        <Movie id={1} name="Lord of The Rings: ROTK" src="https://image.tmdb.org/t/p/original/dNsEaafO4huvqzVrlPuSQWIHOy0.jpg" year='2008'/>
        <Movie id={2} name="Cloud Atlas" src="https://sf-fan.de/wp-content/uploads/2012/10/cloud_atlas_ver2_xxlg.jpg" year='2012'/>
        <Movie id={3} name="Achilles" src="https://i.pinimg.com/736x/23/d6/b3/23d6b3b6bf2d53a690cb1bc46f9cc5fc.jpg" year='2004'/>
        <Movie id={4} name="Django Unchained" src="https://image.tmdb.org/t/p/original/aWdrrXWWejwXFEqiPR1kuK4WvIS.jpg" year='2012'/>
        <Movie id={5} name="Pinnochio" src="https://filmfanatic.org/wp-content/uploads/2011/03/Pinocchio-Poster.png" year='1940'/>
        <Movie id={6} name="Benjamin Button" src="https://images.squarespace-cdn.com/content/5233347fe4b00c95cda9e5d6/1412138997257-P4QCV12CTXL4KID9LYNZ/?content-type=image%2Fpng" year='1999'/>
        <Movie id={7} name="Good Will Hunting" src="https://image.tmdb.org/t/p/original/cRGwIKM1FdDvLCz0kxcNURWtyaS.jpg" year='2002'/>
        <Movie id={8} name="A Beautiful Mind" src="https://img.moviesrankings.com/t/p/w1280/5mFpNMfRQl2GCSus1ijh0COFfwp.jpg" year='2012'/>
    </div>
  )
}

export default Home

// export const moviesData = [
//     {id: 1, title: "Lord of the Rings: Return of the King  ", videoId:"r5X-hFf6Bwo", year: "2008  ", src: "https://image.tmdb.org/t/p/original/dNsEaafO4huvqzVrlPuSQWIHOy0.jpg", summary: lotrRotkSum   , revenue: "$112,345,664"},
// {id: 2, title: "Cloud Atlas",videoId:"hWnAqFyaQ5s",  year: "2012", src: "https://sf-fan.de/wp-content/uploads/2012/10/cloud_atlas_ver2_xxlg.jpg ", summary: cloudAtlasSum   , revenue: "$22,012,234 "},
// {id: 3, title: "Achilles",videoId:"znTLzRJimeY",  year: "2004", src: "https://i.pinimg.com/736x/23/d6/b3/23d6b3b6bf2d53a690cb1bc46f9cc5fc.jpg", summary: achillesSum  , revenue: "$45,000,123"},
// {id: 4, title: "Django Unchained", videoId:"0fUCuvNlOCg", year: "2012", src: "https://image.tmdb.org/t/p/original/aWdrrXWWejwXFEqiPR1kuK4WvIS.jpg", summary: djangoSum , revenue: "$62,012,344"},
// {id: 1, title: "Pinnochio" , videoId: "GBgyVY_ClzQ", year: "1940", src: "https://filmfanatic.org/wp-content/uploads/2011/03/Pinocchio-Poster.png", summary: pinnSum, revenue: "$45,607,876"},
// {id: 1, title: "Benjamin Button" , videoId: "iH6FdW39Hag", year: "2014", src: "https://images.squarespace-cdn.com/content/5233347fe4b00c95cda9e5d6/1412138997257-P4QCV12CTXL4KID9LYNZ/?content-type=image%2Fpng", summary: benSum, revenue: "$45,607,876"},
// {id: 1, title: "Good Will Hunting" , videoId: "ReIJ1lbL-Q8", year: "1999", src: "https://image.tmdb.org/t/p/original/cRGwIKM1FdDvLCz0kxcNURWtyaS.jpg", summary: goodSum, revenue: "$45,607,876"},
// {id: 1, title: "A Beautiful Mind" , videoId: "YWwAOutgWBQ", year: "2002", src: "https://img.moviesrankings.com/t/p/w1280/5mFpNMfRQl2GCSus1ijh0COFfwp.jpg", summary: beautSum, revenue: "$45,607,876"}
// ]


// export const moviesData = [
//     {id: 1, name: "Lord of the Rings: Return of the King  ", videoId:"r5X-hFf6Bwo", year: "2008  ", src: "https://image.tmdb.org/t/p/original/dNsEaafO4huvqzVrlPuSQWIHOy0.jpg", summary: lotrRotkSum   , revenue: "$112,345,664"},
// {id: 2, name: "Cloud Atlas",videoId:"hWnAqFyaQ5s",  year: "2012", src: "https://sf-fan.de/wp-content/uploads/2012/10/cloud_atlas_ver2_xxlg.jpg ", summary: cloudAtlasSum   , revenue: "$22,012,234 "},
// {id: 3, name: "Achilles",videoId:"znTLzRJimeY",  year: "2004", src: "https://i.pinimg.com/736x/23/d6/b3/23d6b3b6bf2d53a690cb1bc46f9cc5fc.jpg", summary: achillesSum  , revenue: "$45,000,123"},
// {id: 4, name: "Django Unchained", videoId:"0fUCuvNlOCg", year: "2012", src: "https://image.tmdb.org/t/p/original/aWdrrXWWejwXFEqiPR1kuK4WvIS.jpg", summary: djangoSum , revenue: "$62,012,344"}
// ]