import React, {useEffect, useState} from 'react';
import ReactNetflixPlayer from "react-netflix-player";
import { useParams } from "react-router-dom";

var axios = require("axios").default;

export default function Post() {

    const { link } = useParams();
    const [videoLink, SetVideoLink] = useState("");

    var options = {
      method: 'GET',
      url: 'https://pexelsdimasv1.p.rapidapi.com/videos/videos/' + link ,
      headers: {
        authorization: '563492ad6f917000010000012cd96af2d2da43f0931de94fe7734ad2',
        'x-rapidapi-host': 'PexelsdimasV1.p.rapidapi.com',
        'x-rapidapi-key': 'efa42cfc6emsh781d8e3c11cd18cp12188djsn733f5b64c29c'
      }
    };

    useEffect(() => {
      setTimeout(() => {
        axios.request(options).then(function (response) {
          console.log(response.data);
          SetVideoLink(response.data.video_files[0].link);
        }).catch(function (error) {
          console.error(error);
        });
      }, 100);
    }, []);


  return (

    <div>
        <h1 class="text-4xl font-bold p-10">Post</h1>
        <div class="px-10">
            
            <div  class="px-1 hover:duration-300">
                <div class="rounded-xl overflow-hidden shadow-lg bg-black lg:h-1/2 lg:w-1/2">
                    <video  onMouseOver={event => event.target.play()}                   
                            class="rounded h-full w-full"                           
                            muted
                            controls>
                            <source src={videoLink} type="video/mp4" muted />   
                    </video>            
                </div>
            </div>
        </div>
    </div>
  );
}
