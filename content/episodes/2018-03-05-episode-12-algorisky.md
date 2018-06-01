---
categories: episodes
date: 2018-03-05T09:00:00-07:00
description: "From Google search to Facebook news, algorithms shape our online experience. But like us, algorithms are flawed. Whether intentional or not, biases get written into code. Now, more than ever, it’s up to us to push for accountability. Because when bad code spreads disinformation, it’s never something that “the algorithm did.” It’s something people did. Veronica Belmont investigates algorithmic accountability, in conversation with Luke Dormehl, Staci Burns, James Bridle, Nick Seaver, and Safiya Noble."
draft: false
embed: "afafa89f"
mp3: "https://tracking.feedpress.it/link/17512/8459340/afafa89f.mp3"
number: 12
ogdescription: "When bad code spreads disinformation and bias, it’s never something that “the algorithm did.” It’s something people did."
ogtitle: "Episode 12: Algorisky"
season: 2
seasonepisode: 5
shownotes: "Algorithms aren’t neutral. They’re really just recipes; expressions of human intent. That means it’s up to us to build the algorithms we want. [Read more on how we can make algorithms more accountable](https://blog.mozilla.org/netpolicy/2017/10/23/mozillas-comments-uk-algorithms-inquiry/)."
url: /episode12/
title: "Algorisky"
transcript: |
    **Veronica B.:** Hey everyone it’s Veronica, now before we dive into the episode, I want to invite you to come out to a live taping of the show, you get to come see an episode of IRL - recording in real life. The episode dives into misinformation and the web. Online it’s hard to figure out what's real and what's fake - who can be trusted and who absolutely can't. Bots spread false news and hype controversies, echo chambers, polarize opinions and divide us. Alternative facts and emotions are trumping accurate reporting. So what can we do to make things better? The taping is at at 4pm at the Commonwealth Club in downtown San Francisco on Sunday, March 18. Want to be in the audience? Send us an email and we'll add you to the guest list until we run out of spots. The email address is [irl-podcast@mozilla.com](mailto:irl-podcast@mozilla.com) and and we’ll take it from there. That’s [irl-podcast@mozilla.com](mailto:irl-podcast@mozilla.com). Alright, I’ll see ya there pals. Here’s this week’s episode.
    
    **Staci Burns:** Okay. Do you want me to kind of tell the story while I'm introducing, or just make it real brief, like hi, I'm Staci. I'm the mom of two boys, and my son ... I don't even know what to say.
    
    **Veronica B.:** Most parents do it. They've got their hands full, or frankly, they just need a moment to themselves or to get something done, so they hand over the iPad to the kid. Let them entertain themselves with some fun videos on YouTube Kids. Staci Burns would let her son Isaac do this, too. Isaac is three years old.
    
    **Staci Burns:** One night, I was in the kitchen cooking some dinner. My son was a few feet away from me on the floor watching an iPad, YouTube Kids to be specific. The video that my son was watching was basically a few characters from the show Paw Patrol, and I heard him say, "Mommy, the monster scares me," and I look over to see what he's doing. He wasn't crying, but he had this really concerned look on his face like he was worried for the characters' safety.
    
    **Veronica B.:** I'm assuming you've been YouTube and know that when you watch something the sight loads up a bunch of recommended videos to watch next. It's some kind of algorithm where it's basically-
    
    **Staci Burns:** If you like Paw Patrol, then here's some other videos that have the name Paw Patrol in them.
    
    **Veronica B.:** The video Isaac was watching played just like a Paw Patrol clip, had the same harmless, happy music, the characters, and everything, except Staci noticed ...
    
    **Staci Burns:** He's watching this really violent cartoon on YouTube.
    
    **Veronica B.:** The video was a fake.
    
    **Staci Burns:** They were driving in a car and they were all screaming, which was being chased by some creepy-looking doll with big, scary eyes. Yeah. When the car crashed, there was blood all over the place. The car basically burst into flames and then blood was leaking from the car and it had Xs over their eyes.
    
    **Veronica B.:** Staci counted on the algorithm to filter material on YouTube's kids channel, but this time it had been gamed with content designed to slip through the algorithm's fingers, and since there's no human at the gate, it ended up on Isaac's iPad.
    
    **Staci Burns:** Later when I was on my own, I got on my phone and went to the channel that had the video in question. I mean, I didn't watch any of them, but they all had descriptions like Paw Patrol babies pretend to die by suicide. There have been negative impacts from the video, if I'm being honest. He wasn't afraid to go to his room by himself until after he watched the video.
    
    **Veronica B.:** When an algorithm fails, it might make you second guess the abilities of the coders who built it. An algorithm is only as effective, only as useful, only as good as its programming lets it be. Today, we peek inside the black boxes and learn how algorithms rule huge parts of our online and offline lives, and we find out what we can do to make them work better. I'm Veronica Belmont, and this is IRL: Online Life Is Real Life, an original podcast from Mozilla. An algorithm is a recipe. That's it. It's a set of instructions that gets you from point A to point B to point wherever. When you stumble into the kitchen in your PJs, and without really thinking you start making coffee, you're using an algorithm. You don't invent a way to make coffee every single morning. Instead, you follow a predetermined set of steps, the steps that you know will result in coffee. Beans out of the cupboard, beans in grinder, grind beans for 10 seconds, dump grounds in filter, put water in reservoir thingy, put pot in its place, mash the start button, stare out the window, wait. Follow the algorithm, get a cup of beautiful coffee. In our online world, those recipes, they're everywhere.
    
    **Luke Dormehl:** So really, every time you do something involving a computer, algorithms are in some way involved.
    
    **Veronica B.:** This is Luke Dormehl. He wrote The Formula. It's a book about how algorithms run our lives. He also wrote Thinking Machines, a book on artificial intelligence. This guy, algorithms. I've asked Luke to stick around for the entire episode today, a bit of a copilot. He'll explore a few ideas with me with the help of other guests I'll be pulling in.
    
    **Luke Dormehl:** Computer programmers often like to take big, complex issues and turn them into a problem that can be broken down into that sequential series of instructions.
    
    **Veronica B.:** In a sentence, that's entirely how the internet works, and more and more, it's a lot like how a lot of stuff in real life works, too, so it makes sense that we expect these things to work perfectly. Luke, let's dive into this. What do you think?
    
    **Luke Dormehl:** There's this idea that the inventor of the ship is also the inventor of the shipwreck, and what's so interesting about it is the fact that these to a lot of people these are kind of invisible processes. We don't necessarily know how these algorithms work, but they have an enormous impact on our lives.
    
    **Veronica B.:** Exactly, and even the word algorithms is kind of mysterious. In fact, it's the only word I consistently spell incorrectly all of the time, like 100% of the time, but I imagine that at least the people who are building these things understand them, that they kind of get how they work. So, we talked to Nick Seaver. He's an anthropologist at Tufts University in Boston, and he actually went and embedded himself in Silicon Valley to learn how these engineers build the algorithms that rule our digital lives, as we know, but it turned out it wasn't quite so simple, so let's have a listen to what he has to say about that particular adventure.
    
    **Nick Seaver:** When I set out to interview people who worked on algorithmic recommendation, I wanted to figure out how specific kinds of algorithms corresponded to specific kinds of ideas about culture, so that sounds like a pretty straightforward project. You ask someone what they think about taste, why people like what music they like, for instance, and then you ask them about the recommender algorithm they've designed. These are people that, to most outsiders, are clearly working on the algorithm, as we usually talk about it, but when I ask them about their algorithms, I get these blank looks. Whatever bit of the system they personally worked on wasn't the algorithm, and it kept happening. At the engineering level, the algorithm was sort of everywhere and nowhere, so I realized that this vision I had had of the algorithm is a kind of simple thing I could wrap my head around and describe in a sentence or two didn't really exist, not even for the engineers who we might pretend have the inside scoop. Instead, it's so distributed and dependent on all sorts of unreliable things that it's actually hard to figure out whether it's doing what you want, and no one person has that bird's eye view on the whole thing.
    
    **Veronica B.:** That's Nick Seaver from Tufts University, and Luke, you're still here hanging out with me. Where does your mind go when you hear this, that algorithm builders can't say for sure how what their building actually works?
    
    **Luke Dormehl:** If you're talking, for example, about music recommendation or the discovery algorithms which are used on Amazon that say, "You enjoyed Harry Potter. You might also enjoy Twilight," that is ... If that algorithm isn't entirely understood by its creators, you know the worst thing that can happen is that you're recommended a book which isn't the book that you wanted. If you're talking, however, about an algorithm which is potentially going to be used for incriminating someone in some way, potentially kind of stripping someone of their driving license, as has happened in the past, or something which is gonna have a far more profound impact on someone's life, that's quite alarming.
    
    **Veronica B.:** How ubiquitous or dependent are we on algorithms in everyday life?
    
    **Luke Dormehl:** Very. I mean, if you look at something like online dating, that's now where a large number of people meet each other, a lot of that matching process is carried out algorithmically. The news that we're shown on Facebook, which you can argue as has been argued over the past year can impact on election results, that's a pretty dramatic implication of algorithms. Economically, the amount of financial traits which are now made algorithmically is considerable, so really, every aspect of our lives that we look at, there are algorithms with are being used to control them in some -  some cases.
    
    **Veronica B.:** So, how about as an individual? So, I have an Apple Watch. I'm really into the quantified self. I like data about my day-to-day life. People buy Fitbits and other devices like that. We're really amassing a ton of data on ourselves. Are we becoming algorithm junkies?
    
    **Luke Dormehl:** I kind of think that to an extent we are. You know if you go back 20 years, and I think this would be something that would be only a certain fraction of people would be interested in, whereas today we all collect sort of Fitbit data. There's actually a case going on in Germany at the moment where a 19-year-old woman had been murdered, and they arrested someone, and they had no surveillance footage that was kind of accounting for this person's whereabouts during that time, so what they did was they gained access to his iPhone and looked at the health data, because they -  one of the things that the iPhone does is it talks about how many flights of stairs you've climbed-
    
    **Veronica B.:** Oh, no...
    
    **Luke Dormehl:** ... and they were able to look to see basically the movement that he would've been taking, sort of climbing up and down this riverbank where she vanished correlating with the amount of stairs that his iPhone said that he had been climbing, if that makes sense, and they were actually able to get investigators to replicate those movements, and found that the iPhone kind of collected that same data.
    
    **Veronica B:** Wow.
    
    **Luke Dormehl:** So hopefully that's a scenario that not many listeners will ever find themselves in, but that's kind of an example of some unexpected way that our iPhones may be constantly sort of tracking our movement, and the way that, you know, the idea that data that we're collecting about ourselves could one day wind a person up in prison is kind of something, I guess, kind of intriguing to think about.
    
    **Veronica B:** So look, if I mess up a question I just stop and start over. But when someone messes up an algorithm, how bad can it get?
    
    **Luke Dormehl:** I mean, really, there can be all sorts of problematic aspects. For example, in 2010, there was a very famous, called the flash crash. When suddenly billions of dollars disappeared off the stock market, which turned out to possibly be because an algorithm had made a mistake. In that case, then that is a very obvious, sort of notable example of how an algorithm making potentially a sort of, what seems like a minor error, can have an enormous, immediate, sort of economic effect.
    
    **Veronica B:** On a simpler level, what comes to mind for me is the Solid Gold Bomb t-shirt company a few years ago that actually used an algorithm to generate words on shirts. Do you remember that one?
    
    **Luke Dormehl:** I do, and it's funny because, how badly wrong could that go? And it turns out that it can go fairly badly wrong. This story involved, as you say, a t-shirt manufacturer which came up with a technology that was going to generate slogans to complete the sentence, "Keep calm and," the main one is, "Keep calm and carry on," but it was going to run through different possible kind of word combinations, and it wound up generating all of these really offensive ones like, I think, "Keep calm and rape a lot," was one. "Keep calm and hit her, Keep calm and grope on," and they wound up being suspended from Amazon. I think that that is a big thing that we're increasingly seeing. Algorithms which are making mistakes, which were humans to make that same error, would be an enormously kind of big problem, but the companies now say, "Actually, it wasn't our fault. It was the algorithm, which accidentally did this."
    
    **Veronica B:** But it did actually kill the company, and the shirts were never printed. So, effectively, even though they were able to blame the algorithm, the algorithm kind of, it kind of slapped back.
    
    **Luke Dormehl:** It did. It brought them down, so yeah. Maybe we shouldn't always cede that much control when an algorithm is coming up with the slogans that dictate whether our company continues or not. Maybe that's putting a bit too much reliance on them.
    
    **Veronica B:** This is IRL, Online Life is Real Life. I'm Veronica Belmont, and with me for this episode is Luke Dormehl. He wrote The Formula, and it's about how algorithms rule our everyday lives. It's not just the programmers of algorithms who need to be held accountable. Sometimes it's the people using the algorithms. The mom you heard at the top of the episode, Staci Burns, described how she and her son were the victims of YouTube video uploaders, who were gaming the video recommendation algorithm.
    
    **Staci Burns:** Mommy, the monster scares me.
    
    **Veronica B:** When news about this problem broke last fall, YouTube shot a bunch of these video providers down pretty fast. James Bridle wrote a post about this on Medium, and it really struck a chord. So I asked him about it.
    
    **James Bridle:** No, so there's lots and lots of kids watching YouTube. They're racking up millions and millions of hits on these videos, which means there's lots and lots of advertising money to be had if you can get your videos in front of kids. What you can do as a content provider, is you can look at what are the most popular keywords? Like PAW Patrol or Peppa Pig, and you can give your video that title, and it'll get picked up by this algorithm and fed into this ongoing stream of videos. Some of those are, you know, well-known TV programs. Beyond that you get really, really badly made ones that are just desperately trying to get the right words into the title. Gradually they expand, and they turn into these insane kind of word salads, which are kind of like spiderman, Elsa, learn colors, trampoline, tape. Whatever it is, these kind of nonsensical sentences that, nevertheless, are like, kind of catnip to the algorithm that's trying to find the holy grail, the most popular content out there and show it to people in return for ad money. What you have is a massive money faucet with people trying to stick their mouth under it.
    
    **Veronica B:** After you wrote about this, and the New York Times wrote about it, YouTube moved pretty quickly to identify and shut down a lot of these channels. How do you feel about their response? Do we trust the algorithms at all when we see stuff like this?
    
    **James Bridle:** I mean, it's great that they shut down some of the more prominent channels. Though frankly, they only act once they're kind of prodded to do so. And no, you don't trust anything when you don't fully understand how it functions. This is the nature of proprietary and commercial algorithms, is that essentially they're gonna be making decisions in the best interest of the company that designed them. So they absolutely, absolutely can't and shouldn't be trusted.
    
    **Veronica B:** That's James Bridle, a writer in the UK. So Luke, you're a new dad. How did you react to this story when you first heard about it?
    
    **Luke Dormehl:** Yeah, I think it's horrifying. I think that any parent would be terrified. In some ways this highlights both what's great about algorithms in some senses, and what's sort of terrible about them. I mean, YouTube is a tremendous resource. But then the problem is that you get something like this, which is a relatively straight forward way to game an algorithm. Essentially all they're doing is just putting the name of a child's program in the title, and then the algorithm, it presents it as part of, you know, the rest of the collection of things, which are far more appropriate in that, in that category.
    
    **Veronica B:** With this just absolute sea of content on a site like YouTube, for example, with tons of online content, are the algorithms managing this just inherently prone to being taken advantage of?
    
    **Luke Dormehl:** I think so. I think that people are always going to find ways to sort of get around a lot of these tools, and particularly when there's sort of money - money at stake. I think that there is always going to be a sort of vested interested in people finding ways to kind of game the system. But hopefully over time these systems will get smarter and cases like this, as troubling as they are when they come out, will make companies kind of realize the importance of actually kind of tightening up these systems so that some of these more straight forward ways of gaming them can actually be closed.
    
    **Veronica B:** The trickiest problems with our algorithms are the ones we create ourselves. Programmers write cultural biases into the code, whether they realize it or not. So the algorithm can itself return biased results when they go to work. I put this to Safiya Noble. She wrote a book called, Algorithms of Oppression. Safiya first got interested in this nearly a decade ago when she was still a graduate student. A colleague pointed out something bizarre he had noticed on Google.
    
    **Safiya Noble:** He just happened to kind of give me a throw away. He said, "Oh yeah, you should see the kinds of things that come back even when you search for 'black girls.'" He started laughing, and he was like, "Don't do that search, Safiya," which, of course meant I went and did it, and I was stunned, quite frankly, at that time to see that 90% of the content on the first page when you did a keyword search on the words "black girls," was pornography, or some type of hyper sexualized content. From there, that is where I really started looking at all kinds of identities, concepts, images, and it's really led to several years now of tracking the kinds of biases that show up in Google search results.
    
    **Veronica B:** So why are algorithms biased?
    
    **Safiya Noble:** One of the things that, when we think about algorithms, that I think is a challenge here is, is we think of algorithms as objective mathematical formulas. And yet math, computer science, computer programing, these are languages to express ideas and concepts. And as we know, language is highly subjective. So computer language also is subjective based on who's writing, who's coding, and how they want to express or point to particular ideas and concepts.
    
    **Veronica B:** If I search for "black girls" on Google, I don't get the results you saw 10 years ago. So what do I need to understand about that?
    
    **Safiya Noble:** We've seen Google be very responsive to the critiques. In some cases they've issued apologies for, say, you know, doing searches on Jews and being served up white supremacist, Holocaust denying websites, and it tries to curate its search results differently. So I think that these are positive signs.
    
    **Veronica B:** So Luke, algorithms didn't invent the kind of racial bias Safiya mentions here, but how does this bias or this discrimination in this context, how is it different from bias offline?
    
    **Veronica B:** Text ... How is it different from bias offline?
    
    **Luke:** I think probably that the biggest difference is that as regrettable and terrible as sort of obvious revert bias in the real world might be, someone obviously discriminating against another person, that's noticeable. With an algorithm, it's an invisible process, so we assume that what they're presenting us is in some ways as was mentioned in that interview clip, an objective truth, and of course it's not. 
    
    **Veronica B:** So how likely do you think it is that algorithmic bias is a problem that just can't be solved?
    
    **Luke:** I ... It's a very, very difficult thing. Hopefully with education increasingly focusing on sort of computational skills, the generation of people I suppose who have grown up with smart phones around them, they will have more of an awareness of how some of these technologies around them work. But I think that there's always going to be a degree of bias. 
    
    **Veronica B:** Of course, if algorithms aren't neutral, if they're really just expressions of human intentions, that means it's up to us to build the algorithms we want. But algorithms can be complicated. So unpacking how an algorithm works or doesn't work isn't easy. How to make them accountable is a work in progress. When officials working at the department of human services in Allegheny County, Pennsylvania built their family screening tool algorithm, they did so knowing it would come under intense scrutiny, so they built with that in mind. The algorithm helps them better respond to people phoning in to report on the welfare of children in their county. Erin Dalton is their deputy director. 
    
    **Erin:** So workers in Allegheny County get a tremendous amount of volume, so 14-15,000 calls to a county of about 1.2 million. Unlike the police, we don't have resources to respond to all of those calls.
    
    **Veronica B:** Prioritizing the highest need cases is critical, but it's also time consuming, and decisions can be very hard to make. So with the help of some expert researchers, they created a system that helps staff make smarter decisions. 
    
    **Erin:** The Allegheny family screening tool is a predictive risk model, which takes into account previous human services, criminal justice, other social services, experience, and predicts the likelihood of a future adverse event, so the likelihood of a home removal, which is a really serious event, or the likelihood of  future and sometimes many calls back to the child abuse hotline reporting abuse and neglect. 
    
    **Veronica B:** One thing I found interesting is how the county insisted on building the algorithm transparently, that way people could understand why and how it was being made. Here's Erin again.
    
    **Erin:** First, we of course procure this to a public process. Transparency around what data goes into it, so there's a paper on our website that documents all the data elements that are part of the system. We had a number of public meetings where we explained the tool to the public, allowed them to ask questions, provide input, and in fact, influence our process. We had a separate ethical review, which examine the ethics of implementing or failing to implement a tool like this. The hard part for us is that because we're so transparent, people can so easily attack what we're doing, and that’s fine because we want it to be the best thing we can be. They just can't compare it to anything else, you know what I mean? Like nobody else is willing to be this transparent. 
    
    **Veronica B:** She says, "Nobody else is willing to be this transparent." Luke, what do you think?
    
    **Luke:** I think that that's certainly true when you're talking about a company. If you're talking for example about Google, then the algorithms, which the make their search-search technology so valuable. These algorithms are guided like missile codes, so in that sense, al ... Companies are not necessarily willing to share exactly how this technology works because it's their competitive edge.
    
    **Veronica B:** Exactly. Even if we opened up all these black box algorithms if we somehow convinced companies like Facebook, or Google, or Uber, or whatever to show us their formulas, what are the chances we'd even know what we're looking at?
    
    **Luke:** Absolutely. Particularly if the people who are programming these algorithms don't necessarily understand exactly how they work. They don't know how the computer is necessarily making some of these decisions, so in that case, exactly how do you start on picking that? How do you start presenting that information to the public? It's really, really difficult, and even when you gave the example of maybe bringing the public in at an early stage, you then have to pass those results onto a computer programmer, whose then going to interpret what the public have said, and turn that into an algorithm. So it's very, very difficult to know exactly how you can make this information transparent to people.
    
    **Veronica B:** So then how do we make sure algorithms are working for us all the time and not against us, whether that's accidentally or on purpose?
    
    **Luke:** Excellent question. I think if you had it ... A good answer to that, then you would certainly be in great demand among tech companies. A lot of the time it comes down to subjective-subjective issues, so for example, if you look at ... I know Facebook is now taking steps to maybe change this by changing its Facebook feed, but a user on Facebook is essentially kind of looking for news about their friends. Facebook is looking at a way monetizing your social graph, so the people who are creating the algorithm maybe have a different idea of what they wanted to achieve versus the people who are using it. I don't think that we're anywhere near answering these questions, but I think the fact that we're now at a stage where a large number of people in the public are asking these questions about algorithmic accountability, we're hopefully at the start of what should be an interesting kind of shift. 
    
    **Veronica B:** Luke Dormehl is the author of The Formula: How Algorithms Solve All Our Problems and Create More. And he also wrote Thinking Machines, the quest for artificial intelligence and where it's taking us next. Every algorithm is repeating somebody's idea of how things should go, what we should do, who we should be. The mathematician, Cathy O'Neil warned that what algorithms are really good at is automating the status quo. That means the more our lives are managed by algorithms, the more accountable their programmers need to be. I've had these moments where my friends and I joke about what did the algorithm do? Like we can blame the code for making a bad decision or suggesting we watch some horrible movie on Netflix. But the truth is, it's never something the algorithm did, it's something people did. That means we can still take charge of our algorithms. After all, they're here to serve us, not the other way around. Earlier, I mentioned how after the Youtube kids controversy, the company reacted quickly to implement changes. Since then, the company has rewritten their policy around how video creators can monetize their content. Now, a creator's channel needs to earn at least 4,000 watch hours and 1,000 subscribers before it can apply for the ad program. Youtube also says it's adding more humans to the content approval process and of course, those humans are also helping train the algorithms to be smarter and work better. Luke Dormehl, and the rest of this episode's guests are all working to build better relationships with the code that shapes our identities and our lives. They're looking for ways to make algorithms more accountable, so is Mozilla. You can read about Mozilla's position on algorithmic accountability, just check out the show notes to this episode at IRLPodcast.org. IRL is an original podcast for Mozilla, the not for profit behind the all new Firefox browser. I'm Veronica Belmont, I will see you online until we catch up again, IRL. A-L ... No, yeah. A-L-G-O-R-I-T-H ... I always feel like there's a Y in here, but I don't think there actually is. Algorithm. Thm, thm ... Y-M? There's still not a Y in there, is there? Is there a Y in there anywhere? T-H-I-M? You're laughing, but you're not giving me any feedback.
---
