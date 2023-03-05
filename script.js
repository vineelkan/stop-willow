$(document).ready(function() {
    $('#northern').hover(function() {
        $('#region-info').html("The Northern Region of Alaska is home to a wide variety of unique ecosystems, providing shelter for polar bears and caribou. The Willow Project could negatively affect the wildlife along with indigenous communities that rely on subsistence hunting and fishing. The project can also contribute to global warming by increasing carbon dioxide emissions.");
    });
    $('#interior').hover(function() {
        $('#region-info').html('The Interior Region of Alaska has vast stretches of forest and tundra, as well as wetlands and rivers. The Willow Project could negatively affect the region’s water quality and wildlife, including migratory birds and fishes. In addition, the project could disrupt the tourism and recreational industry as it depends on the area’s natural beauty. ');
    });
    $('#southwest').hover(function() {
        $('#region-info').html('The Southwest Region of Alaska is known for its rugged coastlines, remote villages, and abundant marine resources. The Willow Project could negatively affect the region’s fish and wildlife, such as salmon and whales. Additionally, the health and wellbeing of local communities rely on these resources for subsistence and cultural practices.');
    });
    $('#southcentral').hover(function() {
        $('#region-info').html('The Southcentral Region of Alaska is home to Anchorage, the largest city in the state. The city has a diverse range of natural landscapes, including glaciers, mountains, and coastal areas. The Willow Project could negatively affect the region’s tourism industry as many people come to enjoy Alaska’s unique and diverse environment. Furthermore, oil spills or other environmental disasters could harm the health and safety of local communities.');
    });
    $('#southeast').hover(function() {
        $('#region-info').html('The Southeast Region of Alaska has an abundant number of rainforests, glaciers, and marine wildlife. The Willow Project could negatively affect climate change and ocean acidification, bringing harm to aquatic life. Known for its tourism industry, fishing, and cultural heritage, particularly the Tlingit, Haida, and Tsimshian people, the Willow Project could potentially bring great harm to this region. ');
    });
});