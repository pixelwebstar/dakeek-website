const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

// Manually load .env content since we don't have dotenv execution context
const envPath = path.resolve(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const match = envContent.match(/GEMINI_API_KEY=(.*)/);
const apiKey = match ? match[1].trim() : null;

console.log("Testing Gemini API Key:", apiKey ? "Found (starts with " + apiKey.substring(0, 4) + ")" : "Not Found");

async function test() {
    if (!apiKey) {
        console.error("No API key found in .env");
        return;
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello, are you working?");
        console.log("Response:", result.response.text());
        console.log("SUCCESS: Gemini API is working.");
    } catch (error) {
        console.error("FAILURE: Gemini API Error:");
        console.error(error);
    }
}

test();
