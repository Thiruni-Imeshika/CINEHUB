
function search() {
    let movieName = document.getElementById("movie");
    if(!movieInput) return;
    let movieName = movieInput.value;
    if (movieName.trim() !== "") {
        localStorage.setItem("targetMovie", movieName);
        window.location.href = "./loaded.html";
    } else {
        alert("Please enter a movie name");
    }
}

window.onload = async function() {
    let movieInput = document.getElementById("movie");

    if (movieInput) {
        movieInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                search();
            }
        });
    }

    let movieName = localStorage.getItem("targetMovie");
    
    let titleElement = document.getElementById("title");

    if (titleElement && movieName) {
        try {
            
            let response = await fetch(`http://localhost:3000/movie?t=${encodeURIComponent(movieName)}`);
            let data = await response.json();

            if (data.Response === "False") {
                titleElement.innerText = "Movie Not Found ";
                return;
            }

    
            titleElement.innerText = data.Title;
            document.getElementById("poster").src = data.Poster !== "N/A" ? data.Poster : "placeholder.jpg";
            document.getElementById("plot").innerText = data.Plot;
            document.getElementById("director").innerHTML = `<span>Director:</span> ${data.Director}`;

    
            let videoContainer = document.getElementById("video-container");
            let trailerLink = document.getElementById("trailer-link");

            if (videoContainer && trailerLink) {
               
                let searchQuery = encodeURIComponent(data.Title + " official trailer");
                trailerLink.href = `https://www.youtube.com/results?search_query=${searchQuery}`;
                
               
                videoContainer.style.display = "block";
            }

        } catch (error) {
            console.error("Error fetching data:", error);
            titleElement.innerText = "Connection Error";
        }

    }
};
