const products = [
  // PS4
  // CONSOLES
  {
    title: "PS4 Pro 1TB Console with Death Stranding",
    productDescription: `PlayStation 4 Pro gets you closer to your game. Heighten your experiences. Enrich your adventures. Let the super-charged PS4 Pro lead the way.`,

    productFeatures: `
    Spectacular Graphics : Explore vivid game worlds with rich visuals heightened by PS4™ Pro. |
    Enhanced Gameplay Support for faster frame rates delivers super-sharp action for select PS4™ games. |
    One Unified Gaming Community Compatible with every PS4™ game. Play online with other PS4™ players with PlayStation® Plus. |
    Extraordinary Entertainment With up to 4K streaming and 4K auto-upscaling for video content.
  `,
    price: 1679.0,
    countInStock: 20,
    rating: 4.8,
    numReviews: 1026,
    platform: "PS4",
    category: "Console",
    subCategory: "",
    productImages: [],
  },
  {
    title: `PS4 500GB Console + 7 Games + Carrying Case + 3 Months Membership Bundle`,
    productDescription: `The PlayStation®4 console will unlock your gaming potential with captivating new gaming worlds and a deeply connected gaming community. With an astounding launch lineup and over 180 games in development the PS4 console offers more top-tier blockbusters and inventive indie hits than any other next-gen console. Developer Inspired, Gamer Focus. PlayStation 4. Greatness Awaits.`,

    productFeatures: `
    The Best Place to Play: The PlayStation®4 system opens the door to an incredible journey through immersive new worlds and allows you to become the hero of your own epic story. Featuring dynamic connected gaming, intelligent personalization, deeply integrated social capabilities, and innovative second-screen features in enabled games - you can push the boundaries of play with a system that is developer inspired, gamer focused. |
    
    Gamer Focused, Developer Inspired: The PS4 system focuses on the gamer, ensuring that the very best games and the most immersive experiences are possible on the platform. The PS4 system enables the greatest game developers in the world to unlock their creativity and push the boundaries of play through a system that is tuned specifically to their needs. The PS4 system is centered around a powerful custom chip that contains eight x86-64 cores and a state of the art 1.84 TFLOPS graphics processor with 8 GB of ultra-fast GDDR5 unified system memory, easing game creation and increasing the richness of content achievable on the platform. The end result is new games with rich, high-fidelity graphics and deeply immersive experiences. |
    
    New DualShock®4 Wireless Controller: The DualShock®4 controller features new innovations to deliver more immersive gaming experiences, including a highly sensitive six-axis sensor as well as a touch pad located on the top of the controller, which offers completely new ways to play and interact with games. The new SHARE button puts video streaming and sharing a tap away. |
    
    Share Your Epic Moments: Connect with your community and share your epic triumphs with the press of a button. Simply hit the SHARE button on the controller to upload your recent gameplay footage directly to Facebook while you continue playing, or stream your live gameplay to Ustream or Twitch. Or if a single image will tell the story, upload a screenshot to Twitter for the world to see.
  `,
    price: 1369.0,
    countInStock: 45,
    rating: 4.3,
    numReviews: 2031,
    platform: "PS4",
    category: "Console",
    subCategory: "",
    productImages: [],
  },
  // ACCESSORIES
  {
    title: "Sony DUALSHOCK 4 Black Wireless Controller",
    productDescription: `Enhance your gaming experience with the Sony DualShock 4 Wireless Controller for PlayStation 4. Play your favorite video games with a PS4 controller that combines revolutionary features and comfort with intuitive, precision controls. Its definitive analog sticks and trigger buttons deliver greater response and sensitivity along with a multi touch pad for more instinctive and natural gameplay. In addition, the PlayStation Camera and Share button features makes social media capabilities and playing with friends easy and painless. Join a new era of gaming with the Sony PlayStation 4 DualShock 4 Wireless Controller.`,

    productImages: [],

    productFeatures: `
    
    Precision Control: The feel, shape, and sensitivity of the DualShock®4's analog sticks and trigger buttons offer players absolute comfort and control for all games on PlayStation®4. | 
    
    Sharing at your Fingertips: The Share button makes sharing your greatest gaming moments as easy as a push of a button. Upload gameplay videos and screenshots directly from your system or live-stream your gameplay, all without disturbing the game in progress. |
    
    Innovative Features: Revolutionary features like the touch pad, integrated light bar, and built-in speaker offer exciting ways to experience and interact with your games and its 3.5mm audio jack offers a practical personal audio solution for gamers who want to listen to their games in private. | 
    
    Charge Efficiently: The DualShock®4 Wireless Controller can be easily recharged by plugging it into your PlayStation®4 system, even when on standby, or with any standard charger with a micro-USB port.`,
    price: 279.0,
    countInStock: 12,
    rating: 4,
    numReviews: 965,
    category: "accessories",
    subCategory: "Controllers & Gamepads",
    platform: "PS4",
  },
  {
    title: "Turtle Beach Elite 800 Premium Wireless headset PS4",
    productDescription: `Uncompromising, the Elite 800 is the ultimate 100 per cent wireless, active noise-cancelling gaming headset for PS4 Pro, PS4 and PS3, featuring Superhuman Hearing, DTS Headphone:X 7.1 Surround Sound, and DTS Surround Sound modes and EQ audio presets that further enhance your games, music and movies.`,

    productFeatures: `
    DTS Headphone:X 7.1 Surround Sound: Pinpoint the exact location of every sound with immersive 7.1 surround sound and choose from multiple EQ Presets to customise your experience even further. | 

    Superhuman Hearing: Gain the competitive advantage by hearing every single sound around you, like enemies sneaking up on your six and weapon reloads just before an ambush. |

    Active Noise-Cancellation: Completely immerse yourself in your gaming experience and eliminate unwanted distractions with active noise-cancellation. | 

    Boomless Gaming Microphones: Dual hidden noise-cancelling microphones ensure clear communication with accurate in-game voice pickup. | 

    Magnetic Charging Stand: Easily charge and store your headset when not in use. |
    
    100 per cent Wireless: Experience crystal clear, interference-free game and chat audio with 100 per cent wireless connectivity to your PS4 Pro, PS4 and PS3.`,
    price: 1049.0,
    countInStock: 5,
    rating: 3.9,
    numReviews: 213,
    productImages: [],
    category: "accessories",
    subCategory: "Headsets & Earphones",
    platform: "PS4",
  },
  {
    title: "WD_BLACK P10 2TB External Gaming Hard Drive",
    productDescription: `The WD_Black P10 Game Drive comes in up to 2TB that can save up to 125 games, so you don't have to compromise which games to delete on your console or PC in order to make room for new ones. Quickly get into the game, no matter where you are. The WD_Black P10 Game Drive's easily portable and highly durable form factor gives you the ability to bring your library with you wherever you go. Simply plug in, log on, and you're ready to play any game in your coveted collection.`,

    productFeatures: `
      Capacity to hold: approximately 125 games |
      Storage space: 2TB. |
      USB standard: 3.0.
`,
    price: 339.0,
    countInStock: 10,
    rating: 4.2,
    numReviews: 129,
    category: "accessories",
    subCategory: "Hard Drive",
    platform: "PS4",
  },
  // PS5
  // CONSOLES
  {
    title: "Playstation 5",
    productDescription: `Play Has No Limits™ Step up your game with this sleek PS5™ console. The PlayStation 5 console will elevate your gaming experience like never before. With ultra-high speed SSD for faster load times, support for haptic feedback, adaptive triggers, and 3D Audio, your level of gameplay just got even better. Experience an all-new generation of incredible PlayStation® games on this PS5 console.`,

    productFeatures: `
    Ultra-High Speed SSD Maximize your play sessions with near instant load times for installed PS5™ games.
Integrated I/O The custom integration of the PS5™console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible. |
Ray Tracing - Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5™ games. |
4K-TV Gaming - Play your favorite PS5™ games on your stunning 4K TV. |
Up to 120fps with 120Hz output - Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays. |
HDR Technology - With an HDR TV, supported PS5™ games display an unbelievably vibrant and lifelike range of colors. |
8K Output - PS5™ consoles support 8K Output, so you can play games on your 4320p resolution display. |
Tempest 3D AudioTech - Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Through your headphones or TV speakers your surroundings truly come alive with Tempest 3D AudioTech in supported games. |
Haptic Feedback - Experience haptic feedback via the DualSense wireless controller in select PS5 titles and feel the effects and impact of your in-game actions through dynamic sensory feedback. |
Adaptive Triggers - Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5 games.`,
    price: 2099.0,
    countInStock: 0,
    rating: 4.9,
    numReviews: 124,
    category: "console",
    subCategory: "",
    platform: "PS5",
    productImages: [],
  },
  {
    title: "Playstation 5 (Digital Edition)",
    productDescription: `Play Has No Limits™ Step up your game with this sleek PS5 Digital Edition console. The PlayStation 5 Digital Edition console will elevate your gaming experience like never before. With ultra-high speed SSD for faster load times, support for haptic feedback, adaptive triggers, and 3D Audio, your level of gameplay just got even better. Experience an all-new generation of incredible PlayStation® games on the PS5 Digital Edition.`,

    productFeatures: `
    Ultra-High Speed SSD Maximize your play sessions with near instant load times for installed PS5™ games.
Integrated I/O The custom integration of the PS5™console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible. |
Ray Tracing - Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5™ games. |
4K-TV Gaming - Play your favorite PS5™ games on your stunning 4K TV. |
Up to 120fps with 120Hz output - Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays. |
HDR Technology - With an HDR TV, supported PS5™ games display an unbelievably vibrant and lifelike range of colors. |
8K Output - PS5™ consoles support 8K Output, so you can play games on your 4320p resolution display. |
Tempest 3D AudioTech - Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Through your headphones or TV speakers your surroundings truly come alive with Tempest 3D AudioTech in supported games. |
Haptic Feedback - Experience haptic feedback via the DualSense wireless controller in select PS5 titles and feel the effects and impact of your in-game actions through dynamic sensory feedback. |
Adaptive Triggers - Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5 games.`,
    price: 1679.0,
    countInStock: 0,
    rating: 4.7,
    numReviews: 92,
    category: "console",
    subCategory: "",
    platform: "PS5",
    productImages: [],
  },
  // ACCESSORIES
  {
    title: `PS5 DualSense Wireless Controller Midnight Black`,
    productDescription: `Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The PlayStation 5 DualSense™ wireless controller offers immersive haptic feedback, dynamic adaptive triggers and a built-in microphone, all integrated into an iconic comfortable design. Take gaming to the next level with this wireless PS5 controller. `,
    productFeatures: `
  Haptic feedback: Feel physically responsive feedback to your in-game actions with dual actuators which replace traditional rumble motors. In your hands, these dynamic vibrations can simulate the feeling of everything from environments to the recoil of different weapons. |
  
  Adaptive triggers: Experience varying levels of force and tension as you interact with your in-game gear and environments. From pulling back an increasingly tight bowstring to hitting the brakes on a speeding car, feel physically connected to your on-screen actions. |
  
  Built-in microphone and headset jack: Chat with friends online3 using the built-in microphone – or by connecting a headset to the 3.5mm jack. Easily switch voice capture on and off at a moment’s notice with the dedicated mute button. |
  
  Create button: Capture and broadcast3 your most epic gaming moments with the create button. Building on the success of the pioneering SHARE button, “create” offers players more ways to produce gaming content and broadcast their adventures live to the world. |
  
  Signature comfort: Take control with an evolved, two-tone design that combines an iconic, intuitive layout with enhanced sticks and a reimagined light bar. |
  
  Familiar features: The DualSense™ wireless controller retains many DUALSHOCK®4 features, returning for a new generation of play. |
  
  Built-in battery: Charge and play, now via USB Type-C®4. |
  
  Integrated speaker: Select games take on an extra dimension with higher-fidelity1 sound effects bursting from the controller. |
  
  Motion sensor: Bring intuitive motion control to supported games with the built-in accelerometer and gyroscope.
`,
    price: 319.0,
    countInStock: 0,
    rating: 4.8,
    numReviews: 36,
    category: "accessories",
    subCategory: "Controllers & Gamepads",
    platform: "PS5",
    productImages: [],
  },
  {
    title: `PS5 DualSense Wireless Controller-Arctic White`,
    productDescription: `Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The PlayStation 5 DualSense™ wireless controller offers immersive haptic feedback, dynamic adaptive triggers and a built-in microphone, all integrated into an iconic comfortable design. Take gaming to the next level with this wireless PS5 controller. `,
    productFeatures: `
  Haptic feedback: Feel physically responsive feedback to your in-game actions with dual actuators which replace traditional rumble motors. In your hands, these dynamic vibrations can simulate the feeling of everything from environments to the recoil of different weapons. |
  
  Adaptive triggers: Experience varying levels of force and tension as you interact with your in-game gear and environments. From pulling back an increasingly tight bowstring to hitting the brakes on a speeding car, feel physically connected to your on-screen actions. |
  
  Built-in microphone and headset jack: Chat with friends online3 using the built-in microphone – or by connecting a headset to the 3.5mm jack. Easily switch voice capture on and off at a moment’s notice with the dedicated mute button. |
  
  Create button: Capture and broadcast3 your most epic gaming moments with the create button. Building on the success of the pioneering SHARE button, “create” offers players more ways to produce gaming content and broadcast their adventures live to the world. |
  
  Signature comfort: Take control with an evolved, two-tone design that combines an iconic, intuitive layout with enhanced sticks and a reimagined light bar. |
  
  Familiar features: The DualSense™ wireless controller retains many DUALSHOCK®4 features, returning for a new generation of play. |
  
  Built-in battery: Charge and play, now via USB Type-C®4. |
  
  Integrated speaker: Select games take on an extra dimension with higher-fidelity1 sound effects bursting from the controller. |
  
  Motion sensor: Bring intuitive motion control to supported games with the built-in accelerometer and gyroscope.
`,
    price: 319.0,
    countInStock: 58,
    rating: 4.9,
    numReviews: 55,
    category: "accessories",
    subCategory: "Controllers & Gamepads",
    platform: "PS5",
    productImages: [],
  },
  {
    title: "PlayStation 5 PULSE 3D Wireless Gaming Headset",
    productDescription: `The PS5 PULSE 3D wireless headset features fine-tuned 3D audio, a sleek new look, noise-cancelling microphones, and easy access controls. Play games and stream videos with wireless PS5 headphones specifically built to deliver quality audio from the PlayStation 5 console. Sound quality on your PS5 headset just got even better with the PS5 PULSE 3D headset.`,

    productFeatures: `
  Fine-tuned for 3D Audio: The PULSE 3D wireless PS5 headset has been specifically tuned to deliver the 3D Audio made possible by the PlayStation®5 console. Powered by Tempest 3D AudioTech, the PS5™ console can put you at the center of 
  incredibly immersive soundscapes where it feels as if the sound comes from every direction. |
  
  Refined design: Play in style with a sleek headset that perfectly complements the look of the PS5 console and features refined earpads and a headband strap for added comfort. |
  
  Dual hidden microphones: Ensure you're heard by your friends online with two built-in microphones, optimally positioned for clear voice capture and enhanced by noise-cancelling technology. |
  
  Easy access-controls: Adjust your set-up as you play with built-in mic mute, master volume and in-game audio to chat mix controls. Easily check how you sound to your teammates too with the dedicated mic monitoring button. |
  
  Wireless adaptor: Enjoy up to 12 hours of wireless play thanks to the built-in rechargeable battery. Connect to PS5 and PS4™consoles as well as compatible Windows and macOS® computers using the included adaptor. |
  
  3.5mm jack: Simply plug the headset into PlayStation®VR as well as mobile devices with the included 3.5mm jack audio cable.`,
    price: 449.0,
    countInStock: 21,
    rating: 4.2,
    numReviews: 11,
    category: "accessories",
    subCategory: "Headsets & Earphones",
    platform: "PS5",
    productImages: [],
  },
  // MERCHANDISE
  {
    title: `Paladone PlayStation Metal Water Bottle PS5`,
    productDescription: `Ideal for use when you are out and about and easy to slip into your bag, backpack, or the cup holder in your car. This 500ml (16floz) double-walled stainless steel water bottle is also great to use at home when you are playing your favorite PlayStation game.`,

    productFeatures: `
    STAY REFRESHED: Ideal for use at home, at work, and easy to slip into your bag, backpack, or the cup holder in your car for refreshment wherever you go. With a 500ml (16floz) capacity, this double-walled stainless steel water bottle also has a screw-top lid to keep drinks fresh and prevent spills. |
    
    ICONIC STYLING: Suitable for both hot and cold drinks, the cool white exterior of this water bottle is decorated with the PlayStation logo in blue and the iconic action button symbols - triangle, circle, cross, and square - in a silver finish. |
    
    GREAT COLLECTABLE GIFT: This PS5 PlayStation Metal Water Bottle makes a great practical gift for anyone dedicated to this iconic gaming console brand. Plus collectors of authentic PlayStation merchandise will welcome this addition to their collection of memorabilia. |
    
    OFFICIAL MERCHANDISE: Perfect gift for all PlayStation fans, superb quality, this PlayStation PS5 Metal Water Bottle is officially licensed and approved by Sony Interactive Entertainment Europe Ltd. |

    DESIGNED IN THE UK: Designed responsibly in the UK by Paladone, the awe-inspiring creators of epic, geeky, and fun gifts.`,
    price: 69.0,
    countInStock: 79,
    rating: 3.2,
    numReviews: 0,
    category: "merchandise",
    subCategory: "Mugs, Tumbler & Lunchbox",
    platform: "PS5",
    productImages: [],
  },
  {
    title: `PS5 Paladone PlayStation Icon Light XL`,
    productDescription: `Re-styled to coincide with the release of the PS5 gaming console, the cool white finish is accented by sleek black accent detail on the base. Featuring three different light modes - standard, blue on/off phasing, and music reactive. The XL PS5 PlayStation Icons Light is the perfect accompaniment to your gaming and will look great in any bedroom, gaming den, or man cave.`,

    productFeatures: `
    REIMAGINED FOR PS5: Our classic PlayStation Icons Light has been re-styled to coincide with the release of the PS5 gaming console. The cool white finish is accented by sleek black styling on the base. |

    ICONIC SYMBOLS: The light is formed by the four action button symbols (triangle, circle, cross, square), plus the PlayStation logo on the base. Standing 32cm tall with three light modes - standard, blue on/off phasing, and music reactive. |

    PRACTICAL & COLLECTABLE: This XL PS5 PlayStation Icons Light makes a great gift for any PlayStation fan or gamer. Powered by USB (cable included) or 3x AAA batteries (not included) so you can place the light anywhere in your home, gaming den, or man cave. |

    OFFICIAL MERCHANDISE: Perfect gift for all PlayStation fans, superb quality, this PlayStation Icons PS5 XL Light is officially licensed and approved by Sony Interactive Entertainment Europe Ltd. |

    DESIGNED IN THE UK: Designed responsibly in the UK by Paladone, the awe-inspiring creators of epic, geeky and fun gifts.`,
    price: 149.0,
    countInStock: 4,
    rating: 4.4,
    numReviews: 4,
    category: "merchandise",
    subCategory: "Lighting & Clocks",
    platform: "PS5",
    productImages: [],
  },
  // XBOX SERIES X | S
  // CONSOLES
  {
    title: `Xbox Series X Console + Wireless Controller + Xbox Ultimate Game Pass 3 Months`,
    productDescription: `Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles—all games look and play best on Xbox Series X. At the heart of Series X is the Xbox Velocity Architecture, which pairs a custom SSD with integrated software for faster, streamlined gameplay with significantly reduced load times. Seamlessly move between multiple games in a flash with Quick Resume. Explore rich new worlds and enjoy the action like never before with the unmatched 12 teraflops of raw graphic processing power. Enjoy 4K gaming at up to 120 frames per second, advanced 3D spatial sound, and more.`,

    productFeatures: `
    More playing, less waiting: Experience next-gen speed and performance with the Xbox Velocity Architecture, powered by a custom SSD and integrated software. Seamlessly move between multiple games in a flash with Quick Resume. |
    
    Thousands of games across four generations: Play thousands of games from four generations of Xbox, including Xbox One, Xbox 360, and Original Xbox titles with backward compatibility. Thanks to the power and speed of Xbox Series X, many of these games will look and play better than ever. |
    
    Meet the new Xbox Wireless Controller: Experience the modernized Xbox Wireless Controller, designed for enhanced comfort during gameplay. Stay on target with textured grip, seamlessly capture and share content. |
    
    More storage without compromise: The Storage Expansion Card for Xbox Series X delivers an additional 1TB of external memory while maintaining the same peak performance of the console's internal SSD for a streamlined gaming experience (sold separately). |
    
    Xbox Smart Delivery: Play the best available version of your game no matter which console you're playing on.
  `,
    price: 2499.0,
    countInStock: 0,
    rating: 4.5,
    numReviews: 74,
    category: "console",
    subCategory: "",
    platform: "Xbox Series X",
    productImages: [],
  },
  {
    title: `Xbox Series S Console`,
    productDescription: `Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point. Get started with an instant library of 100+ high quality games, including all new Xbox Game Studios titles like Halo Infinite the day they release, when you add Xbox Game Pass Ultimate (membership sold separately). Seamlessly move between multiple games in a flash with Quick Resume. At the heart of Series S is the Xbox Velocity Architecture, which pairs a custom-SSD with integrated software for faster, streamlined gameplay with significantly reduced load times.`,

    productFeatures: `
    More playing, less waiting: Experience next-gen speed and performance with the Xbox Velocity Architecture, powered by a custom SSD and integrated software. Seamlessly move between multiple games in a flash with Quick Resume. |
    
    Thousands of games across four generations: Play thousands of games from four generations of Xbox, including Xbox One, Xbox 360, and Original Xbox titles with backward compatibility. |
    
    Meet the new Xbox Wireless Controller: Experience the modernized Xbox Wireless Controller, designed for enhanced comfort during gameplay. Stay on target with textured grip, seamlessly capture and share content. |
    
    More storage without compromise: The Storage Expansion Card for Xbox Series X delivers an additional 1TB of external memory while maintaining the same peak performance of the console's internal SSD for a streamlined gaming experience (sold separately). |
    
    Xbox Smart Delivery: Play the best available version of your game no matter which console you're playing on. |

    Xbox Family Settings app - Game time now comes with more peace of mind with the free Xbox Family Settings app on Android and iOS. Easily manage your children’s activities on Xbox consoles and enable gaming options that are right for your family. Quickly get into the fun by adding your children to your family account in a snap. Set screen time, update content restrictions, and stay on top of incoming friend requests.`,
    price: 1249.0,
    countInStock: 49,
    rating: 4.4,
    numReviews: 34,
    category: "console",
    subCategory: "",
    platform: "Xbox Series S",
    productImages: [],
  },
  // ACCESSORIES
  {
    title: `Microsoft Xbox Series X Robot White Wireless Controller`,
    productDescription: `Experience the modernized design of the Xbox Wireless Controller in Robot White, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay with battery usage up to 40 hours. Stay on target with a hybrid D-pad and textured grip on the triggers, bumpers, and back-case. Seamlessly capture and share content such as screenshots, recordings, and more with the Share button. Connect using the USB-C port for direct plug and play to console and PC. Support for AA batteries is included on the rear. Plug in any compatible headset with the 3.5mm audio jack. Use the Xbox Accessories app to remap buttons and create custom controller profiles for your favorite games. Quickly pair with, play on, and switch between devices including Xbox Series X|S, Xbox One, Windows 10 PCs, and Android. iOS support coming in the future.`,

    productFeatures: `
    Exceptional Design: Experience the modernized design of the Xbox Wireless Controller in Robot White, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay with battery usage up to 40 hours. |
    
    Hybrid D-Pad: Stay on target with the hybrid D-pad, textured grip on the triggers, bumpers, and back-case. Plug in any compatible headset with the 3.5mm audio headset jack. |
    
    USB-C Port: Connect using the USB-C port for direct plug and play to console or PC. Support for AA batteries is included on the rear. |
    
    Share Button: Seamlessly capture and share content with the Share button. |
    
    Xbox Accessories App: Make the controller your own by customizing button mapping with the Xbox Accessories app. |
    
    Bluetooth Technology: Includes Xbox Wireless and Bluetooth® technology for wireless gaming on supported consoles, Windows 10 PCs, and Android phones and tablets.`,
    price: 262.0,
    countInStock: 101,
    rating: 4.5,
    numReviews: 65,
    category: "accessories",
    subCategory: "Controllers & Gamepads",
    platform: "Xbox Series X",
    productImages: [],
  },
  {
    title: `Microsoft Xbox Series X Carbon Black Wireless Controller `,
    productDescription: `Experience the modernized design of the Xbox Wireless Controller in Carbon Black, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay with battery usage up to 40 hours. Stay on target with a hybrid D-pad and textured grip on the triggers, bumpers, and back-case. Seamlessly capture and share content such as screenshots, recordings, and more with the Share button. Connect using the USB-C port for direct plug and play to console and PC. Support for AA batteries is included on the rear. Plug in any compatible headset with the 3.5mm audio jack. Use the Xbox Accessories app to remap buttons and create custom controller profiles for your favorite games. Quickly pair with, play on, and switch between devices including Xbox Series X|S, Xbox One, Windows 10 PCs, and Android. iOS support coming in the future.`,

    productFeatures: `
    Exceptional Design: Experience the modernized design of the Xbox Wireless Controller in Carbon Black, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay with battery usage up to 40 hours. |
    
    Hybrid D-Pad: Stay on target with the hybrid D-pad, textured grip on the triggers, bumpers, and back-case. Plug in any compatible headset with the 3.5mm audio headset jack. |
    
    USB-C Port: Connect using the USB-C port for direct plug and play to console or PC. Support for AA batteries is included on the rear. |
    
    Share Button: Seamlessly capture and share content with the Share button. |
    
    Xbox Accessories App: Make the controller your own by customizing button mapping with the Xbox Accessories app. |
    
    Bluetooth Technology: Includes Xbox Wireless and Bluetooth® technology for wireless gaming on supported consoles, Windows 10 PCs, and Android phones and tablets.`,
    price: 262.0,
    countInStock: 101,
    rating: 4.1,
    numReviews: 194,
    category: "accessories",
    subCategory: "Controllers & Gamepads",
    platform: "Xbox Series X|S",
    productImages: [],
  },
  {
    title: `Microsoft Xbox Series X Stereo Headset`,
    productDescription: `Game loud and clear with the Xbox Wireless Headset, compatible with Xbox Series X and Xbox One. Surround yourself with spatial sound technologies including Windows Sonic, Dolby Atmos, and DTS Headphone:X. Auto-mute and voice isolation reduce background noise and allow for crystal-clear chat. The flexible, lightweight design with an adjustable headband makes for a more comfortable experience during extended play sessions while rotating earcup dials provide a quick and intuitive way to adjust volume and game/chat balance. Fine-tune your headset with the Xbox Accessories app for a customized audio experience. Pair directly to your console with Xbox Wireless radio without the need for dongles, cables, or a base station, and connect to your mobile device with Bluetooth® for on-the-go music or chat, even pair to your phone and Xbox simultaneously to chat with a friend on your phone while playing on your console.`,

    productFeatures: `
    Pair wirelessly: Pair directly to your console with Xbox Wireless radio without the need for dongles, cables, or a base station. |
    
    Incredible sound: Surround yourself with spatial sound technologies including Windows Sonic, Dolby Atmos, and DTS Headphone:X. |
    
    Reduced noise: Use auto-mute and voice isolation to reduce noise interruption for crystal-clear chat. Adjust your volume and game/chat levels with the rotating earcup dials. |
    
    Lightweight: Flexible, lightweight design with an adjustable headband. Enjoy up to 15 hours of battery life with the internal, rechargeable battery. |
    
    Bluetooth technology: Connect to mobile devices via Bluetooth® for on-the-go music or chat. Pair to your phone and Xbox simultaneously to chat with a friend on your phone and play on your console at the same time. |
    
    Xbox Accessories App: Fine-tune your experience with the Xbox Accessories app.`,
    price: 419.0,
    countInStock: 45,
    rating: 4.1,
    numReviews: 261,
    category: "accessories",
    subCategory: "Headsets & Earphones",
    platform: "Xbox Series X|S",
    productImages: [],
  },
  // NINTENDO SWITCH
  // CONSOLE
  {
    title: `Nintendo Switch with Neon Blue and Neon Red Joy-Con`,
    productDescription: `Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home Nintendo Switch console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Nintendo Switch Joy-Con controllers.`,

    productFeatures: `
          Home Gaming System - At home the main unit rests in the Nintendo Switch dock, which connects the system to the TV and lets you play with family and friends in the comfort of your living room. |
          
          On-the-Go - Lift Nintendo Switch from the dock and instantly transition to handheld mode for on-the-go gaming. By sharing Joy-Con, players can go head-to-head while away from home. You can also enjoy the same great games in tabletop mode by using the included stand to prop the system up. |
          
          New Play Styles - Remove the detachable Joy-Con from either side of Nintendo Switch for more play styles: One player can use a Joy-Con in each hand. Two players can each take one. |
          
          Includes traditional inputs of previous platforms, such as two analog sticks, A/B/X/Y buttons (or directional buttons), and two shoulder buttons. |
          
          Each Joy-Con can be used as a single controller. When playing this way, Joy-Con (L) and Joy-Con (R) have the same button layout. When a Joy-Con is held horizontally, the buttons on top can be used as L and R Buttons (they are called the SL and SR Buttons). |
          
          Capture Button: The Capture Button is located on Joy-Con (L) and is used to take gameplay screen shots. The player can then view, edit (add text of various sizes, colors and positions) and post them to popular social media networks. |
          
          Motion Control: Each Joy-Con includes a gyroscope and accelerometer. |
          
          HD Rumble: Both Joy-Con include advanced HD Rumble, which can provide compatible games with subtle vibrations that are much more realistic than before. |
          
          IR Motion Camera: Joy-Con (R) includes an IR Motion Camera that can detect the distance, shape and motion of nearby objects in specially designed games. |
          
          amiibo: There is an NFC reader/writer located on Joy-Con (R). (This is also included in the Nintendo Switch Pro Controller.) Nintendo Switch is compatible with existing amiibo; usage is game-dependent. |
          
          Rechargeable: Joy-Con charge while attached to a docked Nintendo Switch system. They can also be charged using a Nintendo Switch charging grip accessory (sold separately). |
          
          Release Button: On the back of each Joy-Con is a small button that is pressed to detach the controller from the main unit. |
          
          Enhanced Parental Controls - The system includes various on-device parental controls, but parents can also download a smart device application that can be used to easily and conveniently monitor and set parental controls for a Nintendo Switch system.`,
    price: 1259.0,
    countInStock: 38,
    rating: 4.7,
    numReviews: 5318,
    category: "Consoles",
    subCategory: "",
    platform: "Nintendo Switch",
    productImages: [],
  },
  {
    title: `Nintendo Switch Lite Yellow`,
    productDescription: `Introducing Nintendo Switch™ Lite, a new version of the Nintendo Switch system that’s optimized for personal, handheld play. Nintendo Switch Lite is a small and light Nintendo Switch system at a great price. With a built-in +Control Pad, and a sleek, unibody design, Nintendo Switch Lite is great for on-the-go gaming. Nintendo Switch Lite is compatible with popular games such as Super Mario Odyssey™, Mario Kart™ 8 Deluxe, Super Smash Bros.™ Ultimate, The Legend of Zelda™: Breath of the Wild, and more. If you’re looking for a gaming system all your own, Nintendo Switch Lite is ready to hit the road whenever you are.`,

    productFeatures: `
          Handheld Nintendo Switch™ gaming at a great price. |
          For every member of your family, there’s a member of ours. |
          Optimized for personal, handheld play, Nintendo Switch Lite is a small and light Nintendo Switch system. |
          Features a sleek, unibody design with fully integrated controls and a built-in +Control Pad. |
          Compatible with all physical and digital Nintendo Switch™ games that support Handheld mode.`,
    price: 899.0,
    countInStock: 24,
    rating: 4.7,
    numReviews: 1278,
    category: "Consoles",
    subCategory: "",
    platform: "Nintendo Switch",
    productImages: [],
  },
  // ACCESSORIES
  {
    title: `Nintendo Switch Joy-Con - Neon Red/Blue`,
    productDescription: `Introducing Joy-Con, controllers that make new kinds of gaming possible, for use with Nintendo Switch.The versatile Joy-Con offer multiple surprising new ways for players to have fun. Two Joy-Con can be used independently in each hand, or together as one game controller when attached to the Joy-Con grip. They can also attach to the main console for use in handheld mode, or be shared with friends to enjoy two-player action in supported games. Each Joy-Con has a full set of buttons and can act as a standalone controller, and each includes an accelerometer and gyro-sensor, making independent left and right motion control possible.`,

    productFeatures: `
    The versatile Joy-Con offer multiple surprising ways for players to have fun. |
    
    Two Joy-Con can be used independently in each hand or together as one game controller when attached to the Joy-Con grip (sold separately). |
    
    They can also attach to the main console for use in handheld mode or be shared with friends to enjoy two-player action in supported games. |
    
    Each Joy-Con has a full set of buttons and can act as a standalone controller and each includes an accelerometer and gyroscope motion sensor, making independent left and right motion control possible.`,
    price: 379.0,
    countInStock: 23,
    rating: 4.6,
    numReviews: 1492,
    category: "accessories",
    subCategory: "Controllers & Gamepads",
    platform: "Nintendo Switch",
    productImages: [],
  },
  {
    title: `Hori Switch Split Pad Pro - Midnight Blue`,
    productDescription: `Enjoy the full-size controller experience in handheld mode with the HORI Split Pad Pro! Featuring full-size analog sticks, a precision D-pad, and large shoulder buttons designed for comfort and accuracy, even during marathon gaming sessions. Advanced features include assignable rear triggers, Turbo functionally, and more. Perfect for high-pace action titles and many other genres. Enhance your gaming experience with the Split Pad Pro! (Does not include Motion Controls, HD Rumble, NFC, or IR camera.) Officially Licensed by Nintendo.`,

    productFeatures: `
    Full-size controller experience in handheld mode. |
    Larger grip, buttons, triggers, analog sticks, and D-Pad. |
    Assignable rear triggers, Turbo functionally, and more. |
    Midnight Blue design. |
    Officially Licensed by Nintendo.`,
    price: 269.0,
    countInStock: 21,
    rating: 4.5,
    numReviews: 2,
    category: "accessories",
    subCategory: "Controllers & Gamepads",
    platform: "Nintendo Switch",
    productImages: [],
  },
];

export default products;
