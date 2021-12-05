var svg = d3.select("svg"),
    margin = 200, // 通过 margin 外边距调整位置
    width = svg.attr("width") - margin,
    height = svg.attr("height") - margin;


//2. scaleBand离散比例尺 适用于年份等单位
const xScale = d3.scaleBand()
    .range([0, width]).padding(0.4)
const yScale = d3.scaleLinear()
    .range([height, 0])

const g = svg.append('g')
    .attr('transform', `translate(100,100)`)


d3.csv('data.csv').then((data) => {
    xScale.domain(data.map(item => item.year))
    yScale.domain([0, d3.max(data, val => val.value)]) //0~78

    g.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale))
    g.append('g')
        .call(d3.axisLeft(yScale).tickFormat(d => '$' + d).ticks(10))
})