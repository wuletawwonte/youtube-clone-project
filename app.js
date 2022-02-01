document.addEventListener("DOMContentLoaded", () => {
    const videos = [
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/xkRmBeP0YnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/1-VEB4NLGMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/4obQiU18ZWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/fUocew3tVhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/qlIbyQyOpwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/wDaOxWxWNDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/F9sw9z8PTYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/dq99Ogf3lb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6jvqXxt3WNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/sIaT8Jl2zpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/3QZqpFQcF5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/7r7fvpneT1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/txwEczUin-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/Hb5ViE4_nIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/NNvrbovTYv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/OU-xpinTHP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    ];
    const rightContainer = document.getElementById("right-container");

    const videoSuggestion = function() {
        return `<div></div>`;
    }

    // rightContainer.innerHTML = "<h2>What the heck</h2>";
})
