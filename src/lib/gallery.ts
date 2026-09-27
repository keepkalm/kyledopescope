export type GalleryPhoto = {
  id: string;
  label: string;
  credit: string;
  src: string;
};

/**
 * Recognizable public-domain pictures.
 * NASA files are US government work. The rest are paintings and photographs
 * whose Wikimedia Commons license is public domain.
 */
export const GALLERY: GalleryPhoto[] = [
  { id: "moonwalk", label: "Moonwalk", credit: "NASA", src: "/gallery/moonwalk.jpg" },
  { id: "earthrise", label: "Earthrise", credit: "NASA", src: "/gallery/earthrise.jpg" },
  { id: "marble", label: "Blue Marble", credit: "NASA", src: "/gallery/marble.jpg" },
  { id: "pillars", label: "Pillars of Creation", credit: "NASA / ESA", src: "/gallery/pillars.jpg" },
  { id: "saturn", label: "Saturn", credit: "NASA / JPL", src: "/gallery/saturn.jpg" },
  { id: "mona-lisa", label: "Mona Lisa", credit: "Leonardo da Vinci", src: "/gallery/mona-lisa.jpg" },
  { id: "starry-night", label: "Starry Night", credit: "Vincent van Gogh", src: "/gallery/starry-night.jpg" },
  { id: "sunflowers", label: "Sunflowers", credit: "Vincent van Gogh", src: "/gallery/sunflowers.jpg" },
  { id: "cafe-terrace", label: "Café Terrace at Night", credit: "Vincent van Gogh", src: "/gallery/cafe-terrace.jpg" },
  { id: "bedroom", label: "The Bedroom", credit: "Vincent van Gogh", src: "/gallery/bedroom.jpg" },
  { id: "irises", label: "Irises", credit: "Vincent van Gogh", src: "/gallery/irises.jpg" },
  { id: "almond-blossom", label: "Almond Blossom", credit: "Vincent van Gogh", src: "/gallery/almond-blossom.jpg" },
  { id: "great-wave", label: "The Great Wave", credit: "Katsushika Hokusai", src: "/gallery/great-wave.jpg" },
  { id: "pearl-earring", label: "Girl with a Pearl Earring", credit: "Johannes Vermeer", src: "/gallery/pearl-earring.jpg" },
  { id: "milkmaid", label: "The Milkmaid", credit: "Johannes Vermeer", src: "/gallery/milkmaid.jpg" },
  { id: "astronomer", label: "The Astronomer", credit: "Johannes Vermeer", src: "/gallery/astronomer.jpg" },
  { id: "birth-of-venus", label: "Birth of Venus", credit: "Sandro Botticelli", src: "/gallery/birth-of-venus.jpg" },
  { id: "primavera", label: "Primavera", credit: "Sandro Botticelli", src: "/gallery/primavera.jpg" },
  { id: "creation-of-adam", label: "Creation of Adam", credit: "Michelangelo", src: "/gallery/creation-of-adam.jpg" },
  { id: "school-of-athens", label: "The School of Athens", credit: "Raphael", src: "/gallery/school-of-athens.jpg" },
  { id: "vitruvian", label: "Vitruvian Man", credit: "Leonardo da Vinci", src: "/gallery/vitruvian.jpg" },
  { id: "the-scream", label: "The Scream", credit: "Edvard Munch", src: "/gallery/the-scream.jpg" },
  { id: "the-kiss", label: "The Kiss", credit: "Gustav Klimt", src: "/gallery/the-kiss.jpg" },
  { id: "wanderer", label: "Wanderer above the Sea of Fog", credit: "Caspar David Friedrich", src: "/gallery/wanderer.jpg" },
  { id: "water-lilies", label: "Water Lilies", credit: "Claude Monet", src: "/gallery/water-lilies.jpg" },
  { id: "impression-sunrise", label: "Impression, Sunrise", credit: "Claude Monet", src: "/gallery/impression-sunrise.jpg" },
  { id: "parasol", label: "Woman with a Parasol", credit: "Claude Monet", src: "/gallery/parasol.jpg" },
  { id: "grande-jatte", label: "A Sunday on La Grande Jatte", credit: "Georges Seurat", src: "/gallery/grande-jatte.jpg" },
  { id: "boating-party", label: "Luncheon of the Boating Party", credit: "Pierre-Auguste Renoir", src: "/gallery/boating-party.jpg" },
  { id: "night-watch", label: "The Night Watch", credit: "Rembrandt", src: "/gallery/night-watch.jpg" },
  { id: "las-meninas", label: "Las Meninas", credit: "Diego Velázquez", src: "/gallery/las-meninas.jpg" },
  { id: "arnolfini", label: "Arnolfini Portrait", credit: "Jan van Eyck", src: "/gallery/arnolfini.jpg" },
  { id: "earthly-delights", label: "Garden of Earthly Delights", credit: "Hieronymus Bosch", src: "/gallery/earthly-delights.jpg" },
  { id: "babel", label: "The Tower of Babel", credit: "Pieter Bruegel the Elder", src: "/gallery/babel.jpg" },
  { id: "hunters", label: "Hunters in the Snow", credit: "Pieter Bruegel the Elder", src: "/gallery/hunters.jpg" },
  { id: "liberty", label: "Liberty Leading the People", credit: "Eugène Delacroix", src: "/gallery/liberty.jpg" },
  { id: "napoleon", label: "Napoleon Crossing the Alps", credit: "Jacques-Louis David", src: "/gallery/napoleon.jpg" },
  { id: "washington", label: "Washington Crossing the Delaware", credit: "Emanuel Leutze", src: "/gallery/washington.jpg" },
  { id: "temeraire", label: "The Fighting Temeraire", credit: "J. M. W. Turner", src: "/gallery/temeraire.jpg" },
  { id: "ophelia", label: "Ophelia", credit: "John Everett Millais", src: "/gallery/ophelia.jpg" },
  { id: "shalott", label: "The Lady of Shalott", credit: "John William Waterhouse", src: "/gallery/shalott.jpg" },
  { id: "the-swing", label: "The Swing", credit: "Jean-Honoré Fragonard", src: "/gallery/the-swing.jpg" },
  { id: "olympia", label: "Olympia", credit: "Édouard Manet", src: "/gallery/olympia.jpg" },
  { id: "gleaners", label: "The Gleaners", credit: "Jean-François Millet", src: "/gallery/gleaners.jpg" },
  { id: "moulin-rouge", label: "At the Moulin Rouge", credit: "Henri de Toulouse-Lautrec", src: "/gallery/moulin-rouge.jpg" },
  { id: "whistlers-mother", label: "Whistler's Mother", credit: "James McNeill Whistler", src: "/gallery/whistlers-mother.jpg" },
  { id: "american-gothic", label: "American Gothic", credit: "Grant Wood", src: "/gallery/american-gothic.jpg" },
  { id: "black-square", label: "Black Square", credit: "Kazimir Malevich", src: "/gallery/black-square.jpg" },
  { id: "migrant-mother", label: "Migrant Mother", credit: "Dorothea Lange", src: "/gallery/migrant-mother.jpg" },
  { id: "lincoln", label: "Abraham Lincoln", credit: "Alexander Gardner", src: "/gallery/lincoln.jpg" },
];
