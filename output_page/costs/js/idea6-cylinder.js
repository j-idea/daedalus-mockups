const cylinderContainerName = 'containerForCylinder'

const cylinderSeriesWithOneScenarios = [{
    name: 'Education',
    data: [{
    y: 0.3,
    breakdownData: [
        {
        name: 'Absences',
        y: 0.2
        },
        {
        name: 'Closures',
        y: 0.1
        }
    ]
    }],
    dataLabels: {
        enabled: true,
        formatter: function() {
            return (this.y).toFixed(1) + '%';
        }
    }
}, {
    name: 'Life years',
    data:  [{
                y: 2.6,
                breakdownData: [
                    {
                    name: 'Infants',
                    y: 0.2
                    },
                    {
                    name: 'Adolescents',
                    y: 0.4
                    },
                    {
                    name: 'Working-age Adults',
                    y: 0.4
                    },
                    {
                    name: 'Retirement-age Adults',
                    y: 1.6
                    },
                ]
            }],
    dataLabels: {
        enabled: true,
        formatter: function() {
            return (this.y).toFixed(1) + '%';
        }
    }
}, {
    name: 'GDP',
    data: [{
    y: 0.4,
    breakdownData: [
        {
        name: 'Absences',
        y: 0.35
        },
        {
        name: 'Closures',
        y: 0.05
        }
    ]
    }],
    dataLabels: {
        enabled: true,
        formatter: function() {
            return (this.y).toFixed(1) + '%';
        }
    }
}]

const cylinderSeriesWithThreeScenarios = [{
    name: 'Education',
    data: [{
    y: 0.3,
    breakdownData: [
        {
        name: 'Absences',
        y: 0.2
        },
        {
        name: 'Closures',
        y: 0.1
        }
    ]
    },
    {
    y: 0.2,
    breakdownData: [
        {
        name: 'Absences',
        y: 0.05
        },
        {
        name: 'Closures',
        y: 0.15
        }
    ]
    },
    {
    y: 0.7,
    breakdownData: [
        {
        name: 'Absences',
        y: 0.2
        },
        {
        name: 'Closures',
        y: 0.5
        }
    ]
    }
    ],
    dataLabels: {
        enabled: true,
        formatter: function() {
            return (this.y).toFixed(1) + '%';
        }
    }
}, {
    name: 'Life years',
    data: [{
            y: 2.6,
            breakdownData: [
                {
                name: 'Infants',
                y: 0.2
                },
                {
                name: 'Adolescents',
                y: 0.4
                },
                {
                name: 'Working-age Adults',
                y: 0.4
                },
                {
                name: 'Retirement-age Adults',
                y: 1.6
                },
            ]
        },
        {
            y: 4.4,
            breakdownData: [
                {
                name: 'Infants',
                y: 0.2
                },
                {
                name: 'Adolescents',
                y: 0.4
                },
                {
                name: 'Working-age Adults',
                y: 0.4
                },
                {
                name: 'Retirement-age Adults',
                y: 3.4
                },
            ]
        },
        {
            y: 0.7,
            breakdownData: [
                {
                name: 'Infants',
                y: 0.1
                },
                {
                name: 'Adolescents',
                y: 0.1
                },
                {
                name: 'Working-age Adults',
                y: 0.2
                },
                {
                name: 'Retirement-age Adults',
                y: 0.4
                },
            ]
        }],
    dataLabels: {
        enabled: true,
        formatter: function() {
            return (this.y).toFixed(1) + '%';
        }
    }
}, {
    name: 'GDP',
    data: [{
    y: 0.4,
    breakdownData: [
        {
        name: 'Absences',
        y: 0.35
        },
        {
        name: 'Closures',
        y: 0.05
        }
    ]
    },
    {
    y: 0.3,
    breakdownData: [
        {
        name: 'Absences',
        y: 0.05
        },
        {
        name: 'Closures',
        y: 0.25
        }
    ]
    },
    {
    y: 0.2,
    breakdownData: [
        {
        name: 'Absences',
        y: 0.19
        },
        {
        name: 'Closures',
        y: 0.01
        }
    ]
    }
    ],
    dataLabels: {
        enabled: true,
        formatter: function() {
            return (this.y).toFixed(1) + '%';
        }
    }
}]

