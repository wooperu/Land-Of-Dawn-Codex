// ─────────────────────────────────────────────────────────────────────────────
// SKILL DATA
// Each entry has the hero name, their skill image paths, and optional hints
// that are revealed one per wrong guess in Classic mode.
//
// Image paths follow the convention:
//   images/skills/<hero-key>/Passive.webp
//   images/skills/<hero-key>/Skill_1.webp
//   images/skills/<hero-key>/Skill_2.webp
//   images/skills/<hero-key>/Skill_3.webp   (not all heroes have this)
//   images/skills/<hero-key>/Ultimate.webp
//
// The "skills" array lists all the skill types that hero actually has.
// Each entry is { type, src } where type is the badge label.
// ─────────────────────────────────────────────────────────────────────────────
const heroes = [
    {
        name: "Aamon",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Aamon/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Aamon/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Aamon/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Aamon/Ultimate.webp"  }
        ]
    },
    {
        name: "Akai",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Akai/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Akai/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Akai/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Akai/Ultimate.webp"  }
        ]
    },
    {
        name: "Aldous",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Aldous/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Aldous/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Aldous/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Aldous/Ultimate.webp"  }
        ]
    },
    {
        name: "Alice",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Alice/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Alice/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Alice/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Alice/Ultimate.webp"  }
        ]
    },
    {
        name: "Alpha",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Alpha/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Alpha/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Alpha/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Alpha/Ultimate.webp"  }
        ]
    },
    {
        name: "Alucard",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Alucard/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Alucard/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Alucard/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Alucard/Ultimate.webp"  }
        ]
    },
    {
        name: "Angela",
        hints: ["Support", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Angela/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Angela/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Angela/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Angela/Ultimate.webp"  }
        ]
    },
    {
        name: "Argus",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Argus/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Argus/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Argus/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Argus/Ultimate.webp"  }
        ]
    },
    {
        name: "Arlott",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Arlott/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Arlott/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Arlott/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Arlott/Ultimate.webp"  }
        ]
    },
    {
        name: "Atlas",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Atlas/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Atlas/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Atlas/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Atlas/Ultimate.webp"  }
        ]
    },
    {
        name: "Aulus",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Aulus/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Aulus/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Aulus/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Aulus/Ultimate.webp"  }
        ]
    },
    {
        name: "Aurora",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Aurora/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Aurora/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Aurora/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Aurora/Ultimate.webp"  }
        ]
    },
    {
        name: "Badang",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Badang/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Badang/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Badang/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Badang/Ultimate.webp"  }
        ]
    },
    {
        name: "Balmond",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Balmond/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Balmond/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Balmond/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Balmond/Ultimate.webp"  }
        ]
    },
    {
        name: "Bane",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Bane/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Bane/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Bane/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Bane/Ultimate.webp"  }
        ]
    },
    {
        name: "Barats",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Barats/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Barats/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Barats/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Barats/Ultimate.webp"  }
        ]
    },
    {
        name: "Baxia",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Baxia/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Baxia/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Baxia/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Baxia/Ultimate.webp"  }
        ]
    },
    {
        name: "Beatrix",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Beatrix/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Beatrix/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Beatrix/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Beatrix/Ultimate.webp"  }
        ]
    },
    {
        name: "Belerick",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Belerick/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Belerick/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Belerick/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Belerick/Ultimate.webp"  }
        ]
    },
    {
        name: "Benedetta",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Benedetta/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Benedetta/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Benedetta/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Benedetta/Ultimate.webp"  }
        ]
    },
    {
        name: "Brody",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Brody/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Brody/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Brody/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Brody/Ultimate.webp"  }
        ]
    },
    {
        name: "Bruno",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Bruno/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Bruno/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Bruno/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Bruno/Ultimate.webp"  }
        ]
    },
    {
        name: "Carmilla",
        hints: ["Support", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Carmilla/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Carmilla/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Carmilla/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Carmilla/Ultimate.webp"  }
        ]
    },
    {
        name: "Cecilion",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Cecilion/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Cecilion/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Cecilion/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Cecilion/Ultimate.webp"  }
        ]
    },
    {
        name: "Chang'e",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Chang e/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Chang e/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Chang e/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Chang e/Ultimate.webp"  }
        ]
    },
    {
        name: "Chip",
        hints: ["Support", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Chip/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Chip/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Chip/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Chip/Ultimate.webp"  }
        ]
    },
    {
        name: "Chou",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Chou/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Chou/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Chou/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Chou/Ultimate.webp"  }
        ]
    },
    {
        name: "Cici",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Cici/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Cici/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Cici/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Cici/Ultimate.webp"  }
        ]
    },
    {
        name: "Claude",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Claude/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Claude/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Claude/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Claude/Ultimate.webp"  }
        ]
    },
    {
        name: "Clint",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Clint/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Clint/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Clint/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Clint/Ultimate.webp"  }
        ]
    },
    {
        name: "Cyclops",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Cyclops/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Cyclops/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Cyclops/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Cyclops/Ultimate.webp"  }
        ]
    },
    {
        name: "Diggie",
        hints: ["Support", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Diggie/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Diggie/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Diggie/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Diggie/Ultimate.webp"  }
        ]
    },
    {
        name: "Dyrroth",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Dyrroth/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Dyrroth/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Dyrroth/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Dyrroth/Ultimate.webp"  }
        ]
    },
    {
        name: "Edith",
        hints: ["Tank / Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Edith/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Edith/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Edith/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Edith/Ultimate.webp"  }
        ]
    },
    {
        name: "Esmeralda",
        hints: ["Mage / Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Esmeralda/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Esmeralda/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Esmeralda/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Esmeralda/Ultimate.webp"  }
        ]
    },
    {
        name: "Estes",
        hints: ["Support", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Estes/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Estes/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Estes/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Estes/Ultimate.webp"  }
        ]
    },
    {
        name: "Eudora",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Eudora/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Eudora/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Eudora/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Eudora/Ultimate.webp"  }
        ]
    },
    {
        name: "Fanny",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Fanny/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Fanny/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Fanny/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Fanny/Ultimate.webp"  }
        ]
    },
    {
        name: "Faramis",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Faramis/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Faramis/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Faramis/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Faramis/Ultimate.webp"  }
        ]
    },
    {
        name: "Floryn",
        hints: ["Support", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Floryn/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Floryn/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Floryn/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Floryn/Ultimate.webp"  }
        ]
    },
    {
        name: "Franco",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Franco/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Franco/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Franco/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Franco/Ultimate.webp"  }
        ]
    },
    {
        name: "Fredrinn",
        hints: ["Fighter / Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Fredrinn/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Fredrinn/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Fredrinn/Skill 2.webp"  },
            { type: "Skill 3",  src: "images/skills/Fredrinn/Skill 3.webp"  },
            { type: "Ultimate", src: "images/skills/Fredrinn/Ultimate.webp"  }
        ]
    },
    {
        name: "Freya",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Freya/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Freya/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Freya/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Freya/Ultimate.webp"  }
        ]
    },
    {
        name: "Gatotkaca",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Gatotkaca/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Gatotkaca/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Gatotkaca/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Gatotkaca/Ultimate.webp"  }
        ]
    },
    {
        name: "Gloo",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Gloo/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Gloo/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Gloo/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Gloo/Ultimate.webp"  }
        ]
    },
    {
        name: "Gord",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Gord/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Gord/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Gord/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Gord/Ultimate.webp"  }
        ]
    },
    {
        name: "Granger",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Granger/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Granger/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Granger/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Granger/Ultimate.webp"  }
        ]
    },
    {
        name: "Grock",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Grock/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Grock/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Grock/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Grock/Ultimate.webp"  }
        ]
    },
    {
        name: "Guinevere",
        hints: ["Mage / Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Guinevere/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Guinevere/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Guinevere/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Guinevere/Ultimate.webp"  }
        ]
    },
    {
        name: "Gusion",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Gusion/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Gusion/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Gusion/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Gusion/Ultimate.webp"  }
        ]
    },
    {
        name: "Hanabi",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Hanabi/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Hanabi/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Hanabi/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Hanabi/Ultimate.webp"  }
        ]
    },
    {
        name: "Hanzo",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Hanzo/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Hanzo/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Hanzo/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Hanzo/Ultimate.webp"  }
        ]
    },
    {
        name: "Harith",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Harith/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Harith/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Harith/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Harith/Ultimate.webp"  }
        ]
    },
    {
        name: "Harley",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Harley/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Harley/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Harley/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Harley/Ultimate.webp"  }
        ]
    },
    {
        name: "Hayabusa",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Hayabusa/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Hayabusa/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Hayabusa/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Hayabusa/Ultimate.webp"  }
        ]
    },
    {
        name: "Helcurt",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Helcurt/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Helcurt/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Helcurt/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Helcurt/Ultimate.webp"  }
        ]
    },
    {
        name: "Hilda",
        hints: ["Tank / Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Hilda/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Hilda/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Hilda/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Hilda/Ultimate.webp"  }
        ]
    },
    {
        name: "Hylos",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Hylos/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Hylos/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Hylos/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Hylos/Ultimate.webp"  }
        ]
    },
    {
        name: "Irithel",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Irithel/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Irithel/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Irithel/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Irithel/Ultimate.webp"  }
        ]
    },
    {
        name: "Ixia",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Ixia/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Ixia/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Ixia/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Ixia/Ultimate.webp"  }
        ]
    },
    {
        name: "Jawhead",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Jawhead/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Jawhead/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Jawhead/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Jawhead/Ultimate.webp"  }
        ]
    },
    {
        name: "Johnson",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Johnson/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Johnson/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Johnson/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Johnson/Ultimate.webp"  }
        ]
    },
    {
        name: "Joy",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Joy/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Joy/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Joy/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Joy/Ultimate.webp"  }
        ]
    },
    {
        name: "Julian",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Julian/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Julian/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Julian/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Julian/Ultimate.webp"  }
        ]
    },
    {
        name: "Kadita",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Kadita/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Kadita/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Kadita/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Kadita/Ultimate.webp"  }
        ]
    },
    {
        name: "Kagura",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Kagura/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Kagura/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Kagura/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Kagura/Ultimate.webp"  }
        ]
    },
    {
        name: "Kaja",
        hints: ["Support", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Kaja/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Kaja/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Kaja/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Kaja/Ultimate.webp"  }
        ]
    },
    {
        name: "Kalea",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Kalea/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Kalea/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Kalea/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Kalea/Ultimate.webp"  }
        ]
    },
    {
        name: "Karina",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Karina/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Karina/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Karina/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Karina/Ultimate.webp"  }
        ]
    },
    {
        name: "Karrie",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Karrie/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Karrie/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Karrie/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Karrie/Ultimate.webp"  }
        ]
    },
    {
        name: "Khaleed",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Khaleed/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Khaleed/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Khaleed/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Khaleed/Ultimate.webp"  }
        ]
    },
    {
        name: "Khufra",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Khufra/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Khufra/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Khufra/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Khufra/Ultimate.webp"  }
        ]
    },
    {
        name: "Kimmy",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Kimmy/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Kimmy/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Kimmy/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Kimmy/Ultimate.webp"  }
        ]
    },
    {
        name: "Lancelot",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Lancelot/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Lancelot/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Lancelot/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Lancelot/Ultimate.webp"  }
        ]
    },
    {
        name: "Lapu-Lapu",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Lapu-Lapu/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Lapu-Lapu/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Lapu-Lapu/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Lapu-Lapu/Ultimate.webp"  }
        ]
    },
    {
        name: "Layla",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Layla/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Layla/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Layla/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Layla/Ultimate.webp"  }
        ]
    },
    {
        name: "Leomord",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Leomord/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Leomord/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Leomord/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Leomord/Ultimate.webp"  }
        ]
    },
    {
        name: "Lesley",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Lesley/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Lesley/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Lesley/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Lesley/Ultimate.webp"  }
        ]
    },
    {
        name: "Ling",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Ling/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Ling/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Ling/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Ling/Ultimate.webp"  }
        ]
    },
    {
        name: "Lolita",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Lolita/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Lolita/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Lolita/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Lolita/Ultimate.webp"  }
        ]
    },
    {
        name: "Lukas",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Lukas/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Lukas/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Lukas/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Lukas/Ultimate.webp"  }
        ]
    },
    {
        name: "Lunox",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Lunox/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Lunox/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Lunox/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Lunox/Ultimate.webp"  }
        ]
    },
    {
        name: "Luo Yi",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Luo Yi/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Luo Yi/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Luo Yi/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Luo Yi/Ultimate.webp"  }
        ]
    },
    {
        name: "Lylia",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Lylia/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Lylia/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Lylia/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Lylia/Ultimate.webp"  }
        ]
    },
    {
        name: "Marcel",
        hints: ["Support", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Marcel/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Marcel/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Marcel/Skill2.webp"  },
            { type: "Ultimate", src: "images/skills/Marcel/Ultimate.webp"  }
        ]
    },
    {
        name: "Martis",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Martis/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Martis/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Martis/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Martis/Ultimate.webp"  }
        ]
    },
    {
        name: "Masha",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Masha/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Masha/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Masha/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Masha/Ultimate.webp"  }
        ]
    },
    {
        name: "Mathilda",
        hints: ["Support", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Mathilda/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Mathilda/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Mathilda/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Mathilda/Ultimate.webp"  }
        ]
    },
    {
        name: "Melissa",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Melissa/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Melissa/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Melissa/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Melissa/Ultimate.webp"  }
        ]
    },
    {
        name: "Minotaur",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Minotaur/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Minotaur/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Minotaur/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Minotaur/Ultimate.webp"  }
        ]
    },
    {
        name: "Minsitthar",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Minsitthar/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Minsitthar/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Minsitthar/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Minsitthar/Ultimate.webp"  }
        ]
    },
    {
        name: "Miya",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Miya/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Miya/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Miya/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Miya/Ultimate.webp"  }
        ]
    },
    {
        name: "Moskov",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Moskov/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Moskov/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Moskov/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Moskov/Ultimate.webp"  }
        ]
    },
    {
        name: "Nana",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Nana/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Nana/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Nana/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Nana/Ultimate.webp"  }
        ]
    },
    {
        name: "Natalia",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Natalia/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Natalia/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Natalia/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Natalia/Ultimate.webp"  }
        ]
    },
    {
        name: "Natan",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Natan/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Natan/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Natan/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Natan/Ultimate.webp"  }
        ]
    },
    {
        name: "Nolan",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Nolan/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Nolan/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Nolan/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Nolan/Ultimate.webp"  }
        ]
    },
    {
        name: "Novaria",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Novaria/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Novaria/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Novaria/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Novaria/Ultimate.webp"  }
        ]
    },
    {
        name: "Obsidia",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Obsidia/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Obsidia/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Obsidia/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Obsidia/Ultimate.webp"  }
        ]
    },
    {
        name: "Odette",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Odette/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Odette/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Odette/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Odette/Ultimate.webp"  }
        ]
    },
    {
        name: "Paquito",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Paquito/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Paquito/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Paquito/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Paquito/Ultimate.webp"  }
        ]
    },
    {
        name: "Pharsa",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Pharsa/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Pharsa/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Pharsa/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Pharsa/Ultimate.webp"  }
        ]
    },
    {
        name: "Phoveus",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Phoveus/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Phoveus/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Phoveus/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Phoveus/Ultimate.webp"  }
        ]
    },
    {
        name: "Popol and Kupa",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Popol And Kupa/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Popol And Kupa/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Popol And Kupa/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Popol And Kupa/Ultimate.webp"  }
        ]
    },
    {
        name: "Rafaela",
        hints: ["Support", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Rafaela/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Rafaela/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Rafaela/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Rafaela/Ultimate.webp"  }
        ]
    },
    {
        name: "Roger",
        hints: ["Fighter / Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Roger/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Roger/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Roger/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Roger/Ultimate.webp"  }
        ]
    },
    {
        name: "Ruby",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Ruby/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Ruby/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Ruby/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Ruby/Ultimate.webp"  }
        ]
    },
    {
        name: "Saber",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Saber/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Saber/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Saber/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Saber/Ultimate.webp"  }
        ]
    },
    {
        name: "Selena",
        hints: ["Assassin / Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Selena/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Selena/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Selena/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Selena/Ultimate.webp"  }
        ]
    },
    {
        name: "Silvanna",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Silvanna/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Silvanna/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Silvanna/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Silvanna/Ultimate.webp"  }
        ]
    },
    {
        name: "Sora",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Sora/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Sora/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Sora/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Sora/Ultimate.webp"  }
        ]
    },
    {
        name: "Sun",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Sun/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Sun/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Sun/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Sun/Ultimate.webp"  }
        ]
    },
    {
        name: "Suyou",
        hints: ["Assassin", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Suyou/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Suyou/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Suyou/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Suyou/Ultimate.webp"  }
        ]
    },
    {
        name: "Terizla",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Terizla/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Terizla/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Terizla/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Terizla/Ultimate.webp"  }
        ]
    },
    {
        name: "Thamuz",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Thamuz/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Thamuz/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Thamuz/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Thamuz/Ultimate.webp"  }
        ]
    },
    {
        name: "Tigreal",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Tigreal/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Tigreal/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Tigreal/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Tigreal/Ultimate.webp"  }
        ]
    },
    {
        name: "Uranus",
        hints: ["Tank", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Uranus/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Uranus/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Uranus/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Uranus/Ultimate.webp"  }
        ]
    },
    {
        name: "Vale",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Vale/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Vale/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Vale/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Vale/Ultimate.webp"  }
        ]
    },
    {
        name: "Valentina",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Valentina/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Valentina/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Valentina/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Valentina/Ultimate.webp"  }
        ]
    },
    {
        name: "Valir",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Valir/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Valir/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Valir/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Valir/Ultimate.webp"  }
        ]
    },
    {
        name: "Vexana",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Vexana/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Vexana/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Vexana/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Vexana/Ultimate.webp"  }
        ]
    },
    {
        name: "Wanwan",
        hints: ["Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Wanwan/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Wanwan/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Wanwan/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Wanwan/Ultimate.webp"  }
        ]
    },
    {
        name: "X.Borg",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/X.Borg/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/X.Borg/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/X.Borg/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/X.Borg/Ultimate.webp"  }
        ]
    },
    {
        name: "Xavier",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Xavier/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Xavier/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Xavier/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Xavier/Ultimate.webp"  }
        ]
    },
    {
        name: "Yi Sun-shin",
        hints: ["Assassin / Marksman", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Yi Sun-shin/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Yi Sun-shin/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Yi Sun-shin/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Yi Sun-shin/Ultimate.webp"  }
        ]
    },
    {
        name: "Yin",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Yin/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Yin/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Yin/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Yin/Ultimate.webp"  }
        ]
    },
    {
        name: "Yu Zhong",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Yu Zhong/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Yu Zhong/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Yu Zhong/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Yu Zhong/Ultimate.webp"  }
        ]
    },
    {
        name: "Yve",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Yve/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Yve/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Yve/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Yve/Ultimate.webp"  }
        ]
    },
    {
        name: "Zetian",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Zetian/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Zetian/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Zetian/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Zetian/Ultimate.webp"  }
        ]
    },
    {
        name: "Zhask",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Zhask/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Zhask/Skill_1.webp"  },
            { type: "Skill 2",  src: "images/skills/Zhask/Skill_2.webp"  },
            { type: "Ultimate", src: "images/skills/Zhask/Ultimate.webp"  }
        ]
    },
    {
        name: "Zhuxin",
        hints: ["Mage", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Zhuxin/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Zhuxin/Skill 1.webp"  },
            { type: "Skill 2",  src: "images/skills/Zhuxin/Skill 2.webp"  },
            { type: "Ultimate", src: "images/skills/Zhuxin/Ultimate.webp"  }
        ]
    },
    {
        name: "Zilong",
        hints: ["Fighter", "Hint2", "Hint3"],
        skills: [
            { type: "Passive",  src: "images/skills/Zilong/Passive.webp"  },
            { type: "Skill 1",  src: "images/skills/Zilong/Skill_1.webp"  },
            { type: "Skill 2",  src: "images/skills/Zilong/Skill_2.webp"  },
            { type: "Ultimate", src: "images/skills/Zilong/Ultimate.webp"  }
        ]
    }
];

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS & STATE
// ─────────────────────────────────────────────────────────────────────────────
const maxGuess = 3; // Classic mode limit

