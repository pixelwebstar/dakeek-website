const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const match = envContent.match(/GEMINI_API_KEY=(.*)/);
const apiKey = match ? match[1].trim() : null;

console.log("Testing Gemini API Key:", apiKey ? "Found" : "Not Found");

async function test() {
    if (!apiKey) return;
    const genAI = new GoogleGenerativeAI(apiKey);
    // TRY GEMINI PRO instead of flash
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    try {
        const result = await model.generateContent("Hello");
        console.log("SUCCESS with gemini-pro:", result.response.text());
    } catch (e) {
        console.error("FAIL gemini-pro:", e.message);
    }
}
test();
