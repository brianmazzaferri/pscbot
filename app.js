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
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