document.addEventListener('DOMContentLoaded', function () {
    const depth = 1000
    const aVerticalDistance = '250'
    let dataIsBrokenDown = false;
    let oneOrThreeScenariosSeries = cylinderSeriesWithOneScenarios;
    let chart;

    let cylinderChartSettings = {
        chart: {
            type: 'cylinder',
            options3d: {
                enabled: true,
                alpha: 25,
                beta: 25,
                viewDistance: 20,
                depth: depth
            },
            backgroundColor: 'transparent',
            style: {
                fontFamily: 'inherit'
            }
        },
        exporting: { enabled: false },
        title: {
            text: ''
        },
        xAxis: {
            visible: false,
            categories: ['Scenario 1', 'Scenario 2', 'Scenario 3']
        },
        yAxis: {
            visible: false,
        },
        legend: {
            align: 'right',
            itemStyle: {
                color: 'black'
            },
            borderWidth: '1',
            borderRadius: '5',
            backgroundColor: 'rgba(255,255,255,0.5)',
            // y: aVerticalDistance,
            floating: true,
            // borderColor: '#CCC',
            // borderWidth: 1,
            // shadow: false,
            layout: 'vertical',
            verticalAlign: 'middle'
        },
        tooltip: {
            headerFormat: '<small>{point.x}</small><br/>',
            pointFormat: '<b>{series.name}: {point.y}%</b>', // + '<br/>Absences: {point.breakdownData}%',
            useHTML: true
        },
        plotOptions: {
            cylinder: {
                stacking: 'normal',
                depth: depth,
                dataLabels: {
                    enabled: true,
                    align: 'center',
                    format: '{series.name}',
                    style: {
                    color: 'black',
                    textOutline: '1px white',
                    },
                    borderWidth: '1',
                    borderRadius: '5',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                },
                point: {
                    events: {
                        click: function() {
                            const clickedName = this.series.name
                            const seriesDataSource = oneOrThreeScenariosSeries.find(series => series.name === clickedName)

                            if (dataIsBrokenDown) {
                                this.series.chart.update(cylinderChartSettings);
                                dataIsBrokenDown = false;
                                return;
                            }

                            console.log(this.series.name)
                            const matchingSeries = this.series.chart.series.find(series => series.name === clickedName);

                            brokenDownData = matchingSeries.data[0].breakdownData
                            newSeriesInstances = brokenDownData.map((bdd, index) => {
                                return { name: `${clickedName}: ${bdd.name}`, data: [{y: bdd.y}], color: Highcharts.getOptions()[index] }
                            })
                            console.log(newSeriesInstances)
                            const newSeriesCollection = oneOrThreeScenariosSeries.flatMap((series, index) => {
                                const hexColor = Highcharts.getOptions().colors[index];
                                const rgbaColor = `rgba(${parseInt(hexColor.slice(1, 3), 16)}, ${parseInt(hexColor.slice(3, 5), 16)}, ${parseInt(hexColor.slice(5, 7), 16)}, 0.1)`;
                                return series.name === clickedName ? newSeriesInstances : {...series, color: rgbaColor};
                            });

                            console.log(oneOrThreeScenariosSeries)
                            console.log(newSeriesCollection)

                            const newChartSettings = {...cylinderChartSettings, series: newSeriesCollection}

                            chart.destroy()
                            chart = Highcharts.chart(cylinderContainerName, newChartSettings);

                            dataIsBrokenDown = true;
                        }
                    }
                }
            }
        },
        series: oneOrThreeScenariosSeries,
    }

    chart = Highcharts.chart(cylinderContainerName, cylinderChartSettings);


    const overlay = document.getElementById('overlay')
    const outputsDiv = document.querySelector('#outputs')

    if (!!overlay && !!outputsDiv) {
        const container = document.getElementById(cylinderContainerName);
        let containerOriginalWidth;
        let containerOriginalHeight;

        const overlayOriginalBackgroundColor = overlay.style.backgroundColor;
        overlay.style.transition = "background-color 0.5s ease"
        container.style.transition = "width 0.5s ease, height 0.5s ease, left 0.5s ease, right 0.5s ease, top 0.5s ease, bottom 0.5s ease";
        container.style.position = 'fixed'
        const originalLeft = '30%'
        const originalTop = `${(0-aVerticalDistance)}px`
        container.style.left = originalLeft
        container.style.top = originalTop

        const focusCylinder = () => {
            if (container.getAttribute("data-focused") !== "true") {
                container.setAttribute("data-focused", "true");
                console.log('focus')
                // Using actual width and height rather than css attributes because (maybe?) Highcharts is deleting the original
                // css values when it copies them into its chart, so they aren't present.
                containerOriginalWidth = container.offsetWidth;
                containerOriginalHeight = container.offsetHeight;
                const newWidth = outputsDiv.offsetWidth * 0.7
                const newLeft = '10%'
                // container.style.width = "1000px";
                // container.style.height = "1000px";
                container.style.left = newLeft;
                const heightOfInputs = (0 - document.getElementById('inputs').offsetHeight)
                container.style.top = `${heightOfInputs / 2}px`
                chart.setSize(newWidth, (0.8 * window.innerHeight))

                overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
            }
        }

        const unfocusCylinder = () => {
            if (container.getAttribute("data-focused") !== "false") {
                container.setAttribute("data-focused", "false");
                console.log('unfocus')
                // container.style.width = containerOriginalWidth;
                // container.style.height = containerOriginalHeight;
                container.style.left = originalLeft;
                container.style.top = originalTop;
                chart.setSize(containerOriginalWidth,containerOriginalHeight)

                overlay.style.backgroundColor = overlayOriginalBackgroundColor;
            }
        }

        const toggleCylinderSize = () => {
            if (container.getAttribute("data-focused") === "false") {
                unfocusCylinder()
            } else {
                focusCylinder()
            }
        }
        
        const centralAreaOfChartClassName = 'highcharts-series-group'
        const centralAreaOfChart = container.getElementsByClassName(centralAreaOfChartClassName)[0]

        centralAreaOfChart.addEventListener("click", () => {
            focusCylinder();
        });

        document.addEventListener("keypress", (event) => {
            if (container.dataset.active === "false") {
                return
            }

            if (event.key === "f") {
                container.dataset.focused === "true" ? unfocusCylinder() : focusCylinder();
            }


            if (event.key === "c") {
                oneOrThreeScenariosSeries = (oneOrThreeScenariosSeries === cylinderSeriesWithThreeScenarios) ? cylinderSeriesWithOneScenarios : cylinderSeriesWithThreeScenarios;


                chart.destroy();
                chart = Highcharts.chart(cylinderContainerName, {...cylinderChartSettings, series: oneOrThreeScenariosSeries});
            }
        });

        document.querySelectorAll("*").forEach(element => {
            element.addEventListener("click", (event) => {
                if (container.dataset.active === "false") {
                    return
                }

                let currentElement = event.target;
                let isInCentralAreaOfChart = false;
                while (currentElement) {
                    if (currentElement.classList && currentElement.classList.contains(centralAreaOfChartClassName)) {
                        isInCentralAreaOfChart = true;
                        break;
                    }
                    currentElement = currentElement.parentElement;
                }
                if (!isInCentralAreaOfChart) {
                    unfocusCylinder();
                }
            });
        });

        toggleCylinderSize();
    }
})