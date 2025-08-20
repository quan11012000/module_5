import { useState } from "react";
import confetti from "canvas-confetti";

function Counter() {
    const [count, setCount] = useState(0);
    const [balloons, setBalloons] = useState([]);

    const increment = (number) => {
        const newValue = count + number;
        setCount(newValue);

        // nếu đạt mốc 10, 20, 50... thì bắn confetti + bóng bay
        if (newValue % 10 === 0 && newValue !== 0) {
            launchConfetti();
            launchBalloons();
        }
    };

    const launchConfetti = () => {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 },
            colors: ["#ff0", "#0ff", "#f0f", "#0f0", "#ff4500"],
        });
    };

    const launchBalloons = () => {
        const newBalloons = Array.from({ length: 8 }, (_, i) => ({
            id: Date.now() + i,
            left: Math.random() * 90 + "%",
            emoji: ["🎈", "🎉", "🎊", "✨"][Math.floor(Math.random() * 4)],
        }));
        setBalloons(newBalloons);
        setTimeout(() => setBalloons([]), 6000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 w-[500px] text-center space-y-10 relative z-10">
                <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg animate-pulse">
                    🌌 Ultimate Counter
                </h1>

                {/* số hiển thị */}
                <div
                    key={count}
                    className={`text-7xl font-extrabold text-transparent bg-clip-text 
            ${count >= 0
                        ? "bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 animate-[wiggle_1s_ease-in-out]"
                        : "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-[shake_0.6s_ease-in-out]"}
            drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]`}
                >
                    {count}
                </div>

                {/* nút */}
                <div className="flex justify-center gap-6 flex-wrap">
                    {/* tăng */}
                    <button
                        onClick={() => increment(1)}
                        className="px-8 py-4 rounded-2xl text-lg font-bold text-white
                       bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                       shadow-lg shadow-pink-500/50
                       transform transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-[0_0_20px_rgba(255,0,100,0.9)]"
                    >
                        ➕ Add 1
                    </button>
                    <button
                        onClick={() => increment(2)}
                        className="px-8 py-4 rounded-2xl text-lg font-bold text-white
                       bg-gradient-to-r from-blue-500 via-cyan-500 to-green-400
                       shadow-lg shadow-cyan-500/50
                       transform transition-all duration-300 hover:scale-110 hover:-rotate-2 hover:shadow-[0_0_20px_rgba(0,255,200,0.9)]"
                    >
                        ✌️ Add 2
                    </button>

                    {/* giảm */}
                    <button
                        onClick={() => increment(-1)}
                        className="px-8 py-4 rounded-2xl text-lg font-bold text-white
                       bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600
                       shadow-lg shadow-red-500/50
                       transform transition-all duration-300 hover:scale-110 hover:rotate-[-3deg] hover:shadow-[0_0_20px_rgba(255,50,50,0.9)]"
                    >
                        ➖ Minus 1
                    </button>
                    <button
                        onClick={() => increment(-2)}
                        className="px-8 py-4 rounded-2xl text-lg font-bold text-white
                       bg-gradient-to-r from-purple-600 via-pink-600 to-red-600
                       shadow-lg shadow-purple-500/50
                       transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-[0_0_20px_rgba(255,0,200,0.9)]"
                    >
                        🔻 Minus 2
                    </button>
                </div>
            </div>

            {/* bóng bay */}
            {balloons.map((b) => (
                <div
                    key={b.id}
                    className="absolute text-5xl animate-[floatUp_6s_linear] select-none"
                    style={{ left: b.left, bottom: "-60px" }}
                >
                    {b.emoji}
                </div>
            ))}

            {/* custom keyframes */}
            <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg) scale(1.1); }
          50% { transform: rotate(5deg) scale(1.3); }
        }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-10px); }
          80% { transform: translateX(10px); }
        }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }
        }
      `}</style>
        </div>
    );
}

export default Counter;
