# Algorithm Visualizer

An interactive visualization tool for algorithms built with D3.js. This project provides a visual representation of sorting algorithms, starting with Bubble Sort, with the architecture designed to easily add more algorithms in the future.

## 🚀 Features

### Core Functionality
- Interactive visualization of Bubble Sort algorithm
- Real-time animation of sorting process
- Adjustable array size (5-50 elements)
- Customizable animation speed
- Play/Pause/Step controls
- Random array generation

### Technical Features
- Responsive design that adapts to window size
- Smooth animations using D3.js transitions
- Modular code structure for easy algorithm additions
- State management for visualization control
- Event-driven architecture

## 🛠️ Technologies Used

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - D3.js v7 (Data Visualization Library)

## 📋 Implementation Details

### Project Structure
```
algorithm-visualizer/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── visualizer.js       # Core visualization logic
└── README.md          # Documentation
```

### Key Components

#### AlgorithmVisualizer Class
- Manages the visualization state
- Handles user interactions
- Controls the sorting process
- Updates the visual representation

#### Visualization Features
- Dynamic bar height representation
- Smooth transitions between states
- Responsive layout
- Interactive controls

## 🚀 Setup and Usage

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/algorithm-visualizer.git
   cd algorithm-visualizer
   ```

2. **Run the Project**
   - Open `index.html` in a modern web browser
   - No build process required - runs directly in the browser

3. **Using the Visualizer**
   - Adjust array size using the slider (5-50 elements)
   - Set animation speed (1-10)
   - Click "Generate New Array" to create a new random array
   - Use "Start" to begin sorting
   - "Pause" to stop the current operation
   - "Step" for step-by-step visualization

## 🔮 Future Enhancements

### Planned Algorithms
- Quick Sort
- Merge Sort
- Heap Sort
- Insertion Sort
- Selection Sort

### Additional Features
- Color coding for compared/swapped elements
- Comparison counter
- Time complexity display
- Multiple algorithm comparison view
- Custom array input
- Save/load array states

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Update documentation for new features
- Write clean, maintainable code

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- D3.js community for the amazing visualization library
- Contributors and users of the project
