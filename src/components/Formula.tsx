interface Data {
  [key: string]: (number | string)[];
}

export function calculateAverage(data: Data): number {
  let totalSum = 0;
  let totalCoefficient = 0;

  for (let subject in data) {
    const grades = data[subject];
    const coefficient = Number(grades[0]);
    let weightedSum = 0;

    if (grades.length === 3) {
      weightedSum = Number(grades[1]) * 0.3 + Number(grades[2]) * 0.7;
    } else if (grades.length === 4) {
      weightedSum = Number(grades[1]) * 0.4 + Number(grades[2]) * 0.4 + Number(grades[3]) * 0.2;
    }

    totalSum += weightedSum * coefficient;
    totalCoefficient += coefficient;
  }

  return totalSum / totalCoefficient;
}
