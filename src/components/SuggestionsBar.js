function SuggestionsBar(props) {

    function handleChange(event) {
          props.onClick(event.target.value);
    }

    const suggestionsResult = [
        {
            title: "Nature",
            value: "Nature"
        },
        {
            title: "Technology",
            value: "Technology"
        },
        {
            title: "Digital",
            value: "Digital"
        },
        {
            title: "Abstract",
            value: "Abstract"
        },
        {
            title: "Anime",
            value: "Anime"
        },
        {
            title: "Ocean",
            value: "Ocean"
        },
        {
            title: "Food",
            value: "Food"
        },
        {
            title: "Stars",
            value: "Stars"
        },
        {
            title: "Party",
            value: "Party"
        },
        {
            title: "People",
            value: "People"
        },
        {
            title: "Mountain",
            value: "Mountain"
        },
        {
            title: "Friends",
            value: "Friends"
        },
        {
            title: "Animals",
            value: "Animals"
        },
        {
            title: "Cat",
            value: "Cat"
        },
        {
            title: "Dog",
            value: "Dog"
        },
        {
            title: "Funny",
            value: "Funny"
        },
        {
            title: "City",
            value: "City"
        }
    ]
  
    return (
      
      <div class="bg-transparent px-4 sm:px-4 py-10 ">
          
          <div class="container flex flex-wrap  items-center mx-auto">  

                {
                    suggestionsResult.map((suggestionItem, index) => {

                        if((Math.floor(Math.random() * 100) >= 50)){
                            return(
                                <button key={index} class="rounded-full py-2 px-4 font-semibold  text-gray-800 bg-white border-2 border-gray-900
                                            hover:bg-gray-900  hover:scale-110 hover:duration-300 mx-2 my-2 hover:border-gray-900 hover:text-white" 
                                        value={suggestionItem.value} onClick={handleChange}>
                                        {suggestionItem.title}
                                </button>
                            )
                        }
                    })
                }
          </div>
      </div>
  
    );
  }
  
  export default SuggestionsBar;