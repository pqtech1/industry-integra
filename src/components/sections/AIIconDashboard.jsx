import React from "react";

const agentTools = [
  { name: "Agno", image: "ai-solutions/tools/Agno.png" },
  { name: "Anthropic", image: "ai-solutions/tools/anthropic.png" },
  { name: "AutoGen", image: "ai-solutions/tools/autogen-ai.png" },
  { name: "Claude", image: "ai-solutions/tools/claude.png" },
  { name: "GitHub Copilot", image: "ai-solutions/tools/copilot.jpg" },
  { name: "CrewAI", image: "ai-solutions/tools/crew-ai.png" },
  { name: "DeepSeek", image: "ai-solutions/tools/deepseek.png" },
  { name: "FastAPI", image: "ai-solutions/tools/FastAPI.png" },
  { name: "Gemini", image: "ai-solutions/tools/gemini.png" },
  { name: "Grok", image: "ai-solutions/tools/grok.png" },
  { name: "Haystack", image: "ai-solutions/tools/Haystack.png" },
  { name: "Hugging Face", image: "ai-solutions/tools/Hugging Face-ai.png" },
  { name: "Instructor", image: "ai-solutions/tools/Instructor-ai.png" },
  { name: "LangChain", image: "ai-solutions/tools/LangChain-ai.png" },
  { name: "LangGraph", image: "ai-solutions/tools/Langgraph-ai.png" },
  { name: "LiteLLM", image: "ai-solutions/tools/LiteLLM-ai.png" },
  { name: "LlamaIndex", image: "ai-solutions/tools/lllama-index-ai.png" },
  { name: "Meta AI", image: "ai-solutions/tools/meta-ai.jpg" },
  { name: "NumPy", image: "ai-solutions/tools/numpy.png" },
  { name: "Ollama", image: "ai-solutions/tools/ollama.png" },
  { name: "OpenAI", image: "ai-solutions/tools/OpenAI-ai.png" },
  { name: "Pandas", image: "ai-solutions/tools/pandas.png" },
  { name: "Perplexity", image: "ai-solutions/tools/perplexity.png" },
  { name: "Pydantic", image: "ai-solutions/tools/Pydantic.png" },
  { name: "Python", image: "ai-solutions/tools/python.jpg" },
  {
    name: "Semantic Kernel",
    image: "ai-solutions/tools/Semantic-kernel-ai.jpg",
  },
  { name: "Smolagents", image: "ai-solutions/tools/Smolagents.png" },
  { name: "Swarm", image: "ai-solutions/tools/Swarm.jpg" },
  { name: "Tenacity", image: "ai-solutions/tools/Tenacity.png" },
  { name: "Typer", image: "ai-solutions/tools/Typer.png" },
];

export default function AIAgentsPythonStack() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
       

        {/* Grid - 4 per row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {agentTools.map((tool) => (
            <div
              key={tool.name}
              className="group bg-white rounded-2xl border border-gray-200 
                        
                         hover:shadow-xl hover:shadow-green-100
                         transition-all duration-300
                         p-8 flex flex-col items-center justify-center text-center"
            >
              {/* Bigger Image */}
              <div className="w-24 h-24 flex items-center justify-center mb-5">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="max-h-20 max-w-20 object-contain 
                             transition-transform duration-300 
                             group-hover:scale-110"
                />
              </div>

              <h3 className="text-base font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