let guesses       = 0;
let streak        = 0;
let highestStreak = 0;
let gameMode      = null;  // 'free' | 'classic'
let answer        = '';    // correct hero name for the current question
let currentSkill  = null;  // the current { type, src } skill object
let feedbackTimer = null;
let hintsRevealed = 0;     // how many hints have been shown this round

// ─────────────────────────────────────────────────────────────────────────────
// INIT STATS
// ─────────────────────────────────────────────────────────────────────────────
document.querySelector(".streak").textContent     = streak;
document.querySelector(".highstreak").textContent = highestStreak;
document.querySelector(".guess").textContent      = guesses;

// ─────────────────────────────────────────────────────────────────────────────
// MODE SELECTION
// ─────────────────────────────────────────────────────────────────────────────

// Hides the mode overlay with a fade animation, resets state, and starts the game.
function selectMode(mode) {
    gameMode = mode;
    const overlay = document.getElementById("modeOverlay");
    overlay.classList.add("fade-out");
    setTimeout(() => {
        overlay.style.display = "none";
        overlay.classList.remove("fade-out");
        document.getElementById("gameContent").classList.remove("hide");
    }, 450);

    guesses = 0;
    streak  = 0;
    updateGuess();
    document.querySelector(".streak").textContent = streak;
    loadQuestion();
}

