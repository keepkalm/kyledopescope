import { o as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Share2, c as Image$1, d as Aperture, i as ThumbsDown, l as Download, o as RefreshCw, r as ThumbsUp, s as Maximize2, t as X, u as Crosshair } from "../_libs/lucide-react.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ChkBIKCA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Recognizable public-domain pictures.
* NASA files are US government work. Museum files are CC0 or public domain.
*/
var GALLERY = [
	{
		id: "moonwalk",
		label: "Moonwalk",
		credit: "NASA",
		src: "/gallery/moonwalk.jpg",
		page: "https://en.wikipedia.org/wiki/Apollo_11"
	},
	{
		id: "earthrise",
		label: "Earthrise",
		credit: "NASA",
		src: "/gallery/earthrise.jpg",
		page: "https://en.wikipedia.org/wiki/Earthrise"
	},
	{
		id: "marble",
		label: "Blue Marble",
		credit: "NASA",
		src: "/gallery/marble.jpg",
		page: "https://en.wikipedia.org/wiki/The_Blue_Marble"
	},
	{
		id: "pillars",
		label: "Pillars of Creation",
		credit: "NASA / ESA",
		src: "/gallery/pillars.jpg",
		page: "https://en.wikipedia.org/wiki/Pillars_of_Creation"
	},
	{
		id: "saturn",
		label: "Saturn",
		credit: "NASA / JPL",
		src: "/gallery/saturn.jpg",
		page: "https://en.wikipedia.org/wiki/Saturn"
	},
	{
		id: "mona-lisa",
		label: "Mona Lisa",
		credit: "Leonardo da Vinci",
		src: "/gallery/mona-lisa.jpg",
		page: "https://en.wikipedia.org/wiki/Mona_Lisa"
	},
	{
		id: "starry-night",
		label: "Starry Night",
		credit: "Vincent van Gogh",
		src: "/gallery/starry-night.jpg",
		page: "https://en.wikipedia.org/wiki/The_Starry_Night"
	},
	{
		id: "sunflowers",
		label: "Sunflowers",
		credit: "Vincent van Gogh",
		src: "/gallery/sunflowers.jpg",
		page: "https://en.wikipedia.org/wiki/Sunflowers_(Van_Gogh_series)"
	},
	{
		id: "cafe-terrace",
		label: "Café Terrace at Night",
		credit: "Vincent van Gogh",
		src: "/gallery/cafe-terrace.jpg",
		page: "https://en.wikipedia.org/wiki/Caf%C3%A9_Terrace_at_Night"
	},
	{
		id: "bedroom",
		label: "The Bedroom",
		credit: "Vincent van Gogh",
		src: "/gallery/bedroom.jpg",
		page: "https://en.wikipedia.org/wiki/Bedroom_in_Arles"
	},
	{
		id: "irises",
		label: "Irises",
		credit: "Vincent van Gogh",
		src: "/gallery/irises.jpg",
		page: "https://en.wikipedia.org/wiki/Irises_(painting)"
	},
	{
		id: "almond-blossom",
		label: "Almond Blossom",
		credit: "Vincent van Gogh",
		src: "/gallery/almond-blossom.jpg",
		page: "https://en.wikipedia.org/wiki/Almond_Blossoms"
	},
	{
		id: "great-wave",
		label: "The Great Wave",
		credit: "Katsushika Hokusai",
		src: "/gallery/great-wave.jpg",
		page: "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa"
	},
	{
		id: "pearl-earring",
		label: "Girl with a Pearl Earring",
		credit: "Johannes Vermeer",
		src: "/gallery/pearl-earring.jpg",
		page: "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring"
	},
	{
		id: "milkmaid",
		label: "The Milkmaid",
		credit: "Johannes Vermeer",
		src: "/gallery/milkmaid.jpg",
		page: "https://en.wikipedia.org/wiki/The_Milkmaid_(Vermeer)"
	},
	{
		id: "astronomer",
		label: "The Astronomer",
		credit: "Johannes Vermeer",
		src: "/gallery/astronomer.jpg",
		page: "https://en.wikipedia.org/wiki/The_Astronomer_(Vermeer)"
	},
	{
		id: "birth-of-venus",
		label: "Birth of Venus",
		credit: "Sandro Botticelli",
		src: "/gallery/birth-of-venus.jpg",
		page: "https://en.wikipedia.org/wiki/The_Birth_of_Venus"
	},
	{
		id: "primavera",
		label: "Primavera",
		credit: "Sandro Botticelli",
		src: "/gallery/primavera.jpg",
		page: "https://en.wikipedia.org/wiki/Primavera_(Botticelli)"
	},
	{
		id: "creation-of-adam",
		label: "Creation of Adam",
		credit: "Michelangelo",
		src: "/gallery/creation-of-adam.jpg",
		page: "https://en.wikipedia.org/wiki/The_Creation_of_Adam"
	},
	{
		id: "school-of-athens",
		label: "The School of Athens",
		credit: "Raphael",
		src: "/gallery/school-of-athens.jpg",
		page: "https://en.wikipedia.org/wiki/The_School_of_Athens"
	},
	{
		id: "vitruvian",
		label: "Vitruvian Man",
		credit: "Leonardo da Vinci",
		src: "/gallery/vitruvian.jpg",
		page: "https://en.wikipedia.org/wiki/Vitruvian_Man"
	},
	{
		id: "the-scream",
		label: "The Scream",
		credit: "Edvard Munch",
		src: "/gallery/the-scream.jpg",
		page: "https://en.wikipedia.org/wiki/The_Scream"
	},
	{
		id: "the-kiss",
		label: "The Kiss",
		credit: "Gustav Klimt",
		src: "/gallery/the-kiss.jpg",
		page: "https://en.wikipedia.org/wiki/The_Kiss_(Klimt)"
	},
	{
		id: "wanderer",
		label: "Wanderer above the Sea of Fog",
		credit: "Caspar David Friedrich",
		src: "/gallery/wanderer.jpg",
		page: "https://en.wikipedia.org/wiki/Wanderer_above_the_Sea_of_Fog"
	},
	{
		id: "water-lilies",
		label: "Water Lilies",
		credit: "Claude Monet",
		src: "/gallery/water-lilies.jpg",
		page: "https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)"
	},
	{
		id: "impression-sunrise",
		label: "Impression, Sunrise",
		credit: "Claude Monet",
		src: "/gallery/impression-sunrise.jpg",
		page: "https://en.wikipedia.org/wiki/Impression,_Sunrise"
	},
	{
		id: "parasol",
		label: "Woman with a Parasol",
		credit: "Claude Monet",
		src: "/gallery/parasol.jpg",
		page: "https://en.wikipedia.org/wiki/Woman_with_a_Parasol_%E2%80%93_Madame_Monet_and_Her_Son"
	},
	{
		id: "grande-jatte",
		label: "A Sunday on La Grande Jatte",
		credit: "Georges Seurat",
		src: "/gallery/grande-jatte.jpg",
		page: "https://en.wikipedia.org/wiki/A_Sunday_Afternoon_on_the_Island_of_La_Grande_Jatte"
	},
	{
		id: "boating-party",
		label: "Luncheon of the Boating Party",
		credit: "Pierre-Auguste Renoir",
		src: "/gallery/boating-party.jpg",
		page: "https://en.wikipedia.org/wiki/Luncheon_of_the_Boating_Party"
	},
	{
		id: "night-watch",
		label: "The Night Watch",
		credit: "Rembrandt",
		src: "/gallery/night-watch.jpg",
		page: "https://en.wikipedia.org/wiki/The_Night_Watch"
	},
	{
		id: "las-meninas",
		label: "Las Meninas",
		credit: "Diego Velázquez",
		src: "/gallery/las-meninas.jpg",
		page: "https://en.wikipedia.org/wiki/Las_Meninas"
	},
	{
		id: "arnolfini",
		label: "Arnolfini Portrait",
		credit: "Jan van Eyck",
		src: "/gallery/arnolfini.jpg",
		page: "https://en.wikipedia.org/wiki/Arnolfini_Portrait"
	},
	{
		id: "earthly-delights",
		label: "Garden of Earthly Delights",
		credit: "Hieronymus Bosch",
		src: "/gallery/earthly-delights.jpg",
		page: "https://en.wikipedia.org/wiki/The_Garden_of_Earthly_Delights"
	},
	{
		id: "babel",
		label: "The Tower of Babel",
		credit: "Pieter Bruegel the Elder",
		src: "/gallery/babel.jpg",
		page: "https://en.wikipedia.org/wiki/The_Tower_of_Babel_(Bruegel)"
	},
	{
		id: "hunters",
		label: "Hunters in the Snow",
		credit: "Pieter Bruegel the Elder",
		src: "/gallery/hunters.jpg",
		page: "https://en.wikipedia.org/wiki/The_Hunters_in_the_Snow"
	},
	{
		id: "liberty",
		label: "Liberty Leading the People",
		credit: "Eugène Delacroix",
		src: "/gallery/liberty.jpg",
		page: "https://en.wikipedia.org/wiki/Liberty_Leading_the_People"
	},
	{
		id: "napoleon",
		label: "Napoleon Crossing the Alps",
		credit: "Jacques-Louis David",
		src: "/gallery/napoleon.jpg",
		page: "https://en.wikipedia.org/wiki/Napoleon_Crossing_the_Alps"
	},
	{
		id: "washington",
		label: "Washington Crossing the Delaware",
		credit: "Emanuel Leutze",
		src: "/gallery/washington.jpg",
		page: "https://en.wikipedia.org/wiki/Washington_Crossing_the_Delaware_(1851_painting)"
	},
	{
		id: "temeraire",
		label: "The Fighting Temeraire",
		credit: "J. M. W. Turner",
		src: "/gallery/temeraire.jpg",
		page: "https://en.wikipedia.org/wiki/The_Fighting_Temeraire"
	},
	{
		id: "ophelia",
		label: "Ophelia",
		credit: "John Everett Millais",
		src: "/gallery/ophelia.jpg",
		page: "https://en.wikipedia.org/wiki/Ophelia_(painting)"
	},
	{
		id: "shalott",
		label: "The Lady of Shalott",
		credit: "John William Waterhouse",
		src: "/gallery/shalott.jpg",
		page: "https://en.wikipedia.org/wiki/The_Lady_of_Shalott_(painting)"
	},
	{
		id: "the-swing",
		label: "The Swing",
		credit: "Jean-Honoré Fragonard",
		src: "/gallery/the-swing.jpg",
		page: "https://en.wikipedia.org/wiki/The_Swing_(Fragonard)"
	},
	{
		id: "olympia",
		label: "Olympia",
		credit: "Édouard Manet",
		src: "/gallery/olympia.jpg",
		page: "https://en.wikipedia.org/wiki/Olympia_(Manet)"
	},
	{
		id: "gleaners",
		label: "The Gleaners",
		credit: "Jean-François Millet",
		src: "/gallery/gleaners.jpg",
		page: "https://en.wikipedia.org/wiki/The_Gleaners"
	},
	{
		id: "moulin-rouge",
		label: "At the Moulin Rouge",
		credit: "Henri de Toulouse-Lautrec",
		src: "/gallery/moulin-rouge.jpg",
		page: "https://en.wikipedia.org/wiki/At_the_Moulin_Rouge"
	},
	{
		id: "whistlers-mother",
		label: "Whistler's Mother",
		credit: "James McNeill Whistler",
		src: "/gallery/whistlers-mother.jpg",
		page: "https://en.wikipedia.org/wiki/Whistler%27s_Mother"
	},
	{
		id: "american-gothic",
		label: "American Gothic",
		credit: "Grant Wood",
		src: "/gallery/american-gothic.jpg",
		page: "https://en.wikipedia.org/wiki/American_Gothic"
	},
	{
		id: "black-square",
		label: "Black Square",
		credit: "Kazimir Malevich",
		src: "/gallery/black-square.jpg",
		page: "https://en.wikipedia.org/wiki/Black_Square_(painting)"
	},
	{
		id: "migrant-mother",
		label: "Migrant Mother",
		credit: "Dorothea Lange",
		src: "/gallery/migrant-mother.jpg",
		page: "https://en.wikipedia.org/wiki/Migrant_Mother"
	},
	{
		id: "lincoln",
		label: "Abraham Lincoln",
		credit: "Alexander Gardner",
		src: "/gallery/lincoln.jpg",
		page: "https://en.wikipedia.org/wiki/Abraham_Lincoln"
	},
	{
		id: "virgin-rocks",
		label: "Virgin of the Rocks",
		credit: "Leonardo da Vinci",
		src: "/gallery/virgin-rocks.jpg",
		page: "https://en.wikipedia.org/wiki/Virgin_of_the_Rocks"
	},
	{
		id: "last-supper",
		label: "The Last Supper",
		credit: "Giampietrino, after Leonardo da Vinci",
		src: "/gallery/last-supper.jpg",
		page: "https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo)"
	},
	{
		id: "wheat-cypresses",
		label: "Wheat Field with Cypresses",
		credit: "Vincent van Gogh",
		src: "/gallery/wheat-cypresses.jpg",
		page: "https://www.metmuseum.org/art/collection/search/436535"
	},
	{
		id: "self-portrait-gogh",
		label: "Self-Portrait with a Straw Hat (obverse: The Potato Peeler)",
		credit: "Vincent van Gogh",
		src: "/gallery/self-portrait-gogh.jpg",
		page: "https://www.metmuseum.org/art/collection/search/436532"
	},
	{
		id: "madame-x",
		label: "Madame X (Virginie Amélie Avegno Gautreau)",
		credit: "John Singer Sargent",
		src: "/gallery/madame-x.jpg",
		page: "https://www.metmuseum.org/art/collection/search/12127"
	},
	{
		id: "gulf-stream",
		label: "The Gulf Stream",
		credit: "Winslow Homer",
		src: "/gallery/gulf-stream.jpg",
		page: "https://www.metmuseum.org/art/collection/search/11122"
	},
	{
		id: "water-lilies-aic",
		label: "Water Lilies (Agapanthus)",
		credit: "Claude Monet",
		src: "/gallery/water-lilies-aic.jpg",
		page: "https://clevelandart.org/art/1960.81"
	},
	{
		id: "asnieres",
		label: "Study for 'Bathers at Asnières'",
		credit: "Georges Seurat",
		src: "/gallery/asnieres.jpg",
		page: "https://clevelandart.org/art/1958.51"
	},
	{
		id: "dance-class",
		label: "The Dance Class",
		credit: "Edgar Degas",
		src: "/gallery/dance-class.jpg",
		page: "https://www.metmuseum.org/art/collection/search/438817"
	},
	{
		id: "ballet-rehearsal",
		label: "The Rehearsal of the Ballet Onstage",
		credit: "Edgar Degas",
		src: "/gallery/ballet-rehearsal.jpg",
		page: "https://www.metmuseum.org/art/collection/search/436155"
	},
	{
		id: "card-players",
		label: "The Card Players",
		credit: "Paul Cézanne",
		src: "/gallery/card-players.jpg",
		page: "https://www.metmuseum.org/art/collection/search/435868"
	},
	{
		id: "sainte-victoire",
		label: "Mont Sainte-Victoire and the Viaduct of the Arc River Valley",
		credit: "Paul Cézanne",
		src: "/gallery/sainte-victoire.jpg",
		page: "https://www.metmuseum.org/art/collection/search/435877"
	},
	{
		id: "apples",
		label: "Still Life with Apples and a Pot of Primroses",
		credit: "Paul Cézanne",
		src: "/gallery/apples.jpg",
		page: "https://www.metmuseum.org/art/collection/search/435882"
	},
	{
		id: "melencolia",
		label: "Melencolia I",
		credit: "Albrecht Dürer",
		src: "/gallery/melencolia.jpg",
		page: "https://www.metmuseum.org/art/collection/search/336228"
	},
	{
		id: "nasa-pia14417",
		label: "Weighing in on the Dumbbell Nebula",
		credit: "NASA",
		src: "/gallery/nasa-pia14417.jpg",
		page: "https://images.nasa.gov/details/PIA14417"
	},
	{
		id: "nasa-pia04216",
		label: "Ant Nebula",
		credit: "NASA",
		src: "/gallery/nasa-pia04216.jpg",
		page: "https://images.nasa.gov/details/PIA04216"
	},
	{
		id: "nasa-gsfc-20171208-archive-e001465",
		label: "Planetary Nebula",
		credit: "NASA",
		src: "/gallery/nasa-gsfc-20171208-archive-e001465.jpg",
		page: "https://images.nasa.gov/details/GSFC_20171208_Archive_e001465"
	},
	{
		id: "nasa-pia04220",
		label: "Trifid Nebula",
		credit: "NASA",
		src: "/gallery/nasa-pia04220.jpg",
		page: "https://images.nasa.gov/details/PIA04220"
	},
	{
		id: "nasa-pia04225",
		label: "N44C nebula",
		credit: "NASA",
		src: "/gallery/nasa-pia04225.jpg",
		page: "https://images.nasa.gov/details/PIA04225"
	},
	{
		id: "nasa-pia15658",
		label: "NGC 7293, the Helix Nebula",
		credit: "NASA",
		src: "/gallery/nasa-pia15658.jpg",
		page: "https://images.nasa.gov/details/PIA15658"
	},
	{
		id: "nasa-pia07902",
		label: "Planetary Nebula NGC 7293 also Known as the Helix Nebula",
		credit: "NASA",
		src: "/gallery/nasa-pia07902.jpg",
		page: "https://images.nasa.gov/details/PIA07902"
	},
	{
		id: "nasa-hubble-sees-the-wings-of-a-butterfly-the-twin-je",
		label: "The Twin Jet Nebula",
		credit: "NASA",
		src: "/gallery/nasa-hubble-sees-the-wings-of-a-butterfly-the-twin-je.jpg",
		page: "https://images.nasa.gov/details/hubble-sees-the-wings-of-a-butterfly-the-twin-jet-nebula_20283986193_o"
	},
	{
		id: "nasa-pia04200",
		label: "Doradus Nebula",
		credit: "NASA",
		src: "/gallery/nasa-pia04200.jpg",
		page: "https://images.nasa.gov/details/PIA04200"
	},
	{
		id: "nasa-pia04226",
		label: "Ghost Head Nebula",
		credit: "NASA",
		src: "/gallery/nasa-pia04226.jpg",
		page: "https://images.nasa.gov/details/PIA04226"
	},
	{
		id: "nasa-pia04227",
		label: "Orion Nebula and Bow Shock",
		credit: "NASA",
		src: "/gallery/nasa-pia04227.jpg",
		page: "https://images.nasa.gov/details/PIA04227"
	},
	{
		id: "nasa-pia04215",
		label: "Horsehead Nebula",
		credit: "NASA",
		src: "/gallery/nasa-pia04215.jpg",
		page: "https://images.nasa.gov/details/PIA04215"
	},
	{
		id: "nasa-pia04921",
		label: "Andromeda Galaxy",
		credit: "NASA",
		src: "/gallery/nasa-pia04921.jpg",
		page: "https://images.nasa.gov/details/PIA04921"
	},
	{
		id: "nasa-pia04634",
		label: "Galaxy NGC5474",
		credit: "NASA",
		src: "/gallery/nasa-pia04634.jpg",
		page: "https://images.nasa.gov/details/PIA04634"
	},
	{
		id: "nasa-pia07906",
		label: "Virgo Galaxy Cluster",
		credit: "NASA",
		src: "/gallery/nasa-pia07906.jpg",
		page: "https://images.nasa.gov/details/PIA07906"
	},
	{
		id: "nasa-pia04623",
		label: "Galaxy UGC10445",
		credit: "NASA",
		src: "/gallery/nasa-pia04623.jpg",
		page: "https://images.nasa.gov/details/PIA04623"
	},
	{
		id: "nasa-pia04635",
		label: "Galaxy NGC5962",
		credit: "NASA",
		src: "/gallery/nasa-pia04635.jpg",
		page: "https://images.nasa.gov/details/PIA04635"
	},
	{
		id: "nasa-pia04633",
		label: "Galaxy NGC5398",
		credit: "NASA",
		src: "/gallery/nasa-pia04633.jpg",
		page: "https://images.nasa.gov/details/PIA04633"
	},
	{
		id: "nasa-pia15656",
		label: "Portrait of a Galaxy Life",
		credit: "NASA",
		src: "/gallery/nasa-pia15656.jpg",
		page: "https://images.nasa.gov/details/PIA15656"
	},
	{
		id: "nasa-pia04629",
		label: "Galaxy Messier 83",
		credit: "NASA",
		src: "/gallery/nasa-pia04629.jpg",
		page: "https://images.nasa.gov/details/PIA04629"
	},
	{
		id: "nasa-pia04624",
		label: "Galaxy Centaurus A",
		credit: "NASA",
		src: "/gallery/nasa-pia04624.jpg",
		page: "https://images.nasa.gov/details/PIA04624"
	},
	{
		id: "nasa-pia04923",
		label: "Galaxy NGC 55",
		credit: "NASA",
		src: "/gallery/nasa-pia04923.jpg",
		page: "https://images.nasa.gov/details/PIA04923"
	},
	{
		id: "nasa-pia20695",
		label: "Frankenstein Galaxy",
		credit: "NASA",
		src: "/gallery/nasa-pia20695.jpg",
		page: "https://images.nasa.gov/details/PIA20695"
	},
	{
		id: "nasa-as12-46-6728",
		label: "Apollo 12 Mission image - Dark view of Astronaut Alan L. Bean climbing down the ladder of the Lunar Module (LM)",
		credit: "NASA",
		src: "/gallery/nasa-as12-46-6728.jpg",
		page: "https://images.nasa.gov/details/as12-46-6728"
	},
	{
		id: "nasa-s70-45521",
		label: "Astronaut Stuart A. Roosa, Apollo 14 Command Module pilot",
		credit: "NASA",
		src: "/gallery/nasa-s70-45521.jpg",
		page: "https://images.nasa.gov/details/S70-45521"
	},
	{
		id: "nasa-afrc2019-0244-18",
		label: "Former Apollo Astronaut Vance Brand",
		credit: "NASA",
		src: "/gallery/nasa-afrc2019-0244-18.jpg",
		page: "https://images.nasa.gov/details/AFRC2019-0244-18"
	},
	{
		id: "nasa-as17-162-24053",
		label: "Astronauts Evans and Cernan aboard the Apollo 17 spacecraft",
		credit: "NASA",
		src: "/gallery/nasa-as17-162-24053.jpg",
		page: "https://images.nasa.gov/details/as17-162-24053"
	},
	{
		id: "nasa-s70-45232",
		label: "Astronaut Alan B. Shepard Jr., Apollo 14 mission commander",
		credit: "NASA",
		src: "/gallery/nasa-s70-45232.jpg",
		page: "https://images.nasa.gov/details/S70-45232"
	},
	{
		id: "nasa-s67-37714",
		label: "Apollo astronaut geology training in Iceland - S67-37714",
		credit: "NASA",
		src: "/gallery/nasa-s67-37714.jpg",
		page: "https://images.nasa.gov/details/S67-37714"
	},
	{
		id: "nasa-as17-162-24049",
		label: "Astronaut Eugene Cernan sleeping aboard Apollo 17 spacecraft",
		credit: "NASA",
		src: "/gallery/nasa-as17-162-24049.jpg",
		page: "https://images.nasa.gov/details/as17-162-24049"
	},
	{
		id: "cma-1915-534",
		label: "Nathaniel Hurd",
		credit: "John Singleton Copley",
		src: "/gallery/cma-1915-534.jpg",
		page: "https://clevelandart.org/art/1915.534"
	},
	{
		id: "cma-1921-1239",
		label: "Portrait of Dora Wheeler",
		credit: "William Merritt Chase",
		src: "/gallery/cma-1921-1239.jpg",
		page: "https://clevelandart.org/art/1921.1239"
	},
	{
		id: "cma-1922-1133",
		label: "Stag at Sharkey's",
		credit: "George Bellows",
		src: "/gallery/cma-1922-1133.jpg",
		page: "https://clevelandart.org/art/1922.1133"
	},
	{
		id: "cma-1927-1984",
		label: "The Biglin Brothers Turning the Stake",
		credit: "Thomas Eakins",
		src: "/gallery/cma-1927-1984.jpg",
		page: "https://clevelandart.org/art/1927.1984"
	},
	{
		id: "cma-1928-8",
		label: "The Race Track (Death on a Pale Horse)",
		credit: "Albert Pinkham Ryder",
		src: "/gallery/cma-1928-8.jpg",
		page: "https://clevelandart.org/art/1928.8"
	},
	{
		id: "cma-1962-2",
		label: "Mme L . . . (Laure Borreau)",
		credit: "Gustave Courbet",
		src: "/gallery/cma-1962-2.jpg",
		page: "https://clevelandart.org/art/1962.2"
	},
	{
		id: "cma-1958-31",
		label: "Adeline Ravoux",
		credit: "Vincent van Gogh",
		src: "/gallery/cma-1958-31.jpg",
		page: "https://clevelandart.org/art/1958.31"
	},
	{
		id: "cma-1917-1335",
		label: "View of Schroon Mountain, Essex County, New York, After a Storm",
		credit: "Thomas Cole",
		src: "/gallery/cma-1917-1335.jpg",
		page: "https://clevelandart.org/art/1917.1335"
	},
	{
		id: "cma-1958-39",
		label: "The Red Kerchief",
		credit: "Claude Monet",
		src: "/gallery/cma-1958-39.jpg",
		page: "https://clevelandart.org/art/1958.39"
	},
	{
		id: "cma-1946-83",
		label: "Frieze of Dancers",
		credit: "Edgar Degas",
		src: "/gallery/cma-1946-83.jpg",
		page: "https://clevelandart.org/art/1946.83"
	},
	{
		id: "cma-1927-393",
		label: "Elizabeth Shewell West and Her Son, Raphael",
		credit: "Benjamin West",
		src: "/gallery/cma-1927-393.jpg",
		page: "https://clevelandart.org/art/1927.393"
	},
	{
		id: "cma-1999-173",
		label: "Portrait of Tieleman Roosterman",
		credit: "Frans Hals",
		src: "/gallery/cma-1999-173.jpg",
		page: "https://clevelandart.org/art/1999.173"
	},
	{
		id: "cma-1958-425",
		label: "Hunting near Hartenfels Castle",
		credit: "Lucas Cranach",
		src: "/gallery/cma-1958-425.jpg",
		page: "https://clevelandart.org/art/1958.425"
	},
	{
		id: "cma-1954-392",
		label: "A Genoese Lady with Her Child",
		credit: "Anthony van Dyck",
		src: "/gallery/cma-1954-392.jpg",
		page: "https://clevelandart.org/art/1954.392"
	},
	{
		id: "cma-1976-2",
		label: "The Crucifixion of Saint Andrew",
		credit: "Caravaggio",
		src: "/gallery/cma-1976-2.jpg",
		page: "https://clevelandart.org/art/1976.2"
	},
	{
		id: "cma-1942-647",
		label: "The Burning of the Houses of Lords and Commons, 16 October 1834",
		credit: "Joseph Mallord William Turner",
		src: "/gallery/cma-1942-647.jpg",
		page: "https://clevelandart.org/art/1942.647"
	},
	{
		id: "cma-1978-63",
		label: "In the Waves (Dans les Vagues)",
		credit: "Paul Gauguin",
		src: "/gallery/cma-1978-63.jpg",
		page: "https://clevelandart.org/art/1978.63"
	},
	{
		id: "cma-1959-190",
		label: "Diana and Her Nymphs Departing for the Hunt",
		credit: "Peter Paul Rubens",
		src: "/gallery/cma-1959-190.jpg",
		page: "https://clevelandart.org/art/1959.190"
	},
	{
		id: "cma-1956-578",
		label: "Sunny Autumn Day",
		credit: "George Inness",
		src: "/gallery/cma-1956-578.jpg",
		page: "https://clevelandart.org/art/1956.578"
	},
	{
		id: "cma-1944-90",
		label: "Portrait of a Woman",
		credit: "Rembrandt van Rijn",
		src: "/gallery/cma-1944-90.jpg",
		page: "https://clevelandart.org/art/1944.90"
	},
	{
		id: "cma-1947-209",
		label: "The Large Plane Trees (Road Menders at Saint-Rémy)",
		credit: "Vincent van Gogh",
		src: "/gallery/cma-1947-209.jpg",
		page: "https://clevelandart.org/art/1947.209"
	},
	{
		id: "cma-1961-39",
		label: "View of Florence",
		credit: "Thomas Cole",
		src: "/gallery/cma-1961-39.jpg",
		page: "https://clevelandart.org/art/1961.39"
	},
	{
		id: "cma-1972-48",
		label: "Branch Hill Pond, Hampstead",
		credit: "John Constable",
		src: "/gallery/cma-1972-48.jpg",
		page: "https://clevelandart.org/art/1972.48"
	},
	{
		id: "cma-1967-63",
		label: "Low Waterfall in a Wooded Landscape with a Dead Beech Tree",
		credit: "Jacob van Ruisdael",
		src: "/gallery/cma-1967-63.jpg",
		page: "https://clevelandart.org/art/1967.63"
	},
	{
		id: "cma-1926-1976",
		label: "Violette Heymann",
		credit: "Odilon Redon",
		src: "/gallery/cma-1926-1976.jpg",
		page: "https://clevelandart.org/art/1926.1976"
	},
	{
		id: "cma-1951-356",
		label: "Edge of the Woods Near L'Hermitage, Pontoise",
		credit: "Camille Pissarro",
		src: "/gallery/cma-1951-356.jpg",
		page: "https://clevelandart.org/art/1951.356"
	},
	{
		id: "cma-1998-168",
		label: "Portrait of Lisa Colt Curtis",
		credit: "John Singer Sargent",
		src: "/gallery/cma-1998-168.jpg",
		page: "https://clevelandart.org/art/1998.168"
	},
	{
		id: "cma-1966-49",
		label: "Wrestlers in a Circus",
		credit: "Ernst Ludwig Kirchner",
		src: "/gallery/cma-1966-49.jpg",
		page: "https://clevelandart.org/art/1966.49"
	},
	{
		id: "cma-1921-428",
		label: "Elizabeth Beltzhoover Mason",
		credit: "Gilbert Stuart",
		src: "/gallery/cma-1921-428.jpg",
		page: "https://clevelandart.org/art/1921.428"
	},
	{
		id: "cma-1963-91",
		label: "La Cervara, the Roman Campagna",
		credit: "Jean Baptiste Camille Corot",
		src: "/gallery/cma-1963-91.jpg",
		page: "https://clevelandart.org/art/1963.91"
	},
	{
		id: "cma-1942-645",
		label: "Portrait of the Ladies Amabel and Mary Jemima Yorke",
		credit: "Joshua Reynolds",
		src: "/gallery/cma-1942-645.jpg",
		page: "https://clevelandart.org/art/1942.645"
	},
	{
		id: "cma-1922-684",
		label: "Mount Starr King, Yosemite",
		credit: "Albert Bierstadt",
		src: "/gallery/cma-1922-684.jpg",
		page: "https://clevelandart.org/art/1922.684"
	},
	{
		id: "cma-1971-101",
		label: "Danaë",
		credit: "Orazio Gentileschi",
		src: "/gallery/cma-1971-101.jpg",
		page: "https://clevelandart.org/art/1971.101"
	},
	{
		id: "cma-1924-195",
		label: "Early Morning After a Storm at Sea",
		credit: "Winslow Homer",
		src: "/gallery/cma-1924-195.jpg",
		page: "https://clevelandart.org/art/1924.195"
	},
	{
		id: "cma-1936-19",
		label: "The Pigeon Tower at Bellevue",
		credit: "Paul Cezanne",
		src: "/gallery/cma-1936-19.jpg",
		page: "https://clevelandart.org/art/1936.19"
	},
	{
		id: "cma-1958-32",
		label: "Two Poplars in the Alpilles near Saint-Rémy",
		credit: "Vincent van Gogh",
		src: "/gallery/cma-1958-32.jpg",
		page: "https://clevelandart.org/art/1958.32"
	},
	{
		id: "cma-1942-1065",
		label: "Romaine Lacaux",
		credit: "Pierre-Auguste Renoir",
		src: "/gallery/cma-1942-1065.jpg",
		page: "https://clevelandart.org/art/1942.1065"
	},
	{
		id: "cma-1943-392",
		label: "The Call",
		credit: "Paul Gauguin",
		src: "/gallery/cma-1943-392.jpg",
		page: "https://clevelandart.org/art/1943.392"
	},
	{
		id: "cma-1934-29",
		label: "Virgin and Child",
		credit: "Hans Memling",
		src: "/gallery/cma-1934-29.jpg",
		page: "https://clevelandart.org/art/1934.29"
	},
	{
		id: "cma-1966-13",
		label: "Antiochus and Stratonice",
		credit: "Jean-Auguste-Dominique Ingres",
		src: "/gallery/cma-1966-13.jpg",
		page: "https://clevelandart.org/art/1966.13"
	},
	{
		id: "cma-1952-17",
		label: "George III",
		credit: "Benjamin West",
		src: "/gallery/cma-1952-17.jpg",
		page: "https://clevelandart.org/art/1952.17"
	},
	{
		id: "cma-1926-247",
		label: "The Holy Family with Mary Magdalen",
		credit: "El Greco",
		src: "/gallery/cma-1926-247.jpg",
		page: "https://clevelandart.org/art/1926.247"
	},
	{
		id: "cma-1926-25",
		label: "Orpheus",
		credit: "Odilon Redon",
		src: "/gallery/cma-1926-25.jpg",
		page: "https://clevelandart.org/art/1926.25"
	},
	{
		id: "cma-1971-166",
		label: "Terminus, the Device of Erasmus",
		credit: "Hans Holbein the Younger",
		src: "/gallery/cma-1971-166.jpg",
		page: "https://clevelandart.org/art/1971.166"
	},
	{
		id: "cma-1919-1018",
		label: "British Manufactory; A Sketch",
		credit: "Benjamin West",
		src: "/gallery/cma-1919-1018.jpg",
		page: "https://clevelandart.org/art/1919.1018"
	},
	{
		id: "cma-1947-207",
		label: "Portrait of Isabella Brant",
		credit: "Peter Paul Rubens",
		src: "/gallery/cma-1947-207.jpg",
		page: "https://clevelandart.org/art/1947.207"
	},
	{
		id: "cma-1975-263",
		label: "The Large Tree",
		credit: "Paul Gauguin",
		src: "/gallery/cma-1975-263.jpg",
		page: "https://clevelandart.org/art/1975.263"
	},
	{
		id: "cma-1944-524",
		label: "The Brierwood Pipe",
		credit: "Winslow Homer",
		src: "/gallery/cma-1944-524.jpg",
		page: "https://clevelandart.org/art/1944.524"
	},
	{
		id: "cma-1926-1653",
		label: "On the Beach, No. 3",
		credit: "Maurice Prendergast",
		src: "/gallery/cma-1926-1653.jpg",
		page: "https://clevelandart.org/art/1926.1653"
	},
	{
		id: "cma-1965-15",
		label: "Portrait of the Jester Calabazas",
		credit: "Diego Velázquez",
		src: "/gallery/cma-1965-15.jpg",
		page: "https://clevelandart.org/art/1965.15"
	},
	{
		id: "cma-1958-20",
		label: "The Brook",
		credit: "Paul Cezanne",
		src: "/gallery/cma-1958-20.jpg",
		page: "https://clevelandart.org/art/1958.20"
	},
	{
		id: "cma-1942-644",
		label: "A Young Man with a Chain",
		credit: "Rembrandt van Rijn",
		src: "/gallery/cma-1942-644.jpg",
		page: "https://clevelandart.org/art/1942.644"
	},
	{
		id: "cma-1967-215",
		label: "Composition with Red, Yellow, and Blue",
		credit: "Piet Mondrian",
		src: "/gallery/cma-1967-215.jpg",
		page: "https://clevelandart.org/art/1967.215"
	},
	{
		id: "cma-1927-437",
		label: "Madame Désiré Raoul-Rochette",
		credit: "Jean-Auguste-Dominique Ingres",
		src: "/gallery/cma-1927-437.jpg",
		page: "https://clevelandart.org/art/1927.437"
	},
	{
		id: "cma-1929-13",
		label: "Fighting Horses",
		credit: "Théodore Géricault",
		src: "/gallery/cma-1929-13.jpg",
		page: "https://clevelandart.org/art/1929.13"
	},
	{
		id: "cma-1964-420",
		label: "Panoramic View of the Alps, Les Dents du Midi",
		credit: "Gustave Courbet",
		src: "/gallery/cma-1964-420.jpg",
		page: "https://clevelandart.org/art/1964.420"
	},
	{
		id: "cma-1925-1409",
		label: "Monsieur Boileau at the Café",
		credit: "Henri de Toulouse-Lautrec",
		src: "/gallery/cma-1925-1409.jpg",
		page: "https://clevelandart.org/art/1925.1409"
	},
	{
		id: "cma-1930-23",
		label: "Capriccio: A Palace with a Courtyard by the Lagoon",
		credit: "Antonio Canaletto",
		src: "/gallery/cma-1930-23.jpg",
		page: "https://clevelandart.org/art/1930.23"
	},
	{
		id: "cma-1971-2",
		label: "Portrait of George Pitt, First Baron Rivers",
		credit: "Thomas Gainsborough",
		src: "/gallery/cma-1971-2.jpg",
		page: "https://clevelandart.org/art/1971.2"
	},
	{
		id: "cma-1958-34",
		label: "Berthe Morisot with a Muff",
		credit: "Édouard Manet",
		src: "/gallery/cma-1958-34.jpg",
		page: "https://clevelandart.org/art/1958.34"
	},
	{
		id: "cma-1954-128",
		label: "Boy with Anchor",
		credit: "Winslow Homer",
		src: "/gallery/cma-1954-128.jpg",
		page: "https://clevelandart.org/art/1954.128"
	},
	{
		id: "cma-1916-1044",
		label: "Gardener's House at Antibes",
		credit: "Claude Monet",
		src: "/gallery/cma-1916-1044.jpg",
		page: "https://clevelandart.org/art/1916.1044"
	},
	{
		id: "cma-1943-657",
		label: "Invocation to Love",
		credit: "Jean-Honoré Fragonard",
		src: "/gallery/cma-1943-657.jpg",
		page: "https://clevelandart.org/art/1943.657"
	},
	{
		id: "cma-1958-21",
		label: "Mount Sainte-Victoire",
		credit: "Paul Cezanne",
		src: "/gallery/cma-1958-21.jpg",
		page: "https://clevelandart.org/art/1958.21"
	},
	{
		id: "cma-1958-54",
		label: "May Belfort",
		credit: "Henri de Toulouse-Lautrec",
		src: "/gallery/cma-1958-54.jpg",
		page: "https://clevelandart.org/art/1958.54"
	},
	{
		id: "cma-1958-25",
		label: "Paul Lafond and Alphonse Cherfils Examining a Painting",
		credit: "Edgar Degas",
		src: "/gallery/cma-1958-25.jpg",
		page: "https://clevelandart.org/art/1958.25"
	},
	{
		id: "cma-1949-439",
		label: "Head of a Tahitian Woman",
		credit: "Paul Gauguin",
		src: "/gallery/cma-1949-439.jpg",
		page: "https://clevelandart.org/art/1949.439"
	},
	{
		id: "cma-1970-161",
		label: "Point Judith, Rhode Island",
		credit: "Martin Johnson Heade",
		src: "/gallery/cma-1970-161.jpg",
		page: "https://clevelandart.org/art/1970.161"
	},
	{
		id: "cma-1970-160",
		label: "Virgin and Child with the Young Saint John the Baptist",
		credit: "Sandro Botticelli",
		src: "/gallery/cma-1970-160.jpg",
		page: "https://clevelandart.org/art/1970.160"
	},
	{
		id: "cma-1984-59",
		label: "Rocky, Wooded Landscape with a Dell and Weir",
		credit: "Thomas Gainsborough",
		src: "/gallery/cma-1984-59.jpg",
		page: "https://clevelandart.org/art/1984.59"
	}
];
var KEY = "kaleido-votes-v1";
function keyOf(item) {
	return [
		item.photo,
		item.segments,
		item.fold,
		item.filter,
		Math.round(item.zoom * 100),
		Math.round(item.aimX * 100),
		Math.round(item.aimY * 100),
		item.hue
	].join("|");
}
function readAll() {
	if (typeof window === "undefined") return {};
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" ? parsed : {};
	} catch {
		return {};
	}
}
function writeAll(votes) {
	localStorage.setItem(KEY, JSON.stringify(votes));
}
function voteFor(item) {
	return readAll()[keyOf(item)]?.vote ?? null;
}
/** Save a vote, or clear it when the same thumb is pressed again. */
function toggleVote(item, vote) {
	const all = readAll();
	const key = keyOf(item);
	if (all[key]?.vote === vote) {
		delete all[key];
		writeAll(all);
		return null;
	}
	all[key] = {
		...item,
		vote,
		at: Date.now()
	};
	writeAll(all);
	return vote;
}
function readTaste() {
	const all = Object.values(readAll());
	const photoUp = /* @__PURE__ */ new Set();
	const photoDown = /* @__PURE__ */ new Set();
	const segUp = [];
	const foldUp = [];
	const blocked = /* @__PURE__ */ new Set();
	for (const record of all) if (record.vote === "up") {
		photoUp.add(record.photo);
		segUp.push(record.segments);
		foldUp.push(record.fold);
	} else {
		photoDown.add(record.photo);
		blocked.add(keyOf(record));
	}
	for (const id of photoUp) photoDown.delete(id);
	return {
		photoUp,
		photoDown,
		segUp,
		foldUp,
		blocked
	};
}
var TAU$1 = Math.PI * 2;
function clamp(v, lo, hi) {
	return Math.max(lo, Math.min(hi, v));
}
var SEGS = [
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	12,
	14,
	16
];
var FILTERS = [
	"none",
	"saturate(1.18)",
	"saturate(1.15) sepia(0.4)",
	"hue-rotate(24deg) saturate(1.12)",
	"hue-rotate(200deg) saturate(1.2)",
	"contrast(1.08) saturate(0.9)"
];
var OPENING = {
	photo: "moonwalk",
	label: "Moonwalk",
	credit: "NASA",
	page: "https://en.wikipedia.org/wiki/Apollo_11",
	segments: 8,
	spin: .35,
	aimX: .48,
	aimY: .36,
	zoom: 2.35,
	filter: "none",
	hue: 32,
	fold: "mirror"
};
function pickWeighted(items, weights) {
	const total = weights.reduce((sum, weight) => sum + weight, 0);
	if (total <= 0) return items[Math.floor(Math.random() * items.length)] ?? items[0];
	let cursor = Math.random() * total;
	for (let i = 0; i < items.length; i++) {
		cursor -= weights[i] ?? 0;
		if (cursor <= 0) return items[i];
	}
	return items[items.length - 1];
}
function rollPhoto(exclude) {
	const taste = readTaste();
	const photos = GALLERY.filter((item) => item.id !== exclude);
	const pool = photos.length ? photos : GALLERY;
	return {
		taste,
		photo: pickWeighted(pool, pool.map((item) => {
			if (taste.photoUp.has(item.id)) return 5;
			if (taste.photoDown.has(item.id)) return .22;
			return 1;
		})) ?? GALLERY[0]
	};
}
function rollGeometry(prevSegments) {
	const taste = readTaste();
	const segs = SEGS.filter((n) => n !== prevSegments);
	const likedSegs = taste.segUp.filter((n) => n !== prevSegments);
	const segments = likedSegs.length && Math.random() < .55 ? likedSegs[Math.floor(Math.random() * likedSegs.length)] ?? 8 : segs[Math.floor(Math.random() * segs.length)] ?? 8;
	const likedFolds = taste.foldUp.filter((fold) => fold === "mirror" || fold === "fan");
	const fold = likedFolds.length && Math.random() < .6 ? likedFolds[Math.floor(Math.random() * likedFolds.length)] : Math.random() < .72 ? "mirror" : "fan";
	return {
		segments,
		spin: Math.random() * TAU$1,
		aimX: .3 + Math.random() * .4,
		aimY: .28 + Math.random() * .44,
		zoom: 2.05 + Math.random() * .85,
		filter: FILTERS[Math.floor(Math.random() * FILTERS.length)] ?? "none",
		hue: Math.floor(Math.random() * 360),
		fold
	};
}
var ORBIT = .14;
function liveAim(turn, arrangement) {
	return {
		aimX: clamp(arrangement.aimX + Math.sin(turn * .55) * ORBIT, .06, .94),
		aimY: clamp(arrangement.aimY + Math.cos(turn * .42) * ORBIT, .06, .94)
	};
}
/** Store the aim so the live focus, including the scroll drift, lands on this point. */
function aimFromPoint(turn, x, y) {
	return {
		aimX: clamp(x - Math.sin(turn * .55) * ORBIT, .06, .94),
		aimY: clamp(y - Math.cos(turn * .42) * ORBIT, .06, .94)
	};
}
/** New point on the same picture. The mirrors, zoom, and color stay. */
function rollCenter(current) {
	return {
		...current,
		aimX: .3 + Math.random() * .4,
		aimY: .28 + Math.random() * .44
	};
}
function rollImage(current) {
	const { taste, photo } = rollPhoto(current.photo);
	const next = {
		...current,
		photo: photo.id,
		label: photo.label,
		credit: photo.credit,
		page: photo.page
	};
	if (!taste.blocked.has(keyOf(next))) return next;
	for (let attempt = 0; attempt < 6; attempt++) {
		const retry = rollPhoto(current.photo).photo;
		const candidate = {
			...current,
			photo: retry.id,
			label: retry.label,
			credit: retry.credit,
			page: retry.page
		};
		if (!taste.blocked.has(keyOf(candidate))) return candidate;
	}
	return next;
}
/** New mirrors, crop, and color. The picture stays. */
function rollMirrors(current) {
	const taste = readTaste();
	const draft = () => ({
		...current,
		...rollGeometry(current.segments)
	});
	let next = draft();
	for (let attempt = 0; attempt < 6 && taste.blocked.has(keyOf(next)); attempt++) next = draft();
	return next;
}
function rollArrangement(prev) {
	const { taste, photo } = rollPhoto(prev?.photo);
	const geometry = rollGeometry(prev?.segments);
	const draft = (shot = photo) => ({
		photo: shot.id,
		label: shot.label,
		credit: shot.credit,
		page: shot.page,
		segments: geometry.segments,
		spin: Math.random() * TAU$1,
		aimX: .3 + Math.random() * .4,
		aimY: .28 + Math.random() * .44,
		zoom: 2.05 + Math.random() * .85,
		filter: geometry.filter,
		hue: geometry.hue,
		fold: geometry.fold
	});
	let next = draft();
	for (let attempt = 0; attempt < 6 && taste.blocked.has(keyOf(next)); attempt++) next = draft(rollPhoto(prev?.photo).photo);
	return next;
}
/** `turn` is radians of scroll. One viewport of scroll is about two-thirds of a turn. */
function poseFrom(turn, arrangement) {
	const wrapped = (turn % TAU$1 + TAU$1) % TAU$1;
	const aim = liveAim(turn, arrangement);
	return {
		x: wrapped / TAU$1,
		chapter: arrangement.photo,
		segments: arrangement.segments,
		rotation: arrangement.spin + turn,
		lock: 0,
		ink: 0,
		inkHue: arrangement.hue,
		wash: `hsla(${arrangement.hue}, 42%, 46%, 0.16)`,
		photos: [{
			id: arrangement.photo,
			alpha: 1,
			filter: arrangement.filter,
			aimX: aim.aimX,
			aimY: aim.aimY
		}],
		word: null,
		credit: null,
		reveal: 0,
		fold: arrangement.fold,
		zoom: arrangement.zoom
	};
}
function mirrorAngle(a, i, segments, rotation) {
	const sector = TAU$1 / segments;
	let ang = a % TAU$1;
	if (ang < 0) ang += TAU$1;
	const k = Math.floor(ang / sector);
	const local = ang - k * sector;
	const folded = k % 2 === 1 ? sector - local : local;
	return i * sector + (i % 2 === 1 ? sector - folded : folded) + rotation;
}
function paintRibbon(ctx, view, pose, which, alpha, width) {
	const n = 72;
	const pts = [];
	const spin = pose.x * 7.4 + which * 1.65;
	for (let i = 0; i <= n; i++) {
		const t = i / n;
		const rn = clamp(.05 + Math.sin(Math.PI * t) ** .92 * (.4 + which * .16), .04, .96);
		const a = spin + t * (1.15 + which * .48) + Math.sin(t * TAU$1 + which * 1.3) * .2;
		pts.push({
			rn,
			a
		});
	}
	const { cx, cy, radius } = view;
	const hue = pose.inkHue + which * 28 + pose.x * 24;
	ctx.beginPath();
	for (let s = 0; s < pose.segments; s++) {
		let drawing = false;
		let px = 0;
		let py = 0;
		for (const p of pts) {
			const ang = mirrorAngle(p.a, s, pose.segments, pose.rotation);
			const x = cx + Math.cos(ang) * p.rn * radius;
			const y = cy + Math.sin(ang) * p.rn * radius;
			if (!drawing) {
				ctx.moveTo(x, y);
				drawing = true;
			} else if (Math.hypot(x - px, y - py) > radius * .55) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
			px = x;
			py = y;
		}
	}
	ctx.strokeStyle = `hsla(${hue}, 78%, 70%, ${alpha * .22})`;
	ctx.lineWidth = width * 3.2;
	ctx.stroke();
	ctx.strokeStyle = `hsla(${hue}, 84%, 66%, ${alpha})`;
	ctx.lineWidth = width;
	ctx.stroke();
}
function paintShot(ctx, view, pose, shot, img) {
	if (!img.complete || img.naturalWidth < 1 || shot.alpha < .02) return;
	const { cx, cy, radius } = view;
	const sector = TAU$1 / pose.segments;
	const side = radius * pose.zoom;
	const cover = Math.max(side / img.naturalWidth, side / img.naturalHeight);
	const dw = img.naturalWidth * cover;
	const dh = img.naturalHeight * cover;
	const left = clamp(-shot.aimX * dw, radius - dw, -radius);
	const top = clamp(-shot.aimY * dh, radius - dh, -radius);
	ctx.save();
	ctx.globalAlpha = shot.alpha;
	ctx.filter = shot.filter;
	for (let i = 0; i < pose.segments; i++) {
		ctx.save();
		ctx.translate(cx, cy);
		ctx.rotate(i * sector + pose.rotation);
		if (pose.fold === "mirror" && i % 2 === 1) ctx.scale(1, -1);
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.arc(0, 0, radius, -sector / 2, sector / 2);
		ctx.closePath();
		ctx.clip();
		ctx.drawImage(img, left, top, dw, dh);
		ctx.restore();
	}
	ctx.restore();
}
function paintWord(ctx, view, pose) {
	if (!pose.word || pose.reveal < .02) return;
	const { cx, cy, radius } = view;
	const letters = [...pose.word];
	const shown = pose.reveal * letters.length;
	ctx.save();
	ctx.font = `520 ${Math.max(16, radius * .11)}px Fraunces, Palatino, serif`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.lineJoin = "round";
	const spread = Math.min(.2, .72 / letters.length);
	const mid = Math.PI / 2;
	for (let i = 0; i < letters.length; i++) {
		const gain = clamp(shown - i, 0, 1);
		if (gain <= 0) continue;
		const ang = mid + (i - (letters.length - 1) / 2) * spread;
		const r = radius * .62;
		const x = cx + Math.cos(ang) * r;
		const y = cy + Math.sin(ang) * r;
		ctx.globalAlpha = gain;
		ctx.strokeStyle = "rgba(12,11,10,0.72)";
		ctx.lineWidth = 5;
		ctx.strokeText(letters[i], x, y);
		ctx.fillStyle = pose.lock > .65 ? "#f3ecdf" : "#d7a15e";
		ctx.fillText(letters[i], x, y);
	}
	if (pose.credit && pose.reveal > .72) {
		ctx.globalAlpha = clamp((pose.reveal - .72) / .28, 0, 1) * .8;
		ctx.font = `500 ${Math.max(10, radius * .045)}px Outfit, sans-serif`;
		ctx.fillStyle = "#f3ecdf";
		ctx.letterSpacing = "0.18em";
		const y = cy + radius * .8;
		ctx.strokeStyle = "rgba(12,11,10,0.7)";
		ctx.lineWidth = 3;
		ctx.strokeText(pose.credit, cx, y);
		ctx.fillText(pose.credit, cx, y);
		ctx.letterSpacing = "0px";
	}
	ctx.restore();
}
function drawSweep(ctx, view, pose, images, energy) {
	const { w, h, dpr, cx, cy, radius } = view;
	ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	ctx.globalAlpha = 1;
	ctx.globalCompositeOperation = "source-over";
	ctx.filter = "none";
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.fillStyle = "#0c0b0a";
	ctx.fillRect(0, 0, w, h);
	if (radius > 4) {
		const wash = ctx.createRadialGradient(cx, cy, radius * .02, cx, cy, radius);
		wash.addColorStop(0, pose.wash);
		wash.addColorStop(.72, "rgba(12,11,10,0)");
		ctx.fillStyle = wash;
		ctx.beginPath();
		ctx.arc(cx, cy, radius, 0, TAU$1);
		ctx.fill();
	}
	ctx.save();
	ctx.beginPath();
	ctx.arc(cx, cy, Math.max(radius - .5, 1), 0, TAU$1);
	ctx.clip();
	ctx.imageSmoothingEnabled = true;
	ctx.imageSmoothingQuality = "high";
	for (const shot of pose.photos) {
		const img = images[shot.id];
		if (img) paintShot(ctx, view, pose, shot, img);
	}
	if (pose.ink > .02) {
		ctx.globalAlpha = 1;
		ctx.filter = "none";
		paintRibbon(ctx, view, pose, 0, pose.ink * .9, 3.4);
		paintRibbon(ctx, view, pose, 1, pose.ink * .55, 1.6);
		paintRibbon(ctx, view, pose, 2, pose.ink * .35, 1.05);
	}
	const photoAmp = pose.photos.reduce((sum, shot) => sum + shot.alpha, 0);
	if (pose.ink < .15 && photoAmp < .12) {
		ctx.globalAlpha = 1 - photoAmp - pose.ink;
		ctx.fillStyle = "#d7a15e";
		ctx.beginPath();
		ctx.arc(cx, cy, 2.4, 0, TAU$1);
		ctx.fill();
	}
	if (energy > .04) {
		ctx.globalAlpha = energy * .18;
		ctx.fillStyle = "#f3ecdf";
		ctx.beginPath();
		ctx.arc(cx, cy, radius * (.05 + energy * .22), 0, TAU$1);
		ctx.fill();
	}
	paintWord(ctx, view, pose);
	ctx.restore();
	if (view.filled) return;
	ctx.globalAlpha = 1;
	ctx.filter = "none";
	ctx.lineWidth = 1;
	ctx.strokeStyle = "rgba(215,161,94,0.35)";
	const sector = TAU$1 / pose.segments;
	for (let i = 0; i < pose.segments; i++) {
		const ang = i * sector + pose.rotation;
		ctx.beginPath();
		ctx.moveTo(cx + Math.cos(ang) * (radius - 11), cy + Math.sin(ang) * (radius - 11));
		ctx.lineTo(cx + Math.cos(ang) * radius, cy + Math.sin(ang) * radius);
		ctx.stroke();
	}
	ctx.lineWidth = 1.25;
	ctx.strokeStyle = "rgba(215,161,94,0.85)";
	ctx.beginPath();
	ctx.arc(cx, cy, radius, 0, TAU$1);
	ctx.stroke();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "rgba(215,161,94,0.28)";
	ctx.beginPath();
	ctx.arc(cx, cy, Math.max(radius - 8, 1), 0, TAU$1);
	ctx.stroke();
	const vignette = ctx.createRadialGradient(cx, cy, radius * .92, cx, cy, Math.max(w, h) * .72);
	vignette.addColorStop(0, "rgba(12,11,10,0)");
	vignette.addColorStop(1, "rgba(12,11,10,0.78)");
	ctx.fillStyle = vignette;
	ctx.fillRect(0, 0, w, h);
}
var PHOTO_SRC = Object.fromEntries(GALLERY.map((item) => [item.id, item.src]));
var TAU = Math.PI * 2;
var WIDTH = 720;
var HEIGHT = 1280;
var FPS = 30;
var SITE = "https://kyledopescope.grok.me";
var VIEW = {
	w: WIDTH,
	h: HEIGHT,
	dpr: 1,
	cx: WIDTH / 2,
	cy: HEIGHT * .42,
	radius: 300
};
function fit(ctx, text, max, size, weight, family) {
	let next = size;
	do {
		ctx.font = `${weight} ${next}px ${family}`;
		if (ctx.measureText(text).width <= max || next <= 14) break;
		next -= 2;
	} while (next > 14);
}
function paintCard(ctx, arrangement) {
	const source = arrangement.page.replace(/^https?:\/\//, "");
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.letterSpacing = "0px";
	fit(ctx, arrangement.label, 640, 42, "520", "Fraunces, Palatino, serif");
	ctx.fillStyle = "#f3ecdf";
	ctx.fillText(arrangement.label, WIDTH / 2, 1112);
	fit(ctx, arrangement.credit.toUpperCase(), 640, 18, "500", "Outfit, sans-serif");
	ctx.fillStyle = "#d7a15e";
	ctx.fillText(arrangement.credit.toUpperCase(), WIDTH / 2, 1162);
	fit(ctx, source, 656, 16, "500", "Outfit, sans-serif");
	ctx.fillStyle = "rgba(243,236,223,0.86)";
	ctx.fillText(source, WIDTH / 2, 1204);
}
function paintEnding(ctx, arrangement, image) {
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.fillStyle = "#0c0b0a";
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.letterSpacing = "0px";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	const maxW = 600;
	const maxH = HEIGHT * .48;
	const scale = Math.min(maxW / Math.max(1, image.naturalWidth), maxH / Math.max(1, image.naturalHeight));
	const dw = image.naturalWidth * scale;
	const dh = image.naturalHeight * scale;
	const x = (WIDTH - dw) / 2;
	const y = 80;
	ctx.drawImage(image, x, y, dw, dh);
	const source = arrangement.page.replace(/^https?:\/\//, "");
	const top = Math.min(y + dh + 52, 1060);
	fit(ctx, arrangement.label, 640, 40, "520", "Fraunces, Palatino, serif");
	ctx.fillStyle = "#f3ecdf";
	ctx.fillText(arrangement.label, WIDTH / 2, top);
	fit(ctx, arrangement.credit, 640, 20, "500", "Outfit, sans-serif");
	ctx.fillStyle = "#d7a15e";
	ctx.fillText(arrangement.credit, WIDTH / 2, top + 40);
	fit(ctx, source, 656, 16, "500", "Outfit, sans-serif");
	ctx.fillStyle = "rgba(243,236,223,0.86)";
	ctx.fillText(source, WIDTH / 2, top + 74);
	fit(ctx, SITE.replace(/^https?:\/\//, ""), 656, 18, "600", "Outfit, sans-serif");
	ctx.fillStyle = "#f3ecdf";
	ctx.fillText(SITE.replace(/^https?:\/\//, ""), WIDTH / 2, top + 112);
}
function paintAt(ctx, arrangement, image, startTurn, index) {
	if (index >= 180) {
		paintEnding(ctx, arrangement, image);
		return;
	}
	const t = index / Math.max(1, 179);
	drawSweep(ctx, VIEW, poseFrom(startTurn + t * TAU * .85, arrangement), { [arrangement.photo]: image }, Math.sin(t * Math.PI) * .45);
	paintCard(ctx, arrangement);
}
function sourceText(arrangement) {
	return `${arrangement.label} — ${arrangement.credit}\n${arrangement.page}\n\n${SITE}`;
}
function shortFileName(photo, type) {
	return `KyleDopeScope-${photo}-short.${type.includes("mp4") ? "mp4" : "webm"}`;
}
async function recordMp4(arrangement, image, startTurn) {
	if (typeof VideoEncoder === "undefined") throw new Error("no encoder");
	const { Output, Mp4OutputFormat, BufferTarget, CanvasSource, Quality } = await import("../_libs/mediabunny.mjs").then((n) => n.t);
	const canvas = document.createElement("canvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	const ctx = canvas.getContext("2d", { alpha: false });
	if (!ctx) throw new Error("This browser can't record a video short.");
	const target = new BufferTarget();
	const output = new Output({
		format: new Mp4OutputFormat({ fastStart: "in-memory" }),
		target
	});
	const video = new CanvasSource(canvas, {
		codec: "avc",
		quality: new Quality("high")
	});
	output.addVideoTrack(video);
	output.setMetadataTags({
		title: `${arrangement.label} — KyleDopeScope`,
		artist: arrangement.credit,
		comment: `${arrangement.page}\n${SITE}`,
		description: SITE
	});
	await output.start();
	const frames = 240;
	for (let index = 0; index < frames; index++) {
		paintAt(ctx, arrangement, image, startTurn, index);
		await video.add(index / FPS, 1 / FPS);
	}
	await output.finalize();
	if (!target.buffer) throw new Error("Couldn't finish the video.");
	return new Blob([target.buffer], { type: "video/mp4" });
}
function recorderMime() {
	const types = [
		"video/mp4",
		"video/webm;codecs=vp9",
		"video/webm;codecs=vp8",
		"video/webm"
	];
	if (typeof MediaRecorder === "undefined") return "";
	return types.find((type) => MediaRecorder.isTypeSupported(type)) ?? "";
}
async function recordStream(arrangement, image, startTurn) {
	const type = recorderMime();
	if (!type || typeof HTMLCanvasElement.prototype.captureStream !== "function") throw new Error("This phone can't record a video short.");
	const canvas = document.createElement("canvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	const ctx = canvas.getContext("2d", { alpha: false });
	if (!ctx) throw new Error("This phone can't record a video short.");
	const stream = canvas.captureStream(FPS);
	const recorder = new MediaRecorder(stream, {
		mimeType: type,
		videoBitsPerSecond: 45e5
	});
	const chunks = [];
	recorder.ondataavailable = (event) => {
		if (event.data.size) chunks.push(event.data);
	};
	const done = new Promise((resolve, reject) => {
		recorder.onerror = () => reject(/* @__PURE__ */ new Error("Recording failed."));
		recorder.onstop = () => resolve(new Blob(chunks, { type: recorder.mimeType || type }));
	});
	const frames = 240;
	recorder.start();
	for (let index = 0; index < frames; index++) {
		paintAt(ctx, arrangement, image, startTurn, index);
		await new Promise((resolve) => setTimeout(resolve, 1e3 / FPS));
	}
	if (recorder.state !== "inactive") recorder.stop();
	const blob = await done;
	for (const track of stream.getTracks()) track.stop();
	return blob;
}
async function recordShort(arrangement, image, startTurn) {
	await new Promise((resolve) => requestAnimationFrame(() => resolve(void 0)));
	try {
		return await recordMp4(arrangement, image, startTurn);
	} catch {
		return recordStream(arrangement, image, startTurn);
	}
}
function downloadShort(blob, name) {
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = name;
	link.rel = "noopener";
	document.body.appendChild(link);
	link.click();
	link.remove();
	setTimeout(() => URL.revokeObjectURL(url), 15e3);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var readVisits = createServerFn({ method: "GET" }).handler(createSsrRpc("cd3ff626e66cca7397b910b50364087d3133293c46c5d6cd436d2bd73b21a00c"));
var bumpVisit = createServerFn({ method: "POST" }).handler(createSsrRpc("584756e4b1e80c4dd7dcf026daa2011a0e80cf974dd5f87983efe3a91cb11e19"));
var TURN_PER_VIEW = Math.PI * 2 * .65;
var HISTORY_KEY = "kaleido-history-v1";
var COUNTED_KEY = "kaleido-counted";
function paintCaption(ctx, view, label, credit) {
	const text = `${label}  ·  ${credit}`.toUpperCase();
	ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
	ctx.textAlign = "right";
	ctx.textBaseline = "middle";
	ctx.font = "500 12px Outfit, sans-serif";
	const max = Math.max(80, view.w - 168);
	let shown = text;
	if (ctx.measureText(shown).width > max) {
		while (shown.length > 4 && ctx.measureText(`${shown}…`).width > max) shown = shown.slice(0, -1);
		shown = `${shown.trimEnd()}…`;
	}
	const x = view.w - 20;
	const y = view.h - 28;
	ctx.lineWidth = 4;
	ctx.strokeStyle = "rgba(12,11,10,0.78)";
	ctx.strokeText(shown, x, y);
	ctx.fillStyle = "rgba(243,236,223,0.84)";
	ctx.fillText(shown, x, y);
}
function containedRect(img) {
	const scale = Math.min(img.clientWidth / img.naturalWidth, img.clientHeight / img.naturalHeight);
	const width = img.naturalWidth * scale;
	const height = img.naturalHeight * scale;
	return {
		left: (img.clientWidth - width) / 2,
		top: (img.clientHeight - height) / 2,
		width,
		height
	};
}
function SourceFrame({ src, alt, turn, arrangement, onAim }) {
	const imgRef = (0, import_react.useRef)(null);
	const [spot, setSpot] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let frame = 0;
		const tick = () => {
			const img = imgRef.current;
			if (img && img.naturalWidth > 0 && img.clientWidth > 0) {
				const aim = liveAim(turn.current, arrangement);
				const box = containedRect(img);
				const x = box.left + aim.aimX * box.width;
				const y = box.top + aim.aimY * box.height;
				setSpot((prev) => prev && Math.abs(prev.x - x) < .4 && Math.abs(prev.y - y) < .4 ? prev : {
					x,
					y
				});
			}
			frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [arrangement, turn]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			ref: imgRef,
			src,
			alt,
			className: "max-h-[72dvh] w-full cursor-crosshair bg-bg object-contain",
			onClick: (event) => {
				const img = event.currentTarget;
				if (!img.naturalWidth) return;
				const bounds = img.getBoundingClientRect();
				const box = containedRect(img);
				const x = (event.clientX - bounds.left - box.left) / box.width;
				const y = (event.clientY - bounds.top - box.top) / box.height;
				if (x < 0 || y < 0 || x > 1 || y > 1) return;
				onAim(x, y);
			}
		}), spot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-accent/35 shadow-[0_0_0_1px_rgba(12,11,10,0.85)]",
			style: {
				left: spot.x,
				top: spot.y
			}
		}) : null]
	});
}
function KaleidoStage() {
	const canvasRef = (0, import_react.useRef)(null);
	const mainRef = (0, import_react.useRef)(null);
	const scrollerRef = (0, import_react.useRef)(null);
	const [arrangement, setArrangement] = (0, import_react.useState)(OPENING);
	const arrangementRef = (0, import_react.useRef)(arrangement);
	arrangementRef.current = arrangement;
	const burstRef = (0, import_react.useRef)(0);
	const fadeRef = (0, import_react.useRef)(1);
	const ensureRef = (0, import_react.useRef)(() => void 0);
	const refreshToken = (0, import_react.useRef)(0);
	const turnRef = (0, import_react.useRef)(0);
	const [vote, setVote] = (0, import_react.useState)(null);
	const [recording, setRecording] = (0, import_react.useState)(false);
	const [job, setJob] = (0, import_react.useState)(null);
	const [note, setNote] = (0, import_react.useState)("");
	const [ready, setReady] = (0, import_react.useState)(null);
	const readyRef = (0, import_react.useRef)(ready);
	readyRef.current = ready;
	const [originalOpen, setOriginalOpen] = (0, import_react.useState)(false);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [full, setFull] = (0, import_react.useState)(false);
	const fullRef = (0, import_react.useRef)(false);
	fullRef.current = full;
	const [uses, setUses] = (0, import_react.useState)(null);
	const originalOpenRef = (0, import_react.useRef)(false);
	originalOpenRef.current = originalOpen;
	(0, import_react.useLayoutEffect)(() => {
		const next = rollArrangement();
		arrangementRef.current = next;
		fadeRef.current = 0;
		setArrangement(next);
	}, []);
	(0, import_react.useEffect)(() => {
		setVote(voteFor(arrangement));
	}, [arrangement]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (readyRef.current) URL.revokeObjectURL(readyRef.current.url);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(HISTORY_KEY);
			if (!raw) return;
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed)) setHistory(parsed.slice(0, 8));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		let os = Boolean(document.fullscreenElement);
		const onChange = () => {
			const now = Boolean(document.fullscreenElement);
			if (os && !now) setFull(false);
			os = now;
		};
		document.addEventListener("fullscreenchange", onChange);
		return () => document.removeEventListener("fullscreenchange", onChange);
	}, []);
	(0, import_react.useEffect)(() => {
		let ignore = false;
		const seen = sessionStorage.getItem(COUNTED_KEY) === "1";
		if (!seen) sessionStorage.setItem(COUNTED_KEY, "1");
		(seen ? readVisits() : bumpVisit()).then((result) => {
			if (!ignore) setUses(result.total);
		}).catch(() => void 0);
		return () => {
			ignore = true;
		};
	}, []);
	function rate(next) {
		setVote(toggleVote(arrangementRef.current, next));
	}
	function dropReady() {
		const current = readyRef.current;
		if (!current) return;
		URL.revokeObjectURL(current.url);
		readyRef.current = null;
		setReady(null);
	}
	async function makeClip() {
		const current = arrangementRef.current;
		const key = keyOf(current);
		const turn = turnRef.current;
		const existing = readyRef.current;
		if (existing && existing.key === key && Math.abs(existing.turn - turn) < .02) return existing;
		const img = ensureRef.current(current.photo);
		if (!img) return null;
		dropReady();
		if (!img.complete || img.naturalWidth < 1) await new Promise((resolve, reject) => {
			img.addEventListener("load", () => resolve(), { once: true });
			img.addEventListener("error", () => reject(/* @__PURE__ */ new Error("Picture failed to load.")), { once: true });
		});
		const blob = await recordShort(current, img, turn);
		const name = shortFileName(current.photo, blob.type);
		const file = new File([blob], name, { type: blob.type || "video/mp4" });
		const next = {
			url: URL.createObjectURL(blob),
			file,
			text: sourceText(current),
			name,
			turn,
			key
		};
		readyRef.current = next;
		setReady(next);
		return next;
	}
	async function onShare() {
		if (recording) return;
		setJob("share");
		setRecording(true);
		setNote("");
		try {
			const clip = await makeClip();
			if (!clip) return;
			const filePayload = {
				files: [clip.file],
				title: "KyleDopeScope",
				text: clip.text
			};
			if (navigator.canShare?.(filePayload)) {
				await navigator.share(filePayload);
				setNote("");
				return;
			}
			if (typeof navigator.share === "function") {
				await navigator.share({
					title: "KyleDopeScope",
					text: clip.text,
					url: window.location.href
				});
				setNote("Shared the tube. Download if you want the video file.");
				return;
			}
			await navigator.clipboard.writeText(`${clip.text}\n${window.location.href}`);
			setNote("Link copied. Download the video to post the file.");
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") return;
			setNote(error instanceof Error ? error.message : "Couldn't share the short.");
		} finally {
			setRecording(false);
			setJob(null);
		}
	}
	async function onDownload() {
		if (recording) return;
		setJob("download");
		setRecording(true);
		setNote("");
		try {
			const clip = await makeClip();
			if (!clip) return;
			downloadShort(clip.file, clip.name);
			const mp4 = clip.file.type.includes("mp4");
			setNote(mp4 ? "MP4 saved. The source and site are on the video." : "Video saved. The source and site are on the video.");
		} catch (error) {
			setNote(error instanceof Error ? error.message : "Couldn't download the short.");
		} finally {
			setRecording(false);
			setJob(null);
		}
	}
	async function goFull() {
		if (fullRef.current || document.fullscreenElement) {
			setFull(false);
			if (document.fullscreenElement) await document.exitFullscreen().catch(() => void 0);
			return;
		}
		setFull(true);
		const node = mainRef.current;
		try {
			if (node?.requestFullscreen && document.fullscreenEnabled) await node.requestFullscreen();
		} catch {}
	}
	function remember(item) {
		setHistory((prev) => {
			const next = [item, ...prev.filter((entry) => keyOf(entry) !== keyOf(item))].slice(0, 8);
			try {
				localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
			} catch {}
			return next;
		});
	}
	function show(next) {
		const current = arrangementRef.current;
		if (keyOf(current) !== keyOf(next)) remember(current);
		dropReady();
		const mine = ++refreshToken.current;
		const img = ensureRef.current(next.photo);
		const apply = () => {
			if (mine !== refreshToken.current) return;
			arrangementRef.current = next;
			setArrangement(next);
			fadeRef.current = 0;
			burstRef.current = 1;
		};
		if (img && img.complete && img.naturalWidth > 0) apply();
		else img?.addEventListener("load", apply, { once: true });
	}
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const scroller = scrollerRef.current;
		if (!canvas || !scroller) return;
		const ctx = canvas.getContext("2d", { alpha: false });
		if (!ctx) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const images = {};
		const ensure = (id) => {
			const existing = images[id];
			if (existing) return existing;
			const src = PHOTO_SRC[id];
			if (!src) return;
			const img = new Image();
			img.src = src;
			images[id] = img;
			return img;
		};
		ensureRef.current = ensure;
		ensure(arrangementRef.current.photo);
		let base = 0;
		let jumping = false;
		let targetTurn = 0;
		const applyScroll = () => {
			const max = scroller.scrollHeight - scroller.clientHeight;
			if (max < 1) return;
			let top = scroller.scrollTop;
			if (top < max * .2 || top > max * .8) {
				const jump = max * .4;
				const dir = top < max * .2 ? 1 : -1;
				jumping = true;
				scroller.scrollTop = top + dir * jump;
				base -= dir * jump;
				jumping = false;
				top = scroller.scrollTop;
			}
			const viewH = Math.max(scroller.clientHeight, 1);
			targetTurn = (top + base) / viewH * TURN_PER_VIEW;
		};
		const center = () => {
			const max = scroller.scrollHeight - scroller.clientHeight;
			jumping = true;
			scroller.scrollTop = max / 2;
			jumping = false;
			base = -max / 2;
			targetTurn = 0;
		};
		center();
		const onScroll = () => {
			if (jumping) return;
			applyScroll();
		};
		scroller.addEventListener("scroll", onScroll, { passive: true });
		const onWheel = (event) => {
			if (originalOpenRef.current) return;
			if (scroller.contains(event.target)) return;
			const dy = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaMode === 2 ? event.deltaY * scroller.clientHeight : event.deltaY;
			scroller.scrollTop += dy;
			event.preventDefault();
		};
		window.addEventListener("wheel", onWheel, { passive: false });
		const view = {
			w: 1,
			h: 1,
			dpr: 1,
			cx: 0,
			cy: 0,
			radius: 1
		};
		const measure = () => {
			const w = canvas.clientWidth;
			const h = canvas.clientHeight;
			if (w < 2 || h < 2) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const bw = Math.max(1, Math.round(w * dpr));
			const bh = Math.max(1, Math.round(h * dpr));
			if (canvas.width !== bw || canvas.height !== bh) {
				canvas.width = bw;
				canvas.height = bh;
			}
			view.w = w;
			view.h = h;
			view.dpr = dpr;
			view.cx = w / 2;
			view.cy = h / 2;
			const edge = Math.min(w, h);
			view.filled = fullRef.current;
			view.radius = view.filled ? Math.hypot(w, h) / 2 + 2 : Math.max(96, edge * .5 - 36);
		};
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(canvas);
		let shown = 0;
		let prev = 0;
		let energy = 0;
		let raf = 0;
		let last = performance.now();
		const loop = (now) => {
			const dt = Math.min(.05, (now - last) / 1e3);
			last = now;
			if (reduce) shown = targetTurn;
			else shown += (targetTurn - shown) * (1 - Math.exp(-dt / .08));
			const spike = Math.min(1, Math.abs(shown - prev) / .05);
			prev = shown;
			energy = reduce ? burstRef.current : Math.max(spike, burstRef.current, energy * Math.exp(-dt / .16));
			burstRef.current *= Math.exp(-dt / .12);
			fadeRef.current += (1 - fadeRef.current) * (1 - Math.exp(-dt / .14));
			const pose = poseFrom(shown, arrangementRef.current);
			turnRef.current = shown;
			const edge = Math.min(view.w, view.h);
			view.filled = fullRef.current;
			view.radius = view.filled ? Math.hypot(view.w, view.h) / 2 + 2 : Math.max(96, edge * .5 - 36);
			for (const shot of pose.photos) shot.alpha *= fadeRef.current;
			drawSweep(ctx, view, pose, images, energy);
			if (!fullRef.current) {
				const current = arrangementRef.current;
				paintCaption(ctx, view, current.label, current.credit);
			}
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		const api = {
			turn: () => shown,
			photo: () => arrangementRef.current.photo,
			segments: () => arrangementRef.current.segments,
			fold: () => arrangementRef.current.fold
		};
		window.__kaleido = api;
		return () => {
			cancelAnimationFrame(raf);
			observer.disconnect();
			scroller.removeEventListener("scroll", onScroll);
			window.removeEventListener("wheel", onWheel);
			if (window.__kaleido === api) delete window.__kaleido;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		ref: mainRef,
		className: "relative h-dvh overflow-hidden bg-bg text-fg select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollerRef,
				"data-scroller": true,
				className: "turn-scroll absolute inset-0 overflow-y-auto overscroll-none",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[800vh]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "pointer-events-none absolute inset-0 h-full w-full",
				"aria-label": "KyleDopeScope. Scroll up or down to turn it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute bottom-4 left-4 z-10 font-display text-sm tracking-wide text-fg/75 sm:bottom-6 sm:left-6",
				children: "KyleDopeScope"
			}),
			history.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-auto absolute bottom-24 left-4 right-4 z-10 flex gap-2 overflow-x-auto sm:bottom-28 sm:left-6",
				children: history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": item.label,
					onClick: () => show(item),
					className: "size-11 shrink-0 overflow-hidden rounded-full border border-border shadow-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: PHOTO_SRC[item.photo],
						alt: "",
						className: "h-full w-full object-cover"
					})
				}, keyOf(item)))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute top-4 right-4 z-10 flex flex-col items-end gap-2 sm:top-6 sm:right-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex max-w-[calc(100vw-2rem)] flex-wrap items-center justify-end gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => show(rollImage(arrangementRef.current)),
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
								className: "size-4 text-accent",
								"aria-hidden": "true"
							}), "Image"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => show(rollMirrors(arrangementRef.current)),
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Aperture, {
								className: "size-4 text-accent",
								"aria-hidden": "true"
							}), "Mirrors"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => show(rollCenter(arrangementRef.current)),
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, {
								className: "size-4 text-accent",
								"aria-hidden": "true"
							}), "Center"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Like this picture and mirror arrangement",
							"aria-pressed": vote === "up",
							onClick: () => rate("up"),
							className: `inline-flex size-11 items-center justify-center rounded-full border border-border shadow-lg backdrop-blur-md ${vote === "up" ? "bg-accent text-accent-fg" : "bg-surface/90 text-fg"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, {
								className: "size-4",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Dislike this picture and mirror arrangement",
							"aria-pressed": vote === "down",
							onClick: () => rate("down"),
							className: `inline-flex size-11 items-center justify-center rounded-full border border-border shadow-lg backdrop-blur-md ${vote === "down" ? "bg-accent text-accent-fg" : "bg-surface/90 text-fg"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsDown, {
								className: "size-4",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void onShare(),
							disabled: recording,
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
								className: "size-4 text-accent",
								"aria-hidden": "true"
							}), job === "share" ? "Recording…" : "Share"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void onDownload(),
							disabled: recording,
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "size-4 text-accent",
								"aria-hidden": "true"
							}), job === "download" ? "Recording…" : "Download"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void goFull(),
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, {
								className: "size-4 text-accent",
								"aria-hidden": "true"
							}), full ? "Exit" : "Full"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOriginalOpen(true),
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm text-fg shadow-lg backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, {
								className: "size-4 text-accent",
								"aria-hidden": "true"
							}), "Original"]
						})
					]
				}), note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-72 break-words text-right text-xs text-accent normal-case",
					children: note
				}) : null]
			}),
			originalOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-20 flex items-center justify-center bg-bg/80 p-4 backdrop-blur-sm",
				onClick: () => setOriginalOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "dialog",
					"aria-label": arrangement.label,
					className: "pointer-events-auto flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-lg",
					onClick: (event) => event.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceFrame, {
						src: PHOTO_SRC[arrangement.photo],
						alt: arrangement.label,
						turn: turnRef,
						arrangement,
						onAim: (x, y) => show({
							...arrangementRef.current,
							...aimFromPoint(turnRef.current, x, y)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-3 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl leading-tight",
							children: arrangement.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: arrangement.page,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-1 block text-sm text-accent underline-offset-2 hover:underline",
							children: arrangement.credit
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: arrangement.page,
								target: "_blank",
								rel: "noreferrer",
								className: "rounded-full border border-border px-3 py-2 text-sm text-fg",
								children: "Source"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close the original",
								onClick: () => setOriginalOpen(false),
								className: "inline-flex size-10 items-center justify-center rounded-full border border-border text-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-4",
									"aria-hidden": "true"
								})
							})]
						})]
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "pointer-events-none absolute bottom-12 left-4 z-10 sm:bottom-14 sm:left-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Times this tube has been opened "
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/90 px-3.5 py-2 text-sm text-fg shadow-lg backdrop-blur-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium tabular-nums text-accent",
						children: uses == null ? "—" : uses.toLocaleString("en-US")
					}), uses === 1 ? "use" : "uses"]
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KaleidoStage, {});
}
//#endregion
export { Home as component };
