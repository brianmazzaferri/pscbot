// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.event("message", async ({ event, context }) => {
  try {
    console.log(event);
    console.log(context);
    if (
      event.text.includes("Chicago") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Chicago, be sure to join <#C013CQASWHY> to connect with others in your area!"
      });
    }

    if (
      (event.text.includes("New York") || event.text.includes("NYC")) &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned New York, be sure to join <#C0139T2N3UP> to connect with others in your area!"
      });
    }

    if (
      (event.text.includes("Los Angeles") || event.text.includes("San Diego")) &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned a city in Southern California, be sure to join <#C013J8GHT8B> to connect with others in your area!"
      });
    }
    
    if (
      event.text.includes("Atlanta") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Atlanta, be sure to join <#C016RRG0E8Z> to connect with others in your area!"
      });
    }
    
    if (
      (event.text.includes("Boston") || event.text.includes("Providence")|| event.text.includes("Maine")|| event.text.includes("New Hampshire")|| event.text.includes("Vermont")|| event.text.includes("Massachusetts")|| event.text.includes("Rhode Island")) &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned a city in New England, be sure to join <#C013QRNRJ1Z> to connect with others in your area!"
      });
    } 
    
    if (
      event.text.includes("Austin") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Austin, be sure to join <#C013J925WPM> to connect with others in your area!"
      });   
    }
    
    if (
      (event.text.includes("Dallas") || event.text.includes("Fort Worth") || event.text.includes("Plano")) &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area near Dallas, be sure to join <#C013WM5EGNM> to connect with others in your area!"
      });
    }

    if (
      (event.text.includes("London") || event.text.includes(" UK ") || event.text.includes("United Kingdom")) &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned the UK, be sure to join <#C013ULQKMPZ> to connect with others in your area!"
      });
    }
    
    if (
      (event.text.includes("DC") || event.text.includes("Baltimore")) && !(event.text.includes("SFDC")) &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned a city near DC, be sure to join <#C014QDS30KT> to connect with others in your area!"
      });
    }
    
    if (
      (event.text.includes("Raleigh") || event.text.includes("Durham") || event.text.includes("Chapel Hill") || event.text.includes("Cary") || event.text.includes("Charlotte")|| event.text.includes(" NC")|| event.text.includes(" SC"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in the Carolinas, be sure to join <#C01N9FZQS1H> to connect with others in your area!"
      });
    }
    
    if (
      (event.text.includes("Germany") || event.text.includes("Austria") || event.text.includes("Switzerland") || event.text.includes("Berlin") || event.text.includes("Munich") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned a German-speaking country, be sure to join <#C0144S7A24E> to connect with others in your area!"
      });
    }
    
    if (
      (event.text.includes("Colorado") || event.text.includes("Denver") || event.text.includes("Boulder") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Colorado, be sure to join <#C014RTLFMH7> to connect with others in your area!"
      });
    }
    
    if (
      (event.text.includes("San Francisco") || event.text.includes("Oakland") || event.text.includes("San Jose") || event.text.includes("Mountain View") || event.text.includes("Bay Area") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned the bay area, be sure to join <#C013D739XCN> to connect with others in your area!"
      });
    }
  
    if (
      (event.text.includes("Australia") || event.text.includes("Singapore") || event.text.includes("Japan") || event.text.includes("Melbourne") || event.text.includes("Sydney") || event.text.includes("apac") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in APAC, be sure to join <#C014Y67SJBS> to connect with others in your area!"
      });
    }
    
    if (
      (event.text.includes("Toronto") || event.text.includes("Ontario") || event.text.includes("Canada") || event.text.includes("Edmonton") || event.text.includes("Vancouver") || event.text.includes("Calgary") || event.text.includes("Montreal") || event.text.includes("Ottawa") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in Canada, be sure to join <#C015T7WQF0X> to connect with others in your area!"
      });
    }    
    
    if (
      (event.text.includes("Netherlands") || event.text.includes("Belgium")|| event.text.includes("Norway")|| event.text.includes("Denmark")|| event.text.includes("Sweden")|| event.text.includes("Finland")|| event.text.includes("Poland")|| event.text.includes("France")|| event.text.includes("Italy")|| event.text.includes("Spain")|| event.text.includes("Portugal")|| event.text.includes("Greece")|| event.text.includes("Hungary")|| event.text.includes("Russia")|| event.text.includes("Ukraine")|| event.text.includes("Romania")|| event.text.includes("Czech Republic")|| event.text.includes("Portugal")|| event.text.includes("Serbia")|| event.text.includes("Bulgaria")|| event.text.includes("Slovakia")|| event.text.includes("Croatia")|| event.text.includes("Luxembourg") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in Europe, be sure to join <#C014D55978F> to connect with others in your area!"
      });
    } 
    
    if (
      (event.text.includes("Director") || event.text.includes("Manager") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an SE Leadership title, be sure to join <#C015C68L78T> to connect with other SE Leaders!"
      });
    } 
    
    if (
      (event.text.includes("Peloton") || event.text.includes("peloton") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Peloton, be sure to join <#C019M9W9HB9> to connect with other Peloton enthusiasts!"
      });
    } 
    
    if (
      (event.text.includes(" Bread ") || event.text.includes("sourdough") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned bread, be sure to join <#C014NEJU2QH> to connect with other bread enthusiasts!"
      });
    }     
    
    if (
      (event.text.includes("books") || event.text.includes("reading") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned books, be sure to join <#C0146EHBE5B> to discover great new PreSales books!"
      });
    }
    
    if (
      (event.text.includes("Exploring New Opportunities") || event.text.includes("exploring new opportunities") || event.text.includes("job opportunities") || event.text.includes("Exploring new opportunities") || event.text.includes("new opportunities") || event.text.includes("New opportunities") || event.text.includes("New Opportunities") || event.text.includes("exploring opportunities") || event.text.includes("Exploring Opportunities") || event.text.includes("Exploring opportunities") || event.text.includes("new Opportunities") || event.text.includes("new opportunity"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you're exploring new opportunities, be sure to join <#CQTG1JA02> to stay abreast of postings!"
      });
    }
      
    if (
      (event.text.includes("Utah")|| event.text.includes("Provo")||event.text.includes("Salt Lake City"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned a city in Utah, be sure to join <#C015M0YLCDQ> to connect with others in your area!"
      });
    }
  
    if (
      (event.text.includes("Spain") || event.text.includes("Madrid") || event.text.includes("Barcelona"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Spain, be sure to join <#C01L7MMDD0U> to connect with others in your area!"
      });
    }
    
    if (
      (event.text.includes("Egypt") || event.text.includes("UAE") || event.text.includes("Dubai") || event.text.includes("Abu Dhabi") || event.text.includes("Qatar") || event.text.includes("Kuwait") || event.text.includes("Saudia Arabia") || event.text.includes("Bahrain") || event.text.includes("Morocco") || event.text.includes("Tunisia") || event.text.includes("Lebanon"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in the Middle East, be sure to join <#C01M56UFT6J> to connect with others in your area!"
      });
    }

    if (
      (event.text.includes("Ireland") || event.text.includes("Dublin"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in Ireland, be sure to join <#C018DLSCYBY> to connect with others in your area!"
      });
    }
	
    if (
      (event.text.includes("Arizona") || event.text.includes("Phoenix") || event.text.includes("Scottsdale") || event.text.includes("Tucson") || event.text.includes("Tempe"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in Arizona, be sure to join <#C016LLGAXU2> to connect with others in your area!"
      });
    }
	
    if (
      (event.text.includes("Seattle") || event.text.includes("Bellevue"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area near Seattle, be sure to join <#C01EYD0G30E> to connect with others in your area!"
      });
    }
	
    if (
      (event.text.includes("Minneapolis") || event.text.includes("St. Paul") || event.text.includes("Minnesota"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in Minnesota, be sure to join <#C019LM8AY9L> to connect with others in your area!"
      });
    }
	
    if (
      event.text.includes("Africa") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Africa, be sure to join <#C01NLV3297F> to connect with others in your area!"
      });   
    }
	
    if (
      (event.text.includes("Florida") || event.text.includes("Miami") || event.text.includes("Orlando") || event.text.includes("Jacksonville") || event.text.includes("Tampa") || event.text.includes("Lauderdale"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in Florida, be sure to join <#C01R6QWBP2N> to connect with others in your area!"
      });
    }
	
    if (
      event.text.includes("Indianapolis") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Indianapolis, be sure to join <#C01KC0T3B9T> to connect with others in your area!"
      });   
    }
	
    if (
      event.text.includes(" India ") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned India, be sure to join <#C016GA6RQKW> to connect with others in your area!"
      });   
    }
	
    if (
      (event.text.includes("Netherlands") || event.text.includes("Belgium") || event.text.includes("Luxembourg"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in Benelux, be sure to join <#C01ARNG7FC2> to connect with others in your area!"
      });
    }
	  
    if (
      (event.user != "U012N53R2JZ" && event.user != "U013K053EPN" && event.user != "UKCAMQE3G" ) &&
      (event.channel === "C022YTE455E")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.user,
        text:
          "Hello! You have attempted to post in <#C022YTE455E>, which is a restricted channel. Please use the Submit Pitch workflow to submit your post instead"
      });   
      const result2 = await app.client.chat.delete({
        token: process.env.JK_TOKEN,
        channel: event.channel,
	ts: event.ts,
        text:
          "Hello! You have attempted to post in <#C022YTE455E>, which is a restricted channel. Please use the New Pitch workflow to submit your post instead"
      });  
    }
    
    if (
      (event.text.includes("!test"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
        const result = await app.client.chat.postMessage({
        token: process.env.JK_TOKEN,
        channel: event.user,
        as_user: true,
        text:
`Hello!\n\n
Welcome to PreSales Collective and our global slack community. We appreciate you joining and helping grow the awareness of our incredible profession. It is amazing to see this community come together! We hope that you are taking advantage of the programs, podcast, webinars, blogs, newsletter, and everything that PSC has to offer.\n\n
Personally, I want to thank you for joining. Someone once told me that PreSales is the best profession that no one has ever heard of. *It is time to change that!* It is time to ensure that PreSales professionals have a seat at the table and a voice in organizational decisions. PSC is here to bring awareness to the global community, provide resources, highlight thought leadership, and help elevate the brand of PreSales. If you are doing something interesting, we want to hear about it - PSC can be the platform that helps amplify your efforts.\n\n
In this Slack, you will get out what you put in. Our goal is to provide a safe space where your questions can be answered. Also, you can come to this community to better understand how others are doing demos, managing relationships, growing their skills, and everything in between. We have people from ALL OVER THE WORLD in this community so hearing different perspectives may be the healthy friction that we all need to think differently. (GrowthMindset4life)\n\n
If you are looking for best practices for this Slack community, please review the <http://www.presalescollective.com/slack|PreSales Collective Slack Guidelines> page. In the <#CKCAMR52S> channel, you will see that our channel directory is pinned to the group. Additionally, the Slackbot that messaged you when you joined is of help too! At PSC, we are obsessed with the first time user experience of this Slack environment.\n\n
*My only ask is that you are active! Please log into this Slack instance at least once per week to ensure you are responding to private messages and keeping engaged with your peers via your favorite PSC channels.*\n\n
If you need a break, take it because we will still be here. The community can be slow or overwhelming depending on how often you use Slack! Find the right channels for you and lean in. My best suggestion is to join the <#C013QHYQ17Z> to meet others PreSales Professionals.\n\n
Welcome to PSC!\n\n
James Kaikis\n
Co-Founder, PreSales Collective\n\n
PS -  I'm big on feedback (if you listen to the podcast, we talk about it all of the time) so please let me know how/if PSC is or isn't working for you - we want to be better and it takes people like you to get us there (I promise that I love constructive feedback and never take it personally). Also, if you have ideas for PSC or want to get involved, just shoot me a message and let's chat!`      
         });
    } 
    
  } catch (error) {
    console.error(error);
  }
});

