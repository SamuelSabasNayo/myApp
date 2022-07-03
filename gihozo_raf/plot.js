let xLabels1 = [],
    yLabels1 = [],
    xLabels2 = [],
    yLabels2 = [], result = 0;

const getData = async () => {
    const response = await fetch('test.csv'),
        data = await response.text();

    // console.log(data);

    const usefulData = data.split('\n'),
        table = usefulData.slice(1);

        // console.log(usefulData);
        // console.log(table);

    table.forEach(row => {
        const column = row.split(',')
            pClass = column[0],
            yLabels2.push(pClass),
            
            sex = column[1],
            xLabels1.push(sex),
            xLabels2.push(sex),

            age = column[2],
            yLabels1.push(age),
            
            survived = column[3];

            // console.log(column[3]);
            // console.log(pClass);

            // console.log(pClass, sex, age, survived);
            // console.log(xLabels1, ylabels1);
            // console.log(xLabels2, yLabels2);
    });

};

// const getData = async () => {
//     const response = await fetch('test copy.csv'),
//         data = await response.text();

//     // console.log(data);

//     const usefulData = data.split('\n'),
//         table = usefulData.slice(1);

//         // console.log(usefulData);
//         // console.log(table);

//     table.forEach(row => {
//         const column = row.split(',')
//             pClass = column[0],
//             yLabels2.push(pClass),
            
//             sex = column[1],
//             xLabels1.push(sex),
//             xLabels2.push(sex),

//             age = column[2],
//             yLabels1.push(age),
            
//             survived = column[3];

//             // console.log(column);
//             // console.log(pClass);

//             // passenger.push({pClass, sex, age, survived});
            
//             // console.log(pClass, sex, age, survived);
//             // console.log(xLabels1, ylabels1);
//             // console.log(xLabels2, yLabels2);
//     });

// };


const displayChart1 = async () => {
    await getData();

    const ctx = document.getElementById('myChart1').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xLabels1,
            datasets: [{
                label: 'AGE against SEX',
                data: yLabels1,
                backgroundColor: [ 'rgba(54, 162, 235, 0.2)' ],
                borderColor: [ 'rgba(54, 162, 235, 1)' ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, ticks) {
                            return `${value} years`;
                        }
                    }
                }
            }
        }
    });
};

displayChart1();

const displayChart2 = async () => {
    await getData();

    const ctx = document.getElementById('myChart2').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xLabels2,
            datasets: [{
                label: 'PClass against SEX',
                data: yLabels2,
                backgroundColor: [ 'black' ],
                borderColor: [ 'black' ],
                borderWidth: 1
            }]
        },
    });
};

displayChart2();

const displayChart3 = async () => {
    await getData();

    const ctx = document.getElementById('myChart3').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xLabels1.slice(0, 99),
            datasets: [{
                label: 'AGE against SEX for 100 datasets',
                data: yLabels1.slice(0, 99),
                backgroundColor: [ 'green' ],
                borderColor: [ 'green' ],
                borderWidth: 1
            }]
        },
    });
};

displayChart3();

const displayChart4 = async () => {
    await getData();

    const ctx = document.getElementById('myChart4').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xLabels2.slice(0, 99),
            datasets: [{
                label: 'PClass against SEX for 100 datasets',
                data: yLabels2.slice(0, 99),
                backgroundColor: [ 'grey' ],
                borderColor: [ 'grey' ],
                borderWidth: 1
            }]
        },
    });
};

displayChart4();


const displayChart5 = async () => {
    await getData();

    const ctx = document.getElementById('myChart5').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLabels2.slice(0, 99),
            datasets: [{
                label: 'PClass against SEX for 100 datasets',
                data: yLabels2.slice(0, 99),
                backgroundColor: [ 'wheat' ],
                borderColor: [ 'wheat' ],
                borderWidth: 1
            }]
        },
    });
};

displayChart5();

const displayChart6 = async () => {
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];
    
    const data = {
        labels: labels,
        datasets: [{
            label: 'Line Chart dataset',
            data: [0, 10, 5, 2, 20, 30, 45],
            backgroundColor: 'skyblue',
            borderColor: 'skyblue',
        }]
    };
    
    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart6'),
        config
    ); 
};

displayChart6();


const displayChart7 = async () => {
    const data = {
        labels: [
            'Died',
            'Survived'
        ],
        datasets: [{
            label: 'Pie Chart dataset',
            data: [55, 45],
            backgroundColor: [
                // 'grey',
                '#ff8080',
                // 'rgb(255, 205, 86)'
                '#BADA55'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'pie',
        data: data,
    };

    const myChart = new Chart(
        document.getElementById('myChart7'),
        config
    );
};

displayChart7();


const displayChart8 = async () => {
    const data = {
        labels: [
            'PClass 1',
            'PClass 2',
            'PClass 3'
        ],
        datasets: [{
            label: 'Pie Chart dataset',
            data: [130, 220, 400],
            backgroundColor: [
                '#b35900',
                '#ff8000',
                '#ffb366'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
    };

    const myChart = new Chart(
        document.getElementById('myChart8'),
        config
    );
};

displayChart8();
