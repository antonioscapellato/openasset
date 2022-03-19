import React, {useState, useEffect, useCallback, useRef} from 'react';
import FileSaver from 'file-saver';
import NavBar from '../components/NavBar';
import SuggestionsBar from '../components/SuggestionsBar';
import VideoLoading from '../components/VideoLoading';

var axios = require("axios");
const CancelToken = axios.CancelToken;

function Home() {

  const [dataResult, SetDataResult] = useState([]);
  const [typeSearch, SetTypeSearch] = useState("videos");
  const [searchTerms, SetSearchTerms] = useState("Cat");
  const [searchPage, SetSearchPage] = useState(1);
  const [videosLoading, SetVideosLoading] = useState(false);

  const download = e => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {

          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");

          link.href = url;

          if(typeSearch=="videos")
          {
            link.setAttribute("download", "openasset_photo.mp4"); //or any other extension
          }
          else
          {
            link.setAttribute("download", "openasset_video.png"); //or any other extension
          }
          
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const observer = useRef()

  function handleChange(newValue) {
    if(newValue == "videos" || newValue == "v1")
    {
      SetDataResult([]);
      SetTypeSearch(newValue);
    }
    else
    {
      SetSearchTerms(newValue);
    }    
    
  }

  var options_videos = {
    method: 'GET',
    url: 'https://pexelsdimasv1.p.rapidapi.com/'+typeSearch+'/search',
    params: {query: searchTerms, per_page: '12', page: searchPage},
    headers: {
      authorization: '563492ad6f917000010000012cd96af2d2da43f0931de94fe7734ad2',
      'x-rapidapi-host': 'PexelsdimasV1.p.rapidapi.com',
      'x-rapidapi-key': 'efa42cfc6emsh781d8e3c11cd18cp12188djsn733f5b64c29c'
    }
  };

  useEffect(() => {

    SetDataResult([]);
    SetVideosLoading(true);

  }, [searchTerms])

  useEffect(() => {
    
      SetVideosLoading(true);
      setTimeout(() => {

        let source;

        if(source)
        {
          source.CancelToken();
        }
        
        source = CancelToken.source();
        axios.request(options_videos, {CancelToken: source.token})

            .then(function (response) {

              console.log(response.data);
              //SetdataResult(prevdataResult => prevdataResult + response.data.videos);
              if(typeSearch == "videos")
              {
                SetDataResult(prevdataResult => {
                  return [...new Set([...prevdataResult, ...response.data.videos])]
                });
                
              }
              else
              {
                SetDataResult(prevdataResult => {
                  return [...new Set([...prevdataResult, ...response.data.photos])]
                });
                
              }
              
              SetVideosLoading(false);
            }).catch(function (thrown) {
              if (axios.isCancel(thrown)) {
                console.log('Request canceled', thrown.message);
              } else {
                // handle error
              }
            });
          }, 500);

  }, [searchPage, searchTerms, typeSearch]);


  const lastBookElementRef = useCallback(node => {
    if (videosLoading) return
    if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        SetSearchPage(prevSearchPage => prevSearchPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [VideoLoading])


  return (
      <div>
  
      <NavBar value={searchTerms} onChange={handleChange} />

      <div class="py-20">
        
        <SuggestionsBar value={searchTerms} onClick={handleChange} /> 

        <h1 class="font-bold text-4xl px-10 py-2"><b class="text-blue-600"> {(!searchTerms) ? "Popular" : searchTerms} </b> {(typeSearch == "videos") ? "Videos" : "Photos"}</h1>
        <div class="grid lg:grid-cols-4 lg:gap-3 px-10 py-10">
          

              {          
                  dataResult.map((videoItem, index) => {

                    if((!videosLoading))
                    {
                      if (dataResult.length === index + 1 && searchTerms.length > 0) 
                      { 
                        return (<div ref={lastBookElementRef} key={videoItem}></div>) 
                      } 
                      else if(index == 5 || index == 10 || index == 20 || index == 8)
                      {

                        return (
                                <a key={videoItem} href="mailto:antonio.scape99@gmail.com">
                                  <div  class="px-1 py-10 hover:scale-110 hover:duration-300 ">
                                  <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                      src={process.env.PUBLIC_URL+"ads.png"}
                                    />
                                    <div class="px-6 pt-2 pb-2">
                                      <div class="font-semibold text-xl mb-2"><a class="text-blue-800" target="_blank" href="/">OpenAsset AD</a></div>
                                    </div>
                                  </div>
                                  </div>
                                </a>
                        )

                      }
                      else{

                        if(typeSearch == 'videos')
                        {
  
                          return (

                            <a key={videoItem} href={videoItem.video_files[0].link} target="_blank" download={"openasset_video.mp4"}>
                                <div  class="px-1 py-10 hover:scale-110 hover:duration-300 ">

                                    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                                      <video  onMouseOver={event => event.target.play()}
                                              onMouseOut={event => event.target.pause()}  
                                              class="rounded w-full h-full"
                                              muted>
                                        <source src={videoItem.video_files[0].link} type="video/mp4" muted />
                                        
                                      </video>
                                      
                                      <div class="px-6 pt-2 pb-2">
                                        <div class="font-semibold text-xl mb-2">by <a class="text-blue-800" target="_blank" href={videoItem.user.link}>{videoItem.user.name}</a></div>
                                      </div>
                                    </div>
                                </div>
                            </a>
                          )
                        }
                        else
                        {
                          if(videoItem.src.original)
                          {
                            return (
                            <a key={videoItem} href={videoItem.src.original} target="_blank" onClick={e => download(e)}>
                                <div  class="px-1 py-10 hover:scale-110 hover:duration-300 ">

                                    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                                      <img   
                                              src={videoItem.src.original}
                                              class="rounded w-full h-full"
                                              alt={videoItem.alt}
                                      />
                                      
                                      <div class="px-6 pt-2 pb-2">
                                        <div class="font-semibold text-xl mb-2">by <a class="text-blue-800" target="_blank" href={videoItem.photographer_url}>{videoItem.photographer}</a></div>
                                      </div>
                                    </div>
                                </div>
                            </a>
                          )
                          }
                        }
                      }
                    }
                  })
              }
        
        </div>
        {(videosLoading) ? <VideoLoading /> : ""}
      </div>
      </div>

  );
}

export default Home;
