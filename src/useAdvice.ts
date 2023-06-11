import { useState, useEffect } from "react";

interface AdviceSlip {
  advice: String;
  id: number;
}

const AdviceSlip = () => {
  const [advice, setAdvice] = useState<AdviceSlip | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [trigger, setTrigger] = useState<number>(0);

  const regenerateAdvice = () => {
    setTrigger(prev => prev + 1);
  }

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.slip);
        setAdvice(data.slip);
        setLoading(false);
      } catch (error) {
        console.error("An error occurred while fetching advice:", error);
      }
    };

    fetchAdvice();
  }, [trigger]);

  return [advice, loading, regenerateAdvice] as [AdviceSlip | null, boolean, () => void];
};

export default AdviceSlip;
