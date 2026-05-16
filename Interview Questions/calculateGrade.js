const schoolData = [
    {
    class: "Math",
    students: [
    { name: "Alice", grade: 90, activities: ["Chess", "Debate"] },
    { name: "Bob", grade: 80, activities: ["Soccer", "Debate"] },
    ],
    },
    {
    class: "Science",
    students: [
    { name: "Charlie", grade: 85, activities: ["Chess", "Drama"] },
    { name: "Diana", grade: 95, activities: ["Soccer", "Drama"] },
    ],
    },
   ];

console.log(schoolData.flatMap(c => c.students.map(s => s.grade)));

console.log(calculateAverageGrade(schoolData));

function calculateAverageGrade(schoolData) {
    return schoolData
        .map(data => ({
            ...data,
            grade: data.students.map((item) => item.grade)
                .reduce((acc, curr) => { acc+curr/data.students.length }, 0),
        }));
}



/*
function calculateAverageGrade(schoolData) {
    return schoolData.map((data) => {
        return { class : data.class,
            grade: data.students.map((data) => data.grade).reduce((a, b) => a+b/data.students.length,0)
        }
    });
}*/