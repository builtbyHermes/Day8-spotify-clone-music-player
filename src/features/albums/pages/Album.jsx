// src/features/albums/pages/Album.jsx

import { useParams } from "react-router-dom";


function Album() {


  const { id } = useParams();



  return (

    <div>


      <h1>
        Album Page
      </h1>


      <p>
        Album ID: {id}
      </p>


    </div>

  );

}


export default Album;