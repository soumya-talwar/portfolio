export const projects = [
	{
		route: "jimin",
		title: "Jimin",
		hook: "I built myself my ideal kind of husband",
		url: "jimin",
		year: 2022,
		headline: "Meet my money plant husband who's been programmed to love me",
		tools: [
			"Node.JS",
			"Electron",
			"Google Teachable Machine",
			"ML5.JS",
			"Socket.IO",
			"OpenAI API",
			"Arduino UNO",
			"Various sensors",
		],
		date: "Built in 2022",
		audio: "jimin",
		transcript: `Finding a good husband is hard. So I decided to just build myself one.<br /><br />In the traditional Hindu system of astrology, called Jyotisha, aperson born under the influence of Mars (or Mangal) is called a Mangalik. And according to astrologers, marriage between a Mangalik and a non-Mangalik can lead to the early death of the non-Mangalik partner. To prevent such a fate, the Mangalik is mad to first marry a tree or a plant so the misfortune can then befall this tree, and their later marriage to the human is safe.<br /><br /> But honestly, I wouldn’t mind marrying a tree. I can't think of a partner more ideal than a plant.<br /><br /> And so I built myself a talking plant husband. His name is Jimin, and he’s a money plant.<br /><br /> Equipped with an image-classifying model trained to recognise my face, Jimin can spot me through a webcam—and he only speaks to me. (I am a little possessive like that.) Jimin is sweet and affectionate when he’s watered and happy, sleepy and shy when it’s dark out, and a little grumpy if his soil is dry.<br /><br /> I might’ve been enjoying myself too much because I didn’t stop myself at one. I went ahead and built myself another husband—this time out of a ZZ plant—and inspired by yet another BTS member, Kim Seokjin. Seokjin is playful and flirty and loves to speak in plant puns. He gets dramatic when it is hot outside and sarcastic if I accidentally water him too much.<br /><br /> Together they live in a desktop application I call Harem.<br /><br /> The original version used a simple natural language processing model trained on a few dozen intents, but with the introduction of the OpenAI API, I later revised the architecture to support a wider range of moods and conversations.`,
		gallery: [
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "video",
				caption: "He's supposed to be Korean, ignore the accent",
			},
			{
				type: "image",
				caption: "Why stop at one when you can have two husbands?",
			},
			{
				type: "image",
			},
			{
				type: "video",
				caption: "Plot twist: also British",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
		],
		links: [
			{
				cta: "Behind the scenes",
				url: "https://soumya-talwar.notion.site/JIMIN-2022-dea73efc74d6413eaf682ff30224cf96",
			},
			{
				cta: "Github repo",
				url: "https://github.com/soumya-talwar/jimin",
			},
		],
	},
	{
		route: "dokidoki",
		title: "Doki-doki",
		hook: "Win this game to win a date with me",
		url: "dokidoki",
		year: 2025,
		headline:
			"Play my otome game: give the right answers and win a date with me",
		tools: ["HTML", "CSS", "Javascript", "Email.JS"],
		date: "Built in 2025",
		gallery: [
			{
				type: "reel",
				url: "https://www.instagram.com/p/DZcZSUnzk5j/",
			},
		],
		links: [
			{
				cta: "Play game",
				url: "https://soumya-talwar.github.io/dokidoki/",
			},
			{
				cta: "Github repo",
				url: "https://github.com/soumya-talwar/dokidoki",
			},
		],
	},
	{
		route: "odit",
		title: "Odit",
		hook: "My expense tracker insults me when I spend money",
		url: "odit",
		year: 2026,
		headline: "Meet my expense tracker that takes issue with my expenses",
		tools: [
			"Apple Shortcuts",
			"Node.js",
			"Gemini API",
			"Google Sheets",
			"Google Sheets API",
			"Resend",
			"Vercel",
		],
		date: "Built in 2026",
		gallery: [
			{
				type: "reel",
				url: "https://www.instagram.com/p/DX8yd9-zIMl/",
			},
			{
				type: "reel",
				url: "https://www.instagram.com/p/DYm6L6fT5jJ/",
			},
		],
		links: [
			{
				cta: "Github repo",
				url: "https://github.com/soumya-talwar/odit",
			},
		],
	},
	{
		route: "11may",
		title: "11-May",
		hook: "A whatsapp bot to compliment me every hour on my birthday",
		url: "11may",
		year: 2025,
		headline: "Say hi to this cute bot that won't stop complimenting me",
		tools: ["Node.js", "Twilio API", "OpenAI API"],
		date: "Built in 2025",
		audio: "11may",
		transcript: `A day before my birthday, I decided to build a WhatsApp bot that would send me a compliment every hour on the day. <br /><br /> I built this using a Node.js script, scheduled with GitHub Actions to run every hour. Each run picks a random entry from a list of personal achievements I put together and sends it to the Gemini API to generate a compliment. The compliment is then delivered it to me via WhatsApp using Twilio. <br /><br /> To make it more amusing, I paired some of the achievements with images, so I’d get a message that included both the compliment and a photo tied to that moment. <br /><br /> If you’re curious to build one of your own, the code is up on my GitHub.`,
		gallery: [
			{
				type: "image",
			},
			{
				type: "image",
			},
		],
		links: [
			{
				cta: "Github repo",
				url: "https://github.com/soumya-talwar/11may",
			},
		],
	},
	{
		route: "taegificbot",
		title: "@Taegificbot",
		hook: "I released a BTS fanfiction recommendation API",
		url: "taegificbot",
		year: 2020,
		headline: "Get smart fanfiction recommendations from my API",
		tools: [
			"Node.JS",
			"Supabase",
			"Pgvector",
			"Gemini Embeddings",
			"Puppeteer",
			"Cheerio",
			"Vercel",
		],
		date: "Built in 2020 / Reengeneered in 2026",
		audio: "taegificbot",
		transcript: `At some point, I realized that I was spending more time searching for good queer BTS fanfiction than actually reading it. So I built a solution. I started by collaborating with a couple of other fanfic readers to put together a large subset of stories that we loved. For context, Archive of Our Own—or AO3—is a massive online fanfiction repository but since it doesn’t have a public API, I wrote a scraper to extract metadata from each fanfiction—things like tags, word counts, warnings, and summaries—and stored everything inside a database.<br /><br /> On top of that, I built a Twitter bot. You could tag this bot in a tweet and mention what you were looking for—specific tropes, lengths, or pairings—and it would reply with recommendations. It worked really well, but I eventually took it down when I stepped away from social media for personal reasons.<br /><br />In 2026, I revisited the project with a different goal. Instead of tying it to a platform, I wanted to rebuild it as a standalone system that anyone could use or build on top of. So I re-engineered it as an API.<br /><br />The core idea was to move beyond simple filters and build something that could understand natural language queries. I generated embeddings for each story using Gemini, stored them in a vector database using pgvector on Supabase, and implemented semantic search to retrieve the most relevant results. On top of that, I added a custom ranking layer that combines vector similarity with structured metadata like tags, length, and completion status—so the results feel more intentional and tailored.<br /><br />The final system lets you send a natural language query and get back a curated set of fanfiction recommendations. Even though the original bot no longer exists, this version makes the underlying system reusable—and opens it up for other interfaces or experiments in the future.`,
		gallery: [
			{
				type: "video",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
				caption: "The older Twitter bot",
			},
			{
				type: "image",
			},
		],
		links: [
			{
				cta: "API demo",
				url: "https://taegificbot.vercel.app/api/recommend?query=long angsty slow burn",
			},
			{
				cta: "Github repo",
				url: "https://github.com/soumya-talwar/taegificbot",
			},
		],
	},
	{
		route: "fairy",
		title: "Fairy",
		hook: "A fairy dust sound plays when my manager is near",
		url: "fairy",
		year: 2025,
		headline: "Download this app that plays sparkles when my manager is near",
		tools: ["Node.JS", "Capacitor.JS", "Firestore Database"],
		date: "Built in 2025",
		audio: "fairy",
		transcript: `The joke started when my manager took some work off my plate after noticing that I was stressed—I called her my fairy godmother, and the gag just took off from there.<br /><br /> I built an app using Node.js and Capacitor.js, and installed it on both our phones. The app tracks my manager’s real-time geolocation and stores it in Firestore. My phone fetches her latest location, compares it with mine, and whenever we’re within five meters of each other, it plays a sparkly fairy dust sound.`,
		gallery: [
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "video",
			},
		],
		links: [
			{
				cta: "Download APK",
				url: "https://github.com/soumya-talwar/fairy/raw/refs/heads/main/android/app/release/app-release.apk",
			},
			{
				cta: "Github repo",
				url: "https://github.com/soumya-talwar/fairy",
			},
		],
	},
	{
		route: "grays",
		title: "Grays",
		hook: "An advocacy of 128 non-binary genders",
		url: "grays",
		year: 2018,
		headline:
			"Explore a mathematical model that plots 128 genders in a three-dimensional space",
		tools: ["HTML", "CSS", "Javascript", "X3dom"],
		date: "Built in 2018",
		audio: "grays",
		transcript: `I thought it would be an interesting irony to advocate for the existence of non-binary genders by using the most binary system of all—0’s and 1’s—and to prove it all mathematically.<br /><br /> Our society isn’t binary: man or woman, male or female, masculine or feminine, no—real variation exists in every measurable attribute used to assign those categories. Facial hair, voice pitch, hormone levels, reproductive organs, external genitalia, as well as people who are intersex all prove that ‘biology’ is not a clear-cut basis for the gender binary. It is imperative to separate a person’s gender from their biological sex.<br /><br /> A person’s sex refers to their anatomy—their reproductive system and secondary sex characteristics—but their gender identity is their internal, deeply held sense of their gender. When those two do not align, the person may identify themselves as transgender, non-binary, or gender-nonconforming.<br /><br /> During the course of this study, I looked into 128 different kinds of non-binary genders. I gave each one a binary encoding and plotted them in a multi-dimensional space where each gender has a mathematical relationship with another. The resulting visualization suggests that gender is neither binary nor a linear spectrum—but an expansive field of endless identities and expressions.`,
		gallery: [
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
		],
		links: [
			{
				cta: "Visit site",
				url: "https://soumya-talwar.github.io/grays/",
			},
			{
				cta: "Github repo",
				url: "https://github.com/soumya-talwar/grays",
			},
		],
	},
	{
		route: "hominidae",
		title: "Hominidae",
		hook: "Exploring sexual violence among great apes with art",
		url: "hominidae",
		year: 2020,
		headline: "View artworks that model sexual aggression in apes",
		tools: ["HTML", "CSS", "Javascript", "P5.JS"],
		date: "Built in 2020",
		audio: "hominidae",
		transcript: `Hominidae is a series of interactive autonomous artworks that illustrate sexual violence and aggression seen in the Great Apes.<br /><br /> However, at no point do I try to justify sexual violence as “good” or “correct” simply because similar behaviour is seen in non-human animals and is therefore natural. Just because something is a certain way that it ought to remain the same way is a flawed argument. The fact of the matter is sex and reproduction is unfair. It wasn’t always the case. The first organisms to evolve were in the sea, unable to move. They’d spew out millions of gametes into the ocean with the hope that they’d meet. But that was hardly an efficient mechanism of reproduction, and eventually evolution separated the two sexes. The female built an egg with sufficient nutrients in it and the male worked to go find that egg.<br /><br /> But once evolution proceeds, the whole animal can walk over and find a mate. If the eggs are already laid, the male simply needs to lay the sperms right on top of them, an act that hardly requires the amount of energy that the female is putting into her eggs. That’s where we start seeing an inequality between the two sexes. Females make a few eggs, and her eggs are very expensive and rare, but males still make many, many sperms, and his sperms are plentiful and cheap. Once they take these two different evolutionary routes, different reproductive strategies come into play for the both of them.<br /><br /> Males compete with each other for dominance and use that dominant status to mate with the female. And females try to find the male with the best genes for their offspring, and in species where males fight for dominance, females choose the winners. The male that wins possesses some genes which allow him to win these fights—he's big and strong and has sharp teeth. And the female will choose the most violent male to father her children because then her offsprings will also become these big, violent & successful males.<br /><br /> What happens then is that both the male and female reproductive strategies collude in increasing the`,
		gallery: [
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
			{
				type: "image",
			},
		],
		links: [
			{
				cta: "View pongo",
				url: "https://soumya-talwar.github.io/hominidae/pongo/",
			},
			{
				cta: "View gorilla",
				url: "https://soumya-talwar.github.io/hominidae/gorilla/",
			},
			{
				cta: "View pan",
				url: "https://soumya-talwar.github.io/hominidae/pan/",
			},
			{
				cta: "Github repo",
				url: "https://github.com/soumya-talwar/hominidae",
			},
		],
	},
];
