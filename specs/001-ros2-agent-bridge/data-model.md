# Data Model: ROS 2 Agent Bridge Educational Content

## Overview
This document defines the content entities and structures for the educational content about connecting Python agents to ROS 2.

## Content Entities

### Chapter
- **Name**: Unique identifier for the chapter
- **Title**: Display title for the chapter
- **Description**: Brief overview of the chapter content
- **LearningObjectives**: List of specific skills/knowledge learners will gain
- **Prerequisites**: Knowledge required before reading this chapter
- **Sections**: List of section entities that make up the chapter
- **Examples**: List of example entities included in the chapter
- **Diagrams**: List of diagram entities referenced in the chapter
- **KeyTerms**: Glossary terms defined in the chapter

### Section
- **Title**: Section heading
- **Content**: Markdown content for the section
- **Type**: Content type (explanation, example, exercise, summary)
- **ParentChapter**: Reference to parent chapter
- **Order**: Position within the parent chapter

### Example
- **Name**: Unique identifier for the example
- **Title**: Display title for the example
- **Description**: Brief explanation of what the example demonstrates
- **Code**: The actual code content (in appropriate language)
- **Explanation**: Text explaining the code and its functionality
- **RelatedConcepts**: List of concepts demonstrated by the example
- **Difficulty**: Level (beginner, intermediate)
- **RunInstructions**: Steps to run/test the example

### Diagram
- **Name**: Unique identifier for the diagram
- **Title**: Display title for the diagram
- **Description**: Brief explanation of what the diagram illustrates
- **Type**: Diagram type (architecture, flow, structure, etc.)
- **FileReference**: Path to the diagram file
- **RelatedConcepts**: List of concepts illustrated by the diagram

### GlossaryTerm
- **Term**: The term being defined
- **Definition**: Clear, concise definition
- **RelatedTerms**: Other terms related to this term
- **FirstAppearance**: Chapter where this term first appears

## Content Relationships

### Chapter-Section Relationship
- One chapter contains many sections
- Sections have a defined order within a chapter
- Sections belong to exactly one chapter

### Chapter-Example Relationship
- One chapter may include many examples
- Examples may be referenced by multiple chapters
- Examples have a difficulty level appropriate for the chapter

### Chapter-Diagram Relationship
- One chapter may reference many diagrams
- Diagrams may be shared across multiple chapters
- Diagrams support understanding of specific concepts

## Content Validation Rules

### Chapter Validation
- Each chapter must have 1-3 learning objectives
- Each chapter must have a clear title and description
- Chapters must have 2-10 sections (to maintain appropriate length)
- Chapter content must be suitable for the target audience (ages 15-25)

### Example Validation
- Each example must have working code that can be tested
- Examples must be appropriately labeled with difficulty level
- Examples must have clear explanations of how they demonstrate concepts
- Code examples must be in Python using rclpy for ROS 2 interaction

### Diagram Validation
- Each diagram must have a clear title and description
- Diagrams must be in SVG format for scalability
- Diagrams must be relevant to the concepts being taught
- Diagrams must be accessible with appropriate alt text

## State Transitions

### Content Creation Workflow
1. **Draft**: Initial content creation
2. **Review**: Peer review and validation
3. **Revise**: Based on feedback
4. **Final**: Ready for publication
5. **Published**: Live on documentation site

## Content Chunking for RAG

### Chunking Strategy
- Each chapter will be chunked as a major unit
- Sections within chapters will form sub-chunks
- Individual examples will be chunked separately for targeted retrieval
- Key concepts will be identified for cross-referencing

### Metadata for RAG
- Difficulty level
- Target audience (beginner-intermediate)
- Related concepts
- Prerequisites
- Learning objectives