export const config = {
    models: [
        {"name": "default", "value": "@cf/meta/llama-2-7b-chat-int8", "url": "https://developers.cloudflare.com/workers-ai/models/llama-2-7b-chat-int8"},
        {"name": "llama-2-7b-chat-int8", "value": "@cf/meta/llama-2-7b-chat-int8", "url": "https://developers.cloudflare.com/workers-ai/models/llama-2-7b-chat-int8"},
        {"name": "llama-3.1-8b-instruct", "value": "@cf/meta/llama-3.1-8b-instruct", "url": "https://developers.cloudflare.com/workers-ai/models/llama-3.1-8b-instruct"},
        {"name": "llama-3.1-70b-instruct", "value": "@cf/meta/llama-3.1-70b-instruct", "url": "https://developers.cloudflare.com/workers-ai/models/llama-3.1-70b-instruct"},
        {"name": "gemma-7b-it-lora", "value": "@cf/google/gemma-7b-it-lora", "url": "https://developers.cloudflare.com/workers-ai/models/gemma-7b-it-lora"},
        {"name": "qwen1.5-14b-chat-awq", "value": "@cf/qwen/qwen1.5-14b-chat-awq", "url": "https://developers.cloudflare.com/workers-ai/models/qwen1.5-14b-chat-awq"},
        {"name": "mistral-7b-instruct-v0.2", "value": "@hf/mistral/mistral-7b-instruct-v0.2", "url": "https://developers.cloudflare.com/workers-ai/models/mistral-7b-instruct-v0.2"},
        {"name": "mistral-7b-instruct-v0.2-lora", "value": "@cf/mistral/mistral-7b-instruct-v0.2-lora", "url": "https://developers.cloudflare.com/workers-ai/models/mistral-7b-instruct-v0.2-lora"},
    ]
} as const;
