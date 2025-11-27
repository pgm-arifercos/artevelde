const navigationData = [
    {
        name: "gamescom",
        link: "#",
        type: "internal"
    },
    {
        name: "Events",
        link: "#events-container",
        type: "internal"
    },
    {
        name: "Official website",
        link: "https://www.gamescom.global/en",
        type: "external"
    },
    {
        name: "Graduaat Programmeren",
        link: "https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren",
        type: "external"
    }
];

const parseSocials = (links) => {
    const socials = {};
    if (!links) return socials;
    links.forEach(link => {
        if (link.includes('instagram.com')) socials.instagram = link;
        else if (link.includes('x.com')) socials.twitter = link;
        else if (link.includes('youtube.com')) socials.youtube = link;
        else if (link.length > 0) socials.website = link; 
    });
    return socials;
};

const eventsData = [
    {
        id: "b3f3a2e1-9c8d-4b7a-8f6e-5d4c3b2a1e0f",
        stage: "Innovation Stage",
        event: {
            name: "Next-Gen Game Engines",
            description: "Join Tim Sweeney, CEO of Epic Games, as he explores the cutting-edge advancements in game engine technology. This session will cover the latest innovations in Unity’s development tools and their potential impact on the gaming industry. Attendees will gain insights into how these new technologies can enhance game development, improve performance, and enable more immersive and interactive experiences for players. Sweeney will also discuss upcoming features and tools designed to empower developers in creating next-generation games.",
            socials: parseSocials([
                "https://www.instagram.com/epicgames/",
                "https://x.com/EpicGames",
                "https://www.epicgames.com/site/en-US/home",
                "https://www.youtube.com/@EpicGamesStore"
            ]),
            image: "images/next-gen.png",
            from: 1787734800000,
            to: 1787742000000
        }
    },
    {
        id: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
        stage: "Main Showcase Stage",
        event: {
            name: "Final Fantasy XVI",
            description: "Step into the world of Final Fantasy XVI as Square Enix reveals the next wave of content for this epic fantasy RPG. In this presentation, fans will get an exclusive look at upcoming DLCs, gameplay expansions, and storylines that continue the journey of Clive Rosfield and the land of Valisthea. With stunning visuals, rich lore, and an immersive combat system, Final Fantasy XVI has redefined the series. The team at Square Enix will delve into new features, challenges, and fan-requested updates, offering a glimpse into how they are shaping the future of this beloved game. Don't miss this chance to witness the evolution of a modern classic.",
            socials: parseSocials([
                "https://www.instagram.com/ffxiv/",
                "https://x.com/FF_XIV_EN",
                "https://eu.finalfantasyxiv.com/",
                "https://www.youtube.com/@ffxiv"
            ]),
            image: "images/ff-xiv.png",
            from: 1787738400000,
            to: 1787743800000
        }
    },
    {
        id: "f0e1d2c3-b4a5-9687-7890-123456abcdef",
        stage: "Visionary Stage",
        event: {
            name: "Future of Open-World",
            description: "Join renowned game director Hidetaka Miyazaki, the creative force behind Elden Ring and Dark Souls, for a deep dive into the evolving world of open-world game design. As technology advances and player expectations shift, the boundaries of what open-world games can achieve are being pushed further than ever. In this session, Miyazaki will explore emerging trends, innovations in game mechanics, and the future of player-driven exploration. He will also discuss how FromSoftware has redefined open-world storytelling, blending intricate world-building with player freedom. Discover how future titles will enhance immersion, AI-driven interactivity, and narrative depth, setting the stage for the next era of gaming.",
            socials: parseSocials([
                "https://www.instagram.com/hidetaka.miyazaki_/",
                "https://x.com/MiyazakiTweets",
                "https://en.wikipedia.org/wiki/Hidetaka_Miyazaki"
            ]),
            image: "images/future-gaming.jpg",
            from: 1787749200000,
            to: 1787756400000
        }
    },
    {
        id: "9c8d7e6f-5b4a-3c2d-1e0f-a9b8c7d6e5f4",
        stage: "Main Showcase Stage",
        event: {
            name: "Starfield",
            description: "Dive into the vast universe of Starfield with Bethesda Game Studios as they unveil the next phase of their groundbreaking space RPG. In this special presentation, fans will get an inside look at new content, expansions, and gameplay mechanics that take exploration to uncharted territories. Discover how Bethesda is pushing the boundaries of open-world design, blending cutting-edge technology with the freedom to explore the stars. The developers will also share behind-the-scenes insights into upcoming storylines, new planets, and enhancements to ship-building, crafting, and combat systems. Whether you're a seasoned space traveler or new to the journey, this event promises to show why Starfield is shaping the future of RPGs in the cosmos.",
            socials: parseSocials([
                "https://www.instagram.com/starfieldgame/",
                "https://x.com/StarfieldGame",
                "https://bethesda.net/en/game/starfield",
                "https://www.youtube.com/@bethesda"
            ]),
            image: "images/starfield.jpg",
            from: 1787745600000,
            to: 1787752800000
        }
    },
    {
        id: "1a2b3c4d-5e6f-7a8b-9c0d-e1f2a3b4c5d6",
        stage: "Innovation Stage",
        event: {
            name: "AI and Machine Learning in Gaming",
            description: "Explore the transformative impact of AI and machine learning on the gaming industry with Epic Games' CEO Tim Sweeney. In this insightful session, Sweeney will discuss how cutting-edge AI technology is revolutionizing game development, from creating more responsive and adaptive NPCs to procedural content generation and enhanced player experiences. Learn how machine learning is being harnessed to build smarter, more immersive worlds that evolve based on player choices and behavior. Sweeney will also provide a look at future possibilities, where AI-driven innovations could redefine the boundaries of creativity and interaction in gaming. Whether you're a developer or a gamer, this talk will offer a glimpse into the future of AI-powered gameplay.",
            socials: parseSocials([
                "https://www.instagram.com/epicgames/",
                "https://www.epicgames.com/site/en-US/home",
                "https://www.youtube.com/@EpicGamesStore"
            ]),
            image: "images/ai-machine.jpg",
            from: 1787817600000,
            to: 1787824800000
        }
    },
    {
        id: "89ab45cd-01ef-23gh-45ij-67kl89mn01op",
        stage: "Main Showcase Stage",
        event: {
            name: "Cyberpunk 2077: Phantom Liberty",
            description: "CD Projekt Red returns to the dystopian streets of Night City with Phantom Liberty, the latest expansion for Cyberpunk 2077. In this exclusive showcase, the developers will unveil new storylines, gameplay mechanics, and major updates designed to elevate the Cyberpunk experience to new heights. Featuring fresh insights into the highly anticipated expansion, fans will get a closer look at the evolving world, including new characters, quests, and locations that expand the game's narrative universe. The team will also share key improvements based on player feedback, enhancing combat, AI, and world interaction. If you're a Cyberpunk fan or curious about the future of this genre-defining game, this session is a must-see.",
            socials: parseSocials([
                "https://www.instagram.com/cyberpunkgame/",
                "https://x.com/CyberpunkGame",
                "https://www.cyberpunk.net/us/en/",
                "https://www.youtube.com/@CyberpunkGame"
            ]),
            image: "images/cyberpunk.jpg",
            from: 1787833800000,
            to: 1787839200000
        }
    },
    {
        id: "2a3b4c5d-6e7f-8a9b-0c1d-e2f3a4b5c6d7",
        stage: "Visionary Stage",
        event: {
            name: "Storytelling in the Digital Age",
            description: "Legendary game writer and director Amy Hennig, known for her work on Uncharted and Legacy of Kain, delves into the evolving art of storytelling in modern video games. As the digital landscape expands, new technologies are transforming how narratives are built and experienced. In this insightful session, Hennig will explore the challenges and opportunities of crafting emotionally resonant, interactive stories that respond to player choices. She will share her experience creating character-driven narratives that go beyond traditional media, offering a glimpse into the future of storytelling where players are both audience and co-authors. Whether you're a developer, writer, or gamer, this talk provides a masterclass on shaping the future of interactive narrative design.",
            socials: parseSocials([
                "https://www.instagram.com/amy_hennig/",
                "https://x.com/amy_hennig",
                "https://en.wikipedia.org/wiki/Amy_Hennig"
            ]),
            image: "images/storytelling.jpg",
            from: 1787846400000,
            to: 1787850000000
        }
    },
    {
        id: "3b4c5d6e-7f8a-9b0c-1d2e-f3a4b5c6d7e8",
        stage: "Virtual Stage",
        event: {
            name: "The Impact of VR",
            description: "Visionary entrepreneur Palmer Luckey, the founder of Oculus, takes the stage to explore the transformative impact of Virtual Reality (VR) on the gaming industry. In this engaging session, Luckey will discuss how VR technology has evolved from niche experimentation to mainstream gaming, unlocking new levels of immersion and interactivity. Attendees will get an inside look at the innovations that have shaped VR gaming so far and the next generation of hardware and software that will push the boundaries of player experiences. From haptic feedback to full-body tracking, Luckey will also explore how VR is setting the stage for entirely new genres of gameplay, revolutionizing how we interact with virtual worlds. Don't miss this opportunity to see the future of gaming through the eyes of a VR pioneer.",
            socials: parseSocials([
                "https://x.com/PalmerLuckey",
                "https://www.palmerluckey.com/",
                "https://www.youtube.com/@PalmerLuckey"
            ]),
            image: "images/future-vr.jpeg",
            from: 1787914800000,
            to: 1787922000000
        }
    },
    {
        id: "4c5d6e7f-8a9b-0c1d-2e3f-a4b5c6d7e8f9",
        stage: "Main Showcase Stage",
        event: {
            name: "Assassin's Creed Mirage",
            description: "Ubisoft invites you to step into the richly detailed world of Assassin's Creed Mirage, the newest chapter in the iconic franchise. In this presentation, the development team will showcase how Mirage takes the series back to its roots with a focus on stealth, parkour, and immersive storytelling. Set in the bustling streets of 9th-century Baghdad, players will get a sneak peek into the historically rich environment, new characters, and intricate missions that harken back to the early Assassin's Creed games. The session will cover the redefined combat and exploration systems, along with fresh gameplay mechanics that will keep players engaged in the city’s vibrant open world. Join Ubisoft as they discuss their vision for the future of Assassin's Creed while honoring its past.",
            socials: parseSocials([
                "https://www.instagram.com/assassins_uk/",
                "https://x.com/assassinscreed",
                "https://www.ubisoft.com/en-gb/game/assassins-creed/mirage",
                "https://www.youtube.com/watch?v=x55lAlFtXmw"
            ]),
            image: "images/mirage.jpg",
            from: 1787922000000,
            to: 1787925600000
        }
    },
    {
        id: "5d6e7f8a-9b0c-1d2e-3f4a-b5c6d7e8f9a0",
        stage: "Visionary Stage",
        event: {
            name: "Inclusion in Gaming",
            description: "Join Anita Sarkeesian, renowned feminist media critic and founder of Feminist Frequency, as she leads an important discussion on diversity and inclusion in the gaming industry. This thought-provoking session will explore the critical role of representation and inclusivity in game design, development, and storytelling. Sarkeesian will address the challenges and opportunities faced by the industry in creating more inclusive content and environments for both players and creators. The talk will include case studies of successful diverse representations, strategies for fostering inclusive game design, and the impact of these practices on player communities. Attendees will gain valuable insights into how the industry can evolve to better reflect and engage a global audience.",
            socials: parseSocials([
                "https://www.instagram.com/anitasarkeesian/",
                "https://x.com/anitasarkeesian",
                "https://anitasarkeesian.com/"
            ]),
            image: "images/inclusion.jpg",
            from: 1787907600000,
            to: 1787913000000
        }
    },
    {
        id: "6e7f8a9b-0c1d-2e3f-4a5b-c6d7e8f9a0b1",
        stage: "Main Showcase Stage",
        event: {
            name: "Horizon Forbidden West",
            description: "Dive deeper into the post-apocalyptic world of Horizon Forbidden West with Guerrilla Games as they reveal the latest developments and future plans for their acclaimed action RPG. In this exclusive presentation, fans will be treated to a preview of upcoming expansions, new environments, and expanded lore that will enrich the game's already expansive universe. Discover how Guerrilla Games is enhancing the gameplay experience with innovative features, upgraded graphics, and more intricate storylines. The session will also cover how player feedback has influenced the latest updates and what lies ahead for the protagonist, Aloy. Whether you're a seasoned explorer or new to the world of Horizon, this event promises to provide exciting insights and updates.",
            socials: parseSocials([
                "https://www.instagram.com/horizonforbiddenwest_official/",
                "https://x.com/HorizonFWgame",
                "https://www.guerrilla-games.com/games",
                "https://www.youtube.com/watch?v=Lq594XmpPBg"
            ]),
            image: "images/horizon.jpg",
            from: 1787992200000,
            to: 1787997600000
        }
    }
];