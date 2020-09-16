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
      event.text.includes("Los Angeles") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Los Angeles, be sure to join <#C013J8GHT8B> to connect with others in your area!"
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
      event.text.includes("Boston") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Boston, be sure to join <#C013QRNRJ1Z> to connect with others in your area!"
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
      event.text.includes("Dallas") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned Dallas, be sure to join <#C013WM5EGNM> to connect with others in your area!"
      });
    }

    if (
      event.text.includes("London") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned London, be sure to join <#C013ULQKMPZ> to connect with others in your area!"
      });
    }
    
    if (
      event.text.includes("DC") &&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned DC, be sure to join <#C014QDS30KT> to connect with others in your area!"
      });
    }
    
    if (
      (event.text.includes("Raleigh") || event.text.includes("Durham") || event.text.includes("Chapel Hill"))&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned The Triangle, be sure to join <#C013UV3NPAQ> to connect with others in your area!"
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
      (event.text.includes("Australia") || event.text.includes("Singapore") || event.text.includes("Japan") || event.text.includes("Melbourne") || event.text.includes("Sydney") || event.text.includes("India ") || event.text.includes("apac") )&&
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
      (event.text.includes("Toronto") || event.text.includes("Ontario") )&&
      (event.channel === "C015EMK7Z9N" || event.channel === "C013W72L9L1")
    ) {
      const result = await app.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        thread_ts: event.ts,
        text:
          "Welcome aboard! :ship: I noticed you mentioned an area in Ontario, be sure to join <#C0147CFUJ8G> to connect with others in your area!"
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
Personally, I want to thank you for joining. Someone once told me that PreSales is the best profession that no one has ever heard of. *It is time to change that!* It is time to ensure that PreSales professions have a seat at the table and a voice in organizational decisions. PSC is here to bring awareness to the global community, provide resources, highlight thought leadership, and help elevate the brand of PreSales. If you are doing something interesting, we want to hear about it - PSC can be the platform that helps amplify your efforts.\n\n
In this Slack, you will get out what you put in. Our goal is provide a safe space where your questions can be answered. Also, you can come to this community to better understand how others are doing demos, managing relationships, growing their skills, and everything in between. We have people from ALL OVER THE WORLD in this community so hearing different perspectives may be the healthy friction that we all need to think differently. (GrowthMindset4life)\n\n
If you are looking for best practices for this Slack community, please review the <http://www.presalescollective.com/slack|PreSales Collective Slack Guidelines> page. In the <CKCAMR52S> channel, you will see that our channel directory is pinned to the group. Additionally, the Slackbot that messaged you when you joined is of help too! At PSC, we are obsessed with the first time user experience of this Slack environment.\n\n
My only ask is that you are active! Answer questions, join the industry and help channels, and be an engaged member of the community. If you need a break, take it because we will still be here. The community can be slow or overwhelming depending on how often you use Slack! Find the right channels for you and lean in. My best suggestion is to join the <C013QHYQ17Z> to meet others PreSales Professionals.\n\n
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
Personally, I want to thank you for joining. Someone once told me that PreSales is the best profession that no one has ever heard of. *It is time to change that!* It is time to ensure that PreSales professions have a seat at the table and a voice in organizational decisions. PSC is here to bring awareness to the global community, provide resources, highlight thought leadership, and help elevate the brand of PreSales. If you are doing something interesting, we want to hear about it - PSC can be the platform that helps amplify your efforts.\n\n
In this Slack, you will get out what you put in. Our goal is provide a safe space where your questions can be answered. Also, you can come to this community to better understand how others are doing demos, managing relationships, growing their skills, and everything in between. We have people from ALL OVER THE WORLD in this community so hearing different perspectives may be the healthy friction that we all need to think differently. (GrowthMindset4life)\n\n
If you are looking for best practices for this Slack community, please review the <http://www.presalescollective.com/slack|PreSales Collective Slack Guidelines> page. In the <CKCAMR52S> channel, you will see that our channel directory is pinned to the group. Additionally, the Slackbot that messaged you when you joined is of help too! At PSC, we are obsessed with the first time user experience of this Slack environment.\n\n
My only ask is that you are active! Answer questions, join the industry and help channels, and be an engaged member of the community. If you need a break, take it because we will still be here. The community can be slow or overwhelming depending on how often you use Slack! Find the right channels for you and lean in. My best suggestion is to join the <C013QHYQ17Z> to meet others PreSales Professionals.\n\n
Welcome to PSC!\n\n
James Kaikis\n
Co-Founder, PreSales Collective\n\n
PS -  I'm big on feedback (if you listen to the podcast, we talk about it all of the time) so please let me know how/if PSC is or isn't working for you - we want to be better and it takes people like you to get us there (I promise that I love constructive feedback and never take it personally). Also, if you have ideas for PSC or want to get involved, just shoot me a message and let's chat!`      
      });
  } catch(error){
    console.error(error);
  }
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
