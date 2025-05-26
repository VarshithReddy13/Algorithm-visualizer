class AlgorithmVisualizer {
    constructor() {
        this.array = [];
        this.arraySize = 20;
        this.speed = 5;
        this.isRunning = false;
        this.currentStep = 0;
        this.steps = [];
        
        // Initialize D3 visualization
        this.svg = d3.select('#visualization')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '400px');
            
        this.setupEventListeners();
        this.generateNewArray();
    }

    setupEventListeners() {
        // Array size control
        const arraySizeInput = document.getElementById('array-size');
        const sizeValue = document.getElementById('size-value');
        arraySizeInput.addEventListener('input', (e) => {
            this.arraySize = parseInt(e.target.value);
            sizeValue.textContent = this.arraySize;
            this.generateNewArray();
        });

        // Speed control
        const speedInput = document.getElementById('speed');
        const speedValue = document.getElementById('speed-value');
        speedInput.addEventListener('input', (e) => {
            this.speed = parseInt(e.target.value);
            speedValue.textContent = this.speed;
        });

        // Buttons
        document.getElementById('generate').addEventListener('click', () => this.generateNewArray());
        document.getElementById('start').addEventListener('click', () => this.startVisualization());
        document.getElementById('pause').addEventListener('click', () => this.pauseVisualization());
        document.getElementById('step').addEventListener('click', () => this.stepVisualization());
    }

    generateNewArray() {
        this.array = Array.from({ length: this.arraySize }, () => 
            Math.floor(Math.random() * 100) + 1
        );
        this.currentStep = 0;
        this.steps = [];
        this.updateVisualization();
    }

    updateVisualization() {
        const width = this.svg.node().getBoundingClientRect().width;
        const barWidth = width / this.array.length;
        const maxHeight = 300;

        const bars = this.svg.selectAll('rect')
            .data(this.array);

        // Remove old bars
        bars.exit().remove();

        // Add new bars
        const newBars = bars.enter()
            .append('rect')
            .attr('x', (d, i) => i * barWidth)
            .attr('y', d => maxHeight - (d * maxHeight / 100))
            .attr('width', barWidth - 2)
            .attr('height', d => d * maxHeight / 100)
            .attr('fill', '#007bff');

        // Update existing bars
        bars.merge(newBars)
            .transition()
            .duration(100)
            .attr('x', (d, i) => i * barWidth)
            .attr('y', d => maxHeight - (d * maxHeight / 100))
            .attr('height', d => d * maxHeight / 100);
    }

    async bubbleSort() {
        const n = this.array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    // Swap elements
                    [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
                    this.updateVisualization();
                    await this.delay();
                }
            }
        }
    }

    delay() {
        return new Promise(resolve => 
            setTimeout(resolve, 1000 / this.speed)
        );
    }

    async startVisualization() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        document.getElementById('start').disabled = true;
        document.getElementById('pause').disabled = false;
        document.getElementById('step').disabled = true;
        document.getElementById('generate').disabled = true;
        
        await this.bubbleSort();
        
        this.isRunning = false;
        document.getElementById('start').disabled = false;
        document.getElementById('pause').disabled = true;
        document.getElementById('step').disabled = false;
        document.getElementById('generate').disabled = false;
    }

    pauseVisualization() {
        this.isRunning = false;
        document.getElementById('start').disabled = false;
        document.getElementById('pause').disabled = true;
        document.getElementById('step').disabled = false;
        document.getElementById('generate').disabled = false;
    }

    stepVisualization() {
        // Implement step-by-step visualization
    }
}

// Initialize the visualizer when the page loads
window.addEventListener('load', () => {
    new AlgorithmVisualizer();
}); 