app.event("reaction_removed", async ({ event, context }) => {
  try {
    console.log(event);
    if (
      event.reaction === "please-reply-in-thread"
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.item.channel,
        thread_ts: event.item.ts,
        text:
          "Hello! This is just a gentle reminder to please use the 'start a thread' action on a message to respond to it, rather than posting a new message in channel. This helps keep conversations focused and reduces noise for the whole community. Thank you for being a valued member of PSC!"
      });
    }
  } catch(error){
    console.error(error);
  }
});

app.event("team_join", async ({ event, context }) => {
  try {
      const result = await app.client.chat.postMessage({
        token: process.env.JK_TOKEN,
        channel: event.user.id,
        as_user: true,
        text:
`Hello!\n\n
Welcome to PreSales Collective and our global slack community. We appreciate you joining and helping grow the awareness of our incredible profession. It is amazing to see this community come together! We hope that you are taking advantage of the programs, podcast, webinars, blogs, newsletter, and everything that PSC has to offer.\n\n
Personally, I want to thank you for joining. Someone once told me that PreSales is the best profession that no one has ever heard of. *It is time to change that!* It is time to ensure that PreSales professionals have a seat at the table and a voice in organizational decisions. PSC is here to bring awareness to the global community, provide resources, highlight thought leadership, and help elevate the brand of PreSales. If you are doing something interesting, we want to hear about it - PSC can be the platform that helps amplify your efforts.\n\n
In this Slack, you will get out what you put in. Our goal is to provide a safe space where your questions can be answered. Also, you can come to this community to better understand how others are doing demos, managing relationships, growing their skills, and everything in between. We have people from ALL OVER THE WORLD in this community so hearing different perspectives may be the healthy friction that we all need to think differently. (GrowthMindset4life)\n\n
If you are looking for best practices for this Slack community, please review the <http://www.presalescollective.com/slack|PreSales Collective Slack Guidelines> page. In the <#CKCAMR52S> channel, you will see that our channel directory is pinned to the group. Additionally, the Slackbot that messaged you when you joined is of help too! At PSC, we are obsessed with the first time user experience of this Slack environment.\n\n
*My only ask is that you are active! Please log into this Slack instance at least once per week to ensure you are responding to private messages and keeping engaged with your peers via your favorite PSC channels.*\n\n
If you need a break, take it because we will still be here. The community can be slow or overwhelming depending on how often you use Slack! Find the right channels for you and lean in. My best suggestion is to join the <#C013QHYQ17Z> to meet others PreSales Professionals.\n\n
Welcome to PSC!\n\n
James Kaikis\n
Co-Founder, PreSales Collective\n\n
PS -  I'm big on feedback (if you listen to the podcast, we talk about it all of the time) so please let me know how/if PSC is or isn't working for you - we want to be better and it takes people like you to get us there (I promise that I love constructive feedback and never take it personally). Also, if you have ideas for PSC or want to get involved, just shoot me a message and let's chat!`      
      });
  } catch(error){
    console.error(error);
  }
});

