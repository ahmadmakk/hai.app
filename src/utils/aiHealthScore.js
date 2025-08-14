export const calculateHealthScore = (lifestyleData) => {
  let score = 100; // Start with a perfect score

  // Example scoring logic based on lifestyle choices
  if (lifestyleData.diet === 'unhealthy') {
    score -= 20;
  }
  if (lifestyleData.exerciseFrequency < 3) {
    score -= 15;
  }
  if (lifestyleData.sleepQuality === 'poor') {
    score -= 10;
  }
  if (lifestyleData.smoking) {
    score -= 30;
  }
  if (lifestyleData.alcoholConsumption > 2) {
    score -= 15;
  }

  return Math.max(score, 0); // Ensure score does not go below 0
};

export const getHealthScoreDescription = (score) => {
  if (score >= 80) {
    return 'Excellent';
  } else if (score >= 60) {
    return 'Good';
  } else if (score >= 40) {
    return 'Fair';
  } else {
    return 'Poor';
  }
};