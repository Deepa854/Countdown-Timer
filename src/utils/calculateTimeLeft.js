export default function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = new Date(targetDate) - now;
  
    let timeLeft = {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  
    return timeLeft;
  }
  