app.event("member_joined_channel", async ({ event, context }) => {
  try {
      if ((event.channel === "G01NTJL7FDM" || event.channel === "G01PCJYQLK1" ||event.channel === "G01PQ9F3V1B" ||event.channel === "G01QH6YC35E" ||event.channel === "G01PTJ3H6LT" ||event.channel === "G01PLJUDUUW" ||event.channel === "G01R36MKW80" ||event.channel === "G01QDBQEKPC" ||event.channel === "C01PYBW5TT9" ||event.channel === "G01QS0S5RPT" ||event.channel === "G01QDBQA2SW" ||event.channel === "G01QS0S31UZ" ||event.channel === "G01R36MNMMW" ||event.channel === "G01PYJDK8BZ" ||event.channel === "G01PYJDMTJB" ) && event.inviter !== "U013K053EPN" && event.inviter !== "U012N53R2JZ" && event.inviter !== "UKCAMQE3G"){
                const result = await app.client.conversations.kick({
                token: process.env.U_TOKEN,
                channel: event.channel,
                user: event.user
                });
        
                const result2 = await app.client.chat.postMessage({
                token:context.botToken,
                channel: event.inviter,
                text: "Greetings! It seems you have tried to add a user to a restricted channel. These channels are exclusive to paid members of the PreSales Leadership Collective, please contact <@U012N53R2JZ> or <@UKCAMQE3G> if you have further questions."
                });
      };

  } catch(error){
    console.error(error);
  }
});

