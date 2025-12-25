// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1: LLM-Robot Convergence',
      items: [
        'llm-robot-convergence/index',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Cognitive Planning',
      items: [
        'cognitive-planning/index',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: VLA Capstone',
      items: [
        'vla-capstone/index',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: VLA Concepts Summary',
      items: [
        'vla-concepts-summary/index',
      ],
    },
  ],
};

module.exports = sidebars;