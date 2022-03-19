import React, {useEffect, useState} from 'react';
import ReactNetflixPlayer from "react-netflix-player";
import { useParams } from "react-router-dom";

var axios = require("axios").default;

export default function Watch() {

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

    var elements = document.getElementsByClassName("back");

    var myFunction = function() {
      window.location.href = "/";
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }

  return (
    <ReactNetflixPlayer primaryColor="#A200FF" autoPlay="true" backButton="true" playerLanguage="en" src={videoLink} title="VideoNow" subTitle="Enjoy!" titleMedi="VideoNow" />
  );
}
