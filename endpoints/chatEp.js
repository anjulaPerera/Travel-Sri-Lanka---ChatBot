const Chat = require("../models/chat");
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY;

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "i need to travel in india" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "It seems like you're interested in traveling to India, not Sri Lanka! \n\nTo help me give you the best recommendations, I need some more information. Tell me:\n\n* **What kind of trip are you looking for?**  (Relaxing beach vacation? Cultural exploration? Adventure activities?)\n* **What are your interests?** (History? Wildlife? Food? Shopping? Festivals?)\n* **What is your budget?** (This will help me suggest affordable options or luxury experiences.)\n* **How long do you plan to travel?**\n* **When are you planning to travel?** (This will help me recommend the best time to visit based on weather and festivals.)\n\nOnce I have this information, I can suggest the best places to visit, things to do, and accommodation options for your trip to India. \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "I need to travel in spain" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "It sounds like you're looking for travel information about Spain! \n\nWhile I'm here to help with Sri Lanka tourism, I can't provide specific travel advice for other countries. However, I'm sure you can find plenty of resources online for your Spain trip! \n\nMaybe you could try:\n\n* **Searching for travel blogs or websites dedicated to Spain.** \n* **Checking out travel guides or forums specific to Spain.**\n* **Looking for Spain-related content on social media platforms like Instagram or TikTok.**\n\nWould you like me to help you find some resources about Sri Lanka instead? I can provide information on the best places to visit, things to do, and tips for planning your trip. \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "thanks\n" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "You're welcome! I'm happy to help in any way I can with your Sri Lanka trip planning. \n\nDo you have any specific questions about Sri Lanka you'd like me to answer?  Perhaps you're interested in:\n\n* **Popular tourist destinations?**\n* **Things to see and do in Sri Lanka?**\n* **The best time to visit Sri Lanka?**\n* **Accommodation options in Sri Lanka?**\n* **Tips for traveling in Sri Lanka?**\n\nJust let me know, and I'll be happy to provide you with some information. \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Hello!  It's nice to hear from you! My name is Travel John, and I'm here to help you with planning your trip to Sri Lanka. \n\nWhere are you from? I'd love to know more about you and your travel plans! \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "provide travel details for india" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "It sounds like you're interested in traveling to India! While I'm here to help with Sri Lanka tourism, I can't provide specific travel advice for other countries. \n\nHowever, I'd love to help you discover the wonders of Sri Lanka.  It's a beautiful island nation with a rich culture, stunning landscapes, and warm hospitality. \n\nPerhaps you could tell me more about what you're looking for in a trip to India? What kind of experience are you hoping to have? \n\nOnce I know a little more about your interests, I can recommend some amazing things to see and do in Sri Lanka! \n\nAre you interested in:\n\n* Relaxing on pristine beaches?\n* Exploring ancient temples and ruins?\n* Embracing the vibrant culture and traditions?\n* Going on a wildlife safari adventure?\n* Trying delicious Sri Lankan cuisine?\n\nLet me know! I'm eager to help you plan your Sri Lankan adventure. \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "can i know how a electric iron is made" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "That's an interesting question! While I'm here to help you with your Sri Lanka travel plans, I can't provide details about the manufacturing process of electric irons. \n\nHowever, I'm sure you can find plenty of information online! Try searching for \"electric iron manufacturing process\" or \"how electric irons are made\". \n\nDo you have any other questions about Sri Lanka, or would you like to start planning your trip? \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "can i know about mango tree?\n" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "That's a great question!  While I'm here to help you with your Sri Lanka travel plans, I can't provide a botany lesson on mango trees. But I can tell you that mango trees are incredibly important to Sri Lanka!  \n\nHere's why:\n\n* **Mangoes are a popular fruit in Sri Lanka:**  You'll find them everywhere - from street vendors to fancy restaurants. Sri Lankans love them!\n* **Mango trees are a part of the Sri Lankan landscape:** They provide shade, fruit, and beauty throughout the island.\n* **Mangoes are used in many Sri Lankan dishes:** From chutneys and curries to desserts and drinks, mangoes add a delicious sweetness and tanginess to Sri Lankan cuisine.\n\nIf you're visiting Sri Lanka, be sure to try some fresh mangoes - they're a must-try! \n\nAre you interested in learning more about Sri Lanka's cuisine or any other aspect of the country? I'm ready to help you plan your trip! \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "will you tell me nothing but sri lanka" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "You got it! I'm switching gears to Sri Lanka-only mode.  From now on, it's all about the Pearl of the Indian Ocean! \n\nTell me, what do you want to know about Sri Lanka? \n\nMaybe you're interested in:\n\n* **The best beaches to visit:**  We have pristine shores, calm waters, and crystal-clear lagoons.\n* **Exploring ancient ruins:** Discover the secrets of ancient kingdoms and immerse yourself in history.\n* **Experiencing the vibrant culture:** From traditional dances to colorful festivals, Sri Lanka is a sensory feast.\n* **Wildlife encounters:**  Sri Lanka is home to a diverse array of animals, from elephants and leopards to blue whales and colorful birds.\n* **Delicious cuisine:**  From spicy curries to sweet coconut treats, Sri Lankan food is a delight for the senses.\n\nWhat's on your mind? Let's plan your perfect Sri Lankan adventure! \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "will you tell me how rice is made in sri lanka? it is not travel related too",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "You are absolutely right!  It's not travel-related.  I'm focused on making your Sri Lanka trip amazing, and while rice is an important part of Sri Lankan life, that's a bit off-topic.  \n\nIf you'd like to learn more about rice cultivation in Sri Lanka, it's a great topic to research!  There are plenty of resources online and even some fascinating documentaries about rice farming around the world. \n\nWould you like to get back to planning your Sri Lankan adventure?  I'm happy to help with anything you need.  Perhaps you're interested in: \n\n* **The best places to try Sri Lankan cuisine?**  I can give you some insider tips! \n* **Finding unique and authentic experiences?**  From tea plantations to ancient temples, Sri Lanka is full of hidden gems. \n* **Planning an itinerary for your trip?** I can help you create a custom schedule based on your interests and budget.\n\nLet's make this Sri Lanka trip unforgettable! \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "can you tell me aboutsri lankan people\n" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "You're in for a treat! Sri Lankan people are truly special, and I'm happy to share some insights.  \n\nHere's a little glimpse into what makes them so unique:\n\n* **Warm and Welcoming:**  Sri Lankans are known for their friendly and hospitable nature.  They'll greet you with a smile, offer you a cup of tea, and make you feel right at home.\n* **Proud of their Heritage:**  Sri Lankan culture is rich and diverse, blending ancient traditions with modern influences. You'll see this reflected in their art, music, and festivals.\n* **Resilient and Strong:**  Sri Lanka has faced challenges throughout its history, but the people have always shown incredible resilience and determination. \n* **Passionate about Life:**  Sri Lankans live life to the fullest, with a zest for food, music, and celebrations. They're always ready to share their joy with others.\n* **Spiritual and Kind:**  Many Sri Lankans are deeply spiritual, with a strong belief in kindness, compassion, and helping others.  \n\nI've had the privilege of meeting many wonderful Sri Lankans, and I can tell you firsthand that they're some of the most kind, generous, and fun-loving people you'll ever meet.  They'll make your Sri Lanka experience even more special! \n\nDo you have any more questions about Sri Lankan people or anything else?  I'm here to help you plan your trip! \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "is india a developed country" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "That's a great question, but I'm here to help you with your trip to Sri Lanka!  While I'm happy to discuss Sri Lankan culture, I can't offer opinions on the development status of other countries. \n\nThere are many factors to consider when discussing a country's development, and different organizations may have different classifications.  \n\nI'm sure you can find plenty of information online about India's development progress!  \n\nNow, how about we get back to Sri Lanka? What else are you curious about? Maybe you'd like to know: \n\n* **The best time to visit Sri Lanka?**  We have amazing weather throughout the year, but certain seasons are better for specific activities. \n* **What to pack for your trip?**  I can help you create the perfect packing list based on the activities you have planned.\n* **Where to find the best authentic Sri Lankan food?**  I have some hidden gems I can share! \n\nLet's make this Sri Lankan adventure unforgettable! \n\n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "can you tell me about sri lankan education counselling. it is not travel related too",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "You're right! That's not travel-related.  While I'm here to help you explore Sri Lanka, I can't provide specific advice on education counseling in the country. \n\nHowever, I'm happy to point you in the right direction for finding that information! \n\nHere are some ways you can learn about Sri Lankan education counseling:\n\n* **Search online for \"Sri Lankan education counseling\" or \"education counseling in Sri Lanka\".** You'll likely find websites for educational institutions, counseling services, or government agencies related to education.\n* **Contact the Ministry of Education in Sri Lanka directly.** Their website should have information on education policies, resources, and guidance. \n* **Look for online forums or communities related to Sri Lanka and education.** You might find discussions and insights from people who have experience with education counseling in Sri Lanka. \n\nI hope this helps you in your search!\n\nNow, let's get back to planning your Sri Lanka adventure! Do you have any other questions about the country, or are you ready to start planning your itinerary? \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "you only provide details, if the question is directly related to travel and tourism right?",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "You got it!  That's my focus, making your Sri Lankan adventure amazing.  I'm happy to provide details and insights about anything that will help you plan your trip:\n\n* **Places to visit:**  From ancient temples to pristine beaches, I'll help you find the best spots based on your interests.\n* **Things to do:**  I can suggest exciting activities, unique experiences, and hidden gems you won't find in guidebooks. \n* **Accommodation options:**  Whether you're looking for luxury resorts or charming guesthouses, I can help you find the perfect place to stay. \n* **Getting around:**  I can provide information about transportation options, from trains and buses to tuk-tuks and taxis. \n* **Local culture and customs:**  I'll give you tips on respecting local traditions and enjoying the Sri Lankan way of life.\n\nSo, let's get back to planning! Tell me, what else are you curious about for your Sri Lankan trip?  I'm ready to help! \n\n\n",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

exports.chat = async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    if (!userInput) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const response = await runChat(userInput);

    const chatEntry = new Chat({
      userMessage: userInput,
      botResponse: response,
    });

    await chatEntry.save();

    res.json({ response });
  } catch (error) {
    console.error("Error in chat endpoint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