document.getElementById("btnFreePlay").addEventListener("click", () => selectMode("free"));
document.getElementById("btnClassic").addEventListener("click",  () => selectMode("classic"));

// Returns to the mode overlay from mid-session. Covers the current question cleanly.
document.getElementById("btnSwitchMode").addEventListener("click", () => {
    const overlay = document.getElementById("modeOverlay");
    document.getElementById("gameContent").classList.add("hide");
    overlay.style.display = "flex";
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    setTimeout(() => overlay.classList.remove("fade-in"), 350);
});

// ─────────────────────────────────────────────────────────────────────────────
// QUESTION LOADING
// ─────────────────────────────────────────────────────────────────────────────

// Picks a random hero and a random skill from that hero's skill list, then
// displays the skill icon and type badge. Each call re-triggers the reveal animation.
function loadQuestion() {
    // Hide any lingering game-over panel
    document.getElementById('gameOverModal').classList.remove('active');

    // Re-enable inputs in case they were locked by a previous game over
    document.querySelector(".btnSubmit").disabled = false;
    document.querySelector(".btnSkip").disabled   = false;
    document.querySelector("#heroInput").disabled = false;

    hintsRevealed = 0;
    document.getElementById('hintRow').innerHTML = '';

    const heroIndex  = Math.floor(Math.random() * heroes.length);
    const hero       = heroes[heroIndex];
    answer           = hero.name;

    const skillIndex = Math.floor(Math.random() * hero.skills.length);
    currentSkill     = hero.skills[skillIndex];

    // Update icon – re-trigger animation by cloning the node
    const icon = document.getElementById('skillIcon');
    icon.src   = currentSkill.src;
    icon.alt   = currentSkill.type + " skill";

    // Force animation replay
    icon.classList.remove('skillIcon');
    void icon.offsetWidth; // reflow
    icon.classList.add('skillIcon');

    // Update badge
    const badge     = document.getElementById('skillTypeBadge');
    badge.textContent = currentSkill.type;
    badge.className   = 'skillTypeBadge ' + typeClass(currentSkill.type);
}