// The open_modal shortcut opens a plain old modal
app.shortcut('moderate_message', async ({ shortcut, ack, client }) => {

  try {
    // Acknowledge shortcut request
    await ack();
    console.log(shortcut.channel);
    if ((shortcut.user.id === "U013K053EPN") || (shortcut.user.id === "U012N53R2JZ") || (shortcut.user.id === "UKCAMQE3G")||
        (shortcut.channel.id === "C0144S7A24E" && ((shortcut.user.id === "U01499BUKRR") || (shortcut.user.id === "U0145HJUK9S") || (shortcut.user.id === "U01608PKVGU"))) ||
	(shortcut.channel.id === "C015T7WQF0X" && ((shortcut.user.id === "U0155QZLAD6") || (shortcut.user.id === "U01F0UB7XME") || (shortcut.user.id === "U01DHSWLT8V")))
       ){
	    
      const result = await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: {
	"type": "modal",
	"callback_id": "delete_and_notify",
	"submit": {
		"type": "plain_text",
		"text": "Delete Message",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"title": {
		"type": "plain_text",
		"text": "Delete & Notify",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"block_id":shortcut.channel.id,
			"text": {
				"type": "mrkdwn",
				"text": "*User & Message:*"
			}
		},
		{
			"type": "section",
			"block_id": "messageuser",
			"text": {
				"type": "mrkdwn",
				"text": shortcut.message.user
			}
		},
		{
			"type": "section",
			"block_id": shortcut.message.ts,
			"text": {
				"type": "mrkdwn",
				"text": shortcut.message.text
			}
		},		
		{
			"type": "input",
			"block_id": "message",
			"label": {
				"type": "plain_text",
				"text": "Message to send original poster (from PSCBot)",
				"emoji": true
			},
			"element": {
				"type": "plain_text_input",
				"action_id":"messagecontent",
				"multiline": true
			}
		}
	]
}
    });
    } else {
    // Call the views.open method using one of the built-in WebClients
    const result1 = await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: {
        type: "modal",
        title: {
          type: "plain_text",
          text: "Message Moderation"
        },
        close: {
          type: "plain_text",
          text: "Close"
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Apologies, but you cannot take this action as you do not have moderation permissions"
            }
          }
        ]
      }
    });
    }
    console.log(result1);
  }
  catch (error) {
    console.error(error);
  }
});

