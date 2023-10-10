---
date: 2023-10-10T00:55:00-07:00
title: "With AIs Wide Open"
ogtitle: "With AIs Wide Open"
description: |
    Are today’s large language models too hot to handle? Bridget Todd digs into the risks and rewards of opening up the tech that makes ChatGPT talk.
ogdescription: "Are today’s large language models too hot to handle? Bridget Todd digs into the risks and rewards of opening up the tech that makes ChatGPT talk."
number: 45
season: 7
seasonepisode: 1
url: /season7/episode1/
embed: "6560d8e5-be30-4bd4-bba7-ae6624c03106"
mp3: "https://cdn.simplecast.com/audio/9b52b824-909f-4be5-aaf0-10f9e93c7818/episodes/6560d8e5-be30-4bd4-bba7-ae6624c03106/audio/a21fd4d1-18c1-431c-b092-e67cb1fdec66/default_tc.mp3?nocache"
categories: "episodes"
host: "Bridget Todd"
shownotes: |
    Are today’s large language models too hot to handle? Bridget Todd digs into the risks and rewards of open sourcing the tech that makes ChatGPT talk.

    In their competitive rush to release powerful LLMs to the world, tech companies are fueling a controversy about what should and shouldn’t be open in generative AI.

    In this episode, we meet open source research communities who have stepped up to develop more responsible machine learning alternatives.

    [David Evan Harris](https://haas.berkeley.edu/faculty/harris-david/) worked at Meta to make AI more responsible and now shares his concerns about the risks of open large language models for disinformation and more.

    [Abeba Birhane](https://abebabirhane.com/) is a Mozilla advisor and cognitive scientist who calls for openness to facilitate independent audits of large datasets [sourced from the internet](https://arxiv.org/abs/2306.13141).

    [Sasha Luccioni](https://www.sashaluccioni.com/) is a researcher and climate lead at Hugging Face who says open source communities are key to developing ethical and sustainable machine learning.

    [Andriy Mulyar](https://www.linkedin.com/in/andriymulyar/) is founder and CTO of Nomic, the startup behind the open source chatbot [GPT4All](https://gpt4all.io/index.html), an offline and private alternative to ChatGPT.

    IRL: Online Life is Real Life is an original podcast from Mozilla, the non-profit behind Firefox. In Season 7, host [Bridget Todd](https://getpocket.com/collections/ai-is-shaping-the-future-of-the-web-how-can-we-make-sure-its-for-the-better) talks to AI builders that put <em>people</em> ahead of profit.

transcript: |
    **Bridget Todd:**  So, the first thing I ever asked ChatGPT, wasn’t work related at all. It was actually for help drafting kind of a tough personal email I had to send. I was having trouble finding the right words, the right tone. So, I asked Chat GPT, and I was amazed - it actually produced something that I might say. That was about a year ago. Fast forward to today, and Open AI is said to be on track to earn one billion dollars of revenue in the next year.

    Even though large language models aren’t new, suddenly more people can see the potential through that simple interface. For good, for bad, and for making money.

    **Bridget Todd:** This is IRL, an original podcast from Mozilla, the non-profit behind Firefox. This season we meet people who are building artificial intelligence that puts people over profit. I’m Bridget Todd. In this episode, we get into the risks and rewards of ‘the tech that makes ChatGPT talk. We’re talking about large language models — LLMs for short — and the controversy over suddenly giving the whole world access to build with them. But chatbots are only one example of what powerful LLMs can do. Imagine video games where characters can chat with you more or virtual assistants that can draft emails for you at work. Banks, insurance companies, travel agencies. Everyone is thinking about how to use this technology to increase productivity and more. But there’s also a lot of talk about the risks.

    **David Evan Harris:**  I think a lot of people don't understand the detailed capabilities of large language models. You could use them to really tear apart the civic fabric of a country.

    **Bridget Todd:**  That’s David Evan Harris. Over five years, he managed teams that kept harmful content off Facebook and later also researched responsible AI for Meta. Today, he’s worried that LLMs can be used to generate disinformation and hate speech on a greater scale than ever. Like other big tech companies, Meta develops its own LLMs. And now they're urging people to use them and tweak them with few strings attached. Meta’s LLMs are called Llama. They might have a cute name, but David says there’s a potentially ugly side to Meta’s open LLM.

    **David Evan Harris:**  I have a long history with open source and a big passion for it. But thinking about large language models and Llama and, and whether or not these things are safe to be open source has been a real turning point for me. I remember more than a decade ago having some conversations with a friend at M.I.T. about the possibility of open source licenses that don't allow for military use. We love making open source software but what if our open source software is being used to make bombs and kill people? We don't wanna do that.

    Now that connects to this question of what's the threshold for something that we're not comfortable having open source?  I just think the bigger danger that I keep coming back to, and maybe not bigger, but a very important danger, is misinformation. And is the idea that a system like Llama 2 could be really effectively abused in a large influence operation campaign by what we call in the industry, a sophisticated threat actor, and that basically means like an intelligence agency that probably has great hardware and big budgets and well trained engineers.

    **Bridget Todd:**  David’s argument, echoed by many in the industry, is that we don’t really know how LLMs of today or tomorrow could be harmful in the long term. But he’s also focused on the harms of the here and now, and how these disproportionately affect people who are already at risk of exclusion and discrimination. So here’s how I think about LLMs: Put on your chef’s hat for a moment and imagine you’re baking a delicious cake, a layer cake. The foundation or bottom layer of that cake is a “large language model”. It’s made out of  lots of internet data. Some of these ingredients aren’t the best quality, but with additional layers, coloring, icing and sprinkles you can finetune your system. To make a chatbot, you finetune an LLM with data of people chatting. To make a safer chatbot you train it with data that shows what prompts should trigger safety replies. Whenever you’re building software with LLMs, like Llama, or GPT4 or Falcon, that’s just part of what goes into the cake. So there are a lot of options that go into creating an AI system, even when the so-called foundational models are the same.

    **David Evan Harris:**  When you're using AI in a hiring system or in an applicant tracking system that's sorting through thousands and thousands of resumes, you don't need an LLM for that. But you could use LLMs for that kind of thing. You could use LLMs to give you analysis of different candidates’ And there may be situations where LLMs demonstrate bias. I say this because, you know, banks are using LLMs too. If a bank is using an LLM as part of their processes to evaluate loans and nobody has noticed yet because that LLM has never been systematically tested for bias, maybe that's introducing bias into that bank system. So I think there's some danger there and a lot of people think, Oh, ‘danger? That's not danger.’ And you know, if you're getting denied a mortgage because of your race, that's danger to me,

    **Bridget Todd:** David feels the industry as a whole is rushing development. At the same time, Responsible AI teams have been downsized at several companies.David himself was laid off from Meta’s Responsible AI team in 2022.

    **David Evan Harris:**  As a company that's using AI or, or even as a government that's using AI, or a nonprofit organization that's using AI, you need to create robust processes to figure out how and when it's appropriate to use AI systems. And you need to have people who are not interested parties and in the case of a company, an interested party might be just the engineer who wants to ship the damn thing and get the feature running with the AI and you need to have someone who does not have an incentive to ship products in the loop there who can say, hold on. We might need another month of testing of this. Hold on. We might need to find a way to get someone out from outside the company to really give us an opinion about if this is a fair AI system or if this is safe.

    **Bridget Todd:** The reason so many LLMs are at our fingertips now, is that investors with deep pockets - Google, Microsoft, Meta, Elon Musk, and others, have been pouring money into AI research and  powerful supercomputers.Some companies will bake LLMs into their own products. Others will make money by licensing access to them. Everyone is competing for influence, and for engineering talent that can help them go faster. Openness can be a strategic move to get ahead by attracting more developers. But often companies also exaggerate how open they are, since it’s not always possible to see their data or methods.

    **Abeba Birhane:** So I've followed these models very closely and I know every time they're released, I know there is some element of deception.

    **Bridget Todd:** That’s Abeba Birhane. TIME Magazine just named her one of the 100 most influential people in AI. She’s a Mozilla advisor and a cognitive scientist from Ethiopia working at Trinity College in Dublin, Ireland.

    **Abeba Birhane:** I mean, Llama for example, was introduced as, oh, an open source, large language model, and I went into the paper hoping to find information, detailed information, because I work with datasets. I went immediately into the dataset section and it was just one tiny, small paragraph in that giant paper. Abeba wants to know what’s inside the datasets for AI, because systems trained on them mimic their biases.Just a handful of datasets get used repeatedly across most LLMs. And these usually include massive amounts of internet content from an open dataset called Common Crawl.

    **Abeba Birhane:**  The internet can be a really toxic place. It holds, you know, everything from the world's beauty to its ugliness and everything in between. For example, during our audits, we found content such as child abuse or genocide or a lot of explicit pornographic images. You also have to make sure that personal sensitive information that could be used to identify individuals, you have to make sure things like this are not included in data sets. That's one of the reasons why we need to audit the datasets we're using to train models.

    **Bridget Todd:** Decades of research show the internet has never been representative of all the world’s people or languages. But in generative AI it becomes the ground truth. Abeba and her colleagues have coined a term to highlight the problem they see.

    **Bridget Todd:**  Abeba, I noticed that in one of your papers you actually used the term data swamps not datasets. Where did that term come from? Like why data swamps?

    **Abeba Birhane:**  Data Swamp is an attempt to kind of express how such a huge dump, like the Common Crawl or even large scale datasets now, how they represent not only, the good and the healthy of humanity, but also the nasty and ugly of humanity because you find all kinds of horrible, hateful, degrading text, especially towards minoritized communities, and you find all kinds of images that Is really disturbing to the human eye.

    **Bridget Todd:**  Even when these enormous datasets are open, it can be too difficult and costly for independent researchers to audit because they’re too big. But even using smaller samples of datasets, Abeba and her colleagues have uncovered a ton of problems. In the past, their audits of a leading image dataset for AI documented so much racism and sexism that it was decommissioned after decades of use.

    **Bridget Todd:**  So Abeba, Is it personal for you, the motivation to keep going?

    **Abeba Birhane:**  Yeah, it is a bit personal. When I go into datasets, for example, you know, the first thing I query is around, you know, how black women are represented, how Africa as a continent is represented and so on. So when I see all the negative images or, extreme negative stereotypical caricatures or, you know, completely inaccurate, false, misleading informations, you feel like if you don't say anything, if you don't do anything about it, nobody else is gonna.

    **Bridget Todd:**  Abeba says we need regulation to make companies more transparent about the data they use and where it came from. She says if companies can hide this information they can include data they don’t actually have permission to use.

    **Abeba Birhane:**  These artifacts are not something that just remain in the labs of big corporations. These are tools that infiltrate into every social sphere. What information goes into them, what kind of dataset that is used to train them, where the dataset is sourced, and the quality of the dataset itself, and how the models were built, and any other important information should be open for auditing and for scrutiny given that they are almost treated as social good that are supposed to serve everybody. So some level of openness is really important. In terms of making them entirely open, some people have raised the issue of if they can be accessed by everybody, Bad actors can download them and use them for problematic applications. There is always a balance that we have to keep working around we have to always try and find that is between open and closed.

    **Bridget Todd:**  It’s because LLMs and their datasets can be problematic that we need independent scrutiny of them. Could regulation empower people to work together to improve these systems?

    **Sasha Luccioni:**  Currently there's been a lot of polarizing discourse about open versus closed source as if those were the only two choices, but they aren't the only two choices. And it's kind of like more productive, more forward thinking to acknowledge the fact that it's a gradient, it's a spectrum.

    **Bridget Todd:** That’s Sasha Luccioni, a leading researcher at a startup called Hugging Face. They run an online platform for testing and developing AI. It’s so popular they’ve been valued at 4.5 billion dollars. Sasha and her colleagues have a fresh take on the open source debate.

    **Sasha Luccioni:**  What point in the spectrum can I pick for this and this model? And I think it's important especially for policymakers to understand that - that it's not an us versus them. It’s not like a two camp situation. It's really like, let's pick what works for each model. And also there's no one size fits all solution depending on the model, depending on the data, depending on the usage, some point in that gradient is more or less fitting.

    **Bridget Todd:** The spectrum of openness Sasha talks about – it’s not just for a model’s code or the datasets. It can be for a lot more, like the documentation. And the so-called ‘weights’ that determine how it works. These are all decision points on openness, along with the usage terms. Sasha’s research at Hugging Face depends on openness. That’s because it’s all about how to measure and lower the environmental impact of language models. She says training the LLM, GPT3, emitted as much carbon as 500 transatlantic flights. And, she says, open source technology helps with sustainability in other ways too.

    **Sasha Luccioni:**  Definitely one of the reasons I joined Hugging Face was because I truly believe that by helping open source AI research, we can help the sustainability, the energy side of things, but also in terms of democratization, giving more people access to models that they can both use out of the box or they can fine tune them in order to fit their context better. I think that's like a net positive for everyone. And, for me, it's kind of like recycling or thrifting or buying something used and then patching it up, or changing it a little bit to work what you need it for. And I mean, I thrift like 95% of my clothes. So that's definitely a philosophy I'm really on board with. And for me open source is definitely much more sustainable in the long run because you're not constantly starting from scratch and also people can work together and so you have less wasted effort

    **Bridget Todd:** Sasha says a community initiative called “Big Science” is an example of this. About two years ago, Hugging Face backed 1,000 people from 60 countries in a collaboration to develop an open LLM called BLOOM.

    **Sasha Luccioni:**  It was literally a thousand researchers and volunteers from all over the world who were like, Hey, let's train a large language model together, because we don't have the resources to do it like each one of us separately. And it was great because we had people who were lawyers, we had people who were like specialists in archival studies to help get data from different places.Like, I mean, we had all sorts of people from all over the world and people who don't necessarily have a supercomputer on premise, who don't work in a big tech company that can give them access to some kind of computes to train these models.

    **Bridget Todd:** Open communities like this one could be directly affected by policies that either limit or encourage important research for alternatives.

    **Sasha Luccioni:**  During the big science project. I joined Hugging Face. 'cause I was like, yeah, this is the kind of work I wanna do. I don't wanna have to be secretive about what I'm doing. I wanna do it in an open source way and I wanna help other people who don't necessarily have the means to train these kinds of models. I want to help them also benefit from this technology. The fact that we had all these people involved in Big Science made the whole project and the ensuing model, much more representative of society, I feel. And that's important because when these models get used in downstream models or downstream tools or systems, then any kind of information that's implicitly encoded in the model will bubble up to the surface.

    **Bridget Todd:** So with all these gradients of openness, it’s not only the biggest AI companies developing LLMs. And that can be a good thing.There’s an open source alternative to ChatGPT called GPT4All. Amazingly, it works without an internet connection, and the LLMs are compressed so much that you can download them to any regular personal computer. GPT4All was launched by a New York startup called Nomic earlier this year, as a privacy preserving alternative to ChatGPT. Tens of thousands of people flocked to it. Here’s Nomic’s co-founder Andriy Mulyar.

    **Andriy Mulyar:** One of the biggest focuses that we have around GPT4All is making sure that privacy is the first thing we think about. In some sense, one of the core reasons behind why we even built GPT4All and the ecosystem of models that came in with it was because of all these large issues and concerns about privacy with people using OpenAI's models.

    **Bridget Todd:** You may not know this, but when you type prompts into ChatGPT, OpenAI can use whatever you type to further train their models. There have even been numerous privacy leaks because of it, both corporate and personal.

    **Andriy Mulyar:** The privacy angle that we focus on specifically is making sure that the application in its open source form, you can see all of the code. So we start out from that, that makes it safe. We make sure that everything's audited by the community and the next thing is that we make sure we align by all the laws and regulations across Europe and across the US. We don't gather user specific data whenever they use for instance the models. And we make sure that the models can run without access to any internet. So you can go in, once you download the models to your computer, you can turn off your internet. If you're stuck in the jungle and you don't have access to internet, you can ask it for help.

    **Bridget Todd:** Nomic’s mission is to improve the explainability and accessibility of AI. Their main software product is a data exploration tool for massive datasets, called Atlas. But Andriy believes GPT4All is important for them to devote resources to as a company.

    **Andriy Mulyar:** When you run a business, there are certain things you get the opportunity to do that you wouldn't be able to do if you weren't running a business. One of those is you have access to capital to be able to work on risky projects like GPT4All, purely because you want to not because you know there's some direct revenue driving source of it.

    **Bridget Todd:** Mainly, Andriy says he is motivated by a wish to see AI developed by more than just a handful of companies. But he also raises a question of values, and who decides how LLMs behave.

    **Andriy Mulyar:** So biases aren't always bad. So an example of a bias could be the model always, you know, prefers to greet you with a salutation before giving you a response. Right? That's a bias that might not be bad, but obviously there's biases that could be bad, right?. And one of these sort of important things with large language models is the fact that you can actually go in and customize this. So if you have your own examples of data that you would like your model to be able to output you can actually change that by training the model.

    **Bridget Todd:** Andriy offers the example of Open AI training ChatGPT not to output hateful statements. Today, GPT4All gives access to models fine-tuned not to offend, as well as some that aren't. Andriy says they’ve had some backlash from people criticizing them for giving more people access to LLMs that could be used for harm.

    **Andriy Mulyar:** The reality is like this technology isn't going away. The biggest thing is we need to learn how to live with it and how to be able to cope with the side effects that emerge from it. A lot of them will be positive, some of them are gonna be negative. Like one of the things that I think about quite a bit is like what happens in the 2024 election in the United States. You can go in and pick 10,000 people, get their Facebook profile and customize a chatbot that it pretends to be a human, to convince them to think one way or the other. And you can do that for, like, no cost at all. I guess the thing that keeps me awake at night is if. If we're gonna live in this inevitable world where we're surrounded by machines that can generate synthesized versions of information and all that information is being piped from one or two company servers, if there's a world where someone like OpenAI owns all the pipes for the information flow, and then they get the chance to manipulate that however they want, This is like why we do what we do. We wanna make sure that these generative AI models that exist and persist through the world are built with everyone's view into how the models are being created, not just a couple of organizations behind closed doors with unlimited resources.

    **Bridget Todd:** LLMs are here.Open source communities that do put people ahead of profits are crucial to unlocking the positive potential of generative AI. The challenge for builders and regulators is to find that balance. On the one hand, so generative AI isn’t developed or deployed in harmful ways, and on the other to empower independent researchers to contribute to how systems work.
    I'm Bridget Todd, thanks for listening to IRL:Online Life is Real Life, an original podcast from Mozilla, the nonprofit behind Firefox. For more about our guests, check out our show notes or visit irlpodcast.org. This season, we're talking about people over profit in AI. Mozilla. Reclaim the internet.
---