// Maps skill type strings to CSS modifier class names for badge coloring.
function typeClass(type) {
    switch (type) {
        case 'Passive':  return 'passive';
        case 'Skill 1':  return 'skill1';
        case 'Skill 2':  return 'skill2';
        case 'Skill 3':  return 'skill3';
        case 'Ultimate': return 'ultimate';
        default:         return '';
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// HINTS  (Classic mode: reveal one hint per wrong guess)
// ─────────────────────────────────────────────────────────────────────────────
function revealNextHint() {
    const hero = heroes.find(h => h.name === answer);
    if (!hero || hintsRevealed >= hero.hints.length) return;

    const chip       = document.createElement('span');
    chip.className   = 'hintChip';
    chip.textContent = hero.hints[hintsRevealed];
    document.getElementById('hintRow').appendChild(chip);
    hintsRevealed++;
}

// ─────────────────────────────────────────────────────────────────────────────
// SUBMIT / GUESS
// ─────────────────────────────────────────────────────────────────────────────
function submit() {
    const input = document.getElementById('heroInput');
    const raw   = input.value.trim();

    if (!raw) {
        showFeedback("Please enter a guess!", 'info');
        return;
    }

    if (heroName(raw) === heroName(answer)) {
        // ── CORRECT ──
        streak++;
        document.querySelector(".streak").textContent = streak;
        if (streak > highestStreak) {
            highestStreak = streak;
            document.querySelector(".highstreak").textContent = highestStreak;
        }

        if (guesses === 0) {
            showFeedback("Incredible! First try!", 'correct');
        } else {
            showFeedback(`Correct! It took you ${guesses + 1} guess${guesses + 1 > 1 ? 'es' : ''}!`, 'correct');
        }

        guesses = 0;
        updateGuess();
        input.value = '';
        loadQuestion();

    } else {
        // ── WRONG ──
        streak = 0;
        document.querySelector(".streak").textContent = streak;
        guesses++;
        updateGuess();
        input.value = '';

        // In Classic mode, reveal one hint per wrong guess and check for game over
        if (gameMode === 'classic') {
            revealNextHint();
            if (guesses >= maxGuess) {
                gameOver();
                return;
            }
        }

        showFeedback("Wrong! Try again.", 'wrong');
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// SKIP (same as Give Up)
// ─────────────────────────────────────────────────────────────────────────────
function skip() {
    guesses = 0;
    updateGuess();
    streak  = 0;
    document.querySelector(".streak").textContent = streak;
    document.getElementById('heroInput').value    = '';
    showFeedback(`The answer was: ${answer}`, 'info');
    loadQuestion();
}

// ─────────────────────────────────────────────────────────────────────────────
// GAME OVER  (Classic only)
// ─────────────────────────────────────────────────────────────────────────────
function gameOver() {
    document.querySelector(".btnSubmit").disabled = true;
    document.querySelector(".btnSkip").disabled   = true;
    document.querySelector("#heroInput").disabled = true;

    document.getElementById('gameOverMsg').textContent =
        `Out of guesses! The skill belonged to: ${answer}`;

    const modal = document.getElementById('gameOverModal');
    modal.classList.add('active');
    streak = 0;
    document.querySelector(".streak").textContent = streak;
}

// ─────────────────────────────────────────────────────────────────────────────
// RETRY
// ─────────────────────────────────────────────────────────────────────────────
document.getElementById('btnRetry').addEventListener('click', () => {
    guesses = 0;
    updateGuess();
    loadQuestion(); // loadQuestion re-enables inputs internally
});

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

// Shows a feedback message and auto-clears it unless persist=true.
function showFeedback(message, type = 'info', persist = false) {
    const fb    = document.getElementById('feedback');
    fb.textContent = message;
    fb.className   = `feedback ${type}`;
    if (feedbackTimer) clearTimeout(feedbackTimer);
    if (!persist) {
        feedbackTimer = setTimeout(() => {
            fb.textContent = '';
            fb.className   = 'feedback';
        }, 2500);
    }
}

// updates the guess counter. Classic shows X / MAX, Free shows raw count.
function updateGuess() {
    const g = document.querySelector(".guess");
    g.textContent = gameMode === 'classic' ? `${guesses} / ${maxGuess}` : guesses;
}

// normalizes hero names for comparison: lowercase, trim, and remove spaces/punctuation.
function heroName(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/['\-\.\s]/g, '');
}

// Allow pressing Enter in the text field to submit
document.getElementById('heroInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') submit();
});

// ─────────────────────────────────────────────────────────────────────────────
// BUTTON LISTENERS
// ─────────────────────────────────────────────────────────────────────────────
document.querySelector(".btnSubmit").addEventListener("click", submit);
document.querySelector(".btnSkip").addEventListener("click", skip);
