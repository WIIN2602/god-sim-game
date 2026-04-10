export const getInitialStat = (race) => {
  const stats = {
    'Human': { population: 20, faith: 100, power: 'Adaptability (สมดุล)' },
    'Elf': { population: 10, faith: 150, power: 'Forest Whisper (เวทมนตร์)' },
    'Orc': { population: 30, faith: 50, power: 'Blood Rage (การทหาร)' }
  };
  return stats[race] || stats['Human'];
};