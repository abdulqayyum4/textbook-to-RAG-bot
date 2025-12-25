# ADR-002: Single-file Python Implementation for Ingestion Pipeline

**Status**: Accepted
**Date**: 2025-12-25

## Context

The ingestion pipeline needs to crawl a Docusaurus site, extract content, chunk it, generate embeddings, and store them in Qdrant. The implementation approach needs to be decided - whether to use a modular multi-file approach or a single-file approach as specified in the requirements.

## Decision

- Implement the entire ingestion pipeline in a single main.py file
- Include all functions in one file: get_all_urls, extract_text_from_url, chunk_text, embed, create_collection, save_chunk_to_qdrant
- Use uv for Python project management
- Use environment variables for credential management via python-dotenv

## Alternatives

- **Multi-file modular approach**: Separate files for crawling, processing, embedding, and storage modules - would provide better organization and testability but violates requirement
- **Package-based structure**: Organize code into Python packages for different concerns - would improve maintainability but adds complexity
- **Class-based architecture**: Object-oriented approach with classes for different components - would provide better encapsulation but may be over-engineering

## Consequences

**Positive:**
- Simple to deploy and run (single file)
- Easy to understand and modify
- Meets the requirement for single-file implementation
- No complex import structure needed

**Negative:**
- Less maintainable as complexity grows
- Harder to unit test individual components
- May become unwieldy if functionality expands significantly
- Less reusable components

## References

- specs/001-ingestion-pipeline/plan.md
- specs/001-ingestion-pipeline/research.md
- specs/001-ingestion-pipeline/data-model.md