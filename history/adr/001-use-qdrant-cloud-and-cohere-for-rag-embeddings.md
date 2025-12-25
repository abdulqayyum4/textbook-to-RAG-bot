# ADR-001: Use Qdrant Cloud and Cohere for RAG embeddings and vector storage

**Status**: Accepted
**Date**: 2025-12-25

## Context

The RAG chatbot requires a scalable vector database and high-quality text embeddings for semantic retrieval over a Docusaurus-based book. The system needs to crawl the book content, generate embeddings, and store them for efficient similarity search.

## Decision

- Use Cohere embedding models to generate vector representations of book content
- Use Qdrant Cloud (free tier) as the vector database for storing and querying embeddings
- Use Cohere's embed-english-v3.0 model for text embedding generation
- Use Qdrant collection named "rag_embedding" with 1024-dimensional vectors and cosine similarity

## Alternatives

- **OpenAI embeddings**: More expensive, vendor lock-in concerns, but mature ecosystem
- **Pinecone**: Commercial solution with good performance but higher cost than free tier
- **Weaviate**: Open-source alternative with cloud offering but potentially more complex setup
- **FAISS (local)**: Self-hosted solution offering full control but requiring infrastructure management
- **Milvus**: Open-source vector database but requires more operational overhead

## Consequences

**Positive:**
- Cohere provides strong semantic embeddings optimized for retrieval tasks
- Qdrant offers a free cloud tier, reducing initial infrastructure costs
- Qdrant provides metadata filtering and easy Python integration
- Both tools align well with a serverless, low-cost architecture
- Good performance for semantic search use case

**Negative:**
- Dependency on external APIs and network availability
- Free-tier limits on storage and throughput may require migration later
- Vendor lock-in to Cohere and Qdrant APIs
- Potential costs increase as usage grows beyond free tier

## References

- specs/001-ingestion-pipeline/plan.md
- specs/001-ingestion-pipeline/research.md
- specs/001-ingestion-pipeline/data-model.md