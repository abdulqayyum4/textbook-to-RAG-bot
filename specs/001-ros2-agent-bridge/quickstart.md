# Quickstart Guide: ROS 2 Agent Bridge Educational Content

## Overview
This guide provides the essential steps to get started with the ROS 2 educational content and run the examples.

## Prerequisites
- Basic Python programming knowledge
- Familiarity with command line interface
- Understanding of basic robotics concepts (optional but helpful)

## Environment Setup

### 1. Install ROS 2
1. Install ROS 2 Humble Hawksbill from the official ROS website
2. Set up your ROS 2 environment:
   ```bash
   source /opt/ros/humble/setup.bash
   ```
3. Create a workspace for examples:
   ```bash
   mkdir -p ~/ros2_examples_ws/src
   cd ~/ros2_examples_ws
   ```

### 2. Install Python Dependencies
```bash
pip3 install rclpy
```

### 3. Set up Docusaurus Environment (for content development)
1. Install Node.js (version 18 or higher)
2. Install Docusaurus globally:
   ```bash
   npm install -g @docusaurus/core@latest
   ```
3. Clone or access the documentation repository

## Running Examples

### Basic Publisher/Subscriber Example
1. Navigate to the examples directory
2. Source your ROS 2 environment:
   ```bash
   source /opt/ros/humble/setup.bash
   ```
3. Run the publisher:
   ```bash
   python3 simple_publisher.py
   ```
4. In a new terminal, run the subscriber:
   ```bash
   python3 simple_subscriber.py
   ```

### Python Agent Bridge Example
1. Ensure ROS 2 environment is sourced
2. Run the agent bridge example:
   ```bash
   python3 agent_bridge_example.py
   ```

## Building Documentation
1. Navigate to the documentation root
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the site:
   ```bash
   npm run build
   ```
4. Serve locally (for testing):
   ```bash
   npm run serve
   ```

## Validating Content
1. Check for broken links:
   ```bash
   npm run build
   # The build process will identify any broken internal links
   ```
2. Test all code examples in a ROS 2 environment
3. Verify diagrams render correctly in the documentation

## Troubleshooting
- If you get "command not found" for ROS 2 commands, ensure you've sourced the ROS 2 environment
- If Python examples fail, verify rclpy is installed: `python3 -c "import rclpy"`
- For documentation build errors, check Node.js version compatibility

## Next Steps
1. Read the ROS 2 fundamentals chapter to understand core concepts
2. Try the Python agent connection examples
3. Explore URDF basics with the provided examples