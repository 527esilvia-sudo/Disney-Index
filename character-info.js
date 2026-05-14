const movieBank = [
    {
        movie: "Snow White and the Seven Dwarfs",
        characters: [
            { cname: "Snow White", role: "Protagonist", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Prince Florian", role: "Love Interest", personality: ["Heroic"], species: "Human", alignment: "HERO" },
            { cname: "Evil Queen", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Doc", role: "Dwarf", personality: ["Clever"], species: "Dwarf", alignment: "GOOD" },
            { cname: "Grumpy", role: "Dwarf", personality: ["Stoic"], species: "Dwarf", alignment: "GOOD" },
            { cname: "Happy", role: "Dwarf", personality: ["Chaotic"], species: "Dwarf", alignment: "CHAOTIC" },
            { cname: "Sleepy", role: "Dwarf", personality: ["Stoic"], species: "Dwarf", alignment: "GOOD" },
            { cname: "Bashful", role: "Dwarf", personality: ["Anxious"], species: "Dwarf", alignment: "NEUTRAL" },
            { cname: "Sneezy", role: "Dwarf", personality: ["Chaotic"], species: "Dwarf", alignment: "CHAOTIC" },
            { cname: "Dopey", role: "Dwarf", personality: ["Chaotic"], species: "Dwarf", alignment: "CHAOTIC" }
        ]
    },

    {
        movie: "Pinocchio",
        characters: [
            { cname: "Pinocchio", role: "Protagonist", personality: ["Neutral"], species: "Puppet", alignment: "GOOD" },
            { cname: "Geppetto", role: "Father Figure", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Jiminy Cricket", role: "Guide", personality: ["Clever", "Loyal"], species: "Cricket", alignment: "GOOD" },
            { cname: "Blue Fairy", role: "Mentor", personality: ["Heroic"], species: "Fairy", alignment: "HERO" },

            { cname: "Honest John", role: "Antagonist", personality: ["Trickster"], species: "Fox", alignment: "VILLAIN" },
            { cname: "Gideon", role: "Side Villain", personality: ["Chaotic"], species: "Cat", alignment: "VILLAIN" },
            { cname: "Coachman", role: "Antagonist", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },
            { cname: "Stromboli", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },
            { cname: "Lampwick", role: "Peer", personality: ["Chaotic"], species: "Human", alignment: "NEUTRAL" },
            { cname: "Monstro", role: "Force", personality: ["Villainous"], species: "Whale", alignment: "VILLAIN" }
        ]
    },

    {
        movie: "Dumbo",
        characters: [
            { cname: "Dumbo", role: "Protagonist", personality: ["Anxious", "Kindhearted"], species: "Elephant", alignment: "GOOD" },
            { cname: "Timothy Q. Mouse", role: "Sidekick", personality: ["Chaotic", "Loyal"], species: "Mouse", alignment: "GOOD" },
            { cname: "Mrs. Jumbo", role: "Mother", personality: ["Kindhearted"], species: "Elephant", alignment: "GOOD" },

            { cname: "Ringmaster", role: "Antagonist", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Crows", role: "Support Group", personality: ["Chaotic"], species: "Birds", alignment: "CHAOTIC" },
            { cname: "Stork", role: "Messenger", personality: ["Stoic"], species: "Bird", alignment: "NEUTRAL" },
            { cname: "Clown Trio Leader", role: "Side Character", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },
            { cname: "Fire Chief", role: "Authority", personality: ["Stoic"], species: "Human", alignment: "GOOD" }
        ]
    },

    {
        movie: "Cinderella",
        characters: [
            { cname: "Cinderella", role: "Protagonist", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Prince Charming", role: "Love Interest", personality: ["Heroic"], species: "Human", alignment: "HERO" },
            { cname: "Fairy Godmother", role: "Mentor", personality: ["Kindhearted"], species: "Fairy", alignment: "HERO" },

            { cname: "Lady Tremaine", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },
            { cname: "Drizella", role: "Stepsister", personality: ["Villainous"], species: "Human", alignment: "CHAOTIC" },
            { cname: "Anastasia", role: "Stepsister", personality: ["Anxious"], species: "Human", alignment: "NEUTRAL" },

            { cname: "Jaq", role: "Sidekick", personality: ["Loyal"], species: "Mouse", alignment: "GOOD" },
            { cname: "Gus Gus", role: "Sidekick", personality: ["Chaotic"], species: "Mouse", alignment: "CHAOTIC" },
            { cname: "Lucifer", role: "Antagonist Pet", personality: ["Villainous"], species: "Cat", alignment: "VILLAIN" },
            { cname: "Grand Duke", role: "Advisor", personality: ["Stoic"], species: "Human", alignment: "GOOD" }
        ]
    },

    {
        movie: "Alice in Wonderland",
        characters: [
            { cname: "Alice", role: "Protagonist", personality: ["Curious"], species: "Human", alignment: "GOOD" },
            { cname: "White Rabbit", role: "Guide", personality: ["Anxious"], species: "Rabbit", alignment: "NEUTRAL" },
            { cname: "Cheshire Cat", role: "Guide/Trickster", personality: ["Chaotic"], species: "Cat", alignment: "CHAOTIC" },
            { cname: "Queen of Hearts", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Mad Hatter", role: "Side Character", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },
            { cname: "March Hare", role: "Side Character", personality: ["Chaotic"], species: "Animal", alignment: "CHAOTIC" },
            { cname: "Dormouse", role: "Side Character", personality: ["Stoic"], species: "Animal", alignment: "NEUTRAL" },
            { cname: "Caterpillar", role: "Guide", personality: ["Stoic"], species: "Insect", alignment: "NEUTRAL" },
            { cname: "Tweedledee", role: "Side Character", personality: ["Chaotic"], species: "Human-like", alignment: "CHAOTIC" },
            { cname: "Tweedledum", role: "Side Character", personality: ["Chaotic"], species: "Human-like", alignment: "CHAOTIC" }
        ]
    },

    {
        movie: "Peter Pan",
        characters: [
            { cname: "Peter Pan", role: "Protagonist", personality: ["Chaotic"], species: "Human-like", alignment: "CHAOTIC" },
            { cname: "Wendy Darling", role: "Co-Protagonist", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Captain Hook", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Tinker Bell", role: "Sidekick", personality: ["Chaotic"], species: "Fairy", alignment: "CHAOTIC" },
            { cname: "John Darling", role: "Side Character", personality: ["Stoic"], species: "Human", alignment: "NEUTRAL" },
            { cname: "Michael Darling", role: "Side Character", personality: ["Chaotic"], species: "Human", alignment: "NEUTRAL" },

            { cname: "Mr. Smee", role: "Side Villain", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Lost Boys Leader", role: "Side Character", personality: ["Chaotic"], species: "Human-like", alignment: "CHAOTIC" },
            { cname: "Tiger Lily", role: "Side Character", personality: ["Stoic"], species: "Human", alignment: "GOOD" }
        ]
    },

    {
        movie: "Sleeping Beauty",
        characters: [
            { cname: "Aurora", role: "Protagonist", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Prince Phillip", role: "Hero", personality: ["Heroic"], species: "Human", alignment: "HERO" },
            { cname: "Maleficent", role: "Villain", personality: ["Villainous"], species: "Fairy", alignment: "VILLAIN" },

            { cname: "Flora", role: "Fairy", personality: ["Kindhearted"], species: "Fairy", alignment: "GOOD" },
            { cname: "Fauna", role: "Fairy", personality: ["Kindhearted"], species: "Fairy", alignment: "GOOD" },
            { cname: "Merryweather", role: "Fairy", personality: ["Chaotic"], species: "Fairy", alignment: "CHAOTIC" },

            { cname: "King Stefan", role: "King", personality: ["Stoic"], species: "Human", alignment: "GOOD" },
            { cname: "Queen Leah", role: "Queen", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Maleficent’s Raven", role: "Side Villain", personality: ["Chaotic"], species: "Bird", alignment: "VILLAIN" }
        ]
    },

    {
        movie: "101 Dalmatians",
        characters: [
            { cname: "Pongo", role: "Protagonist", personality: ["Loyal"], species: "Dog", alignment: "GOOD" },
            { cname: "Perdita", role: "Protagonist", personality: ["Kindhearted"], species: "Dog", alignment: "GOOD" },

            { cname: "Cruella de Vil", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Roger Radcliffe", role: "Human Lead", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Anita Radcliffe", role: "Human Lead", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },

            { cname: "Horace", role: "Henchman", personality: ["Chaotic"], species: "Human", alignment: "VILLAIN" },
            { cname: "Jasper", role: "Henchman", personality: ["Stoic"], species: "Human", alignment: "VILLAIN" },

            { cname: "Lucky", role: "Puppy", personality: ["Chaotic"], species: "Dog", alignment: "CHAOTIC" },
            { cname: "Patch", role: "Puppy", personality: ["Chaotic"], species: "Dog", alignment: "CHAOTIC" },
            { cname: "Rolly", role: "Puppy", personality: ["Chaotic"], species: "Dog", alignment: "CHAOTIC" }
        ]
    },

    {
        movie: "The Jungle Book",
        characters: [
            { cname: "Mowgli", role: "Protagonist", personality: ["Neutral"], species: "Human", alignment: "GOOD" },
            { cname: "Baloo", role: "Mentor", personality: ["Chaotic"], species: "Bear", alignment: "GOOD" },
            { cname: "Bagheera", role: "Mentor", personality: ["Stoic"], species: "Panther", alignment: "GOOD" },

            { cname: "Shere Khan", role: "Villain", personality: ["Villainous"], species: "Tiger", alignment: "VILLAIN" },

            { cname: "Kaa", role: "Antagonist", personality: ["Trickster"], species: "Snake", alignment: "VILLAIN" },
            { cname: "King Louie", role: "Antagonist", personality: ["Chaotic"], species: "Orangutan", alignment: "VILLAIN" },

            { cname: "Colonel Hathi", role: "Side Character", personality: ["Stoic"], species: "Elephant", alignment: "NEUTRAL" },
            { cname: "Hathi Jr.", role: "Side Character", personality: ["Chaotic"], species: "Elephant", alignment: "CHAOTIC" }
        ]
    },
    {
        movie: "The Aristocats",
        characters: [
            { cname: "Duchess", role: "Protagonist", personality: ["Kindhearted"], species: "Cat", alignment: "GOOD" },
            { cname: "Thomas O'Malley", role: "Protagonist", personality: ["Chaotic"], species: "Cat", alignment: "CHAOTIC" },

            { cname: "Edgar", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Marie", role: "Kitten", personality: ["Kindhearted"], species: "Cat", alignment: "GOOD" },
            { cname: "Toulouse", role: "Kitten", personality: ["Chaotic"], species: "Cat", alignment: "CHAOTIC" },
            { cname: "Berlioz", role: "Kitten", personality: ["Clever"], species: "Cat", alignment: "GOOD" },

            { cname: "Roquefort", role: "Sidekick", personality: ["Anxious"], species: "Mouse", alignment: "NEUTRAL" },
            { cname: "Frou-Frou", role: "Horse", personality: ["Stoic"], species: "Horse", alignment: "GOOD" }
        ]
    },

    {
        movie: "Robin Hood",
        characters: [
            { cname: "Robin Hood", role: "Protagonist", personality: ["Heroic"], species: "Fox", alignment: "HERO" },
            { cname: "Little John", role: "Sidekick", personality: ["Loyal"], species: "Bear", alignment: "GOOD" },

            { cname: "Maid Marian", role: "Love Interest", personality: ["Kindhearted"], species: "Fox", alignment: "GOOD" },

            { cname: "Prince John", role: "Villain", personality: ["Villainous"], species: "Lion", alignment: "VILLAIN" },
            { cname: "Sheriff of Nottingham", role: "Villain", personality: ["Villainous"], species: "Wolf", alignment: "VILLAIN" },

            { cname: "Sir Hiss", role: "Side Villain", personality: ["Trickster"], species: "Snake", alignment: "VILLAIN" },
            { cname: "Friar Tuck", role: "Side Character", personality: ["Kindhearted"], species: "Badger", alignment: "GOOD" },

            { cname: "Alan-a-Dale", role: "Narrator", personality: ["Chaotic"], species: "Rooster", alignment: "NEUTRAL" }
        ]
    },

    {
        movie: "The Many Adventures of Winnie the Pooh",
        characters: [
            { cname: "Winnie the Pooh", role: "Protagonist", personality: ["Kindhearted"], species: "Bear", alignment: "GOOD" },
            { cname: "Piglet", role: "Sidekick", personality: ["Anxious"], species: "Pig", alignment: "GOOD" },
            { cname: "Tigger", role: "Sidekick", personality: ["Chaotic"], species: "Tiger", alignment: "CHAOTIC" },

            { cname: "Eeyore", role: "Side Character", personality: ["Stoic"], species: "Donkey", alignment: "NEUTRAL" },
            { cname: "Rabbit", role: "Organizer", personality: ["Stoic"], species: "Rabbit", alignment: "GOOD" },
            { cname: "Owl", role: "Advisor", personality: ["Clever"], species: "Owl", alignment: "GOOD" },
            { cname: "Kanga", role: "Mother", personality: ["Kindhearted"], species: "Kangaroo", alignment: "GOOD" },
            { cname: "Roo", role: "Child", personality: ["Chaotic"], species: "Kangaroo", alignment: "CHAOTIC" },
            { cname: "Christopher Robin", role: "Human Link", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" }
        ]
    },

    {
        movie: "The Fox and the Hound",
        characters: [
            { cname: "Tod", role: "Protagonist", personality: ["Kindhearted"], species: "Fox", alignment: "GOOD" },
            { cname: "Copper", role: "Protagonist", personality: ["Loyal"], species: "Dog", alignment: "GOOD" },

            { cname: "Amos Slade", role: "Antagonist", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Chief", role: "Dog", personality: ["Stoic"], species: "Dog", alignment: "NEUTRAL" },
            { cname: "Vixey", role: "Love Interest", personality: ["Kindhearted"], species: "Fox", alignment: "GOOD" },

            { cname: "Boomer", role: "Bird", personality: ["Chaotic"], species: "Bird", alignment: "CHAOTIC" },
            { cname: "Dinky", role: "Bird", personality: ["Chaotic"], species: "Bird", alignment: "CHAOTIC" },
            { cname: "Widow Tweed", role: "Caretaker", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" }
        ]
    },
    {
        movie: "The Little Mermaid",
        characters: [
            { cname: "Ariel", role: "Protagonist", personality: ["Curious"], species: "Mermaid", alignment: "GOOD" },
            { cname: "Prince Eric", role: "Love Interest", personality: ["Heroic"], species: "Human", alignment: "HERO" },

            { cname: "Ursula", role: "Villain", personality: ["Villainous"], species: "Sea Witch", alignment: "VILLAIN" },

            { cname: "Sebastian", role: "Advisor", personality: ["Stoic"], species: "Crab", alignment: "GOOD" },
            { cname: "Flounder", role: "Sidekick", personality: ["Kindhearted"], species: "Fish", alignment: "GOOD" },
            { cname: "Scuttle", role: "Comic Relief", personality: ["Chaotic"], species: "Seagull", alignment: "CHAOTIC" },

            { cname: "King Triton", role: "Authority", personality: ["Stoic"], species: "Merfolk", alignment: "GOOD" },
            { cname: "Flotsam", role: "Villain Minion", personality: ["Trickster"], species: "Eel", alignment: "VILLAIN" },
            { cname: "Jetsam", role: "Villain Minion", personality: ["Trickster"], species: "Eel", alignment: "VILLAIN" }
        ]
    },

    {
        movie: "Beauty and the Beast",
        characters: [
            { cname: "Belle", role: "Protagonist", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Beast", role: "Protagonist", personality: ["Stoic"], species: "Cursed Human", alignment: "GOOD" },

            { cname: "Gaston", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Lumière", role: "Sidekick", personality: ["Chaotic"], species: "Enchanted Object", alignment: "CHAOTIC" },
            { cname: "Cogsworth", role: "Sidekick", personality: ["Stoic"], species: "Clock", alignment: "GOOD" },
            { cname: "Mrs. Potts", role: "Mother Figure", personality: ["Kindhearted"], species: "Teapot", alignment: "GOOD" },

            { cname: "Chip", role: "Child Character", personality: ["Chaotic"], species: "Teacup", alignment: "GOOD" },
            { cname: "Maurice", role: "Father", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "LeFou", role: "Side Villain", personality: ["Chaotic"], species: "Human", alignment: "VILLAIN" }
        ]
    },

    {
        movie: "Aladdin",
        characters: [
            { cname: "Aladdin", role: "Protagonist", personality: ["Chaotic"], species: "Human", alignment: "GOOD" },
            { cname: "Jasmine", role: "Co-Protagonist", personality: ["Heroic"], species: "Human", alignment: "GOOD" },

            { cname: "Genie", role: "Sidekick", personality: ["Chaotic"], species: "Genie", alignment: "CHAOTIC" },
            { cname: "Abu", role: "Sidekick", personality: ["Chaotic"], species: "Monkey", alignment: "CHAOTIC" },

            { cname: "Jafar", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },
            { cname: "Iago", role: "Villain Sidekick", personality: ["Trickster"], species: "Parrot", alignment: "VILLAIN" },

            { cname: "Sultan", role: "Authority", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Rajah", role: "Protector", personality: ["Stoic"], species: "Tiger", alignment: "GOOD" }
        ]
    },

    {
        movie: "The Lion King",
        characters: [
            { cname: "Simba", role: "Protagonist", personality: ["Heroic"], species: "Lion", alignment: "HERO" },
            { cname: "Nala", role: "Co-Protagonist", personality: ["Heroic"], species: "Lion", alignment: "HERO" },

            { cname: "Mufasa", role: "Mentor", personality: ["Stoic"], species: "Lion", alignment: "HERO" },
            { cname: "Scar", role: "Villain", personality: ["Villainous"], species: "Lion", alignment: "VILLAIN" },

            { cname: "Rafiki", role: "Guide", personality: ["Clever"], species: "Mandrill", alignment: "GOOD" },

            { cname: "Timon", role: "Sidekick", personality: ["Chaotic"], species: "Meerkat", alignment: "CHAOTIC" },
            { cname: "Pumbaa", role: "Sidekick", personality: ["Chaotic"], species: "Warthog", alignment: "CHAOTIC" },

            { cname: "Zazu", role: "Advisor", personality: ["Stoic"], species: "Bird", alignment: "GOOD" },

            { cname: "Shenzi", role: "Antagonist", personality: ["Villainous"], species: "Hyena", alignment: "VILLAIN" },
            { cname: "Banzai", role: "Antagonist", personality: ["Villainous"], species: "Hyena", alignment: "VILLAIN" }
        ]
    },

    {
        movie: "Mulan",
        characters: [
            { cname: "Mulan", role: "Protagonist", personality: ["Heroic"], species: "Human", alignment: "HERO" },
            { cname: "Li Shang", role: "Commander", personality: ["Stoic"], species: "Human", alignment: "GOOD" },

            { cname: "Mushu", role: "Sidekick", personality: ["Chaotic"], species: "Dragon", alignment: "CHAOTIC" },

            { cname: "Shan Yu", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Cri-Kee", role: "Sidekick", personality: ["Loyal"], species: "Cricket", alignment: "GOOD" },
            { cname: "Fa Zhou", role: "Father", personality: ["Stoic"], species: "Human", alignment: "GOOD" },

            { cname: "Grandmother Fa", role: "Comic Relief", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },
            { cname: "Yao", role: "Soldier", personality: ["Chaotic"], species: "Human", alignment: "GOOD" },
            { cname: "Ling", role: "Soldier", personality: ["Chaotic"], species: "Human", alignment: "GOOD" },
            { cname: "Chien-Po", role: "Soldier", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" }
        ]
    },
    {
        movie: "Tarzan",
        characters: [
            { cname: "Tarzan", role: "Protagonist", personality: ["Heroic"], species: "Human", alignment: "HERO" },
            { cname: "Jane Porter", role: "Love Interest", personality: ["Clever"], species: "Human", alignment: "GOOD" },

            { cname: "Kerchak", role: "Leader", personality: ["Stoic"], species: "Gorilla", alignment: "GOOD" },
            { cname: "Kala", role: "Mother Figure", personality: ["Kindhearted"], species: "Gorilla", alignment: "GOOD" },

            { cname: "Clayton", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Terk", role: "Sidekick", personality: ["Chaotic"], species: "Gorilla", alignment: "CHAOTIC" },
            { cname: "Tantor", role: "Sidekick", personality: ["Anxious"], species: "Elephant", alignment: "NEUTRAL" },

            { cname: "Professor Porter", role: "Support", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Young Tarzan", role: "Young Protagonist", personality: ["Neutral"], species: "Human", alignment: "GOOD" }
        ]
    },

    {
        movie: "The Emperor’s New Groove",
        characters: [
            { cname: "Kuzco", role: "Protagonist", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },
            { cname: "Pacha", role: "Deuteragonist", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },

            { cname: "Yzma", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },
            { cname: "Kronk", role: "Sidekick", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },

            { cname: "Chaca", role: "Child", personality: ["Chaotic"], species: "Human", alignment: "NEUTRAL" },
            { cname: "Tipo", role: "Child", personality: ["Chaotic"], species: "Human", alignment: "NEUTRAL" },

            { cname: "Bucky", role: "Animal Sidekick", personality: ["Chaotic"], species: "Squirrel", alignment: "CHAOTIC" },
            { cname: "Royal Advisor", role: "Authority", personality: ["Stoic"], species: "Human", alignment: "GOOD" }
        ]
    },

    {
        movie: "Atlantis: The Lost Empire",
        characters: [
            { cname: "Milo Thatch", role: "Protagonist", personality: ["Clever"], species: "Human", alignment: "GOOD" },
            { cname: "Kida", role: "Co-Protagonist", personality: ["Heroic"], species: "Atlantean", alignment: "HERO" },

            { cname: "Commander Rourke", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Helga Sinclair", role: "Antagonist", personality: ["Stoic"], species: "Human", alignment: "VILLAIN" },

            { cname: "Vinny", role: "Crew", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },
            { cname: "Sweet", role: "Crew", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Mole", role: "Crew", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },

            { cname: "Whitmore", role: "Support", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Audrey", role: "Mechanic", personality: ["Chaotic"], species: "Human", alignment: "GOOD" }
        ]
    },

    {
        movie: "Lilo & Stitch",
        characters: [
            { cname: "Lilo", role: "Protagonist", personality: ["Chaotic"], species: "Human", alignment: "GOOD" },
            { cname: "Stitch", role: "Protagonist", personality: ["Chaotic"], species: "Experiment", alignment: "CHAOTIC" },

            { cname: "Nani", role: "Guardian", personality: ["Stoic"], species: "Human", alignment: "GOOD" },

            { cname: "Jumba", role: "Scientist", personality: ["Clever"], species: "Alien", alignment: "NEUTRAL" },
            { cname: "Pleakley", role: "Sidekick", personality: ["Chaotic"], species: "Alien", alignment: "CHAOTIC" },

            { cname: "Cobra Bubbles", role: "Agent", personality: ["Stoic"], species: "Human", alignment: "GOOD" },
            { cname: "David Kawena", role: "Support", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Grand Councilwoman", role: "Authority", personality: ["Stoic"], species: "Alien", alignment: "GOOD" }
        ]
    },

    {
        movie: "Brother Bear",
        characters: [
            { cname: "Kenai", role: "Protagonist", personality: ["Heroic"], species: "Human/Bear", alignment: "GOOD" },
            { cname: "Koda", role: "Sidekick", personality: ["Kindhearted"], species: "Bear", alignment: "GOOD" },

            { cname: "Denahi", role: "Antagonist", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Sitka", role: "Mentor", personality: ["Stoic"], species: "Human", alignment: "GOOD" },

            { cname: "Tanana", role: "Shaman", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },

            { cname: "Rutt", role: "Comic Relief", personality: ["Chaotic"], species: "Moose", alignment: "CHAOTIC" },
            { cname: "Tuke", role: "Comic Relief", personality: ["Chaotic"], species: "Moose", alignment: "CHAOTIC" }
        ]
    },
    {
        movie: "Home on the Range",
        characters: [
            { cname: "Maggie", role: "Protagonist", personality: ["Stoic"], species: "Cow", alignment: "GOOD" },
            { cname: "Mrs. Calloway", role: "Protagonist", personality: ["Stoic"], species: "Cow", alignment: "GOOD" },
            { cname: "Grace", role: "Sidekick", personality: ["Kindhearted"], species: "Cow", alignment: "GOOD" },

            { cname: "Alameda Slim", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Buck", role: "Sidekick", personality: ["Chaotic"], species: "Horse", alignment: "CHAOTIC" },
            { cname: "Mrs. Dixon", role: "Farmer", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },

            { cname: "The Willie Brothers", role: "Antagonists", personality: ["Chaotic"], species: "Human", alignment: "VILLAIN" }
        ]
    },

    {
        movie: "Chicken Little",
        characters: [
            { cname: "Chicken Little", role: "Protagonist", personality: ["Anxious"], species: "Chicken", alignment: "GOOD" },
            { cname: "Abby Mallard", role: "Sidekick", personality: ["Kindhearted"], species: "Duck", alignment: "GOOD" },
            { cname: "Runt", role: "Sidekick", personality: ["Anxious"], species: "Pig", alignment: "GOOD" },

            { cname: "Foxy Loxy", role: "Antagonist", personality: ["Villainous"], species: "Fox", alignment: "VILLAIN" },

            { cname: "Buck Cluck", role: "Father", personality: ["Stoic"], species: "Chicken", alignment: "NEUTRAL" },
            { cname: "Fish Out of Water", role: "Comic Relief", personality: ["Chaotic"], species: "Fish", alignment: "CHAOTIC" },

            { cname: "Principal Fetchit", role: "Authority", personality: ["Stoic"], species: "Human", alignment: "GOOD" }
        ]
    },

    {
        movie: "Meet the Robinsons",
        characters: [
            { cname: "Lewis", role: "Protagonist", personality: ["Clever"], species: "Human", alignment: "GOOD" },
            { cname: "Wilbur Robinson", role: "Sidekick", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },

            { cname: "Goob", role: "Antagonist", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Cornelius Robinson", role: "Mentor", personality: ["Stoic"], species: "Human", alignment: "HERO" },
            { cname: "Franny Robinson", role: "Support", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },

            { cname: "Bowler Hat Guy", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Doris", role: "Villain Artifact", personality: ["Villainous"], species: "Hat AI", alignment: "VILLAIN" }
        ]
    },

    {
        movie: "Bolt",
        characters: [
            { cname: "Bolt", role: "Protagonist", personality: ["Heroic"], species: "Dog", alignment: "HERO" },
            { cname: "Penny", role: "Protagonist", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },

            { cname: "Mittens", role: "Sidekick", personality: ["Stoic"], species: "Cat", alignment: "NEUTRAL" },
            { cname: "Rhino", role: "Sidekick", personality: ["Chaotic"], species: "Hamster", alignment: "CHAOTIC" },

            { cname: "Dr. Calico", role: "Villain (Show)", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "The Agent", role: "Industry Figure", personality: ["Stoic"], species: "Human", alignment: "NEUTRAL" },
            { cname: "Studio Crew", role: "Background", personality: ["Chaotic"], species: "Human", alignment: "NEUTRAL" }
        ]
    },

    {
        movie: "The Princess and the Frog",
        characters: [
            { cname: "Tiana", role: "Protagonist", personality: ["Stoic"], species: "Human", alignment: "GOOD" },
            { cname: "Naveen", role: "Co-Protagonist", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },

            { cname: "Dr. Facilier", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Louis", role: "Sidekick", personality: ["Chaotic"], species: "Alligator", alignment: "CHAOTIC" },
            { cname: "Ray", role: "Sidekick", personality: ["Kindhearted"], species: "Firefly", alignment: "GOOD" },

            { cname: "Charlotte La Bouff", role: "Friend", personality: ["Chaotic"], species: "Human", alignment: "GOOD" },

            { cname: "Eudora", role: "Mother", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" }
        ]
    },

    {
        movie: "Tangled",
        characters: [
            { cname: "Rapunzel", role: "Protagonist", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Flynn Rider", role: "Co-Protagonist", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },

            { cname: "Mother Gothel", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Pascal", role: "Sidekick", personality: ["Chaotic"], species: "Chameleon", alignment: "CHAOTIC" },
            { cname: "Maximus", role: "Sidekick", personality: ["Stoic"], species: "Horse", alignment: "GOOD" },

            { cname: "King Frederic", role: "Authority", personality: ["Stoic"], species: "Human", alignment: "GOOD" },
            { cname: "Queen Arianna", role: "Mother", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },

            { cname: "Stabbington Brothers", role: "Antagonists", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" }
        ]
    },

    {
        movie: "Frozen",
        characters: [
            { cname: "Elsa", role: "Protagonist", personality: ["Stoic"], species: "Human", alignment: "GOOD" },
            { cname: "Anna", role: "Protagonist", personality: ["Chaotic"], species: "Human", alignment: "GOOD" },

            { cname: "Olaf", role: "Sidekick", personality: ["Kindhearted"], species: "Snowman", alignment: "GOOD" },
            { cname: "Kristoff", role: "Sidekick", personality: ["Stoic"], species: "Human", alignment: "GOOD" },

            { cname: "Sven", role: "Sidekick", personality: ["Kindhearted"], species: "Reindeer", alignment: "GOOD" },

            { cname: "Hans", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Duke of Weselton", role: "Antagonist", personality: ["Chaotic"], species: "Human", alignment: "VILLAIN" }
        ]
    },

    {
        movie: "Moana",
        characters: [
            { cname: "Moana", role: "Protagonist", personality: ["Heroic"], species: "Human", alignment: "HERO" },
            { cname: "Maui", role: "Sidekick", personality: ["Chaotic"], species: "Demigod", alignment: "CHAOTIC" },

            { cname: "Te Kā / Te Fiti", role: "Force", personality: ["Stoic"], species: "Goddess", alignment: "NEUTRAL" },

            { cname: "Heihei", role: "Comic Relief", personality: ["Chaotic"], species: "Chicken", alignment: "CHAOTIC" },
            { cname: "Tala", role: "Mentor", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },

            { cname: "Chief Tui", role: "Authority", personality: ["Stoic"], species: "Human", alignment: "GOOD" },
            { cname: "Sina", role: "Mother", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" }
        ]
    },

{
    movie: "Raya and the Last Dragon",
    characters: [
        { cname: "Raya", role: "Protagonist", personality: ["Stoic"], species: "Human", alignment: "HERO" },
        { cname: "Sisu", role: "Sidekick", personality: ["Kindhearted"], species: "Dragon", alignment: "GOOD" },

        { cname: "Namaari", role: "Antagonist", personality: ["Stoic"], species: "Human", alignment: "VILLAIN" },

        { cname: "Boun", role: "Sidekick", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },
        { cname: "Tong", role: "Warrior", personality: ["Stoic"], species: "Human", alignment: "GOOD" },
        { cname: "Little Noi", role: "Child", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" },
        { cname: "Dang Hai", role: "Tribe Leader", personality: ["Stoic"], species: "Human", alignment: "GOOD" }
    ]
},

{
    movie: "Encanto",
        characters: [
            { cname: "Mirabel", role: "Protagonist", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },
            { cname: "Isabela", role: "Sibling", personality: ["Stoic"], species: "Human", alignment: "GOOD" },
            { cname: "Luisa", role: "Sibling", personality: ["Stoic"], species: "Human", alignment: "GOOD" },

            { cname: "Bruno", role: "Family Member", personality: ["Chaotic"], species: "Human", alignment: "GOOD" },

            { cname: "Abuela Alma", role: "Authority", personality: ["Stoic"], species: "Human", alignment: "NEUTRAL" },

            { cname: "Antonio", role: "Child", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },

            { cname: "Camilo", role: "Comic Relief", personality: ["Chaotic"], species: "Human", alignment: "CHAOTIC" }
        ]
},

{
    movie: "Wish",
        characters: [
            { cname: "Asha", role: "Protagonist", personality: ["Heroic"], species: "Human", alignment: "HERO" },
            { cname: "Star", role: "Magical Companion", personality: ["Kindhearted"], species: "Magic Entity", alignment: "GOOD" },

            { cname: "King Magnifico", role: "Villain", personality: ["Villainous"], species: "Human", alignment: "VILLAIN" },

            { cname: "Valentino", role: "Sidekick", personality: ["Chaotic"], species: "Goat", alignment: "CHAOTIC" },
            { cname: "Sakina", role: "Mother", personality: ["Kindhearted"], species: "Human", alignment: "GOOD" },

            { cname: "Simon", role: "Friend", personality: ["Stoic"], species: "Human", alignment: "GOOD" }
        ]
}

];