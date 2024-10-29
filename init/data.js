
const sampleListings = [
    {
        title: "Hotel Paradise",
        description: "A luxurious hotel with sea view and modern amenities.",
        image: "https://live.staticflickr.com/563/20633977151_19254d9d07_b.jpg",
        price: 12000,
        location: "Malibu, California",
        country: "USA"
    },
    {
        title: "Mountain Escape",
        description: "A serene hotel surrounded by beautiful mountains.",
        image: "https://th.bing.com/th/id/R.1060712dc457bf254a613299d7ceb865?rik=IiQyoNDn%2ftPgYw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-jm9x4A7txB8%2fT0uG0AnxWqI%2fAAAAAAAAGl8%2f0A66XrXUDDI%2fs1600%2f006815-01-hotel-exterior-pool-night.jpg&ehk=xxHBP%2fDPUMNvF5Uke3ILJ4denPKod4T02veewZnBq7s%3d&risl=&pid=ImgRaw&r=0",
        price: 9000,
        location: "Interlaken, Switzerland",
        country: "Switzerland"
    },
    {
        title: "City Lights Inn",
        description: "A modern hotel in the heart of the city with rooftop views.",
        image: "https://cdn1.matadornetwork.com/blogs/1/2014/05/St-Regis-Mauritius-Resort--1200x900.jpg",
        price: 15000,
        location: "Tokyo, Japan",
        country: "Japan"
    },
    {
        title: "The Grand Castle",
        description: "A heritage hotel offering royal luxury and traditional ambiance.",
        image: "https://news.artnet.com/app/news-upload/2019/08/20190320_HSH_Pen_Art1278_v3_M-1024x902.jpg",
        price: 15000,
        location: "Edinburgh, Scotland",
        country: "United Kingdom"
    },
    {
        title: "Lakeside Retreat",
        description: "A peaceful hotel located near a picturesque lake.",
        image: "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2020/03/bigstock-SINGAPORE-SINGAPORE-MARCH-308606026.jpg",
        price: 7899,
        location: "Queenstown, New Zealand",
        country: "New Zealand"
    },
    {
        title: "Desert Oasis",
        description: "A unique hotel offering desert safari and camping experience.",
        image: "https://th.bing.com/th/id/R.565a5cc5528641701c3b67c27cd5ddee?rik=h9Dct1zi%2fZApUw&riu=http%3a%2f%2fstatic6.businessinsider.com%2fimage%2f4e371ef6eab8eab203000015%2fdubais-fanciest-hotel-has-sheets-tested-by-nasa-and-the-biggest-turkish-bath-in-the-middle-east.jpg&ehk=bwgBIK5A%2bqTVCA5eRV2sbVHQWgZgMUj%2fpZ0LOPcu8tQ%3d&risl=&pid=ImgRaw&r=0",
        price: 9500,
        location: "Dubai, UAE",
        country: "UAE"
    },
    {
        title: "Forest Haven",
        description: "A tranquil hotel nestled in the middle of a forest reserve.",
        image: "https://hips.hearstapps.com/hmg-prod/images/weekend-in-abu-dhabi-1516829864.jpg?crop=1xw:1xh;center,top&resize=980:*",
        price: 10500,
        location: "Amazon Rainforest, Brazil",
        country: "Brazil"
    },
    {
        title: "Beachside Bliss",
        description: "A beachside hotel with private access to the ocean.",
        image: "https://i.pinimg.com/originals/6b/91/92/6b9192ad608d50d70a809ea23a8e3019.jpg",
        price: 11000,
        location: "Bora Bora, French Polynesia",
        country: "French Polynesia"
    },
    {
        title: "The City Hub",
        description: "A business hotel with state-of-the-art facilities.",
        image: "https://th.bing.com/th/id/OIP.xlNZqd80wrdGtuhkeulRyAHaEJ?rs=1&pid=ImgDetMain",
        price: 9500,
        location: "Berlin, Germany",
        country: "Germany"
    },
    {
        title: "Mountain Majesty",
        description: "A charming hotel with stunning views of the Alps.",
        image: "https://th.bing.com/th/id/OIP.d32aOwsBmTQ3NYstUWvOJgHaFj?rs=1&pid=ImgDetMain",
        price: 12500,
        location: "Zermatt, Switzerland",
        country: "Switzerland"
    },
    {
        title: "Urban Chic",
        description: "A stylish boutique hotel in the heart of the city.",
        image: "https://www.holidify.com/images/cmsuploads/compressed/13851975_20180807191432.jpg",
        price: 14000,
        location: "Paris, France",
        country: "France"
    },
    {
        title: "Safari Lodge",
        description: "A wildlife resort offering safari tours and nature walks.",
        image: "https://www.reefscapetravel.com/media/jmlli2ys/milaidhoo-ocean-residence-pool-night.jpg?anchor=center&mode=crop&rnd=132869812522270000&format=jpg&width=1536&height=800&quality=70",
        price: 13500,
        location: "Maasai Mara, Kenya",
        country: "Kenya"
    },
    {
        title: "Oceanview Suites",
        description: "A romantic hotel with views of the ocean and sunset.",
        image: "https://www.travelplusstyle.com/wp-content/gallery/niyama-maldives_main-gallery/hi_pniy_59899144_two_bedroom_ocean_pavilion_with_pool_exterior_2.jpg",
        price: 15500,
        location: "Santorini, Greece",
        country: "Greece"
    },
    {
        title: "Jungle Retreat",
        description: "A hidden retreat in the heart of the jungle.",
        image: "https://theasiacollective.com/wp-content/uploads/2017/08/Muraka_a_la_carte_murakanightdeck-3.jpg",
        price: 11000,
        location: "Bali, Indonesia",
        country: "Indonesia"
    },
    {
        title: "Royal Palace Hotel",
        description: "An opulent hotel offering a royal stay experience.",
        image: "https://www.luxury-experience.de/wp-content/uploads/2019/05/Maldives_2.jpg",
        price: 20000,
        location: "Vienna, Austria",
        country: "Austria"
    },
    {
        title: "The Ice Hotel",
        description: "A hotel made entirely of ice and snow.",
        image: "https://th.bing.com/th/id/OIP.vvKFAmzgT7uw3fXG5hqLagHaEJ?rs=1&pid=ImgDetMain",
        price: 18000,
        location: "Jukkasjärvi, Sweden",
        country: "Sweden"
    },
    {
        title: "The Island Escape",
        description: "A private island hotel with luxurious amenities.",
        image: "https://th.bing.com/th/id/R.2efa1bf8a25e38cadb5a1cde426b702e?rik=fkg01IdKfadJ7g&riu=http%3a%2f%2fwww.tft-mag.com%2fwp-content%2fuploads%2f2018%2f01%2fHuvafen-Fushi-Malediven-huvafen_fushi_ocean_pavilion_deck.jpg&ehk=iFkCU1607ocPYBebQTGkU1B9NMUy6bxEmaoBpC47gq8%3d&risl=&pid=ImgRaw&r=0",
        price: 25000,
        location: "Maldives",
        country: "Maldives"
    },
    {
        title: "Ski Resort",
        description: "A mountain resort offering world-class skiing facilities.",
        image: "https://th.bing.com/th/id/OIP.fe6iQqwZl5HX3nFcI666WwHaE7?rs=1&pid=ImgDetMain",
        price: 13000,
        location: "Aspen, Colorado",
        country: "USA"
    },
    {
        title: "Historical Haven",
        description: "A hotel located in a historic building.",
        image: "https://media.cntraveller.in/wp-content/uploads/2019/04/Maldives-Lead-1366x768.jpg",
        price: 12000,
        location: "Rome, Italy",
        country: "Italy"
    },
    {
        title: "Tropical Paradise",
        description: "A beachfront hotel with tropical gardens.",
        image: "https://images.pexels.com/photos/4223678/pexels-photo-4223678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        price: 14500,
        location: "Phuket, Thailand",
        country: "Thailand"
    },
    {
        title: "Modern Marvel",
        description: "A futuristic hotel with high-tech features.",
        image: "https://th.bing.com/th/id/OIP.P47wM1pJsl4BxSEzdC6LIwHaE8?rs=1&pid=ImgDetMain",
        price: 16000,
        location: "Seoul, South Korea",
        country: "South Korea"
    },
    {
        title: "Cave Hotel",
        description: "A hotel built into natural caves.",
        image: "https://www.travelplusstyle.com/wp-content/gallery/st-regis-vommuli/str4315gr-206195-sunset-overwater-villa-with-pool-high.jpg",
        price: 13500,
        location: "Cappadocia, Turkey",
        country: "Turkey"
    },
    {
        title: "Island Serenity",
        description: "A peaceful island resort surrounded by crystal-clear waters.",
        image: "https://th.bing.com/th/id/OIP.zscVqXK0MhXxxuBtfv7QYAHaEr?w=2048&h=1292&rs=1&pid=ImgDetMain",
        price: 17500,
        location: "Bora Bora, French Polynesia",
        country: "French Polynesia"
    },
    {
        title: "Riverside Retreat",
        description: "A charming hotel on the banks of a peaceful river.",
        image: "https://www.travelplusstyle.com/wp-content/gallery/st-regis-vommuli/str4315re-212709-whale-bar-exterior-high.jpg",
        price: 9000,
        location: "Amsterdam, Netherlands",
        country: "Netherlands"
    },
    {
        title: "Skyline Hotel",
        description: "A hotel with breathtaking views of the city skyline.",
        image: "https://thumbs.dreamstime.com/b/luxury-hotel-building-night-white-stone-las-vegas-254508110.jpg",
        price: 18000,
        location: "Dubai, UAE",
        country: "UAE"
    },
    {
        title: "The Vineyard Hotel",
        description: "A hotel located in a scenic vineyard.",
        image: "https://th.bing.com/th/id/OIP.7lfN0iMx_Pdk-n2c0ynVlwAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
        price: 15500,
        location: "Cape Town, South Africa",
        country: "South Africa"
    },
    {
        title: "Beachfront Bungalow",
        description: "A beachfront bungalow offering privacy and luxury.",
        image: "https://blogs-images.forbes.com/jimdobson/files/2016/07/02.MAIN-BUILDING.jpg",
        price: 17500,
        location: "Fiji Islands",
        country: "Fiji"
    },
    {
        title: "Luxury Yacht Stay",
        description: "A hotel experience on a private luxury yacht.",
        image: "https://th.bing.com/th/id/OIP.bCM66GPqdwbnWGBz9ASspQHaFb?w=2000&h=1467&rs=1&pid=ImgDetMain",
        price: 22000,
        location: "Monaco",
        country: "Monaco"
    },
    {
        title: "Urban Sanctuary",
        description: "A hotel offering a peaceful sanctuary within the bustling city.",
        image: "https://gocohospitality.com/wp-content/uploads/2019/04/casi-cielo-panama-bocas-del-toro-designboom-08.jpg",
        price: 15000,
        location: "Hong Kong",
        country: "Hong Kong"
    },
    {
        title: "Jungle River Lodge",
        description: "A rustic lodge located in the heart of the jungle.",
        image: "https://th.bing.com/th/id/OIP.XZ6fQlNy0e_qncsrEF1R2AHaHa?w=626&h=626&rs=1&pid=ImgDetMain",
        price: 9500,
        location: "Costa Rica",
        country: "Costa Rica"
    },
    {
        title: "Burj Al Arab",
        description: "An iconic luxury hotel on an artificial island, known for its sail-shaped design.",
        image: "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape.jpg?h=1080&w=1620",
        price: 20000,
        location: "Dubai",
        country: "United Arab Emirates"
      },
      {
        title: "Burj Khalifa Hotel",
        image: "https://www.hdwallpaper.nu/wp-content/uploads/2015/09/burj-khalifa_wallpaper_009.jpg",
        description: "A luxurious hotel offering breathtaking views from the tallest building in the world.",
        price: 25000,
        location: "Dubai",
        country: "United Arab Emirates"
      },
      {
        title: "The Peninsula Beijing",
        description: "A 5-star luxury hotel blending modern elegance with rich Chinese heritage.",
        image: "https://th.bing.com/th/id/R.440c138ae5616a0b382bbd0e0406378b?rik=oTBSc2rvq%2fbawA&riu=http%3a%2f%2ftravelsandliving.com%2fwp-content%2fuploads%2f2015%2f06%2funusual-hotels-Sheraton-Huzhou-Hot-Spring-Resort-b.jpg&ehk=vv4qxxw%2bFKsgobaG5G4uENiIlS7W7nw1SRsL%2bwVgQRc%3d&risl=&pid=ImgRaw&r=0",
        price: 18000,
        location: "Beijing",
        country: "China",
      },
      {
        title: "Mandarin Oriental, Shanghai",
        description: "A sophisticated hotel offering waterfront views in the heart of Shanghai.",
        image: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/banyan-tree-lijiang.jpg?ssl=1",
        price: 17000,
        location: "Shanghai",
        country: "China"
      },
      {
        title: "Anantara Veli Maldives Resort",
        description: "A stunning overwater bungalow resort offering a private escape in the Maldives.",
        image: "https://secure.s.forbestravelguide.com/img/properties/waldorf-astoria-maldives-ithaafushi/extra-large/waldorf-astoria-maldives-ithaafushi-stella-maris-ocean-villa.jpg",
        price: 35000,
        location: "Veligandu Island",
        country: "Maldives"
      },
      {
        title: "Soneva Jani Maldives",
        description: "An exclusive resort with luxurious overwater villas and pristine ocean views.",
        image: "https://global-uploads.webflow.com/5e93226606600f15bcd785e2/624230f80fe96561f5736670_intercontinental-maldives-full-aerial-view-3-bedroom-overwater-residence.jpg",
        price: 40000,
        location: "Medhufaru Island",
        country: "Maldives"
      },
      
];

module.exports = {data : sampleListings};