app.view('delete_and_notify', async ({ ack, body, view, client, context }) => {
  // Acknowledge the view_submission event
  await ack();

  // Message the user
  try {
	  console.log("view.blocks[1].text");
	  console.log(view.blocks[1].text);	  
	  console.log("BODY");
	  console.log(body);
	  console.log("VIEW");
	  console.log(view);
	  console.log("VIEW.STATE.VALUES.MESSAGE");
	  console.log(view.state.values.message);
	  
	  const result1 = await client.chat.delete({
		  token: process.env.JK_TOKEN,
		  channel:view.blocks[0].block_id,
		  ts:view.blocks[2].block_id
	  });
	  
	  let msg = view.state.values.message.messagecontent.value + "\n\n*Deleted Message:*\n\n" + view.blocks[2].text.text;
	  const result = await client.chat.postMessage({
		  token:context.botToken,
		  channel:view.blocks[1].text.text,
		  text:msg
  	  });
  } catch (error) {
    console.error(error);
  }

});

app.shortcut('channelannouncement', async ({ shortcut, ack, client }) => {

  try {
    // Acknowledge shortcut request
    await ack();
    console.log(shortcut.channel);
    if ((shortcut.user.id === "U013K053EPN") || (shortcut.user.id === "U012N53R2JZ") || (shortcut.user.id === "UKCAMQE3G") || (shortcut.user.id === "U015JA25BUL")){
	    
      const result = await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: {
	"type": "modal",
	"callback_id": "atchannelmodal",
	"submit": {
		"type": "plain_text",
		"text": "Submit",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"title": {
		"type": "plain_text",
		"text": "@Channel Tool",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Enter your desired @channel message below*"
			}
		},
		{
			"type": "input",
			"block_id": "channelselect",
			"element": {
				"type": "conversations_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select channel",
					"emoji": true
				},
				"action_id": "multi_users_select-action"
			},
			"label": {
				"type": "plain_text",
				"text": "Select channel",
				"emoji": true
			}
		},
		{
			"type": "input",
			"block_id": "channelmessage",
			"element": {
				"type": "plain_text_input",
				"multiline": true,
				"action_id": "plain_text_input-action"
			},
			"label": {
				"type": "plain_text",
				"text": "Message",
				"emoji": true
			}
		}
	]
}
    });
    } else {
    // Call the views.open method using one of the built-in WebClients
    const result1 = await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: {
        type: "modal",
        title: {
          type: "plain_text",
          text: "Permission Denied"
        },
        close: {
          type: "plain_text",
          text: "Close"
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Apologies, but you cannot take this action as you do not have @channel permissions"
            }
          }
        ]
      }
    });
    }
    console.log(result1);
  }
  catch (error) {
    console.error(error);
  }
});

app.view('atchannelmodal', async ({ ack, body, view, client, context }) => {
  // Acknowledge the view_submission event
  await ack();

  // Message the user
  try {	  
	  console.log("BODY");
	  console.log(body);
	  console.log("VIEW");
	  console.log(view);
	  console.log("VIEW.STATE.VALUES.MESSAGE");
	  console.log(view.state.values.message);
	  
	  let msg = "<!channel>\n" + "insert message here" + "\nposted by " + "insert user here"
	  const result = await client.chat.postMessage({
		  token:context.botToken,
		  channel:"C02E2PV2CAF",
		  text:msg
  	  });
  } catch (error) {
    console.error(error);
  }

});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
