import videos from "./videos.js";

document.addEventListener("DOMContentLoaded", () => {
    const videoSuggestion = function (video) {
        return `            
        <div class="suggestion">
            ${video.thumbnail}
            <div class="suggestion-detail">
                <span>${video.title}</span>
                <p>${video.channel}</p>
            </div>
        </div>
        `;
    };

    const suggestionContent = videos.map((video) => {
        return videoSuggestion(video);
    }).join("<br>");

    const rightContainer = document.getElementById("right-container");

    rightContainer.innerHTML = suggestionContent;
});
