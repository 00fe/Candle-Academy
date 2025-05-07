# Candle Academy - Interactive Day Trading Course

Candle Academy is a modern web application designed to teach beginners the fundamentals of day trading through interactive lessons and real-time simulations.

## Features

- 📚 Comprehensive course structure with theory and practice
- 🎮 Interactive trading simulations using real market data
- 📊 Performance tracking and analytics
- 🏆 Achievement system to motivate learning
- 🌓 Dark/Light mode support
- 📱 Responsive design for all devices

## Tech Stack

- **Frontend:**
  - Next.js 14 (App Router)
  - React
  - TypeScript
  - Tailwind CSS
  - Chart.js for data visualization

- **UI Components:**
  - Headless UI
  - Heroicons
  - Custom components

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/candle-academy.git
   cd candle-academy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
candle-academy/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── course/            # Course content pages
│   │   ├── simulations/       # Trading simulation pages
│   │   └── dashboard/         # User dashboard
│   ├── components/            # Reusable components
│   │   ├── course/           # Course-specific components
│   │   ├── navigation/       # Navigation components
│   │   └── simulations/      # Simulation components
│   └── styles/               # Global styles
├── public/                    # Static assets
└── package.json              # Project dependencies
```

## Course Structure

1. **Introductory Modules**
   - What is Day Trading?
   - Key Terms and Concepts
   - Risk Management Basics

2. **Technical Analysis**
   - Candlestick Patterns
   - Support and Resistance
   - Trend Analysis

3. **Trading Strategies**
   - Scalping Basics
   - Breakout Trading
   - Range Trading

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Chart.js for the beautiful charts
- Tailwind CSS for the utility-first CSS framework
- Next.js team for the amazing framework
